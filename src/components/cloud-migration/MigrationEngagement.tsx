"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Connected 5-Phase Horizontal Progression Strip (Desktop) / Vertical Stem (Mobile):
 * 01 Evaluate -> 02 Plan -> 03 Migrate -> 04 Validate -> 05 Improve
 *
 * Distinct from Section 04's 3-zone architectural exhibit and Framework's vertical timeline:
 * - Sequential delivery progression anchored along a crisp hairline ruler bar
 * - Explicitly framed as illustrative delivery activities adapted per environment
 * - Zero circular node bullets, zero boxed stages, zero fabricated timelines
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DeliveryStage {
  number: string;
  label: string;
  description: string;
  highlight?: boolean;
}

const DELIVERY_STAGES: DeliveryStage[] = [
  {
    number: "01",
    label: "Evaluate",
    description:
      "Understand existing applications, workloads, dependencies and constraints.",
  },
  {
    number: "02",
    label: "Plan",
    description:
      "Define transition priorities, architecture direction and continuity considerations.",
  },
  {
    number: "03",
    label: "Migrate",
    description:
      "Execute planned workload transitions and relevant modernization changes.",
    highlight: true,
  },
  {
    number: "04",
    label: "Validate",
    description:
      "Verify system behavior, security posture and operational readiness.",
  },
  {
    number: "05",
    label: "Improve",
    description:
      "Support optimization as the modernized environment operates.",
  },
];

export default function MigrationEngagement() {
  return (
    <section
      id="how-we-engage"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Editorial Masthead */}
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
                <span>Delivery Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  A structured transition. A practical way forward.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[490px]"
              >
                Migration and modernization benefit from clear evaluation, sequencing and validation across each stage.
              </motion.p>
            </div>
          </div>

          {/* Connected Five-Phase Editorial Progression */}
          <div className="border-t border-[#0D1B2A]/[0.14]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 lg:gap-6 xl:gap-8">
              {DELIVERY_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.06 + idx * 0.06,
                  }}
                  className="relative pt-6 sm:pt-7 lg:pt-8 pb-6 lg:pb-2 border-b lg:border-b-0 border-[#0D1B2A]/[0.09] last:border-b-0 last:pb-0"
                >
                  {/* Top Architectural Tick along the continuous horizontal rule */}
                  <span
                    aria-hidden="true"
                    className={`hidden lg:block absolute top-0 left-0 h-[3px] w-7 ${
                      stage.highlight ? "bg-[#C9A35B]" : "bg-[#111312]/45"
                    }`}
                  />

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] ${
                          stage.highlight ? "text-[#8E6C2A]" : "text-[#56616B]"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <span className="h-px w-3.5 bg-[#C9A35B]/70 shrink-0" aria-hidden="true" />
                    </div>

                    <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.25]">
                      {stage.label}
                    </h3>

                    <p className="font-sans text-[14.5px] sm:text-[15px] text-[#56616B] leading-[1.58] font-normal max-w-[280px]">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subtle Non-Contractual Illustrative Qualifier */}
            <div className="mt-7 lg:mt-9 pt-4 border-t border-[#0D1B2A]/[0.08]">
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
                Illustrative delivery activities — sequencing, scope and validation checkpoints are tailored to each organization&apos;s systems and operational constraints.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

