"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page Hero: AI BUSINESS TRANSFORMATION
 * 
 * Strategic Design:
 * - Inner service flagship page hero (distinct from homepage hero).
 * - Exact core light surface (#F5F7F6) matching homepage hero.
 * - Desktop: Asymmetric editorial split (Left ~58% | Right ~42%).
 * - Strictly controlled 3-line H1 (60-64px desktop) so supporting copy & CTA
 *   are 100% visible within the first viewport on load without scrolling.
 * - Right image (~41%) intentionally aligned with the upper-middle of the H1 block.
 * - Single focused CTA: "Book a Discovery Call" (no arrow, no icon, subtle hover).
 * - Mobile: Stacked vertically (Eyebrow -> 4-line H1 -> Copy -> CTA -> Full-width Image).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface TransformationHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function TransformationHero({
  onOpenDiscoveryModal,
}: TransformationHeroProps) {
  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("AI Business Transformation Flagship Hero");
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative w-full bg-[#F5F7F6] text-[#0E1C2A] pt-20 sm:pt-22 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 border-b border-[#DADFDB] overflow-hidden">
      <Container className="px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL HEADLINE, COPY & CTA (~58% WIDTH)                  */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-4 sm:space-y-4.5 lg:space-y-5">
            
            {/* 1. Eyebrow Reveal with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>AI Business Transformation</span>
            </motion.div>

            {/* 2. Headline Line-by-Line Masked Reveal (Controlled 3-Lines Desktop) */}
            <h1
              aria-label="Transform how your organization operates, makes decisions and creates value with AI."
              className="tracking-[-0.035em]"
            >
              <span className="sr-only">
                Transform how your organization operates, makes decisions and creates value with AI.
              </span>

              {/* Mobile Line Structure (4 controlled lines, 40-44px, line-height 1.0) */}
              <div className="sm:hidden space-y-0.5" aria-hidden="true">
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: transitionEase, delay: 0.08 }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.0]"
                  >
                    Transform how your
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: transitionEase, delay: 0.15 }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.0]"
                  >
                    organization operates,
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: transitionEase, delay: 0.22 }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.0]"
                  >
                    makes decisions and
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: transitionEase, delay: 0.29 }}
                    className="block font-sans font-medium text-[38px] min-[390px]:text-[41px] text-[#0E1C2A] leading-[1.0]"
                  >
                    creates value with AI.
                  </motion.span>
                </div>
              </div>

              {/* Desktop / Tablet Line Structure (EXACTLY 3 Lines, ~60-64px desktop, line-height 0.99) */}
              <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: transitionEase, delay: 0.08 }}
                    style={{ fontSize: "clamp(36px, 3.9vw, 62px)", lineHeight: 0.99 }}
                    className="block whitespace-nowrap font-sans font-medium text-[#0E1C2A]"
                  >
                    Transform how your organization
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: transitionEase, delay: 0.16 }}
                    style={{ fontSize: "clamp(36px, 3.9vw, 62px)", lineHeight: 0.99 }}
                    className="block whitespace-nowrap font-sans font-medium text-[#0E1C2A]"
                  >
                    operates, makes decisions
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-[0.14em]">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: transitionEase, delay: 0.24 }}
                    style={{ fontSize: "clamp(36px, 3.9vw, 62px)", lineHeight: 0.99 }}
                    className="block whitespace-nowrap font-sans font-medium text-[#0E1C2A]"
                  >
                    and creates value with AI.
                  </motion.span>
                </div>
              </div>
            </h1>

            {/* 3. Supporting Copy Fade */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.32 }}
              className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#56616B] max-w-[520px] leading-[1.55] font-normal"
            >
              Move beyond isolated AI tools and redesign workflows, systems and decision-making around measurable business value.
            </motion.p>

            {/* 4. Single Focused CTA Reveal (No arrow, no icon, subtle hover tone) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.38 }}
              className="pt-1 sm:pt-2"
            >
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#0E1C2A] px-7 sm:px-8 text-[13.5px] sm:text-[14px] font-sans font-medium text-[#F5F5F1] hover:bg-[#1A2838] border border-[#0E1C2A] hover:border-[#1A2838] transition-colors duration-200 cursor-pointer shadow-xs w-full sm:w-auto text-center"
                aria-label="Book a Discovery Call"
              >
                Book a Discovery Call
              </button>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: REAL EDITORIAL CONSULTING PHOTOGRAPHY (~41-42% WIDTH)       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-3 xl:pt-4">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(6% 0% 0% 0%)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.65, ease: transitionEase, delay: 0.2 }}
              className="relative w-full aspect-[4/3] lg:aspect-[14/11] xl:aspect-[4/3] rounded-[4px] overflow-hidden border border-[#DADFDB] shadow-[0_8px_30px_-10px_rgba(14,28,42,0.10)] bg-[#EEF1F0]"
            >
              <Image
                src="/images/ai-transformation-hero.jpg"
                alt="Executive consulting strategy session reviewing business process architecture blueprints and operational workflows"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_35%]"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
