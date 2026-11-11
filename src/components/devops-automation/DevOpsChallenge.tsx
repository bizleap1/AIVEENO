"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Editorial Masthead + Staggered Architectural Friction Columns:
 * - Upper Band: H2 left + Intro copy right.
 * - Lower Band: Three progressively staggered columns showing release friction
 *   (Manual Handoffs | Inconsistent Environments | Limited Delivery Visibility).
 * - Zero boxed cards, zero generic icons, zero hover effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DeliveryChallengeItem {
  title: string;
  description: string;
  staggerClass: string;
}

const DELIVERY_CHALLENGES: DeliveryChallengeItem[] = [
  {
    title: "Manual Handoffs",
    description:
      "Repeated steps and approvals can introduce delays and inconsistencies.",
    staggerClass: "lg:pt-0",
  },
  {
    title: "Inconsistent Environments",
    description:
      "Differences between environments can complicate testing and deployment.",
    staggerClass: "lg:pt-6",
  },
  {
    title: "Limited Delivery Visibility",
    description:
      "Without clear workflow visibility, issues can become harder to identify.",
    staggerClass: "lg:pt-12",
  },
];

export default function DevOpsChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Upper Editorial Statement & Context */}
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
                <span>The Delivery Challenge</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[640px]"
                >
                  Manual processes slow software delivery.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[500px]"
              >
                When development, testing, deployment and infrastructure operations depend on disconnected manual processes, teams can face inconsistent environments, repeated handoffs and difficult release coordination.
              </motion.p>
            </div>
          </div>

          {/* Three Progressively Staggered Friction Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 xl:gap-12 border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-10 items-start">
            {DELIVERY_CHALLENGES.map((item, idx) => (
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
                className={`${item.staggerClass} border-t-2 lg:border-t border-[#C9A35B]/75 lg:border-[#0D1B2A]/[0.14] pt-4 lg:pt-5 space-y-2 relative`}
              >
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute -top-px left-0 h-[2px] w-10 bg-[#C9A35B]"
                />

                <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                  {item.title}
                </h3>

                <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[360px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

