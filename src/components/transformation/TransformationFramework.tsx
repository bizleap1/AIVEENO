"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 06
 * OUR APPROACH / FRAMEWORK (#F5F7F6)
 * 
 * Accenture-Inspired Light Panel Transition:
 * - Light surface (#F5F7F6) slides up over the previous dark section (750ms, ease: [0.22, 1, 0.36, 1]).
 * - Elevation shadow: shadow-[0_-25px_60px_rgba(0,0,0,0.18)] with relative z-30.
 * - Draws the lifecycle line (origin-left scaleX).
 * - Reveals phase labels, principles, and deliverables sequentially.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

const frameworkPhases = [
  {
    phase: "Phase 01",
    title: "Diagnostic & Opportunity Screening",
    principle: "Ground every initiative in business strategy and operational reality.",
    summary:
      "We engage operational leadership, map end-to-end procedures, analyze manual bottlenecks, and evaluate regulatory constraints across key business departments.",
    deliverable: "Operational bottleneck audit and prioritized transformation backlog",
  },
  {
    phase: "Phase 02",
    title: "Systems Architecture & Design",
    principle: "Architect data pipelines, model guardrails, and integrations before writing code.",
    summary:
      "We design complete solution blueprints, specify API contracts into core systems, establish deterministic security guardrails, and select appropriate model strategies.",
    deliverable: "Enterprise architecture blueprint, security specs & data contracts",
  },
  {
    phase: "Phase 03",
    title: "Engineering, Embedding & Scale",
    principle: "Build production-grade software directly inside your operating environment.",
    summary:
      "Our engineering teams build robust data pipelines, configure autonomous agents, integrate enterprise backends, and embed systems into daily employee workflows.",
    deliverable: "Production-ready systems, operational enablement & telemetry",
  },
];

export default function TransformationFramework() {
  return (
    <motion.section
      initial={{ opacity: 0.96, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.75, ease: transitionEase }}
      className="relative z-30 w-full bg-[#F5F7F6] text-[#0E1C2A] py-16 sm:py-20 lg:py-24 border-t border-b border-[#DADFDB] shadow-[0_-25px_60px_rgba(0,0,0,0.18)]"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.12 }}
            className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Consulting Methodology</span>
          </motion.div>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.18 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#0E1C2A] tracking-[-0.03em] leading-[1.08]"
            >
              A disciplined, iterative transformation lifecycle.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.28 }}
            className="text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.6] font-normal"
          >
            We apply a structured consulting methodology to de-risk investment, align stakeholders, and ensure systems deliver measurable operational returns.
          </motion.p>
        </div>

        {/* 3-Phase Editorial Columnar Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {frameworkPhases.map((phase, idx) => (
            <div
              key={phase.phase}
              className="flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Drawn lifecycle baseline header */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: transitionEase, delay: 0.32 + idx * 0.1 }}
                  className="origin-left h-[2px] bg-[#0E1C2A] w-full mb-6"
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: transitionEase, delay: 0.38 + idx * 0.1 }}
                  className="space-y-3.5"
                >
                  <div className="font-mono text-[11.5px] font-semibold text-[#C9A35B] tracking-wider uppercase">
                    {phase.phase}
                  </div>
                  <h3 className="font-sans font-medium text-[21px] sm:text-[22px] text-[#0E1C2A] tracking-[-0.02em] leading-snug">
                    {phase.title}
                  </h3>
                  <div className="text-[12.5px] font-sans font-medium text-[#0E1C2A]/80 italic">
                    "{phase.principle}"
                  </div>
                  <p className="text-[14px] text-[#56616B] leading-[1.6]">
                    {phase.summary}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: transitionEase, delay: 0.48 + idx * 0.1 }}
                className="pt-4 border-t border-[#DADFDB]"
              >
                <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.12em] text-[#0E1C2A] mb-1">
                  Primary Deliverable
                </div>
                <p className="text-[13px] text-[#56616B] leading-snug">
                  {phase.deliverable}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </Container>
    </motion.section>
  );
}
