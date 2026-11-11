"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 05
 * HOW WE ENGAGE (#F5F7F6 Primary Light Editorial Surface)
 *
 * Four Descriptive Consulting Phases in a Horizontal Editorial Progression:
 * 01 — UNDERSTAND
 * 02 — PLAN
 * 03 — MODERNIZE & BUILD
 * 04 — OPERATE & OPTIMIZE
 *
 * - Distinct horizontal typographic chapters (no Framework 7-stage sticky rail,
 *   no bordered cards, no giant stepper dots, no proprietary claims).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EngagementPhase {
  number: string;
  label: string;
  description: string;
}

const ENGAGEMENT_PHASES: EngagementPhase[] = [
  {
    number: "01",
    label: "Understand",
    description: "Review existing systems, constraints and business priorities.",
  },
  {
    number: "02",
    label: "Plan",
    description: "Define a practical strategy, architecture and modernization direction.",
  },
  {
    number: "03",
    label: "Modernize & Build",
    description:
      "Implement relevant technology changes, integrations and engineering improvements.",
  },
  {
    number: "04",
    label: "Operate & Optimize",
    description: "Support ongoing operations and identify opportunities for improvement.",
  },
];

export default function CloudEngagement() {
  return (
    <section
      id="how-we-engage"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Masthead */}
          <div className="max-w-[780px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Engagement Approach</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                From strategy to sustained operations.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[660px]"
            >
              We align technology decisions with business needs, plan practical changes, support implementation and help environments evolve.
            </motion.p>
          </div>

          {/* Four Editorial Chapters — Horizontal Progression on Desktop, Natural Stack on Mobile */}
          <div className="border-t border-[#0D1B2A]/[0.10] pt-8 sm:pt-9 lg:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-x-10 sm:gap-y-10 lg:gap-8 xl:gap-10">
              {ENGAGEMENT_PHASES.map((phase, idx) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.07,
                  }}
                  className="flex flex-col space-y-3 sm:space-y-3.5"
                >
                  {/* Restrained Gold Index Bar */}
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#8E6C2A]">
                      {phase.number}
                    </span>
                    <span className="flex-1 h-px bg-[#C9A35B]/45" aria-hidden="true" />
                  </div>

                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.25]">
                    {phase.label}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[320px]">
                    {phase.description}
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

