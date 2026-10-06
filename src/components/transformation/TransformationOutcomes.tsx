"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 08
 * POTENTIAL OUTCOMES (#F5F7F6)
 * 
 * Editorial Design:
 * - 2-column editorial rows with thin separators (no boxed cards, no check icons).
 * - Framed ethically as potential outcomes (as mandated by the enterprise brief).
 * - 5 safe outcome categories: efficiency, scale, execution speed, information access, experiences.
 * - Exact easing: [0.22, 1, 0.36, 1].
 * - Mobile: Clean single-column layout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

const outcomes = [
  {
    category: "Efficiency",
    title: "Operational Efficiency",
    description:
      "Potential to streamline complex workflows, shorten process cycle times, and eliminate repetitive manual data movement across departmental boundaries.",
  },
  {
    category: "Scale",
    title: "Organizational Scalability",
    description:
      "Ability to handle increasing transaction volume and operational complexity through intelligent automation and systematic exception routing.",
  },
  {
    category: "Execution",
    title: "Accelerated Execution & Decisioning",
    description:
      "Faster synthesis of business context to support operational teams during critical decision points with automated recommendations.",
  },
  {
    category: "Knowledge",
    title: "Governed Information Access",
    description:
      "Unified, policy-controlled discovery across fragmented enterprise documentation, ensuring teams make decisions based on verified corporate standards.",
  },
  {
    category: "Experience",
    title: "Elevated Stakeholder Experiences",
    description:
      "More responsive, context-aware service and execution for enterprise clients, commercial partners, and internal staff.",
  },
];

export default function TransformationOutcomes() {
  return (
    <section className="relative z-10 w-full bg-[#F5F7F6] text-[#0E1C2A] py-16 sm:py-20 lg:py-24 border-b border-[#DADFDB]">
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
            <span>Anticipated Value</span>
          </motion.div>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.16 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#0E1C2A] tracking-[-0.03em] leading-[1.08]"
            >
              Potential operational outcomes.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.26 }}
            className="text-[15.5px] sm:text-[16.5px] text-[#56616B] leading-[1.6] font-normal"
          >
            How structured enterprise transformation creates lasting capability—framed realistically around operational leverage rather than speculative promises.
          </motion.p>
        </div>

        {/* 2-Column Editorial Rows with Thin Separators (No Cards, No Icons) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 divide-y lg:divide-y-0 divide-[#DADFDB]">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.22 + idx * 0.07 }}
              className={`py-8 lg:py-9 border-t border-[#DADFDB] ${
                idx === outcomes.length - 1 ? "lg:col-span-2 lg:max-w-[50%]" : ""
              }`}
            >
              <div className="space-y-2.5">
                <div className="text-[10.5px] font-sans font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                  {outcome.category}
                </div>
                <h3 className="font-sans font-medium text-[19px] sm:text-[21px] text-[#0E1C2A] tracking-[-0.02em] leading-snug">
                  {outcome.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#56616B] leading-[1.6]">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
