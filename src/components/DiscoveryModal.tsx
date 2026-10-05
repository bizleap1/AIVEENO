"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Shield, Lock } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  sourceContext?: string;
}

export default function DiscoveryModal({
  isOpen,
  onClose,
  initialInterest = "AI Business Transformation",
  sourceContext = "Global Interaction",
}: DiscoveryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    roleTitle: "",
    areaOfInterest: initialInterest,
    companySize: "",
    businessChallenge: "",
    sourceContext: sourceContext,
    pageSource: typeof window !== "undefined" ? window.location.pathname : "/",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({
        ...prev,
        areaOfInterest: initialInterest,
        sourceContext: sourceContext,
        pageSource: typeof window !== "undefined" ? window.location.pathname : "/",
      }));
    }
  }, [initialInterest, sourceContext, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
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
          onClick={onClose}
          className="absolute right-5 top-5 rounded-[2px] p-1.5 text-[#A1A1AA] hover:bg-[#080808] hover:text-[#FFFFFF] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFFFF]/10 text-[#FFFFFF]">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <div className="space-y-2">
              <h3 id="discovery-modal-title" className="text-xl font-sans font-medium text-[#FFFFFF] tracking-tight">
                Discovery Call Requested
              </h3>
              <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Our technology advisory team will review your objectives and contact you at <strong className="text-[#FFFFFF]">{formData.workEmail}</strong> to schedule a confidential discussion.
              </p>
            </div>

            <div className="rounded-[4px] border border-[#262626] bg-[#080808] p-4 text-left text-xs text-[#A1A1AA] space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2 font-medium text-[#FFFFFF]">
                <Shield className="h-4 w-4 text-[#FFFFFF]" />
                <span>Enterprise Confidentiality & NDA</span>
              </div>
              <p>
                All shared business context, workflow architectures, and preliminary requirements are treated with strict confidentiality.
              </p>
            </div>

            <div className="pt-2">
              <CTAButton onClick={handleReset} variant="primary">
                Return to Website
              </CTAButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#262626] pb-4">
              <div className="flex items-center gap-2 text-[11px] font-mono font-medium uppercase tracking-wider text-[#A1A1AA]">
                <span className="h-1 w-1 rounded-none bg-[#FFFFFF]" />
                <span>01 / ENTERPRISE CONSULTATION</span>
              </div>
              <h2
                id="discovery-modal-title"
                className="mt-1.5 text-2xl font-sans font-medium tracking-tight text-[#FFFFFF]"
              >
                Book a Discovery Call
              </h2>
              <p className="mt-1 text-[13px] text-[#A1A1AA] leading-relaxed">
                A focused conversation with senior technology partners to discuss your operational challenges, AI opportunities, and architectural foundation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@enterprise.com"
                    value={formData.workEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, workEmail: e.target.value })
                    }
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                </div>
              </div>

              {/* Row 2: Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Organization Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VP Operations, CTO, Director"
                    value={formData.roleTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, roleTitle: e.target.value })
                    }
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  />
                </div>
              </div>

              {/* Row 3: Area of Interest & Company Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, areaOfInterest: e.target.value })
                    }
                    className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF]"
                  >
                    <option value="AI Business Transformation">AI Business Transformation</option>
                    <option value="AI Transformation Assessment">AI Transformation Assessment</option>
                    <option value="Cloud Consulting">Cloud Consulting</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="Managed Cloud">Managed Cloud</option>
                    <option value="Cloud Security">Cloud Security</option>
                    <option value="Cloud Optimization">Cloud Optimization</option>
                    <option value="DevOps & Automation">DevOps & Automation</option>
                    <option value="Data Engineering">Data Engineering</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                    Company Size (Optional)
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) =>
                      setFormData({ ...formData, companySize: e.target.value })
                    }
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

              {/* Row 4: Message / Business Challenge */}
              <div>
                <label className="block text-[12px] font-mono text-[#A1A1AA] mb-1">
                  Message / Business Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current operational bottlenecks, systems landscape, or transformation objectives..."
                  value={formData.businessChallenge}
                  onChange={(e) =>
                    setFormData({ ...formData, businessChallenge: e.target.value })
                  }
                  className="w-full rounded-[2px] border border-[#262626] bg-[#080808] px-3 py-2 text-[13px] text-[#FFFFFF] placeholder:text-[#71717A] focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] resize-none"
                />
              </div>

              {/* Hidden Analytics Context Tracking */}
              <input type="hidden" name="sourceContext" value={formData.sourceContext} />
              <input type="hidden" name="pageSource" value={formData.pageSource} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-[#262626]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] font-mono">
                  <Lock className="h-3 w-3 text-[#FFFFFF]" />
                  <span>Enterprise privacy protected</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-[2px] border border-[#262626] px-4 py-2 text-[13px] font-medium text-[#A1A1AA] hover:bg-[#080808] hover:text-[#FFFFFF] transition-colors"
                  >
                    Cancel
                  </button>
                  <CTAButton
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="py-2 px-5 text-[13px]"
                    icon="upRight"
                  >
                    {isSubmitting ? "Submitting..." : "Schedule Call"}
                  </CTAButton>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
