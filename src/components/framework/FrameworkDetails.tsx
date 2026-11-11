"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page: Section 04
 * INSIDE THE FRAMEWORK (#F5F7F6 Clean Light Editorial Surface)
 * 
 * Strict Enterprise Consulting Presentation:
 * - 100% Pure Editorial Typography: All AI-tech styling, glowing nodes,
 *   decorative micro-dashes, circular dots, and graphic symbols completely removed.
 * - Explains four consistent facets for every delivery stage:
 *   1. WHAT HAPPENS
 *   2. WHY IT MATTERS
 *   3. WHAT IS PRODUCED
 *   4. HOW IT LEADS FORWARD
 * - Desktop: Clean left navigation list + right 2x2 clear typography grid.
 * - Mobile: Clean seven-stage vertical accordion with no artificial badges or rotating icons.
 * - Instrument Sans typography throughout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface StageDetail {
  id: string;
  number: string;
  name: string;
  premise: string;
  whatHappens: string;
  whyItMatters: string;
  whatIsProduced: string;
  howItLeadsForward: string;
}

const STAGE_DETAILS: StageDetail[] = [
  {
    id: "discovery",
    number: "01",
    name: "Discovery",
    premise: "Understanding business strategy, operational realities and leadership priorities.",
    whatHappens:
      "We walk through core business workflows with leadership and operational teams to examine current processes, bottlenecks and strategic priorities.",
    whyItMatters:
      "Ensures transformation efforts target meaningful commercial opportunities rather than deploying technology without business focus.",
    whatIsProduced:
      "An initial map of operational workflows, high-friction bottlenecks, and agreed focus areas worth addressing.",
    howItLeadsForward:
      "Establishes verified organizational alignment on where to direct the deeper diagnostic assessment.",
  },
  {
    id: "assessment",
    number: "02",
    name: "Assessment",
    premise: "Evaluating existing workflows, systems, data foundations and practical constraints.",
    whatHappens:
      "We examine operational processes, existing software systems, data readiness, and organizational capabilities across target departments.",
    whyItMatters:
      "Identifies practical constraints, integration realities, and requirements before capital or engineering commitments are made.",
    whatIsProduced:
      "A structured evaluation of workflow readiness, the existing technology landscape, and potential delivery risks.",
    howItLeadsForward:
      "Provides empirical operational evidence required to screen and prioritize transformation initiatives effectively.",
  },
  {
    id: "prioritization",
    number: "03",
    name: "Prioritization",
    premise: "Screening initiatives by business value, operational feasibility and delivery sequence.",
    whatHappens:
      "We evaluate identified opportunities against potential business impact, operational urgency, and implementation complexity.",
    whyItMatters:
      "Distinguishes practical, high-value initiatives from low-leverage ideas, focusing effort where returns are most dependable.",
    whatIsProduced:
      "A prioritized backlog of transformation initiatives with clear rationale and recommended sequence.",
    howItLeadsForward:
      "Defines the prioritized scope, timeline expectations, and immediate objectives for solution design.",
  },
  {
    id: "solution-design",
    number: "04",
    name: "Solution Design",
    premise: "Designing practical solutions, workflows and system integrations before implementation.",
    whatHappens:
      "We design the architecture, workflow touchpoints, data paths, and user interactions required to embed solutions into daily operations.",
    whyItMatters:
      "Prevents costly rework and ensures solutions fit naturally into existing organizational environments and workflows.",
    whatIsProduced:
      "Solution designs, workflow specifications, integration plans, and delivery milestones.",
    howItLeadsForward:
      "Provides the structured blueprint for engineering teams to build, test, and integrate solutions.",
  },
  {
    id: "build",
    number: "05",
    name: "Build",
    premise: "Developing, testing and integrating production-ready solutions into your operating environment.",
    whatHappens:
      "We engineer custom solutions, configure software and workflow automations, and conduct rigorous functional testing inside your environment.",
    whyItMatters:
      "Translates approved designs into reliable, functioning capabilities ready for operational deployment.",
    whatIsProduced:
      "Production-ready software systems, automated test suites, integration connectors, and operational documentation.",
    howItLeadsForward:
      "Prepares verified systems for staged operational rollout and team enablement.",
  },
  {
    id: "adoption",
    number: "06",
    name: "Adoption",
    premise: "Enabling frontline teams and embedding new capabilities into daily business routines.",
    whatHappens:
      "We support team training, establish operating guidelines, and work alongside frontline users during daily workflow transitions.",
    whyItMatters:
      "Technology creates value only when teams actively use it, understand its role, and trust the outcomes.",
    whatIsProduced:
      "Operating guidelines, team enablement sessions, and initial user adoption feedback.",
    howItLeadsForward:
      "Establishes steady daily operational use, providing the real-world baseline for continuous refinement.",
  },
  {
    id: "optimization",
    number: "07",
    name: "Optimization",
    premise: "Measuring ongoing performance, refining solutions and compounding operational advantage.",
    whatHappens:
      "We review operational metrics, gather user feedback, and refine processes and workflows to improve accuracy, efficiency, and speed.",
    whyItMatters:
      "Prevents performance drift and ensures systems continue generating growing value as organizational needs evolve.",
    whatIsProduced:
      "Performance reviews, refinement recommendations, and updated operational benchmarks.",
    howItLeadsForward:
      "Closes the transformation loop by feeding empirical operational insights directly into ongoing discovery and planning.",
  },
];

export default function FrameworkDetails() {
  const [selectedId, setSelectedId] = useState<string>("discovery");
  const [activeMobileId, setActiveMobileId] = useState<string | null>("discovery");

  const selectedStage = STAGE_DETAILS.find((s) => s.id === selectedId) || STAGE_DETAILS[0];

  const toggleMobileStage = (id: string) => {
    setActiveMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="framework-details"
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-9 lg:pb-10"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-6 sm:space-y-7 lg:space-y-8">
          
          {/* ========================================================================= */}
          {/* SECTION HEADER (Pure Editorial Typography - Zero Decorative Visuals)      */}
          {/* ========================================================================= */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-5 border-b border-[#0D1B2A]/[0.08]">
            <div className="max-w-[700px] space-y-2.5 sm:space-y-3">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
              >
                Inside the Framework
              </motion.div>

              {/* Headline H2 */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.08 }}
                className="text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] xl:text-[48px] font-sans font-medium text-[#111312] tracking-[-0.03em] leading-[1.08]"
              >
                What happens at every stage.
              </motion.h2>
            </div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="text-[15px] sm:text-[16px] lg:text-[16.5px] text-[#56616B] font-sans font-normal leading-[1.58] max-w-[480px] lg:pb-1"
            >
              Every stage produces clear outcomes, addresses operational realities, and advances your organization toward compounding capability.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP LAYOUT (>= 1024px): EDITORIAL STAGE EXPLORER                      */}
          {/* Left Navigation (~33%) | Subtle Divider | Right 2x2 Text Grid (~67%)       */}
          {/* ========================================================================= */}
          <div className="hidden lg:flex items-start gap-8 xl:gap-12 pt-2">
            
            {/* ----------------------------------------------------------------------- */}
            {/* LEFT COLUMN (32–35%): CLEAN STAGE SELECTOR LIST                          */}
            {/* Pure typographic active state — zero dots, zero glowing nodes            */}
            {/* ----------------------------------------------------------------------- */}
            <div className="w-[33%] xl:w-[32%] flex flex-col shrink-0 border-t border-[#0D1B2A]/[0.08] divide-y divide-[#0D1B2A]/[0.06]">
              {STAGE_DETAILS.map((stage) => {
                const isSelected = stage.id === selectedId;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setSelectedId(stage.id)}
                    className={`py-2.5 sm:py-3 px-3 flex items-center justify-between text-left transition-colors duration-200 cursor-pointer select-none focus:outline-none rounded-[2px] ${
                      isSelected
                        ? "bg-[#EBEFED] text-[#111312] font-semibold"
                        : "text-[#56616B] hover:text-[#111312] hover:bg-black/[0.02] font-normal"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Number Index */}
                      <span
                        className={`text-[12px] font-sans font-medium transition-colors duration-200 ${
                          isSelected ? "text-[#111312]" : "text-[#7B847F]"
                        }`}
                      >
                        {stage.number}
                      </span>

                      {/* Stage Name */}
                      <span
                        className={`font-sans text-[17px] xl:text-[18px] tracking-[-0.02em] transition-colors duration-200 ${
                          isSelected ? "text-[#111312]" : "text-[#56616B]"
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>

                    {/* Clean Active State Pill (Subtle & Non-Tech) */}
                    <span
                      className={`text-[11px] font-sans uppercase tracking-wider transition-opacity duration-200 ${
                        isSelected ? "text-[#56616B] opacity-100" : "opacity-0"
                      }`}
                    >
                      Active
                    </span>
                  </button>
                );
              })}
            </div>

            {/* VERTICAL DIVIDER */}
            <div
              className="w-px self-stretch bg-[#0D1B2A]/[0.08] min-h-[260px] shrink-0"
              aria-hidden="true"
            />

            {/* ----------------------------------------------------------------------- */}
            {/* RIGHT COLUMN (65–68%): CLEAN 2x2 EDITORIAL STAGE DETAIL                  */}
            {/* Pure typography — zero visual boxes, zero dashes, zero icons             */}
            {/* ----------------------------------------------------------------------- */}
            <div className="flex-1 min-w-0 flex flex-col justify-start space-y-6 xl:space-y-7 pl-2 xl:pl-4">
              
              {/* Stable Animated Region: Immediate state update with subtle 220ms crossfade */}
              <motion.div
                key={selectedStage.id}
                initial={{ opacity: 0.35, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-6 xl:space-y-7"
              >
                {/* Stage Header */}
                <div className="pb-5 border-b border-[#0D1B2A]/[0.08] space-y-2">
                  <div className="text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#7B847F]">
                    Stage {selectedStage.number}
                  </div>
                  
                  {/* Prominent Stage Title: 34–40px */}
                  <h3 className="font-sans font-medium text-[32px] lg:text-[36px] xl:text-[40px] text-[#111312] tracking-[-0.03em] leading-[1.12]">
                    {selectedStage.name}
                  </h3>

                  {/* Short Introduction */}
                  <p className="font-sans text-[16px] xl:text-[17px] text-[#56616B] leading-[1.54] max-w-[680px]">
                    {selectedStage.premise}
                  </p>
                </div>

                {/* 4-Facet Matrix: Clean 2x2 Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8 pt-1">
                  
                  {/* FACET 01: WHAT HAPPENS */}
                  <div className="space-y-2">
                    <h4 className="text-[12px] xl:text-[12.5px] font-sans font-semibold uppercase tracking-[0.12em] text-[#111312]">
                      What Happens
                    </h4>
                    <p className="font-sans text-[15px] xl:text-[16px] text-[#56616B] leading-[1.58] font-normal">
                      {selectedStage.whatHappens}
                    </p>
                  </div>

                  {/* FACET 02: WHY IT MATTERS */}
                  <div className="space-y-2">
                    <h4 className="text-[12px] xl:text-[12.5px] font-sans font-semibold uppercase tracking-[0.12em] text-[#111312]">
                      Why It Matters
                    </h4>
                    <p className="font-sans text-[15px] xl:text-[16px] text-[#56616B] leading-[1.58] font-normal">
                      {selectedStage.whyItMatters}
                    </p>
                  </div>

                  {/* FACET 03: WHAT IS PRODUCED */}
                  <div className="space-y-2">
                    <h4 className="text-[12px] xl:text-[12.5px] font-sans font-semibold uppercase tracking-[0.12em] text-[#111312]">
                      What Is Produced
                    </h4>
                    <p className="font-sans text-[15px] xl:text-[16px] text-[#56616B] leading-[1.58] font-normal">
                      {selectedStage.whatIsProduced}
                    </p>
                  </div>

                  {/* FACET 04: HOW IT LEADS FORWARD */}
                  <div className="space-y-2">
                    <h4 className="text-[12px] xl:text-[12.5px] font-sans font-semibold uppercase tracking-[0.12em] text-[#111312]">
                      How It Leads Forward
                    </h4>
                    <p className="font-sans text-[15px] xl:text-[16px] text-[#56616B] leading-[1.58] font-normal">
                      {selectedStage.howItLeadsForward}
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE LAYOUT (< 1024px): CLEAN SEVEN-STAGE ACCORDION                      */}
          {/* Pure typography — zero rotating icons, zero dashes                         */}
          {/* ========================================================================= */}
          <div className="block lg:hidden border-t border-[#0D1B2A]/[0.08] divide-y divide-[#0D1B2A]/[0.08]">
            {STAGE_DETAILS.map((stage) => {
              const isOpen = activeMobileId === stage.id;

              return (
                <div key={stage.id} className="transition-colors duration-200">
                  {/* Tap Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleMobileStage(stage.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-4 px-1 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[12px] font-sans font-medium text-[#7B847F]">
                        {stage.number}
                      </span>
                      <h3 className="font-sans font-medium text-[22px] sm:text-[24px] text-[#111312] tracking-[-0.02em]">
                        {stage.name}
                      </h3>
                    </div>

                    {/* Text-based toggle state indicator */}
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#56616B] shrink-0">
                      {isOpen ? "Close" : "View"}
                    </span>
                  </button>

                  {/* Accordion Content Tray */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: transitionEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-1 pb-6 pt-1 space-y-4">
                          
                          {/* Short Stage Introduction */}
                          <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.54] pb-1">
                            {stage.premise}
                          </p>

                          {/* 4 Categorized Facets (Pure Typography) */}
                          <div className="space-y-3.5 pt-1">
                            {/* What Happens */}
                            <div className="space-y-1">
                              <h4 className="uppercase text-[11px] font-sans font-semibold text-[#111312] tracking-[0.12em]">
                                What Happens
                              </h4>
                              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58]">
                                {stage.whatHappens}
                              </p>
                            </div>

                            {/* Why It Matters */}
                            <div className="space-y-1">
                              <h4 className="uppercase text-[11px] font-sans font-semibold text-[#111312] tracking-[0.12em]">
                                Why It Matters
                              </h4>
                              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58]">
                                {stage.whyItMatters}
                              </p>
                            </div>

                            {/* What Is Produced */}
                            <div className="space-y-1">
                              <h4 className="uppercase text-[11px] font-sans font-semibold text-[#111312] tracking-[0.12em]">
                                What Is Produced
                              </h4>
                              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58]">
                                {stage.whatIsProduced}
                              </p>
                            </div>

                            {/* How It Leads Forward */}
                            <div className="space-y-1">
                              <h4 className="uppercase text-[11px] font-sans font-semibold text-[#111312] tracking-[0.12em]">
                                How It Leads Forward
                              </h4>
                              <p className="font-sans text-[15px] sm:text-[15.5px] text-[#56616B] leading-[1.58]">
                                {stage.howItLeadsForward}
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

        </div>
      </Container>
    </section>
  );
}
