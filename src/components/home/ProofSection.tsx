"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Section: PROOF / EVIDENCE (LOCKED EDITORIAL TEMPLATE)
 * 
 * Strict PDF & Governance Rules:
 * - Only verified client evidence, project outcomes, case studies, or credentials.
 * - Zero fabricated statistics, invented logos, or placeholder awards.
 * - Warm off-white background (#F7F7F3) providing contrast after dark Cloud section.
 * - Clean editorial split layout (not generic cards).
 */

export interface VerifiedProofItem {
  id: string;
  clientOrDomain: string;
  title: string;
  metric: string;
  metricContext: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

interface ProofSectionProps {
  items?: VerifiedProofItem[];
}

export default function ProofSection({ items = [] }: ProofSectionProps) {
  // If no verified items are passed, section does not render unverified content
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section
      id="proof"
      className="relative w-full bg-[#F7F7F3] text-[#0D1B2A] select-none scroll-mt-[58px] lg:scroll-mt-[66px] py-16 sm:py-20 lg:py-24 border-b border-[#0D1B2A]/[0.08] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Proof</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="font-sans font-medium text-[40px] sm:text-[44px] lg:text-[48px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.04] sm:leading-[1.05]"
            >
              Transformation should be backed by evidence.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-[15px] sm:text-[16px] text-[#3B4A5A] max-w-2xl leading-[1.6] font-normal"
          >
            Production architectures, operational integrations, and measurable enterprise outcomes.
          </motion.p>
        </div>

        {/* Editorial Split Case Studies List */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {items.map((item, idx) => {
            const hasLink = Boolean(item.href);
            const Wrapper = hasLink ? Link : "div";
            const wrapperProps = hasLink ? { href: item.href as string } : {};

            return (
              <div
                key={item.id}
                className="pt-10 sm:pt-14 border-t border-[#0D1B2A]/[0.10] first:pt-0 first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                  {/* Left Column: Visual Project Image */}
                  <div className="lg:col-span-7">
                    <motion.div
                      initial={{ opacity: 0, clipPath: "inset(5% 0% 0% 0%)" }}
                      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                      className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[3px] overflow-hidden border border-[#0D1B2A]/[0.08] bg-[#E8EAE6]"
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className={`object-cover ${hasLink ? "group-hover:scale-[1.02] transition-transform duration-500 ease-out" : ""}`}
                      />
                    </motion.div>
                  </div>

                  {/* Right Column: Verified Outcome & Narrative */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
                    <Wrapper
                      {...(wrapperProps as any)}
                      className={hasLink ? "group block focus:outline-none" : "block"}
                    >
                      {/* Domain / Client Tag */}
                      <span className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#556370] block">
                        {item.clientOrDomain}
                      </span>

                      {/* Case Title */}
                      <h3 className={`font-sans font-medium text-[22px] sm:text-[26px] lg:text-[28px] text-[#0D1B2A] tracking-[-0.025em] leading-[1.15] mt-2 ${hasLink ? "group-hover:text-[#1B2A3D] transition-colors duration-200" : ""}`}>
                        {item.title}
                      </h3>

                      {/* Verified Metric Block */}
                      <div className="pt-4 pb-2 border-t border-[#0D1B2A]/[0.08] mt-4">
                        <div className="text-[36px] sm:text-[44px] font-sans font-medium tracking-tight text-[#0D1B2A] leading-none">
                          {item.metric}
                        </div>
                        <div className="text-[12.5px] sm:text-[13px] font-sans text-[#556370] uppercase tracking-[0.08em] mt-1.5 font-medium">
                          {item.metricContext}
                        </div>
                      </div>

                      {/* Short Context Summary */}
                      <p className="text-[14.5px] sm:text-[15px] text-[#3B4A5A] leading-[1.6] pt-2">
                        {item.summary}
                      </p>
                    </Wrapper>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
