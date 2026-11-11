"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Asymmetric Stacked Editorial Composition:
 * - Left Column (~42%): Eyebrow, H2 headline, and context copy
 * - Right Column (~50%): Three concise stacked statements separated by hairlines
 * - Zero boxed cards, zero hover noise, soft grouped reveal (450–600ms)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface MigrationChallengeItem {
  title: string;
  detail: string;
}

const CHALLENGES: MigrationChallengeItem[] = [
  {
    title: "Complex Dependencies",
    detail:
      "Applications, data and infrastructure often depend on connected systems.",
  },
  {
    title: "Operational Continuity",
    detail:
      "Migration planning must consider the business processes that rely on existing systems.",
  },
  {
    title: "Long-Term Architecture",
    detail:
      "Moving workloads without evaluating their future architecture can limit modernization value.",
  },
];

export default function MigrationChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Editorial Headline & Context */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Modernization Challenge</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[520px]"
              >
                Moving systems is only part of the challenge.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[480px] pt-1"
            >
              Cloud migration involves more than transferring applications and infrastructure. Existing dependencies, operational continuity, security requirements and performance expectations need to inform the transition.
            </motion.p>
          </div>

          {/* Right Column: Three Stacked Editorial Statements (Unboxed) */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-[#0D1B2A]/[0.12]">
            {CHALLENGES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className="py-6 sm:py-7 border-b border-[#0D1B2A]/[0.09] space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-4 h-px bg-[#C9A35B] shrink-0 mt-[13px]" aria-hidden="true" />
                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.28]">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16.5px] text-[#56616B] leading-[1.58] font-normal pl-6.5 max-w-[520px]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

