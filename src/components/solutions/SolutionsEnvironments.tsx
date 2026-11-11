"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page: Section 04
 * BUILT FOR BUSINESS ENVIRONMENTS (#111312 Dark Graphite Editorial Surface)
 *
 * Asymmetric Architectural Split Composition:
 * - Left Column (~42%): Eyebrow with muted gold dash + H2 ("Useful AI depends on what's around it.")
 *   + supporting introduction.
 * - Right Column (~58%): Four compact text-led engineering considerations in a balanced
 *   2x2 typographic matrix anchored by thin separators and short #C9A35B gold micro-accents.
 * - Zero cards, zero fake architecture diagrams, zero unsupported performance/security claims.
 * - Natural stack on mobile with zero sticky positioning or horizontal overflow.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EnvironmentConsideration {
  id: string;
  title: string;
  description: string;
}

const CONSIDERATIONS: EnvironmentConsideration[] = [
  {
    id: "system-integration",
    title: "System Integration",
    description: "Connect with existing business applications.",
  },
  {
    id: "data-foundations",
    title: "Data Foundations",
    description: "Work with relevant and usable information.",
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    description: "Support review and accountability where needed.",
  },
  {
    id: "technology-fit",
    title: "Technology Fit",
    description: "Design around operational requirements and evolving business needs.",
  },
];

export default function SolutionsEnvironments() {
  return (
    <section
      id="business-environments"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#111312] text-[#F5F7F6] py-12 sm:py-14 lg:py-16 xl:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN (~42%): EYEBROW, EDITORIAL HEADLINE & INTRODUCTION            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Beyond the Solution</span>
            </motion.div>

            {/* Headline H2 */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.08] max-w-[520px]"
              >
                Useful AI depends on what&apos;s around it.
              </motion.h2>
            </div>

            {/* Supporting Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17px] xl:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[460px] pt-1"
            >
              A solution must fit the systems, information and people it is designed to support.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (~58%): FOUR CONCISE TEXT-LED CONSIDERATIONS                 */}
          {/* Clean 2x2 editorial rhythm with thin dividers and gold micro-accents      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 lg:pl-4 xl:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-8 sm:gap-y-10 lg:gap-y-11">
              {CONSIDERATIONS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.12 + idx * 0.07,
                  }}
                  className="border-t border-white/[0.10] pt-5 sm:pt-6 space-y-2.5"
                >
                  {/* Gold micro-accent */}
                  <div className="w-6 h-px bg-[#C9A35B]" aria-hidden="true" />

                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] lg:text-[23px] xl:text-[24px] text-[#F5F7F6] tracking-[-0.02em] leading-[1.26]">
                    {item.title}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[360px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
