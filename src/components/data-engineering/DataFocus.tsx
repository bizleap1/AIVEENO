"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Distinctive Asymmetric Consulting Composition:
 * - Left Anchor (~42%): Primary editorial statement ("Connect information. Create usable foundations.")
 * - Right Column (~54%): Three converging information-preparation areas with horizontal gold accents
 *   (CONNECT DATA SOURCES -> TRANSFORM & ORGANIZE DATA -> BUILD DATA FOUNDATIONS)
 * - Strictly focused on information collection, transformation & storage (zero DevOps software delivery flow,
 *   zero boxed cards, zero fake telemetry dashboards).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DataFocusArea {
  title: string;
  description: string;
}

const DATA_FOCUS_AREAS: DataFocusArea[] = [
  {
    title: "Connect Data Sources",
    description:
      "Evaluate relevant applications, databases and information sources that need to work together.",
  },
  {
    title: "Transform & Organize Data",
    description:
      "Design appropriate movement and transformation processes for downstream use.",
  },
  {
    title: "Build Data Foundations",
    description:
      "Develop suitable pipeline and storage structures for analytical requirements.",
  },
];

export default function DataFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Strong Primary Editorial Statement */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Data Engineering Approach</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[500px]"
              >
                Connect information. Create usable foundations.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[470px] pt-1"
            >
              We help organizations bring together, transform and organize data so it can support business reporting, analytics and relevant AI applications.
            </motion.p>
          </div>

          {/* Right Column: Three Focused Work Areas on Converging Hairline Tiers */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8 sm:space-y-9">
            {DATA_FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.48,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className="pt-5 border-t border-[#0D1B2A]/[0.14] space-y-2.5 relative"
              >
                {/* Muted gold top-left indicator mark anchoring each layer */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] w-10 bg-[#C9A35B]"
                />

                <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                  {area.title}
                </h3>

                <p className="font-sans text-[17.5px] sm:text-[18.5px] lg:text-[19.5px] text-[#111312] leading-[1.46] tracking-[-0.012em] font-normal max-w-[540px]">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

