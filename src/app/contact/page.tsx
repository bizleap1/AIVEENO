"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { Shield, Lock, CheckCircle2, Calendar, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    roleTitle: "",
    areaOfInterest: "AI Business Transformation",
    companySize: "",
    businessChallenge: "",
    sourceContext: "Contact Page Direct",
    pageSource: "/contact",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Columns: Engagement Context & Commitments */}
            <div className="lg:col-span-5 space-y-8">
              <SectionIntro
                tag="h1"
                eyebrow="Commercial Engagement"
                title="Book a Discovery Call."
                description="Begin with a focused, confidential conversation with our senior technology partners about where AI and modern cloud systems can create real business value."
              />

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-[6px] border border-[#D9DEE7] bg-white flex items-start gap-3.5">
                  <Calendar className="h-5 w-5 text-[#3157FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0B1020]">
                      Direct Partner Discussion
                    </h4>
                    <p className="text-[12.5px] text-[#667085] mt-0.5 leading-relaxed">
                      You will speak with experienced technology and advisory principals, not sales representatives.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-[6px] border border-[#D9DEE7] bg-white flex items-start gap-3.5">
                  <Shield className="h-5 w-5 text-[#3157FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0B1020]">
                      Enterprise NDA & Privacy
                    </h4>
                    <p className="text-[12.5px] text-[#667085] mt-0.5 leading-relaxed">
                      All shared workflow details, architectural pain points, and strategic priorities are protected under mutual enterprise confidentiality.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-[6px] border border-[#D9DEE7] bg-white flex items-start gap-3.5">
                  <Clock className="h-5 w-5 text-[#3157FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0B1020]">
                      Clear Next Steps
                    </h4>
                    <p className="text-[12.5px] text-[#667085] mt-0.5 leading-relaxed">
                      Following the call, we provide a preliminary scope assessment and recommended engagement pathway.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#D9DEE7] pt-6 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#667085] font-semibold">
                  Commercial Journey:
                </div>
                <div className="text-[12.5px] text-[#111827] font-mono leading-relaxed">
                  Discovery Call → Qualification → AI Transformation Assessment → Roadmap → Implementation
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Formal Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[8px] border border-[#D9DEE7] bg-white p-7 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-200">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9EEFF] text-[#3157FF]">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-medium text-[#0B1020] tracking-tight">
                        Discovery Call Requested
                      </h3>
                      <p className="text-[14px] text-[#667085] max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.fullName}. Our technology advisory team will review your objectives and contact you at <strong className="text-[#111827]">{formData.workEmail}</strong> to schedule a confidential discussion.
                      </p>
                    </div>

                    <div className="rounded-[6px] border border-[#D9DEE7] bg-[#F7F8FA] p-4 text-left text-xs text-[#667085] space-y-1 max-w-md mx-auto">
                      <div className="flex items-center gap-2 font-medium text-[#111827]">
                        <Lock className="h-3.5 w-3.5 text-[#3157FF]" />
                        <span>Confidential Enterprise Record</span>
                      </div>
                      <p>
                        Your inquiry has been logged with source context: <span className="font-mono text-[#111827]">{formData.sourceContext}</span>.
                      </p>
                    </div>

                    <div className="pt-4">
                      <CTAButton
                        variant="secondary"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </CTAButton>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="border-b border-[#D9DEE7] pb-4 mb-6">
                      <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                        Inquiry Specification
                      </h3>
                      <p className="text-[13px] text-[#667085] mt-1">
                        Please provide details regarding your organization and focus areas.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
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
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#94A3B8] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
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
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#94A3B8] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
                          />
                        </div>
                      </div>

                      {/* Company & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Organization Name"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#94A3B8] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
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
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#94A3B8] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
                          />
                        </div>
                      </div>

                      {/* Area of Interest & Company Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
                            Area of Interest *
                          </label>
                          <select
                            value={formData.areaOfInterest}
                            onChange={(e) =>
                              setFormData({ ...formData, areaOfInterest: e.target.value })
                            }
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
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
                          <label className="block text-[12px] font-medium text-[#111827] mb-1">
                            Company Size (Optional)
                          </label>
                          <select
                            value={formData.companySize}
                            onChange={(e) =>
                              setFormData({ ...formData, companySize: e.target.value })
                            }
                            className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF]"
                          >
                            <option value="">Select workforce range...</option>
                            <option value="50-250">50 - 250 employees</option>
                            <option value="250-1000">250 - 1,000 employees</option>
                            <option value="1000-5000">1,000 - 5,000 employees</option>
                            <option value="5000+">5,000+ employees</option>
                          </select>
                        </div>
                      </div>

                      {/* Message / Challenge */}
                      <div>
                        <label className="block text-[12px] font-medium text-[#111827] mb-1">
                          Message / Business Challenge
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Outline key operational bottlenecks, legacy systems, data architecture constraints, or transformation objectives..."
                          value={formData.businessChallenge}
                          onChange={(e) =>
                            setFormData({ ...formData, businessChallenge: e.target.value })
                          }
                          className="w-full rounded-[6px] border border-[#D9DEE7] bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#94A3B8] focus:border-[#3157FF] focus:outline-none focus:ring-1 focus:ring-[#3157FF] resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#D9DEE7]">
                        <div className="flex items-center gap-1.5 text-[11.5px] text-[#667085]">
                          <Lock className="h-3.5 w-3.5 text-[#3157FF]" />
                          <span>Enterprise confidentiality commitment</span>
                        </div>

                        <CTAButton
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto"
                        >
                          {isSubmitting ? "Submitting..." : "Schedule Discovery Call"}
                        </CTAButton>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
