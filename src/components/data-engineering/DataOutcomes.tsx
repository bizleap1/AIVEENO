"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Open Four-Quadrant Architectural Typographic Matrix:
 * - Split Editorial Masthead (7 cols H2 + 5 cols intro)
 * - Two-row, two-column structural hairline register separated by crisp horizontal and vertical dividers:
 *   01 Data Accessibility | 02 Data Consistency
 *   03 Analytical Readiness | 04 AI Readiness
 * - Zero boxed KPI cards, zero invented volume/latency metrics, zero promises.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DataOutcome {
  number: string;
  title: string;
  description: string;
}

const DATA_OUTCOMES: [DataOutcome[], DataOutcome[]] = [
  [
    {
      number: "01",
      title: "Data Accessibility",
      description:
        "Bring together information needed across teams and workflows.",
    },
    {
      number: "02",
      title: "Data Consistency",
      description:
        "Support cleaner, more structured information across systems.",
    },
  ],
  [
    {
      number: "03",
      title: "Analytical Readiness",
      description:
        "Prepare data foundations that support reporting and business intelligence.",
    },
    {
      number: "04",
      title: "AI Readiness",
      description:
        "Create organized data foundations for appropriate AI applications.",
    },
  ],
];

export default function DataOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Upper Editorial Masthead */}
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
                  Better foundations for informed decisions.
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
                A considered data engineering approach helps organizations prepare information for reporting, analysis and appropriate AI applications.
              </motion.p>
            </div>
          </div>

          {/* Open Two-Row Structural Hairline Quadrant Register */}
          <div className="border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.12]">
            {DATA_OUTCOMES.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0D1B2A]/[0.12]"
              >
                {row.map((item, colIdx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.48,
                      ease: transitionEase,
                      delay: 0.06 + (rowIdx * 2 + colIdx) * 0.06,
                    }}
                    className={`py-7 sm:py-8 lg:py-9 space-y-2.5 ${
                      colIdx === 0 ? "md:pr-10 lg:pr-12" : "md:pl-10 lg:pl-12"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-[#8E6C2A]">
                        {item.number}
                      </span>
                      <span
                        className="w-3.5 h-px bg-[#C9A35B]/80 shrink-0"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-sans font-medium text-[21px] sm:text-[23px] text-[#111312] tracking-[-0.02em] leading-[1.24]">
                      {item.title}
                    </h3>

                    <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[460px]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

