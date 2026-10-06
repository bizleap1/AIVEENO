"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Section 09: FINAL CTA (LOCKED COMPACT ASYMMETRIC EDITORIAL SECTION)
 * 
 * Strategic Role:
 * - Direct, seamless transition from previous dark Cloud & Technology section into core light off-white (#F5F7F6).
 * - Zero black transition strip or artificial gaps.
 * - Left content (~58%): Eyebrow + 2-line headline with descender clearance (no clipping).
 * - "We will engineer the system." darkened for optimal contrast & readability.
 * - Subtle vertical divider limited strictly to actual content height via self-stretch hairline.
 * - CTA: Dark ink fill, 50–52px height, compact 220–240px width, rounded-[4px], no arrow.
 * - Commercial journey: Centered inside controlled max-width container, ~26–32px below content block.
 */

interface FinalCtaSectionProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

const journeySteps = [
  "Discovery Call",
  "Assessment",
  "Transformation Roadmap",
  "Implementation",
];

export default function FinalCtaSection({
  onOpenDiscoveryModal,
}: FinalCtaSectionProps) {
  return (
    <section
      id="final-cta"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none scroll-mt-[58px] lg:scroll-mt-[66px] py-10 lg:py-12 border-b border-[#0D1B2A]/[0.08] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        {/* ========================================================================= */}
        {/* ASYMMETRIC EDITORIAL SPLIT (LEFT ~58% | DIVIDER | RIGHT ~38%)              */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN: EYEBROW & DISPLAY HEADLINE (56-58%) */}
          <div className="lg:w-[58%] pb-5 lg:pb-0 border-b lg:border-b-0 border-[#0D1B2A]/[0.08]">
            <div className="space-y-2.5 sm:space-y-3">
              {/* 1. Eyebrow Reveal with Muted Gold Dash */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Next Step</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Reveal with Punctuation/Descender Clearance */}
              <div className="space-y-0.5">
                {/* Line 1: "Start with the business challenge." */}
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.h2
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                    className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] lg:text-[46px] xl:text-[52px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.03]"
                  >
                    Start with the business challenge.
                  </motion.h2>
                </div>

                {/* Line 2: "We will engineer the system." (Darkened to text-[#0D1B2A]/95 for strong readability) */}
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
                    className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[39px] lg:text-[43px] xl:text-[48px] text-[#0D1B2A]/95 tracking-[-0.035em] leading-[1.03]"
                  >
                    We will engineer the system.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER: STRICTLY LIMITED TO CONTENT HEIGHT */}
          <div
            className="hidden lg:block w-px self-stretch bg-[#0D1B2A]/[0.08] my-1 shrink-0"
            aria-hidden="true"
          />

          {/* RIGHT COLUMN: SUPPORTING NARRATIVE & INTEGRATED CTA (36-40%) */}
          <div className="lg:w-[38%] flex flex-col justify-center space-y-3.5 sm:space-y-4">
            {/* 3. Supporting Copy Fade */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
              className="text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#3B4A5A] leading-[1.55] font-normal max-w-[420px]"
            >
              Begin with a focused conversation about your workflows, systems, and where transformation can create meaningful, measurable business value.
            </motion.p>

            {/* 4. Primary CTA Reveal (Compact 220-240px width, 50-52px height) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.30 }}
            >
              <button
                type="button"
                onClick={() => onOpenDiscoveryModal("Homepage Final CTA")}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-[225px] items-center justify-center rounded-[4px] bg-[#0D1B2A] px-6 text-[13.5px] sm:text-[14px] font-sans font-medium text-[#F5F5F1] hover:bg-[#1A2838] border border-[#0D1B2A] hover:border-[#1A2838] transition-colors duration-200 cursor-pointer shadow-xs text-center"
                aria-label="Book a Discovery Call"
              >
                Book a Discovery Call
              </button>
            </motion.div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM: BRIEF-SUPPORTED COMMERCIAL JOURNEY (CENTERED CONTROLLED WIDTH)     */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-5 border-t border-[#0D1B2A]/[0.08] mt-6 sm:mt-7">
          {/* Desktop: Centered Controlled Flow with Subtle Muted Gold Dots */}
          <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-8 max-w-[800px] mx-auto text-[11.5px] lg:text-[12px] text-[#556370] font-sans font-medium tracking-[0.02em]">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.36 + idx * 0.05 }}
                className="flex items-center gap-6 lg:gap-8"
              >
                <span>{step}</span>
                {idx < journeySteps.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#C9A35B]" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Clean 2x2 Grid Layout */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 sm:hidden text-center text-[11px] text-[#556370] font-sans font-medium tracking-[0.02em]">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.36 + idx * 0.05 }}
                className="py-0.5"
              >
                {step}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
