"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 08
 * FINAL CTA (#F5F7F6)
 * 
 * Accenture-Inspired Minimal Editorial Conversion Section:
 * - Direct, high-trust asymmetric editorial split layout.
 * - Left 55%: Eyebrow + concise display headline ("Find the right starting point for AI.").
 * - Right 45%: Supporting paragraph + single dark graphite CTA button.
 * - Instrument Sans typography with disciplined sizing and line-height.
 * - Content-driven natural height (~360–420px), zero min-h-screen, zero artificial padding.
 * - Seamless transition from Section 07 (#EEF1F0) and natural reveal into Dark Footer (#111312).
 * - Zero cards, zero background illustrations, zero fake badges, zero secondary CTAs, zero decorative arrows.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface TransformationCtaProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

export default function TransformationCta({
  onOpenDiscoveryModal,
}: TransformationCtaProps) {
  return (
    <motion.section
      id="final-cta"
      initial={{ opacity: 0.98, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[80px] bg-[#F5F7F6] text-[#111312] border-t border-[#E0E5E2] py-14 sm:py-16 lg:py-20 xl:py-22"
    >
      {/* Anchor for backward-compatible linking */}
      <div id="contact-cta" className="sr-only" aria-hidden="true" />

      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN (~56%): EYEBROW & DISPLAY HEADLINE                             */}
          {/* ========================================================================= */}
          <div className="lg:w-[56%] pb-5 lg:pb-0 border-b lg:border-b-0 border-[#0D1B2A]/[0.08] space-y-3 sm:space-y-3.5">
            {/* Eyebrow: YOUR NEXT STEP with gold micro-dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: transitionEase, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Your Next Step</span>
            </motion.div>

            {/* Display Headline with subtle masked motion */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.12 }}
                className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#111312] tracking-[-0.03em] leading-[1.08] max-w-[620px]"
              >
                Find the right starting point for AI.
              </motion.h2>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* VERTICAL DIVIDER: MATCHING HOMEPAGE CTA LINE EXACTLY                      */}
          {/* ========================================================================= */}
          <div
            className="hidden lg:block w-px self-stretch bg-[#0D1B2A]/[0.10] min-h-[140px] my-1 shrink-0"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (~38%): SUPPORTING PARAGRAPH & PRIMARY CTA                    */}
          {/* ========================================================================= */}
          <div className="lg:w-[38%] flex flex-col justify-center space-y-4 sm:space-y-4.5">
            {/* Supporting Copy (16–17.5px desktop, max-w-[420px]) */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.22 }}
              className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[420px]"
            >
              Discuss your business priorities, workflows and systems to explore where AI transformation can create meaningful value.
            </motion.p>

            {/* Primary Action Button (no arrows, no lift, restrained hover) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.3 }}
            >
              <button
                type="button"
                onClick={() => onOpenDiscoveryModal("AI Business Transformation Final CTA")}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-[225px] items-center justify-center rounded-[4px] bg-[#111312] px-6 text-[13.5px] sm:text-[14px] font-sans font-medium text-[#F5F7F6] border border-[#111312] hover:bg-[#222624] hover:border-[#222624] transition-colors duration-200 cursor-pointer text-center select-none"
                aria-label="Book a Discovery Call"
              >
                Book a Discovery Call
              </button>
            </motion.div>
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
