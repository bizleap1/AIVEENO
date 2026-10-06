"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Aiveeno — Section 05: FRAMEWORK PREVIEW (Heroic Brand Experience)
 * 
 * Aesthetic Strategy:
 * - Moves away from repetitive boxed report diagrams.
 * - Adopts an Accenture/Pentagram brand-level editorial storytelling canvas.
 * - Bold architectural brand typography where the stage names ARE the graphic.
 * - Continuous flowing architectural spline path weaving dynamically through the stages.
 * - Overhead continuation loop demonstrating that transformation is continuous and iterative.
 * - Warm off-white (#F5F7F6) canvas with ample spatial breathing room.
 * - Zero outer card boxes, zero corporate process arrows, zero dashboard UI.
 * 
 * 7 Approved Stages (from Master PDF):
 * Discovery → Assessment → Prioritization → Solution Design → Build → Adoption → Optimization
 */

interface FrameworkStage {
  number: string;
  name: string;
  summary: string;
  focus: string;
}

const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    number: "01",
    name: "Discovery",
    summary: "Operational goals & strategy",
    focus: "Business alignment & value thesis",
  },
  {
    number: "02",
    name: "Assessment",
    summary: "Workflows, systems & data",
    focus: "Technical feasibility & readiness",
  },
  {
    number: "03",
    name: "Prioritization",
    summary: "Value impact vs. feasibility",
    focus: "Commercial ROI screening",
  },
  {
    number: "04",
    name: "Solution Design",
    summary: "Architecture & operating model",
    focus: "System blueprints & governance",
  },
  {
    number: "05",
    name: "Build",
    summary: "Engineering & integrations",
    focus: "Production-grade deployment",
  },
  {
    number: "06",
    name: "Adoption",
    summary: "People & workflow enablement",
    focus: "Organizational absorption",
  },
  {
    number: "07",
    name: "Optimization",
    summary: "Continuous scale & leverage",
    focus: "Telemetry & closed-loop refinement",
  },
];

