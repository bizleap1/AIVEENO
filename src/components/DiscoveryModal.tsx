"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, CheckCircle2, Shield, Lock, AlertCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  MODAL_AREA_OF_INTEREST_OPTIONS,
  discoveryEnquirySchema,
  type DiscoveryEnquiryInput,
  type DiscoveryEnquiryResponse,
} from "@/lib/discovery";
import { trackDiscoveryEvent } from "@/lib/analytics";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  sourceContext?: string;
}

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; referenceId: string }
  | { status: "unconfigured"; message: string }
  | { status: "error"; message: string };

const DEFAULT_INTEREST = MODAL_AREA_OF_INTEREST_OPTIONS[0];

function resolveModalInterest(candidate?: string): string {
  if (!candidate) return DEFAULT_INTEREST;
  const matched = MODAL_AREA_OF_INTEREST_OPTIONS.find(
    (opt) => opt.toLowerCase() === candidate.trim().toLowerCase()
  );
  return matched ?? DEFAULT_INTEREST;
}

export default function DiscoveryModal({
  isOpen,
  onClose,
  initialInterest = DEFAULT_INTEREST,
  sourceContext = "Global Interaction",
}: DiscoveryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    roleTitle: "",
    companySize: "",
    priorities: "",
    website: "",
  });
  const [interestOverride, setInterestOverride] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof DiscoveryEnquiryInput, string>>
  >({});
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });

  const activeAreaOfInterest =
    interestOverride ?? resolveModalInterest(initialInterest);

  const handleClose = useCallback(() => {
    setInterestOverride(null);
    setFieldErrors({});
    setSubmitState((prev) =>
      prev.status === "success" ? { status: "idle" } : prev
    );
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
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

    const pageSource =
      typeof window !== "undefined" ? window.location.pathname : "/";

    const submissionPayload = {
      ...formData,
      areaOfInterest: activeAreaOfInterest,
      sourceContext,
      pageSource,
    };

    const parsed = discoveryEnquirySchema.safeParse(submissionPayload);
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
      area_of_interest: activeAreaOfInterest,
      source_context: sourceContext,
    });

    try {
      const response = await fetch("/api/discovery-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
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
          area_of_interest: activeAreaOfInterest,
          source_context: sourceContext,
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
          area_of_interest: activeAreaOfInterest,
          source_context: sourceContext,
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

      const errCode =
        payload && !payload.ok ? payload.code : `HTTP_${response.status}`;
      trackDiscoveryEvent({
        event: "discovery_form_submit_error",
        area_of_interest: activeAreaOfInterest,
        source_context: sourceContext,
        status: errCode,
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
        area_of_interest: activeAreaOfInterest,
        source_context: sourceContext,
        status: "NETWORK_ERROR",
      });
      setSubmitState({
        status: "error",
        message:
          "Network error while contacting the enquiry endpoint. Your entered details have been preserved.",
      });
    }
  };

  const handleCloseAfterSuccess = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      company: "",
      roleTitle: "",
      companySize: "",
      priorities: "",
      website: "",
    });
    setInterestOverride(null);
    setFieldErrors({});
    setSubmitState({ status: "idle" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/85 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="discovery-modal-title"
    >
      <div
        className="relative w-full max-w-xl rounded-[4px] border border-[#262626] bg-[#111111] p-6 sm:p-8 shadow-2xl transition-all max-h-[90vh] overflow-y-auto text-[#FFFFFF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 rounded-[2px] p-1.5 text-[#A1A1AA] hover:bg-[#080808] hover:text-[#FFFFFF] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitState.status === "success" ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-200" role="status">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF]/10 text-[#FFFFFF]">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <div className="space-y-2">
              <h3
                id="discovery-modal-title"
                className="text-xl font-sans font-medium text-[#FFFFFF] tracking-tight"
              >
                Discovery Call Request Received
              </h3>
              <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your enquiry regarding{" "}
                <strong className="text-[#FFFFFF]">{activeAreaOfInterest}</strong>{" "}
                has been delivered. Our team will follow up at{" "}
                <strong className="text-[#FFFFFF]">{formData.workEmail}</strong> to
                coordinate next steps. Submitting this form does not confirm a
                scheduled calendar slot.
              </p>
              <p className="text-xs font-mono text-[#AEB3AF]">
                Reference: {submitState.referenceId}
              </p>
            </div>

            <div className="rounded-[4px] border border-[#262626] bg-[#080808] p-4 text-left text-xs text-[#A1A1AA] space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2 font-medium text-[#FFFFFF]">
                <Shield className="h-4 w-4 text-[#FFFFFF]" />
                <span>Confidentiality &amp; Privacy</span>
              </div>
              <p>
                Shared business priorities and system context are handled with confidentiality and used only to respond to your enquiry.
              </p>
            </div>

            <div className="pt-2">
              <CTAButton onClick={handleCloseAfterSuccess} variant="primary">
                Return to Website
              </CTAButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#262626] pb-4 pr-8">
              <div className="flex items-center gap-2 text-[11px] font-mono font-medium uppercase tracking-wider text-[#A1A1AA]">
                <span className="h-1 w-1 rounded-none bg-[#C9A35B]" />
                <span>START A CONVERSATION</span>
              </div>
              <h2
                id="discovery-modal-title"
                className="mt-1.5 text-2xl font-sans font-medium tracking-tight text-[#FFFFFF]"
              >
                Book a Discovery Call
              </h2>
              <p className="mt-1 text-[13px] text-[#A1A1AA] leading-relaxed">
                Share your business priorities, technology challenges or transformation goals so we can understand how we might help.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-fullName"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    aria-invalid={Boolean(fieldErrors.fullName)}
                    aria-describedby={fieldErrors.fullName ? "modal-fullName-error" : undefined}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                  {fieldErrors.fullName && (
                    <p id="modal-fullName-error" className="mt-1 text-[11.5px] text-[#FCA5A5]">
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-workEmail"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Work Email *
                  </label>
                  <input
                    id="modal-workEmail"
                    name="workEmail"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@enterprise.com"
                    value={formData.workEmail}
                    onChange={(e) => updateField("workEmail", e.target.value)}
                    aria-invalid={Boolean(fieldErrors.workEmail)}
                    aria-describedby={fieldErrors.workEmail ? "modal-workEmail-error" : undefined}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                  {fieldErrors.workEmail && (
                    <p id="modal-workEmail-error" className="mt-1 text-[11.5px] text-[#FCA5A5]">
                      {fieldErrors.workEmail}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-company"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Company / Organization *
                  </label>
                  <input
                    id="modal-company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Organization Name"
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    aria-invalid={Boolean(fieldErrors.company)}
                    aria-describedby={fieldErrors.company ? "modal-company-error" : undefined}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                  {fieldErrors.company && (
                    <p id="modal-company-error" className="mt-1 text-[11.5px] text-[#FCA5A5]">
                      {fieldErrors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-roleTitle"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Role / Title (Optional)
                  </label>
                  <input
                    id="modal-roleTitle"
                    name="roleTitle"
                    type="text"
                    placeholder="VP Operations, CTO, Director"
                    value={formData.roleTitle}
                    onChange={(e) => updateField("roleTitle", e.target.value)}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                </div>
              </div>

              {/* Row 3: Area of Interest & Company Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-areaOfInterest"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="modal-areaOfInterest"
                    name="areaOfInterest"
                    value={activeAreaOfInterest}
                    onChange={(e) => {
                      setInterestOverride(e.target.value);
                      if (
                        submitState.status === "error" ||
                        submitState.status === "unconfigured"
                      ) {
                        setSubmitState({ status: "idle" });
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.areaOfInterest)}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  >
                    {MODAL_AREA_OF_INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="modal-companySize"
                    className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                  >
                    Company Size (Optional)
                  </label>
                  <select
                    id="modal-companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={(e) => updateField("companySize", e.target.value)}
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  >
                    <option value="">Select range...</option>
                    <option value="50-250">50 - 250 employees</option>
                    <option value="250-1000">250 - 1,000 employees</option>
                    <option value="1000-5000">1,000 - 5,000 employees</option>
                    <option value="5000+">5,000+ employees</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Priorities */}
              <div>
                <label
                  htmlFor="modal-priorities"
                  className="block text-[12px] font-mono text-[#D4D4D8] mb-1"
                >
                  Tell us about your priorities *
                </label>
                <textarea
                  id="modal-priorities"
                  name="priorities"
                  rows={3}
                  required
                  placeholder="Describe your operational priorities, systems landscape or transformation objectives..."
                  value={formData.priorities}
                  onChange={(e) => updateField("priorities", e.target.value)}
                  aria-invalid={Boolean(fieldErrors.priorities)}
                  aria-describedby={fieldErrors.priorities ? "modal-priorities-error" : undefined}
                  className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] resize-none"
                />
                {fieldErrors.priorities && (
                  <p id="modal-priorities-error" className="mt-1 text-[11.5px] text-[#FCA5A5]">
                    {fieldErrors.priorities}
                  </p>
                )}
              </div>

              {/* Honeypot */}
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

              {/* Honest Delivery Unconfigured or Error Alert */}
              {submitState.status === "unconfigured" && (
                <div
                  role="alert"
                  className="rounded-[2px] border border-[#C9A35B]/50 bg-[#1B1914] p-3 text-[12px] text-[#F5F7F6] space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-medium text-[#E5C784]">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Enquiry delivery is currently unavailable</span>
                  </div>
                  <p className="text-[#D4D8D5] leading-relaxed">
                    {submitState.message} Your entered details remain intact.{" "}
                    <Link
                      href={`/contact?interest=${encodeURIComponent(activeAreaOfInterest)}`}
                      onClick={handleClose}
                      className="underline underline-offset-2 text-white hover:text-[#E5C784]"
                    >
                      Open the dedicated Contact page
                    </Link>
                    .
                  </p>
                </div>
              )}

              {submitState.status === "error" && (
                <div
                  role="alert"
                  className="rounded-[2px] border border-[#EF4444]/40 bg-[#1F1212] p-3 text-[12px] text-[#FECACA] flex items-start gap-2"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-[#FCA5A5]" />
                  <span>{submitState.message}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-[#262626]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA]">
                  <Lock className="h-3 w-3 text-[#C9A35B] shrink-0" />
                  <span>
                    Handled with confidentiality.{" "}
                    <Link href="/privacy" onClick={handleClose} className="underline hover:text-white">
                      Privacy Policy
                    </Link>
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="rounded-[2px] border border-[#262626] px-4 py-2 text-[13px] font-medium text-[#A1A1AA] hover:bg-[#080808] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitState.status === "submitting"}
                    className="inline-flex items-center justify-center rounded-[2px] bg-[#F5F7F6] text-[#111312] hover:bg-white disabled:opacity-60 px-5 py-2 text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {submitState.status === "submitting"
                      ? "Sending Request..."
                      : "Request a Discovery Call"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
