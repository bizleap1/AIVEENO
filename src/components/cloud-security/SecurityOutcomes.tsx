"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Top Asymmetric Split Masthead + Clean 2-Column x 2-Row Open Ledger Below:
 * - Distinct from Consulting (right stack), Migration (4-column strip), and Managed (left lead + 2x2)
 * - Four priorities: Security Visibility, Governance Consistency, Risk Awareness, Operational Resilience
 * - Zero complete-security promises, zero compliance certifications, zero zero-breach claims
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SecurityOutcome {
  code: string;
  title: string;
  description: string;
}

const SECURITY_OUTCOMES: SecurityOutcome[] = [
  {
    code: "01",
    title: "Security Visibility",
    description:
      "Improve understanding of relevant cloud security conditions and concerns.",
  },
  {
    code: "02",
    title: "Governance Consistency",
    description:
      "Support clearer controls, responsibilities and policies.",
  },
  {
    code: "03",
    title: "Risk Awareness",
    description:
      "Identify security considerations that may require attention.",
  },
  {
    code: "04",
    title: "Operational Resilience",
    description:
      "Consider security and protection requirements alongside continuity needs.",
  },
];

export default function SecurityOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Masthead */}
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
                <span>Business Value</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
                >
                  Better security visibility. More informed decisions.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[480px]"
              >
                A structured security and governance approach supports better understanding and management of cloud environments.
              </motion.p>
            </div>
          </div>

          {/* Wide 2x2 Asymmetric Open Typographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#0D1B2A]/[0.14]">
            {SECURITY_OUTCOMES.map((item, idx) => (
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
                className={`py-7 sm:py-8 lg:py-9 border-b border-[#0D1B2A]/[0.09] space-y-2.5 ${
                  idx % 2 === 0
                    ? "md:pr-10 lg:pr-14 md:border-r border-[#0D1B2A]/[0.09]"
                    : "md:pl-10 lg:pl-14"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-[#8E6C2A]">
                    {item.code}
                  </span>
                  <span className="w-5 h-px bg-[#C9A35B]/75 shrink-0" aria-hidden="true" />
                </div>

                <h3 className="font-sans font-medium text-[21px] sm:text-[23px] text-[#111312] tracking-[-0.02em] leading-[1.24]">
                  {item.title}
                </h3>

                <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[480px]">
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

