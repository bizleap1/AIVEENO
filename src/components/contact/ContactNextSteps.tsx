"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Contact / Book a Discovery Call (/contact)
 * SECTION 02: WHAT HAPPENS NEXT (#F5F7F6 Primary Light Surface)
 *
 * Clear, non-promissory explanation of the commercial discovery flow
 * and explicit distinction between a discovery conversation and a paid assessment.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface NextStepItem {
  code: string;
  title: string;
  description: string;
}

const NEXT_STEPS: NextStepItem[] = [
  {
    code: "01",
    title: "Share Your Context",
    description:
      "Tell us about your business goals, operational priorities or technology challenges through the enquiry form above.",
  },
  {
    code: "02",
    title: "Discovery & Qualification",
    description:
      "We review your context and hold a focused initial conversation to understand fit, current constraints and transformation priorities.",
  },
  {
    code: "03",
    title: "Define Next Steps",
    description:
      "Where alignment makes sense, next steps may include perspective on a focused assessment, technical discussion or potential roadmap scope.",
  },
];

export default function ContactNextSteps() {
  return (
    <section
      id="what-happens-next"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-20 border-b border-[#0D1B2A]/[0.08]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="space-y-9 sm:space-y-12">
          {/* Masthead */}
          <div className="max-w-[680px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>What Happens Next</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.06 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[34px] sm:text-[40px] lg:text-[44px] xl:text-[48px] text-[#111312] tracking-[-0.03em] leading-[1.08]"
            >
              A conversation focused on your priorities.
            </motion.h2>
          </div>

          {/* 3-Column Editorial Step Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#0D1B2A]/[0.14] divide-y md:divide-y-0 md:divide-x divide-[#0D1B2A]/[0.10]">
            {NEXT_STEPS.map((step, idx) => (
              <motion.div
                key={step.code}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.05 + idx * 0.07,
                }}
                className={`py-7 sm:py-8 lg:py-10 space-y-3 ${
                  idx === 0
                    ? "md:pr-8 lg:pr-10"
                    : idx === 1
                    ? "md:px-8 lg:px-10"
                    : "md:pl-8 lg:pl-10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[11.5px] font-semibold tracking-[0.14em] text-[#8E6C2A]">
                    {step.code}
                  </span>
                  <span className="h-px flex-1 bg-[#0D1B2A]/[0.12]" aria-hidden="true" />
                </div>

                <h3 className="font-sans font-medium text-[19px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.25] pt-0.5">
                  {step.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.6] font-normal max-w-[380px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Commercial Clarification */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pt-1">
            <p className="font-sans text-[14px] sm:text-[14.5px] text-[#56616B] leading-[1.6] max-w-[820px]">
              Not every enquiry leads to an assessment. Where a structured evaluation makes sense, our AI Transformation Assessment is a focused paid engagement—designed to map workflows, priorities and technical considerations rather than serve as a free consultation or generic audit.
            </p>

            <Link
              href="/ai-transformation-assessment"
              className="font-sans text-[14px] font-medium text-[#111312] hover:text-[#8E6C2A] underline underline-offset-4 decoration-[#0D1B2A]/[0.28] hover:decoration-[#8E6C2A] transition-colors duration-200 shrink-0"
            >
              About the Assessment
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

