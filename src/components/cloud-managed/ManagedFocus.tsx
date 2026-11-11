"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Single Editorial Composition (Primary Left Statement + Right Cohesive Focus Stack):
 * - Avoids numbered three-step approach used on previous Cloud pages
 * - Three ongoing operations disciplines labeled cleanly without numerals:
 *   - OPERATIONAL OVERSIGHT
 *   - ISSUE MANAGEMENT
 *   - CONTINUOUS IMPROVEMENT
 * - Zero cards, zero fake monitoring screens, zero icons, zero decorative hover effects
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OperationsFocusArea {
  label: string;
  description: string;
}

const OPERATIONS_FOCUS_AREAS: OperationsFocusArea[] = [
  {
    label: "Operational Oversight",
    description:
      "Review the operational state of cloud resources, workloads and services.",
  },
  {
    label: "Issue Management",
    description:
      "Support investigation, coordination and resolution of operational issues within the agreed service scope.",
  },
  {
    label: "Continuous Improvement",
    description:
      "Evaluate performance, resource utilization and opportunities for operational refinement.",
  },
];

export default function ManagedFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Primary Statement */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Ongoing Cloud Operations</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[500px]"
              >
                Management beyond deployment.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[460px] pt-1"
            >
              Managed cloud services focus on supporting day-to-day operations while identifying opportunities to improve the environment.
            </motion.p>
          </div>

          {/* Right Column: Three Supporting Operational Disciplines (No Numbers, No Cards, No Icons) */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pl-8 lg:border-l border-[#0D1B2A]/[0.12] border-t lg:border-t-0 pt-2 lg:pt-0 divide-y divide-[#0D1B2A]/[0.09]">
            {OPERATIONS_FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className="py-6 sm:py-7 first:pt-4 lg:first:pt-1 last:pb-0 space-y-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                  <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[#8E6C2A]">
                    {area.label}
                  </h3>
                </div>

                <p className="font-sans text-[17.5px] sm:text-[19px] lg:text-[20px] text-[#111312] tracking-[-0.015em] leading-[1.45] font-normal max-w-[540px] pl-5.5">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

