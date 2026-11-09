"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 03
 * WHAT WE EXAMINE (#F5F7F6)
 * 
 * Modifia-Inspired Integrated Editorial Scope Matrix:
 * - 3-Column × 4-Row Integrated Matrix (Cells 1 to 12).
 * - Background: #F5F7F6, Font: Instrument Sans.
 * - Cell 01: Eyebrow ("WHAT WE EXAMINE") & Main Headline ("A closer look at how work gets done.").
 * - Cell 02: Integrated Section Intro detailing operations, systems and strategic opportunities.
 * - Cells 03–11: 9 Assessment Scope Areas with bespoke abstract geometric symbols:
 *   1. Workflows
 *   2. Repetitive Work
 *   3. Systems
 *   4. Data Flows
 *   5. Technology Landscape
 *   6. AI Opportunities
 *   7. Automation Opportunities
 *   8. Integration Requirements
 *   9. Potential Business Impact
 * - Desktop Hover: Smooth circular graphite (#111312) reveal expanding from cursor (750–850ms),
 *   unveiling restrained gold micro-lines (#C9A35B) and practical focus points without empty state.
 * - Cell 12: Editorial closing tile ("From assessment to clear priorities.").
 * - Tablet: 2 columns with seamless reflow (6 rows × 2 cols = 12 balanced cells).
 * - Mobile (< 768px): Vertical editorial stack with tap-to-reveal (single item active at a time).
 * - Preserves light transition from Section 02 (#EBEFED) into dark Section 04 (#111312).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ExamineArea {
  id: string;
  number: string;
  title: string;
  focusPoints: [string, string, string];
  symbol: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Bespoke Assessment-Specific Abstract Geometric Symbols (~80px on desktop)
// Thin clean strokes (1.2–1.5px), restrained muted gold accents (#C9A35B)
// Zero generic AI, zero neural nets, zero glowing nodes, zero fake dashboards
// ---------------------------------------------------------------------------

function WorkflowsExamSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Parallel operational tracks */}
      <line x1="12" y1="22" x2="60" y2="22" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.75" />
      <line x1="12" y1="36" x2="60" y2="36" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="3 2" />
      <line x1="12" y1="50" x2="60" y2="50" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.75" />
      {/* Cross-lane handoff pathway */}
      <path d="M 22 22 L 22 36 L 42 36 L 42 50" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.85" />
      {/* Diagnostic caliper frame in muted gold */}
      <rect x="37" y="16" width="10" height="12" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <circle cx="42" cy="22" r="1.8" fill="#C9A35B" />
      {/* Track boundary nodes */}
      <circle cx="12" cy="22" r="2.5" fill="#111312" />
      <circle cx="60" cy="50" r="3" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
    </svg>
  );
}

function RepetitiveWorkSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Outer recursive cycle loop */}
      <path d="M 36 14 A 22 22 0 1 1 16 44" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.75" />
      {/* Inner cadence arc */}
      <path d="M 36 24 A 12 12 0 1 1 24 36" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="2.5 2" />
      {/* Tangent diagnostic audit baseline */}
      <line x1="12" y1="58" x2="60" y2="58" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="26" y1="58" x2="26" y2="52" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="46" y1="58" x2="46" y2="52" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Focal iteration diamond at cycle apex */}
      <polygon points="36,10 40,14 36,18 32,14" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <circle cx="36" cy="14" r="1.5" fill="#C9A35B" />
      <circle cx="16" cy="44" r="2.5" fill="#111312" />
    </svg>
  );
}

function SystemsSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Architectural tier planes */}
      <line x1="16" y1="20" x2="56" y2="20" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.75" />
      <line x1="12" y1="36" x2="60" y2="36" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 2" />
      <line x1="14" y1="52" x2="58" y2="52" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      {/* Platform boundary pillars */}
      <line x1="22" y1="20" x2="22" y2="52" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.55" />
      <line x1="50" y1="20" x2="50" y2="52" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.55" />
      {/* Core system framework frame in muted gold */}
      <rect x="29" y="28" width="14" height="16" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <line x1="29" y1="36" x2="43" y2="36" stroke="#C9A35B" strokeWidth="1.2" />
      <circle cx="36" cy="36" r="1.8" fill="#C9A35B" />
    </svg>
  );
}

function DataFlowsSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Dual curved stream intakes */}
      <path d="M 12 20 C 26 20 28 36 40 36" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.75" />
      <path d="M 12 52 C 26 52 28 36 40 36" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.75" />
      {/* Forward distribution conduit */}
      <line x1="40" y1="36" x2="62" y2="36" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      {/* Diagnostic verification meridian */}
      <line x1="40" y1="16" x2="40" y2="56" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="2 3" />
      {/* Gold validation node at junction */}
      <circle cx="40" cy="36" r="4.5" stroke="#C9A35B" strokeWidth="1.5" fill="#F5F7F6" />
      <circle cx="40" cy="36" r="1.8" fill="#C9A35B" />
      <circle cx="12" cy="20" r="2.5" fill="#111312" />
      <circle cx="12" cy="52" r="2.5" fill="#111312" />
    </svg>
  );
}

function TechLandscapeSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Perimeter boundary datum brackets */}
      <path d="M 14 22 L 14 14 L 22 14" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.7" />
      <path d="M 50 14 L 58 14 L 58 22" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.7" />
      <path d="M 14 50 L 14 58 L 22 58" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.7" />
      <path d="M 50 58 L 58 58 L 58 50" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.7" />
      {/* Central survey grid axes */}
      <line x1="14" y1="36" x2="58" y2="36" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="36" y1="14" x2="36" y2="58" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.3" strokeDasharray="3 3" />
      {/* Strategic landscape vector in muted gold */}
      <line x1="22" y1="50" x2="50" y2="22" stroke="#C9A35B" strokeWidth="1.6" />
      <circle cx="50" cy="22" r="3.5" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <circle cx="50" cy="22" r="1.5" fill="#C9A35B" />
      <circle cx="22" cy="50" r="2.5" fill="#111312" />
    </svg>
  );
}

function IntegrationReqsSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Left system interface boundary */}
      <line x1="16" y1="20" x2="16" y2="52" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="16" y1="28" x2="28" y2="28" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="16" y1="44" x2="28" y2="44" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Right system interface boundary */}
      <line x1="56" y1="20" x2="56" y2="52" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      <line x1="44" y1="28" x2="56" y2="28" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="44" y1="44" x2="56" y2="44" stroke="#111312" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Interlocking protocol connector in muted gold */}
      <polygon points="36,24 44,36 36,48 28,36" stroke="#C9A35B" strokeWidth="1.5" fill="#F5F7F6" />
      <circle cx="36" cy="36" r="2" fill="#C9A35B" />
      {/* Alignment connector line */}
      <line x1="28" y1="36" x2="44" y2="36" stroke="#C9A35B" strokeWidth="1.2" strokeDasharray="2 1.5" />
    </svg>
  );
}

function AIOpportunitiesSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Evaluation matrix coordinate frame */}
      <polyline points="14,14 14,58 60,58" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      {/* Demarcation guidelines */}
      <line x1="14" y1="36" x2="60" y2="36" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.35" strokeDasharray="3 2" />
      <line x1="37" y1="14" x2="37" y2="58" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.35" strokeDasharray="3 2" />
      {/* High-priority opportunity cluster in upper quadrant */}
      <circle cx="48" cy="25" r="7" stroke="#C9A35B" strokeWidth="1.4" fill="none" strokeDasharray="2.5 2" />
      <polygon points="48,20 52,25 48,30 44,25" stroke="#C9A35B" strokeWidth="1.4" fill="#C9A35B" />
      {/* Secondary assessment benchmarks */}
      <circle cx="26" cy="46" r="2.5" fill="#111312" />
      <circle cx="48" cy="46" r="2.5" fill="#111312" />
    </svg>
  );
}

function AutomationOppsSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Stepped execution pathway */}
      <path d="M 14 20 L 30 20 L 30 36 L 46 36 L 46 52 L 60 52" stroke="#111312" strokeWidth="1.4" strokeOpacity="0.8" />
      {/* Trigger guides */}
      <line x1="30" y1="14" x2="30" y2="20" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.4" strokeDasharray="2 2" />
      <line x1="46" y1="30" x2="46" y2="36" stroke="#111312" strokeWidth="1.1" strokeOpacity="0.4" strokeDasharray="2 2" />
      {/* Progressive step trigger nodes in muted gold */}
      <circle cx="30" cy="20" r="3" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <circle cx="46" cy="36" r="3" stroke="#C9A35B" strokeWidth="1.4" fill="#F5F7F6" />
      <circle cx="60" cy="52" r="3.5" stroke="#C9A35B" strokeWidth="1.5" fill="#C9A35B" />
      <circle cx="14" cy="20" r="2.5" fill="#111312" />
    </svg>
  );
}

function BusinessImpactSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Benchmark datum baseline */}
      <line x1="12" y1="56" x2="60" y2="56" stroke="#111312" strokeWidth="1.3" strokeOpacity="0.5" />
      {/* Value realization trajectory curve */}
      <path d="M 14 50 C 28 50 36 34 52 18" stroke="#111312" strokeWidth="1.5" strokeOpacity="0.8" />
      {/* Measured return delta bracket in muted gold */}
      <path d="M 56 18 L 60 18 L 60 56 L 56 56" stroke="#C9A35B" strokeWidth="1.4" fill="none" />
      <line x1="58" y1="37" x2="62" y2="37" stroke="#C9A35B" strokeWidth="1.4" />
      {/* Apex impact target node */}
      <circle cx="52" cy="18" r="4" stroke="#C9A35B" strokeWidth="1.5" fill="#F5F7F6" />
      <circle cx="52" cy="18" r="1.8" fill="#C9A35B" />
      <circle cx="14" cy="50" r="2.5" fill="#111312" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 9 Assessment Scope Areas Data Definition (Strict Source of Truth)
// Focused on genuine assessment inquiries: operations, systems and potential
// ---------------------------------------------------------------------------

const EXAMINE_AREAS: ExamineArea[] = [
  {
    id: "workflows",
    number: "01",
    title: "Workflows",
    focusPoints: [
      "Operational steps & handoffs",
      "Process bottlenecks & delays",
      "Decision points & dependencies",
    ],
    symbol: <WorkflowsExamSymbol />,
  },
  {
    id: "repetitive-work",
    number: "02",
    title: "Repetitive Work",
    focusPoints: [
      "High-frequency manual tasks",
      "Rule-based execution routines",
      "Administrative effort & overhead",
    ],
    symbol: <RepetitiveWorkSymbol />,
  },
  {
    id: "systems",
    number: "03",
    title: "Systems",
    focusPoints: [
      "Core enterprise platforms & tools",
      "Architectural boundaries & scale",
      "Platform constraints & dependencies",
    ],
    symbol: <SystemsSymbol />,
  },
  {
    id: "data-flows",
    number: "04",
    title: "Data Flows",
    focusPoints: [
      "Information movement across teams",
      "Data quality, structure & availability",
      "Input and output consistency",
    ],
    symbol: <DataFlowsSymbol />,
  },
  {
    id: "technology-landscape",
    number: "05",
    title: "Technology Landscape",
    focusPoints: [
      "Infrastructure & cloud environments",
      "Security & governance posture",
      "Tool stack & platform alignment",
    ],
    symbol: <TechLandscapeSymbol />,
  },
  {
    id: "ai-opportunities",
    number: "06",
    title: "AI Opportunities",
    focusPoints: [
      "High-leverage decision support",
      "Search, synthesis & retrieval",
      "Feasibility & operational fit",
    ],
    symbol: <AIOpportunitiesSymbol />,
  },
  {
    id: "automation-opportunities",
    number: "07",
    title: "Automation Opportunities",
    focusPoints: [
      "Deterministic workflow orchestration",
      "Triggered actions & handoffs",
      "Exception handling & reliability",
    ],
    symbol: <AutomationOppsSymbol />,
  },
  {
    id: "integration-requirements",
    number: "08",
    title: "Integration Requirements",
    focusPoints: [
      "System connectors & APIs",
      "Data synchronization cadence",
      "Protocol & interface alignment",
    ],
    symbol: <IntegrationReqsSymbol />,
  },
  {
    id: "potential-business-impact",
    number: "09",
    title: "Potential Business Impact",
    focusPoints: [
      "Operational capacity recovery",
      "Cycle time & throughput improvements",
      "Scalability without linear overhead",
    ],
    symbol: <BusinessImpactSymbol />,
  },
];

