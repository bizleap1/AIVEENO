import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import {
  discoveryEnquirySchema,
  type DiscoveryEnquiryErrorResponse,
  type DiscoveryEnquiryInput,
  type DiscoveryEnquiryParsed,
} from "@/lib/discovery";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const MAX_PAYLOAD_BYTES = 32 * 1024;

const ipHits = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || "local";
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  if (ipHits.size > 500) {
    for (const [key, timestamps] of ipHits.entries()) {
      const fresh = timestamps.filter((t) => t > windowStart);
      if (fresh.length === 0) {
        ipHits.delete(key);
      } else {
        ipHits.set(key, fresh);
      }
    }
  }

  const existing = (ipHits.get(ip) ?? []).filter((t) => t > windowStart);
  if (existing.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = existing[0] ?? now;
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000)
    );
    return { allowed: false, retryAfterSeconds };
  }

  existing.push(now);
  ipHits.set(ip, existing);
  return { allowed: true, retryAfterSeconds: 0 };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function deliverViaResend(
  data: DiscoveryEnquiryParsed,
  referenceId: string
): Promise<{ ok: true } | { ok: false }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.DISCOVERY_TO_EMAIL?.trim();
  if (!apiKey || !toEmail) {
    return { ok: false };
  }

  const fromEmail =
    process.env.DISCOVERY_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  const subject = `Discovery Call Enquiry [${referenceId}] — ${data.areaOfInterest}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111312; line-height: 1.55;">
      <h2 style="margin: 0 0 12px 0;">New Discovery Call Request</h2>
      <p style="margin: 0 0 16px 0; color: #4A524D;">Reference: <strong>${escapeHtml(referenceId)}</strong></p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr><td style="padding: 6px 0; font-weight: 600;">Full Name</td><td style="padding: 6px 0;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Work Email</td><td style="padding: 6px 0;">${escapeHtml(data.workEmail)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Company</td><td style="padding: 6px 0;">${escapeHtml(data.company)}</td></tr>
        ${data.roleTitle ? `<tr><td style="padding: 6px 0; font-weight: 600;">Role / Title</td><td style="padding: 6px 0;">${escapeHtml(data.roleTitle)}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; font-weight: 600;">Area of Interest</td><td style="padding: 6px 0;">${escapeHtml(data.areaOfInterest)}</td></tr>
        ${data.companySize ? `<tr><td style="padding: 6px 0; font-weight: 600;">Company Size</td><td style="padding: 6px 0;">${escapeHtml(data.companySize)}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; font-weight: 600;">Source Context</td><td style="padding: 6px 0;">${escapeHtml(data.sourceContext)} (${escapeHtml(data.pageSource)})</td></tr>
      </table>
      <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #D9DDDA;">
        <div style="font-weight: 600; margin-bottom: 6px;">Priorities / Context</div>
        <div style="white-space: pre-wrap;">${escapeHtml(data.priorities)}</div>
      </div>
    </div>
  `.trim();

  const text = [
    `New Discovery Call Request (${referenceId})`,
    `Full Name: ${data.fullName}`,
    `Work Email: ${data.workEmail}`,
    `Company: ${data.company}`,
    data.roleTitle ? `Role / Title: ${data.roleTitle}` : null,
    `Area of Interest: ${data.areaOfInterest}`,
    data.companySize ? `Company Size: ${data.companySize}` : null,
    `Source Context: ${data.sourceContext} (${data.pageSource})`,
    "",
    "Priorities / Context:",
    data.priorities,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.workEmail,
      subject,
      html,
      text,
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    console.error(
      `[discovery-enquiry] Resend dispatch failed with HTTP ${response.status}.`
    );
    return { ok: false };
  }

  return { ok: true };
}

