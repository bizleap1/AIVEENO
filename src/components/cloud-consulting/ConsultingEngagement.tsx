"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Connected Four-Chapter Consulting Ledger (Descriptive Activities):
 * 01 — ASSESS
 * 02 — EVALUATE
 * 03 — RECOMMEND
 * 04 — PLAN
 *
 * Distinct horizontal row composition connected by a subtle vertical structural line
 * and fine horizontal branches (no giant stepper dots, no sticky lifecycle rails,
 * and distinct from Section 03's horizontal three-column chapters).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ConsultationStage {
  number: string;
  phase: string;
  activity: string;
}

const CONSULTATION_STAGES: ConsultationStage[] = [
  {
    number: "01",
    phase: "Assess",
    activity:
      "Understand the current environment, constraints and business priorities.",
  },
  {
    number: "02",
    phase: "Evaluate",
    activity:
      "Consider architecture options, platform suitability and key dependencies.",
  },
  {
    number: "03",
    phase: "Recommend",
    activity:
      "Establish strategic recommendations and practical modernization priorities.",
  },
  {
    number: "04",
    phase: "Plan",
    activity:
      "Outline next steps, sequencing and implementation considerations.",
  },
];

export default function ConsultingEngagement() {
  return (
    <section
      id="engagement-approach"
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
                <span>Engagement Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  From understanding to a practical cloud roadmap.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[460px]"
              >
                Cloud consulting begins with understanding the existing environment and defining an appropriate way forward.
              </motion.p>
            </div>
          </div>

          {/* Connected Four-Chapter Consulting Ledger */}
          <div className="relative border-t border-[#0D1B2A]/[0.12]">
            {/* Continuous Architectural Spine Connecting Chapters 01–04 */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute left-[22px] top-7 bottom-7 w-px bg-[#0D1B2A]/[0.12]"
            />

            <div className="divide-y divide-[#0D1B2A]/[0.09]">
              {CONSULTATION_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.06 + idx * 0.08,
                  }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-6 lg:gap-8 py-6 sm:py-7 lg:py-8 items-baseline"
                >
                  {/* Structural Chapter Marker Column */}
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <span className="relative z-10 inline-flex items-center justify-center bg-[#EEF1F0] pr-2 font-sans text-[12px] font-semibold tracking-[0.14em] text-[#8E6C2A]">
                      {stage.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden sm:block flex-1 h-px bg-[#C9A35B]/55"
                    />
                  </div>

                  {/* Descriptive Activity Name */}
                  <div className="sm:col-span-4 lg:col-span-4">
                    <h3 className="font-sans font-medium text-[21px] sm:text-[23px] lg:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2] uppercase">
                      {stage.phase}
                    </h3>
                  </div>

                  {/* Concise Activity Scope */}
                  <div className="sm:col-span-6 lg:col-span-6">
                    <p className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[560px]">
                      {stage.activity}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

