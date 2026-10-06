"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Aiveeno — Section 02: THE SHIFT (DESKTOP & MOBILE ARCHITECTURE)
 * 
 * Responsive Storytelling Layout:
 * - Desktop: 2-column comparison with central vertical divider.
 * - Mobile: Vertical narrative progression:
 *   1. THE SHIFT eyebrow
 *   2. Main H2 (38–42px, Instrument Sans 500)
 *   3. "Adopt AI" block + Fragmented Visual (clamped to 300–340px, monochrome only)
 *   4. Vertical progression flow indicator with subtle downward arrow (↓) in 52–64px gap
 *   5. "Transform the business with AI" block + Connected Operating Model Visual (clamped to 300–340px, gold beacons)
 * 
 * Animation Architecture:
 * - Sequential entrance: Header reveals first -> Left fragmented silos stagger -> Right connected matrix resolves -> Gold highlights last.
 * - Restrained enterprise motion: zero whole-card lift, zero bounce.
 */

export default function TheShiftSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const [headerAnimated, setHeaderAnimated] = useState(false);
  const [block1Animated, setBlock1Animated] = useState(false);
  const [block2Animated, setBlock2Animated] = useState(false);
  const [hoveredStation, setHoveredStation] = useState<string | null>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlock1Animated(true);
        }
      },
      { threshold: 0.15 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlock2Animated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (block1Ref.current) observer1.observe(block1Ref.current);
    if (block2Ref.current) observer2.observe(block2Ref.current);

    return () => {
      headerObserver.disconnect();
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="the-shift"
      className="relative w-full bg-[#EEF1F0] text-[#0D1B2A] select-none pt-[56px] pb-[64px] sm:pt-16 sm:pb-16 lg:py-6 xl:py-8 lg:min-h-[calc(100svh-66px)] lg:flex lg:flex-col lg:justify-center border-b border-[#0D1B2A]/[0.10] overflow-hidden scroll-mt-[58px] lg:scroll-mt-[66px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — PERMANENT MAIN HEADLINE (Reveals first on viewport entry)            */}
        {/* ========================================================================= */}
        <div
          ref={headerRef}
          className={cn(
            "max-w-[860px] transition-all duration-650 ease-[cubic-bezier(0.22,1,0.36,1)]",
            headerAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A] mb-[14px] sm:mb-[16px] lg:mb-[18px]">
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>The Shift</span>
          </div>

          {/* Main Headline */}
          <h2
            className="font-sans font-medium text-[#0D1B2A] tracking-[-0.035em] text-[36px] sm:text-[40px] lg:text-[42px] xl:text-[46px]"
            style={{ lineHeight: "1.04" }}
          >
            Adopting AI is not the same as transforming with AI.
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 02 — COMPARISON CONTAINER                                                 */}
        {/* ========================================================================= */}
        <div className="mt-6 sm:mt-7 lg:mt-7 border-t border-[#0D1B2A]/[0.10]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-stretch">
            
            {/* ----------------------------------------------------------------- */}
            {/* STATE 01: ADOPT AI (FRAGMENTED / DISCONNECTED SILOS)              */}
            {/* ----------------------------------------------------------------- */}
            <div
              ref={block1Ref}
              className="pt-6 sm:pt-7 pb-2 sm:pb-4 lg:pt-4 lg:pb-1 pr-0 lg:pr-10 flex flex-col justify-between border-none lg:border-r border-[#0D1B2A]/[0.10]"
            >
              <div>
                <h3
                  className="font-sans font-medium text-[#0D1B2A]/90 tracking-[-0.025em] text-[22px] sm:text-[24px] lg:text-[25px]"
                  style={{ lineHeight: "1.2" }}
                >
                  Adopt AI
                </h3>
                <p className="mt-1 text-[15px] sm:text-[16px] lg:text-[17px] text-[#4A5568] font-sans font-normal leading-relaxed">
                  Add tools to existing work.
                </p>
              </div>

              {/* Visual Left: 4 Fragmented, Unaligned Islands (Monochrome only) */}
              <div className="mt-4 sm:mt-5 lg:mt-2 w-full flex items-center justify-center">
                
                {/* --- MOBILE VISUAL (350x240, clamped to max-w-[340px]) --- */}
                <div className="w-full max-w-[340px] mx-auto lg:hidden">
                  <svg
                    viewBox="0 0 350 240"
                    className="w-full h-auto aspect-[350/240] overflow-visible select-none"
                    aria-label="Adopt AI: Fragmented and disconnected business components with no shared structure"
                  >
                    {/* ISLAND 1: Workflows — Broken routing rail */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block1Animated ? 1 : 0,
                        transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: "100ms",
                      }}
                    >
                      {/* Unaligned outer bounding indicator */}
                      <path d="M 52 42 L 50 42 A 28 28 0 0 1 100 36" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 3" />
                      {/* Disjointed process rails with broken gap */}
                      <line x1="58" y1="56" x2="76" y2="56" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1.2" />
                      <line x1="82" y1="56" x2="98" y2="56" stroke="#0D1B2A" strokeOpacity="0.20" strokeWidth="1.2" strokeDasharray="2 2" />
                      <line x1="58" y1="64" x2="72" y2="64" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.2" />
                      <line x1="78" y1="64" x2="96" y2="64" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1.2" />
                      {/* Disconnected step nodes */}
                      <circle cx="64" cy="56" r="2.2" fill="#0D1B2A" fillOpacity="0.75" />
                      <circle cx="90" cy="64" r="2.2" fill="#0D1B2A" fillOpacity="0.75" />
                      <rect x="74" y="54" width="4" height="4" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1" />
                      {/* Abrupt local intervention loop */}
                      <path d="M 60 48 C 66 38, 88 38, 92 46" fill="none" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1.2" />
                      <circle cx="92" cy="46" r="1.5" fill="#0D1B2A" fillOpacity="0.55" />
                      <text x="76" y="94" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Workflows
                      </text>
                    </g>

                    {/* ISLAND 2: Data — Isolated database silo stack */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block1Animated ? 1 : 0,
                        transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: "220ms",
                      }}
                    >
                      {/* Silo cylinder disks stacked */}
                      <ellipse cx="274" cy="48" rx="19" ry="6" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.38" strokeWidth="1.2" />
                      <path d="M 255 48 v 10 a 19 6 0 0 0 38 0 v -10" fill="none" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.2" />
                      <path d="M 255 58 v 10 a 19 6 0 0 0 38 0 v -10" fill="none" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.2" />
                      {/* Isolated internal partition marker */}
                      <circle cx="274" cy="48" r="2" fill="#0D1B2A" fillOpacity="0.7" />
                      {/* Disconnected local query arc */}
                      <path d="M 296 52 A 26 26 0 0 1 292 72" fill="none" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="274" y="94" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Data
                      </text>
                    </g>

                    {/* ISLAND 3: Systems — Standalone modular block with dead-end ports */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block1Animated ? 1 : 0,
                        transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: "340ms",
                      }}
                    >
                      {/* Architecture boundary box */}
                      <rect x="63" y="146" width="26" height="22" rx="2" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1.2" />
                      <line x1="63" y1="157" x2="89" y2="157" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                      <circle cx="76" cy="157" r="1.8" fill="#0D1B2A" fillOpacity="0.7" />
                      {/* Dead-end stub connector pins */}
                      <line x1="55" y1="152" x2="63" y2="152" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                      <line x1="89" y1="162" x2="97" y2="162" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                      <circle cx="55" cy="152" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                      <circle cx="97" cy="162" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                      {/* Open unaligned boundary tick */}
                      <path d="M 50 142 L 46 142 L 46 146" fill="none" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                      <text x="76" y="196" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Systems
                      </text>
                    </g>

                    {/* ISLAND 4: Decisions — Isolated divergent logic branch */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block1Animated ? 1 : 0,
                        transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: "460ms",
                      }}
                    >
                      {/* Decision diamond node */}
                      <polygon points="274,142 284,153 274,164 264,153" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1.2" />
                      <circle cx="274" cy="153" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                      {/* Dead-end logic branches */}
                      <line x1="284" y1="153" x2="296" y2="153" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                      <line x1="296" y1="153" x2="296" y2="147" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                      <line x1="274" y1="164" x2="274" y2="174" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="296" cy="147" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                      <text x="274" y="196" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Decisions
                      </text>
                    </g>
                  </svg>
                </div>

                {/* --- DESKTOP VISUAL (max-w-[430px], 215 height) --- */}
                <svg
                  viewBox="0 0 440 215"
                  className="hidden lg:block w-full h-auto max-w-[430px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  {/* ISLAND 1: Workflows (Top-Left: 100, 48) — Broken routing rail */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block1Animated ? 1 : 0,
                      transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: "100ms",
                    }}
                  >
                    <path d="M 72 32 A 30 30 0 0 1 128 26" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Process rails with fragmented gap */}
                    <line x1="82" y1="44" x2="102" y2="44" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1.2" />
                    <line x1="108" y1="44" x2="124" y2="44" stroke="#0D1B2A" strokeOpacity="0.20" strokeWidth="1.2" strokeDasharray="2 2" />
                    <line x1="82" y1="52" x2="96" y2="52" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <line x1="102" y1="52" x2="124" y2="52" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1.2" />
                    <circle cx="88" cy="44" r="2.2" fill="#0D1B2A" fillOpacity="0.75" />
                    <circle cx="118" cy="52" r="2.2" fill="#0D1B2A" fillOpacity="0.75" />
                    <rect x="100" y="42" width="4" height="4" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1" />
                    {/* Local tool patch loop */}
                    <path d="M 84 36 C 92 24, 116 24, 122 34" fill="none" stroke="#0D1B2A" strokeOpacity="0.42" strokeWidth="1.2" />
                    <circle cx="122" cy="34" r="1.5" fill="#0D1B2A" fillOpacity="0.6" />
                    <text x="100" y="85" textAnchor="middle" fill="#0D1B2A" fontSize="13.5" fontFamily="inherit" fontWeight="500">
                      Workflows
                    </text>
                  </g>

                  {/* ISLAND 2: Data (Top-Right: 340, 48) — Isolated database silo stack */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block1Animated ? 1 : 0,
                      transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: "220ms",
                    }}
                  >
                    <ellipse cx="340" cy="36" rx="20" ry="6" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.38" strokeWidth="1.2" />
                    <path d="M 320 36 v 11 a 20 6 0 0 0 40 0 v -11" fill="none" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.2" />
                    <path d="M 320 47 v 11 a 20 6 0 0 0 40 0 v -11" fill="none" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.2" />
                    <circle cx="340" cy="36" r="2" fill="#0D1B2A" fillOpacity="0.7" />
                    {/* Detached partition arc */}
                    <path d="M 364 42 A 28 28 0 0 1 360 64" fill="none" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="340" y="85" textAnchor="middle" fill="#0D1B2A" fontSize="13.5" fontFamily="inherit" fontWeight="500">
                      Data
                    </text>
                  </g>

                  {/* ISLAND 3: Systems (Bottom-Left: 100, 145) — Modular block with dead-end ports */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block1Animated ? 1 : 0,
                      transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: "340ms",
                    }}
                  >
                    <rect x="86" y="133" width="28" height="23" rx="2" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1.2" />
                    <line x1="86" y1="144" x2="114" y2="144" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                    <circle cx="100" cy="144" r="1.8" fill="#0D1B2A" fillOpacity="0.7" />
                    {/* Dead-end stubs */}
                    <line x1="77" y1="139" x2="86" y2="139" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                    <line x1="114" y1="149" x2="123" y2="149" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                    <circle cx="77" cy="139" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                    <circle cx="123" cy="149" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                    <text x="100" y="182" textAnchor="middle" fill="#0D1B2A" fontSize="13.5" fontFamily="inherit" fontWeight="500">
                      Systems
                    </text>
                  </g>

                  {/* ISLAND 4: Decisions (Bottom-Right: 340, 145) — Isolated divergent logic branch */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block1Animated ? 1 : 0,
                      transform: block1Animated ? "translateY(0)" : "translateY(8px)",
                      transitionDelay: "460ms",
                    }}
                  >
                    <polygon points="340,132 352,144 340,156 328,144" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.4" strokeWidth="1.2" />
                    <circle cx="340" cy="144" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                    {/* Dead-end logic branches */}
                    <line x1="352" y1="144" x2="366" y2="144" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="366" y1="144" x2="366" y2="137" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="340" y1="156" x2="340" y2="167" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="366" cy="137" r="1.5" fill="#0D1B2A" fillOpacity="0.45" />
                    <text x="340" y="182" textAnchor="middle" fill="#0D1B2A" fontSize="13.5" fontFamily="inherit" fontWeight="500">
                      Decisions
                    </text>
                  </g>
                </svg>

              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* MOBILE PROGRESSION FLOW (Between Block 1 & Block 2: 52–64px gap)  */}
            {/* ----------------------------------------------------------------- */}
            <div className="flex lg:hidden flex-col items-center justify-center py-6 sm:py-7 my-1" aria-hidden="true">
              <div className="w-px h-6 bg-[#0D1B2A]/[0.14]" />
              <div className="w-7 h-7 rounded-full border border-[#0D1B2A]/[0.18] bg-[#EEF1F0] flex items-center justify-center text-[#0D1B2A]/60 my-1 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2.5v7M3 6.5l3 3 3-3" />
                </svg>
              </div>
              <div className="w-px h-6 bg-[#0D1B2A]/[0.14]" />
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* STATE 02: TRANSFORM THE BUSINESS WITH AI (OPERATING MODEL MATRIX)  */}
            {/* ----------------------------------------------------------------- */}
            <div
              ref={block2Ref}
              className="pt-2 sm:pt-3 pb-6 sm:pb-8 lg:pt-4 lg:pb-1 pl-0 lg:pl-10 flex flex-col justify-between"
            >
              <div>
                <h3
                  className="font-sans font-medium text-[#0D1B2A] tracking-[-0.025em] text-[22px] sm:text-[24px] lg:text-[25px]"
                  style={{ lineHeight: "1.2" }}
                >
                  Transform the business with AI
                </h3>
                <p className="mt-1 text-[15px] sm:text-[16px] lg:text-[17px] text-[#4A5568] font-sans font-normal leading-relaxed">
                  Redesign how the business operates.
                </p>
              </div>

              {/* Visual Right: High Authority Orchestrated Matrix (~12% Larger Presence) */}
              <div className="mt-4 sm:mt-5 lg:mt-2 w-full flex items-center justify-center">
                
                {/* --- MOBILE VISUAL (350x240, clamped to max-w-[340px]) --- */}
                <div className="w-full max-w-[340px] mx-auto lg:hidden">
                  <svg
                    viewBox="0 0 350 240"
                    className="w-full h-auto aspect-[350/240] overflow-visible select-none"
                    aria-label="Transform the business with AI: Operating model orchestrating Workflows, Data, Systems, and Decisions"
                  >
                    {/* Subtle Shared Operating Field Matrix */}
                    <rect
                      x="28"
                      y="18"
                      width="294"
                      height="194"
                      fill="none"
                      stroke="#0D1B2A"
                      strokeOpacity="0.035"
                      strokeWidth="0.75"
                    />
                    {/* Corner Tick Markers */}
                    <path d="M 24 18 L 28 18 L 28 14" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                    <path d="M 326 18 L 322 18 L 322 14" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                    <path d="M 24 212 L 28 212 L 28 216" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                    <path d="M 326 212 L 322 212 L 322 216" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />

                    {/* Faint Internal Coordinate Guides */}
                    <line x1="28" y1="115" x2="322" y2="115" stroke="#0D1B2A" strokeOpacity="0.035" strokeWidth="1" />
                    <line x1="175" y1="18" x2="175" y2="212" stroke="#0D1B2A" strokeOpacity="0.035" strokeWidth="1" />

                    {/* Structural Connectors (Darker, High-Contrast ~0.36 Opacity) */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block2Animated ? 1 : 0,
                        transitionDelay: "300ms",
                      }}
                    >
                      {/* Outer Structural Ring */}
                      <line x1="75" y1="60" x2="275" y2="60" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                      <line x1="275" y1="60" x2="275" y2="165" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                      <line x1="275" y1="165" x2="75" y2="165" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                      <line x1="75" y1="165" x2="75" y2="60" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />

                      {/* Cross-Diagonal Interconnections Converging at Center */}
                      <line x1="75" y1="60" x2="275" y2="165" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.1" />
                      <line x1="75" y1="165" x2="275" y2="60" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.1" />
                    </g>

                    {/* Active Gold Conduits Converging to Central Operating Model */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block2Animated ? 1 : 0,
                        transitionDelay: "700ms",
                      }}
                    >
                      <line x1="75" y1="60" x2="175" y2="112.5" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="4 3" />
                      <line x1="275" y1="60" x2="175" y2="112.5" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="4 3" />
                      <line x1="75" y1="165" x2="175" y2="112.5" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="4 3" />
                      <line x1="275" y1="165" x2="175" y2="112.5" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="4 3" />
                    </g>

                    {/* Central OPERATING MODEL Nexus & Legible Pill Badge */}
                    <g
                      className="transition-all duration-600 ease-out"
                      style={{
                        opacity: block2Animated ? 1 : 0,
                        transform: block2Animated ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "175px 112.5px",
                        transitionDelay: "500ms",
                      }}
                    >
                      <circle cx="175" cy="112.5" r="14" fill="#EEF1F0" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.25" strokeDasharray="3 2" />
                      <circle cx="175" cy="112.5" r="7.5" fill="#EEF1F0" stroke="#D4A64A" strokeWidth="1.5" />
                      <circle cx="175" cy="112.5" r="2.8" fill="#D4A64A" />

                      {/* Highly Legible Dedicated Central Badge Pill */}
                      <rect
                        x="115"
                        y="132"
                        width="120"
                        height="19"
                        rx="4"
                        fill="#EEF1F0"
                        stroke="#0D1B2A"
                        strokeOpacity="0.16"
                        strokeWidth="1"
                      />
                      <text
                        x="175"
                        y="145"
                        textAnchor="middle"
                        fill="#0D1B2A"
                        fontSize="10.5"
                        fontWeight="500"
                        fontFamily="inherit"
                        letterSpacing="0.08em"
                      >
                        OPERATING MODEL
                      </text>
                    </g>

                    {/* 4 Orchestrated Stations with Radiant Gold Active Nodes */}
                    <g
                      className="transition-all duration-700 ease-out"
                      style={{
                        opacity: block2Animated ? 1 : 0,
                        transitionDelay: "150ms",
                      }}
                    >
                      {/* Workflows */}
                      <circle cx="75" cy="60" r="9" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />
                      <circle cx="75" cy="60" r="6" fill="none" stroke="#D4A64A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="75" cy="60" r="3" fill="#D4A64A" />
                      <text x="75" y="94" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Workflows
                      </text>

                      {/* Data */}
                      <circle cx="275" cy="60" r="9" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />
                      <circle cx="275" cy="60" r="6" fill="none" stroke="#D4A64A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="275" cy="60" r="3" fill="#D4A64A" />
                      <text x="275" y="94" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Data
                      </text>

                      {/* Systems */}
                      <circle cx="75" cy="165" r="9" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />
                      <circle cx="75" cy="165" r="6" fill="none" stroke="#D4A64A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="75" cy="165" r="3" fill="#D4A64A" />
                      <text x="75" y="196" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Systems
                      </text>

                      {/* Decisions */}
                      <circle cx="275" cy="165" r="9" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />
                      <circle cx="275" cy="165" r="6" fill="none" stroke="#D4A64A" strokeOpacity="0.4" strokeWidth="1" />
                      <circle cx="275" cy="165" r="3" fill="#D4A64A" />
                      <text x="275" y="196" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                        Decisions
                      </text>
                    </g>
                  </svg>
                </div>

                {/* --- DESKTOP VISUAL (~12% larger: max-w-[485px], 215 height) --- */}
                <svg
                  viewBox="0 0 440 215"
                  className="hidden lg:block w-full h-auto max-w-[485px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  {/* Subtle Shared Operating Field Matrix */}
                  <rect
                    x="48"
                    y="10"
                    width="344"
                    height="176"
                    fill="none"
                    stroke="#0D1B2A"
                    strokeOpacity="0.035"
                    strokeWidth="0.75"
                  />
                  {/* Corner Tick Markers */}
                  <path d="M 44 10 L 48 10 L 48 6" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                  <path d="M 396 10 L 392 10 L 392 6" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                  <path d="M 44 186 L 48 186 L 48 190" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />
                  <path d="M 396 186 L 392 186 L 392 190" fill="none" stroke="#0D1B2A" strokeOpacity="0.09" strokeWidth="1" />

                  {/* Faint Internal Coordinate Guides */}
                  <line x1="48" y1="96.5" x2="392" y2="96.5" stroke="#0D1B2A" strokeOpacity="0.035" strokeWidth="1" />
                  <line x1="220" y1="10" x2="220" y2="186" stroke="#0D1B2A" strokeOpacity="0.035" strokeWidth="1" />

                  {/* Structural Connectors (Darker, High-Contrast ~0.36 Opacity) */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block2Animated ? 1 : 0,
                      transitionDelay: "300ms",
                    }}
                  >
                    {/* Outer Structural Frame */}
                    <line x1="100" y1="48" x2="340" y2="48" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                    <line x1="340" y1="48" x2="340" y2="145" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                    <line x1="340" y1="145" x2="100" y2="145" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />
                    <line x1="100" y1="145" x2="100" y2="48" stroke="#0D1B2A" strokeOpacity="0.36" strokeWidth="1.25" />

                    {/* Cross-Diagonal Structural Lines */}
                    <line x1="100" y1="48" x2="340" y2="145" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.1" />
                    <line x1="100" y1="145" x2="340" y2="48" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.1" />
                  </g>

                  {/* Active Gold Conduits Converging to Center */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block2Animated ? 1 : 0,
                      transitionDelay: "700ms",
                    }}
                  >
                    <line
                      x1="100"
                      y1="48"
                      x2="220"
                      y2="96.5"
                      stroke={hoveredStation === "workflows" ? "#B88728" : "#D4A64A"}
                      strokeOpacity={hoveredStation === "workflows" ? 0.95 : 0.75}
                      strokeWidth={hoveredStation === "workflows" ? 2.0 : 1.5}
                      strokeDasharray="5 3"
                      className="transition-all duration-200"
                    />
                    <line
                      x1="340"
                      y1="48"
                      x2="220"
                      y2="96.5"
                      stroke={hoveredStation === "data" ? "#B88728" : "#D4A64A"}
                      strokeOpacity={hoveredStation === "data" ? 0.95 : 0.75}
                      strokeWidth={hoveredStation === "data" ? 2.0 : 1.5}
                      strokeDasharray="5 3"
                      className="transition-all duration-200"
                    />
                    <line
                      x1="100"
                      y1="145"
                      x2="220"
                      y2="96.5"
                      stroke={hoveredStation === "systems" ? "#B88728" : "#D4A64A"}
                      strokeOpacity={hoveredStation === "systems" ? 0.95 : 0.75}
                      strokeWidth={hoveredStation === "systems" ? 2.0 : 1.5}
                      strokeDasharray="5 3"
                      className="transition-all duration-200"
                    />
                    <line
                      x1="340"
                      y1="145"
                      x2="220"
                      y2="96.5"
                      stroke={hoveredStation === "decisions" ? "#B88728" : "#D4A64A"}
                      strokeOpacity={hoveredStation === "decisions" ? 0.95 : 0.75}
                      strokeWidth={hoveredStation === "decisions" ? 2.0 : 1.5}
                      strokeDasharray="5 3"
                      className="transition-all duration-200"
                    />
                  </g>

                  {/* Central OPERATING MODEL Nexus & Highly Legible Dedicated Pill Badge */}
                  <g
                    className="transition-all duration-600 ease-out"
                    style={{
                      opacity: block2Animated ? 1 : 0,
                      transform: block2Animated ? "scale(1)" : "scale(0.9)",
                      transformOrigin: "220px 96.5px",
                      transitionDelay: "500ms",
                    }}
                  >
                    <circle cx="220" cy="96.5" r="14" fill="#EEF1F0" stroke="#D4A64A" strokeOpacity="0.75" strokeWidth="1.25" strokeDasharray="4 2" />
                    <circle cx="220" cy="96.5" r="8" fill="#EEF1F0" stroke="#D4A64A" strokeWidth="1.5" />
                    <circle cx="220" cy="96.5" r="3" fill="#D4A64A" />

                    {/* Dedicated Protective Background Pill for High Legibility */}
                    <rect
                      x="156"
                      y="117"
                      width="128"
                      height="20"
                      rx="4"
                      fill="#EEF1F0"
                      stroke="#0D1B2A"
                      strokeOpacity="0.16"
                      strokeWidth="1"
                    />
                    <text
                      x="220"
                      y="131"
                      textAnchor="middle"
                      fill="#0D1B2A"
                      fontSize="11.5"
                      fontWeight="500"
                      fontFamily="inherit"
                      letterSpacing="0.08em"
                    >
                      OPERATING MODEL
                    </text>
                  </g>

                  {/* 4 Orchestrated Stations with Radiant Gold Active Nodes */}
                  <g
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: block2Animated ? 1 : 0,
                      transitionDelay: "150ms",
                    }}
                  >
                    {/* Workflows */}
                    <g
                      className="cursor-default"
                      onMouseEnter={() => setHoveredStation("workflows")}
                      onMouseLeave={() => setHoveredStation(null)}
                    >
                      <circle cx="100" cy="48" r="9.5" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity={hoveredStation === "workflows" ? 0.85 : 0.5} strokeWidth={hoveredStation === "workflows" ? 1.5 : 1.2} className="transition-all duration-200" />
                      <circle cx="100" cy="48" r="6" fill="none" stroke={hoveredStation === "workflows" ? "#B88728" : "#D4A64A"} strokeOpacity={hoveredStation === "workflows" ? 0.7 : 0.4} strokeWidth="1" className="transition-all duration-200" />
                      <circle cx="100" cy="48" r="3" fill={hoveredStation === "workflows" ? "#B88728" : "#D4A64A"} className="transition-all duration-200" />
                      <text x="100" y="85" textAnchor="middle" fill={hoveredStation === "workflows" ? "#000000" : "#0D1B2A"} fontSize="13.5" fontFamily="inherit" fontWeight={hoveredStation === "workflows" ? 600 : 500} className="transition-all duration-200">
                        Workflows
                      </text>
                    </g>

                    {/* Data */}
                    <g
                      className="cursor-default"
                      onMouseEnter={() => setHoveredStation("data")}
                      onMouseLeave={() => setHoveredStation(null)}
                    >
                      <circle cx="340" cy="48" r="9.5" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity={hoveredStation === "data" ? 0.85 : 0.5} strokeWidth={hoveredStation === "data" ? 1.5 : 1.2} className="transition-all duration-200" />
                      <circle cx="340" cy="48" r="6" fill="none" stroke={hoveredStation === "data" ? "#B88728" : "#D4A64A"} strokeOpacity={hoveredStation === "data" ? 0.7 : 0.4} strokeWidth="1" className="transition-all duration-200" />
                      <circle cx="340" cy="48" r="3" fill={hoveredStation === "data" ? "#B88728" : "#D4A64A"} className="transition-all duration-200" />
                      <text x="340" y="85" textAnchor="middle" fill={hoveredStation === "data" ? "#000000" : "#0D1B2A"} fontSize="13.5" fontFamily="inherit" fontWeight={hoveredStation === "data" ? 600 : 500} className="transition-all duration-200">
                        Data
                      </text>
                    </g>

                    {/* Systems */}
                    <g
                      className="cursor-default"
                      onMouseEnter={() => setHoveredStation("systems")}
                      onMouseLeave={() => setHoveredStation(null)}
                    >
                      <circle cx="100" cy="145" r="9.5" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity={hoveredStation === "systems" ? 0.85 : 0.5} strokeWidth={hoveredStation === "systems" ? 1.5 : 1.2} className="transition-all duration-200" />
                      <circle cx="100" cy="145" r="6" fill="none" stroke={hoveredStation === "systems" ? "#B88728" : "#D4A64A"} strokeOpacity={hoveredStation === "systems" ? 0.7 : 0.4} strokeWidth="1" className="transition-all duration-200" />
                      <circle cx="100" cy="145" r="3" fill={hoveredStation === "systems" ? "#B88728" : "#D4A64A"} className="transition-all duration-200" />
                      <text x="100" y="182" textAnchor="middle" fill={hoveredStation === "systems" ? "#000000" : "#0D1B2A"} fontSize="13.5" fontFamily="inherit" fontWeight={hoveredStation === "systems" ? 600 : 500} className="transition-all duration-200">
                        Systems
                      </text>
                    </g>

                    {/* Decisions */}
                    <g
                      className="cursor-default"
                      onMouseEnter={() => setHoveredStation("decisions")}
                      onMouseLeave={() => setHoveredStation(null)}
                    >
                      <circle cx="340" cy="145" r="9.5" fill="#EEF1F0" stroke="#0D1B2A" strokeOpacity={hoveredStation === "decisions" ? 0.85 : 0.5} strokeWidth={hoveredStation === "decisions" ? 1.5 : 1.2} className="transition-all duration-200" />
                      <circle cx="340" cy="145" r="6" fill="none" stroke={hoveredStation === "decisions" ? "#B88728" : "#D4A64A"} strokeOpacity={hoveredStation === "decisions" ? 0.7 : 0.4} strokeWidth="1" className="transition-all duration-200" />
                      <circle cx="340" cy="145" r="3" fill={hoveredStation === "decisions" ? "#B88728" : "#D4A64A"} className="transition-all duration-200" />
                      <text x="340" y="182" textAnchor="middle" fill={hoveredStation === "decisions" ? "#000000" : "#0D1B2A"} fontSize="13.5" fontFamily="inherit" fontWeight={hoveredStation === "decisions" ? 600 : 500} className="transition-all duration-200">
                        Decisions
                      </text>
                    </g>
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
