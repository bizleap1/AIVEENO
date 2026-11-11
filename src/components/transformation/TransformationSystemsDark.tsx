"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 04
 * WHAT TRANSFORMATION CAN INCLUDE (#111312 — Dark Graphite)
 * 
 * Executive Editorial Capability Showcase (Concise & Scannable):
 * - Text volume reduced by >50%: no secondary sub-paragraphs or walls of text.
 * - Left column (~35%): 7 compact capability rows.
 * - Right column (~65%):
 *   1. Category label
 *   2. Large, 3-second impactful headline
 *   3. 1-sentence plain English explanation
 *   4. Clean, punchy 2-column comparison: The Challenge vs Transformation Direction (one phrase each)
 * - Fits cleanly within viewport below navbar.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  label: string;
  headline: string;
  description: string;
  challenge: string;
  transformation: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "workflow-automation",
    number: "01",
    title: "Workflow Automation",
    label: "01 — Workflow Automation",
    headline: "Connect fragmented work. Fewer handoffs across teams.",
    description:
      "Coordinate multi-step business processes so everyday work moves forward without manual chasing.",
    challenge: "Manual, fragmented handoffs between teams",
    transformation: "Coordinated execution with continuous sync",
  },
  {
    id: "ai-systems-agents",
    number: "02",
    title: "Intelligent Systems & Automation",
    label: "02 — Intelligent Systems & Automation",
    headline: "AI handles repetitive work. People stay in control.",
    description:
      "Deploy intelligent systems for high-volume tasks, with human review where judgment matters.",
    challenge: "Manual, repetitive operational tasks",
    transformation: "AI-assisted execution with oversight",
  },
  {
    id: "intelligent-knowledge",
    number: "03",
    title: "Institutional Knowledge",
    label: "03 — Institutional Knowledge",
    headline: "Make institutional memory instantly accessible.",
    description:
      "Unify company documentation and operating history into verified, searchable intelligence.",
    challenge: "Critical know-how trapped in files and silos",
    transformation: "Direct, verified answers in seconds",
  },
  {
    id: "integrations",
    number: "04",
    title: "Core Integrations",
    label: "04 — Core Integrations",
    headline: "Unify the core tools your business already relies on.",
    description:
      "Connect customer platforms and back-office tools so data synchronizes without copy-paste.",
    challenge: "Isolated software islands and double entry",
    transformation: "Continuous, synchronized business systems",
  },
  {
    id: "data-pipelines",
    number: "05",
    title: "Data Pipelines",
    label: "05 — Data Pipelines",
    headline: "Clean, dependable data flowing to decisions that matter.",
    description:
      "Automate data ingestion and validation so executive reports reflect trusted, current numbers.",
    challenge: "Conflicting figures and spreadsheet maintenance",
    transformation: "Automated, verified data delivery",
  },
  {
    id: "decision-support",
    number: "06",
    title: "Decision Support",
    label: "06 — Decision Support",
    headline: "Surface relevant evidence before you make critical calls.",
    description:
      "Equip leaders with structured facts, scenario comparisons, and risk visibility before deciding.",
    challenge: "Decisions made with partial context",
    transformation: "Contextual synthesis and scenario visibility",
  },
  {
    id: "custom-software",
    number: "07",
    title: "Purpose-Built Software",
    label: "07 — Purpose-Built Software",
    headline: "Applications engineered around how your business runs.",
    description:
      "Build tailored internal tools and workflows when off-the-shelf software forces compromises.",
    challenge: "Rigid off-the-shelf software constraints",
    transformation: "Tailored tools aligned with your operations",
  },
];

