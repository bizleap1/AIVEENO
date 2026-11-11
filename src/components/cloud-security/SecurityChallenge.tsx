"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Editorial Headline Band + Indented Offset Register:
 * - Distinct from Consulting (3-col row), Migration (left/right stack), and Managed (full-width table)
 * - Generous whitespace, thin hairlines, restrained typographic statements
 * - Zero boxed cards, zero decorative icons, zero hover noise
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SecurityChallengeItem {
  title: string;
  description: string;
}

const SECURITY_CHALLENGES: SecurityChallengeItem[] = [
  {
    title: "Changing Environments",
    description:
      "New workloads and services introduce additional security considerations.",
  },
  {
    title: "Fragmented Visibility",
    description:
      "Limited visibility can make it harder to understand configuration and risk.",
  },
  {
    title: "Inconsistent Governance",
    description:
      "Controls and responsibilities need to reflect organizational requirements.",
  },
];

export default function SecurityChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Statement Header */}
          <div className="max-w-[780px] space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Security Challenge</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
              >
                Cloud complexity demands clearer control.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[18px] text-[#56616B] leading-[1.6] font-normal max-w-[650px]"
            >
              As cloud environments evolve, security responsibilities, configurations and operational dependencies can become more difficult to manage. A considered approach helps organizations understand their environment and make informed security and governance decisions.
            </motion.p>
          </div>

          {/* Indented Offset Typographic Register (Zero Cards, Zero Hover Noise) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-9 lg:col-start-4 border-t border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.09]">
              {SECURITY_CHALLENGES.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.06 + idx * 0.08,
                  }}
                  className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-8 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-start gap-2.5">
                    <span
                      className="w-3.5 h-px bg-[#C9A35B] shrink-0 mt-[13px]"
                      aria-hidden="true"
                    />
                    <h3 className="font-sans font-medium text-[20px] sm:text-[21px] lg:text-[22px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-7 pl-6 sm:pl-0">
                    <p className="font-sans text-[15.5px] sm:text-[16px] lg:text-[16.5px] text-[#56616B] leading-[1.58] font-normal max-w-[500px]">
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

