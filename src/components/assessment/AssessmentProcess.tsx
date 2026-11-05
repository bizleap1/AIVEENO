"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 04
 * HOW THE ASSESSMENT WORKS (#111312 Dark Graphite Editorial Surface)
 * 
 * Purpose:
 * Explains the 6-step diagnostic consulting process that turns business
 * context into prioritized transformation opportunities and an executive-ready roadmap.
 * 
 * Design Principles (Accenture-Inspired Dark Editorial Process):
 * - Surface: Solid #111312 (Deep dark graphite, providing visual rhythm & contrast).
 * - Typography: Instrument Sans, Primary #F5F7F6, Muted #AEB3AF, Accent #C9A35B.
 * - Layout:
 *   - Introduction at top (Eyebrow, concise H2, framing description).
 *   - 6 approved process steps organized into 3 balanced rows (2 columns per row):
 *     Row 1: 01 Qualification | 02 Stakeholder Conversations
 *     Row 2: 03 Analysis | 04 Opportunity Mapping
 *     Row 3: 05 Prioritization | 06 Roadmap & Report
 *   - Very subtle horizontal hairlines (1px white/[0.08]) between the rows.
 * - Restraint:
 *   - Zero cards, zero rounded boxes, zero timelines with dots, zero arrows, zero dashboard graphics.
 *   - Pure typography, whitespace, and editorial hierarchy.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ProcessStep {
  number: string;
  total: string;
  title: string;
  description: string;
}

const processRows: ProcessStep[][] = [
  [
    {
      number: "01",
      total: "06",
      title: "Qualification",
      description: "Establish business priorities and the scope of the assessment.",
    },
    {
      number: "02",
      total: "06",
      title: "Stakeholder Conversations",
      description: "Gather information about workflows, systems and challenges.",
    },
  ],
  [
    {
      number: "03",
      total: "06",
      title: "Analysis",
      description: "Examine existing operations, data and technology needs.",
    },
    {
      number: "04",
      total: "06",
      title: "Opportunity Mapping",
      description: "Identify potential areas for AI and automation.",
    },
  ],
  [
    {
      number: "05",
      total: "06",
      title: "Prioritization",
      description: "Consider feasibility, potential impact and business relevance.",
    },
    {
      number: "06",
      total: "06",
      title: "Roadmap & Report",
      description: "Bring findings and recommended next steps into an executive-ready report.",
    },
  ],
];

export default function AssessmentProcess() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Subtle Dark Surface Rise)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 14 : 22;

  const headerDelay = isMobile ? 0.08 : 0.15;
  const dividerDelay = isMobile ? 0.14 : 0.22;
  const stepBaseDelay = isMobile ? 0.18 : 0.28;
  const stepStagger = isMobile ? 0.06 : 0.08;
  const itemDuration = isMobile ? 0.35 : 0.50;

  return (
    <motion.section
      id="how-the-assessment-works"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#111312] text-[#F5F7F6] border-b border-white/[0.08] pt-[48px] sm:pt-[54px] lg:pt-[60px] xl:pt-[64px] pb-[48px] sm:pb-[54px] lg:pb-[60px] xl:pb-[64px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-7 sm:space-y-8 lg:space-y-10">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2 + PROCESS THESIS                          */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: headerDelay }}
            className="flex flex-col items-start max-w-[820px] space-y-2.5 sm:space-y-3"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>How the Assessment Works</span>
            </div>

            {/* Headline H2: 40–46px Desktop / 32–36px Mobile */}
            <h2
              aria-label="From questions to clarity."
              className="text-[32px] min-[390px]:text-[34px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-heading font-medium text-[#F5F7F6] tracking-[-0.03em] leading-[1.08] sm:leading-[1.06]"
            >
              From questions to clarity.
            </h2>

            {/* Supporting Description: 16–17px */}
            <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#AEB3AF] font-sans font-normal leading-[1.58] max-w-[680px]">
              A structured assessment process that turns business context into prioritized opportunities and practical next steps.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* SUBTLE FULL-WIDTH DIVIDER (1px white/[0.08])                               */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
            className="w-full h-px bg-white/[0.08] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* 2. SIX PROCESS STEPS: 3 BALANCED ROWS / 2 COLUMNS PER ROW                 */}
          {/* Clean 01 02 / 03 04 / 05 06 reading order with subtle hairlines           */}
          {/* ========================================================================= */}
          <div className="flex flex-col space-y-8 sm:space-y-9 lg:space-y-10">
            {processRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-7 sm:gap-y-8 ${
                  rowIdx > 0 ? "border-t border-white/[0.06] pt-8 sm:pt-9 lg:pt-10" : ""
                }`}
              >
                {row.map((step, colIdx) => {
                  const stepIndex = rowIdx * 2 + colIdx;
                  const stepDelay = stepBaseDelay + stepIndex * stepStagger;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: itemDuration, ease: transitionEase, delay: stepDelay }}
                      className="flex flex-col items-start"
                    >
                      {/* Step Number in Instrument Sans with Muted Gold (#C9A35B) */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] lg:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#AEB3AF] leading-none">
                        <span className="text-[#C9A35B] font-semibold">{step.number}</span>
                        <span className="text-white/30">/</span>
                        <span className="text-white/40">{step.total}</span>
                      </div>

                      {/* Stage Title: 24–28px Desktop / 22–24px Mobile */}
                      <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] xl:text-[27px] font-heading font-medium text-[#F5F7F6] tracking-[-0.025em] leading-[1.2] mt-2 sm:mt-2.5 mb-2 sm:mb-2.5">
                        {step.title}
                      </h3>

                      {/* Description: 16–17px Instrument Sans */}
                      <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#AEB3AF] font-sans font-normal leading-[1.58] max-w-[560px]">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
