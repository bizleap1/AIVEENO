"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 09
 * FINAL FLAGSHIP CTA (#F5F7F6)
 * 
 * Strategic Design:
 * - Asymmetric editorial CTA with descender clearance.
 * - Single focused CTA: "Book a Discovery Call" (no arrow, no icon, subtle hover).
 * - Connected directly with DiscoveryModal.
 * - Centered commercial journey progression below the CTA block.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface TransformationCtaProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

const journeySteps = [
  "Discovery Call",
  "Assessment",
  "Transformation Roadmap",
  "Implementation",
];

export default function TransformationCta({
  onOpenDiscoveryModal,
}: TransformationCtaProps) {
  return (
    <section className="relative w-full bg-[#F5F7F6] text-[#0E1C2A] py-14 sm:py-16 lg:py-20 border-b border-[#DADFDB] overflow-hidden">
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* Asymmetric Editorial Split (Left ~58% | Hairline | Right ~38%) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Eyebrow & Display Headline */}
          <div className="lg:w-[58%] pb-6 lg:pb-0 border-b lg:border-b-0 border-[#DADFDB]">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: transitionEase, delay: 0.08 }}
                className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Next Step</span>
              </motion.div>

              <div className="space-y-1">
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.h2
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: transitionEase, delay: 0.14 }}
                    className="font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] lg:text-[46px] text-[#0E1C2A] tracking-[-0.035em] leading-[1.04]"
                  >
                    Start with the business challenge.
                  </motion.h2>
                </div>
                <div className="overflow-hidden pb-[0.12em]">
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: transitionEase, delay: 0.22 }}
                    className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#0E1C2A]/90 tracking-[-0.035em] leading-[1.04]"
                  >
                    We will engineer the system.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider Hairline on Desktop */}
          <div
            className="hidden lg:block w-px self-stretch bg-[#DADFDB] my-1 shrink-0"
            aria-hidden="true"
          />

          {/* Right Column: Supporting Copy & Focused CTA Button */}
          <div className="lg:w-[38%] flex flex-col justify-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.28 }}
              className="text-[14.5px] sm:text-[15px] text-[#56616B] leading-[1.58] font-normal max-w-[420px]"
            >
              Begin with a focused conversation about your workflows, systems, and where transformation can create meaningful, measurable business value.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase, delay: 0.36 }}
            >
              <button
                type="button"
                onClick={() => onOpenDiscoveryModal("AI Business Transformation Page CTA")}
                className="inline-flex h-[50px] sm:h-[52px] w-full sm:w-[225px] items-center justify-center rounded-[4px] bg-[#0E1C2A] px-6 text-[13.5px] sm:text-[14px] font-sans font-medium text-[#F5F5F1] hover:bg-[#1A2838] border border-[#0E1C2A] hover:border-[#1A2838] transition-colors duration-200 cursor-pointer shadow-xs text-center"
                aria-label="Book a Discovery Call"
              >
                Book a Discovery Call
              </button>
            </motion.div>
          </div>

        </div>

        {/* Commercial Journey Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: transitionEase, delay: 0.42 }}
          className="pt-6 sm:pt-8 border-t border-[#DADFDB] mt-8 sm:mt-10"
        >
          <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-8 max-w-[800px] mx-auto text-[11.5px] lg:text-[12px] text-[#56616B] font-sans font-medium tracking-[0.02em]">
            {journeySteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-6 lg:gap-8">
                <span>{step}</span>
                {idx < journeySteps.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#C9A35B]" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile 2x2 Grid */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 sm:hidden text-center text-[11px] text-[#56616B] font-sans font-medium tracking-[0.02em]">
            {journeySteps.map((step) => (
              <div key={step} className="py-0.5">
                {step}
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
