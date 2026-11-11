"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Connected Full-Width Sequential Spine Ledger:
 * UNDERSTAND -> DESIGN -> IMPLEMENT -> REFINE
 *
 * Visually distinct from Framework 7-step lifecycle and previous Cloud Service layouts
 * (no cards, no stepper dots, no corner brackets, no expanding bars).
 * Explicit non-contractual & non-proprietary methodology qualifier underneath.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DevOpsEngagementPhase {
  code: string;
  phase: string;
  description: string;
}

const ENGAGEMENT_PHASES: DevOpsEngagementPhase[] = [
  {
    code: "01",
    phase: "UNDERSTAND",
    description:
      "Review existing development, deployment and infrastructure practices.",
  },
  {
    code: "02",
    phase: "DESIGN",
    description:
      "Identify suitable pipeline, automation and infrastructure improvements.",
  },
  {
    code: "03",
    phase: "IMPLEMENT",
    description:
      "Support agreed CI/CD, automation and infrastructure workflow changes.",
  },
  {
    code: "04",
    phase: "REFINE",
    description:
      "Evaluate delivery practices and identify further opportunities for improvement.",
  },
];

export default function DevOpsEngagement() {
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
                <span>Our Engagement Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[640px]"
                >
                  From existing workflows to practical automation.
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
                The appropriate automation approach depends on the current development environment, technical dependencies and delivery priorities.
              </motion.p>
            </div>
          </div>

          {/* Connected Sequential Editorial Progression Rows */}
          <div className="border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.11]">
            {ENGAGEMENT_PHASES.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.06,
                }}
                className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <div className="md:col-span-5 flex items-center gap-4">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-[#8E6C2A] shrink-0">
                    {item.code}
                  </span>
                  <span
                    className="w-6 h-px bg-[#C9A35B]/80 shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-[18px] sm:text-[20px] uppercase tracking-[0.04em] text-[#111312]">
                    {item.phase}
                  </h3>
                </div>

                <div className="md:col-span-7 pl-9 md:pl-0">
                  <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[560px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clear Non-Contractual / Non-Proprietary Qualifier */}
          <div className="pt-1">
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
              These are descriptive activities, not fixed contractual milestones or a proprietary methodology.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

