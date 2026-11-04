"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 03
 * WHERE AI CREATES VALUE (#F5F7F6)
 * 
 * Modifia-Inspired Editorial Expertise Matrix (Refined):
 * - 3-Column Cohesive Editorial Grid with Integrated Intro (Cells 1 & 2).
 * - All 9 Business Areas visible at once (Cells 3 to 11).
 * - High-prominence Custom Abstract Geometric SVG Marks (~80px on desktop, ~60px on mobile).
 * - Compact standardized tile height (~255–265px) eliminating excess blank space.
 * - Simple, executive-friendly, business-first opportunity themes (no invented jargon/metrics).
 * - Synchronized Modifia circular reveal without empty black state (themes unveiled in real-time).
 * - Cell 12: Editorial closing tile: "Across functions. Connected by strategy."
 * - Mobile (< 768px): Vertical stack with tap-to-reveal (single item active at a time).
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface AreaItem {
  id: string;
  number: string;
  title: string;
  themes: [string, string, string];
  symbol: React.ReactNode;
}

// ---------------------------------------------------------------------------
// High-Prominence Custom Abstract Geometric Symbols (~80px on desktop)
// Thin clean strokes (1.2–1.5px), restrained gold details (#C9A35B)
// ---------------------------------------------------------------------------

function OperationsSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Parallel workflow tracks */}
      <line x1="10" y1="22" x2="48" y2="22" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.8" />
      <line x1="24" y1="50" x2="62" y2="50" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.8" />
      {/* Conduit transfer line */}
      <path d="M 48 22 L 48 36 L 24 36 L 24 50" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 2" />
      {/* Strategic decision diamond in muted gold */}
      <polygon points="36,29 43,36 36,43 29,36" stroke="#C9A35B" strokeWidth="1.5" fill="none" />
      <circle cx="36" cy="36" r="2" fill="#C9A35B" />
      {/* Workflow nodes */}
      <circle cx="10" cy="22" r="3" stroke="#0D1117" strokeWidth="1.3" fill="#F5F7F6" />
      <circle cx="62" cy="50" r="3.5" stroke="#C9A35B" strokeWidth="1.5" fill="#C9A35B" />
    </svg>
  );
}

function CustomerExperienceSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Concentric radiating dialogue curves */}
      <path d="M 14 58 A 30 30 0 0 1 58 14" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.75" />
      <path d="M 23 58 A 21 21 0 0 1 58 23" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" />
      <path d="M 32 58 A 12 12 0 0 1 58 32" stroke="#C9A35B" strokeWidth="1.4" />
      {/* Baseline axis */}
      <line x1="14" y1="58" x2="58" y2="58" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Focal resolution node */}
      <circle cx="58" cy="58" r="4.5" stroke="#C9A35B" strokeWidth="1.5" fill="#F5F7F6" />
      <circle cx="58" cy="58" r="1.8" fill="#C9A35B" />
      <circle cx="14" cy="58" r="2.5" fill="#0D1117" />
    </svg>
  );
}

function SalesSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Commercial baseline */}
      <line x1="10" y1="60" x2="62" y2="60" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.4" />
      {/* Stepped milestone columns */}
      <line x1="20" y1="60" x2="20" y2="46" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.7" />
      <line x1="35" y1="60" x2="35" y2="34" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.7" />
      <line x1="50" y1="60" x2="50" y2="22" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.7" />
      {/* Ascending pipeline velocity vector */}
      <path d="M 12 52 L 32 38 L 56 14" stroke="#C9A35B" strokeWidth="1.8" />
      <circle cx="56" cy="14" r="3.5" fill="#C9A35B" />
      <circle cx="12" cy="52" r="2.5" stroke="#0D1117" strokeWidth="1.2" fill="#F5F7F6" />
    </svg>
  );
}

function FinanceSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Precision ledger matrix crosshairs */}
      <line x1="10" y1="36" x2="62" y2="36" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="36" y1="10" x2="36" y2="62" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Balanced entity frames */}
      <rect x="18" y="18" width="15" height="15" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.8" fill="none" />
      <rect x="39" y="39" width="15" height="15" stroke="#C9A35B" strokeWidth="1.5" fill="none" />
      {/* Central continuous audit point */}
      <circle cx="36" cy="36" r="4" stroke="#C9A35B" strokeWidth="1.5" fill="#F5F7F6" />
      <circle cx="36" cy="36" r="1.8" fill="#C9A35B" />
    </svg>
  );
}

function HRSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Capability hierarchy framework */}
      <line x1="36" y1="16" x2="16" y2="54" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.6" />
      <line x1="36" y1="16" x2="56" y2="54" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.6" />
      <line x1="16" y1="54" x2="56" y2="54" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Lateral capability connection */}
      <line x1="26" y1="35" x2="46" y2="35" stroke="#C9A35B" strokeWidth="1.3" strokeDasharray="3 2" />
      {/* Strategic leadership apex */}
      <circle cx="36" cy="16" r="4.5" stroke="#C9A35B" strokeWidth="1.5" fill="#C9A35B" />
      {/* Foundation nodes */}
      <circle cx="16" cy="54" r="3" stroke="#0D1117" strokeWidth="1.3" fill="#F5F7F6" />
      <circle cx="56" cy="54" r="3" stroke="#0D1117" strokeWidth="1.3" fill="#F5F7F6" />
    </svg>
  );
}

function MarketingSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Radiating intent aperture arcs */}
      <path d="M 12 36 A 24 24 0 0 1 60 36" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.7" />
      <path d="M 21 36 A 15 15 0 0 1 51 36" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" />
      {/* Directional transmitter vector */}
      <line x1="36" y1="60" x2="36" y2="18" stroke="#C9A35B" strokeWidth="1.6" />
      <polygon points="36,12 31,20 41,20" fill="#C9A35B" />
      <circle cx="36" cy="60" r="3" stroke="#0D1117" strokeWidth="1.3" fill="#F5F7F6" />
    </svg>
  );
}

function ITSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Isometric platform mesh */}
      <polygon points="36,12 58,25 58,47 36,60 14,47 14,25" stroke="#0D1117" strokeWidth="1.3" strokeOpacity="0.75" fill="none" />
      <line x1="36" y1="36" x2="36" y2="60" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="36" y1="36" x2="58" y2="25" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="36" y1="36" x2="14" y2="25" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Central operational core */}
      <circle cx="36" cy="36" r="3.8" stroke="#C9A35B" strokeWidth="1.5" fill="#C9A35B" />
    </svg>
  );
}

function KnowledgeSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Perspective folio planes */}
      <polygon points="18,20 40,14 54,22 32,28" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.6" fill="none" />
      <polygon points="18,32 40,26 54,34 32,40" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.75" fill="none" />
      <polygon points="18,44 40,38 54,46 32,52" stroke="#C9A35B" strokeWidth="1.5" fill="none" />
      {/* Vertical indexing axis */}
      <line x1="18" y1="20" x2="18" y2="44" stroke="#0D1117" strokeWidth="1.4" />
      <circle cx="40" cy="38" r="2.2" fill="#C9A35B" />
    </svg>
  );
}

function DataSymbol() {
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] shrink-0" aria-hidden="true">
      {/* Parallel stream vectors */}
      <line x1="10" y1="24" x2="62" y2="24" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="10" y1="36" x2="62" y2="36" stroke="#C9A35B" strokeWidth="1.6" />
      <line x1="10" y1="48" x2="62" y2="48" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Dual validation gates */}
      <line x1="26" y1="16" x2="26" y2="56" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1="46" y1="16" x2="46" y2="56" stroke="#0D1117" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" />
      {/* Verified core node */}
      <circle cx="46" cy="36" r="4" stroke="#C9A35B" strokeWidth="1.5" fill="#C9A35B" />
      <circle cx="26" cy="36" r="2.5" fill="#0D1117" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Business Areas Data Definition
// Simple, business-first, executive-friendly opportunity themes
// ---------------------------------------------------------------------------

const AREAS: AreaItem[] = [
  {
    id: "operations",
    number: "01",
    title: "Operations",
    themes: [
      "Process coordination",
      "Routine task automation",
      "Operational exceptions",
    ],
    symbol: <OperationsSymbol />,
  },
  {
    id: "customer-experience",
    number: "02",
    title: "Customer Experience",
    themes: [
      "Inquiry resolution",
      "Customer support",
      "Service consistency",
    ],
    symbol: <CustomerExperienceSymbol />,
  },
  {
    id: "sales",
    number: "03",
    title: "Sales",
    themes: [
      "Pipeline prioritization",
      "Proposal preparation",
      "Account insights",
    ],
    symbol: <SalesSymbol />,
  },
  {
    id: "finance",
    number: "04",
    title: "Finance",
    themes: [
      "Reporting cycles",
      "Invoice processing",
      "Budget visibility",
    ],
    symbol: <FinanceSymbol />,
  },
  {
    id: "hr",
    number: "05",
    title: "HR",
    themes: [
      "Onboarding guidance",
      "Policy navigation",
      "Internal inquiries",
    ],
    symbol: <HRSymbol />,
  },
  {
    id: "marketing",
    number: "06",
    title: "Marketing",
    themes: [
      "Campaign analysis",
      "Audience segmentation",
      "Content drafting",
    ],
    symbol: <MarketingSymbol />,
  },
  {
    id: "it",
    number: "07",
    title: "IT",
    themes: [
      "Ticket triage",
      "System monitoring",
      "Routine administration",
    ],
    symbol: <ITSymbol />,
  },
  {
    id: "knowledge",
    number: "08",
    title: "Knowledge",
    themes: [
      "Internal documentation",
      "Search & retrieval",
      "Knowledge sharing",
    ],
    symbol: <KnowledgeSymbol />,
  },
  {
    id: "data",
    number: "09",
    title: "Data",
    themes: [
      "Data quality checks",
      "Reporting pipelines",
      "Metric definitions",
    ],
    symbol: <DataSymbol />,
  },
];