async function deliverViaWebhook(
  data: DiscoveryEnquiryParsed,
  referenceId: string
): Promise<{ ok: true } | { ok: false }> {
  const webhookUrl = process.env.DISCOVERY_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { ok: false };
  }

  const webhookSecret = process.env.DISCOVERY_WEBHOOK_SECRET?.trim();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (webhookSecret) {
    headers.Authorization = `Bearer ${webhookSecret}`;
    headers["X-Webhook-Secret"] = webhookSecret;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      type: "discovery_call_enquiry",
      referenceId,
      receivedAt: new Date().toISOString(),
      enquiry: {
        fullName: data.fullName,
        workEmail: data.workEmail,
        company: data.company,
        roleTitle: data.roleTitle || undefined,
        areaOfInterest: data.areaOfInterest,
        companySize: data.companySize || undefined,
        priorities: data.priorities,
        sourceContext: data.sourceContext,
        pageSource: data.pageSource,
      },
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    console.error(
      `[discovery-enquiry] Webhook dispatch failed with HTTP ${response.status}.`
    );
    return { ok: false };
  }

  return { ok: true };
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "RATE_LIMITED",
        message:
          "Too many enquiry requests were sent from this connection. Please wait a few minutes before trying again.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfterSeconds) },
      }
    );
  }

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const declaredBytes = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(declaredBytes) && declaredBytes > MAX_PAYLOAD_BYTES) {
      return NextResponse.json<DiscoveryEnquiryErrorResponse>(
        {
          ok: false,
          code: "INVALID_JSON",
          message: "Request payload exceeds the maximum allowed size.",
        },
        { status: 413 }
      );
    }
  }

  let body: unknown;
  try {
    const rawText = await request.text();
    if (rawText.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json<DiscoveryEnquiryErrorResponse>(
        {
          ok: false,
          code: "INVALID_JSON",
          message: "Request payload exceeds the maximum allowed size.",
        },
        { status: 413 }
      );
    }
    body = JSON.parse(rawText);
  } catch {
    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "INVALID_JSON",
        message: "Invalid request payload. Please submit valid JSON data.",
      },
      { status: 400 }
    );
  }

  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim().length > 0
  ) {
    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Unable to validate enquiry submission.",
      },
      { status: 400 }
    );
  }

  const parsed = discoveryEnquirySchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof DiscoveryEnquiryInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key as keyof DiscoveryEnquiryInput] = issue.message;
      }
    }

    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Please review the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const hasResendConfig = Boolean(
    process.env.RESEND_API_KEY?.trim() &&
      process.env.DISCOVERY_TO_EMAIL?.trim()
  );
  const hasWebhookConfig = Boolean(process.env.DISCOVERY_WEBHOOK_URL?.trim());

  if (!hasResendConfig && !hasWebhookConfig) {
    console.warn(
      "[discovery-enquiry] Delivery rejected (503): no email or webhook delivery credentials configured."
    );
    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "DELIVERY_NOT_CONFIGURED",
        message:
          "Enquiry delivery is not configured on the server for this environment yet. None of your details have been transmitted.",
      },
      { status: 503 }
    );
  }

  const referenceId = `AV-${randomUUID().slice(0, 8).toUpperCase()}`;

  try {
    if (hasResendConfig) {
      const resendResult = await deliverViaResend(parsed.data, referenceId);
      if (!resendResult.ok) {
        return NextResponse.json<DiscoveryEnquiryErrorResponse>(
          {
            ok: false,
            code: "DELIVERY_FAILED",
            message:
              "We could not complete enquiry delivery right now. Please try again shortly.",
          },
          { status: 502 }
        );
      }
    } else if (hasWebhookConfig) {
      const webhookResult = await deliverViaWebhook(parsed.data, referenceId);
      if (!webhookResult.ok) {
        return NextResponse.json<DiscoveryEnquiryErrorResponse>(
          {
            ok: false,
            code: "DELIVERY_FAILED",
            message:
              "We could not complete enquiry delivery right now. Please try again shortly.",
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      {
        ok: true,
        code: "ENQUIRY_RECEIVED" as const,
        referenceId,
      },
      { status: 200 }
    );
  } catch {
    console.error("[discovery-enquiry] Unexpected delivery exception.");
    return NextResponse.json<DiscoveryEnquiryErrorResponse>(
      {
        ok: false,
        code: "DELIVERY_FAILED",
        message:
          "We could not complete enquiry delivery right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method Not Allowed. Use POST to submit an enquiry." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
