"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Open Asymmetric Editorial Composition:
 * - Left Column (~42%): Eyebrow, H2 headline, and cohesive editorial statement
 * - Right Column (~50%): Four unboxed outcome areas stacked with clean hairline dividers
 * - Zero repetitive boxed cards, zero fake ROI metrics, zero hover effects
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface BusinessOutcomeArea {
  title: string;
  description: string;
}

const OUTCOME_AREAS: BusinessOutcomeArea[] = [
  {
    title: "Scalability",
    description:
      "Plan technology environments around evolving workload and business requirements.",
  },
  {
    title: "Resilience",
    description:
      "Consider availability, continuity and operational reliability in architectural decision-making.",
  },
  {
    title: "Security & Governance",
    description:
      "Include relevant security, control and governance requirements in cloud planning.",
  },
  {
    title: "Performance & Cost Efficiency",
    description:
      "Evaluate architectural trade-offs, utilization and long-term cost considerations.",
  },
];

export default function ConsultingOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Opening Editorial Statement */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Business Value</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[520px]"
              >
                Technology decisions with business impact.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16.5px] sm:text-[17.5px] lg:text-[18.5px] text-[#56616B] leading-[1.58] font-normal max-w-[460px] pt-1"
            >
              A well-defined cloud strategy helps organizations make informed decisions about the capabilities and environments needed to support business operations.
            </motion.p>
          </div>

          {/* Right Column: Four Unboxed Outcome Statements with Minimal Hairline Dividers */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.12]">
            {OUTCOME_AREAS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.07,
                }}
                className="py-6 sm:py-7 border-b border-[#0D1B2A]/[0.09] grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-5 flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[12px] sm:mt-[13px] w-3 h-px bg-[#C9A35B] shrink-0"
                  />
                  <h3 className="font-sans font-medium text-[19px] sm:text-[20px] lg:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.3]">
                    {item.title}
                  </h3>
                </div>

                <p className="sm:col-span-7 font-sans text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal pl-5.5 sm:pl-0">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
