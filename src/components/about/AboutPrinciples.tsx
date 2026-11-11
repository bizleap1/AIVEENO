"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno
 * SECTION 06: WHAT GUIDES OUR WORK (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Compact Full-Width Editorial Principles Triplet:
 * - Upper full-width header ("Clarity in thinking. Purpose in execution.")
 * - Three balanced typographic columns separated by one restrained top hairline divider system
 *   (Business Context | Practical Engineering | Ongoing Refinement)
 * - Distinct from Sections 02 and 04; zero slogans, zero certifications, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface WorkingPrinciple {
  title: string;
  description: string;
}

const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    title: "Business Context",
    description:
      "Understand organizational priorities before defining technology solutions.",
  },
  {
    title: "Practical Engineering",
    description:
      "Consider implementation requirements, existing systems and operational realities.",
  },
  {
    title: "Ongoing Refinement",
    description:
      "Recognize that adoption and changing business needs influence long-term value.",
  },
];

export default function AboutPrinciples() {
  return (
    <section
      id="working-principles"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Compact Full-Width Header */}
          <div className="max-w-[740px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Working Principles</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                Clarity in thinking. Purpose in execution.
              </motion.h2>
            </div>
          </div>

          {/* Three Concise Editorial Principles Across One Restrained Divider System */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 xl:gap-14 border-t border-b border-[#0D1B2A]/[0.15] py-8 sm:py-10">
            {WORKING_PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="space-y-2.5 border-b lg:border-b-0 border-[#0D1B2A]/[0.09] pb-6 lg:pb-0 last:border-b-0 last:pb-0"
              >
                <div className="w-7 h-[2px] bg-[#C9A35B]" aria-hidden="true" />

                <h3 className="font-sans text-[13px] sm:text-[13.5px] font-semibold uppercase tracking-[0.12em] text-[#111312] pt-1">
                  {item.title}
                </h3>

                <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[360px]">
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

