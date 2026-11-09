"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page: Section 02
 * CORE PRINCIPLE (#EBEFED Alternate Light Surface)
 * 
 * Accenture-Inspired Minimal Editorial Composition:
 * - Left ~46%: Eyebrow ("OUR PRINCIPLE") + Display Headline ("Business reality comes first.", 58–62px desktop, 34–38px mobile, Instrument Sans 500).
 * - Desktop Hairline Divider: Single subtle 1px vertical divider (bg-[#0D1B2A]/[0.10]).
 * - Right ~52%:
 *   - Concise Consulting Statement: "Technology should serve the business. Not define it." (28–32px desktop, 23–26px mobile, weight 500).
 *   - Supporting Paragraph: "We begin with business strategy, workflows and operational realities..." (17–19px desktop, 16–17px mobile).
 * - Restrained animations (500–650ms) with seamless transition into Section 03 dark graphite surface.
 * - Zero cards, zero icons, zero extra horizontal lines, zero interactive hover states.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function FrameworkPrinciple() {
  return (
    <motion.section
      id="core-principle"
      initial={{ opacity: 0.96, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#EBEFED] text-[#111312] py-12 sm:py-14 lg:py-16 xl:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN (~46%): EYEBROW & DISPLAY HEADLINE                             */}
          {/* ========================================================================= */}
          <div className="lg:w-[46%] space-y-3 sm:space-y-4">
            {/* Eyebrow: OUR PRINCIPLE */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.05 }}
              className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              Our Principle
            </motion.div>

            {/* Display Headline: 58–62px Desktop / 34–38px Mobile, Weight 500 */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: transitionEase, delay: 0.12 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[38px] lg:text-[58px] xl:text-[62px] text-[#111312] tracking-[-0.035em] leading-[1.04] max-w-[580px]"
              >
                Business reality comes first.
              </motion.h2>
            </div>
          </div>

          {/* VERTICAL DIVIDER ON DESKTOP (Removed on mobile) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: 0.18 }}
            className="hidden lg:block w-px self-stretch bg-[#0D1B2A]/[0.10] min-h-[160px] my-1 shrink-0 origin-top"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (~52%): STATEMENT & SUPPORTING PARAGRAPH                      */}
          {/* ========================================================================= */}
          <div className="lg:w-[52%] flex flex-col justify-center space-y-4 sm:space-y-4.5">
            {/* Primary Statement: 28–32px Desktop / 23–26px Mobile, Weight 500 */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: transitionEase, delay: 0.22 }}
              className="font-sans font-medium text-[23px] min-[390px]:text-[24px] sm:text-[26px] lg:text-[28px] xl:text-[32px] text-[#111312] leading-[1.22] tracking-[-0.02em]"
            >
              Technology should serve the business.
              <br className="hidden sm:inline" /> Not define it.
            </motion.h3>

            {/* Supporting Copy: 17–19px Desktop / 16–17px Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: transitionEase, delay: 0.3 }}
              className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18.5px] text-[#56616B] leading-[1.62] font-normal max-w-[620px]"
            >
              We begin with business strategy, workflows and operational realities
              to identify where AI can create meaningful value. Technology
              decisions follow that understanding.
            </motion.p>
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
