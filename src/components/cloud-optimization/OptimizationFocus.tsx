"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Asymmetric Hierarchical Consulting Composition:
 * - Upper Band: Full editorial statement ("Understand the environment. Improve what matters.")
 *   paired with concise introduction.
 * - Lower Band: Asymmetric 5-col foundational pillar ("Understand Current Utilization")
 *   supporting two stacked evaluation & action disciplines on the right ("Identify
 *   Efficiency Opportunities" & "Recommend Practical Changes").
 * - No process timeline, no heavy cards, no repeated numbering, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

export default function OptimizationFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Asymmetric Statement Band */}
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
                <span>Our Optimization Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[640px]"
                >
                  Understand the environment. Improve what matters.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[490px]"
              >
                We help organizations evaluate their existing cloud environments and identify practical opportunities for improvement.
              </motion.p>
            </div>
          </div>

          {/* Asymmetric Three Work Areas Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-10 lg:pt-12 gap-8 lg:gap-0">
            {/* Primary Foundation Column (Left 5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.08 }}
              className="lg:col-span-5 lg:pr-12 lg:border-r border-[#0D1B2A]/[0.11] space-y-3 border-b lg:border-b-0 pb-7 lg:pb-0"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-px bg-[#C9A35B]" aria-hidden="true" />
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  Understand Current Utilization
                </h3>
              </div>

              <p className="font-sans text-[20px] sm:text-[22px] lg:text-[24px] text-[#111312] leading-[1.38] tracking-[-0.02em] font-medium max-w-[440px]">
                Review relevant workloads, resource usage, architecture and operational requirements.
              </p>
            </motion.div>

            {/* Right Two Paired Action Disciplines (Right 7 Cols) */}
            <div className="lg:col-span-7 lg:pl-12 xl:pl-14 flex flex-col divide-y divide-[#0D1B2A]/[0.10]">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
                className="pb-7 space-y-2"
              >
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  Identify Efficiency Opportunities
                </h3>
                <p className="font-sans text-[17px] sm:text-[18.5px] lg:text-[19px] text-[#111312] leading-[1.48] tracking-[-0.012em] font-normal max-w-[580px]">
                  Evaluate areas where configuration, resource allocation or architecture may be improved.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.22 }}
                className="pt-7 space-y-2"
              >
                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  Recommend Practical Changes
                </h3>
                <p className="font-sans text-[17px] sm:text-[18.5px] lg:text-[19px] text-[#111312] leading-[1.48] tracking-[-0.012em] font-normal max-w-[580px]">
                  Prioritize improvements based on business needs, technical dependencies, performance and cost considerations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

