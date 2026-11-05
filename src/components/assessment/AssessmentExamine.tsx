"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 03
 * WHAT WE EXAMINE (#F5F7F6 Primary Light Editorial Surface)
 * 
 * Purpose:
 * Editorial Scope Matrix detailing the 9 assessment scope areas across
 * 3 clear presentation groupings: Operations, Technology, and Opportunity.
 * 
 * Design Principles (Accenture-Inspired Scope Matrix):
 * - Surface: Solid #F5F7F6 (Primary light surface with soft transition from Section 02 #EBEFED).
 * - Layout:
 *   - Editorial Header: Eyebrow + Strong concise H2 + Supporting thesis.
 *   - 3-Column Scope Matrix separated by thin #D4DAD6 vertical dividers.
 *   - Each column features:
 *     - Small muted-gold column identifier (01 / OPERATIONS, 02 / TECHNOLOGY, 03 / OPPORTUNITY).
 *     - Large, dignified column heading (26–30px).
 *     - Architectural scope items with subtle horizontal dividers.
 * - Restraint:
 *   - Zero cards, zero rounded boxes, zero icons, zero accordion states, zero hover pointer cursors.
 *   - All 9 assessment areas immediately visible on initial view.
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

  // Animation Timings (Restrained Sequential Reveal)
  const surfaceDuration = isMobile ? 0.40 : 0.65;
  const surfaceY = isMobile ? 12 : 20;

  const headerDelay = isMobile ? 0.08 : 0.16;
  const colStagger = isMobile ? 0.08 : 0.10;
  const colBaseDelay = isMobile ? 0.18 : 0.28;
  const itemDuration = isMobile ? 0.35 : 0.50;

  return (
    <motion.section
      id="what-we-examine"
      initial={{ opacity: 0.94, y: surfaceY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: surfaceDuration, ease: transitionEase }}
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] border-b border-[#D8DEE4] pt-[56px] sm:pt-[64px] lg:pt-[68px] xl:pt-[72px] pb-[56px] sm:pb-[64px] lg:pb-[68px] xl:pb-[72px]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          
          {/* ========================================================================= */}
          {/* 1. SECTION HEADER: EYEBROW + H2 + SCOPE OVERVIEW THESIS                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: itemDuration, ease: transitionEase, delay: headerDelay }}
            className="flex flex-col items-start max-w-[820px] space-y-3 sm:space-y-3.5"
          >
            {/* Eyebrow with Muted Gold Dash */}
            <div className="inline-flex items-center gap-2.5 text-[12px] sm:text-[12.5px] lg:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B] leading-none">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>What We Examine</span>
            </div>

            {/* Headline H2: 40–46px Desktop / 32–36px Mobile */}
            <h2
              aria-label="A closer look at how work gets done."
              className="text-[32px] min-[390px]:text-[34px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-heading font-medium text-[#111312] tracking-[-0.03em] leading-[1.08] sm:leading-[1.06]"
            >
              A closer look at how work gets done.
            </h2>

            {/* Supporting Description: 17–19px Desktop / 15–16px Mobile */}
            <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[680px] pt-0.5 sm:pt-1">
              Exploring operations, technology and opportunities to identify where transformation may create practical business value.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. THREE-COLUMN EDITORIAL SCOPE MATRIX (DESKTOP DIVIDERS / MOBILE STACK)  */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D4DAD6] border-t border-[#D4DAD6] pt-8 sm:pt-10 lg:pt-12">
            {scopeGroups.map((group, idx) => {
              const colDelay = colBaseDelay + idx * colStagger;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: itemDuration, ease: transitionEase, delay: colDelay }}
                  className={`flex flex-col ${
                    idx === 0
                      ? "lg:pr-8 xl:pr-12 pt-0 pb-8 sm:pb-10 lg:pb-0"
                      : idx === 1
                      ? "lg:px-8 xl:px-12 py-8 sm:py-10 lg:py-0"
                      : "lg:pl-8 xl:pl-12 pt-8 sm:pt-10 lg:pt-0 pb-0"
                  }`}
                >
                  {/* Small Muted-Gold Column Identifier */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-mono font-medium tracking-[0.16em] uppercase text-[#C9A35B] leading-none">
                    <span>{group.number}</span>
                    <span className="text-[#8E9791]">/</span>
                    <span className="text-[#56616B]">{group.category}</span>
                  </div>

                  {/* Column Heading: 26–30px Desktop / 24–26px Mobile */}
                  <h3 className="text-[23px] sm:text-[25px] lg:text-[27px] xl:text-[29px] font-heading font-medium text-[#111312] tracking-[-0.025em] leading-[1.2] mt-3 sm:mt-3.5 mb-5 sm:mb-6">
                    {group.title}
                  </h3>

                  {/* Scope Items List with Subtle Hairline Dividers */}
                  <div className="flex flex-col border-t border-[#D4DAD6]">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="py-3.5 sm:py-4 border-b border-[#D4DAD6]/70 text-[16.5px] sm:text-[17px] lg:text-[17.5px] xl:text-[18px] font-sans font-normal text-[#111312] leading-[1.4] select-none"
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
