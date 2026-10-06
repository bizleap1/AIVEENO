"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Section 06: AI TRANSFORMATION ASSESSMENT (REFINED)
 * 
 * High-impact image-led editorial section breaking the diagram-heavy sequence.
 * 
 * Polish Specs:
 * - Image: Candid documentary photography of senior strategy partners in session (unposed, authentic, 4:3)
 * - 3 Value Points: Clean, brief-supported, zero invented microcopy / jargon
 *   - Business opportunities
 *   - Feasibility & priorities
 *   - Executive-ready roadmap
 * - CTA: Refined compact width (~20-25% narrower footprint), no arrow/icon, subtle tone hover
 * - Credibility Strip: Tighter spacing, stronger separators (•), clear footnote
 * - Viewport Fit: Cleanly fits below navbar on desktop (lg:min-h-[calc(100svh-66px)])
 */

interface AssessmentSectionProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

const valuePoints = [
  "Business opportunities",
  "Feasibility & priorities",
  "Executive-ready roadmap",
];

export default function AssessmentSection({
  onOpenDiscoveryModal,
}: AssessmentSectionProps) {
  return (
    <section
      id="assessment"
      className="relative w-full bg-[#EEF1F0] text-[#0D1B2A] select-none scroll-mt-[58px] lg:scroll-mt-[66px] lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center py-10 sm:py-14 lg:py-4 xl:py-6 border-b border-[#0D1B2A]/[0.08] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        {/* Mobile Header (Eyebrow + Heading + Copy rendered above Image on mobile viewports) */}
        <div className="lg:hidden space-y-4 mb-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>AI Transformation Assessment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-sans font-medium text-[36px] min-[390px]:text-[40px] sm:text-[44px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.06]"
          >
            Discover where AI can create the most value in your business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[15px] sm:text-[16px] text-[#3B4A5A] leading-[1.55] font-normal"
          >
            A focused assessment of workflows, systems, inefficiencies, data and AI opportunities.
          </motion.p>
        </div>

        {/* 50/50 Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT: CANDID EDITORIAL STRATEGY WORKSHOP PHOTOGRAPH                       */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(6% 0% 0% 0%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full max-w-[540px] mx-auto lg:mx-0"
          >
            <div className="relative w-full aspect-[4/3.2] rounded-[4px] overflow-hidden border border-[#0D1B2A]/[0.08] shadow-[0_6px_28px_-12px_rgba(13,27,42,0.09)] bg-[#E2E6E5]">
              <Image
                src="/images/assessment-strategy-session.jpg"
                alt="Executive leadership team collaborating on enterprise strategy blueprints"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_65%] scale-[1.08]"
                priority
              />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT: CONSULTING EDITORIAL NARRATIVE & VALUE POINTS                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-4 xl:space-y-5">
            
            {/* Desktop-only Header (Eyebrow + Heading + Short Copy) */}
            <div className="hidden lg:block space-y-3 xl:space-y-4">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>AI Transformation Assessment</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="font-sans font-medium text-[32px] lg:text-[36px] xl:text-[40px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.08]"
              >
                Discover where AI can create the most value in your business.
              </motion.h2>

              {/* Short Copy */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-[15.5px] xl:text-[16px] text-[#3B4A5A] leading-[1.55] font-normal max-w-[520px]"
              >
                A focused assessment of workflows, systems, inefficiencies, data and AI opportunities.
              </motion.p>
            </div>

            {/* 3 Concise Assessment Value Points (No Jargon / Microcopy) */}
            <div className="space-y-1 pt-1">
              {valuePoints.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.22 + idx * 0.08 }}
                  className="flex items-center gap-3 py-2.5 border-b border-[#0D1B2A]/[0.08] last:border-b-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0" aria-hidden="true" />
                  <span className="text-[14.5px] sm:text-[15px] font-sans font-medium text-[#0D1B2A] tracking-[-0.01em]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Credibility Strip & Footnote (Clearer Separators & Enhanced Readability) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="pt-2 sm:pt-2.5 border-t border-[#0D1B2A]/[0.08] space-y-1.5"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-[12.5px] sm:text-[13px] font-sans leading-normal">
                <span className="font-medium text-[#0D1B2A]">Focused assessment</span>
                <span className="text-[#0D1B2A]/60 text-[11px] select-none" aria-hidden="true">•</span>
                <span className="font-medium text-[#0D1B2A]">Approximately one week*</span>
                <span className="text-[#0D1B2A]/60 text-[11px] select-none" aria-hidden="true">•</span>
                <span className="font-medium text-[#0D1B2A]">Executive-ready output</span>
              </div>
              <p className="text-[12px] sm:text-[12.5px] font-sans text-[#2A343F] italic tracking-[0.01em] leading-normal">
                *Subject to stakeholder access and information availability.
              </p>
            </motion.div>

            {/* Refined CTA Button (Narrower content-width footprint, subtle tone hover) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.54 }}
              className="pt-1.5"
            >
              <button
                type="button"
                onClick={() => onOpenDiscoveryModal("Discuss the AI Transformation Assessment")}
                className="inline-flex items-center justify-center px-4.5 sm:px-5 py-2.5 rounded-[3px] bg-[#0D1B2A] text-[#FFFFFF] text-[13px] sm:text-[13.5px] font-sans font-medium tracking-[0.01em] hover:bg-[#1A2E44] border border-[#0D1B2A] hover:border-[#243B53] transition-colors duration-200 cursor-pointer shadow-xs w-full sm:w-fit text-center"
              >
                Discuss the AI Transformation Assessment
              </button>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}
