"use client";

import { CheckCircle2, ArrowRight, ShieldCheck, Clock } from "lucide-react";

interface AssessmentSectionProps {
  onOpenDiscoveryModal: (interest?: string) => void;
}

export default function AssessmentSection({ onOpenDiscoveryModal }: AssessmentSectionProps) {
  return (
    <section id="assessment" className="py-20 md:py-28 bg-[#FCFBF9] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="rounded-2xl border border-[#141414] bg-[#141414] text-white p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/80 px-3.5 py-1 text-xs font-mono font-medium text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>Strategic Entry Offering</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
                The 2-Week AI & Cloud Transformation Assessment
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed max-w-xl">
                Before committing substantial capital to unproven AI initiatives, evaluate where AI creates defensible enterprise value. Our senior partners audit your technology stack and deliver an actionable execution blueprint.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neutral-300 mt-0.5" />
                  <span className="text-sm text-neutral-200">
                    Infrastructure & Tech Stack Audit
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neutral-300 mt-0.5" />
                  <span className="text-sm text-neutral-200">
                    Data Readiness & Pipeline Evaluation
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neutral-300 mt-0.5" />
                  <span className="text-sm text-neutral-200">
                    High-ROI Use-Case Prioritization Matrix
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neutral-300 mt-0.5" />
                  <span className="text-sm text-neutral-200">
                    Security, Privacy & Governance Roadmap
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenDiscoveryModal("2-Week Executive Assessment")}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#141414] hover:bg-neutral-100 transition-all shadow-xs active:scale-[0.98]"
                >
                  <span>Request Executive Assessment</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <Clock className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Duration: 10 business days</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Engagement Deliverables Spec Box */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-neutral-700 bg-neutral-900/90 p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-xs font-mono uppercase text-neutral-400">
                    Executive Deliverable Package
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                    Confidential NDA
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xs font-semibold text-white">
                      1. Executive Briefing & Opportunity Matrix
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Ranked inventory of AI and automation opportunities mapped to revenue impact and feasibility.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xs font-semibold text-white">
                      2. Systems Architecture Blueprint
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Complete topology specification spanning cloud resources, data pipelines, model hosting, and APIs.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xs font-semibold text-white">
                      3. Implementation & Capital Roadmap
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Timeline, staffing requirements, cloud infrastructure costs, and ROI forecasting milestones.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400 font-mono border-t border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-neutral-300" />
                    <span>Senior Partner Led</span>
                  </div>
                  <span>Limited Availability</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
