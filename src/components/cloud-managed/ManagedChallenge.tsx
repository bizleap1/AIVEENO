"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Full-Width Editorial Masthead + Three Horizontal Typographic Ledger Rows:
 * - Distinct from ConsultingChallenge (3 vertical columns) and MigrationChallenge (left headline + right narrow stack)
 * - Unboxed, minimal hairline separators, restrained gold numerals, zero hover noise
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OperationalConsideration {
  code: string;
  title: string;
  description: string;
}

const CONSIDERATIONS: OperationalConsideration[] = [
  {
    code: "01",
    title: "Changing Workloads",
    description: "Resource needs and application demands evolve over time.",
  },
  {
    code: "02",
    title: "Operational Visibility",
    description:
      "Teams need relevant information to understand environment health and issues.",
  },
  {
    code: "03",
    title: "Managing Complexity",
    description:
      "Security, performance and operational requirements must be considered together.",
  },
];

export default function ManagedChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Asymmetrical Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>The Operational Challenge</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Cloud environments need continuous attention.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[500px]"
              >
                Cloud environments evolve as workloads, applications and business requirements change. Ongoing operational oversight helps organizations identify issues, evaluate performance and maintain control over their technology environments.
              </motion.p>
            </div>
          </div>

          {/* Three Horizontal Editorial Consideration Rows (Unboxed, No Cards) */}
          <div className="border-t border-[#0D1B2A]/[0.14]">
            {CONSIDERATIONS.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-8 py-6 sm:py-7 border-b border-[#0D1B2A]/[0.09] items-baseline"
              >
                <div className="md:col-span-5 lg:col-span-5 flex items-start gap-3.5">
                  <span className="font-sans text-[11px] font-medium tracking-[0.14em] text-[#8E6C2A] pt-[7px] shrink-0">
                    {item.code}
                  </span>
                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-[#111312] tracking-[-0.02em] leading-[1.24]">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 pl-7.5 md:pl-0">
                  <p className="font-sans text-[15.5px] sm:text-[16px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[540px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

