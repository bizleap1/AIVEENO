"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — About Aiveeno
 * SECTION 04: OUR EXPERTISE (#111312 Dark Graphite Anchor)
 *
 * Two Substantial Connected Editorial Capability Pillars:
 * 01 — AI BUSINESS TRANSFORMATION -> /ai-business-transformation
 * 02 — CLOUD & TECHNOLOGY -> /cloud-technology
 *
 * - Restraint-led dark typography + subtle muted-gold bridge markers.
 * - Zero service cards, zero full 8-service lists, zero arrows/glow/scale on hover.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ExpertiseArea {
  number: string;
  label: string;
  description: string;
  linkLabel: string;
  href: string;
}

const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    number: "01",
    label: "AI Business Transformation",
    description:
      "Help organizations identify meaningful AI opportunities, rethink workflows and approach solution implementation with a business-first perspective.",
    linkLabel: "Explore AI Transformation",
    href: "/ai-business-transformation",
  },
  {
    number: "02",
    label: "Cloud & Technology",
    description:
      "Support modernization through cloud strategy, infrastructure, security, data, DevOps and software engineering.",
    linkLabel: "Explore Cloud & Technology",
    href: "/cloud-technology",
  },
];

export default function AboutExpertise() {
  return (
    <section
      id="our-expertise"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#111312] text-[#F5F7F6] py-14 sm:py-16 lg:py-22 border-t border-b border-white/[0.08]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Our Expertise</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[640px]"
                >
                  Strategy and technology, working together.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[490px]"
              >
                Our work is organized around two connected areas of enterprise technology transformation.
              </motion.p>
            </div>
          </div>

          {/* Two Connected Editorial Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-white/[0.14] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.12]">
            {EXPERTISE_AREAS.map((area, idx) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.54,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.1,
                }}
                className={`group py-8 sm:py-10 lg:py-12 flex flex-col justify-between space-y-6 ${
                  idx === 0 ? "lg:pr-12 xl:pr-16" : "lg:pl-12 xl:pl-16"
                }`}
              >
                <div className="space-y-4">
                  {/* Connected Architectural Number + Datum Line */}
                  <div className="flex items-center gap-3.5">
                    <span className="font-sans text-[11.5px] font-semibold tracking-[0.14em] text-[#C9A35B] shrink-0">
                      {area.number}
                    </span>
                    <span
                      className="h-px flex-1 bg-white/[0.16] group-hover:bg-[#C9A35B]/65 transition-colors duration-200"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-sans font-medium text-[24px] sm:text-[28px] lg:text-[32px] text-[#F5F7F6] group-hover:text-white tracking-[-0.025em] leading-[1.18] transition-colors duration-200 pt-1">
                    {area.label}
                  </h3>

                  <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#AEB3AF] leading-[1.6] font-normal max-w-[520px]">
                    {area.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={area.href}
                    className="inline-flex min-h-[44px] items-center font-sans text-[15px] font-medium text-[#F5F7F6] group-hover:text-[#C9A35B] underline underline-offset-4 decoration-white/[0.28] group-hover:decoration-[#C9A35B] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                  >
                    {area.linkLabel}
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

