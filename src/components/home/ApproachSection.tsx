"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Aiveeno — Section 03: WHY OUR APPROACH (REFINED & LOCKED)
 * 
 * Philosophy: "AI starts with the business."
 * Aesthetic: Executive consulting, editorial typography, purposeful diagrams, restrained elegance.
 * 
 * Surface Rhythm:
 * - Hero: Warm off-white (#F5F7F6)
 * - The Shift: Pale neutral-cool grey (#EEF1F0)
 * - Why Our Approach: Warm off-white (#F5F7F6)
 */

export default function ApproachSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const [headerAnimated, setHeaderAnimated] = useState(false);
  const [card1Animated, setCard1Animated] = useState(false);
  const [card2Animated, setCard2Animated] = useState(false);
  const [card3Animated, setCard3Animated] = useState(false);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderAnimated(true);
      },
      { threshold: 0.1 }
    );
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCard1Animated(true);
      },
      { threshold: 0.15 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCard2Animated(true);
      },
      { threshold: 0.15 }
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCard3Animated(true);
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (card1Ref.current) observer1.observe(card1Ref.current);
    if (card2Ref.current) observer2.observe(card2Ref.current);
    if (card3Ref.current) observer3.observe(card3Ref.current);

    return () => {
      headerObserver.disconnect();
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <section
      id="approach"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none pt-[56px] pb-[64px] sm:pt-16 sm:pb-16 lg:py-6 xl:py-8 lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center border-b border-[#DADBD6] overflow-hidden scroll-mt-[58px] lg:scroll-mt-[66px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Left POV Statement + Right Concise Explanation)      */}
        {/* ========================================================================= */}
        <div
          ref={headerRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between transition-all duration-650 ease-[cubic-bezier(0.22,1,0.36,1)]",
            headerAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          
          {/* Eyebrow + Headline */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A] mb-[14px] sm:mb-[16px] lg:mb-[18px]">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Why Our Approach</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-medium text-[36px] sm:text-[40px] lg:text-[42px] xl:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.03] lg:leading-[1.04]">
              AI starts with the business.
            </h2>
          </div>

          {/* Supporting Copy (24–28px spacing from headline on mobile) */}
          <div className="mt-5 sm:mt-6 lg:mt-0 flex flex-col justify-end">
            <p className="text-[15px] lg:text-[16px] text-[#56616B] leading-[1.52] font-normal max-w-[480px]">
              We find where AI can create real operational value, design the right architectural roadmap, and embed it into everyday execution that scales.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 02 — 3 PURPOSEFUL VISUAL PRINCIPLES (Thin horizontal/vertical #DADBD6)    */}
        {/* ========================================================================= */}
        <div className="mt-6 sm:mt-8 lg:mt-6 xl:mt-7 border-t border-b border-[#DADBD6]">
          <div className="flex flex-col lg:grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#DADBD6] items-stretch">
              
            {/* ============================================================= */}
            {/* PRINCIPLE 01: BUSINESS FIRST                                   */}
            {/* ============================================================= */}
            <div
              ref={card1Ref}
              style={{ transitionDelay: "0ms" }}
              className={cn(
                "group relative flex flex-col justify-between py-7 sm:py-8 px-5 sm:px-6 lg:py-4.5 lg:px-5 xl:py-5 xl:px-6 min-h-0 lg:min-h-[360px] xl:min-h-[390px] bg-[#FBFCFB] overflow-hidden cursor-default transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                card1Animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              
              {/* Text Block */}
              <div>
                <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#56616B]">
                  <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                  <span>01 — PRINCIPLE</span>
                </div>

                <h3 className="mt-2.5 text-[22px] sm:text-[24px] lg:text-[24px] xl:text-[26px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A] group-hover:text-[#000000] leading-[1.18] transition-colors duration-200">
                  Business First
                </h3>

                <p className="mt-1.5 text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] font-sans text-[#56616B] leading-[1.50] max-w-[360px] lg:max-w-none">
                  Start with business priorities, workflows and operational reality.
                </p>
              </div>

              {/* Dominant Diagram: Business Operating Map (Scaled ~10% Larger & Streamlined) */}
              <div className="my-3 lg:my-3 xl:my-4 w-full flex items-center justify-center">
                <div className="w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[290px] xl:max-w-[320px] mx-auto">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-auto aspect-[360/260] select-none overflow-visible"
                    aria-label="Business Operating Map: Understanding business priorities across operations, sales, customer experience and finance before selecting technology"
                  >
                    {/* Concentric Reference Rings */}
                    <circle cx="180" cy="130" r="88" fill="none" stroke="#0D1B2A" strokeOpacity="0.06" strokeDasharray="3 3" />
                    <circle cx="180" cy="130" r="120" fill="none" stroke="#0D1B2A" strokeOpacity="0.03" />
                    
                    {/* Outer Stations & Connectors (Phase 1) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card1Animated ? 1 : 0,
                        transitionDelay: "100ms",
                      }}
                    >
                      {/* Standard Connecting Links */}
                      <line x1="180" y1="130" x2="180" y2="46" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                      <line x1="180" y1="130" x2="268" y2="190" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                      <line x1="180" y1="130" x2="92" y2="190" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                      <line x1="180" y1="130" x2="92" y2="82" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />

                      {/* 01: Operations (Top) */}
                      <circle cx="180" cy="46" r="12" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="180" cy="46" r="2.8" fill="#0D1B2A" fillOpacity="0.75" />
                      <text x="180" y="26" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                        Operations
                      </text>

                      {/* 02: Revenue (Bottom-Right, Clean Streamlined Label) */}
                      <circle cx="268" cy="190" r="12" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="268" cy="190" r="2.8" fill="#0D1B2A" fillOpacity="0.75" />
                      <text x="268" y="218" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                        Revenue
                      </text>

                      {/* 03: Finance (Bottom-Left) */}
                      <circle cx="92" cy="190" r="12" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="92" cy="190" r="2.8" fill="#0D1B2A" fillOpacity="0.75" />
                      <text x="92" y="218" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                        Finance
                      </text>

                      {/* 04: Systems (Top-Left, Clean Streamlined Label) */}
                      <circle cx="92" cy="82" r="12" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="92" cy="82" r="2.8" fill="#0D1B2A" fillOpacity="0.75" />
                      <text x="92" y="62" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                        Systems
                      </text>
                    </g>

                    {/* HIGHLIGHTED BUSINESS OPPORTUNITY: Link & Node in Radiant Gold (Phase 2) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card1Animated ? 1 : 0,
                        transitionDelay: "340ms",
                      }}
                    >
                      <line x1="180" y1="130" x2="268" y2="82" stroke="#D4A64A" strokeWidth="1.6" />
                      <line x1="180" y1="130" x2="268" y2="82" stroke="#D4A64A" strokeOpacity="0.22" strokeWidth="5" />

                      {/* Customer Experience Node */}
                      <circle cx="268" cy="82" r="15" fill="#FBFCFB" stroke="#D4A64A" strokeWidth="1.5" className="group-hover:stroke-[#B88728] transition-colors duration-200" />
                      <circle cx="268" cy="82" r="4" fill="#D4A64A" className="group-hover:fill-[#B88728] transition-colors duration-200" />
                      <text x="268" y="52" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="600">
                        Customer Experience
                      </text>
                      <text x="268" y="65" textAnchor="middle" fill="#D4A64A" fontSize="9" fontFamily="inherit" fontWeight="600" letterSpacing="0.06em">
                        OPPORTUNITY
                      </text>
                    </g>

                    {/* CENTER: Business Priority Hub (Phase 3) */}
                    <g
                      className="transition-all duration-600 ease-out"
                      style={{
                        opacity: card1Animated ? 1 : 0,
                        transform: card1Animated ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "180px 130px",
                        transitionDelay: "540ms",
                      }}
                    >
                      <circle cx="180" cy="130" r="33" fill="#FBFCFB" stroke="#0D1B2A" strokeWidth="1.3" />
                      <text x="180" y="126" textAnchor="middle" fill="#0D1B2A" fontSize="9.5" fontWeight="600" fontFamily="inherit" letterSpacing="0.08em">
                        BUSINESS
                      </text>
                      <text x="180" y="139" textAnchor="middle" fill="#0D1B2A" fontSize="9.5" fontWeight="600" fontFamily="inherit" letterSpacing="0.08em">
                        PRIORITY
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Footer Metadata (Crisp, 1 Step Darker #2A2A28) */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#DADBD6] group-hover:border-[#B5B7B1] pt-3.5 transition-colors duration-200">
                <div className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.09em] text-[#2A2A28]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A64A] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <span>OPERATING REALITY</span>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#2A2A28]/55">
                  01
                </span>
              </div>

            </div>

            {/* ============================================================= */}
            {/* PRINCIPLE 02: VALUE BEFORE TECHNOLOGY                         */}
            {/* ============================================================= */}
            <div
              ref={card2Ref}
              style={{ transitionDelay: "120ms" }}
              className={cn(
                "group relative flex flex-col justify-between py-7 sm:py-8 px-5 sm:px-6 lg:py-4.5 lg:px-5 xl:py-5 xl:px-6 min-h-0 lg:min-h-[360px] xl:min-h-[390px] bg-[#FBFCFB] overflow-hidden cursor-default transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                card2Animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              
              {/* Text Block */}
              <div>
                <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#56616B]">
                  <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                  <span>02 — PRINCIPLE</span>
                </div>

                <h3 className="mt-2.5 text-[22px] sm:text-[24px] lg:text-[24px] xl:text-[26px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A] group-hover:text-[#000000] leading-[1.18] transition-colors duration-200">
                  Value Before Technology
                </h3>

                <p className="mt-1.5 text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] font-sans text-[#56616B] leading-[1.50] max-w-[360px] lg:max-w-none">
                  Prioritise opportunities by business impact and practical feasibility.
                </p>
              </div>

              {/* Dominant Diagram: Opportunity Matrix (Scaled ~10% Larger & High Readability) */}
              <div className="my-3 lg:my-3 xl:my-4 w-full flex items-center justify-center">
                <div className="w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[290px] xl:max-w-[320px] mx-auto">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-auto aspect-[360/260] select-none overflow-visible"
                    aria-label="Opportunity Matrix: Prioritising opportunities by business impact and practical feasibility"
                  >
                    {/* Matrix Outer Framing Box & Dividers (Phase 1) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card2Animated ? 1 : 0,
                        transitionDelay: "100ms",
                      }}
                    >
                      <rect x="44" y="24" width="284" height="192" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeWidth="1" />
                      
                      {/* Top-Right Quadrant: Subtle Restrained Brass Zone */}
                      <rect x="186" y="24" width="142" height="96" fill="#D4A64A" fillOpacity="0.06" />
                      <path d="M 322 24 L 328 24 L 328 30" fill="none" stroke="#D4A64A" strokeWidth="1.2" />

                      {/* Quadrant Divider Grid Lines */}
                      <line x1="186" y1="24" x2="186" y2="216" stroke="#0D1B2A" strokeOpacity="0.14" strokeDasharray="3 3" />
                      <line x1="44" y1="120" x2="328" y2="120" stroke="#0D1B2A" strokeOpacity="0.14" strokeDasharray="3 3" />

                      {/* Main Axes - High Contrast */}
                      <line x1="44" y1="216" x2="44" y2="14" stroke="#0D1B2A" strokeOpacity="0.55" strokeWidth="1.3" />
                      <line x1="44" y1="216" x2="338" y2="216" stroke="#0D1B2A" strokeOpacity="0.55" strokeWidth="1.3" />

                      {/* Axis Arrow Ticks */}
                      <path d="M 40 20 L 44 14 L 48 20" fill="none" stroke="#0D1B2A" strokeOpacity="0.65" strokeWidth="1.3" />
                      <path d="M 332 212 L 338 216 L 332 220" fill="none" stroke="#0D1B2A" strokeOpacity="0.65" strokeWidth="1.3" />

                      {/* Axis Labels (High Contrast Instrument Sans 600) */}
                      <text x="36" y="16" textAnchor="end" fill="#0D1B2A" fontSize="11" fontFamily="inherit" fontWeight="600" letterSpacing="0.07em">
                        IMPACT
                      </text>
                      <text x="338" y="234" textAnchor="end" fill="#0D1B2A" fontSize="11" fontFamily="inherit" fontWeight="600" letterSpacing="0.07em">
                        FEASIBILITY →
                      </text>
                    </g>

                    {/* Standard Opportunity Points (Phase 2) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card2Animated ? 1 : 0,
                        transitionDelay: "300ms",
                      }}
                    >
                      <circle cx="96" cy="175" r="3.5" fill="#3B4A5A" fillOpacity="0.25" />
                      <circle cx="130" cy="150" r="3" fill="#3B4A5A" fillOpacity="0.20" />
                      <circle cx="106" cy="80" r="3.5" fill="#3B4A5A" fillOpacity="0.30" />
                      <circle cx="275" cy="175" r="4" fill="#3B4A5A" fillOpacity="0.35" />

                      {/* Secondary Candidate in Top-Right */}
                      <circle cx="220" cy="68" r="4" fill="#D4A64A" fillOpacity="0.5" />
                    </g>

                    {/* Primary Highlighted High-Value Target & Label (Phase 3) */}
                    <g
                      className="transition-all duration-600 ease-out"
                      style={{
                        opacity: card2Animated ? 1 : 0,
                        transform: card2Animated ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "268px 70px",
                        transitionDelay: "520ms",
                      }}
                    >
                      <circle cx="268" cy="70" r="18" fill="none" stroke="#D4A64A" strokeOpacity="0.35" strokeDasharray="3 3" className="group-hover:stroke-opacity-65 transition-all duration-200" />
                      <circle cx="268" cy="70" r="12" fill="#FBFCFB" stroke="#D4A64A" strokeWidth="1.6" className="group-hover:stroke-[#B88728] transition-colors duration-200" />
                      <circle cx="268" cy="70" r="4" fill="#D4A64A" className="group-hover:fill-[#B88728] transition-colors duration-200" />

                      {/* High-value opportunity label - Clear & Readable */}
                      <text
                        x="268"
                        y="102"
                        textAnchor="middle"
                        fill="#0D1B2A"
                        fontSize="11.5"
                        fontFamily="inherit"
                        fontWeight="600"
                      >
                        High-value opportunity
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Footer Metadata (Crisp, 1 Step Darker #2A2A28) */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#DADBD6] group-hover:border-[#B5B7B1] pt-3 transition-colors duration-200">
                <div className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.09em] text-[#2A2A28]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A64A] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <span>IMPACT × FEASIBILITY</span>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#2A2A28]/55">
                  02
                </span>
              </div>

            </div>

            {/* ============================================================= */}
            {/* PRINCIPLE 03: BUILD FOR ADOPTION                              */}
            {/* ============================================================= */}
            <div
              ref={card3Ref}
              style={{ transitionDelay: "240ms" }}
              className={cn(
                "group relative flex flex-col justify-between py-7 sm:py-8 px-5 sm:px-6 lg:py-4.5 lg:px-5 xl:py-5 xl:px-6 min-h-0 lg:min-h-[360px] xl:min-h-[390px] bg-[#FBFCFB] overflow-hidden cursor-default transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                card3Animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              
              {/* Text Block */}
              <div>
                <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#56616B]">
                  <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                  <span>03 — PRINCIPLE</span>
                </div>

                <h3 className="mt-2.5 text-[22px] sm:text-[24px] lg:text-[24px] xl:text-[26px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A] group-hover:text-[#000000] leading-[1.18] transition-colors duration-200">
                  Build for Adoption
                </h3>

                <p className="mt-1.5 text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] font-sans text-[#56616B] leading-[1.50] max-w-[360px] lg:max-w-none">
                  Design solutions around the way people, workflows and systems actually operate.
                </p>
              </div>

              {/* Dominant Diagram: Connected Square Operating Structure (Scaled ~10% Larger) */}
              <div className="my-3 lg:my-3 xl:my-4 w-full flex items-center justify-center">
                <div className="w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[290px] xl:max-w-[320px] mx-auto">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-auto aspect-[360/260] select-none overflow-visible"
                    aria-label="Operating Model: Interlocked square operating structure connecting People, Workflows, Data, and Technology"
                  >
                    {/* Outer Boundary Operating Frame & Coordinate Brackets */}
                    <rect x="42" y="18" width="276" height="216" rx="4" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeWidth="1" />
                    <path d="M 36 18 L 42 18 L 42 12" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 324 18 L 318 18 L 318 12" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 36 234 L 42 234 L 42 240" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 324 234 L 318 234 L 318 240" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />

                    {/* 4 Outer Stations (Phase 1) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card3Animated ? 1 : 0,
                        transitionDelay: "100ms",
                      }}
                    >
                      {/* Station 01: People (Top-Left) */}
                      <rect x="74" y="41" width="36" height="34" rx="4" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                      <circle cx="92" cy="52" r="3" fill="#0D1B2A" />
                      <path d="M 84 63 A 8 8 0 0 1 100 63" fill="none" stroke="#0D1B2A" strokeWidth="1.2" />
                      <text x="92" y="32" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="600">
                        People
                      </text>

                      {/* Station 02: Workflows (Top-Right) */}
                      <rect x="250" y="41" width="36" height="34" rx="4" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                      <line x1="258" y1="53" x2="278" y2="53" stroke="#0D1B2A" strokeWidth="1.2" />
                      <line x1="258" y1="61" x2="278" y2="61" stroke="#0D1B2A" strokeWidth="1.2" />
                      <text x="268" y="32" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="600">
                        Workflows
                      </text>

                      {/* Station 03: Technology (Bottom-Left) */}
                      <rect x="74" y="177" width="36" height="34" rx="4" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                      <rect x="83" y="185" width="18" height="18" rx="2" fill="none" stroke="#0D1B2A" strokeWidth="1.1" />
                      <line x1="86" y1="194" x2="98" y2="194" stroke="#0D1B2A" strokeWidth="1.1" />
                      <text x="92" y="226" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="600">
                        Technology
                      </text>

                      {/* Station 04: Data (Bottom-Right) */}
                      <rect x="250" y="177" width="36" height="34" rx="4" fill="#FBFCFB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                      <rect x="258" y="185" width="8" height="8" rx="1" fill="#0D1B2A" fillOpacity="0.75" />
                      <rect x="268" y="185" width="8" height="8" rx="1" fill="#0D1B2A" fillOpacity="0.30" />
                      <rect x="258" y="195" width="8" height="8" rx="1" fill="#0D1B2A" fillOpacity="0.30" />
                      <rect x="268" y="195" width="8" height="8" rx="1" fill="#0D1B2A" fillOpacity="0.75" />
                      <text x="268" y="226" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="600">
                        Data
                      </text>
                    </g>

                    {/* Structural Rails & Conduits (Phase 2) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: card3Animated ? 1 : 0,
                        transitionDelay: "300ms",
                      }}
                    >
                      {/* Perimeter Rails */}
                      <line x1="108" y1="58" x2="252" y2="58" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                      <line x1="108" y1="194" x2="252" y2="194" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                      <line x1="92" y1="74" x2="92" y2="178" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                      <line x1="268" y1="74" x2="268" y2="178" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />

                      {/* Convergence Alignment Ties to Center */}
                      <line x1="92" y1="58" x2="132" y2="100" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                      <line x1="268" y1="58" x2="228" y2="100" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                      <line x1="92" y1="194" x2="132" y2="152" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                      <line x1="268" y1="194" x2="228" y2="152" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />

                      {/* Direct Gold Inflow Conduits into Center */}
                      <line x1="180" y1="58" x2="180" y2="100" stroke="#D4A64A" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="178" y="56" width="4" height="4" fill="#D4A64A" />
                      <line x1="180" y1="194" x2="180" y2="152" stroke="#D4A64A" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="178" y="192" width="4" height="4" fill="#D4A64A" />
                      <line x1="92" y1="126" x2="132" y2="126" stroke="#D4A64A" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="90" y="124" width="4" height="4" fill="#D4A64A" />
                      <line x1="268" y1="126" x2="228" y2="126" stroke="#D4A64A" strokeWidth="1.5" strokeDasharray="3 2" />
                      <rect x="266" y="124" width="4" height="4" fill="#D4A64A" />
                    </g>

                    {/* CENTER: Connected Operating Model Core Module (Phase 3) */}
                    <g
                      className="transition-all duration-600 ease-out"
                      style={{
                        opacity: card3Animated ? 1 : 0,
                        transform: card3Animated ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "180px 126px",
                        transitionDelay: "520ms",
                      }}
                    >
                      <rect x="132" y="100" width="96" height="52" rx="4" fill="#FBFCFB" stroke="#D4A64A" strokeWidth="1.5" className="group-hover:stroke-[#B88728] transition-colors duration-200" />
                      <rect x="136" y="104" width="88" height="44" rx="2" fill="none" stroke="#D4A64A" strokeOpacity="0.25" strokeWidth="0.8" className="group-hover:stroke-opacity-50 transition-all duration-200" />
                      <text x="180" y="122" textAnchor="middle" fill="#0D1B2A" fontSize="10" fontWeight="600" fontFamily="inherit" letterSpacing="0.08em">
                        OPERATING
                      </text>
                      <text x="180" y="136" textAnchor="middle" fill="#0D1B2A" fontSize="10" fontWeight="600" fontFamily="inherit" letterSpacing="0.08em">
                        MODEL
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Footer Metadata (Crisp, 1 Step Darker #2A2A28) */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#DADBD6] group-hover:border-[#B5B7B1] pt-3.5 transition-colors duration-200">
                <div className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.09em] text-[#2A2A28]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A64A] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <span>OPERATING INTEGRATION</span>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#2A2A28]/55">
                  03
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
