"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Left Editorial Lead + Right Open 2x2 Typographic Hairline Ledger:
 * - Distinct from ConsultingOutcomes (4 stacked right rows) and MigrationOutcomes (top masthead + 4 columns)
 * - Four balanced operational outcomes:
 *   Operational Reliability | Performance | Security Awareness | Operational Efficiency
 * - Zero fake SLA numbers, zero 99.99% uptime promises, zero card backgrounds or shadows
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface BusinessPriority {
  title: string;
  description: string;
}

const BUSINESS_PRIORITIES: BusinessPriority[] = [
  {
    title: "Operational Reliability",
    description:
      "Support consistency across critical cloud services and environments.",
  },
  {
    title: "Performance",
    description:
      "Identify and respond to factors that affect system performance.",
  },
  {
    title: "Security Awareness",
    description:
      "Maintain visibility into applicable security requirements and operational risks.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Review resource utilization, processes and opportunities for improvement.",
  },
];

export default function ManagedOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Opening Editorial Context */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
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
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[50px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[440px]"
              >
                A cloud environment built for ongoing business needs.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[400px] pt-1"
            >
              Effective cloud management supports operational stability and informed technology decisions.
            </motion.p>
          </div>

          {/* Right Column: Open 2x2 Typographic Outcome Grid (Unboxed Hairline Dividers) */}
          <div className="lg:col-span-7 lg:col-start-6 border-t border-[#0D1B2A]/[0.14]">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#0D1B2A]/[0.09]">
              {BUSINESS_PRIORITIES.slice(0, 2).map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.08,
                  }}
                  className={`py-7 sm:py-8 space-y-2.5 ${
                    idx === 0
                      ? "sm:pr-8 lg:pr-10 border-b sm:border-b-0 sm:border-r border-[#0D1B2A]/[0.09]"
                      : "sm:pl-8 lg:pl-10"
                  }`}
                >
                  <div className="w-5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26] pt-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[340px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#0D1B2A]/[0.09]">
              {BUSINESS_PRIORITIES.slice(2, 4).map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.18 + idx * 0.08,
                  }}
                  className={`py-7 sm:py-8 space-y-2.5 ${
                    idx === 0
                      ? "sm:pr-8 lg:pr-10 border-b sm:border-b-0 sm:border-r border-[#0D1B2A]/[0.09]"
                      : "sm:pl-8 lg:pl-10"
                  }`}
                >
                  <div className="w-5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26] pt-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[340px]">
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

