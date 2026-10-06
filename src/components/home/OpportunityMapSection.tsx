"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Aiveeno — Section 04: WHERE AI CREATES VALUE
 * 
 * Concept: Transformation can start anywhere in the business.
 * Aesthetic: Executive management consulting, editorial typography, restrained interaction.
 * 
 * Surface Rhythm:
 * - Hero: Warm off-white (#F5F7F6)
 * - The Shift: Cool pale grey (#EEF1F0)
 * - Why Our Approach: Warm off-white (#F5F7F6)
 * - Where AI Creates Value: Cool pale grey (#EEF1F0) [Panel: #F7F7F3]
 */

interface OpportunityDomain {
  id: string;
  name: string;
  outcomes: string[];
  summary: string;
  x: number;
  y: number;
  width: number;
}

const OPPORTUNITY_DOMAINS: OpportunityDomain[] = [
  {
    id: "operations",
    name: "Operations",
    outcomes: ["Process efficiency", "Workflow automation"],
    summary: "Remove operational friction from everyday handoffs and streamline cross-functional execution.",
    x: 380,
    y: 46,
    width: 144,
  },
  {
    id: "sales",
    name: "Sales",
    outcomes: ["Opportunity prioritisation", "Faster follow-up"],
    summary: "Direct commercial effort toward high-value pipeline opportunities with accelerated response cycles.",
    x: 555,
    y: 105,
    width: 128,
  },
  {
    id: "cx",
    name: "Customer Experience",
    outcomes: ["Service responsiveness", "Knowledge access"],
    summary: "Resolve customer requests rapidly with verified, unified institutional knowledge.",
    x: 635,
    y: 210,
    width: 196,
  },
  {
    id: "marketing",
    name: "Marketing",
    outcomes: ["Audience segmentation", "Performance insights"],
    summary: "Enhance targeting precision and focus campaigns on validated customer engagement signals.",
    x: 555,
    y: 315,
    width: 140,
  },
  {
    id: "finance",
    name: "Finance",
    outcomes: ["Reporting acceleration", "Variance analysis"],
    summary: "Surface financial trends early and automate routine multi-entity consolidation workflows.",
    x: 380,
    y: 374,
    width: 132,
  },
  {
    id: "data",
    name: "Data",
    outcomes: ["Data accessibility", "Reporting pipelines"],
    summary: "Unify fragmented operational data into clean, query-ready foundations for leadership decisions.",
    x: 205,
    y: 315,
    width: 120,
  },
  {
    id: "it",
    name: "IT",
    outcomes: ["Incident triage", "System reliability"],
    summary: "Identify technical bottlenecks sooner to maintain continuous, resilient infrastructure uptime.",
    x: 125,
    y: 210,
    width: 114,
  },
  {
    id: "hr",
    name: "HR",
    outcomes: ["Talent onboarding", "Policy navigation"],
    summary: "Streamline employee self-service and accelerate operational onboarding for new talent.",
    x: 205,
    y: 105,
    width: 114,
  },
];

export default function OpportunityMapSection() {
  const [activeId, setActiveId] = useState<string>("operations");
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  const activeDomain = OPPORTUNITY_DOMAINS.find((d) => d.id === activeId) || OPPORTUNITY_DOMAINS[0];
  const activeIndex = OPPORTUNITY_DOMAINS.findIndex((d) => d.id === activeId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunity-map"
      className="relative w-full bg-[#EEF1F0] text-[#0D1B2A] select-none pt-[56px] pb-[64px] sm:pt-16 sm:pb-16 lg:py-6 xl:py-8 lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center border-b border-[#0D1B2A]/[0.10] overflow-hidden scroll-mt-[58px] lg:scroll-mt-[66px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Tightened Spacing & Editorial Eyebrow System)       */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between transition-all duration-650 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <div>
            {/* Eyebrow: — WHERE AI CREATES VALUE */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A] mb-[14px] sm:mb-[16px] lg:mb-[18px]">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Where AI Creates Value</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-medium text-[38px] sm:text-[42px] lg:text-[42px] xl:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.03] lg:leading-[1.04]">
              Transformation can start anywhere in the business.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="mt-5 sm:mt-6 lg:mt-0 flex flex-col justify-end">
            <p className="text-[15px] lg:text-[16px] text-[#56616B] leading-[1.52] font-normal max-w-[480px]">
              We identify where AI can remove friction, improve decisions and create measurable operational value.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02 — DESKTOP VIEW: RADIAL ENTERPRISE MAP + REFINED EDITORIAL PANEL        */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "hidden lg:grid mt-6 sm:mt-7 lg:mt-6 xl:mt-7 grid-cols-[60%_40%] xl:grid-cols-[61%_39%] gap-6 lg:gap-8 items-stretch transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* DOMINANT VISUAL ELEMENT: Center "Business Core" Hub + 8 Functional Nodes */}
          <div className="relative w-full rounded-[4px] border border-[#0D1B2A]/[0.08] bg-[#EEF1F0] p-3 sm:p-4 lg:p-5 flex items-center justify-center overflow-hidden min-h-[380px] lg:h-[420px] xl:h-[450px]">
            
            <svg
              viewBox="0 0 760 420"
              className="w-full h-full max-h-[420px] xl:max-h-[450px] select-none overflow-visible outline-none focus:outline-none"
              aria-label="Enterprise Business Architecture Map showing 8 functional domains linked to the Business Core"
            >
              {/* Concentric Architectural Guide Rings */}
              <ellipse
                cx="380"
                cy="210"
                rx="120"
                ry="85"
                fill="none"
                stroke="#0D1B2A"
                strokeOpacity={hasEntered ? 0.045 : 0}
                strokeDasharray="4 4"
                className="transition-opacity duration-700 delay-100"
              />
              <ellipse
                cx="380"
                cy="210"
                rx="235"
                ry="155"
                fill="none"
                stroke="#0D1B2A"
                strokeOpacity={hasEntered ? 0.055 : 0}
                className="transition-opacity duration-700 delay-150"
              />

              {/* ------------------------------------------------------------- */}
              {/* PRECISE CONNECTOR CONDUITS FROM BUSINESS CORE TO 8 NODES     */}
              {/* ------------------------------------------------------------- */}
              {OPPORTUNITY_DOMAINS.map((domain) => {
                const isActive = domain.id === activeId;
                const isHovered = domain.id === hoveredDomain;

                return (
                  <g key={`rail-${domain.id}`}>
                    <line
                      x1="380"
                      y1="210"
                      x2={domain.x}
                      y2={domain.y}
                      stroke={isActive ? "#C9A35B" : "#0D1B2A"}
                      strokeOpacity={isActive ? 0.95 : isHovered ? 0.22 : 0.08}
                      strokeWidth={isActive ? 1.6 : 1}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      className="transition-all duration-250 ease-out"
                    />
                  </g>
                );
              })}

              {/* ------------------------------------------------------------- */}
              {/* CENTER HUB: BUSINESS CORE (Commanding Architectural Core)      */}
              {/* ------------------------------------------------------------- */}
              <g
                className="cursor-default"
                style={{
                  opacity: hasEntered ? 1 : 0,
                  transition: "opacity 600ms ease-out 180ms",
                }}
              >
                {/* Structural Rings */}
                <circle cx="380" cy="210" r="52" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                <circle cx="380" cy="210" r="44" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeWidth="1" />

                {/* Central Labels in Instrument Sans */}
                <text
                  x="380"
                  y="205"
                  textAnchor="middle"
                  fill="#0D1B2A"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  letterSpacing="0.09em"
                >
                  BUSINESS
                </text>
                <text
                  x="380"
                  y="223"
                  textAnchor="middle"
                  fill="#56616B"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="inherit"
                  letterSpacing="0.07em"
                >
                  CORE
                </text>
              </g>

              {/* ------------------------------------------------------------- */}
              {/* 8 FUNCTIONAL DOMAIN NODES (Commanding, Legible Capsules)      */}
              {/* ------------------------------------------------------------- */}
              {OPPORTUNITY_DOMAINS.map((domain, i) => {
                const isActive = domain.id === activeId;
                const isHovered = domain.id === hoveredDomain;
                const pillHalfWidth = domain.width / 2;

                return (
                  <g
                    key={domain.id}
                    className="domain-node cursor-pointer outline-none focus:outline-none"
                    onMouseEnter={() => setHoveredDomain(domain.id)}
                    onMouseLeave={() => setHoveredDomain(null)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setActiveId(domain.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(domain.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${domain.name} opportunity domain`}
                    aria-pressed={isActive}
                    style={{
                      opacity: hasEntered ? 1 : 0,
                      transition: "opacity 450ms ease-out",
                      transitionDelay: `${160 + i * 40}ms`,
                      outline: "none",
                    }}
                  >
                    {/* Node Capsule: Clean graphite border, muted gold when selected */}
                    <rect
                      x={domain.x - pillHalfWidth}
                      y={domain.y - 18}
                      width={domain.width}
                      height={36}
                      rx={5}
                      fill={isActive ? "#FAFAF8" : isHovered ? "#E7ECE9" : "#EEF1F0"}
                      stroke={isActive ? "#C9A35B" : isHovered ? "#0D1B2A" : "#0D1B2A"}
                      strokeOpacity={isActive ? 1 : isHovered ? 0.38 : 0.14}
                      strokeWidth={isActive ? 1.5 : 1}
                      className="transition-all duration-200"
                    />

                    {/* Clean Centered Function Label: Bold & Dark Ink */}
                    <text
                      x={domain.x}
                      y={domain.y + 5}
                      textAnchor="middle"
                      fill={isActive ? "#0D1B2A" : isHovered ? "#0D1B2A" : "#3E4954"}
                      fontSize={domain.id === "cx" ? "13.5" : "14"}
                      fontWeight={isActive ? "600" : isHovered ? "500" : "500"}
                      fontFamily="inherit"
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
          {/* REFINED EDITORIAL DETAIL PANEL (#F7F7F3, Stable Matching Height)   */}
          {/* ================================================================= */}
          <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8 xl:p-9 rounded-[4px] border border-[#0D1B2A]/[0.08] bg-[#F7F7F3] min-h-[380px] lg:h-[420px] xl:h-[450px]">
            
            {/* Header: Domain Counter + Eyebrow */}
            <div>
              <div className="flex items-center justify-between border-b border-[#0D1B2A]/[0.045] pb-3.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#2A2A28]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B]" />
                  <span>OPPORTUNITY DOMAIN</span>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#56616B]">
                  0{activeIndex + 1} / 08
                </span>
              </div>

              {/* Transition Container: Crossfade 240ms with Opacity + 6px translateY */}
              <div
                key={activeId}
                className="mt-5"
                style={{
                  animation: "domainContentFade 240ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
                }}
              >
                {/* Function Title */}
                <h3 className="text-[26px] sm:text-[28px] lg:text-[28px] xl:text-[30px] font-sans font-medium text-[#0D1B2A] tracking-[-0.025em] leading-[1.12]">
                  {activeDomain.name}
                </h3>

                <p className="mt-3 text-[14.5px] sm:text-[15px] font-sans text-[#56616B] leading-[1.58] max-w-[440px]">
                  {activeDomain.summary}
                </p>

                {/* Flat, Consulting Outcome Rows with Ample Breathing Room */}
                <div className="mt-7 pt-5 border-t border-[#0D1B2A]/[0.045]">
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#2A2A28] mb-3.5">
                    Key Business Outcomes
                  </div>
                  
                  <div className="space-y-2.5">
                    {activeDomain.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 py-1 text-[14px] sm:text-[14.5px] font-sans text-[#0D1B2A]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0" />
                        <span className="font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet, minimal editorial progress footnote */}
            <div className="pt-3 border-t border-[#0D1B2A]/[0.035] flex items-center justify-between text-[11px] font-sans text-[#56616B]/60">
              <span className="uppercase tracking-[0.08em]">ENTERPRISE SCOPE</span>
              <span className="font-mono text-[10.5px]">0{activeIndex + 1} OF 08</span>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 03 — MOBILE VIEW: 2-COLUMN SELECTOR CHIPS + COMPACT CORE + DETAIL PANEL   */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "flex flex-col lg:hidden mt-7 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* Label: Select a function */}
          <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#56616B] mb-2.5">
            Select a function
          </div>

          {/* 8 Domain Selector Chips (Clean 2-Column Wrapping Grid) */}
          <div className="grid grid-cols-2 gap-2">
            {OPPORTUNITY_DOMAINS.map((domain) => {
              const isActive = domain.id === activeId;
              const isCX = domain.id === "cx";
              const isHR = domain.id === "hr";

              return (
                <button
                  key={`mob-chip-${domain.id}`}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setActiveId(domain.id)}
                  className={cn(
                    "px-3.5 py-2.5 rounded-[4px] text-[13px] font-sans text-center transition-all duration-200 cursor-pointer border outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A35B]",
                    isCX ? "col-span-2 sm:col-span-1" : isHR ? "col-span-2 sm:col-span-1" : "col-span-1",
                    isActive
                      ? "bg-[#FAFAF8] border-[#C9A35B] text-[#0D1B2A] font-semibold"
                      : "bg-[#E6EAE8]/60 border-[#0D1B2A]/[0.08] text-[#4A5568]"
                  )}
                >
                  <span className="truncate">{domain.name}</span>
                </button>
              );
            })}
          </div>

          {/* Simplified Business Core -> Selected Function Graphic */}
          <div className="my-4 w-full flex items-center justify-center py-1" aria-hidden="true">
            <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-[4px] bg-[#E8EDEB]/80 border border-[#0D1B2A]/[0.07] text-[11px] font-sans">
              <span className="font-semibold text-[#0D1B2A] tracking-[0.06em] uppercase">BUSINESS CORE</span>
              <span className="h-px w-6 bg-[#C9A35B]" />
              <span className="font-medium text-[#0D1B2A]">{activeDomain.name}</span>
            </div>
          </div>

          {/* Mobile Detail Panel (#F7F7F3, Full Width) */}
          <div className="p-5 sm:p-6 rounded-[4px] border border-[#0D1B2A]/[0.08] bg-[#F7F7F3]">
            {/* Counter */}
            <div className="flex items-center justify-between border-b border-[#0D1B2A]/[0.045] pb-3 mb-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#2A2A28]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B]" />
                <span>OPPORTUNITY DOMAIN</span>
              </div>
              <span className="text-[12px] font-sans font-medium text-[#56616B]">
                0{activeIndex + 1} / 08
              </span>
            </div>

            {/* Transition Container: Crossfade 220–250ms */}
            <div
              key={`mob-content-${activeId}`}
              style={{
                animation: "domainContentFade 240ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            >
              <h3 className="text-[24px] sm:text-[26px] font-sans font-medium text-[#0D1B2A] tracking-[-0.025em] leading-[1.15]">
                {activeDomain.name}
              </h3>

              <p className="mt-2 text-[14.5px] font-sans text-[#56616B] leading-[1.52]">
                {activeDomain.summary}
              </p>

              {/* Flat Key Business Outcomes */}
              <div className="mt-5 pt-4 border-t border-[#0D1B2A]/[0.045]">
                <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#2A2A28] mb-2.5">
                  Key Business Outcomes
                </div>
                
                <div className="space-y-2">
                  {activeDomain.outcomes.map((outcome, idx) => (
                    <div
                      key={`mob-outcome-${idx}`}
                      className="flex items-center gap-2.5 py-1 text-[13.5px] font-sans text-[#0D1B2A]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0" />
                      <span className="font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Global Scoped Animation & Focus Outline Styles */}
      <style jsx global>{`
        /* Radial Domain Node Focus & Outline Normalization */
        .domain-node {
          outline: none !important;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        .domain-node:focus {
          outline: none !important;
        }
        .domain-node:focus:not(:focus-visible) {
          outline: none !important;
        }
        .domain-node:focus-visible {
          outline: 1.5px solid #C9A35B !important;
          outline-offset: 3px !important;
        }

        @keyframes domainContentFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