export default function AssessmentExamine() {
  // Mobile tap-to-reveal state (one item active at a time)
  const [activeMobileId, setActiveMobileId] = useState<string | null>("workflows");

  const toggleMobileTile = (id: string) => {
    setActiveMobileId((prev) => (prev === id ? null : id));
  };

  const handleTileMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    e.currentTarget.style.setProperty("--circle-x", `${x}%`);
    e.currentTarget.style.setProperty("--circle-y", `${y}%`);
  };

  return (
    <section
      id="what-we-examine"
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#111312] pt-10 sm:pt-12 lg:pt-14 pb-14 sm:pb-16 lg:pb-20 border-b border-[#D9DDDA]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP & TABLET: INTEGRATED 3-COLUMN × 4-ROW EDITORIAL MATRIX (12 CELLS)   */}
        {/* Standardized ~255–265px Tile Height to Eliminate Empty Space              */}
        {/* Tablet: 2-column reflow (6 rows × 2 cols = 12 cells, zero dangling items) */}
        {/* Desktop: 3-column matrix (4 rows × 3 cols = 12 cells, clean grid borders) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0.92 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#D9DDDA]"
        >
          
          {/* ----------------------------------------------------------------------- */}
          {/* CELL 01: SECTION EYEBROW & MAIN HEADLINE (INTEGRATED INTO MATRIX)        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex flex-col justify-end border-r border-b border-[#D9DDDA] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.65, ease: transitionEase }}
              className="flex flex-col gap-3.5 lg:gap-4"
            >
              {/* Eyebrow with muted gold dash */}
              <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>What We Examine</span>
              </div>

              {/* Headline H2 */}
              <h2
                style={{ fontSize: "clamp(23px, 2.1vw, 29px)", lineHeight: 1.15 }}
                className="font-sans font-medium text-[#111312] tracking-[-0.03em]"
              >
                A closer look at how work gets done.
              </h2>
            </motion.div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CELL 02: SECTION INTRODUCTION (EXPLAINS SCOPE INTEGRATION)              */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex flex-col justify-between border-r border-b border-[#D9DDDA] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6]">
            {/* Editorial Header Marker */}
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7B847F]">
              Assessment Scope // 09 Areas
            </div>

            {/* Supporting Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.55, delay: 0.12, ease: transitionEase }}
              className="font-sans text-[15px] lg:text-[15.5px] text-[#56616B] leading-[1.6] font-normal pt-2"
            >
              The assessment examines business operations, technical systems and opportunities to establish where AI and automation deliver genuine strategic advantage.
            </motion.p>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CELLS 03–11: 9 ASSESSMENT SCOPE AREAS (MODIFIA EXPANDING GRAPHITE REVEAL) */}
          {/* ----------------------------------------------------------------------- */}
          {EXAMINE_AREAS.map((area, index) => (
            <div
              key={area.id}
              tabIndex={0}
              role="region"
              aria-label={area.title}
              onMouseEnter={handleTileMouseEnter}
              className="group modifia-tile relative flex flex-col justify-between border-r border-b border-[#D9DDDA] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6] select-none cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A35B]"
            >
              {/* DEFAULT TILE CONTENT: Prominent Geometric Symbol + Index & Lower Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.45, delay: 0.14 + index * 0.05, ease: transitionEase }}
                className="flex flex-col justify-between h-full w-full"
              >
                <div className="flex items-start justify-between w-full transition-opacity duration-[300ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-focus-visible:opacity-0">
                  {/* Bespoke Abstract Geometric Symbol (~80px on desktop) */}
                  <div className="text-[#111312]">
                    {area.symbol}
                  </div>

                  {/* Subtle Muted Gold Index */}
                  <span className="font-mono text-[12px] font-semibold tracking-wider text-[#C9A35B]">
                    {area.number}
                  </span>
                </div>

                {/* Lower Scope Area Title */}
                <div className="pt-2 transition-opacity duration-[300ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-focus-visible:opacity-0">
                  <h3 className="font-sans font-medium text-[20px] lg:text-[22px] tracking-[-0.025em] leading-snug text-[#111312]">
                    {area.title}
                  </h3>
                </div>
              </motion.div>

              {/* ------------------------------------------------------------------- */}
              {/* MODIFIA-STYLE HOVER REVEAL LAYER: Circular Dark Graphite Expansion  */}
              {/* Fluid 800ms expansion / 700ms exit with cubic-bezier(0.76, 0, 0.24, 1) */}
              {/* ------------------------------------------------------------------- */}
              <div
                aria-hidden="true"
                className="modifia-tile-reveal flex flex-col justify-between p-6 lg:p-7 bg-[#111312]"
              >
                {/* Upper Area: Title & Index */}
                <div>
                  <div className="modifia-tile-content-header flex items-start justify-between pb-3 border-b border-white/[0.12]">
                    <h3 className="font-sans font-medium text-[19px] lg:text-[21px] tracking-[-0.02em] text-[#F5F7F6] leading-tight">
                      {area.title}
                    </h3>
                    <span className="font-mono text-[11px] font-semibold text-[#C9A35B] tracking-wider pt-0.5">
                      {area.number}
                    </span>
                  </div>

                  {/* 3 Business-focused Focus Points with Restrained Gold Micro-lines */}
                  <ul className="mt-3.5 space-y-3">
                    {area.focusPoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`modifia-tile-item-${pIdx} flex items-start gap-2.5 text-[13.5px] lg:text-[14px] text-[#C5CBC7] leading-snug font-sans`}
                      >
                        <span className="w-[17px] h-px bg-[#C9A35B] shrink-0 mt-[9px]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Bottom Accent Marker */}
                <div className="modifia-tile-footer pt-2 flex items-center justify-end">
                  <span className="text-[10px] font-mono text-[#8C9590] uppercase tracking-wider">Aiveeno Assessment</span>
                </div>
              </div>

            </div>
          ))}

          {/* ----------------------------------------------------------------------- */}
          {/* CELL 12: EDITORIAL CLOSING TILE (COMPLETES 4x3 OR 6x2 GRID RECTANGLE)   */}
          {/* Restrained closing statement: "From assessment to clear priorities."    */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.45, delay: 0.14 + 9 * 0.05, ease: transitionEase }}
            className="flex flex-col justify-between border-r border-b border-[#D9DDDA] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#EEF1F0]/40 select-none"
          >
            {/* Top Coordinate Header */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7B847F]">
                Aiveeno Diagnostic
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B]" aria-hidden="true" />
            </div>

            {/* Static Editorial Closing Statement */}
            <div className="my-auto pt-2">
              <p className="font-sans font-medium text-[22px] lg:text-[24px] text-[#111312] tracking-[-0.03em] leading-[1.25]">
                From assessment
                <br />
                <span className="text-[#647069]">to clear priorities.</span>
              </p>
            </div>

            {/* Bottom Brand Caption */}
            <div className="flex items-center justify-end text-[11px] font-mono text-[#7B847F] uppercase tracking-[0.12em]">
              <span>Assessment</span>
            </div>
          </motion.div>

        </motion.div>

        {/* ========================================================================= */}
        {/* MOBILE LAYOUT (< 768px): CLEAN VERTICAL EDITORIAL STACK WITH TAP TO REVEAL */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          
          {/* Mobile Header Intro */}
          <div className="mb-7">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>What We Examine</span>
              </div>
              <h2 className="font-sans font-medium text-[26px] sm:text-[30px] text-[#111312] tracking-[-0.03em] leading-[1.14]">
                A closer look at how work gets done.
              </h2>
            </div>
            <p className="font-sans text-[14.5px] text-[#56616B] leading-[1.55] pt-3">
              The assessment examines business operations, technical systems and opportunities to establish where AI and automation deliver genuine strategic advantage.
            </p>
          </div>

          {/* Mobile Vertical Accordion Stack */}
          <div className="border-t border-[#D9DDDA] divide-y divide-[#D9DDDA]">
            {EXAMINE_AREAS.map((area) => {
              const isOpen = activeMobileId === area.id;

              return (
                <div
                  key={area.id}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-[#111312] text-[#F5F7F6]" : "bg-transparent text-[#111312]"
                  }`}
                >
                  {/* Tap Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleMobileTile(area.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-4 px-3.5 flex items-center justify-between gap-3 cursor-pointer select-none focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Geometric Symbol (~58px on mobile) visible in closed state */}
                      {!isOpen && (
                        <div className="w-[58px] h-[58px] shrink-0 flex items-center justify-center">
                          {area.symbol}
                        </div>
                      )}

                      <div className="min-w-0">
                        <span className="font-mono text-[11px] font-semibold text-[#C9A35B] block">
                          {area.number}
                        </span>
                        <h3
                          className={`font-sans font-medium text-[18px] tracking-[-0.02em] leading-tight ${
                            isOpen ? "text-[#F5F7F6]" : "text-[#111312]"
                          }`}
                        >
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    {/* Micro Indicator */}
                    <span
                      className={`font-mono text-[16px] leading-none transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-45 text-[#C9A35B]" : "rotate-0 text-[#76807B]"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {/* Tap Content: Focus Points with Gold Micro-lines */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4.5 pt-1 border-t border-white/[0.08]">
                          <ul className="space-y-3 mt-2.5">
                            {area.focusPoints.map((point, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2.5 text-[13px] text-[#C5CBC7] leading-snug font-sans"
                              >
                                <span className="w-[16px] h-px bg-[#C9A35B] shrink-0 mt-[8.5px]" aria-hidden="true" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Mobile Closing Editorial Tile */}
            <div className="p-4 bg-[#EEF1F0]/40">
              <p className="font-sans font-medium text-[17px] text-[#111312] tracking-[-0.02em] leading-snug">
                From assessment <span className="text-[#647069]">to clear priorities.</span>
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
