"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 05
 * OUR APPROACH (#EBEFED)
 * 
 * Compact Enterprise Editorial Layout (~30% tightened):
 * - Light-surface reveal from dark Section 04.
 * - Split composition: 40% Left Editorial Narrative | 60% Right 3 Numbered Principles.
 * - Zero cards, zero rounded rectangles, zero shadows, zero decorative icons or diagrams.
 * - Compact natural height (~380–420px) on standard desktop displays.
 * - Restrained row hover: subtle separator warmth and number clarity (no scale, no movement).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ApproachPrinciple {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: ApproachPrinciple[] = [
  {
    number: "01",
    title: "Understand the operating model",
    description:
      "Examine workflows, decisions and the systems supporting everyday operations.",
  },
  {
    number: "02",
    title: "Prioritize meaningful opportunities",
    description:
      "Focus on business challenges where change has a practical purpose.",
  },
  {
    number: "03",
    title: "Design for adoption and scale",
    description:
      "Bring people, processes, data and technology together around implementation.",
  },
];

export default function TransformationFramework() {
  return (
    <motion.section
      id="our-approach"
      initial={{ opacity: 0.96, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: transitionEase }}
      className="relative z-20 w-full scroll-mt-[80px] bg-[#EBEFED] text-[#111312] pt-9 sm:pt-10 lg:pt-12 pb-9 sm:pb-10 lg:pb-12 border-t border-[#D6DDD8]"
    >
      {/* Backward-compatible anchor for legacy links */}
      <div id="approach" className="sr-only" aria-hidden="true" />

      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN (40%): SECTION EYEBROW, HEADLINE & SUPPORTING NARRATIVE        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Approach</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: transitionEase, delay: 0.16 }}
              className="font-sans font-medium text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[42px] text-[#111312] tracking-[-0.03em] leading-[1.12] mt-2.5 sm:mt-3 mb-3 sm:mb-3.5"
            >
              Business before technology.
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.24 }}
              className="font-sans text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#56616B] leading-[1.55] font-normal max-w-md"
            >
              Transformation starts with understanding how a business operates, not choosing which AI tool to deploy.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (60%): THREE VERTICALLY ARRANGED EDITORIAL PRINCIPLES        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            {PRINCIPLES.map((principle, index) => (
              <div key={principle.number} className="relative">
                
                {/* Horizontal Divider (1px, #D9DDDA, subtle left-to-right reveal, no hover effect) */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.16 + index * 0.08,
                  }}
                  className="origin-left h-px bg-[#D9DDDA] w-full"
                />

                {/* Numbered Row Content */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: transitionEase,
                    delay: 0.22 + index * 0.08,
                  }}
                  className="py-4 sm:py-4.5 lg:py-5 flex items-start gap-4 sm:gap-6 select-none"
                >
                  {/* Row Number */}
                  <span className="font-sans text-[12.5px] sm:text-[13px] font-medium text-[#C9A35B] pt-0.5 shrink-0 w-6">
                    {principle.number}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-sans font-medium text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[23px] text-[#111312] tracking-[-0.015em] leading-snug">
                      {principle.title}
                    </h3>
                    <p className="font-sans text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#56616B] leading-[1.5] max-w-xl">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}

            {/* Bottom Divider (1px, #D9DDDA, consistent finish) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: transitionEase,
                delay: 0.42,
              }}
              className="origin-left h-px bg-[#D9DDDA] w-full"
            />
          </div>

        </div>
      </Container>
    </motion.section>
  );
}