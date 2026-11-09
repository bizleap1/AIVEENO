"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page: Section 02
 * BUSINESS PROBLEMS WORTH SOLVING (#F5F7F6 Clean Light Editorial Surface)
 * 
 * Strict Enterprise Consulting Design Language:
 * - 100% Pure Typography & Spacious Editorial Rows:
 *   Replaces generic card grids and avoids repeating the AI Business Transformation
 *   page's 3-column challenge layout.
 * - Top: Clean authoritative masthead (Eyebrow, H2 48–56px, concise description).
 * - Center: Single subtle horizontal divider.
 * - Body: 4 spacious horizontal rows:
 *   Left ~42%: Problem Title (24–28px, Instrument Sans, weight 500)
 *   Right ~58%: Direct business explanation (17–18px, text-[#56616B])
 * - Zero cards, zero shadows, zero icons, zero numbers, zero hover effects/pointer cursors.
 * - Natural section height with generous, controlled breathing room.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface BusinessChallenge {
  id: string;
  title: string;
  explanation: string;
}

const BUSINESS_CHALLENGES: BusinessChallenge[] = [
  {
    id: "manual-work",
    title: "Repetitive manual work",
    explanation: "Routine tasks and recurring processes consume valuable time.",
  },
  {
    id: "disconnected-systems",
    title: "Disconnected systems",
    explanation: "Information and workflows are fragmented across business applications.",
  },
  {
    id: "fragmented-knowledge",
    title: "Hard-to-access knowledge",
    explanation: "Teams spend time finding information needed to do their work.",
  },
  {
    id: "decision-visibility",
    title: "Limited decision visibility",
    explanation: "Relevant business information isn't always available when decisions are made.",
  },
];

export default function SolutionsProblems() {
  return (
    <section
      id="business-problems"
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] pt-12 sm:pt-14 lg:pt-16 xl:pt-20 pb-12 sm:pb-14 lg:pb-16 xl:pb-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          
          {/* ========================================================================= */}
          {/* SECTION HEADER: FULL-WIDTH EDITORIAL MASTHEAD                              */}
          {/* ========================================================================= */}
          <div className="max-w-[840px] xl:max-w-[900px] space-y-3 sm:space-y-3.5">
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Business Context</span>
            </motion.div>

            {/* Headline H2: 48–56px Desktop / 34–38px Mobile */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="font-sans font-medium text-[32px] min-[390px]:text-[34px] sm:text-[40px] lg:text-[48px] xl:text-[54px] text-[#111312] tracking-[-0.03em] leading-[1.08]"
              >
                Real operational problems.
                <br />
                Practical opportunities.
              </motion.h2>
            </div>

            {/* Supporting Description: 17–18px Desktop / 16px Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] text-[#56616B] leading-[1.6] font-normal max-w-[720px] pt-1"
            >
              The most valuable AI applications start with understanding where work becomes inefficient, information gets fragmented and decisions become harder.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* FOUR SPACIOUS EDITORIAL ROWS (Title Left | Explanation Right)             */}
          {/* Thin dividers only — Zero cards, zero icons, zero numbered blocks          */}
          {/* ========================================================================= */}
          <div className="border-t border-[#0D1B2A]/[0.10]">
            {BUSINESS_CHALLENGES.map((challenge, idx) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.1 + idx * 0.08,
                }}
                className="border-b border-[#0D1B2A]/[0.08] py-6 sm:py-7 lg:py-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-10 items-baseline">
                  {/* Left Column (Desktop ~42%): Problem Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-sans font-medium text-[21px] sm:text-[23px] lg:text-[25px] xl:text-[27px] text-[#111312] tracking-[-0.02em] leading-snug">
                      {challenge.title}
                    </h3>
                  </div>

                  {/* Right Column (Desktop ~58%): One-Line Explanation */}
                  <div className="lg:col-span-7">
                    <p className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[640px]">
                      {challenge.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

