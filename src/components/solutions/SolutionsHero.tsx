"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page (/ai-solutions)
 * HERO SECTION (#111312 Dark Graphite Editorial)
 * 
 * Bespoke Architectural Line-Art Illustration:
 * Specific Concept: "Multi-Tier Production Enterprise AI Systems Architecture"
 * 
 * Artistic Direction:
 * - Exact same architectural line-art visual language as approved AI Business Transformation hero.
 * - Refined architectural off-white lines (#F5F7F6), dark graphite negative space (#111312), and muted gold system core accents (#C9A35B).
 * - Complete, recognizable systems architect reviewing a structured 3-tier enterprise production system:
 *   Tier 01 (Base): Enterprise Core & Systems Infrastructure (ERP, CRM, Data Warehouse)
 *   Tier 02 (Middle): Private Knowledge Retrieval & Semantic Reasoning Layer
 *   Tier 03 (Top): Intelligent Agent Mesh & Workflow Orchestration (Muted Gold #C9A35B focal core)
 * - Grounded vertical architectural risers, bidirectional data pipeline spine, and high-availability execution gateway.
 * - Zero AI glowing brains, zero floating particles, zero fake HUD dashboards.
 * - 50/50 editorial split matching AI Business Transformation hero layout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SolutionsHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function SolutionsHero({ onOpenDiscoveryModal }: SolutionsHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Enterprise AI Solutions Hero");
    } else {
      window.location.href = "/contact";
    }
  };

  // Coordinated Restrained Timings (Sequence: illustration -> eyebrow -> H1 masked -> body -> CTA)
  const illustrationDelay = isMobile ? 0.05 : 0.08;
  const eyebrowDelay = isMobile ? 0.14 : 0.20;
  const h1Line1Delay = isMobile ? 0.20 : 0.28;
  const h1Line2Delay = isMobile ? 0.26 : 0.36;
  const h1Line3Delay = isMobile ? 0.32 : 0.44;
  const h1Duration = isMobile ? 0.35 : 0.55;

  const copyDelay = isMobile ? 0.38 : 0.52;
  const copyDuration = isMobile ? 0.30 : 0.40;

  const ctaDelay = isMobile ? 0.44 : 0.60;
  const ctaDuration = isMobile ? 0.30 : 0.35;

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[58px] lg:pt-[62px]">
      
      {/* ========================================================================= */}
      {/* MAIN HERO SECTION (EDITORIAL SPLIT: 50/50 | CONTROLLED HEIGHT ~620–680px)   */}
      {/* Matching AI Business Transformation hero spacing, padding and alignment     */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            
            {/* ===================================================================== */}
            {/* LEFT COLUMN: ARCHITECTURAL LINE-ART ILLUSTRATION (50%)                */}
            {/* Bespoke enterprise systems architecture visual in true line-art style */}
            {/* ===================================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: transitionEase, delay: illustrationDelay }}
              className="lg:col-span-6 order-1 lg:order-1 flex items-center justify-center lg:justify-start -mt-1 sm:-mt-3 lg:-mt-5 xl:-mt-7"
            >
              <div className="relative w-full max-w-[300px] min-[390px]:max-w-[330px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[660px] xl:max-w-[720px] aspect-[520/430] flex items-center justify-center select-none pointer-events-none">
                
                {/* Custom Editorial Line-Art SVG Illustration (Responsive preserveAspectRatio) */}
                <svg
                  viewBox="0 0 520 430"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full max-h-full max-w-full"
                  aria-label="Editorial illustration of enterprise AI systems architecture, agent mesh orchestration, and private data layer integration"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL GROUNDING BASELINE & DATUM                   */}
                  {/* ------------------------------------------------------------- */}
                  <line
                    x1="25"
                    y1="385"
                    x2="495"
                    y2="385"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1.4"
                  />
                  {/* Ground Datum Tick Marks */}
                  <line x1="85" y1="385" x2="85" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="165" y1="385" x2="165" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="245" y1="385" x2="245" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="325" y1="385" x2="325" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="405" y1="385" x2="405" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="485" y1="385" x2="485" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                  {/* Vertical Elevation Datum (Left Ruler) */}
                  <line x1="35" y1="110" x2="35" y2="385" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="31" y1="140" x2="35" y2="140" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="31" y1="235" x2="35" y2="235" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="31" y1="330" x2="35" y2="330" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. THE ENTERPRISE SYSTEMS ARCHITECT (Left)                    */}
                  {/* ------------------------------------------------------------- */}
                  {/* Systems Drafting / Architecture Review Stand */}
                  <polygon
                    points="60,295 125,295 132,302 67,302"
                    stroke="#F5F7F6"
                    strokeOpacity="0.65"
                    strokeWidth="1.3"
                    fill="#151817"
                  />
                  <line x1="68" y1="302" x2="68" y2="385" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.3" />
                  <line x1="124" y1="302" x2="124" y2="385" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.3" />
                  {/* Cross-Brace Support */}
                  <line x1="68" y1="330" x2="124" y2="375" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="124" y1="330" x2="68" y2="375" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />

                  {/* Systems Folio / Architecture Blueprint on Stand */}
                  <polygon
                    points="76,290 110,284 118,294 84,295"
                    stroke="#F5F7F6"
                    strokeOpacity="0.75"
                    strokeWidth="1.2"
                    fill="#111312"
                  />

                  {/* Human Figure Silhouette (Crisp, Architectural Profile) */}
                  {/* Head */}
                  <circle
                    cx="96"
                    cy="188"
                    r="13"
                    stroke="#F5F7F6"
                    strokeWidth="1.4"
                    strokeOpacity="0.9"
                    fill="#111312"
                  />
                  {/* Collar / Lapel */}
                  <path
                    d="M 89 201 L 96 213 L 103 201"
                    stroke="#F5F7F6"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />
                  {/* Shoulders & Jacket Contour */}
                  <path
                    d="M 75 220 C 78 206, 88 202, 96 202 C 104 202, 114 206, 117 220 L 119 285 L 73 285 Z"
                    stroke="#F5F7F6"
                    strokeWidth="1.4"
                    strokeOpacity="0.85"
                    fill="#111312"
                  />
                  {/* Jacket Seam */}
                  <line
                    x1="96"
                    y1="213"
                    x2="96"
                    y2="285"
                    stroke="#F5F7F6"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                  />
                  {/* Right Arm Extended with Precision Architectural Stylus */}
                  <path
                    d="M 114 222 L 138 238 L 152 240"
                    stroke="#F5F7F6"
                    strokeWidth="1.4"
                    strokeOpacity="0.85"
                  />
                  {/* Architect's Stylus */}
                  <line
                    x1="152"
                    y1="240"
                    x2="172"
                    y2="242"
                    stroke="#C9A35B"
                    strokeWidth="1.4"
                    strokeOpacity="0.8"
                  />
                  {/* Architecture Bus Alignment Ray into Middle Tier */}
                  <line
                    x1="172"
                    y1="242"
                    x2="202"
                    y2="246"
                    stroke="#C9A35B"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    strokeDasharray="2 2"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. MULTI-TIER ENTERPRISE SYSTEMS ARCHITECTURE                 */}
                  {/* Isometric layered planes representing enterprise system tiers  */}
                  {/* ------------------------------------------------------------- */}

                  {/* TIER 01: BASE INFRASTRUCTURE & ENTERPRISE CORE (y ~320–355)   */}
                  <g id="solutions-tier-01-core">
                    {/* Isometric Base Plane */}
                    <polygon
                      points="160,325 365,295 470,330 265,360"
                      stroke="#F5F7F6"
                      strokeOpacity="0.75"
                      strokeWidth="1.4"
                      fill="#151817"
                    />
                    {/* Ground Support Stanchions down to Baseline */}
                    <line x1="160" y1="325" x2="160" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                    <line x1="265" y1="360" x2="265" y2="385" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.2" />
                    <line x1="470" y1="330" x2="470" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />

                    {/* Enterprise Partition A: ERP & Systems of Record */}
                    <polygon
                      points="185,326 240,318 265,335 210,343"
                      stroke="#F5F7F6"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                      fill="#111312"
                    />
                    {/* Partition A Internal Bus Lines */}
                    <line x1="195" y1="328" x2="235" y2="322" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="202" y1="335" x2="248" y2="328" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                    {/* Enterprise Partition B: CRM & Operational Data Lake */}
                    <polygon
                      points="275,313 350,302 385,322 310,333"
                      stroke="#F5F7F6"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                      fill="#111312"
                    />
                    {/* Partition B Internal Bus Lines */}
                    <line x1="290" y1="316" x2="345" y2="308" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="300" y1="323" x2="360" y2="314" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                    {/* Enterprise Partition C: Private Cloud & Security Boundary */}
                    <polygon
                      points="375,299 430,291 455,308 400,316"
                      stroke="#F5F7F6"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                      fill="#111312"
                    />
                  </g>

                  {/* TIER 02: PRIVATE KNOWLEDGE & RETRIEVAL MESH (y ~220–255)       */}
                  <g id="solutions-tier-02-knowledge">
                    {/* Isometric Middle Plane */}
                    <polygon
                      points="180,230 365,202 460,234 275,262"
                      stroke="#F5F7F6"
                      strokeOpacity="0.8"
                      strokeWidth="1.4"
                      fill="#151817"
                    />

                    {/* Vertical Interconnect Columns between Tier 01 and Tier 02 */}
                    <line x1="180" y1="230" x2="160" y2="325" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="275" y1="262" x2="265" y2="360" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" strokeDasharray="3 3" />
                    <line x1="460" y1="234" x2="470" y2="330" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="365" y1="202" x2="365" y2="295" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Semantic Vector & Context Indexing Grid Lines */}
                    <line x1="210" y1="234" x2="395" y2="206" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                    <line x1="235" y1="243" x2="420" y2="215" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                    <line x1="290" y1="218" x2="350" y2="251" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="340" y1="210" x2="400" y2="243" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />

                    {/* Semantic Retrieval Gateway Nodes */}
                    <circle cx="280" cy="235" r="4" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="280" cy="235" r="1.6" fill="#F5F7F6" fillOpacity="0.75" />

                    <circle cx="360" cy="223" r="4" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="360" cy="223" r="1.6" fill="#F5F7F6" fillOpacity="0.75" />
                  </g>

                  {/* TIER 03: INTELLIGENT AGENT MESH & ORCHESTRATION (GOLD FOCAL #C9A35B) */}
                  <g id="solutions-tier-03-agent-mesh">
                    {/* Isometric Upper Plane */}
                    <polygon
                      points="200,135 365,110 445,138 280,163"
                      stroke="#F5F7F6"
                      strokeOpacity="0.9"
                      strokeWidth="1.5"
                      fill="#111312"
                    />

                    {/* Gold Highlighted Perimeter on Production Core (#C9A35B) */}
                    <line x1="200" y1="135" x2="365" y2="110" stroke="#C9A35B" strokeWidth="2.2" />
                    <line x1="365" y1="110" x2="445" y2="138" stroke="#C9A35B" strokeWidth="2" />
                    <line x1="445" y1="138" x2="280" y2="163" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.6" />
                    <line x1="280" y1="163" x2="200" y2="135" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.6" />

                    {/* Vertical Columns linking Tier 02 to Tier 03 */}
                    <line x1="200" y1="135" x2="180" y2="230" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1.1" strokeDasharray="3 3" />
                    <line x1="280" y1="163" x2="275" y2="262" stroke="#C9A35B" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="445" y1="138" x2="460" y2="234" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1.1" strokeDasharray="3 3" />
                    <line x1="365" y1="110" x2="365" y2="202" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Primary Agent Orchestration Gateway (Central Dual Beacon) */}
                    <circle
                      cx="320"
                      cy="137"
                      r="8"
                      stroke="#C9A35B"
                      strokeWidth="1.6"
                      fill="#111312"
                    />
                    <circle
                      cx="320"
                      cy="137"
                      r="3.2"
                      fill="#C9A35B"
                    />
                    {/* Selection Target Ring */}
                    <circle
                      cx="320"
                      cy="137"
                      r="13"
                      stroke="#C9A35B"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />

                    {/* Satellite Agentic Nodes in Mesh */}
                    {/* Node Left */}
                    <circle cx="250" cy="144" r="4.5" stroke="#C9A35B" strokeWidth="1.3" fill="#111312" />
                    <circle cx="250" cy="144" r="1.8" fill="#C9A35B" />
                    {/* Node Right */}
                    <circle cx="390" cy="128" r="4.5" stroke="#C9A35B" strokeWidth="1.3" fill="#111312" />
                    <circle cx="390" cy="128" r="1.8" fill="#C9A35B" />

                    {/* Inter-Agent Coordination Trajectory Vectors */}
                    <line x1="250" y1="144" x2="320" y2="137" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.3" strokeDasharray="3 3" />
                    <line x1="320" y1="137" x2="390" y2="128" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.3" strokeDasharray="3 3" />
                  </g>

                  {/* ------------------------------------------------------------- */}
                  {/* 4. CENTRAL BIDIRECTIONAL DATA SPINE & EXECUTION PIPELINE      */}
                  {/* Real-time telemetry connecting top orchestrator down to core  */}
                  {/* ------------------------------------------------------------- */}

                  {/* Main Vertical Production Spine */}
                  <line
                    x1="320"
                    y1="137"
                    x2="320"
                    y2="330"
                    stroke="#C9A35B"
                    strokeOpacity="0.7"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Execution Feedback Node at Base */}
                  <circle
                    cx="320"
                    cy="330"
                    r="5"
                    stroke="#C9A35B"
                    strokeWidth="1.4"
                    fill="#111312"
                  />
                  <circle
                    cx="320"
                    cy="330"
                    r="2.2"
                    fill="#C9A35B"
                  />

                  {/* Upward Telemetry Arc from Core back into Systems Architect */}
                  <path
                    d="M 320 330 C 270 370, 150 350, 110 260"
                    stroke="#F5F7F6"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />

                  {/* Subtle Secondary Architectural Coordinate Grids */}
                  <line x1="160" y1="325" x2="495" y2="325" stroke="#F5F7F6" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="180" y1="230" x2="495" y2="230" stroke="#F5F7F6" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="200" y1="135" x2="495" y2="135" stroke="#C9A35B" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 4" />
                </svg>

              </div>
            </motion.div>

            {/* ===================================================================== */}
            {/* RIGHT COLUMN: EDITORIAL MASTHEAD COPY & COMPACT CTA (50%)              */}
            {/* Exactly matching AI Business Transformation hero typography & mobile  */}
            {/* ===================================================================== */}
            <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-4.5 lg:space-y-5">
              
              {/* 1. Eyebrow Reveal with Muted Gold Dash */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
                className="inline-flex items-center gap-2.5 text-[12.5px] sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>AI Solutions / Use Cases</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (58–66px Desktop / 36–42px Mobile) */}
              <h1
                aria-label="Practical AI solutions for real business needs."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  Practical AI solutions for real business needs.
                </span>

                {/* Mobile Line Structure (36–42px with natural wrapping) */}
                <div className="sm:hidden space-y-0.5" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      className="block font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      Practical AI solutions
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      for real
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      business needs.
                    </motion.span>
                  </div>
                </div>

                {/* Desktop Line Structure (Controlled 58–66px, line-height 1.02) */}
                <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      style={{ fontSize: "clamp(46px, 4.3vw, 66px)", lineHeight: 1.02 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      Practical AI solutions
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      style={{ fontSize: "clamp(46px, 4.3vw, 66px)", lineHeight: 1.02 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      for real business needs.
                    </motion.span>
                  </div>
                </div>
              </h1>

              {/* 3. Supporting Description Fade (Clear & Readable: 18–19px Desktop / 16–17px Mobile) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: copyDuration, ease: transitionEase, delay: copyDelay }}
                className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[18.5px] text-[#AEB3AF] max-w-[620px] lg:max-w-[660px] leading-[1.54] font-normal tracking-[-0.005em]"
              >
                From intelligent automation to connected business systems, we design and build AI solutions that address real operational challenges.
              </motion.p>

              {/* 4. Single Focused CTA Button (Tonal transition only, zero arrows, zero glow/scale) */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ctaDuration, ease: transitionEase, delay: ctaDelay }}
                className="pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-8 sm:px-10 text-[15px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none"
                  aria-label="Book a Discovery Call"
                >
                  Book a Discovery Call
                </button>
              </motion.div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
