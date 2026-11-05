"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 05
 * WHAT YOU RECEIVE (#EEF1F0 Light Editorial Surface)
 * 
 * Refined Full-Width Editorial Report Index (Accenture-Inspired Presentation):
 * - Surface: Solid #EEF1F0 (Smooth contrast following dark Section 04 #111312).
 * - Full-Width Layout:
 *   - Top: Eyebrow + Prominent Headline + Concise framing thesis.
 *   - Thin horizontal full-width divider.
 *   - 3 Full-Width Aligned Editorial Bands (Index | Title | Explanation):
 *     01 — Opportunity Map & Priorities
 *     02 — Solutions & Feasibility
 *     03 — Practical Next Steps
 * - Desktop Alignment:
 *   - 3 columns per band across 12-column grid:
 *     Col 1 (1 col): Muted-gold index (01, 02, 03)
 *     Col 2 (5 cols): Large deliverable heading (24–28px)
 *     Col 3 (6 cols): Concise explanation (16–17px, #56616B)
 * - Restraint:
 *   - Zero cards, zero rounded boxes, zero icons, zero fake dashboard previews.
 *   - Only thin horizontal dividers (#D0D7D4) between bands.
 * - Mobile: Single-column stacked bands (number -> title -> description).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ReportBand {
  index: string;
  title: string;
  description: string;
}

const reportBands: ReportBand[] = [
  {
    index: "01",
    title: "Opportunity Map & Priorities",
    description: "Potential AI opportunities organized by business relevance and priority.",
  },
  {
    index: "02",
    title: "Solutions & Feasibility",
    description: "Recommended solutions, feasibility considerations and potential business impact/ROI considerations.",
  },
  {
    index: "03",
    title: "Practical Next Steps",
    description: "A direction for moving from assessment findings toward transformation planning.",
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

  // Animation Timings (Subtle Light Surface Rise & Staggered Bands)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 12 : 20;

  const headerDelay = isMobile ? 0.08 : 0.15;
  const dividerDelay = isMobile ? 0.14 : 0.22;
  const bandBaseDelay = isMobile ? 0.18 : 0.26;
  const bandStagger = isMobile ? 0.06 : 0.08;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="what-you-receive"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EEF1F0] text-[#111312] border-b border-[#D8DEE4] pt-[42px] sm:pt-[48px] lg:pt-[54px] xl:pt-[58px] pb-[42px] sm:pb-[48px] lg:pb-[54px] xl:pb-[58px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2 + INTRODUCTION THESIS                     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: headerDelay }}
            className="flex flex-col items-start max-w-[820px] space-y-2 sm:space-y-2.5"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>What You Receive</span>
            </div>

            {/* Headline H2: 38–44px Desktop / 32–36px Mobile */}
            <h2
              aria-label="Clarity you can act on."
              className="text-[32px] min-[390px]:text-[34px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-heading font-medium text-[#111312] tracking-[-0.03em] leading-[1.08] sm:leading-[1.05]"
            >
              Clarity you can act on.
            </h2>

            {/* Framing Introduction */}
            <p className="text-[15px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#56616B] font-sans font-normal leading-[1.54] max-w-[640px]">
              An executive-ready assessment report with clear priorities and practical next steps.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* SUBTLE FULL-WIDTH DIVIDER (1px #D0D7D4)                                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
            className="w-full h-px bg-[#D0D7D4] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* 2. THREE FULL-WIDTH EDITORIAL REPORT BANDS                                 */}
          {/* Desktop: 3 aligned columns (Index | Title | Description)                   */}
          {/* ========================================================================= */}
          <div className="flex flex-col divide-y divide-[#D0D7D4]">
            {reportBands.map((band, idx) => {
              const bandDelay = bandBaseDelay + idx * bandStagger;

              return (
                <motion.div
                  key={band.index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: itemDuration, ease: transitionEase, delay: bandDelay }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-8 items-start lg:items-baseline py-5 sm:py-6 lg:py-6.5 xl:py-7 first:pt-2 sm:first:pt-3 lg:first:pt-4 last:pb-1"
                >
                  {/* Column 1: Small Gold Index (lg:col-span-1) */}
                  <div className="lg:col-span-1 flex items-center">
                    <span className="text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-semibold tracking-[0.14em] uppercase text-[#C9A35B] leading-none">
                      {band.index}
                    </span>
                  </div>

                  {/* Column 2: Deliverable Title (lg:col-span-5) */}
                  <div className="lg:col-span-5 flex items-center">
                    <h3 className="text-[21px] sm:text-[23px] lg:text-[25px] xl:text-[27px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.22]">
                      {band.title}
                    </h3>
                  </div>

                  {/* Column 3: Concise Explanation (lg:col-span-6) */}
                  <div className="lg:col-span-6 flex items-center">
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[620px]">
                      {band.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
