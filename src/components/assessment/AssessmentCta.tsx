"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 08
 * FINAL CTA (#F5F7F6 Light Editorial Surface)
 * 
 * Purpose:
 * Primary contextual conversion section for the AI Transformation Assessment page.
 * Bridges Section 07's dark strategic narrative to the dark global footer.
 * 
 * Design Principles (Accenture-Inspired Editorial Conversion):
 * - Surface: Solid #F5F7F6 (High-contrast light surface between dark Section 07 and dark footer).
 * - Typography: Instrument Sans, Primary #111312, Body #56616B, Accent #C9A35B, Divider #D9DDDA.
 * - Layout:
 *   - Asymmetric split composition:
 *     - Left 55% (lg:col-span-7): Eyebrow + Prominent Headline (46–52px).
 *     - Right 45% (lg:col-span-5): Supporting thesis + Primary Dark CTA button.
 *   - Below: One thin horizontal divider (#D9DDDA).
 *   - Informational footer row:
 *     - Left: "A focused, paid assessment engagement."
 *     - Right: "Scope and next steps discussed before engagement."
 * - Restraint:
 *   - Zero fake credibility badges, zero secondary buttons, zero arrows, zero icons, zero illustrations.
 *   - Natural compact height: Content-driven ~340–400px.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface AssessmentCtaProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function AssessmentCta({ onOpenDiscoveryModal }: AssessmentCtaProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("AI Transformation Assessment Final CTA");
    } else {
      window.location.href = "/contact";
    }
  };

  // Animation Timings (Smooth Dark-to-Light Surface Reveal)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 12 : 20;

  const eyebrowDelay = isMobile ? 0.08 : 0.15;
  const headlineDelay = isMobile ? 0.12 : 0.22;
  const copyDelay = isMobile ? 0.16 : 0.28;
  const ctaDelay = isMobile ? 0.20 : 0.36;
  const dividerDelay = isMobile ? 0.24 : 0.42;
  const footerRowDelay = isMobile ? 0.28 : 0.48;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="assessment-cta"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] border-b border-[#D8DEE4] pt-[52px] sm:pt-[60px] lg:pt-[68px] xl:pt-[72px] pb-[52px] sm:pb-[60px] lg:pb-[68px] xl:pb-[72px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-8 sm:space-y-9 lg:space-y-11">
          
          {/* ========================================================================= */}
          {/* 1. ASYMMETRIC MAIN SPLIT (LEFT 55% / RIGHT 45%)                           */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
            
            {/* LEFT 55%: EYEBROW + EDITORIAL H2 */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-2.5 sm:space-y-3">
              {/* Eyebrow with Muted Gold Dash */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: itemDuration, ease: transitionEase, delay: eyebrowDelay }}
                className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Take the Next Step</span>
              </motion.div>

              {/* Headline H2: 46–52px Desktop / 32–36px Mobile */}
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: itemDuration, ease: transitionEase, delay: headlineDelay }}
                aria-label="Start with a clearer picture."
                className="text-[32px] min-[390px]:text-[34px] sm:text-[36px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-heading font-medium text-[#111312] tracking-[-0.035em] leading-[1.08] sm:leading-[1.05]"
              >
                Start with a clearer picture.
              </motion.h2>
            </div>

            {/* RIGHT 45%: SUPPORTING PARAGRAPH + PRIMARY CTA BUTTON */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-5 sm:space-y-6 lg:pl-4 xl:pl-6">
              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: itemDuration, ease: transitionEase, delay: copyDelay }}
                className="text-[15.5px] sm:text-[16px] lg:text-[17px] xl:text-[17.5px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[520px]"
              >
                Discuss your business priorities and explore whether a focused AI Transformation Assessment is the right starting point.
              </motion.p>

              {/* Primary Dark Graphite CTA Button (Content-based width desktop / Full width mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: itemDuration, ease: transitionEase, delay: ctaDelay }}
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex h-[50px] sm:h-[52px] lg:h-[54px] items-center justify-center rounded-[4px] bg-[#111312] hover:bg-[#1E2320] border border-[#111312] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-7 sm:px-9 text-[15px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.12)] w-full sm:w-auto text-center select-none"
                  aria-label="Discuss the AI Transformation Assessment"
                >
                  Discuss the AI Transformation Assessment
                </button>
              </motion.div>
            </div>

          </div>

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
          {/* INFORMATIONAL FOOTER ROW (RESTRAINED DUAL METADATA)                       */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: footerRowDelay }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-6 text-[13px] sm:text-[13.5px] font-sans font-normal text-[#56616B] leading-relaxed"
          >
            <div>A focused, paid assessment engagement.</div>
            <div>Scope and next steps discussed before engagement.</div>
          </motion.div>

        </div>
      </Container>
    </motion.section>
  );
}
