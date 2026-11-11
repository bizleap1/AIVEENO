"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Four Spacious Editorial Service Pillars (DESIGN | DEVELOP | MODERNIZE | MAINTAIN):
 * - Top split masthead (H2 left + Description right)
 * - Four spacious architectural columns below on a clean horizontal baseline without
 *   numbered timelines, boxy UI cards, or hover elaboration.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ServicePillar {
  pillar: string;
  description: string;
}

const SOFTWARE_PILLARS: ServicePillar[] = [
  {
    pillar: "DESIGN",
    description:
      "Translate business needs into suitable application structures and functionality.",
  },
  {
    pillar: "DEVELOP",
    description:
      "Build applications and software systems around defined requirements.",
  },
  {
    pillar: "MODERNIZE",
    description:
      "Improve or evolve existing applications where modernization is appropriate.",
  },
  {
    pillar: "MAINTAIN",
    description:
      "Support agreed application maintenance and ongoing technical improvements.",
  },
];

export default function SoftwareFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
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
                <span>Our Software Engineering Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[600px]"
                >
                  Built for the way your business operates.
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
                We approach software development through business requirements, application design, engineering and long-term maintainability.
              </motion.p>
            </div>
          </div>

          {/* Four Spacious Editorial Service Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-9 xl:gap-12 border-t border-[#0D1B2A]/[0.15] pt-8 sm:pt-10">
            {SOFTWARE_PILLARS.map((item, idx) => (
              <motion.div
                key={item.pillar}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="space-y-3 border-b sm:border-b-0 border-[#0D1B2A]/[0.09] pb-6 sm:pb-0 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-5 h-[2px] bg-[#C9A35B] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans text-[13px] sm:text-[13.5px] font-semibold uppercase tracking-[0.14em] text-[#8E6C2A]">
                    {item.pillar}
                  </h3>
                </div>

                <p className="font-sans text-[17px] sm:text-[18px] lg:text-[18.5px] text-[#111312] leading-[1.48] tracking-[-0.012em] font-normal max-w-[300px]">
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

