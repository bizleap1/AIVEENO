"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 07
 * FROM ASSESSMENT TO TRANSFORMATION (#111312 Dark Graphite Editorial Surface)
 * 
 * Purpose:
 * Connects the focused one-week diagnostic engagement to the broader enterprise
 * transformation journey: Assessment -> Transformation Roadmap -> Implementation.
 * 
 * Design Principles (Accenture-Inspired Strategic Consulting Narrative):
 * - Surface: Solid #111312 (Dark graphite contrast immediately following light Section 06 #F5F7F6).
 * - Typography: Instrument Sans, Primary #F5F7F6, Secondary #AEB3AF, Accent #C9A35B.
 * - Layout:
 *   - Top: Eyebrow + Large Editorial Headline + Strategic thesis copy.
 *   - Thin 1px full-width horizontal divider (white/[0.08]).
 *   - Bottom: Three horizontal typographic stages side-by-side:
 *     1. Assessment — Identify and prioritize opportunities.
 *     2. Transformation Roadmap — Define the direction, priorities and sequence of work.
 *     3. Implementation — Design, build and integrate suitable solutions.
 *   - Each stage is anchored by a short subtle muted-gold line (#C9A35B).
 * - Restraint:
 *   - Zero timeline dots, zero connecting arrows, zero numbered boxes, zero progress bars.
 *   - Zero buttons (conversion action belongs in Section 08 Final CTA).
 *   - Natural compact height: Content-driven ~380–440px.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface JourneyStage {
  title: string;
  description: string;
}

const journeyStages: JourneyStage[] = [
  {
    title: "Assessment",
    description: "Identify and prioritize opportunities.",
  },
  {
    title: "Transformation Roadmap",
    description: "Define the direction, priorities and sequence of work.",
  },
  {
    title: "Implementation",
    description: "Design, build and integrate suitable solutions.",
  },
];

export default function AssessmentJourney() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Subtle Dark Surface Rise: 650–750ms)
  const surfaceDuration = isMobile ? 0.40 : 0.70;
  const surfaceY = isMobile ? 12 : 20;

  const headerDelay = isMobile ? 0.08 : 0.15;
  const dividerDelay = isMobile ? 0.14 : 0.22;
  const stageBaseDelay = isMobile ? 0.18 : 0.28;
  const stageStagger = isMobile ? 0.06 : 0.08;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="from-assessment-to-transformation"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#111312] text-[#F5F7F6] border-b border-white/[0.08] pt-[48px] sm:pt-[54px] lg:pt-[60px] xl:pt-[64px] pb-[48px] sm:pb-[54px] lg:pb-[60px] xl:pb-[64px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-7 sm:space-y-8 lg:space-y-9">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2 + STRATEGIC THESIS                        */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: headerDelay }}
            className="flex flex-col items-start max-w-[820px] space-y-2.5 sm:space-y-3"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Beyond the Assessment</span>
            </div>

            {/* Headline H2: 44–50px Desktop / 32–36px Mobile */}
            <h2
              aria-label="Clarity is the starting point."
              className="text-[32px] min-[390px]:text-[34px] sm:text-[36px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] font-heading font-medium text-[#F5F7F6] tracking-[-0.035em] leading-[1.08] sm:leading-[1.05]"
            >
              Clarity is the starting point.
            </h2>

            {/* Supporting Copy: 16–17px */}
            <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#AEB3AF] font-sans font-normal leading-[1.58] max-w-[700px]">
              Assessment findings can inform a transformation roadmap and guide the design and implementation of solutions aligned with business priorities.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* SUBTLE FULL-WIDTH DIVIDER (1px white/[0.08])                               */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
            className="w-full h-px bg-white/[0.08] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* 2. THREE HORIZONTAL TYPOGRAPHIC STAGES                                    */}
          {/* Clean 3-column strategic narrative (Assessment | Roadmap | Implementation)*/}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-12 xl:gap-16 pt-1 sm:pt-2">
            {journeyStages.map((stage, idx) => {
              const stageDelay = stageBaseDelay + idx * stageStagger;

              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: itemDuration, ease: transitionEase, delay: stageDelay }}
                  className="flex flex-col items-start"
                >
                  {/* Short subtle gold accent line */}
                  <div
                    className="w-8 h-px bg-[#C9A35B] mb-3 sm:mb-3.5 lg:mb-4"
                    aria-hidden="true"
                  />

                  {/* Prominent Stage Name: 25–29px Desktop / 23–25px Mobile */}
                  <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] font-heading font-medium text-[#F5F7F6] tracking-[-0.025em] leading-[1.22] mb-2 sm:mb-2.5">
                    {stage.title}
                  </h3>

                  {/* Concise Supporting Sentence: 16–17px */}
                  <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] text-[#AEB3AF] font-sans font-normal leading-[1.58] max-w-[420px]">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