interface TransformationValueDomainsProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function TransformationValueDomains({
  onOpenDiscoveryModal: _onOpenDiscoveryModal,
}: TransformationValueDomainsProps = {}) {
  // Mobile tap-to-reveal state (one item active at a time)
  const [activeMobileId, setActiveMobileId] = useState<string | null>("operations");

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
      id="where-ai-creates-value"
      className="relative z-10 w-full scroll-mt-[90px] bg-[#F5F7F6] text-[#0D1117] pt-10 sm:pt-12 lg:pt-14 pb-14 sm:pb-16 lg:pb-20 border-b border-[#E2E7E4]"
    >
      {/* Anchor for backward compatibility with existing links */}
      <div id="what-we-do" className="sr-only" aria-hidden="true" />

      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP & TABLET: COHESIVE 3-COLUMN EDITORIAL GRID WITH INTEGRATED INTRO   */}
        {/* Standardized ~255–265px Tile Height to Eliminate Empty Space              */}
        {/* 4 Rows × 3 Columns = 12 Balanced Cells with Aligned Dividers              */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="hidden md:grid md:grid-cols-3 border-t border-l border-[#D9DFDC]"
        >
          
          {/* ----------------------------------------------------------------------- */}
          {/* CELL 1: SECTION EYEBROW & MAIN HEADLINE (INTEGRATED INTO GRID)          */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex flex-col justify-end border-r border-b border-[#D9DFDC] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6]">
            {/* Vertically Grouped Header Container (~18px spacing) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, ease: transitionEase }}
              className="flex flex-col gap-4 lg:gap-[18px]"
            >
              {/* Eyebrow with muted gold dash */}
              <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#556059]">
                <span className="w-3 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Where AI Creates Value</span>
              </div>

              {/* Headline */}
              <h2
                style={{ fontSize: "clamp(23px, 2.1vw, 29px)", lineHeight: 1.16 }}
                className="font-sans font-medium text-[#0D1117] tracking-[-0.03em]"
              >
                AI creates value when it changes how work gets done.
              </h2>
            </motion.div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CELL 2: CONCISE SUPPORTING COPY (INTEGRATED INTO GRID)                  */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex flex-col justify-between border-r border-b border-[#D9DFDC] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6]">
            {/* Editorial Header Marker */}
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7B847F]">
              Scope // 09 Business Domains
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: 0.12, ease: transitionEase }}
              className="font-sans text-[15px] lg:text-[15.5px] text-[#505854] leading-[1.6] font-normal pt-3"
            >
              The opportunity is not limited to one function. It spans the workflows, decisions and systems that run the business.
            </motion.p>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CELLS 3–11: 9 BUSINESS AREA TILES (MODIFIA-STYLE EXPANDING HOVER REVEAL) */}
          {/* ----------------------------------------------------------------------- */}
          {AREAS.map((area, index) => (
            <div
              key={area.id}
              tabIndex={0}
              role="region"
              aria-label={area.title}
              onMouseEnter={handleTileMouseEnter}
              className="group modifia-tile relative flex flex-col justify-between border-r border-b border-[#D9DFDC] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#F5F7F6] select-none cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A35B]"
            >
              {/* DEFAULT TILE CONTENT: Prominent Geometric Symbol + Number & Lower Title (Staggered Entrance) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.07, ease: transitionEase }}
                className="flex flex-col justify-between h-full w-full"
              >
                <div className="flex items-start justify-between w-full transition-opacity duration-[300ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-focus-visible:opacity-0">
                  {/* Custom Abstract Geometric Symbol (~80px on desktop) */}
                  <div className="text-[#0D1117]">
                    {area.symbol}
                  </div>

                  {/* Subtle Muted Gold Index */}
                  <span className="font-mono text-[12px] font-semibold tracking-wider text-[#C9A35B]">
                    {area.number}
                  </span>
                </div>

                {/* Lower Area Title */}
                <div className="pt-2 transition-opacity duration-[300ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-focus-visible:opacity-0">
                  <h3 className="font-sans font-medium text-[20px] lg:text-[22px] tracking-[-0.025em] leading-snug text-[#0D1117]">
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

                  {/* 3 Simple, Executive-friendly Opportunity Themes (Staggered by 50ms) */}
                  <ul className="mt-3.5 space-y-3">
                    {area.themes.map((theme, tIdx) => (
                      <li
                        key={tIdx}
                        className={`modifia-tile-item-${tIdx} flex items-start gap-2.5 text-[13.5px] lg:text-[14px] text-[#C5CBC7] leading-snug font-sans`}
                      >
                        <span className="w-[17px] h-px bg-[#C9A35B] shrink-0 mt-[9px]" aria-hidden="true" />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Bottom Accent Marker */}
                <div className="modifia-tile-footer pt-2 flex items-center justify-end">
                  <span className="text-[10px] font-mono text-[#8C9590] uppercase tracking-wider">Aiveeno Advisory</span>
                </div>
              </div>

            </div>
          ))}

          {/* ----------------------------------------------------------------------- */}
          {/* CELL 12: EDITORIAL CLOSING TILE (COMPLETES 4x3 GRID)                    */}
          {/* Elegant static statement: "Across functions. Connected by strategy."    */}
          {/* ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: 0.18 + 9 * 0.07, ease: transitionEase }}
            className="flex flex-col justify-between border-r border-b border-[#D9DFDC] p-6 lg:p-7 min-h-[240px] md:h-[260px] lg:h-[265px] bg-[#EEF1F0]/40 select-none"
          >
            {/* Top Coordinate Header */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7B847F]">
                Aiveeno Perspective
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B]" aria-hidden="true" />
            </div>

            {/* Static Editorial Closing Statement */}
            <div className="my-auto pt-2">
              <p className="font-sans font-medium text-[22px] lg:text-[24px] text-[#0D1117] tracking-[-0.03em] leading-[1.25]">
                Across functions.
                <br />
                <span className="text-[#647069]">Connected by strategy.</span>
              </p>
            </div>

            {/* Bottom Brand Caption */}
            <div className="flex items-center justify-end text-[11px] font-mono text-[#7B847F] uppercase tracking-[0.12em]">
              <span>Advisory</span>
            </div>
          </motion.div>

        </motion.div>

        {/* ========================================================================= */}
        {/* MOBILE LAYOUT (< 768px): CLEAN VERTICAL EDITORIAL STACK WITH TAP TO REVEAL */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          
          {/* Mobile Header Intro */}
          <div className="mb-7">
            <div className="flex flex-col gap-3.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#556059]">
                <span className="w-3 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Where AI Creates Value</span>
              </div>
              <h2 className="font-sans font-medium text-[26px] sm:text-[30px] text-[#0D1117] tracking-[-0.03em] leading-[1.14]">
                AI creates value when it changes how work gets done.
              </h2>
            </div>
            <p className="font-sans text-[14.5px] text-[#505854] leading-[1.55] pt-3">
              The opportunity is not limited to one function. It spans the workflows, decisions and systems that run the business.
            </p>
          </div>

          {/* Mobile Vertical Accordion Stack */}
          <div className="border-t border-[#D9DFDC] divide-y divide-[#D9DFDC]">
            {AREAS.map((area) => {
              const isOpen = activeMobileId === area.id;

              return (
                <div
                  key={area.id}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-[#111312] text-[#F5F7F6]" : "bg-transparent text-[#0D1117]"
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
                      {/* Geometric Symbol (~58px on mobile) only in closed (white) state */}
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
                            isOpen ? "text-[#F5F7F6]" : "text-[#0D1117]"
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

                  {/* Tap Content: 3 Simple Opportunity Themes */}
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
                            {area.themes.map((theme, tIdx) => (
                              <li
                                key={tIdx}
                                className="flex items-start gap-2.5 text-[13px] text-[#C5CBC7] leading-snug font-sans"
                              >
                                <span className="w-[16px] h-px bg-[#C9A35B] shrink-0 mt-[8.5px]" aria-hidden="true" />
                                <span>{theme}</span>
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
              <p className="font-sans font-medium text-[17px] text-[#0D1117] tracking-[-0.02em] leading-snug">
                Across functions. <span className="text-[#647069]">Connected by strategy.</span>
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
