"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function FrameworkPreviewSection() {
  const { frameworkPreview } = homepageData;
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="framework-preview" className="relative w-full bg-[#F5F7F6] text-[#0D1117] border-b border-[#D9DDDA] py-20 sm:py-28 select-none overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Sticky Section Heading & Lifecycle Principle         */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-[11.5px] font-mono tracking-[0.16em] uppercase text-[#6F7479]">
                <span className="w-3.5 h-px bg-[#D4A64A]" />
                <span>05 // Framework Preview</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#0D1117] leading-[1.08]">
                {frameworkPreview.title}
              </h2>

              <p className="text-[15px] sm:text-base text-[#6F7479] leading-relaxed font-normal">
                {frameworkPreview.subtitle}
              </p>

              <div className="pt-2">
                <Link
                  href={frameworkPreview.cta.href}
                  className="group inline-flex items-center text-[13.5px] font-mono font-medium text-[#0D1117] hover:text-[#D4A64A] transition-colors"
                >
                  <span>{frameworkPreview.cta.label}</span>
                </Link>
              </div>

              {/* Connected Lifecycle Feedback Loop Cue */}
              <div className="mt-8 pt-6 border-t border-[#D9DDDA] rounded-[4px] bg-[#FFFFFF] p-5 border space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#0D1117]">
                  <RotateCw className="h-3.5 w-3.5 text-[#D4A64A]" />
                  <span>Iterative Lifecycle Loop</span>
                </div>
                <p className="text-[12.5px] text-[#6F7479] leading-relaxed">
                  Stage 06 (Continuous Refinement) directly triggers Stage 01 feedback loops. Transformation is an ongoing organizational capability, not a one-time project.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Connected Process Lifecycle Progression              */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 relative">
            
            {/* Continuous Vertical Connecting Spine Line */}
            <div className="absolute left-[15px] top-6 bottom-16 w-px bg-[#D9DDDA]" />

            <div className="space-y-6">
              {frameworkPreview.stages.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <motion.div
                    key={stage.stageNumber}
                    initial={{ opacity: 0.5, y: 16 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    onMouseEnter={() => setActiveStage(idx)}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "relative pl-10 sm:pl-12 pr-6 py-6 rounded-[4px] border transition-all duration-[240ms] ease-out cursor-pointer",
                      isSelected 
                        ? "bg-[#FFFFFF] border-[#D4A64A] shadow-md" 
                        : "bg-[#FFFFFF]/80 border-[#D9DDDA] hover:border-[#6F7479] hover:bg-[#FFFFFF]"
                    )}
                  >
                    {/* Node Dot on the continuous vertical spine */}
                    <div className="absolute left-[11px] top-7 flex items-center justify-center">
                      <span 
                        className={cn(
                          "h-[9px] w-[9px] rounded-full transition-all duration-200",
                          isSelected 
                            ? "bg-[#D4A64A] scale-125 shadow-xs" 
                            : "bg-[#F5F7F6] border border-[#6F7479]"
                        )} 
                      />
                    </div>

                    {/* Top Row: Stage Tag & Principle */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#D9DDDA]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[12px] font-medium text-[#0D1117]">
                          STAGE // {stage.stageNumber}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7479] bg-[#F5F7F6] border border-[#D9DDDA] px-2 py-0.5 rounded-[2px]">
                          LIFECYCLE GATE
                        </span>
                      </div>
                      <span className="text-[11.5px] font-mono text-[#6F7479]">
                        {stage.advancement}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-xl sm:text-2xl font-sans font-medium sm:font-semibold text-[#0D1117] tracking-tight mt-3">
                      {stage.title}
                    </h3>

                    {/* Principle */}
                    <p className="text-[13px] text-[#6F7479] font-mono mt-1">
                      {stage.principle}
                    </p>

                    {/* What Happens & What is Produced */}
                    <div className="mt-4 pt-3 border-t border-[#D9DDDA] grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7479] block">
                          Execution:
                        </span>
                        <p className="text-[#555B61] mt-0.5 leading-relaxed">
                          {stage.whatHappens}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7479] block">
                          Deliverable:
                        </span>
                        <p className="text-[#0D1117] font-medium mt-0.5 leading-relaxed">
                          {stage.whatIsProduced}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* End Continuous Loop Line cue */}
            <div className="mt-6 pl-10 flex items-center gap-3 text-[12px] font-mono text-[#6F7479]">
              <div className="h-px w-8 bg-[#D9DDDA]" />
              <span>CONTINUOUS CYCLE: ITERATION & EXPANSION PHASE</span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
