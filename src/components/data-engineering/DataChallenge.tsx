"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering
 * SECTION 02: THE CHALLENGE (#F5F7F6 Light Editorial Surface)
 *
 * Editorial Headline Band + Stepped Architectural Fragmentation Statements:
 * - Communicates disconnected information across applications, databases, and systems
 *   through three progressively offset typographic rows on desktop (clean vertical stack on mobile).
 * - Avoids repeated boxed cards, excessive dividers, generic icons, and hover noise.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DataChallengeItem {
  title: string;
  description: string;
  desktopGridClass: string;
}

const DATA_CHALLENGES: DataChallengeItem[] = [
  {
    title: "Fragmented Information",
    description:
      "Relevant data exists across disconnected systems and sources.",
    desktopGridClass: "lg:col-span-8 lg:col-start-1",
  },
  {
    title: "Inconsistent Data Preparation",
    description:
      "Different formats and processes can complicate analysis and downstream usage.",
    desktopGridClass: "lg:col-span-8 lg:col-start-3",
  },
  {
    title: "Limited Data Accessibility",
    description:
      "Teams may struggle to access the information required for reporting and informed decisions.",
    desktopGridClass: "lg:col-span-8 lg:col-start-5",
  },
];

export default function DataChallenge() {
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
                <span>The Data Challenge</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Disconnected data limits what organizations can see.
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
                Business information often exists across different applications, databases and operational systems. Without appropriate data pipelines and foundations, bringing that information together for reporting, analysis and AI can be difficult.
              </motion.p>
            </div>
          </div>

          {/* Three Stepped Editorial Problem Statements */}
          <div className="border-t border-[#0D1B2A]/[0.14] pt-8 sm:pt-10 space-y-6 sm:space-y-8">
            {DATA_CHALLENGES.map((item, idx) => (
              <div key={item.title} className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.48,
                    ease: transitionEase,
                    delay: 0.06 + idx * 0.08,
                  }}
                  className={`${item.desktopGridClass} border-l-2 border-[#C9A35B]/75 pl-5 sm:pl-6 py-1.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline`}
                >
                  <div className="sm:col-span-5">
                    <h3 className="font-sans font-medium text-[20px] sm:text-[21px] text-[#111312] tracking-[-0.02em] leading-[1.26]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-7">
                    <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.58] font-normal max-w-[480px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

