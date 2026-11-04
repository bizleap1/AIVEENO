"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 07
 * POTENTIAL OUTCOMES (#EEF1F0)
 * 
 * Final Polish — Premium Editorial Outcomes Wall:
 * - 3+2 asymmetric editorial typography layout directly on the #EEF1F0 surface.
 * - Gap between header and outcomes reduced by ~20%.
 * - Gap between the two outcome rows tightened by ~15%.
 * - 36–40px Instrument Sans 500 outcome titles; 17–18px readable descriptions.
 * - Consistent 36–40px wide, 1px thick gold micro-lines (#C9A35B) drawing left-to-right.
 * - Reduced bottom padding to keep section naturally compact (~480–540px).
 * - Zero cards, zero rounded containers, zero box shadows, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OutcomeItem {
  title: string;
  description: string;
}

const ROW_ONE_OUTCOMES: OutcomeItem[] = [
  {
    title: "Efficiency.",
    description: "Less repetitive work. Smoother processes.",
  },
  {
    title: "Scale.",
    description: "Operations better prepared for growth.",
  },
  {
    title: "Faster execution.",
    description: "Less friction between decisions and action.",
  },
];

const ROW_TWO_OUTCOMES: OutcomeItem[] = [
  {
    title: "Better information access.",
    description: "Business knowledge easier to find and use.",
  },
  {
    title: "Improved experiences.",
    description: "Smoother customer and employee interactions.",
  },
];

const ALL_OUTCOMES: OutcomeItem[] = [...ROW_ONE_OUTCOMES, ...ROW_TWO_OUTCOMES];

export default function TransformationOutcomes() {
  return (
    <motion.section
      id="potential-outcomes"
      initial={{ opacity: 0.98, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[80px] bg-[#EEF1F0] text-[#111312] pt-9 sm:pt-11 lg:pt-13 pb-11 sm:pb-13 lg:pb-15"
    >
      {/* Backward-compatible anchor for legacy links */}
      <div id="outcomes" className="sr-only" aria-hidden="true" />

      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: CLEAN EDITORIAL INTRODUCTION                              */}
        {/* Gap reduced by ~20% (mb-7 sm:mb-8 lg:mb-9)                                */}
        {/* ========================================================================= */}
        <div className="max-w-3xl space-y-2 mb-7 sm:mb-8 lg:mb-9">
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: transitionEase, delay: 0.06 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-[10.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Potential Outcomes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
            className="font-sans font-medium text-[28px] min-[390px]:text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[44px] text-[#111312] tracking-[-0.025em] leading-[1.12]"
          >
            What transformation can improve.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.18 }}
            className="text-[15px] sm:text-[16px] lg:text-[16.5px] text-[#56616B] leading-[1.55] font-normal max-w-2xl"
          >
            Practical improvements shaped by business priorities, implementation and adoption.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP: ASYMMETRIC 3 + 2 EDITORIAL OUTCOMES WALL (>= 1024px)             */}
        {/* Row gap tightened by ~15% (space-y-9 lg:space-y-10 xl:space-y-11)          */}
        {/* ========================================================================= */}
        <div className="hidden lg:block space-y-9 lg:space-y-10 xl:space-y-11">
          
          {/* Row 1: Three Balanced Columns (4 cols each in 12-col grid) */}
          <div className="grid grid-cols-12 gap-8 xl:gap-12">
            {ROW_ONE_OUTCOMES.map((outcome, idx) => (
              <div key={outcome.title} className="col-span-4 flex flex-col justify-start select-none">
                {/* Title (36–40px desktop) */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.12 + idx * 0.08 }}
                  className="font-sans font-medium text-[32px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] text-[#111312] tracking-[-0.025em] leading-[1.1]"
                >
                  {outcome.title}
                </motion.h3>

                {/* Restrained Gold Micro-line (36–40px wide, 1px thin, draws left to right) */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: transitionEase, delay: 0.22 + idx * 0.08 }}
                  style={{ originX: 0 }}
                  className="w-9 lg:w-10 h-px bg-[#C9A35B] my-3 sm:my-3.5"
                  aria-hidden="true"
                />

                {/* Concise Description (17–18px desktop) */}
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: transitionEase, delay: 0.28 + idx * 0.08 }}
                  className="font-sans text-[16px] lg:text-[17px] xl:text-[17.5px] text-[#56616B] leading-[1.55] max-w-xs font-normal"
                >
                  {outcome.description}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Row 2: Two Wider Columns (6 cols each in 12-col grid) */}
          <div className="grid grid-cols-12 gap-8 xl:gap-12">
            {ROW_TWO_OUTCOMES.map((outcome, idx) => (
              <div key={outcome.title} className="col-span-6 flex flex-col justify-start select-none">
                {/* Title (36–40px desktop) */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.36 + idx * 0.08 }}
                  className="font-sans font-medium text-[32px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] text-[#111312] tracking-[-0.025em] leading-[1.1]"
                >
                  {outcome.title}
                </motion.h3>

                {/* Restrained Gold Micro-line (36–40px wide, 1px thin, draws left to right) */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: transitionEase, delay: 0.46 + idx * 0.08 }}
                  style={{ originX: 0 }}
                  className="w-9 lg:w-10 h-px bg-[#C9A35B] my-3 sm:my-3.5"
                  aria-hidden="true"
                />

                {/* Concise Description (17–18px desktop) */}
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: transitionEase, delay: 0.52 + idx * 0.08 }}
                  className="font-sans text-[16px] lg:text-[17px] xl:text-[17.5px] text-[#56616B] leading-[1.55] max-w-md font-normal"
                >
                  {outcome.description}
                </motion.p>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET: SINGLE-COLUMN EDITORIAL COMPOSITION (< 1024px)           */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-6 sm:space-y-7">
          {ALL_OUTCOMES.map((outcome, idx) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                ease: transitionEase,
                delay: 0.1 + idx * 0.06,
              }}
              className="pt-5 sm:pt-6 border-t border-[#D6DDD8] space-y-2 select-none"
            >
              {/* Outcome Title (26–28px mobile) */}
              <h3 className="font-sans font-medium text-[26px] sm:text-[28px] text-[#111312] tracking-[-0.02em] leading-tight">
                {outcome.title}
              </h3>

              {/* Gold Micro-line on Mobile (32px wide, 1px thin) */}
              <div className="w-8 h-px bg-[#C9A35B]" aria-hidden="true" />

              {/* Concise Description (15–16px mobile) */}
              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.55] font-normal">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </motion.section>
  );
}
