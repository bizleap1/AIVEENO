"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 02
 * CLARITY BEFORE IMPLEMENTATION (#EBEFED Light Editorial Surface)
 * 
 * Purpose:
 * Explains what the AI Transformation Assessment is and why it matters
 * to business decision-makers, providing a clear light-surface contrast
 * immediately following the dark hero (#111312).
 * 
 * Editorial Design Principles (Accenture-Inspired Restraint):
 * - Surface: Solid #EBEFED (Noticeable light contrast after dark graphite hero).
 * - Compact natural section height: ~420–500px content-driven.
 * - Asymmetric Editorial Split:
 *   - Left ~43% (lg:col-span-5): Eyebrow + Large Editorial Headline (46–52px).
 *   - Right ~57% (lg:col-span-7): Block 1 (What It Is) + Hairline Divider + Block 2 (Why It Matters).
 * - Typography: Instrument Sans, Primary #111312, Body #56616B, Accent #C9A35B.
 * - Zero cards, zero rounded boxes, zero icons, zero illustrations, zero unnecessary buttons.
 * - Pure informative reading experience without hover micro-interactions or cursor changes.
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

  // Animation Timings (Restrained Sequential Reveal)
  const surfaceDuration = isMobile ? 0.40 : 0.65;
  const surfaceY = isMobile ? 14 : 22;

  const eyebrowDelay = isMobile ? 0.08 : 0.15;
  const headlineDelay = isMobile ? 0.14 : 0.22;
  const block1Delay = isMobile ? 0.20 : 0.30;
  const dividerDelay = isMobile ? 0.26 : 0.42;
  const block2Delay = isMobile ? 0.32 : 0.52;

  const itemDuration = isMobile ? 0.35 : 0.50;

  return (
    <motion.section
      id="clarity-before-implementation"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EBEFED] text-[#111312] border-b border-[#D8DEE4] py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: ~43% (lg:col-span-5) — EYEBROW + EDITORIAL HEADLINE          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-3.5 lg:space-y-4">
            
            {/* 1. Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
              className="inline-flex items-center gap-2.5 text-[12px] sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Starting Point</span>
            </motion.div>

            {/* 2. Headline with Masked Line-by-Line Reveal (46–52px Desktop / 34–38px Mobile) */}
            <h2
              aria-label="Clarity before implementation."
              className="tracking-[-0.035em]"
            >
              <span className="sr-only">Clarity before implementation.</span>
              
              {/* Mobile Line Rendering (34–38px) */}
              <div className="sm:hidden space-y-0.5" aria-hidden="true">
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: itemDuration, ease: transitionEase, delay: headlineDelay }}
                    className="block font-heading font-medium text-[34px] min-[390px]:text-[36px] sm:text-[38px] text-[#111312] leading-[1.08]"
                  >
                    Clarity before
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: itemDuration, ease: transitionEase, delay: headlineDelay + 0.06 }}
                    className="block font-heading font-medium text-[34px] min-[390px]:text-[36px] sm:text-[38px] text-[#111312] leading-[1.08]"
                  >
                    implementation.
                  </motion.span>
                </div>
              </div>

              {/* Desktop Line Rendering (46–52px, controlled editorial scale) */}
              <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: itemDuration, ease: transitionEase, delay: headlineDelay }}
                    style={{ fontSize: "clamp(44px, 3.8vw, 52px)", lineHeight: 1.04 }}
                    className="block font-heading font-medium text-[#111312] tracking-[-0.035em]"
                  >
                    Clarity before
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: itemDuration, ease: transitionEase, delay: headlineDelay + 0.08 }}
                    style={{ fontSize: "clamp(44px, 3.8vw, 52px)", lineHeight: 1.04 }}
                    className="block font-heading font-medium text-[#111312] tracking-[-0.035em]"
                  >
                    implementation.
                  </motion.span>
                </div>
              </div>
            </h2>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ~57% (lg:col-span-7) — WHAT IT IS + DIVIDER + WHY IT MATTERS*/}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-4 xl:pl-8">
            
            {/* CONTENT BLOCK 1: WHAT THE ASSESSMENT IS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: block1Delay }}
              className="flex flex-col"
            >
              {/* Small Label */}
              <div className="text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                What the Assessment Is
              </div>

              {/* Title (22–26px) */}
              <h3 className="text-[21px] sm:text-[23px] lg:text-[25px] xl:text-[26px] font-heading font-medium text-[#111312] tracking-[-0.02em] leading-[1.24] mt-2 sm:mt-2.5">
                A focused review of how your business operates today.
              </h3>

              {/* Description (16–18px) */}
              <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] font-sans font-normal leading-[1.62] mt-2 sm:mt-2.5 max-w-[660px]">
                We examine workflows, systems, data and operational inefficiencies to identify practical opportunities for AI-led transformation.
              </p>
            </motion.div>

            {/* THIN HORIZONTAL DIVIDER */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
              className="w-full h-px bg-[#111312]/[0.14] origin-left my-6 sm:my-7 lg:my-8"
              aria-hidden="true"
            />

            {/* CONTENT BLOCK 2: WHY IT MATTERS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: block2Delay }}
              className="flex flex-col"
            >
              {/* Small Label */}
              <div className="text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                Why It Matters
              </div>

              {/* Title (22–26px) */}
              <h3 className="text-[21px] sm:text-[23px] lg:text-[25px] xl:text-[26px] font-heading font-medium text-[#111312] tracking-[-0.02em] leading-[1.24] mt-2 sm:mt-2.5">
                Better decisions begin with understanding the business.
              </h3>

              {/* Description (16–18px) */}
              <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] font-sans font-normal leading-[1.62] mt-2 sm:mt-2.5 max-w-[660px]">
                The assessment helps distinguish meaningful opportunities from isolated ideas before moving toward solution design and implementation.
              </p>
            </motion.div>

          </div>

        </div>
      </Container>
    </motion.section>
  );
}
