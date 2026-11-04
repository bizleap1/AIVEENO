"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 06
 * FROM ASSESSMENT TO IMPLEMENTATION (#F5F7F6)
 * 
 * Accenture-Style Editorial Transformation Triptych:
 * - Desktop: 3 architectural panels flush against each other (gap-0, rounded-none, shadow-none).
 * - Mobile: 3 stacked flush editorial panels (gap-0) with 24px inner padding & 20px outer padding.
 * - Mobile Typography: H2 30–34px, Stage titles 21–23px, Descriptions 15–16px.
 * - Restrained 450ms fade + 10px upward reveal on scroll entry.
 * - Panel 1 (01—02): Light neutral surface (#F7F9F8).
 * - Panel 2 (03—04): Deeper neutral surface (#EAEFED).
 * - Panel 3 (05—07): Dark graphite (#111312) aligned within same triptych container.
 * - Zero accordions, carousels, horizontal scroll, icons, or fake framework labels.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function TransformationLifecycleRail() {
  return (
    <motion.section
      id="from-assessment-to-implementation"
      initial={{ opacity: 0.98, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[80px] bg-[#F5F7F6] text-[#111312] pt-8 sm:pt-10 lg:pt-11 pb-10 sm:pb-12 lg:pb-13"
    >
      {/* Backward-compatible anchor for legacy links */}
      <div id="assessment" className="sr-only" aria-hidden="true" />

      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: CLEAN EDITORIAL INTRODUCTION                              */}
        {/* ========================================================================= */}
        <div className="max-w-3xl space-y-2 mb-7 sm:mb-8 lg:mb-9">
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: transitionEase, delay: 0.06 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-[10.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>From Assessment to Implementation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.1 }}
            className="font-sans font-medium text-[30px] min-[390px]:text-[32px] sm:text-[34px] lg:text-[36px] xl:text-[38px] text-[#111312] tracking-[-0.025em] leading-[1.12]"
          >
            How transformation takes shape.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.16 }}
            className="text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#56616B] leading-[1.5] font-normal max-w-2xl"
          >
            Seven connected stages, from understanding the business to implementing and improving solutions.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* EDITORIAL TRANSFORMATION TRIPTYCH: 3 FLUSH ARCHITECTURAL PANELS           */}
        {/* No gaps, no rounded corners, no box shadows, no timeline dots             */}
        {/* ========================================================================= */}
        <div className="border border-[#D6DDD8] grid grid-cols-1 lg:grid-cols-3 gap-0">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PANEL 1: LIGHT NEUTRAL (01—02)                                          */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.08 }}
            className="bg-[#F7F9F8] p-6 lg:p-7 xl:p-8 border-b lg:border-b-0 lg:border-r border-[#D6DDD8] flex flex-col justify-between"
          >
            <div>
              {/* Oversized Subtle Editorial Typography */}
              <span className="font-sans font-light text-[36px] sm:text-[40px] lg:text-[45px] xl:text-[50px] text-[#A6B2AB]/50 tracking-[-0.04em] leading-none select-none block mb-5 sm:mb-6 lg:mb-7">
                01—02
              </span>

              {/* Stage 01 */}
              <div className="space-y-1">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  01
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#111312] tracking-[-0.02em] leading-snug">
                  Discovery
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13.5px] xl:text-[14px] text-[#56616B] leading-[1.55]">
                  Understand business goals and context.
                </p>
              </div>

              {/* Restrained Separator */}
              <div className="h-px bg-[#DDE3DF] my-5 sm:my-5.5 lg:my-5.5" aria-hidden="true" />

              {/* Stage 02 */}
              <div className="space-y-1">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  02
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#111312] tracking-[-0.02em] leading-snug">
                  Assessment
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13.5px] xl:text-[14px] text-[#56616B] leading-[1.55]">
                  Review workflows, systems and data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------------- */}
          {/* PANEL 2: DEEPER NEUTRAL (03—04)                                         */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.16 }}
            className="bg-[#EAEFED] p-6 lg:p-7 xl:p-8 border-b lg:border-b-0 lg:border-r border-[#D6DDD8] flex flex-col justify-between"
          >
            <div>
              {/* Oversized Subtle Editorial Typography */}
              <span className="font-sans font-light text-[36px] sm:text-[40px] lg:text-[45px] xl:text-[50px] text-[#9AA79F]/50 tracking-[-0.04em] leading-none select-none block mb-5 sm:mb-6 lg:mb-7">
                03—04
              </span>

              {/* Stage 03 */}
              <div className="space-y-1">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  03
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#111312] tracking-[-0.02em] leading-snug">
                  Prioritization
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13.5px] xl:text-[14px] text-[#56616B] leading-[1.55]">
                  Identify meaningful transformation opportunities.
                </p>
              </div>

              {/* Restrained Separator */}
              <div className="h-px bg-[#D2DAD4] my-5 sm:my-5.5 lg:my-5.5" aria-hidden="true" />

              {/* Stage 04 */}
              <div className="space-y-1">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  04
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#111312] tracking-[-0.02em] leading-snug">
                  Solution Design
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13.5px] xl:text-[14px] text-[#56616B] leading-[1.55]">
                  Define the solution and implementation plan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------------- */}
          {/* PANEL 3: DARK GRAPHITE (05—07)                                          */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.24 }}
            className="bg-[#111312] p-6 lg:p-7 xl:p-8 text-[#F5F7F6] flex flex-col justify-between"
          >
            <div>
              {/* Oversized Muted Gold Editorial Typography */}
              <span className="font-sans font-light text-[36px] sm:text-[40px] lg:text-[45px] xl:text-[50px] text-[#C9A35B]/45 tracking-[-0.04em] leading-none select-none block mb-4 sm:mb-5 lg:mb-6">
                05—07
              </span>

              {/* Stage 05 */}
              <div className="space-y-0.5">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  05
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                  Build
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13px] xl:text-[13.5px] text-[#A6B0A9] leading-[1.5]">
                  Develop and integrate the solution.
                </p>
              </div>

              {/* Restrained Separator */}
              <div className="h-px bg-white/[0.10] my-3.5 sm:my-4 lg:my-4" aria-hidden="true" />

              {/* Stage 06 */}
              <div className="space-y-0.5">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  06
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                  Adoption
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13px] xl:text-[13.5px] text-[#A6B0A9] leading-[1.5]">
                  Support teams in using the new solution.
                </p>
              </div>

              {/* Restrained Separator */}
              <div className="h-px bg-white/[0.10] my-3.5 sm:my-4 lg:my-4" aria-hidden="true" />

              {/* Stage 07 */}
              <div className="space-y-0.5">
                <span className="font-sans text-[11.5px] sm:text-[12px] font-semibold text-[#C9A35B] tracking-wider block">
                  07
                </span>
                <h3 className="font-sans font-medium text-[21px] sm:text-[22px] lg:text-[19px] xl:text-[20px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                  Optimization
                </h3>
                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[13px] xl:text-[13.5px] text-[#A6B0A9] leading-[1.5]">
                  Refine the solution after implementation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </Container>
    </motion.section>
  );
}
