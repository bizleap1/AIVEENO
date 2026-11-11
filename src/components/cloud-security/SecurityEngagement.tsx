"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Four-Column Progressive Scope Continuum:
 * UNDERSTAND -> EVALUATE -> PRIORITIZE -> SUPPORT IMPROVEMENT
 *
 * Visually distinct from Consulting's vertical spine, Migration's 5-stage track,
 * and Managed's 2x2 clockwise loop via expanding muted-gold depth indicators
 * (25% -> 50% -> 75% -> 100%) across clean open typography columns.
 * Zero giant stepper circles, zero boxed cards, zero proprietary framework claims.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SecurityPhase {
  code: string;
  phase: string;
  description: string;
  barWidthClass: string;
}

const ENGAGEMENT_PHASES: SecurityPhase[] = [
  {
    code: "Phase I",
    phase: "Understand",
    description:
      "Review the environment, security requirements and operational context.",
    barWidthClass: "w-1/4",
  },
  {
    code: "Phase II",
    phase: "Evaluate",
    description:
      "Identify relevant security, configuration and governance considerations.",
    barWidthClass: "w-2/4",
  },
  {
    code: "Phase III",
    phase: "Prioritize",
    description:
      "Determine which improvements may be most relevant to address.",
    barWidthClass: "w-3/4",
  },
  {
    code: "Phase IV",
    phase: "Support Improvement",
    description:
      "Define recommended actions and support agreed implementation activities.",
    barWidthClass: "w-full",
  },
];

export default function SecurityEngagement() {
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
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  From security understanding to clearer governance.
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
                Security and governance work begins with understanding the environment, identifying priorities and defining appropriate control considerations.
              </motion.p>
            </div>
          </div>

          {/* Four-Column Stepped Editorial Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 xl:gap-10">
            {ENGAGEMENT_PHASES.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.06 + idx * 0.07,
                }}
                className="flex flex-col space-y-4 border-b sm:border-b-0 border-[#0D1B2A]/[0.09] pb-6 sm:pb-0 last:border-b-0 last:pb-0"
              >
                {/* Expanding Proportional Gold Indicator along Hairline Base */}
                <div className="w-full h-[2px] bg-[#0D1B2A]/[0.12] relative" aria-hidden="true">
                  <span
                    className={`block h-[2px] bg-[#C9A35B] ${item.barWidthClass}`}
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8E6C2A]">
                    {item.code}
                  </span>

                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.24] uppercase">
                    {item.phase}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58] font-normal max-w-[300px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Non-Proprietary Illustrative Qualifier */}
          <div className="pt-4 border-t border-[#0D1B2A]/[0.09]">
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
              Illustrative engagement phases — scope, security priorities and agreed improvement activities depend on organizational context rather than a proprietary framework.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

