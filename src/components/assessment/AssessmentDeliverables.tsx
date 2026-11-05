"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 05
 * WHAT YOU RECEIVE (#EEF1F0 Light Editorial Surface)
 * 
 * Purpose:
 * Executive Report Showcase presenting the tangible deliverables of the
 * assessment engagement without resorting to fake dashboards or fictional charts.
 * 
 * Design Principles (Accenture-Inspired Report Showcase):
 * - Surface: Solid #EEF1F0 (Refined light editorial surface following dark Section 04 #111312).
 * - Typography: Instrument Sans, Primary #111312, Body #56616B, Accent #C9A35B, Divider #D0D7D4.
 * - Layout:
 *   - Asymmetric 40 / 60 editorial split:
 *     - Left ~40% (lg:col-span-5): Eyebrow + Strong concise H2 + Framing thesis.
 *     - Right ~60% (lg:col-span-7): Editorial report-index composition with 3 core content groups:
 *       01 / WHERE TO FOCUS — Opportunity Map & Priorities
 *       02 / WHAT TO CONSIDER — Solutions & Feasibility
 *       03 / WHAT COMES NEXT — Practical Next Steps
 *   - Only two very thin horizontal dividers separating the three content groups on the right.
 * - Restraint:
 *   - Zero fake screenshots, zero fictional ROI claims, zero 3D document graphics, zero cards.
 *   - Both columns top-aligned (items-start) for immediate visual balance.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ReportGroup {
  number: string;
  category: string;
  title: string;
  description: string;
}

const reportGroups: ReportGroup[] = [
  {
    number: "01",
    category: "WHERE TO FOCUS",
    title: "Opportunity Map & Priorities",
    description: "Identify potential AI opportunities and prioritize them by business relevance.",
  },
  {
    number: "02",
    category: "WHAT TO CONSIDER",
    title: "Solutions & Feasibility",
    description: "Present recommended solution directions, feasibility considerations and potential business impact/ROI considerations.",
  },
  {
    number: "03",
    category: "WHAT COMES NEXT",
    title: "Practical Next Steps",
    description: "Outline the direction for moving from assessment findings toward transformation planning.",
  },
];

export default function AssessmentDeliverables() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Restrained Light Surface Rise)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 12 : 20;

  const leftGroupDelay = isMobile ? 0.08 : 0.15;
  const rightBaseDelay = isMobile ? 0.16 : 0.26;
  const rightStagger = isMobile ? 0.07 : 0.09;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="what-you-receive"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EEF1F0] text-[#111312] border-b border-[#D8DEE4] pt-[50px] sm:pt-[58px] lg:pt-[64px] xl:pt-[68px] pb-[50px] sm:pb-[58px] lg:pb-[64px] xl:pb-[68px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: ~40% (lg:col-span-5) — TOP-ALIGNED EYEBROW + H2 + THESIS     */}
          {/* Top-aligned with right report horizon, eliminating excessive whitespace   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: leftGroupDelay }}
            className="lg:col-span-5 flex flex-col items-start space-y-2.5 sm:space-y-3 pt-[1px]"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>What You Receive</span>
            </div>

            {/* Headline H2: 44–50px Desktop / 34–38px Mobile */}
            <h2
              aria-label="Clarity you can act on."
              className="text-[34px] min-[390px]:text-[36px] sm:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] font-heading font-medium text-[#111312] tracking-[-0.035em] leading-[1.08] sm:leading-[1.05]"
            >
              Clarity you can act on.
            </h2>

            {/* Supporting Description: 16–17px */}
            <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[540px] pt-0.5 sm:pt-1">
              An executive-ready assessment report outlining opportunities, recommended solutions, feasibility considerations and practical next steps.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ~60% (lg:col-span-7) — EDITORIAL REPORT-INDEX COMPOSITION   */}
          {/* 3 report groups separated by only two subtle horizontal hairlines         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-3 xl:pl-6 divide-y divide-[#D0D7D4]">
            {reportGroups.map((group, idx) => {
              const groupDelay = rightBaseDelay + idx * rightStagger;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: itemDuration, ease: transitionEase, delay: groupDelay }}
                  className={`flex flex-col items-start w-full ${
                    idx === 0
                      ? "pb-6 sm:pb-7 lg:pb-8 pt-0"
                      : idx === 1
                      ? "py-6 sm:py-7 lg:py-8"
                      : "pt-6 sm:pt-7 lg:pt-8 pb-0"
                  }`}
                >
                  {/* Small Muted-Gold Identifier in Instrument Sans */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] lg:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#56616B] leading-none">
                    <span className="text-[#C9A35B] font-semibold">{group.number}</span>
                    <span className="text-[#8E9791]">/</span>
                    <span>{group.category}</span>
                  </div>

                  {/* Group Title: 24–28px Desktop / 22–24px Mobile */}
                  <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] xl:text-[27px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.22] mt-2 sm:mt-2.5 mb-1.5 sm:mb-2">
                    {group.title}
                  </h3>

                  {/* Description: 16–17px Instrument Sans */}
                  <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[620px]">
                    {group.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
