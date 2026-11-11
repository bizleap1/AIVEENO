"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Left Display Headline Column (5 cols) + Right Introductory Context &
 * Three Unboxed Typographic Statements (7 cols):
 * - Distinct from Consulting (3 horizontal cols), Migration (4/6 stacked divide-y without top border split),
 *   Managed (wide masthead + 01/02/03 ledger), and Security (masthead + right-indented table)
 * - Restraint whitespace, minimal separators, zero hover noise
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OptimizationChallengeItem {
  title: string;
  description: string;
}

const OPTIMIZATION_CHALLENGES: OptimizationChallengeItem[] = [
  {
    title: "Resource Misalignment",
    description:
      "Cloud capacity and configuration may no longer reflect actual workload needs.",
  },
  {
    title: "Architectural Complexity",
    description:
      "Existing architecture decisions can affect performance, scalability and cost.",
  },
  {
    title: "Limited Cost Visibility",
    description:
      "Understanding where resources are used helps inform optimization priorities.",
  },
];

export default function OptimizationChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Sticky/Anchored Display Headline */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Optimization Challenge</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[490px]"
              >
                Cloud efficiency is not a one-time decision.
              </motion.h2>
            </div>
          </div>

          {/* Right Column: Concise Intro + Three Clean Typographic Statements */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[19px] text-[#56616B] leading-[1.6] font-normal max-w-[650px] pb-7 sm:pb-8 border-b border-[#0D1B2A]/[0.14]"
            >
              As cloud environments evolve, workloads, architecture and resource requirements can change. Without ongoing evaluation, organizations may face inefficient resource usage, performance constraints and unnecessary complexity.
            </motion.p>

            {/* Three Unboxed Typographic Statements */}
            <div className="divide-y divide-[#0D1B2A]/[0.09]">
              {OPTIMIZATION_CHALLENGES.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.08,
                  }}
                  className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-start gap-2.5">
                    <span
                      className="w-3.5 h-px bg-[#C9A35B] shrink-0 mt-[13px]"
                      aria-hidden="true"
                    />
                    <h3 className="font-sans font-medium text-[19.5px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.28]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-7 pl-6 sm:pl-0">
                    <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[460px]">
                      {item.description}
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

