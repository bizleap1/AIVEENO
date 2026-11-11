"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page: Section 06
 * FINAL CTA (#EEF1F0 Alternate Light Editorial Surface -> Dark Graphite Footer #111312)
 *
 * Compact Asymmetric Editorial Conversion Split:
 * - Left Column (~56%): Eyebrow with muted gold dash ("START A CONVERSATION")
 *   + H2 ("Explore what AI could solve for your business.").
 * - Vertical Hairline Divider on Desktop.
 * - Right Column (~38%): Description + single primary button ("Book a Discovery Call").
 * - Subtle tonal transition on hover; zero arrows, zero scale effects, zero glow.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SolutionsCtaProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function SolutionsCta({ onOpenDiscoveryModal }: SolutionsCtaProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("AI Solutions Page Final CTA");
    } else {
      router.push("/contact");
    }
  };

  return (
    <motion.section
      id="solutions-cta"
      initial={{ opacity: 0.98, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-12 sm:py-14 lg:py-16 xl:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          {/* ========================================================================= */}
          {/* LEFT COLUMN (~56%): EYEBROW & DISPLAY HEADLINE                             */}
          {/* ========================================================================= */}
          <div className="lg:w-[56%] pb-5 lg:pb-0 border-b lg:border-b-0 border-[#0D1B2A]/[0.08] space-y-2.5 sm:space-y-3">
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: transitionEase, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Start a Conversation</span>
            </motion.div>

            {/* Display Headline (46–54px Desktop / 34–38px Mobile) */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.08] max-w-[640px]"
              >
                Explore what AI could solve for your business.
              </motion.h2>
            </div>
          </div>

          {/* VERTICAL DIVIDER ON DESKTOP */}
          <div
            className="hidden lg:block w-px self-stretch bg-[#0D1B2A]/[0.10] min-h-[140px] my-1 shrink-0"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (~38%): SUPPORTING PARAGRAPH & PRIMARY CTA                    */}
          {/* ========================================================================= */}
          <div className="lg:w-[38%] flex flex-col justify-center space-y-4 sm:space-y-4.5">
            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.18 }}
              className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[440px]"
            >
              Discuss your operational priorities and where a focused AI solution could create meaningful value.
            </motion.p>

            {/* Primary Action Button (Tonal shift hover only, zero arrows, zero scale) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.24 }}
            >
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#111312] px-8 text-[14px] sm:text-[14.5px] font-sans font-medium text-[#F5F7F6] border border-[#111312] hover:bg-[#222624] hover:border-[#222624] transition-colors duration-200 cursor-pointer text-center select-none"
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
