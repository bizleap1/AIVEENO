"use client";

export type DiscoveryAnalyticsEventName =
  | "discovery_cta_click"
  | "discovery_form_submit_attempt"
  | "discovery_form_submit_success"
  | "discovery_form_submit_error"
  | "discovery_form_unconfigured";

export interface DiscoveryAnalyticsPayload {
  event: DiscoveryAnalyticsEventName;
  area_of_interest?: string;
  source_context?: string;
  status?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | undefined>
    ) => void;
  }
}

/**
 * Emits non-PII conversion events to Google Tag Manager / GA4 when configured.
 * Strictly never forwards names, emails, companies, or free-text message bodies.
 */
export function trackDiscoveryEvent({
  event,
  area_of_interest,
  source_context,
  status,
}: DiscoveryAnalyticsPayload): void {
  if (typeof window === "undefined") return;

  try {
    const safeParams: Record<string, string | undefined> = {
      area_of_interest: area_of_interest || undefined,
      source_context: source_context || undefined,
      status: status || undefined,
    };

    window.dataLayer = Array.isArray(window.dataLayer)
      ? window.dataLayer
      : [];
    window.dataLayer.push({
      event,
      ...safeParams,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", event, safeParams);
    }
  } catch {
    // Non-blocking telemetry safeguard
  }
}

