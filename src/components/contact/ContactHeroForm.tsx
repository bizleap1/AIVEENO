"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, Lock } from "lucide-react";
import {
  CONTACT_AREA_OF_INTEREST_OPTIONS,
  discoveryEnquirySchema,
  type ContactAreaOfInterest,
  type DiscoveryEnquiryInput,
  type DiscoveryEnquiryResponse,
} from "@/lib/discovery";
import { trackDiscoveryEvent } from "@/lib/analytics";

/**
 * Aiveeno — Contact / Book a Discovery Call (/contact)
 * SECTION 01: HERO + DISCOVERY ENQUIRY FORM (Asymmetric Dark/Light Architectural Split)
 *
 * - Left ~45% (#111312 Dark Graphite): Conversation framing & business-first reassurance.
 * - Right ~55% (#F5F7F6 Light Editorial Form Surface): Minimal executive enquiry form.
 * - Real client + server validation via Zod, honeypot spam protection, and honest
 *   delivery status handling (never fakes submission success when delivery credentials are absent).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type FormSubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; referenceId: string }
  | { status: "unconfigured"; message: string }
  | { status: "error"; message: string };

interface ContactHeroFormProps {
  initialInterest?: ContactAreaOfInterest;
  initialSourceContext?: string;
}

export default function ContactHeroForm({
  initialInterest = "AI Business Transformation",
  initialSourceContext = "Contact Page Direct",
}: ContactHeroFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    areaOfInterest: initialInterest,
    priorities: "",
    sourceContext: initialSourceContext,
    pageSource: "/contact",
    website: "",
  });

  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof DiscoveryEnquiryInput, string>>
  >({});
  const [submitState, setSubmitState] = useState<FormSubmitState>({
    status: "idle",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field in fieldErrors) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof DiscoveryEnquiryInput];
        return next;
      });
    }
    if (submitState.status === "error" || submitState.status === "unconfigured") {
      setSubmitState({ status: "idle" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = discoveryEnquirySchema.safeParse(formData);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof DiscoveryEnquiryInput, string>> =
        {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in nextErrors)) {
          nextErrors[key as keyof DiscoveryEnquiryInput] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setSubmitState({
        status: "error",
        message: "Please review the highlighted fields before sending your request.",
      });
      return;
    }

    setFieldErrors({});
    setSubmitState({ status: "submitting" });

    trackDiscoveryEvent({
      event: "discovery_form_submit_attempt",
      area_of_interest: formData.areaOfInterest,
      source_context: formData.sourceContext,
    });

    try {
      const response = await fetch("/api/discovery-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let payload: DiscoveryEnquiryResponse | null = null;
      try {
        payload = (await response.json()) as DiscoveryEnquiryResponse;
      } catch {
        payload = null;
      }

      if (response.ok && payload?.ok) {
        trackDiscoveryEvent({
          event: "discovery_form_submit_success",
          area_of_interest: formData.areaOfInterest,
          source_context: formData.sourceContext,
          status: payload.code,
        });
        setSubmitState({
          status: "success",
          referenceId: payload.referenceId,
        });
        return;
      }

      if (
        response.status === 503 ||
        (payload && !payload.ok && payload.code === "DELIVERY_NOT_CONFIGURED")
      ) {
        trackDiscoveryEvent({
          event: "discovery_form_unconfigured",
          area_of_interest: formData.areaOfInterest,
          source_context: formData.sourceContext,
          status: "DELIVERY_NOT_CONFIGURED",
        });
        setSubmitState({
          status: "unconfigured",
          message:
            payload && !payload.ok
              ? payload.message
              : "Enquiry delivery is not configured for this environment yet.",
        });
        return;
      }

      if (payload && !payload.ok && payload.fieldErrors) {
        setFieldErrors(payload.fieldErrors);
      }

      const errorStatus =
        payload && !payload.ok ? payload.code : `HTTP_${response.status}`;
      trackDiscoveryEvent({
        event: "discovery_form_submit_error",
        area_of_interest: formData.areaOfInterest,
        source_context: formData.sourceContext,
        status: errorStatus,
      });

      setSubmitState({
        status: "error",
        message:
          payload && !payload.ok
            ? payload.message
            : "Unable to send your request right now. Please try again shortly.",
      });
    } catch {
      trackDiscoveryEvent({
        event: "discovery_form_submit_error",
        area_of_interest: formData.areaOfInterest,
        source_context: formData.sourceContext,
        status: "NETWORK_ERROR",
      });
      setSubmitState({
        status: "error",
        message:
          "Network error while contacting the enquiry endpoint. Your entered details have been preserved.",
      });
    }
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      fullName: "",
      workEmail: "",
      company: "",
      priorities: "",
      website: "",
    }));
    setFieldErrors({});
    setSubmitState({ status: "idle" });
  };

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[62px] lg:pt-[66px]">
      <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 xl:pt-20 pb-16 sm:pb-20 lg:pb-24 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
            {/* Left ~45%: Dark Graphite Conversation Context */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-7 lg:pt-2">
              <motion.div
                initial={{ opacity: 0.9, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: transitionEase, delay: 0.04 }}
                className="inline-flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-4 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Start a Conversation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0.9, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, ease: transitionEase, delay: 0.1 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[54px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] max-w-[540px]"
              >
                Let&apos;s discuss what&apos;s next for your business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0.9, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: transitionEase, delay: 0.18 }}
                className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#AEB3AF] leading-[1.6] font-normal max-w-[490px]"
              >
                Tell us about your business priorities, technology challenges or transformation goals. We&apos;ll use that context to understand how we might help.
              </motion.p>

              <motion.div
                initial={{ opacity: 0.9, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: transitionEase, delay: 0.24 }}
                className="pt-5 sm:pt-6 border-t border-white/[0.12] space-y-2.5 max-w-[470px]"
              >
                <div className="w-7 h-px bg-[#C9A35B]/85" aria-hidden="true" />
                <p className="font-sans text-[15px] sm:text-[16px] font-medium text-[#F5F7F6] tracking-[-0.01em] pt-1">
                  Business-first conversations. Practical next steps.
                </p>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#9FA5A1] leading-[1.58]">
                  Initial discussions focus on operational priorities, current system constraints and whether an AI transformation or cloud engagement is justified.
                </p>
              </motion.div>
            </div>

            {/* Right ~55%: Crisp Light Editorial Form Panel */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0.94, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="lg:col-span-7 scroll-mt-[84px]"
            >
              <div className="rounded-[4px] border border-[#D9DDDA] bg-[#F5F7F6] text-[#111312] p-6 sm:p-8 lg:p-8 xl:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                {submitState.status === "success" ? (
                  <div className="py-6 sm:py-8 space-y-5" role="status">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#0D1B2A]/[0.12] bg-[#EEF1F0] text-[#111312]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                        Enquiry Delivered
                      </div>
                      <h2 className="font-sans font-medium text-[24px] sm:text-[28px] text-[#111312] tracking-[-0.025em] leading-[1.15]">
                        Discovery call request received.
                      </h2>
                      <p className="font-sans text-[15px] sm:text-[15.5px] text-[#3B4A5A] leading-[1.6] max-w-[540px]">
                        Thank you, {formData.fullName}. Your enquiry regarding{" "}
                        <span className="font-medium text-[#111312]">
                          {formData.areaOfInterest}
                        </span>{" "}
                        has been delivered to our team. We will review your context
                        and follow up at{" "}
                        <span className="font-medium text-[#111312]">
                          {formData.workEmail}
                        </span>
                        —submitting this form does not confirm a scheduled calendar
                        appointment.
                      </p>
                    </div>

                    <div className="border-t border-[#0D1B2A]/[0.10] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="font-mono text-[12px] text-[#56616B]">
                        Reference: {submitState.referenceId}
                      </span>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-[#111312]/[0.24] bg-transparent px-5 text-[14px] font-sans font-medium text-[#111312] hover:bg-[#EAEFED] transition-colors duration-200 cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="pb-5 mb-6 border-b border-[#0D1B2A]/[0.10]">
                      <h2 className="font-sans font-medium text-[22px] sm:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2]">
                        Start with a discovery call.
                      </h2>
                      <p className="font-sans text-[14px] sm:text-[14.5px] text-[#56616B] mt-1.5 leading-[1.55]">
                        Share your context below so we can review priorities ahead of a conversation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                      {/* Row 1: Full Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label
                            htmlFor="contact-fullName"
                            className="block font-sans text-[13px] font-medium text-[#111312] mb-1.5"
                          >
                            Full Name <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-fullName"
                            name="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Alex Morgan"
                            value={formData.fullName}
                            onChange={(e) => updateField("fullName", e.target.value)}
                            aria-invalid={Boolean(fieldErrors.fullName)}
                            aria-describedby={
                              fieldErrors.fullName ? "contact-fullName-error" : undefined
                            }
                            className="w-full min-h-[46px] rounded-[4px] border border-[#C6CDC9] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111312] placeholder:text-[#6B7670] focus:border-[#111312] focus:outline-none focus:ring-1 focus:ring-[#111312] transition-colors"
                          />
                          {fieldErrors.fullName && (
                            <p
                              id="contact-fullName-error"
                              className="mt-1.5 text-[12.5px] font-medium text-[#991B1B]"
                            >
                              {fieldErrors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-workEmail"
                            className="block font-sans text-[13px] font-medium text-[#111312] mb-1.5"
                          >
                            Work Email <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-workEmail"
                            name="workEmail"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="alex@company.com"
                            value={formData.workEmail}
                            onChange={(e) => updateField("workEmail", e.target.value)}
                            aria-invalid={Boolean(fieldErrors.workEmail)}
                            aria-describedby={
                              fieldErrors.workEmail ? "contact-workEmail-error" : undefined
                            }
                            className="w-full min-h-[46px] rounded-[4px] border border-[#C6CDC9] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111312] placeholder:text-[#6B7670] focus:border-[#111312] focus:outline-none focus:ring-1 focus:ring-[#111312] transition-colors"
                          />
                          {fieldErrors.workEmail && (
                            <p
                              id="contact-workEmail-error"
                              className="mt-1.5 text-[12.5px] font-medium text-[#991B1B]"
                            >
                              {fieldErrors.workEmail}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Company & Area of Interest */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label
                            htmlFor="contact-company"
                            className="block font-sans text-[13px] font-medium text-[#111312] mb-1.5"
                          >
                            Company / Organization <span aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Organization name"
                            value={formData.company}
                            onChange={(e) => updateField("company", e.target.value)}
                            aria-invalid={Boolean(fieldErrors.company)}
                            aria-describedby={
                              fieldErrors.company ? "contact-company-error" : undefined
                            }
                            className="w-full min-h-[46px] rounded-[4px] border border-[#C6CDC9] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111312] placeholder:text-[#6B7670] focus:border-[#111312] focus:outline-none focus:ring-1 focus:ring-[#111312] transition-colors"
                          />
                          {fieldErrors.company && (
                            <p
                              id="contact-company-error"
                              className="mt-1.5 text-[12.5px] font-medium text-[#991B1B]"
                            >
                              {fieldErrors.company}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-areaOfInterest"
                            className="block font-sans text-[13px] font-medium text-[#111312] mb-1.5"
                          >
                            Area of Interest <span aria-hidden="true">*</span>
                          </label>
                          <select
                            id="contact-areaOfInterest"
                            name="areaOfInterest"
                            value={formData.areaOfInterest}
                            onChange={(e) => updateField("areaOfInterest", e.target.value)}
                            aria-invalid={Boolean(fieldErrors.areaOfInterest)}
                            aria-describedby={
                              fieldErrors.areaOfInterest
                                ? "contact-areaOfInterest-error"
                                : undefined
                            }
                            className="w-full min-h-[46px] rounded-[4px] border border-[#C6CDC9] bg-white pl-2.5 pr-2 sm:pr-3 py-2.5 text-[14px] lg:text-[12px] xl:text-[14px] text-[#111312] focus:border-[#111312] focus:outline-none focus:ring-1 focus:ring-[#111312] transition-colors"
                          >
                            {CONTACT_AREA_OF_INTEREST_OPTIONS.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {fieldErrors.areaOfInterest && (
                            <p
                              id="contact-areaOfInterest-error"
                              className="mt-1.5 text-[12.5px] font-medium text-[#991B1B]"
                            >
                              {fieldErrors.areaOfInterest}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Priorities / Context */}
                      <div>
                        <label
                          htmlFor="contact-priorities"
                          className="block font-sans text-[13px] font-medium text-[#111312] mb-1.5"
                        >
                          Tell us about your priorities <span aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="contact-priorities"
                          name="priorities"
                          rows={4}
                          required
                          placeholder="Outline your key business objectives, operational bottlenecks, cloud initiatives or questions..."
                          value={formData.priorities}
                          onChange={(e) => updateField("priorities", e.target.value)}
                          aria-invalid={Boolean(fieldErrors.priorities)}
                          aria-describedby={
                            fieldErrors.priorities ? "contact-priorities-error" : undefined
                          }
                          className="w-full rounded-[4px] border border-[#C6CDC9] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111312] placeholder:text-[#6B7670] focus:border-[#111312] focus:outline-none focus:ring-1 focus:ring-[#111312] transition-colors resize-y min-h-[112px]"
                        />
                        {fieldErrors.priorities && (
                          <p
                            id="contact-priorities-error"
                            className="mt-1.5 text-[12.5px] font-medium text-[#991B1B]"
                          >
                            {fieldErrors.priorities}
                          </p>
                        )}
                      </div>

                      {/* Anti-spam Honeypot */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        value={formData.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                      />

                      {/* Honest Server / Validation Status Messaging */}
                      {submitState.status === "unconfigured" && (
                        <div
                          role="alert"
                          className="rounded-[4px] border border-[#8E6C2A]/45 bg-[#F3EFE4] p-4 text-[#111312] space-y-1.5"
                        >
                          <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#5E4514]">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <span>Enquiry delivery is currently unavailable.</span>
                          </div>
                          <p className="text-[13.5px] text-[#333D38] leading-[1.55]">
                            {submitState.message} All information you entered above remains intact.
                          </p>
                        </div>
                      )}

                      {submitState.status === "error" && (
                        <div
                          role="alert"
                          className="rounded-[4px] border border-[#991B1B]/35 bg-[#FEF2F2] p-3.5 text-[#7F1D1D] flex items-start gap-2.5 text-[13.5px]"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-[#991B1B]" />
                          <span>{submitState.message}</span>
                        </div>
                      )}

                      {/* Primary Submit CTA & Privacy Reassurance */}
                      <div className="pt-2 space-y-3.5">
                        <button
                          type="submit"
                          disabled={submitState.status === "submitting"}
                          className="inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#111312] px-8 py-3 text-[15px] font-sans font-medium text-[#F5F7F6] border border-[#111312] hover:bg-[#222624] hover:border-[#222624] disabled:opacity-60 transition-colors duration-200 cursor-pointer text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                        >
                          {submitState.status === "submitting"
                            ? "Sending Request..."
                            : "Request a Discovery Call"}
                        </button>

                        <div className="flex items-start gap-2 text-[12.5px] text-[#56616B] leading-[1.5]">
                          <Lock className="h-3.5 w-3.5 text-[#8E6C2A] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>
                            Your information is treated with confidentiality and used only to respond to your enquiry. Read our{" "}
                            <Link
                              href="/privacy"
                              className="font-medium text-[#111312] underline underline-offset-4 decoration-[#0D1B2A]/30 hover:text-[#8E6C2A] hover:decoration-[#8E6C2A] transition-colors duration-200"
                            >
                              Privacy Policy
                            </Link>
                            .
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

