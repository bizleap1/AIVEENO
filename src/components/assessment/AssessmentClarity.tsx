"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 02
 * CLARITY BEFORE IMPLEMENTATION (#EBEFED Light Editorial Surface)
 * 
 * Refined Editorial Architecture (Accenture-Level Discipline):
 * - Surface: Solid #EBEFED (Crisp contrast immediately following dark graphite hero).
 * - Compact natural section height: Content-driven with ~64–72px top/bottom padding.
 * - Precision Editorial Alignment:
 *   - Both left & right columns aligned at top (items-start), eliminating empty upper-left space.
 *   - Left Eyebrow ("THE STARTING POINT") aligns on the same top horizon as Right Label ("WHAT THE ASSESSMENT IS").
 *   - Left ~42% (lg:col-span-5): Eyebrow + Controlled Editorial Heading (52–58px desktop, 34–38px mobile).
 *   - Right ~58% (lg:col-span-7): Block 1 (What It Is) + 1px #CDD5D0 Divider + Block 2 (Why It Matters).
 * - Typography: Instrument Sans, Primary #111312, Body #56616B, Accent #C9A35B, Divider #CDD5D0.
 * - Zero cards, zero rounded boxes, zero icons, zero illustrations, zero hover micro-interactions.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function AssessmentClarity() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Restrained Sequential Reveal: 650–750ms light-surface rise)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 12 : 20;

  // Snappy inside timings
  const leftGroupDelay = isMobile ? 0.08 : 0.16;
  const block1Delay = isMobile ? 0.16 : 0.26;
  const dividerDelay = isMobile ? 0.22 : 0.36;
  const block2Delay = isMobile ? 0.28 : 0.46;

  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="clarity-before-implementation"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EBEFED] text-[#111312] border-b border-[#D8DEE4] pt-[54px] sm:pt-[62px] lg:pt-[68px] xl:pt-[72px] pb-[54px] sm:pb-[62px] lg:pb-[68px] xl:pb-[72px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: ~42% (lg:col-span-5) — TOP-ALIGNED EYEBROW + EDITORIAL H2    */}
          {/* Top-aligned with right column horizon, eliminating awkward blank space    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: leftGroupDelay }}
            className="lg:col-span-5 flex flex-col items-start space-y-3 sm:space-y-3.5 lg:space-y-4 pt-[1px]"
          >
            
            {/* 1. Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Starting Point</span>
            </div>

            {/* 2. Main Heading: Controlled 52–58px Desktop / 34–38px Mobile */}
            <h2
              aria-label="Clarity before implementation."
              className="tracking-[-0.035em] text-[#111312] font-heading font-medium"
            >
              <span className="sr-only">Clarity before implementation.</span>
              
              {/* Mobile Line Structure (34–38px) */}
              <div className="sm:hidden space-y-0.5" aria-hidden="true">
                <span className="block font-heading font-medium text-[34px] min-[390px]:text-[36px] sm:text-[38px] text-[#111312] leading-[1.08] tracking-[-0.03em]">
                  Clarity before
                </span>
                <span className="block font-heading font-medium text-[34px] min-[390px]:text-[36px] sm:text-[38px] text-[#111312] leading-[1.08] tracking-[-0.03em]">
                  implementation.
                </span>
              </div>

              {/* Desktop Line Structure (Controlled 52–58px Instrument Sans 500) */}
              <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                <span
                  style={{ fontSize: "clamp(48px, 4.1vw, 58px)", lineHeight: 1.04 }}
                  className="block font-heading font-medium text-[#111312] tracking-[-0.035em]"
                >
                  Clarity before
                </span>
                <span
                  style={{ fontSize: "clamp(48px, 4.1vw, 58px)", lineHeight: 1.04 }}
                  className="block font-heading font-medium text-[#111312] tracking-[-0.035em]"
                >
                  implementation.
                </span>
              </div>
            </h2>

          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ~58% (lg:col-span-7) — WHAT IT IS + DIVIDER + WHY IT MATTERS*/}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-3 xl:pl-6">
            
            {/* CONTENT BLOCK 1: WHAT THE ASSESSMENT IS */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: block1Delay }}
              className="flex flex-col items-start w-full"
            >
              {/* Small Label */}
              <div className="text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
                What the Assessment Is
              </div>

              {/* Title (26–30px Desktop / 21–23px Mobile) */}
              <h3 className="text-[21px] sm:text-[23px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.22] mt-2 sm:mt-2.5">
                A focused review of how your business operates today.
              </h3>

              {/* Description (17–18px Desktop / 15–16px Mobile) */}
              <p className="text-[15.5px] sm:text-[16px] lg:text-[17px] xl:text-[18px] text-[#56616B] font-sans font-normal leading-[1.58] mt-2 sm:mt-2.5 max-w-[640px]">
                We examine workflows, systems, data and operational inefficiencies to identify practical opportunities for AI-led transformation.
              </p>
            </motion.div>

            {/* THIN HORIZONTAL DIVIDER (1px #CDD5D0) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.50, ease: transitionEase, delay: dividerDelay }}
              className="w-full h-px bg-[#CDD5D0] origin-left my-5 sm:my-6 lg:my-6.5 xl:my-7"
              aria-hidden="true"
            />

            {/* CONTENT BLOCK 2: WHY IT MATTERS */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: block2Delay }}
              className="flex flex-col items-start w-full"
            >
              {/* Small Label */}
              <div className="text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
                Why It Matters
              </div>

              {/* Title (26–30px Desktop / 21–23px Mobile) */}
              <h3 className="text-[21px] sm:text-[23px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.22] mt-2 sm:mt-2.5">
                Better decisions begin with understanding the business.
              </h3>

              {/* Description (17–18px Desktop / 15–16px Mobile) */}
              <p className="text-[15.5px] sm:text-[16px] lg:text-[17px] xl:text-[18px] text-[#56616B] font-sans font-normal leading-[1.58] mt-2 sm:mt-2.5 max-w-[640px]">
                The assessment helps distinguish meaningful opportunities from isolated ideas before moving toward solution design and implementation.
              </p>
            </motion.div>

          </div>

        </div>
      </Container>
    </motion.section>
  );
}
