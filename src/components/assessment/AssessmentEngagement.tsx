"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 06
 * TIMELINE & COMMERCIAL POSITIONING (#F5F7F6 Light Editorial Surface)
 * 
 * Final Polish (Accenture-Level Discipline):
 * - Surface: Solid #F5F7F6 (Clean light surface following Section 05 #EEF1F0).
 * - Typography: Instrument Sans throughout.
 *   - Main Headline: Controlled 42–46px desktop, 30–34px mobile.
 *   - Typical Duration Hero: ~1 week at 70–76px desktop, 54–60px mobile.
 *   - Paid Assessment Statement: 30–34px desktop, 25–28px mobile.
 *   - Supporting copy: 15–16.5px with refined line-height.
 * - Layout:
 *   - Top: Eyebrow + Headline.
 *   - Thin 1px full-width horizontal divider (#D9DDDA).
 *   - Below: Two large editorial information areas (Duration left | Model right).
 *   - Single subtle vertical divider between columns on desktop, horizontal on mobile.
 * - Natural compact height: Content-driven ~360–400px (zero 100vh forcing).
 * - Zero cards, zero countdowns, zero dashboards, zero CTAs.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function AssessmentEngagement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Subtle Reveal: 550–700ms range)
  const surfaceDuration = isMobile ? 0.40 : 0.65;
  const surfaceY = isMobile ? 12 : 20;

  const headerDelay = isMobile ? 0.08 : 0.15;
  const dividerDelay = isMobile ? 0.14 : 0.22;
  const leftColDelay = isMobile ? 0.18 : 0.28;
  const rightColDelay = isMobile ? 0.24 : 0.36;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="engagement-model"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] border-b border-[#D8DEE4] pt-[38px] sm:pt-[44px] lg:pt-[48px] xl:pt-[52px] pb-[38px] sm:pb-[44px] lg:pb-[48px] xl:pb-[52px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2                                           */}
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
              <span>The Engagement</span>
            </div>

            {/* Headline H2: 42–46px Desktop / 30–34px Mobile */}
            <h2
              aria-label="Focused in scope. Clear in direction."
              className="text-[30px] min-[390px]:text-[32px] sm:text-[34px] lg:text-[42px] xl:text-[46px] font-heading font-medium text-[#111312] tracking-[-0.03em] leading-[1.08] sm:leading-[1.06]"
            >
              Focused in scope. Clear in direction.
            </h2>
          </motion.div>

          {/* ========================================================================= */}
          {/* SUBTLE FULL-WIDTH DIVIDER (1px #D9DDDA)                                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
            className="w-full h-px bg-[#D9DDDA] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* 2. TWO LARGE EDITORIAL INFORMATION AREAS                                  */}
          {/* Left: Typical Duration (~1 week hero) | Right: Engagement Model (Paid)     */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#D9DDDA] pt-1 sm:pt-2">
            
            {/* LEFT AREA: TYPICAL DURATION (~1 week hero) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: leftColDelay }}
              className="lg:col-span-6 flex flex-col items-start lg:pr-10 xl:pr-16 pb-6 lg:pb-0"
            >
              {/* Small Label */}
              <div className="text-[11px] sm:text-[11.5px] lg:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#56616B] leading-none mb-3 sm:mb-3.5">
                Typical Duration
              </div>

              {/* Large Typographic Hero Statement: ~1 week (70–76px Desktop / 54–60px Mobile) */}
              <div className="text-[54px] sm:text-[62px] lg:text-[70px] xl:text-[76px] font-heading font-medium text-[#111312] tracking-[-0.035em] leading-[0.98] mb-3 sm:mb-3.5 select-none">
                ~1 week
              </div>

              {/* Supporting Copy: Direct & Non-Repetitive */}
              <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[480px]">
                Subject to stakeholder access and information availability.
              </p>
            </motion.div>

            {/* RIGHT AREA: ENGAGEMENT MODEL */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: itemDuration, ease: transitionEase, delay: rightColDelay }}
              className="lg:col-span-6 flex flex-col items-start lg:pl-10 xl:pl-16 pt-6 sm:pt-7 lg:pt-0"
            >
              {/* Small Label */}
              <div className="text-[11px] sm:text-[11.5px] lg:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#56616B] leading-none mb-3 sm:mb-3.5">
                Engagement Model
              </div>

              {/* Statement: A focused, paid assessment. (30–34px Desktop / 25–28px Mobile) */}
              <div className="text-[25px] sm:text-[27px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.2] mb-3 sm:mb-3.5">
                A focused, paid assessment.
              </div>

              {/* Supporting Copy */}
              <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[500px]">
                A structured consulting engagement that helps establish priorities before broader transformation work.
              </p>
            </motion.div>

          </div>

        </div>
      </Container>
    </motion.section>
  );
}
