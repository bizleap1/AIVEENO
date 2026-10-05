"use client";

import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";
import { Clock, CheckCircle2, ArrowRight, FileText, Layers, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface AssessmentSectionProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

export default function AssessmentSection({
  onOpenDiscoveryModal,
}: AssessmentSectionProps) {
  const { assessment } = homepageData;

  return (
    <section id="assessment" className="relative w-full bg-[#F5F7F6] border-b border-[#D9DDDA] py-20 sm:py-28 select-none overflow-hidden">
      <Container>
        
        {/* Main 2-Column High-Conversion Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Headline, Strategic Value Proposition & Scope        */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-[11.5px] font-mono tracking-[0.16em] uppercase text-[#6F7479]">
                <span className="w-3.5 h-px bg-[#D4A64A]" />
                <span>AI Transformation Assessment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-medium tracking-[-0.035em] text-[#0D1117] leading-[1.04]">
                {assessment.title}
              </h2>

              <p className="text-[17px] text-[#6F7479] leading-[1.55] font-normal">
                {assessment.subtitle}
              </p>
            </motion.div>

            {/* Scope of Examination */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 space-y-3"
            >
              <div className="text-[13px] font-sans uppercase tracking-[0.08em] text-[#6F7479] font-medium flex items-center gap-2">
                <span className="h-[1px] w-6 bg-[#D4A64A]" />
                <span>Scope of Examination</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {assessment.whatWeExamine.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-[3px] bg-[#FFFFFF] border border-[#D9DDDA]/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4A64A] mt-0.5" />
                    <div>
                      <div className="text-[13.5px] font-medium text-[#0D1117]">
                        {item.title}
                      </div>
                      <div className="text-[12.5px] text-[#6F7479] leading-snug mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actions & Timing Notice */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
            >
              <button
                type="button"
                onClick={() => onOpenDiscoveryModal(assessment.cta.context)}
                className="group inline-flex h-[46px] items-center justify-center rounded-[2px] bg-[#0D1117] px-7 text-[15px] font-medium text-[#F5F7F6] hover:bg-[#1D2128] transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <span>{assessment.cta.label}</span>
              </button>

              <div className="flex items-center gap-2 text-[13px] text-[#6F7479] font-mono">
                <Clock className="h-3.5 w-3.5 text-[#D4A64A]" />
                <span>{assessment.timing}</span>
              </div>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Executive Assessment Output Document Visual         */}
          {/* ================================================================= */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[4px] border border-[#D9DDDA] bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative"
            >
              {/* Document Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D9DDDA]">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 text-[#D4A64A]" />
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
                    Transformation Opportunity Report & Roadmap
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-[2px] bg-[#F5F7F6] border border-[#D9DDDA] text-[#6F7479] font-medium">
                  Deliverable Artifact
                </span>
              </div>

              {/* Document Sections Resolving on Scroll */}
              <div className="mt-5 space-y-4">
                
                {/* Section 01: Opportunity & Workflow Inventory */}
                <motion.div 
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 rounded-[3px] bg-[#F5F7F6]/60 border border-[#D9DDDA] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6F7479]">
                    <span className="uppercase tracking-wider">01 // Evaluated Workflow Matrix</span>
                    <span className="text-[#0D1117] font-medium">Prioritized</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E5E9E6] rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-[#0D1117] w-[85%]" />
                  </div>
                  <p className="text-[12.5px] text-[#6F7479] pt-1 leading-normal">
                    Departmental friction analysis mapping high-impact automation candidates versus integration complexity.
                  </p>
                </motion.div>

                {/* Section 02: Architectural & Data Feasibility */}
                <motion.div 
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 rounded-[3px] bg-[#F5F7F6]/60 border border-[#D9DDDA] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6F7479]">
                    <span className="uppercase tracking-wider">02 // Technical & Data Readiness</span>
                    <span className="text-[#0D1117] font-medium">Architected</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E5E9E6] rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-[#0D1117] w-[70%]" />
                  </div>
                  <p className="text-[12.5px] text-[#6F7479] pt-1 leading-normal">
                    Verification of transactional databases, API connectivity, latency bounds, and compliance requirements.
                  </p>
                </motion.div>

                {/* Section 03: Executive Implementation Roadmap */}
                <motion.div 
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 rounded-[3px] bg-[#F5F7F6]/60 border border-[#D9DDDA] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6F7479]">
                    <span className="uppercase tracking-wider">03 // Sequenced Investment Roadmap</span>
                    <span className="text-[#0D1117] font-medium">Actionable</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E5E9E6] rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-[#0D1117] w-[95%]" />
                  </div>
                  <p className="text-[12.5px] text-[#6F7479] pt-1 leading-normal">
                    Phased rollout timeline defining pilot milestones, resource allocations, and quantitative business returns.
                  </p>
                </motion.div>

              </div>

              {/* Bottom Document Trust Seal */}
              <div className="mt-5 pt-4 border-t border-[#D9DDDA] flex items-center justify-between text-[11px] font-mono text-[#6F7479]">
                <span>EXECUTIVE-READY SPECIFICATION</span>
                <span className="text-[#0D1117] font-medium">PARTNER-LED ENGAGEMENT</span>
              </div>
            </motion.div>
          </div>

        </div>

      </Container>
    </section>
  );
}
