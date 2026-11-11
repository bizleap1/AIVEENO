"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 06: HOW WE ENGAGE (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Compact Connected 2x2 Operational Cycle Composition (Desktop) / Vertical Stack (Mobile):
 * - Top Row: UNDERSTAND ---> ESTABLISH
 * - Bottom Row: IMPROVE <--- MANAGE (continuous feedback cycle returning to Understand)
 * - Explicitly distinct from Consulting's vertical timeline and Migration's straight 5-phase rail
 * - Pure open typography on architectural quadrant axes — zero giant circles, zero boxed cards,
 *   zero fixed SLA claims or proprietary framework branding
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CyclePhase {
  code: string;
  title: string;
  directionCue: string;
  description: string;
}

const CYCLE_PHASES: {
  understand: CyclePhase;
  establish: CyclePhase;
  manage: CyclePhase;
  improve: CyclePhase;
} = {
  understand: {
    code: "01",
    title: "Understand",
    directionCue: "Environment & Priorities",
    description:
      "Review the cloud environment, operational requirements and priorities.",
  },
  establish: {
    code: "02",
    title: "Establish",
    directionCue: "Scope & Practices",
    description:
      "Agree on management scope, responsibilities and operating practices.",
  },
  manage: {
    code: "03",
    title: "Manage",
    directionCue: "Recurring Operations",
    description:
      "Support recurring operational activities, monitoring and issue coordination.",
  },
  improve: {
    code: "04",
    title: "Improve",
    directionCue: "Continuous Refinement",
    description:
      "Review findings and identify practical improvements over time.",
  },
};

