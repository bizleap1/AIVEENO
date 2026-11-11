"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page: Section 05
 * CONTINUOUS TRANSFORMATION (#EEF1F0 Alternate Light Surface)
 * 
 * Full-Width Minimal Editorial Statement Composition:
 * - Direct, authoritative executive presentation grounded in client requirements.
 * - Replaces previous two-column split to avoid repeating Section 02's layout.
 * - Top: Full-width composition with eyebrow, headline ("Transformation doesn't end at launch."),
 *   and clear business description.
 * - Center: Single subtle horizontal hairline divider.
 * - Bottom: Two balanced typographic editorial columns:
 *   1. Adoption in practice (workflows & people)
 *   2. Improvement over time (feedback & adjustments)
 * - Zero cards, zero numbered rows, zero icons, zero technical jargon, zero unsupported claims.
 * - Content-driven natural height (~420–500px).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function FrameworkContinuous() {
  return (
    <section
      id="continuous-transformation"
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EEF1F0] text-[#111312] pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-7 lg:pb-8"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* ========================================================================= */}
          {/* TOP BLOCK: FULL-WIDTH EDITORIAL HEADLINE & DESCRIPTION                    */}
          {/* ========================================================================= */}
          <div className="max-w-[840px] xl:max-w-[920px] space-y-3 sm:space-y-4">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              Continuous Transformation
            </motion.div>

            {/* Display Headline: 48–54px Desktop / 32–36px Mobile */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="font-sans font-medium text-[32px] min-[390px]:text-[34px] sm:text-[40px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.08]"
              >
                Transformation doesn&apos;t end at launch.
              </motion.h2>
            </div>

            {/* Supporting Description: 17–18px Desktop / 15–16px Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] text-[#56616B] leading-[1.6] font-normal max-w-[720px] pt-1"
            >
              Implementation is one milestone. Lasting value depends on adoption, feedback and ongoing refinement as business needs evolve.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* SUBTLE HORIZONTAL DIVIDER                                                 */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: 0.22 }}
            className="w-full h-px bg-[#0D1B2A]/[0.08] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* BOTTOM BLOCK: TWO BALANCED TYPOGRAPHIC COLUMNS                            */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 pt-1 sm:pt-2">
            
            {/* COLUMN 01: ADOPTION IN PRACTICE */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.28 }}
              className="space-y-2 sm:space-y-2.5"
            >
              <h3 className="font-sans font-medium text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] text-[#111312] tracking-[-0.02em] leading-snug">
                Adoption in practice.
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[540px]">
                Solutions need to fit the workflows and people using them every day.
              </p>
            </motion.div>

            {/* COLUMN 02: IMPROVEMENT OVER TIME */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.36 }}
              className="space-y-2 sm:space-y-2.5"
            >
              <h3 className="font-sans font-medium text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] text-[#111312] tracking-[-0.02em] leading-snug">
                Improvement over time.
              </h3>
              <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[540px]">
                Feedback and evaluation inform adjustments as operational priorities change.
              </p>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}
