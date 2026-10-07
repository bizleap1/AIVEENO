"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 02
 * THE BUSINESS CHALLENGE (#EBEFED)
 * 
 * Compact Editorial Architecture (Accenture-Inspired Restraint):
 * - Background: Solid #EBEFED (100% opaque, distinct contrast from Hero #F5F7F6).
 * - Compact natural section height: ~430–480px desktop (zero min-height/viewport forcing).
 * - Vertical padding: top 56–64px (pt-[56px] lg:pt-[60px]), bottom 48–56px (pb-[48px] lg:pb-[52px]).
 * - Mobile vertical padding: 48–56px.
 * - Headline: Controlled 2-line H2 at 48–54px desktop / 36–40px mobile.
 * - Intro copy: 24–28px below H2, controlled max-width (~760px).
 * - 3 Editorial Challenge Modules: 36–44px below intro, with 20–24px vertical padding and #C5CCC7 hairline dividers.
 *   Titles: 21–23px, descriptions: 15–16px (same baseline & max-w-[320px]).
 * - Thin drawn horizontal divider (#C5CCC7).
 * - Concluding Thesis: 28–36px below divider, text at 28–32px with muted gold ≠ (34–38px).
 * - Snappy sequential animation (500–650ms range, 80ms stagger, no looping).
 * - Zero hover states, zero cards, zero icons, zero AI graphics.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

const challengeModules = [
  {
    title: "ISOLATED TOOLS",
    description: "Standalone experiments without redesign.",
  },
  {
    title: "UNCHANGED WORKFLOWS",
    description: "Existing processes remain largely unchanged.",
  },
  {
    title: "FRAGMENTED SYSTEMS",
    description: "Systems remain disconnected from the operating model.",
  },
];

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

  // Surface Transition: Solid surface rise (500–650ms snappy range)
  const surfaceDuration = isMobile ? 0.30 : 0.55;
  const surfaceY = isMobile ? 16 : 28;

  // Snappy Sequential Delays (Desktop vs Mobile)
  const eyebrowDelay = isMobile ? 0.10 : 0.18;
  const h2Line1Delay = isMobile ? 0.14 : 0.24;
  const h2Line2Delay = isMobile ? 0.18 : 0.30;
  const h2Duration = isMobile ? 0.35 : 0.48;

  const introDelay = isMobile ? 0.22 : 0.36;
  const introDuration = isMobile ? 0.28 : 0.36;

  // 80ms snappy stagger for 3 challenge modules
  const mod1Delay = isMobile ? 0.26 : 0.42;
  const mod2Delay = isMobile ? 0.32 : 0.50;
  const mod3Delay = isMobile ? 0.38 : 0.58;
  const modDuration = isMobile ? 0.28 : 0.36;

  // Divider draw
  const dividerDelay = isMobile ? 0.44 : 0.64;
  const dividerDuration = isMobile ? 0.32 : 0.45;

  // Thesis sequential reveal
  const thesisPart1Delay = isMobile ? 0.50 : 0.70;
  const thesisNotEqualDelay = isMobile ? 0.54 : 0.76;
  const thesisPart2Delay = isMobile ? 0.58 : 0.82;
  const thesisDuration = isMobile ? 0.28 : 0.36;

  return (
    <motion.section
      id="business-challenge"
      initial={{ y: surfaceY }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[115px] bg-[#EBEFED] text-[#0E1C2A] pt-[48px] sm:pt-[54px] lg:pt-[58px] xl:pt-[62px] pb-[46px] sm:pb-[50px] lg:pb-[50px] xl:pb-[54px] border-b border-[#C5CCC7] shadow-[0_-14px_35px_rgba(14,28,42,0.04)]"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        <div className="max-w-[1160px] flex flex-col">
          
          {/* ========================================================================= */}
          {/* 1. EYEBROW REVEAL WITH MUTED GOLD DASH                                    */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: transitionEase, delay: eyebrowDelay }}
            className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#56616B] mb-2 sm:mb-2.5"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>The Business Challenge</span>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. HEADLINE (CONTROLLED 2-LINE H2: 48–54PX DESKTOP / 36–40PX MOBILE)      */}
          {/* ========================================================================= */}
          <div>
            <h2 className="max-w-[780px] tracking-[-0.035em]">
              {/* Mobile Line-by-Line (36–40px) */}
              <div className="sm:hidden space-y-0.5" aria-hidden="true">
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line1Delay }}
                    className="block font-sans font-medium text-[36px] min-[390px]:text-[38px] text-[#0E1C2A] leading-[1.05]"
                  >
                    Why tool-first AI adoption
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line2Delay }}
                    className="block font-sans font-medium text-[36px] min-[390px]:text-[38px] text-[#0E1C2A] leading-[1.05]"
                  >
                    produces limited return.
                  </motion.span>
                </div>
              </div>

              {/* Desktop / Tablet Line Structure (48–52px) */}
              <div className="hidden sm:block space-y-0.5" aria-hidden="true">
                <div className="overflow-hidden pb-[0.1em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line1Delay }}
                    className="block font-sans font-medium text-[40px] sm:text-[44px] lg:text-[48px] xl:text-[50px] text-[#0E1C2A] leading-[1.06]"
                  >
                    Why tool-first AI adoption
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.1em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: h2Duration, ease: transitionEase, delay: h2Line2Delay }}
                    className="block font-sans font-medium text-[40px] sm:text-[44px] lg:text-[48px] xl:text-[50px] text-[#0E1C2A] leading-[1.06]"
                  >
                    produces limited return.
                  </motion.span>
                </div>
              </div>

              <span className="sr-only">
                Why tool-first AI adoption produces limited return.
              </span>
            </h2>

            {/* Short Introduction Paragraph (24–28px below H2, max-w ~760px) */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: introDuration, ease: transitionEase, delay: introDelay }}
              className="mt-[20px] sm:mt-[22px] lg:mt-[24px] max-w-[760px] text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.52] font-normal"
            >
              Organizations often invest in isolated tools without redesigning the workflows and systems around them. The result is experimentation without meaningful operational change.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* 3. THREE EDITORIAL CHALLENGE MODULES (36–42px BELOW INTRO)               */}
          {/* ========================================================================= */}
          <div className="mt-[30px] sm:mt-[34px] lg:mt-[38px]">
            {/* Desktop Layout: 3 Columns with 20–24px Padding & Hairline Dividers (#C5CCC7) */}
            <div className="hidden lg:grid grid-cols-3 divide-x divide-[#C5CCC7]">
              {challengeModules.map((mod, idx) => {
                const modDelay = idx === 0 ? mod1Delay : idx === 1 ? mod2Delay : mod3Delay;
                const paddingClass =
                  idx === 0
                    ? "pr-7 xl:pr-9"
                    : idx === 1
                    ? "px-7 xl:px-9"
                    : "pl-7 xl:pl-9";

                return (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: modDuration, ease: transitionEase, delay: modDelay }}
                    className={`${paddingClass} py-1 lg:py-1.5 flex flex-col justify-start space-y-2`}
                  >
                    <h3 className="font-sans font-medium text-[20px] xl:text-[22px] uppercase tracking-[0.02em] text-[#0E1C2A] leading-tight min-h-[26px] flex items-center">
                      {mod.title}
                    </h3>
                    <p className="text-[14.5px] xl:text-[15px] text-[#56616B] leading-[1.5] font-normal max-w-[320px]">
                      {mod.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile & Tablet Layout: Stacked Vertically with 18–22px Padding (#C5CCC7) */}
            <div className="lg:hidden divide-y divide-[#C5CCC7]">
              {challengeModules.map((mod, idx) => {
                const modDelay = idx === 0 ? mod1Delay : idx === 1 ? mod2Delay : mod3Delay;

                return (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: modDuration, ease: transitionEase, delay: modDelay }}
                    className="py-[18px] sm:py-[20px] first:pt-0 last:pb-0 flex flex-col space-y-1"
                  >
                    <h3 className="font-sans font-medium text-[18px] min-[390px]:text-[19px] uppercase tracking-[0.02em] text-[#0E1C2A]">
                      {mod.title}
                    </h3>
                    <p className="text-[14.5px] sm:text-[15px] text-[#56616B] leading-[1.48] font-normal">
                      {mod.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4. THIN HORIZONTAL DRAWN DIVIDER (#C5CCC7)                                */}
          {/* ========================================================================= */}
          <div className="mt-[24px] sm:mt-[28px] lg:mt-[30px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: dividerDuration, ease: transitionEase, delay: dividerDelay }}
              className="origin-left h-px bg-[#C5CCC7] w-full"
              aria-hidden="true"
            />
          </div>

          {/* ========================================================================= */}
          {/* 5. EDITORIAL THESIS: 28–36PX SPACING, 28–32PX TEXT SCALE                  */}
          {/* ========================================================================= */}
          <div className="mt-[26px] sm:mt-[28px] lg:mt-[30px] select-none">
            {/* Desktop Layout: Compact Horizontal Alignment (28–32px) */}
            <div className="hidden md:flex items-center justify-center gap-5 sm:gap-6 lg:gap-8 xl:gap-9 text-center">
              <div className="overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisPart1Delay }}
                  className="block font-sans font-medium text-[24px] lg:text-[28px] xl:text-[30px] uppercase tracking-[0.03em] text-[#0E1C2A]"
                >
                  Tool Adoption
                </motion.span>
              </div>

              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisNotEqualDelay }}
                className="font-sans font-light text-[30px] lg:text-[34px] xl:text-[36px] text-[#C9A35B] leading-none select-none"
                aria-label="does not equal"
              >
                ≠
              </motion.span>

              <div className="overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisPart2Delay }}
                  className="block font-sans font-medium text-[24px] lg:text-[28px] xl:text-[30px] uppercase tracking-[0.03em] text-[#0E1C2A]"
                >
                  Business Transformation
                </motion.span>
              </div>
            </div>

            {/* Mobile / Small Tablet Layout: Stacked Vertically with Compact Padding */}
            <div className="flex md:hidden flex-col items-center justify-center space-y-1.5 text-center">
              <div className="overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisPart1Delay }}
                  className="block font-sans font-medium text-[20px] min-[390px]:text-[22px] uppercase tracking-[0.02em] text-[#0E1C2A] whitespace-nowrap"
                >
                  Tool Adoption
                </motion.span>
              </div>

              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisNotEqualDelay }}
                className="font-sans font-light text-[28px] sm:text-[30px] text-[#C9A35B] leading-none py-0.5"
                aria-label="does not equal"
              >
                ≠
              </motion.span>

              <div className="overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: thesisDuration, ease: transitionEase, delay: thesisPart2Delay }}
                  className="block font-sans font-medium text-[20px] min-[390px]:text-[22px] uppercase tracking-[0.02em] text-[#0E1C2A] whitespace-nowrap"
                >
                  Business Transformation
                </motion.span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </motion.section>
  );
}


