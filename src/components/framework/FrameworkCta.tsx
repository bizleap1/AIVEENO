"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page: Section 06
 * FINAL CTA (#F5F7F6 Primary Light Conversion Surface)
 * 
 * Accenture-Inspired Editorial Conversion Section:
 * - Direct, high-trust asymmetric editorial split layout.
 * - Left ~56%: Eyebrow ("YOUR NEXT STEP") + Display headline ("Discuss your transformation priorities.").
 * - Vertical Divider: Hairline 1px subtle divider on desktop.
 * - Right ~38%: Supporting copy + single primary CTA button ("Book a Discovery Call").
 * - Content-driven natural height (~320–380px).
 * - Leads directly into the dark global footer (#111312).
 * - Zero second button, zero arrows, zero CTA icons, zero fake trust badges.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface FrameworkCtaProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function FrameworkCta({ onOpenDiscoveryModal }: FrameworkCtaProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Framework Page Final CTA");
    } else {
      router.push("/contact");
    }
  };

  return (
    <motion.section
      id="framework-cta"
      initial={{ opacity: 0.98, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[80px] bg-[#F5F7F6] text-[#111312] pt-6 sm:pt-7 lg:pt-8 pb-10 sm:pb-12 lg:pb-14"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN (~56%): EYEBROW & DISPLAY HEADLINE                             */}
          {/* ========================================================================= */}
          <div className="lg:w-[56%] pb-5 lg:pb-0 border-b lg:border-b-0 border-[#0D1B2A]/[0.08] space-y-2.5 sm:space-y-3">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: transitionEase, delay: 0.05 }}
              className="text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              Your Next Step
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
                Discuss your transformation priorities.
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
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.22 }}
              className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[440px]"
            >
              Explore how a business-first approach could guide your organization&apos;s next steps.
            </motion.p>

            {/* Primary Action Button (Tonal shift hover only, zero arrows, zero lift) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.3 }}
            >
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#111312] px-8 text-[13.5px] sm:text-[14px] font-sans font-medium text-[#F5F7F6] border border-[#111312] hover:bg-[#222624] hover:border-[#222624] transition-colors duration-200 cursor-pointer text-center select-none"
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

