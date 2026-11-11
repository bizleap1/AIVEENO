"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Progressive Stepped Editorial Composition (3 distinct focus tiers):
 * - Evaluate the Environment
 * - Plan and Execute the Transition
 * - Modernize Where It Matters
 *
 * Distinct horizontal stepping across desktop columns conveying progression without
 * copying Consulting's equal 3-column layout, without circular icons or sticky scroll.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface FocusNarrative {
  tag: string;
  title: string;
  description: string;
  desktopOffsetClass: string;
  accent?: boolean;
}

const FOCUS_NARRATIVES: FocusNarrative[] = [
  {
    tag: "Scope 01",
    title: "Evaluate the environment",
    description:
      "Understand existing workloads, applications, dependencies and operational requirements.",
    desktopOffsetClass: "lg:col-span-10 lg:col-start-1",
  },
  {
    tag: "Scope 02",
    title: "Plan and execute the transition",
    description:
      "Develop a suitable migration direction and support the movement of relevant workloads.",
    desktopOffsetClass: "lg:col-span-10 lg:col-start-2",
    accent: true,
  },
  {
    tag: "Scope 03",
    title: "Modernize where it matters",
    description:
      "Evaluate opportunities to improve architecture, applications and operational efficiency.",
    desktopOffsetClass: "lg:col-span-10 lg:col-start-3",
  },
];

export default function MigrationFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Split Masthead */}
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
                <span>Our Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[580px]"
                >
                  Migration and modernization, considered together.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[490px]"
              >
                We help organizations evaluate what should move, how systems should transition and where modernization is appropriate.
              </motion.p>
            </div>
          </div>

          {/* Progressive Three-Part Editorial Composition (Stepped Inward on Desktop) */}
          <div className="space-y-0 border-t border-[#0D1B2A]/[0.12]">
            {FOCUS_NARRATIVES.map((item, idx) => (
              <div key={item.tag} className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#0D1B2A]/[0.10]">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.09,
                  }}
                  className={`${item.desktopOffsetClass} py-7 sm:py-8 lg:py-9 lg:pl-7 relative`}
                >
                  {/* Subtle Vertical Architectural Step Anchor on Desktop */}
                  <span
                    aria-hidden="true"
                    className={`hidden lg:block absolute left-0 top-7 bottom-7 w-[2px] ${
                      item.accent ? "bg-[#C9A35B]" : "bg-[#0D1B2A]/[0.16]"
                    }`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-baseline">
                    <div className="md:col-span-5 space-y-1">
                      <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                        {item.tag}
                      </span>
                      <h3 className="font-sans font-medium text-[22px] sm:text-[24px] lg:text-[27px] text-[#111312] tracking-[-0.025em] leading-[1.2]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="md:col-span-7">
                      <p className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#3B4A5A] leading-[1.58] font-normal max-w-[540px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

