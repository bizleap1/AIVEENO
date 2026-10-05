"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Aiveeno — Section 04: TRANSFORMATION OPPORTUNITY MAP
 * 
 * Based directly on the client brief:
 * - Eyebrow: "WHERE AI CREATES VALUE"
 * - Headline: "Transformation can start anywhere in the business."
 * - Supporting copy: "We identify where AI can remove friction, improve decisions and create measurable operational value."
 * 
 * Functions:
 * Operations, Sales, Customer Experience, Finance, HR, Marketing, IT, Data.
 * 
 * Visual Architecture:
 * - Dominant interactive opportunity map with "Business" at the center
 * - 8 functional domains arranged around it in a clean enterprise system
 * - Hover / click highlights selected function in restrained Brass (#D4A64A)
 * - Reveals 1–2 concise business outcomes beside it
 * - Zero cards wall, zero tool names, zero AI icons, zero chatbots, zero long descriptions, zero CTA arrows
 * - Strictly Instrument Sans and Aiveeno enterprise palette
 */

interface OpportunityDomain {
  id: string;
  name: string;
  outcomes: string[];
  summary: string;
  x: number;
  y: number;
}

const OPPORTUNITY_DOMAINS: OpportunityDomain[] = [
  {
    id: "operations",
    name: "Operations",
    outcomes: ["Process efficiency", "Workflow automation"],
    summary: "Remove operational friction from everyday handoffs and streamline cross-functional execution.",
    x: 320,
    y: 75,
  },
  {
    id: "sales",
    name: "Sales",
    outcomes: ["Opportunity prioritisation", "Faster follow-up"],
    summary: "Direct commercial effort toward high-value pipeline opportunities with accelerated response cycles.",
    x: 440,
    y: 122,
  },
  {
    id: "cx",
    name: "Customer Experience",
    outcomes: ["Service responsiveness", "Knowledge access"],
    summary: "Resolve customer requests rapidly with verified, unified institutional knowledge.",
    x: 485,
    y: 240,
  },
  {
    id: "marketing",
    name: "Marketing",
    outcomes: ["Audience segmentation", "Performance insights"],
    summary: "Enhance targeting precision and focus campaigns on validated customer engagement signals.",
    x: 440,
    y: 358,
  },
  {
    id: "finance",
    name: "Finance",
    outcomes: ["Reporting acceleration", "Variance analysis"],
    summary: "Surface financial trends early and automate routine multi-entity consolidation workflows.",
    x: 320,
    y: 405,
  },
  {
    id: "data",
    name: "Data",
    outcomes: ["Data accessibility", "Reporting pipelines"],
    summary: "Unify fragmented operational data into clean, query-ready foundations for leadership decisions.",
    x: 200,
    y: 358,
  },
  {
    id: "it",
    name: "IT",
    outcomes: ["Incident triage", "System reliability"],
    summary: "Identify technical bottlenecks sooner to maintain continuous, resilient infrastructure uptime.",
    x: 155,
    y: 240,
  },
  {
    id: "hr",
    name: "HR",
    outcomes: ["Talent onboarding", "Policy navigation"],
    summary: "Streamline employee self-service and accelerate operational onboarding for new talent.",
    x: 200,
    y: 122,
  },
];

export default function OpportunityMapSection() {
  const [activeId, setActiveId] = useState<string>("operations");
  const activeDomain = OPPORTUNITY_DOMAINS.find((d) => d.id === activeId) || OPPORTUNITY_DOMAINS[0];
  const activeIndex = OPPORTUNITY_DOMAINS.findIndex((d) => d.id === activeId);

  return (
    <section
      id="opportunity-map"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none pt-6 sm:pt-8 lg:pt-9 pb-16 sm:pb-20 lg:pb-24 scroll-mt-[76px] overflow-hidden"
    >
      <Container>
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Exact Copy & Rhythm from Brief)                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between">
          <div>
            {/* Eyebrow: WHERE AI CREATES VALUE */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Where AI Creates Value</span>
            </div>

            {/* Headline */}
            <h2 className="mt-5 sm:mt-6 font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.02] lg:leading-[1.04]">
              Transformation can start anywhere in the business.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="mt-4 lg:mt-0 flex flex-col justify-end">
            <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-[#3B4A5A] leading-[1.52] font-normal max-w-[480px]">
              We identify where AI can remove friction, improve decisions and create measurable operational value.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02 — LARGE INTERACTIVE OPPORTUNITY MAP + CONCISE OUTCOME DISPLAY          */}
        {/* ========================================================================= */}
        <div className="mt-9 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[62%_38%] gap-6 lg:gap-8 items-center">
          
          {/* DOMINANT VISUAL ELEMENT: Center "Business" Hub + 8 Functional Nodes */}
          <div className="relative w-full rounded-[4px] border border-[#0D1B2A]/[0.08] bg-[#F5F7F6] p-4 sm:p-6 lg:p-7 flex items-center justify-center overflow-hidden">
            
            {/* Background Structural Guide Grids */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="w-full h-full bg-[radial-gradient(#0D1B2A_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            </div>

            <svg
              viewBox="0 0 640 480"
              className="w-full h-[320px] min-[420px]:h-[380px] sm:h-[420px] lg:h-[460px] xl:h-[480px] select-none overflow-visible"
              aria-label="Interactive Transformation Opportunity Map showing 8 functional business domains connected to Business core"
            >
              {/* Concentric Alignment Guide Rings */}
              <circle cx="320" cy="240" r="95" fill="none" stroke="#0D1B2A" strokeOpacity="0.06" strokeDasharray="3 3" />
              <circle cx="320" cy="240" r="165" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" />
              <circle cx="320" cy="240" r="215" fill="none" stroke="#0D1B2A" strokeOpacity="0.04" strokeDasharray="4 4" />

              {/* Crosshair Coordinate Markers */}
              <line x1="320" y1="25" x2="320" y2="455" stroke="#0D1B2A" strokeOpacity="0.05" strokeDasharray="2 4" />
              <line x1="60" y1="240" x2="580" y2="240" stroke="#0D1B2A" strokeOpacity="0.05" strokeDasharray="2 4" />

              {/* ------------------------------------------------------------- */}
              {/* CONNECTING STRUCTURAL CONDUITS FROM BUSINESS HUB TO 8 NODES    */}
              {/* ------------------------------------------------------------- */}
              {OPPORTUNITY_DOMAINS.map((domain) => {
                const isActive = domain.id === activeId;
                return (
                  <g key={`rail-${domain.id}`}>
                    {/* Base Inactive Rail */}
                    <line
                      x1="320"
                      y1="240"
                      x2={domain.x}
                      y2={domain.y}
                      stroke="#0D1B2A"
                      strokeOpacity={isActive ? 0 : 0.14}
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                      className="transition-opacity duration-300"
                    />

                    {/* Active Highlighted Brass Conduit */}
                    {isActive && (
                      <>
                        <line
                          x1="320"
                          y1="240"
                          x2={domain.x}
                          y2={domain.y}
                          stroke="#D4A64A"
                          strokeOpacity="0.25"
                          strokeWidth="6"
                        />
                        <line
                          x1="320"
                          y1="240"
                          x2={domain.x}
                          y2={domain.y}
                          stroke="#D4A64A"
                          strokeWidth="2"
                        />
                      </>
                    )}
                  </g>
                );
              })}

              {/* ------------------------------------------------------------- */}
              {/* CENTER HUB: BUSINESS CORE                                      */}
              {/* ------------------------------------------------------------- */}
              <g className="cursor-default">
                {/* Outer Restrained Ring */}
                <circle cx="320" cy="240" r="42" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.12" strokeWidth="1" />
                <circle cx="320" cy="240" r="36" fill="#F5F7F6" stroke="#0D1B2A" strokeWidth="1.4" />
                
                {/* Active Brass Pulse Ring */}
                <circle cx="320" cy="240" r="32" fill="none" stroke="#D4A64A" strokeOpacity="0.35" strokeWidth="1" />
                <circle cx="320" cy="240" r="4" fill="#D4A64A" />

                {/* Central Labels in Instrument Sans */}
                <text
                  x="320"
                  y="235"
                  textAnchor="middle"
                  fill="#0D1B2A"
                  fontSize="9.5"
                  fontWeight="600"
                  fontFamily="var(--font-sans), 'Instrument Sans', sans-serif"
                  letterSpacing="0.08em"
                >
                  BUSINESS
                </text>
                <text
                  x="320"
                  y="247"
                  textAnchor="middle"
                  fill="#3B4A5A"
                  fontSize="7.5"
                  fontWeight="500"
                  fontFamily="var(--font-sans), 'Instrument Sans', sans-serif"
                  letterSpacing="0.05em"
                >
                  CORE
                </text>
              </g>

              {/* ------------------------------------------------------------- */}
              {/* 8 FUNCTIONAL DOMAIN NODES                                      */}
              {/* ------------------------------------------------------------- */}
              {OPPORTUNITY_DOMAINS.map((domain) => {
                const isActive = domain.id === activeId;
                const isWide = domain.id === "cx";
                const pillWidth = isWide ? 172 : 124;
                const pillHalfWidth = pillWidth / 2;

                return (
                  <g
                    key={domain.id}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setActiveId(domain.id)}
                    onClick={() => setActiveId(domain.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${domain.name} opportunity domain`}
                  >
                    {/* Node Capsule Background */}
                    <rect
                      x={domain.x - pillHalfWidth}
                      y={domain.y - 17}
                      width={pillWidth}
                      height={34}
                      rx={17}
                      fill={isActive ? "#FFFFFF" : "#F5F7F6"}
                      stroke={isActive ? "#D4A64A" : "#0D1B2A"}
                      strokeOpacity={isActive ? 1 : 0.22}
                      strokeWidth={isActive ? 1.6 : 1}
                      className="transition-all duration-200"
                    />

                    {/* Status Indicator Dot */}
                    <circle
                      cx={domain.x - pillHalfWidth + 14}
                      cy={domain.y}
                      r={isActive ? 3.5 : 2.5}
                      fill={isActive ? "#D4A64A" : "#3B4A5A"}
                      fillOpacity={isActive ? 1 : 0.4}
                      className="transition-all duration-200"
                    />

                    {/* Function Label in Instrument Sans */}
                    <text
                      x={domain.x - pillHalfWidth + 24}
                      y={domain.y + 4}
                      fill="#0D1B2A"
                      fontSize={isWide ? "11.5" : "12"}
                      fontWeight={isActive ? "600" : "500"}
                      fontFamily="var(--font-sans), 'Instrument Sans', sans-serif"
                      letterSpacing="-0.01em"
                      className="transition-all duration-200"
                    >
                      {domain.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ================================================================= */}
          {/* CONCISE OUTCOME READOUT PANEL (No cards wall, no CTA arrow)        */}
          {/* ================================================================= */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-[4px] border border-[#0D1B2A]/[0.08] bg-[#FFFFFF] min-h-[380px] lg:min-h-[460px]">
            
            {/* Header: Domain Counter + Eyebrow */}
            <div>
              <div className="flex items-center justify-between border-b border-[#0D1B2A]/[0.06] pb-4">
                <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.10em] text-[#3B4A5A]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]" />
                  <span>OPPORTUNITY DOMAIN</span>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#3B4A5A]/50">
                  0{activeIndex + 1} / 08
                </span>
              </div>

              {/* Function Title */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-[26px] sm:text-[30px] font-sans font-medium text-[#0D1B2A] tracking-[-0.025em] leading-[1.1]">
                  {activeDomain.name}
                </h3>

                <p className="mt-2.5 text-[14.5px] font-sans text-[#3B4A5A] leading-[1.55]">
                  {activeDomain.summary}
                </p>
              </div>

              {/* 1–2 Concise Business Outcomes */}
              <div className="mt-6 pt-5 border-t border-[#0D1B2A]/[0.06]">
                <div className="text-[11px] font-sans font-medium uppercase tracking-[0.10em] text-[#3B4A5A]/80 mb-3">
                  Key Business Outcomes
                </div>
                
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                  {activeDomain.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-[3px] bg-[#F5F7F6] border border-[#D4A64A]/35 text-[#0D1B2A] text-[13.5px] font-sans font-medium transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A] shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Interactive Function Switcher Pills */}
            <div className="mt-8 pt-5 border-t border-[#0D1B2A]/[0.06]">
              <div className="text-[10.5px] font-sans font-medium uppercase tracking-[0.10em] text-[#3B4A5A]/60 mb-2.5">
                Explore All 8 Enterprise Functions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {OPPORTUNITY_DOMAINS.map((domain) => {
                  const isActive = domain.id === activeId;
                  return (
                    <button
                      key={`btn-${domain.id}`}
                      type="button"
                      onClick={() => setActiveId(domain.id)}
                      onMouseEnter={() => setActiveId(domain.id)}
                      className={`text-[11.5px] px-2.5 py-1 rounded-[2px] font-sans font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0D1B2A] text-[#FFFFFF]"
                          : "bg-[#F5F7F6] text-[#3B4A5A] hover:bg-[#E8EDEB] hover:text-[#0D1B2A]"
                      }`}
                    >
                      {domain.name}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
