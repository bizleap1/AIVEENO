"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 05: BUSINESS OUTCOMES (#F5F7F6 Light Editorial Surface)
 *
 * Open Typography-Led Ledger (Asymmetric 5/6 Split):
 * - Left Anchor (~42%): Eyebrow, H2 ("Software that supports what comes next."), intro statement.
 * - Right Column (~54%): Single-column vertical register of four software priorities
 *   (Operational Fit | Adaptability | System Connectivity | Maintainability)
 *   separated cleanly by hairlines — explicitly avoiding a 2x2 boxed card dashboard
 *   and making zero guarantees on speed, ROI, performance, or scalability numbers.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SoftwareOutcome {
  label: string;
  title: string;
  description: string;
}

const SOFTWARE_OUTCOMES: SoftwareOutcome[] = [
  {
    label: "Alignment",
    title: "Operational Fit",
    description:
      "Support applications aligned with business workflows and requirements.",
  },
  {
    label: "Evolution",
    title: "Adaptability",
    description:
      "Prepare software for changing functional and business needs.",
  },
  {
    label: "Cohesion",
    title: "System Connectivity",
    description:
      "Improve how suitable applications exchange information and work together.",
  },
  {
    label: "Longevity",
    title: "Maintainability",
    description:
      "Consider long-term software quality and ongoing technical management.",
  },
];

export default function SoftwareOutcomes() {
  return (
    <section
      id="business-outcomes"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Editorial Heading Column */}
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
                Software that supports what comes next.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[470px] pt-1"
            >
              Well-considered software development helps organizations align applications with operational and technology needs.
            </motion.p>
          </div>

          {/* Right Single-Column Editorial Priority Ledger */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.11]">
            {SOFTWARE_OUTCOMES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.06,
                }}
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-4">
                  <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                    <span className="w-2.5 h-px bg-[#C9A35B]" aria-hidden="true" />
                    {item.label}
                  </span>
                </div>

                <div className="sm:col-span-8 space-y-1.5">
                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.24]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[440px]">
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

