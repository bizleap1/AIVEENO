"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Contact / Book a Discovery Call (/contact)
 * SECTION 03: AREAS WE CAN DISCUSS (#EEF1F0 Alternate Light Surface)
 *
 * Two spacious editorial domains routing to core hubs without repeating
 * dense service catalogs or adding hover icons/arrows/scale.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DiscussionArea {
  number: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

const DISCUSSION_AREAS: DiscussionArea[] = [
  {
    number: "01",
    title: "AI Transformation",
    description:
      "Explore where AI can create meaningful operational value across workflows, customer experience, internal knowledge and intelligent systems.",
    linkLabel: "Explore AI Transformation",
    href: "/ai-business-transformation",
  },
  {
    number: "02",
    title: "Cloud & Technology",
    description:
      "Discuss cloud strategy, migration, managed operations, security, optimization, DevOps, data engineering and software foundations.",
    linkLabel: "Explore Cloud & Technology",
    href: "/cloud-technology",
  },
];

export default function ContactAreas() {
  return (
    <section
      id="areas-of-discussion"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-20 border-b border-[#0D1B2A]/[0.08]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="space-y-9 sm:space-y-12">
          {/* Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Areas We Can Discuss</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[32px] min-[390px]:text-[34px] sm:text-[40px] lg:text-[44px] xl:text-[48px] text-[#111312] tracking-[-0.03em] leading-[1.08]"
              >
                Different challenges. Connected expertise.
              </motion.h2>
            </div>

            <div className="lg:col-span-5">
              <p className="font-sans text-[15px] sm:text-[16px] text-[#56616B] leading-[1.6] max-w-[460px]">
                Initial discussions often span strategy, workflow readiness and the underlying engineering required to execute reliably.
              </p>
            </div>
          </div>

          {/* 2 Spacious Editorial Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-[#0D1B2A]/[0.14] divide-y lg:divide-y-0 lg:divide-x divide-[#0D1B2A]/[0.10]">
            {DISCUSSION_AREAS.map((area, idx) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: transitionEase,
                  delay: 0.08 + idx * 0.08,
                }}
                className={`group py-8 sm:py-10 lg:py-12 flex flex-col justify-between space-y-6 ${
                  idx === 0 ? "lg:pr-12 xl:pr-16" : "lg:pl-12 xl:pl-16"
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3.5">
                    <span className="font-sans text-[11.5px] font-semibold tracking-[0.14em] text-[#8E6C2A] shrink-0">
                      {area.number}
                    </span>
                    <span
                      className="h-px flex-1 bg-[#0D1B2A]/[0.14] group-hover:bg-[#8E6C2A]/60 transition-colors duration-200"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-sans font-medium text-[24px] sm:text-[28px] lg:text-[30px] text-[#111312] tracking-[-0.025em] leading-[1.18] pt-0.5">
                    {area.title}
                  </h3>

                  <p className="font-sans text-[15.5px] sm:text-[16px] text-[#56616B] leading-[1.6] font-normal max-w-[520px]">
                    {area.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={area.href}
                    className="inline-flex min-h-[44px] items-center font-sans text-[15px] font-medium text-[#111312] group-hover:text-[#8E6C2A] underline underline-offset-4 decoration-[#0D1B2A]/[0.28] group-hover:decoration-[#8E6C2A] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
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

