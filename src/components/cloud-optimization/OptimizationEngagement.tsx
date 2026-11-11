"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Compact Architectural Bracket Progression:
 * UNDERSTAND -> ANALYZE -> PRIORITIZE -> IMPROVE
 *
 * Distinct from Consulting (vertical chapter list), Migration (5-stage track),
 * Managed (2x2 clockwise loop), and Security (expanding proportion baseline bars)
 * via clean L-shaped rectilinear evaluation brackets and open editorial typography.
 * Zero giant stepper circles, zero fixed milestone/contractual promises.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EngagementActivity {
  activity: string;
  description: string;
}

const ENGAGEMENT_ACTIVITIES: EngagementActivity[] = [
  {
    activity: "Understand",
    description:
      "Review the cloud environment, business priorities and relevant workloads.",
  },
  {
    activity: "Analyze",
    description:
      "Evaluate architecture, resource utilization, performance and cost considerations.",
  },
  {
    activity: "Prioritize",
    description:
      "Identify potential improvements based on value, feasibility and dependencies.",
  },
  {
    activity: "Improve",
    description:
      "Recommend and support agreed changes, with further evaluation where appropriate.",
  },
];

export default function OptimizationEngagement() {
  return (
    <section
      id="engagement-approach"
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
                <span>Engagement Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[640px]"
                >
                  A practical approach to cloud improvement.
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
                Optimization begins with understanding the environment and identifying which changes are appropriate for its requirements.
              </motion.p>
            </div>
          </div>

          {/* Four Connected Architectural Measurement Brackets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 xl:gap-10">
            {ENGAGEMENT_ACTIVITIES.map((item, idx) => (
              <motion.div
                key={item.activity}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="relative border-t border-l border-[#0D1B2A]/[0.16] pt-5 pl-5 space-y-2.5"
              >
                {/* Muted gold architectural corner calibration mark */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-4 h-[2px] bg-[#C9A35B]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[2px] h-4 bg-[#C9A35B]"
                />

                <h3 className="font-sans font-medium text-[19px] sm:text-[20px] text-[#111312] tracking-[0.02em] leading-[1.24] uppercase">
                  {item.activity}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[300px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Clear Non-Contractual Descriptive Qualifier */}
          <div className="pt-4 border-t border-[#0D1B2A]/[0.09]">
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
              These are descriptive engagement activities, not fixed contractual milestones.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

