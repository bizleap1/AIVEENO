"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Paired Architectural Typographic Matrix (2x2 Open Staggered Columns):
 * UNDERSTAND | DESIGN
 * DEVELOP    | REFINE
 *
 * Distinct from Data Engineering (suspended stems), Optimization (corner brackets),
 * Security (expanding bars), Managed (2x2 loop), and Framework lifecycle.
 * Clear non-contractual descriptive qualifier underneath.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EngagementActivity {
  activity: string;
  description: string;
}

const ENGAGEMENT_ACTIVITIES: EngagementActivity[] = [
  {
    activity: "UNDERSTAND",
    description:
      "Clarify business objectives, workflows and functional requirements.",
  },
  {
    activity: "DESIGN",
    description:
      "Define suitable application structure, architecture and delivery priorities.",
  },
  {
    activity: "DEVELOP",
    description:
      "Build and validate agreed software functionality.",
  },
  {
    activity: "REFINE",
    description:
      "Evaluate requirements, feedback and opportunities for improvement.",
  },
];

export default function SoftwareEngagement() {
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
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[600px]"
                >
                  From requirements to working software.
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
                The appropriate development approach depends on business goals, system requirements and technical dependencies.
              </motion.p>
            </div>
          </div>

          {/* Open Two-Column x Two-Row Architectural Activity Ledger */}
          <div className="border-t border-b border-[#0D1B2A]/[0.14] py-8 sm:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
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
                  className="border-l-2 border-[#C9A35B]/75 pl-5 sm:pl-6 py-0.5 space-y-2"
                >
                  <h3 className="font-sans font-semibold text-[13.5px] sm:text-[14px] uppercase tracking-[0.14em] text-[#111312]">
                    {item.activity}
                  </h3>

                  <p className="font-sans text-[16px] sm:text-[17px] text-[#56616B] leading-[1.56] font-normal max-w-[440px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Explicit Non-Contractual Descriptive Qualifier */}
          <div className="pt-1">
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
              These are descriptive activities, not fixed contractual milestones.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