export default function FrameworkPreviewSection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // When stage is hovered, preview that stage; otherwise default to activeStage
  const currentStageIndex = hoveredStage !== null ? hoveredStage : activeStage;
  const currentStage = FRAMEWORK_STAGES[currentStageIndex];

  return (
    <section
      ref={sectionRef}
      id="framework-preview"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none pt-[56px] pb-[64px] sm:pt-16 sm:pb-16 lg:py-5 xl:py-8 lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center overflow-hidden scroll-mt-[58px] lg:scroll-mt-[66px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Editorial Split Headline)                             */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between transition-all duration-650 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <div>
            {/* Eyebrow: — OUR FRAMEWORK */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A] mb-[12px] sm:mb-[14px] lg:mb-[16px]">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Framework</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-medium text-[36px] sm:text-[40px] lg:text-[40px] xl:text-[44px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.03]">
              A structured path from opportunity to transformation.
            </h2>
          </div>

          {/* Supporting Narrative */}
          <div className="mt-5 sm:mt-6 lg:mt-0 flex flex-col justify-end">
            <p className="text-[14.5px] lg:text-[15.5px] text-[#56616B] leading-[1.52] font-normal max-w-[480px]">
              A disciplined, phased methodology designed to move from business reality to reliable production systems that stick.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02 — DESKTOP: HEROIC FLOWING TRANSFORMATION PATHWAY (Unboxed Canvas)       */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "hidden lg:block mt-6 lg:mt-6 xl:mt-8 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* Spatial Canvas (No outer border box - breathing directly on the surface) */}
          <div className="relative w-full py-2 select-none">
            
            <svg
              viewBox="0 0 1280 340"
              className="w-full h-[260px] lg:h-[270px] xl:h-[300px] overflow-visible outline-none focus:outline-none"
              aria-label="Interactive AI Transformation Architectural Pathway showing 7 methodology stages and continuous iteration loop"
            >
              {/* ------------------------------------------------------------- */}
              {/* FLOWING ARCHITECTURAL PATHWAY (Clean Solid Spline Baseline)    */}
              {/* ------------------------------------------------------------- */}
              <path
                d="M 80 110 
                   C 171 110, 171 230, 263 230 
                   C 354 230, 354 110, 446 110 
                   C 538 110, 538 230, 630 230 
                   C 721 230, 721 110, 813 110 
                   C 904 110, 904 230, 996 230 
                   C 1088 230, 1088 110, 1180 110"
                fill="none"
                stroke="#0D1B2A"
                strokeOpacity="0.14"
                strokeWidth="1.5"
                className="transition-all duration-700 ease-out"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: hasEntered ? 0 : 1400,
                  transition: "stroke-dashoffset 950ms cubic-bezier(0.22, 1, 0.36, 1) 150ms",
                }}
              />

              {/* ------------------------------------------------------------- */}
              {/* OVERHEAD CONTINUOUS ITERATION RETURN ARC                       */}
              {/* ------------------------------------------------------------- */}
              <path
                d="M 1180 110 
                   C 1245 110, 1270 65, 1270 30 
                   C 1270 8, 1220 8, 1140 8 
                   L 140 8 
                   C 60 8, 20 30, 20 65 
                   C 20 95, 45 110, 80 110"
                fill="none"
                stroke="#0D1B2A"
                strokeOpacity="0.10"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="transition-all duration-700"
                style={{
                  opacity: hasEntered ? 0.8 : 0,
                  transition: "opacity 800ms ease-out 700ms",
                }}
              />
              {/* Iterative Loop Tagline in Instrument Sans */}
              <text
                x="640"
                y="0"
                textAnchor="middle"
                fill="#56616B"
                fontSize="10.5"
                fontFamily="inherit"
                fontWeight="500"
                letterSpacing="0.08em"
                style={{
                  opacity: hasEntered ? 0.75 : 0,
                  transition: "opacity 600ms ease-out 800ms",
                }}
              >
                CONTINUOUS ITERATIVE TRANSFORMATION LIFECYCLE
              </text>

              {/* ------------------------------------------------------------- */}
              {/* 7 STAGE STATIONS: HEROIC TYPOGRAPHY AS GRAPHIC                */}
              {/* ------------------------------------------------------------- */}
              {FRAMEWORK_STAGES.map((stage, idx) => {
                const nodeX = 80 + idx * 183.3;
                const isTop = idx % 2 === 0; // 01, 03, 05, 07 are TOP; 02, 04, 06 are BOTTOM
                const nodeY = isTop ? 110 : 230;
                
                const isSelected = activeStage === idx;
                const isHovering = hoveredStage === idx;
                const isHighlighted = isHovering || (hoveredStage === null && isSelected);

                // Vertical positions for typography
                // When on TOP: number and name sit above node (y=50, 75), stem points down to node
                // When on BOTTOM: number and name sit below node (y=265, 290), stem points up to node
                const numY = isTop ? nodeY - 60 : nodeY + 36;
                const nameY = isTop ? nodeY - 32 : nodeY + 62;
                const summaryY = isTop ? nodeY - 12 : nodeY + 84;

                return (
                  <g
                    key={`desktop-stage-${stage.number}`}
                    className="cursor-pointer outline-none focus:outline-none group"
                    onMouseEnter={() => setHoveredStage(idx)}
                    onMouseLeave={() => setHoveredStage(null)}
                    onClick={() => setActiveStage(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Framework Stage ${stage.number}: ${stage.name}`}
                    style={{
                      opacity: hasEntered ? 1 : 0,
                      transition: "opacity 500ms ease-out",
                      transitionDelay: `${200 + idx * 80}ms`,
                    }}
                  >
                    {/* Vertical connecting hairline from text to spline node */}
                    <line
                      x1={nodeX}
                      y1={isTop ? nodeY - 6 : nodeY + 6}
                      x2={nodeX}
                      y2={isTop ? nodeY - 24 : nodeY + 24}
                      stroke={isHighlighted ? "#C9A35B" : "#0D1B2A"}
                      strokeOpacity={isHighlighted ? 0.9 : 0.14}
                      strokeWidth={isHighlighted ? 1.4 : 1}
                      strokeDasharray={isHighlighted ? "none" : "2 2"}
                      className="transition-all duration-200"
                    />

                    {/* Milestone Node on Path: Clean Solid Geometry */}
                    <circle
                      cx={nodeX}
                      cy={nodeY}
                      r={isHighlighted ? 5.5 : 4}
                      fill={isHighlighted ? "#C9A35B" : "#FAFBF9"}
                      stroke={isHighlighted ? "#C9A35B" : "#0D1B2A"}
                      strokeWidth={isHighlighted ? 1.4 : 1.2}
                      strokeOpacity={isHighlighted ? 1 : 0.25}
                      className="transition-all duration-200"
                    />

                    {/* Stage Number (e.g. STAGE 01) */}
                    <text
                      x={nodeX}
                      y={numY}
                      textAnchor="middle"
                      fill={isHighlighted ? "#C9A35B" : "#56616B"}
                      fillOpacity={isHighlighted ? 1 : 0.65}
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="inherit"
                      letterSpacing="0.10em"
                      className="transition-all duration-200"
                    >
                      STAGE {stage.number}
                    </text>

                    {/* HEROIC STAGE NAME (Architectural Scale Typography) */}
                    <text
                      x={nodeX}
                      y={nameY}
                      textAnchor="middle"
                      fill={isHighlighted ? "#0D1B2A" : "#3E4954"}
                      fillOpacity={isHighlighted ? 1 : 0.65}
                      fontSize={stage.name.length > 12 ? "19" : "22"}
                      fontWeight={isHighlighted ? "600" : "500"}
                      fontFamily="inherit"
                      letterSpacing="-0.025em"
                      className="transition-all duration-200"
                    >
                      {stage.name.toUpperCase()}
                    </text>

                    {/* Stage Concise Summary */}
                    <text
                      x={nodeX}
                      y={summaryY}
                      textAnchor="middle"
                      fill={isHighlighted ? "#2A2A28" : "#56616B"}
                      fillOpacity={isHighlighted ? 0.95 : 0.50}
                      fontSize="12.5"
                      fontWeight="400"
                      fontFamily="inherit"
                      className="transition-all duration-200"
                    >
                      {stage.summary}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Desktop Visual Footer: Integrated Lifecycle Label & Bottom-Right Text CTA */}
            <div className="mt-6 flex items-center justify-between border-t border-[#0D1B2A]/[0.08] pt-4 text-[13px] font-sans">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A35B]" />
                <span className="font-semibold text-[#0D1B2A]">
                  Stage {currentStage.number}: {currentStage.name}
                </span>
                <span className="text-[#56616B]/40">—</span>
                <span className="text-[#56616B]">
                  {currentStage.focus}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <span className="hidden xl:inline text-[11.5px] font-sans uppercase tracking-[0.08em] text-[#56616B]/70">
                  PROPRIETARY CONSULTING LIFECYCLE
                </span>

                {/* Integrated Bottom-Right Text CTA */}
                <Link
                  href="/framework"
                  className="group inline-flex items-center text-[13.5px] lg:text-[14px] font-sans font-medium text-[#0D1B2A] transition-colors duration-200 relative py-1"
                  aria-label="Explore Our Full AI Transformation Framework"
                >
                  <span className="relative">
                    Explore Our Framework
                    <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-[#0D1B2A]/25 transition-all duration-200 group-hover:bg-[#0D1B2A]" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 03 — MOBILE: VERTICAL TRANSFORMATION JOURNEY (Large Typography & Line)    */}
        {/* ========================================================================= */}
        <div
          className={cn(
            "block lg:hidden mt-9 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* Continuous Left Spine */}
          <div className="relative pl-7 sm:pl-9 space-y-8 border-l border-[#0D1B2A]/[0.15] ml-2">
            
            {FRAMEWORK_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;

              return (
                <div
                  key={`mob-journey-${stage.number}`}
                  onClick={() => setActiveStage(idx)}
                  className="relative group cursor-pointer transition-all duration-200"
                >
                  {/* Left Node Milestone: Clean Solid Geometric Dot */}
                  <span
                    className={cn(
                      "absolute -left-[32px] sm:-left-[40px] top-1.5 w-2.5 h-2.5 rounded-full transition-all duration-200",
                      isActive ? "bg-[#C9A35B]" : "bg-[#0D1B2A]/25"
                    )}
                  />

                  {/* Stage Typography */}
                  <div>
                    <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.10em] text-[#C9A35B]">
                      STAGE {stage.number}
                    </div>

                    <h3 className="mt-0.5 text-[22px] sm:text-[24px] font-sans font-medium text-[#0D1B2A] tracking-[-0.025em] leading-tight">
                      {stage.name}
                    </h3>

                    <p className="mt-1 text-[15px] sm:text-[16px] font-sans text-[#56616B] leading-[1.5]">
                      {stage.summary}
                    </p>
                    
                    {isActive && (
                      <p className="mt-1 text-[13.5px] font-sans text-[#2A2A28] font-medium leading-[1.4]">
                        Focus: {stage.focus}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Mobile Continuous Iteration Loop Marker */}
            <div className="pt-2 flex items-center gap-2 text-[12.5px] font-sans font-medium text-[#C9A35B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0" />
              <span>Continuous iterative transformation lifecycle</span>
            </div>

            {/* Mobile CTA: Integrated directly after final stage */}
            <div className="pt-3">
              <Link
                href="/framework"
                className="group inline-flex items-center min-h-[44px] text-[15px] font-sans font-medium text-[#0D1B2A] transition-colors duration-200 relative"
                aria-label="Explore Our Full AI Transformation Framework"
              >
                <span className="relative">
                  Explore Our Framework
                  <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-[#0D1B2A]/25 transition-all duration-200 group-hover:bg-[#0D1B2A]" />
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
