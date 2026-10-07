"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 02
 * THE BUSINESS CHALLENGE (#EEF1F0)
 * 
 * Accenture-Inspired Compact Editorial Composition:
 * - Background: #EEF1F0 (matching homepage The Shift alternate light surface).
 * - Total section height: Compact ~420–490px (eliminates 50/50 consulting slide dead space).
 * - Desktop vertical padding: 72–88px (pt-[76px] lg:pt-[84px] pb-[76px] lg:pb-[84px]).
 * - Asymmetric full-width editorial flow:
 *   1. Eyebrow: THE BUSINESS CHALLENGE
 *   2. Headline: Why tool-first AI adoption produces limited return. (56–60px, Instrument Sans 500, max-w-[800px])
 *   3. Supporting copy: 18–20px, max-w-[620px] (Organizations often invest in isolated tools...)
 *   4. Thin drawn hairline divider
 *   5. Closing editorial statement: Tool adoption ≠ business transformation (28–34px with muted gold ≠)
 * - Zero cards, zero diagrams, zero images, zero hover simulation.
 * - Easing: strictly cubic-bezier(0.22, 1, 0.36, 1).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function TransformationChallenge() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Surface Transition: Desktop 700ms (y: 40) | Mobile 320ms (y: 20)
  const surfaceDuration = isMobile ? 0.32 : 0.7;
  const surfaceY = isMobile ? 20 : 40;

  // Staggered Sequential Delays (Desktop vs Mobile)
  const eyebrowDelay = isMobile ? 0.16 : 0.36;
  const h2Line1Delay = isMobile ? 0.22 : 0.44;
  const h2Line2Delay = isMobile ? 0.28 : 0.52;
  const h2Line3Delay = isMobile ? 0.34 : 0.60;
  const h2Duration = isMobile ? 0.42 : 0.65;
  const copyDelay = isMobile ? 0.38 : 0.60;
  const copyDuration = isMobile ? 0.32 : 0.40;
  const dividerDelay = isMobile ? 0.46 : 0.68;
  const dividerDuration = isMobile ? 0.40 : 0.60;
  const thesisDelay = isMobile ? 0.52 : 0.76;
  const thesisDuration = isMobile ? 0.35 : 0.50;

  return (
    <motion.section
      initial={{ opacity: 0.96, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full bg-[#EEF1F0] text-[#0E1C2A] pt-14 sm:pt-16 lg:pt-[78px] xl:pt-[84px] pb-14 sm:pb-16 lg:pb-[78px] xl:pb-[84px] border-b border-[#DADFDB] shadow-[0_-18px_45px_rgba(14,28,42,0.04)]"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        <div className="max-w-[1140px] flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">
          
          {/* ========================================================================= */}
          {/* 1. EYEBROW REVEAL WITH MUTED GOLD DASH                                    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
            className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-semibold uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>The Business Challenge</span>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. HEADLINE & SUPPORTING COPY (EDITORIAL ASYMMETRIC FLOW)                 */}
          {/* ========================================================================= */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            
            {/* Display H2: 56–60px Desktop (Instrument Sans 500, max-w-[820px]) */}
            <h2 className="max-w-[820px] tracking-[-0.035em]">
              {/* Mobile Line-by-Line (38–42px) */}
              <div className="sm:hidden space-y-0.5" aria-hidden="true">
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line1Delay }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.04]"
                  >
                    Why tool-first AI
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line2Delay }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.04]"
                  >
                    adoption produces
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line3Delay }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.04]"
                  >
                    limited return.
                  </motion.span>
                </div>
              </div>

              {/* Desktop / Tablet Line Structure (56–60px, 2 Clean Editorial Lines) */}
              <div className="hidden sm:block space-y-0.5 sm:space-y-1" aria-hidden="true">
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line1Delay }}
                    className="block font-sans font-medium text-[46px] lg:text-[54px] xl:text-[58px] text-[#0E1C2A] leading-[1.04]"
                  >
                    Why tool-first AI adoption
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line2Delay }}
                    className="block font-sans font-medium text-[46px] lg:text-[54px] xl:text-[58px] text-[#0E1C2A] leading-[1.04]"
                  >
                    produces limited return.
                  </motion.span>
                </div>
              </div>

              <span className="sr-only">
                Why tool-first AI adoption produces limited return.
              </span>
            </h2>

            {/* Supporting Copy: 18–20px Desktop, max-w-[620px] */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: copyDuration, ease: transitionEase, delay: copyDelay }}
              className="max-w-[620px] text-[15.5px] sm:text-[17.5px] lg:text-[19px] text-[#56616B] leading-[1.58] font-normal"
            >
              Organizations often invest in isolated tools without redesigning the workflows and systems around them. The result is experimentation without meaningful operational change.
            </motion.p>

          </div>

          {/* ========================================================================= */}
          {/* 3. THIN HORIZONTAL DRAWN DIVIDER                                          */}
          {/* ========================================================================= */}
          <div className="pt-2 sm:pt-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: dividerDuration, ease: transitionEase, delay: dividerDelay }}
              className="origin-left h-px bg-[#DADFDB] w-full"
              aria-hidden="true"
            />
          </div>

          {/* ========================================================================= */}
          {/* 4. CLOSING EDITORIAL STATEMENT: Tool adoption ≠ business transformation   */}
          {/* ========================================================================= */}
          <div className="pt-1 select-none">
            <div className="overflow-hidden pb-[0.12em]">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisDelay }}
                className="font-sans font-medium text-[22px] min-[390px]:text-[24px] sm:text-[27px] lg:text-[31px] xl:text-[33px] text-[#0E1C2A] tracking-[-0.025em] flex flex-wrap items-baseline gap-x-2 sm:gap-x-2.5"
              >
                <span>Tool adoption</span>
                <span
                  className="text-[#C9A35B] font-light text-[26px] min-[390px]:text-[28px] sm:text-[32px] lg:text-[38px] leading-none"
                  aria-label="does not equal"
                >
                  ≠
                </span>
                <span>business transformation</span>
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
