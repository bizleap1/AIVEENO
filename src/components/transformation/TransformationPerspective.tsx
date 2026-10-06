"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 03
 * OUR PERSPECTIVE (#F5F7F6)
 * 
 * Accenture-Inspired Editorial Transition:
 * - Restrained transition (no large wipe repeat) preserving page composure.
 * - Previous content settles naturally as user scrolls.
 * - Next large statement reveals cleanly through a vertical mask.
 * - Exact easing: [0.22, 1, 0.36, 1].
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function TransformationPerspective() {
  return (
    <section className="relative z-10 w-full bg-[#F5F7F6] text-[#0E1C2A] py-16 sm:py-20 lg:py-24 xl:py-[104px] border-b border-[#DADFDB]">
      <Container className="px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EYEBROW & DISPLAY H2 (5-COLS)                                */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* 1. Eyebrow Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.08 }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Perspective</span>
            </motion.div>

            {/* 2. Headline Line-by-Line Masked Reveal */}
            <h2 className="space-y-0.5">
              <div className="overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: transitionEase, delay: 0.14 }}
                  className="block font-sans font-medium text-[36px] min-[390px]:text-[40px] sm:text-[46px] lg:text-[50px] xl:text-[54px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.05]"
                >
                  Transformation begins
                </motion.span>
              </div>
              <div className="overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: transitionEase, delay: 0.22 }}
                  className="block font-sans font-medium text-[36px] min-[390px]:text-[40px] sm:text-[46px] lg:text-[50px] xl:text-[54px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.05]"
                >
                  with understanding the business,
                </motion.span>
              </div>
              <div className="overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: transitionEase, delay: 0.30 }}
                  className="block font-sans font-medium text-[36px] min-[390px]:text-[40px] sm:text-[46px] lg:text-[50px] xl:text-[54px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.05]"
                >
                  not selecting a tool.
                </motion.span>
              </div>
            </h2>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: EDITORIAL STANCE (7-COLS, MAX-WIDTH ~700PX)                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-4.5 max-w-[700px]">
            
            {/* 3. Paragraph 1 Fade */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.36 }}
              className="text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.55] font-normal"
            >
              True transformation does not begin with a model, an API key, or a software subscription. It begins by mapping the operational reality of how work actually moves through your organization—where decisions are made, where manual handoffs cause delays, and where structural leverage exists.
            </motion.p>

            {/* 4. Paragraph 2 Fade */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.46 }}
              className="text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.55] font-normal"
            >
              Only after identifying high-value operational opportunities do we architect the complete system: integrating data pipelines, autonomous workflows, and resilient infrastructure around clear commercial outcomes.
            </motion.p>

          </div>

        </div>
      </Container>
    </section>
  );
}
