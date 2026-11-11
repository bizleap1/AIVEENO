"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page: Section 06
 * BUSINESS OUTCOMES (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Compact typographic editorial composition framing four improvement priorities:
 * - Operational Resilience
 * - Scalability
 * - Security & Governance
 * - Performance & Cost Efficiency
 * - Split top header + unboxed two-column editorial rows separated by hairlines
 * - Zero card boxes, zero guarantees, zero dashboards or fake metrics
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface BusinessOutcomePriority {
  id: string;
  title: string;
  description: string;
}

const OUTCOME_PRIORITIES: BusinessOutcomePriority[] = [
  {
    id: "operational-resilience",
    title: "Operational Resilience",
    description: "Strengthen continuity and reliability across critical environments.",
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "Prepare systems to adapt to changing workloads and business requirements.",
  },
  {
    id: "security-governance",
    title: "Security & Governance",
    description:
      "Support responsible management of technology environments and controls.",
  },
  {
    id: "performance-cost-efficiency",
    title: "Performance & Cost Efficiency",
    description:
      "Identify opportunities to improve performance, utilization and spending.",
  },
];

export default function CloudOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-12 sm:py-14 lg:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-9 sm:space-y-11 lg:space-y-12">
          {/* Split Masthead: Left Headline | Right Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Business-Focused Technology</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
                >
                  Built for what the business needs next.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[480px]"
              >
                Technology modernization should support more resilient, scalable and manageable business operations.
              </motion.p>
            </div>
          </div>

          {/* Spacious Typographic Composition with Restrained Hairline Dividers (No Boxed Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-20 border-t border-[#0D1B2A]/[0.10]">
            {OUTCOME_PRIORITIES.map((priority, idx) => (
              <motion.div
                key={priority.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.06,
                }}
                className="border-b border-[#0D1B2A]/[0.08] py-6 sm:py-7 lg:py-8 space-y-2"
              >
                <div className="w-5 h-px bg-[#C9A35B]" aria-hidden="true" />

                <h3 className="font-sans font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-[#111312] tracking-[-0.02em] leading-[1.25] pt-0.5">
                  {priority.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[460px]">
                  {priority.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