export default function ManagedEngagement() {
  const orderedMobile: CyclePhase[] = [
    CYCLE_PHASES.understand,
    CYCLE_PHASES.establish,
    CYCLE_PHASES.manage,
    CYCLE_PHASES.improve,
  ];

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
                <span>Our Engagement Approach</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[680px]"
                >
                  A structured approach to ongoing cloud operations.
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
                Management activities should reflect the technology environment, business priorities and agreed responsibilities.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* DESKTOP CONNECTED OPERATIONAL CYCLE (2x2 Architectural Loop)      */}
          {/* Clockwise Progression: 01 Understand -> 02 Establish ->           */}
          {/*                       03 Manage     -> 04 Improve   -> (back 01)  */}
          {/* ================================================================= */}
          <div className="hidden md:block relative border-t border-[#0D1B2A]/[0.14]">
            <div className="relative grid grid-cols-12 gap-y-0 items-stretch">
              {/* Top-Left Quadrant: 01 UNDERSTAND */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.06 }}
                className="col-span-5 pt-8 lg:pt-9 pr-6 pb-8 lg:pb-10 border-b border-r border-[#0D1B2A]/[0.12] relative"
              >
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  <span>{CYCLE_PHASES.understand.code}</span>
                  <span className="w-3.5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <span>{CYCLE_PHASES.understand.directionCue}</span>
                </span>
                <h3 className="font-sans font-medium text-[24px] lg:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2] mt-2 uppercase">
                  {CYCLE_PHASES.understand.title}
                </h3>
                <p className="font-sans text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal mt-2.5 max-w-[380px]">
                  {CYCLE_PHASES.understand.description}
                </p>

                {/* Clockwise Return Cue on Left Axis (Improve -> Understand) */}
                <div
                  aria-hidden="true"
                  className="hidden lg:flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.14em] text-[#8E6C2A] mt-5"
                >
                  <span className="w-2 h-2 border-t border-l border-[#C9A35B] rotate-45 translate-y-[1px]" />
                  <span>Informed by continuous review</span>
                </div>
              </motion.div>

              {/* Horizontal Clockwise Track Bridge (01 -> 02) */}
              <div
                className="col-span-2 flex flex-col items-center justify-center px-3 pt-8 lg:pt-9 pb-8 lg:pb-10 border-b border-[#0D1B2A]/[0.12]"
                aria-hidden="true"
              >
                <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-[#56616B]/75 mb-2">
                  Align
                </span>
                <div className="w-full flex items-center">
                  <span className="flex-1 h-px bg-[#C9A35B]/75" />
                  <span className="w-2 h-2 border-t border-r border-[#C9A35B] rotate-45 -ml-1.5" />
                </div>
              </div>

              {/* Top-Right Quadrant: 02 ESTABLISH */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
                className="col-span-5 pt-8 lg:pt-9 pl-6 lg:pl-8 pb-8 lg:pb-10 border-b border-l border-[#0D1B2A]/[0.12] relative"
              >
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  <span>{CYCLE_PHASES.establish.code}</span>
                  <span className="w-3.5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <span>{CYCLE_PHASES.establish.directionCue}</span>
                </span>
                <h3 className="font-sans font-medium text-[24px] lg:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2] mt-2 uppercase">
                  {CYCLE_PHASES.establish.title}
                </h3>
                <p className="font-sans text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal mt-2.5 max-w-[380px]">
                  {CYCLE_PHASES.establish.description}
                </p>

                {/* Clockwise Downward Cue into Manage */}
                <div
                  aria-hidden="true"
                  className="hidden lg:flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.14em] text-[#56616B] mt-5"
                >
                  <span className="w-2 h-2 border-b border-r border-[#C9A35B] rotate-45 -translate-y-[1px]" />
                  <span>Transition to steady operations</span>
                </div>
              </motion.div>

              {/* Bottom-Left Quadrant: 04 IMPROVE (Completes cycle back up to Understand) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.24 }}
                className="col-span-5 pr-6 pt-8 lg:pt-10 pb-6 border-r border-[#0D1B2A]/[0.12] relative"
              >
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  <span>{CYCLE_PHASES.improve.code}</span>
                  <span className="w-3.5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <span>{CYCLE_PHASES.improve.directionCue}</span>
                </span>
                <h3 className="font-sans font-medium text-[24px] lg:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2] mt-2 uppercase">
                  {CYCLE_PHASES.improve.title}
                </h3>
                <p className="font-sans text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal mt-2.5 max-w-[380px]">
                  {CYCLE_PHASES.improve.description}
                </p>
              </motion.div>

              {/* Horizontal Clockwise Return Bridge (03 MANAGE ---> 04 IMPROVE) */}
              <div
                className="col-span-2 flex flex-col items-center justify-center px-3 pt-8 lg:pt-10 pb-6"
                aria-hidden="true"
              >
                <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-[#8E6C2A] mb-2">
                  Refine
                </span>
                <div className="w-full flex items-center">
                  <span className="w-2 h-2 border-b border-l border-[#C9A35B] rotate-45 -mr-1.5" />
                  <span className="flex-1 h-px bg-[#C9A35B]/75" />
                </div>
              </div>

              {/* Bottom-Right Quadrant: 03 MANAGE */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.18 }}
                className="col-span-5 pl-6 lg:pl-8 pt-8 lg:pt-10 pb-6 border-l border-[#0D1B2A]/[0.12] relative"
              >
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  <span>{CYCLE_PHASES.manage.code}</span>
                  <span className="w-3.5 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <span>{CYCLE_PHASES.manage.directionCue}</span>
                </span>
                <h3 className="font-sans font-medium text-[24px] lg:text-[26px] text-[#111312] tracking-[-0.025em] leading-[1.2] mt-2 uppercase">
                  {CYCLE_PHASES.manage.title}
                </h3>
                <p className="font-sans text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal mt-2.5 max-w-[380px]">
                  {CYCLE_PHASES.manage.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* MOBILE VERTICAL READABLE PROGRESSION                              */}
          {/* ================================================================= */}
          <div className="md:hidden border-t border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.09]">
            {orderedMobile.map((phase) => (
              <div key={phase.code} className="py-6 space-y-2">
                <div className="flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  <span>{phase.code}</span>
                  <span className="w-3 h-px bg-[#C9A35B]" aria-hidden="true" />
                  <span>{phase.directionCue}</span>
                </div>

                <h3 className="font-sans font-medium text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.22] uppercase">
                  {phase.title}
                </h3>

                <p className="font-sans text-[15px] text-[#56616B] leading-[1.58] font-normal">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Non-Contractual Illustrative Qualifier */}
          <div className="pt-4 border-t border-[#0D1B2A]/[0.09]">
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
              Illustrative engagement phases — operating responsibilities, monitoring scope and review cadences reflect agreed client requirements rather than fixed SLAs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

