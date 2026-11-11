"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Open Typography-Led Composition:
 * - Split Editorial Masthead (7 cols H2 + 5 cols intro)
 * - Full-Width Four-Row Proportional Horizontal Index underneath
 *   (Resource Efficiency | Cost Awareness | Performance | Scalability)
 * - Distinct from 2x2 grids and 4-column strips used on other Cloud pages
 * - Zero boxed KPI cards, zero fake ROI metrics, zero guaranteed savings promises
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OptimizationOutcome {
  title: string;
  description: string;
}

const OPTIMIZATION_OUTCOMES: OptimizationOutcome[] = [
  {
    title: "Resource Efficiency",
    description:
      "Identify opportunities for more appropriate cloud resource utilization.",
  },
  {
    title: "Cost Awareness",
    description:
      "Understand cost considerations and potential areas for greater efficiency.",
  },
  {
    title: "Performance",
    description:
      "Evaluate improvements that may help workloads meet operational requirements.",
  },
  {
    title: "Scalability",
    description:
      "Consider how environments can adapt to changing demand and workloads.",
  },
];

export default function OptimizationOutcomes() {
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
                  Cloud resources aligned with business needs.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[490px]"
              >
                A considered optimization approach supports better-informed decisions about technology performance and efficiency.
              </motion.p>
            </div>
          </div>

          {/* Open Four-Row Full-Width Editorial Priority Register */}
          <div className="border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.10]">
            {OPTIMIZATION_OUTCOMES.map((item, idx) => (
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
                className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-8 items-baseline"
              >
                <div className="md:col-span-5 flex items-start gap-3">
                  <span
                    className="w-4 h-px bg-[#C9A35B] shrink-0 mt-[14px]"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-[21px] sm:text-[23px] text-[#111312] tracking-[-0.02em] leading-[1.24]">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-7 pl-7 md:pl-0">
                  <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[580px]">
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

