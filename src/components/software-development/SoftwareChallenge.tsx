"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Asymmetric Left Anchor + Right Hairline Consideration Stack:
 * - Left (~42%): Eyebrow, strong editorial H2, and concise business context.
 * - Right (~54%): Three evolving software constraints separated by minimal hairlines.
 * - Avoids boxed cards, hover noise, and Data Engineering's diagonal step layout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SoftwareChallengeItem {
  numeral: string;
  title: string;
  description: string;
}

const SOFTWARE_CHALLENGES: SoftwareChallengeItem[] = [
  {
    numeral: "01",
    title: "Disconnected Applications",
    description:
      "Fragmented software can create inefficient workflows and handoffs.",
  },
  {
    numeral: "02",
    title: "Changing Requirements",
    description:
      "Applications may need to adapt to new processes and business priorities.",
  },
  {
    numeral: "03",
    title: "Legacy Constraints",
    description:
      "Existing architecture and dependencies can complicate modernization.",
  },
];

export default function SoftwareChallenge() {
  return (
    <section
      id="the-challenge"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Editorial Statement Anchor */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Software Challenge</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[520px]"
              >
                Business needs evolve. Software needs to keep up.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.6] font-normal max-w-[470px] pt-1"
            >
              As organizations change, existing applications can become difficult to adapt, integrate or maintain. Technology decisions should consider how software supports workflows, connects systems and evolves alongside business requirements.
            </motion.p>
          </div>

          {/* Right Three Supporting Consideration Rows */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-b border-[#0D1B2A]/[0.14] divide-y divide-[#0D1B2A]/[0.11]">
            {SOFTWARE_CHALLENGES.map((item, idx) => (
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
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-5 flex items-baseline gap-3">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-[#8E6C2A] shrink-0">
                    {item.numeral}
                  </span>
                  <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                    {item.title}
                  </h3>
                </div>

                <div className="sm:col-span-7 pl-7 sm:pl-0">
                  <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[440px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

