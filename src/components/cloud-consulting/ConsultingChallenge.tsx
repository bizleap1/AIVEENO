"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Editorial split masthead (H2 top-left, intro top-right) followed by three
 * concise, unboxed editorial tension statements with restrained separators.
 * Zero hover effects, zero cards.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ChallengeTension {
  title: string;
  detail: string;
}

const CHALLENGE_TENSIONS: ChallengeTension[] = [
  {
    title: "Complex Technology Environments",
    detail:
      "Existing applications, infrastructure and dependencies influence cloud decisions.",
  },
  {
    title: "Competing Priorities",
    detail:
      "Performance, security, scalability and cost need to be evaluated together.",
  },
  {
    title: "Unclear Modernization Direction",
    detail:
      "Without a practical strategy, technology investments can become disconnected from business priorities.",
  },
];

export default function ConsultingChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-20"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Masthead: Headline Left | Context Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-end">
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>The Challenge</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[580px]"
                >
                  Cloud decisions need more than a platform choice.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[540px]"
              >
                Choosing a cloud platform is only one part of the decision. Organizations also need to consider existing systems, architecture, security, operational requirements and the long-term implications of modernization.
              </motion.p>
            </div>
          </div>

          {/* Three Unboxed Editorial Tensions with Restrained Hairline Separators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-[#0D1B2A]/[0.12] pt-8 sm:pt-9 lg:pt-10">
            {CHALLENGE_TENSIONS.map((item, idx) => (
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
                className={`space-y-2.5 ${
                  idx > 0
                    ? "pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#0D1B2A]/[0.10] md:pl-8 lg:pl-10 xl:pl-12"
                    : "md:pr-8 lg:pr-10 xl:pr-12"
                } ${idx === 1 ? "md:pr-8 lg:pr-10 xl:pr-12" : ""}`}
              >
                <div className="w-5 h-px bg-[#C9A35B]" aria-hidden="true" />

                <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26] pt-1">
                  {item.title}
                </h3>

                <p className="font-sans text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[360px]">
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

