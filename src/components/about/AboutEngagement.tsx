"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno
 * SECTION 05: HOW WE WORK (#F5F7F6 Primary Light Editorial Surface)
 *
 * Concise Editorial Commercial Journey Narrative:
 * - Left Anchor (~40%): Eyebrow ("HOW WE ENGAGE") + H2 + introductory overview.
 * - Right Narrative Track (~52%): 5 numbered progression stages connected along
 *   a continuous restrained vertical hairline, plus explicit non-automatic/non-guaranteed note.
 * - Zero Framework 7-stage replication, zero stepper dots, zero boxed workflow cards.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface EngagementStage {
  code: string;
  stage: string;
  summary: string;
}

const COMMERCIAL_STAGES: EngagementStage[] = [
  {
    code: "01",
    stage: "Discovery & Qualification",
    summary:
      "Understand the organization's priorities and potential engagement fit.",
  },
  {
    code: "02",
    stage: "AI Transformation Assessment",
    summary:
      "Where appropriate, a focused paid assessment helps evaluate and prioritize AI opportunities.",
  },
  {
    code: "03",
    stage: "Transformation Roadmap",
    summary: "Define relevant priorities and recommended next steps.",
  },
  {
    code: "04",
    stage: "Implementation",
    summary: "Design and build agreed solutions and supporting technology.",
  },
  {
    code: "05",
    stage: "Ongoing Improvement",
    summary:
      "Evaluate adoption, operational needs and opportunities for refinement.",
  },
];

export default function AboutEngagement() {
  return (
    <section
      id="how-we-engage"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Sticky-Styled Editorial Overview Anchor (without scroll pinning) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>How We Engage</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[540px]"
              >
                From understanding the challenge to enabling change.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
              className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[480px] pt-1"
            >
              Engagements begin with understanding business priorities and can progress through assessment, planning, implementation and ongoing improvement.
            </motion.p>
          </div>

          {/* Right Vertical Editorial Progression Narrative */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-l border-[#0D1B2A]/[0.16] pl-5 sm:pl-8 space-y-6 sm:space-y-7">
              {COMMERCIAL_STAGES.map((item, idx) => (
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
                  className="relative space-y-1.5"
                >
                  {/* Restrained Horizontal Marker Intersecting Vertical Hairline */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-5 sm:-left-8 top-[9px] w-3 sm:w-4 h-px bg-[#C9A35B]"
                  />

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8E6C2A]">
                      {item.code}
                    </span>
                    <h3 className="font-sans font-medium text-[18px] sm:text-[19.5px] text-[#111312] tracking-[-0.015em] leading-[1.3]">
                      {item.stage}
                    </h3>
                  </div>

                  <p className="font-sans text-[15px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[540px]">
                    {item.summary}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Explicit Non-Automatic / Non-Guaranteed Qualifier */}
            <div className="mt-7 pt-4 border-t border-[#0D1B2A]/[0.12] pl-5 sm:pl-8">
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#56616B] leading-[1.55]">
                These are potential engagement stages, not automatic or guaranteed steps.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