export default function TransformationSystemsDark() {
  // 01 Workflow Automation is active by default
  const [activeId, setActiveId] = useState<string>("workflow-automation");

  const activeCapability =
    CAPABILITIES.find((cap) => cap.id === activeId) || CAPABILITIES[0];

  const handleMobileToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <motion.section
      id="what-transformation-can-include"
      initial={{ opacity: 0.98, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: transitionEase }}
      className="relative z-20 w-full scroll-mt-[80px] bg-[#111312] text-[#F5F7F6] pt-8 sm:pt-10 lg:pt-11 pb-9 sm:pb-11 lg:pb-12 border-t border-b border-white/[0.10] overflow-hidden"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* COMPACT SECTION HEADER (FITS CLEANLY BELOW NAVBAR)                        */}
        {/* ========================================================================= */}
        <div className="max-w-3xl space-y-2 mb-6 sm:mb-7 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#9EA7A1]"
          >
            <span className="w-3 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>What Transformation Can Include</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: transitionEase, delay: 0.18 }}
            className="font-sans font-medium text-[30px] min-[390px]:text-[34px] sm:text-[38px] lg:text-[44px] xl:text-[46px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.12]"
          >
            From Strategy to Execution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.25 }}
            className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#AEB3AF] leading-[1.6] font-normal"
          >
            AI transformation connects workflows, data and technology to practical business needs.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP LAYOUT: CONCISE EDITORIAL SHOWCASE                                */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-14 items-start">
          
          {/* LEFT COLUMN: 7 Capability Navigation Items */}
          <div className="lg:col-span-5 xl:col-span-4 border-t border-white/[0.10]">
            {CAPABILITIES.map((cap) => {
              const isActive = activeId === cap.id;

              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveId(cap.id)}
                  className={`group w-full text-left py-2.5 xl:py-3 border-b border-white/[0.08] transition-colors duration-150 flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A35B] ${
                    isActive ? "text-[#F5F7F6]" : "text-[#7B847F] hover:text-[#D1D7D3]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-baseline gap-3.5 xl:gap-4 min-w-0 pr-3">
                    <span
                      className={`font-sans text-[12.5px] xl:text-[13px] font-medium transition-colors duration-150 ${
                        isActive ? "text-[#C9A35B]" : "text-[#556059] group-hover:text-[#8C9590]"
                      }`}
                    >
                      {cap.number}
                    </span>
                    <span className="font-sans font-medium text-[16.5px] xl:text-[18px] tracking-[-0.015em] leading-snug truncate">
                      {cap.title}
                    </span>
                  </div>

                  {/* Clean Restrained Active Indicator */}
                  <span
                    className={`w-2.5 h-0.5 rounded-full shrink-0 transition-all duration-200 ${
                      isActive
                        ? "bg-[#C9A35B] opacity-100 scale-100"
                        : "bg-transparent opacity-0 scale-50"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Concise Editorial Detail & 1-Line Comparison */}
          <div className="lg:col-span-7 xl:col-span-8 min-h-[300px] xl:min-h-[320px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: transitionEase }}
                className="flex flex-col justify-start h-full"
              >
                {/* 1. Subtle Capability Label */}
                <span className="font-sans text-[11.5px] xl:text-[12px] font-medium uppercase tracking-[0.14em] text-[#C9A35B] block mb-2.5">
                  {activeCapability.label}
                </span>

                {/* 2. Impactful Business Headline (Enlarged to match left column balance) */}
                <h3 className="font-sans font-medium text-[27px] sm:text-[31px] xl:text-[35px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.18] max-w-2xl">
                  {activeCapability.headline}
                </h3>

                {/* 3. Concise 1-Sentence Plain English Explanation */}
                <p className="font-sans text-[15.5px] sm:text-[16px] xl:text-[17px] text-[#C5CBC7] leading-[1.6] font-normal pt-3 pb-6 xl:pb-7 max-w-2xl">
                  {activeCapability.description}
                </p>

                {/* 4. Punchy Two-Column Comparison (Enlarged and aligned with left list) */}
                <div className="border-t border-white/[0.12] pt-5 xl:pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
                    
                    {/* Column A: THE CHALLENGE */}
                    <div className="flex flex-col space-y-1.5">
                      <span className="font-sans text-[11px] xl:text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#8C9590] block">
                        The Challenge
                      </span>
                      <p className="font-sans font-medium text-[17px] xl:text-[19px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                        {activeCapability.challenge}
                      </p>
                    </div>

                    {/* Column B: TRANSFORMATION DIRECTION */}
                    <div className="flex flex-col space-y-1.5">
                      <span className="font-sans text-[11px] xl:text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#C9A35B] block">
                        Transformation Direction
                      </span>
                      <p className="font-sans font-medium text-[17px] xl:text-[19px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                        {activeCapability.transformation}
                      </p>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE LAYOUT (< 1024px): COMPACT EDITORIAL ACCORDION STACK               */}
        {/* ========================================================================= */}
        <div className="block lg:hidden border-t border-white/[0.10] divide-y divide-white/[0.08]">
          {CAPABILITIES.map((cap) => {
            const isOpen = activeId === cap.id;

            return (
              <div key={cap.id} className="transition-colors duration-150">
                {/* Mobile Tap Trigger */}
                <button
                  type="button"
                  onClick={() => handleMobileToggle(cap.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-3.5 px-1.5 flex items-center justify-between gap-3 cursor-pointer select-none focus:outline-none"
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span
                      className={`font-sans text-[11.5px] font-medium transition-colors duration-150 ${
                        isOpen ? "text-[#C9A35B]" : "text-[#556059]"
                      }`}
                    >
                      {cap.number}
                    </span>
                    <h3
                      className={`font-sans font-medium text-[17px] tracking-[-0.015em] leading-tight ${
                        isOpen ? "text-[#F5F7F6]" : "text-[#8C9590]"
                      }`}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  {/* Clean Indicator */}
                  <span
                    className={`font-sans text-[15px] leading-none transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45 text-[#C9A35B]" : "rotate-0 text-[#76807B]"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Mobile Expand Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: transitionEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-1.5 pt-1.5 pb-4 space-y-3">
                        {/* Headline */}
                        <h4 className="font-sans font-medium text-[18px] sm:text-[20px] text-[#F5F7F6] tracking-[-0.02em] leading-snug">
                          {cap.headline}
                        </h4>

                        {/* 3. Description */}
                        <p className="font-sans text-[13.5px] text-[#C5CBC7] leading-[1.5]">
                          {cap.description}
                        </p>

                        {/* 4. Stacked Comparison */}
                        <div className="border-t border-white/[0.08] pt-2.5 space-y-2.5">
                          {/* The Challenge */}
                          <div>
                            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#8C9590] block">
                              The Challenge
                            </span>
                            <p className="font-sans font-medium text-[14px] text-[#F5F7F6] leading-snug">
                              {cap.challenge}
                            </p>
                          </div>

                          {/* Transformation Direction */}
                          <div>
                            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#C9A35B] block">
                              Transformation Direction
                            </span>
                            <p className="font-sans font-medium text-[14px] text-[#F5F7F6] leading-snug">
                              {cap.transformation}
                            </p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </Container>
    </motion.section>
  );
}