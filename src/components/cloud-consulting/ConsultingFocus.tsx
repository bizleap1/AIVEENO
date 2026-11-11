"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Explains Aiveeno's advisory role across three horizontal consulting focus areas:
 * 01 — UNDERSTAND THE ENVIRONMENT
 * 02 — DEFINE THE DIRECTION
 * 03 — PLAN THE TRANSITION
 *
 * Architecture:
 * - Three horizontal editorial chapters connected along a restrained single
 *   architectural datum line with rectilinear tick markers (zero stepper dots,
 *   zero boxed cards, zero generic circular icons).
 * - Distinct from Section 02 (Challenge) and Section 06 (Consultative Lifecycle).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ConsultingFocusArea {
  number: string;
  label: string;
  description: string;
}

const FOCUS_AREAS: ConsultingFocusArea[] = [
  {
    number: "01",
    label: "Understand the Environment",
    description:
      "Review existing infrastructure, applications, dependencies and operational requirements.",
  },
  {
    number: "02",
    label: "Define the Direction",
    description:
      "Evaluate cloud strategy, architecture considerations and platform suitability against business requirements.",
  },
  {
    number: "03",
    label: "Plan the Transition",
    description:
      "Establish practical adoption or modernization priorities, dependencies and recommended next steps.",
  },
];

export default function ConsultingFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Top Editorial Masthead */}
          <div className="max-w-[780px] space-y-2.5 sm:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Consulting Approach</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                Clarity before cloud investment.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#56616B] leading-[1.58] font-normal max-w-[660px]"
            >
              We help organizations evaluate their current technology position and define an informed direction for cloud adoption and modernization.
            </motion.p>
          </div>

          {/* Three Horizontal Editorial Chapters with Single Architectural Connection */}
          <div className="relative pt-2">
            {/* Restrained Architectural Datum Line spanning across the three chapters on desktop */}
            <motion.div
              initial={{ scaleX: 0.35, opacity: 0.25 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: transitionEase }}
              className="hidden lg:block w-full h-px bg-[#0D1B2A]/[0.14] origin-left mb-7"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10 xl:gap-14 divide-y divide-[#0D1B2A]/[0.10] lg:divide-y-0 border-t border-[#0D1B2A]/[0.12] lg:border-t-0">
              {FOCUS_AREAS.map((area, idx) => (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.52,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.1,
                  }}
                  className="relative py-7 sm:py-8 lg:py-0 space-y-3 sm:space-y-3.5"
                >
                  {/* Vertical Architectural Survey Tick connecting back to top desktop datum */}
                  <span
                    aria-hidden="true"
                    className="hidden lg:block w-px h-4 bg-[#C9A35B] -mt-7 mb-5"
                  />

                  {/* Typographic Chapter Header */}
                  <div className="space-y-1.5">
                    <span className="block font-sans text-[30px] sm:text-[34px] lg:text-[38px] font-normal tracking-[-0.04em] leading-none text-[#8E6C2A]">
                      {area.number}
                    </span>

                    <h3 className="font-sans text-[13px] sm:text-[13.5px] font-semibold uppercase tracking-[0.1em] text-[#111312] pt-1">
                      {area.label}
                    </h3>
                  </div>

                  {/* Authoritative Editorial Chapter Statement */}
                  <p className="font-sans text-[17px] sm:text-[18px] lg:text-[19px] text-[#111312]/90 leading-[1.48] tracking-[-0.012em] font-normal max-w-[380px]">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

