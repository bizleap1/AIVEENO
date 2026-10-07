"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 06
 * FROM ASSESSMENT TO IMPLEMENTATION (#F5F7F6)
 * 
 * Progressive Rail Design with Accenture Timing:
 * - Replaces boxed cards with a continuous, progressive horizontal rail.
 * - Draws the continuous baseline on view.
 * - Staggers the 7 progressive stages sequentially.
 * - Exact easing: [0.22, 1, 0.36, 1].
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

const stages = [
  {
    step: "01",
    name: "Discovery",
    desc: "Initial dialogue to align on operational friction and strategic priorities.",
  },
  {
    step: "02",
    name: "Assessment",
    desc: "One-week structured diagnostic of workflows, systems, and data readiness.",
  },
  {
    step: "03",
    name: "Prioritization",
    desc: "Screening initiatives by commercial leverage and technical feasibility.",
  },
  {
    step: "04",
    name: "Solution Design",
    desc: "Architecting systems blueprints, data contracts, and security guardrails.",
  },
  {
    step: "05",
    name: "Build & Deploy",
    desc: "Engineering production-grade models, agents, and cloud integrations.",
  },
  {
    step: "06",
    name: "Adoption",
    desc: "Embedding systems into daily operating rhythms with change enablement.",
  },
  {
    step: "07",
    name: "Optimization",
    desc: "Continuous monitoring of throughput, accuracy, and inference costs.",
  },
];

export default function TransformationLifecycleRail() {
  return (
    <section id="assessment" className="relative z-10 w-full scroll-mt-[115px] bg-[#F5F7F6] text-[#0E1C2A] py-16 sm:py-20 lg:py-24 border-b border-[#DADFDB]">
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Commercial Pathway</span>
          </motion.div>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.16 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#0E1C2A] tracking-[-0.03em] leading-[1.08]"
            >
              From assessment to scalable implementation.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.26 }}
            className="text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.6] font-normal"
          >
            A clear, progressive engagement model designed to maintain financial discipline and executive control at every stage.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP: CONNECTED PROGRESSIVE HORIZONTAL RAIL (HIDDEN ON MOBILE)         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative pt-8 pb-4">
          
          {/* Continuous Connected Baseline Hairline (Drawn on scroll) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: transitionEase, delay: 0.2 }}
            className="origin-left absolute top-[37px] left-3 right-3 h-px bg-[#DADFDB]"
            aria-hidden="true"
          />

          {/* 7 Horizontal Progressive Stages */}
          <div className="grid grid-cols-7 gap-4 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.28 + idx * 0.07 }}
                className="group flex flex-col pt-0 pr-3 transition-colors duration-200"
              >
                {/* Node on the rail */}
                <div className="flex items-center mb-5">
                  <div className="w-4 h-4 rounded-full bg-[#EEF1F0] border-2 border-[#0E1C2A] group-hover:border-[#C9A35B] transition-colors duration-200 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E1C2A] group-hover:bg-[#C9A35B] transition-colors duration-200" />
                  </div>
                </div>

                {/* Stage Number & Name */}
                <div className="space-y-1 mb-2">
                  <span className="font-mono text-[11px] font-semibold text-[#C9A35B]">
                    {stage.step}
                  </span>
                  <h3 className="font-sans font-medium text-[15px] xl:text-[16px] text-[#0E1C2A] group-hover:text-[#0E1C2A] tracking-[-0.01em] leading-snug">
                    {stage.name}
                  </h3>
                </div>

                {/* Concise Description */}
                <p className="text-[12px] xl:text-[12.5px] text-[#56616B] leading-[1.5]">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET: VERTICAL PROGRESSIVE LIFECYCLE RAIL (< LG)               */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative pl-6 space-y-8">
          
          {/* Continuous Vertical Rail Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: transitionEase, delay: 0.15 }}
            className="origin-top absolute top-2 bottom-2 left-2 w-px bg-[#DADFDB]"
            aria-hidden="true"
          />

          {stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: transitionEase, delay: 0.2 + idx * 0.05 }}
              className="relative flex flex-col space-y-1.5"
            >
              {/* Vertical Node Indicator */}
              <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#EEF1F0] border-2 border-[#0E1C2A] flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#0E1C2A]" />
              </div>

              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] font-semibold text-[#C9A35B]">
                  {stage.step}
                </span>
                <h3 className="font-sans font-medium text-[16px] text-[#0E1C2A]">
                  {stage.name}
                </h3>
              </div>

              <p className="text-[13px] text-[#56616B] leading-[1.55]">
                {stage.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}
