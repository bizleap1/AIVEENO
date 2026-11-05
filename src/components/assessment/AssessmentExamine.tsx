"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 03
 * WHAT WE EXAMINE (#F5F7F6 Primary Light Editorial Surface)
 * 
 * Refined Editorial Scope Matrix (Accenture-Level Visual Restraint):
 * - Surface: Solid #F5F7F6 (Primary light surface with soft transition from Section 02 #EBEFED).
 * - Layout & Dividers:
 *   - Only 3 main divider lines on desktop (#D9DDDA):
 *     1. One full-width horizontal divider beneath the section header.
 *     2. Two subtle vertical column dividers separating the 3 columns.
 *   - Zero horizontal lines between individual scope items (spaced with generous 18–24px rhythm).
 * - Typography:
 *   - Column Identifiers: Clean Instrument Sans (no typewriter/monospace).
 *   - Column Headings: Prominent & structured (26–28px, Instrument Sans 500).
 *   - Scope Items: 17–18px Instrument Sans with clean whitespace separation.
 * - Mobile: Clean vertical stack with single subtle horizontal dividers between groups.
 * - Zero cards, zero rounded boxes, zero icons, zero hover micro-interactions.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ScopeGroup {
  number: string;
  category: string;
  title: string;
  items: string[];
}

const scopeGroups: ScopeGroup[] = [
  {
    number: "01",
    category: "OPERATIONS",
    title: "Work & Processes",
    items: [
      "Workflows",
      "Repetitive work",
    ],
  },
  {
    number: "02",
    category: "TECHNOLOGY",
    title: "Systems & Data",
    items: [
      "Existing systems",
      "Data flows",
      "Technology landscape",
      "Integration requirements",
    ],
  },
  {
    number: "03",
    category: "OPPORTUNITY",
    title: "Potential & Impact",
    items: [
      "AI opportunities",
      "Automation opportunities",
      "Potential business impact",
    ],
  },
];

export default function AssessmentExamine() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Timings (Subtle Entrance Reveal)
  const surfaceDuration = isMobile ? 0.40 : 0.65;
  const surfaceY = isMobile ? 12 : 20;

  const headerDelay = isMobile ? 0.08 : 0.15;
  const dividerDelay = isMobile ? 0.14 : 0.24;
  const colBaseDelay = isMobile ? 0.18 : 0.28;
  const colStagger = isMobile ? 0.07 : 0.09;
  const itemDuration = isMobile ? 0.35 : 0.48;

  return (
    <motion.section
      id="what-we-examine"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] border-b border-[#D8DEE4] pt-[36px] sm:pt-[42px] lg:pt-[46px] xl:pt-[50px] pb-[36px] sm:pb-[42px] lg:pb-[46px] xl:pb-[50px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-5 sm:space-y-6 lg:space-y-7">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2 + SCOPE OVERVIEW THESIS                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: headerDelay }}
            className="flex flex-col items-start max-w-[820px] space-y-2 sm:space-y-2.5"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>What We Examine</span>
            </div>

            {/* Headline H2: 38–42px Desktop / 30–34px Mobile */}
            <h2
              aria-label="A closer look at how work gets done."
              className="text-[30px] min-[390px]:text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-heading font-medium text-[#111312] tracking-[-0.03em] leading-[1.08] sm:leading-[1.06]"
            >
              A closer look at how work gets done.
            </h2>

            {/* Supporting Description */}
            <p className="text-[15px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#56616B] font-sans font-normal leading-[1.54] max-w-[680px]">
              Exploring operations, technology and opportunities to identify where transformation may create practical business value.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* SINGLE FULL-WIDTH DIVIDER (1px #D9DDDA)                                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: transitionEase, delay: dividerDelay }}
            className="w-full h-px bg-[#D9DDDA] origin-left"
            aria-hidden="true"
          />

          {/* ========================================================================= */}
          {/* 2. THREE-COLUMN EDITORIAL MATRIX (2 VERTICAL DIVIDERS ON DESKTOP)         */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D9DDDA] pt-1 sm:pt-2">
            {scopeGroups.map((group, idx) => {
              const colDelay = colBaseDelay + idx * colStagger;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: itemDuration, ease: transitionEase, delay: colDelay }}
                  className={`flex flex-col ${
                    idx === 0
                      ? "lg:pr-8 xl:pr-12 pt-0 pb-6 sm:pb-7 lg:pb-0"
                      : idx === 1
                      ? "lg:px-8 xl:px-12 py-6 sm:py-7 lg:py-0"
                      : "lg:pl-8 xl:pl-12 pt-6 sm:pt-7 lg:pt-0 pb-0"
                  }`}
                >
                  {/* Column Identifier in Instrument Sans (No monospace) */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] lg:text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-[#56616B] leading-none">
                    <span className="text-[#C9A35B] font-semibold">{group.number}</span>
                    <span className="text-[#8E9791]">/</span>
                    <span>{group.category}</span>
                  </div>

                  {/* Prominent Column Heading: 24–28px Desktop / 22–24px Mobile */}
                  <h3 className="text-[23px] sm:text-[25px] lg:text-[26px] xl:text-[28px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.2] mt-2 sm:mt-2.5 mb-4 sm:mb-5 lg:mb-6">
                    {group.title}
                  </h3>

                  {/* Scope Items with Generous 18–24px Vertical Whitespace (No horizontal lines) */}
                  <div className="flex flex-col space-y-4 sm:space-y-4.5 lg:space-y-5">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="text-[16px] sm:text-[16.5px] lg:text-[17px] xl:text-[17.5px] font-sans font-normal text-[#111312] leading-[1.4] select-none"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </motion.section>
  );
}
