"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Open Four-Column Typographic Value Register:
 * - Upper Band: H2 left + editorial description right
 * - Lower Band: Four open editorial columns across a crisp hairline baseline
 *   (Delivery Consistency | Operational Efficiency | Workflow Visibility | Adaptability)
 * - Zero KPI dashboards, zero percentages, zero promises on delivery speed, zero defects, or uptime.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DevOpsOutcome {
  title: string;
  description: string;
}

const DEVOPS_OUTCOMES: DevOpsOutcome[] = [
  {
    title: "Delivery Consistency",
    description:
      "Support repeatable build, test and deployment practices.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Reduce unnecessary manual steps in applicable processes.",
  },
  {
    title: "Workflow Visibility",
    description:
      "Help teams better understand delivery activities and operational dependencies.",
  },
  {
    title: "Adaptability",
    description:
      "Create delivery practices that can evolve with changing application requirements.",
  },
];

export default function DevOpsOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Masthead */}
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
                <span>Business Value</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[600px]"
                >
                  More consistent delivery. Less repetitive effort.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[500px]"
              >
                A structured DevOps and automation approach can support more manageable software delivery and infrastructure operations.
              </motion.p>
            </div>
          </div>

          {/* Open Four-Column Editorial Baseline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-11 border-t border-b border-[#0D1B2A]/[0.14] py-8 sm:py-10">
            {DEVOPS_OUTCOMES.map((item, idx) => (
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
                className="space-y-3 border-b sm:border-b-0 border-[#0D1B2A]/[0.08] pb-6 sm:pb-0 last:border-b-0 last:pb-0"
              >
                <div className="w-6 h-[2px] bg-[#C9A35B]" aria-hidden="true" />

                <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                  {item.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[290px]">
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

