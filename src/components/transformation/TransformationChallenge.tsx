"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 02
 * THE BUSINESS CHALLENGE (#EEF1F0)
 * 
 * Accenture-Inspired Editorial Narrative & Thesis Band:
 * - Background: #EEF1F0 (matching homepage The Shift alternate light surface).
 * - Reduced excessive vertical whitespace (desktop: 88–96px top, 72–88px bottom).
 * - Tightened two-column layout with clear copy hierarchy (lead paragraph 20–22px, body 16–17px).
 * - Full-width editorial thesis band: TOOL ADOPTION ≠ BUSINESS TRANSFORMATION.
 *   - Thin drawn hairline divider.
 *   - Tool Adoption: 26–32px, Instrument Sans 500, dark ink.
 *   - Business Transformation: 26–32px, Instrument Sans 500, dark ink.
 *   - ≠ symbol: Muted gold (#C9A35B), 34–40px.
 * - Sequential entrance animation:
 *   1. Grey surface rises
 *   2. Eyebrow reveals
 *   3. H2 masked reveal
 *   4. First paragraph fade
 *   5. Second paragraph fade
 *   6. Divider draws full width
 *   7. Tool Adoption reveals
 *   8. Gold ≠ appears
 *   9. Business Transformation reveals
 * - Zero hover states, zero cards, zero icons, zero AI graphics.
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

  // Timings: Desktop (700ms surface) vs Mobile (320ms surface)
  const surfaceDuration = isMobile ? 0.32 : 0.7;
  const surfaceY = isMobile ? 22 : 44;

  // Staggered Delays
  const eyebrowDelay = isMobile ? 0.18 : 0.40;
  const h2Line1Delay = isMobile ? 0.24 : 0.48;
  const h2Line2Delay = isMobile ? 0.30 : 0.56;
  const h2Line3Delay = isMobile ? 0.36 : 0.64;
  const h2Duration = isMobile ? 0.42 : 0.65;
  const p1Delay = isMobile ? 0.42 : 0.70;
  const p2Delay = isMobile ? 0.48 : 0.78;
  const pDuration = isMobile ? 0.32 : 0.4;
  const dividerDelay = isMobile ? 0.54 : 0.86;
  const dividerDuration = isMobile ? 0.45 : 0.65;
  const thesisPart1Delay = isMobile ? 0.60 : 0.96;
  const thesisNotEqualDelay = isMobile ? 0.66 : 1.04;
  const thesisPart2Delay = isMobile ? 0.72 : 1.12;

  return (
    <motion.section
      initial={{ opacity: 0.96, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full bg-[#EEF1F0] text-[#0E1C2A] pt-14 sm:pt-16 lg:pt-[92px] xl:pt-[96px] pb-14 sm:pb-16 lg:pb-[78px] xl:pb-[84px] border-b border-[#DADFDB] shadow-[0_-18px_45px_rgba(14,28,42,0.04)]"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* TWO-COLUMN EDITORIAL PROBLEM REFRAME                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: EYEBROW & 3-LINE DISPLAY H2 (5-COLS) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* 1. Eyebrow Reveal with Golden Dash */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
              className="inline-flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Business Challenge</span>
            </motion.div>

            {/* 2. Headline Line-by-Line Masked Reveal (3 Clean Lines, 54-58px desktop, 38-42px mobile) */}
            <h2 className="space-y-0.5 sm:space-y-1">
              <div className="overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line1Delay }}
                  className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] sm:text-[46px] lg:text-[52px] xl:text-[56px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.04]"
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
                  className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] sm:text-[46px] lg:text-[52px] xl:text-[56px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.04]"
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
                  className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] sm:text-[46px] lg:text-[52px] xl:text-[56px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.04]"
                >
                  limited return.
                </motion.span>
              </div>
            </h2>

          </div>

          {/* RIGHT COLUMN: REFINED EDITORIAL HIERARCHY (7-COLS, MAX-WIDTH ~720PX) */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-4 sm:space-y-5 max-w-[720px] lg:pt-1">
            
            {/* 3. Paragraph 1: Executive Lead-in (Slightly larger size for hierarchy) */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: pDuration, ease: transitionEase, delay: p1Delay }}
              className="text-[17.5px] sm:text-[18.5px] lg:text-[21px] text-[#0E1C2A] leading-[1.45] font-normal tracking-[-0.01em]"
            >
              Organizations frequently invest in disconnected point tools, only to discover that core workflows, operating processes and decision-making remain fundamentally unchanged.
            </motion.p>

            {/* 4. Paragraph 2: Structural Analysis (Supporting regular size) */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: pDuration, ease: transitionEase, delay: p2Delay }}
              className="text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.6] font-normal"
            >
              Deploying isolated tools without redesigning underlying systems leaves daily operational friction in place. Without transforming how workflows and systems connect, experimentation spend rarely translates into measurable business value.
            </motion.p>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* FULL-WIDTH EDITORIAL THESIS BAND (NO BOX, NO CARD, PURE TYPOGRAPHY)       */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-14 lg:mt-16 pt-2">
          
          {/* Thin Drawn Horizontal Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: dividerDuration, ease: transitionEase, delay: dividerDelay }}
            className="origin-left h-px bg-[#DADFDB] w-full mb-8 sm:mb-9 lg:mb-10"
            aria-hidden="true"
          />

          {/* Desktop Layout: Balanced Horizontal Editorial Statement */}
          <div className="hidden sm:flex items-center justify-between lg:justify-center lg:gap-10 xl:gap-14 text-center select-none">
            <div className="overflow-hidden pb-[0.1em]">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: thesisPart1Delay }}
                className="block font-sans font-medium text-[24px] sm:text-[26px] lg:text-[30px] xl:text-[32px] uppercase tracking-[0.05em] text-[#0E1C2A]"
              >
                Tool Adoption
              </motion.span>
            </div>

            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: thesisNotEqualDelay }}
              className="font-sans font-light text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[42px] text-[#C9A35B] leading-none px-3 lg:px-4"
              aria-label="does not equal"
            >
              ≠
            </motion.span>

            <div className="overflow-hidden pb-[0.1em]">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: thesisPart2Delay }}
                className="block font-sans font-medium text-[24px] sm:text-[26px] lg:text-[30px] xl:text-[32px] uppercase tracking-[0.05em] text-[#0E1C2A]"
              >
                Business Transformation
              </motion.span>
            </div>
          </div>

          {/* Mobile Layout: Stacked Vertical Editorial Statement */}
          <div className="flex sm:hidden flex-col items-center justify-center space-y-2.5 text-center select-none">
            <div className="overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: transitionEase, delay: thesisPart1Delay }}
                className="block font-sans font-medium text-[21px] min-[390px]:text-[23px] uppercase tracking-[0.06em] text-[#0E1C2A]"
              >
                Tool Adoption
              </motion.span>
            </div>

            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: transitionEase, delay: thesisNotEqualDelay }}
              className="font-sans font-light text-[32px] text-[#C9A35B] leading-none py-0.5"
              aria-label="does not equal"
            >
              ≠
            </motion.span>

            <div className="overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: transitionEase, delay: thesisPart2Delay }}
                className="block font-sans font-medium text-[21px] min-[390px]:text-[23px] uppercase tracking-[0.06em] text-[#0E1C2A]"
              >
                Business Transformation
              </motion.span>
            </div>
          </div>

        </div>

      </Container>
    </motion.section>
  );
}
