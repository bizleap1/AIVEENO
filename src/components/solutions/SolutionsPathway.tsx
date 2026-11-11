"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page: Section 05
 * FROM OPPORTUNITY TO IMPLEMENTATION (#F5F7F6 Primary Light Editorial Surface)
 *
 * Next-Step Navigation Composition:
 * - Intro header above two spacious side-by-side editorial destinations:
 *   01 — AI Transformation Assessment (/ai-transformation-assessment)
 *   02 — Our Framework (/framework)
 * - Clean hairline separators and pure typography; no heavy card borders or duplicate process diagrams.
 * - Hover: Subtle link underline & contrast transition only (zero arrows, zero scale, zero glow).
 * - Muted gold dash (#C9A35B) retained beside section eyebrow per page standard.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface PathwayDestination {
  number: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

const DESTINATIONS: PathwayDestination[] = [
  {
    number: "01",
    title: "AI Transformation Assessment",
    description:
      "Examine workflows, systems and potential opportunities before committing to a solution.",
    linkLabel: "Explore the Assessment",
    href: "/ai-transformation-assessment",
  },
  {
    number: "02",
    title: "Our Framework",
    description:
      "Understand how opportunities are evaluated, solutions designed and implementation approached.",
    linkLabel: "Explore Our Framework",
    href: "/framework",
  },
];

export default function SolutionsPathway() {
  return (
    <section
      id="from-opportunity-to-implementation"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] py-12 sm:py-14 lg:py-16 xl:py-18"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
          {/* ========================================================================= */}
          {/* TOP INTRO MASTHEAD                                                        */}
          {/* ========================================================================= */}
          <div className="max-w-[820px] xl:max-w-[880px] space-y-3 sm:space-y-3.5">
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>From Possibility to Practice</span>
            </motion.div>

            {/* Headline H2 */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="font-sans font-medium text-[34px] sm:text-[40px] lg:text-[46px] xl:text-[50px] text-[#111312] tracking-[-0.03em] leading-[1.08] max-w-[760px]"
              >
                The right solution starts with the right understanding.
              </motion.h2>
            </div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.16 }}
              className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[680px]"
            >
              Not every business challenge requires the same technology. We begin by understanding the opportunity and determining a practical way forward.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* TWO SPACIOUS SIDE-BY-SIDE EDITORIAL NAVIGATION DESTINATIONS               */}
          {/* ========================================================================= */}
          <div className="border-t border-b border-[#0D1B2A]/[0.10] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0D1B2A]/[0.10]">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.12 + idx * 0.08,
                }}
                className={`py-8 sm:py-9 lg:py-10 flex flex-col justify-between space-y-6 sm:space-y-7 ${
                  idx === 0 ? "md:pr-10 lg:pr-14 xl:pr-16" : "md:pl-10 lg:pl-14 xl:pl-16"
                }`}
              >
                <div className="space-y-3 sm:space-y-3.5">
                  <span className="block font-sans text-[12px] font-medium tracking-[0.14em] text-[#C9A35B]">
                    {dest.number}
                  </span>

                  <h3 className="font-sans font-medium text-[24px] sm:text-[26px] lg:text-[28px] xl:text-[32px] text-[#111312] tracking-[-0.025em] leading-[1.2]">
                    {dest.title}
                  </h3>

                  <p className="font-sans text-[15.5px] sm:text-[16px] lg:text-[17px] text-[#56616B] leading-[1.58] font-normal max-w-[500px]">
                    {dest.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={dest.href}
                    className="group inline-flex min-h-[44px] items-center font-sans text-[15px] sm:text-[15.5px] font-medium text-[#111312] hover:text-[#3A434A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A35B]"
                  >
                    <span className="border-b border-[#0D1B2A]/30 pb-[3px] group-hover:border-[#111312] transition-colors duration-200">
                      {dest.linkLabel}
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
