"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page (/framework)
 * HERO SECTION (#111312 Dark Graphite Editorial)
 * 
 * Bespoke Architectural Line-Art Illustration:
 * Specific Concept: "The 6-Stage Transformation Lifecycle & Continuous Refinement Loop"
 * 
 * Artistic Direction:
 * - Exact same architectural line-art visual language as approved AI Business Transformation hero.
 * - Refined architectural off-white lines (#F5F7F6), dark graphite negative space (#111312), and muted gold milestone accents (#C9A35B).
 * - Complete, recognizable executive methodology architect observing a 6-stage ascending transformation lifecycle.
 * - 6 sequential structural stages:
 *   01. Operational Reality & Strategy
 *   02. High-Impact Opportunity Prioritization
 *   03. Systems & Data Architecture
 *   04. Production Engineering & Build (Muted Gold #C9A35B focal milestone)
 *   05. Organizational Enablement & Adoption
 *   06. Continuous Governance & Telemetry Refinement
 * - Continuous iterative feedback loop returning from Stage 06 back to Stage 01, embodying:
 *   "Transformation is continuous, not a one-time project."
 * - Zero AI glowing brains, zero floating particles, zero fake HUD dashboards.
 * - 50/50 editorial split matching AI Business Transformation hero layout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface FrameworkHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function FrameworkHero({ onOpenDiscoveryModal }: FrameworkHeroProps) {
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
      onOpenDiscoveryModal("AI Transformation Framework Hero");
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
            {/* Bespoke 6-stage lifecycle visual in true architectural style          */}
            {/* ===================================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: transitionEase, delay: illustrationDelay }}
              className="lg:col-span-6 order-1 lg:order-1 flex items-center justify-center lg:justify-start -mt-1 sm:-mt-3 lg:-mt-5 xl:-mt-7"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[660px] xl:max-w-[720px] aspect-[520/430] flex items-center justify-center select-none pointer-events-none">
                
                {/* Custom Editorial Line-Art SVG Illustration (Responsive preserveAspectRatio) */}
                <svg
                  viewBox="0 0 520 430"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full max-h-full max-w-full"
                  aria-label="Editorial illustration of the Aiveeno 6-stage AI transformation consulting framework and continuous lifecycle"
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
                  <line x1="160" y1="385" x2="160" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="235" y1="385" x2="235" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="310" y1="385" x2="310" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="385" y1="385" x2="385" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="460" y1="385" x2="460" y2="391" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                  {/* Vertical Datum Ruler (Left Boundary) */}
                  <line x1="35" y1="120" x2="35" y2="385" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="31" y1="140" x2="35" y2="140" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="31" y1="200" x2="35" y2="200" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="31" y1="260" x2="35" y2="260" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="31" y1="320" x2="35" y2="320" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. THE TRANSFORMATION ARCHITECT / DIRECTOR (Left)              */}
                  {/* ------------------------------------------------------------- */}
                  {/* Consultation Stand / Drafting Plinth */}
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

                  {/* Folio / Methodology Ledger on Stand */}
                  <polygon
                    points="76,290 108,284 116,294 84,295"
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
                  {/* Shoulders & Jacket Silhouette */}
                  <path
                    d="M 75 220 C 78 206, 88 202, 96 202 C 104 202, 114 206, 117 220 L 119 285 L 73 285 Z"
                    stroke="#F5F7F6"
                    strokeWidth="1.4"
                    strokeOpacity="0.85"
                    fill="#111312"
                  />
                  {/* Jacket Center Seam */}
                  <line
                    x1="96"
                    y1="213"
                    x2="96"
                    y2="285"
                    stroke="#F5F7F6"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                  />
                  {/* Right Arm Extended with Fine Architect's Pointer */}
                  <path
                    d="M 114 222 L 136 242 L 148 244"
                    stroke="#F5F7F6"
                    strokeWidth="1.4"
                    strokeOpacity="0.85"
                  />
                  {/* Architect's Pointer / Stylus directed at lifecycle */}
                  <line
                    x1="148"
                    y1="244"
                    x2="168"
                    y2="246"
                    stroke="#C9A35B"
                    strokeWidth="1.4"
                    strokeOpacity="0.8"
                  />
                  {/* Fine Alignment Ray to Stage 1 & 2 */}
                  <line
                    x1="168"
                    y1="246"
                    x2="198"
                    y2="260"
                    stroke="#C9A35B"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    strokeDasharray="2 2"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. THE 6-STAGE ARCHITECTURAL TRANSFORMATION LIFECYCLE         */}
                  {/* Ascending structural platforms with precision engineering     */}
                  {/* ------------------------------------------------------------- */}

                  {/* STAGE 01: STRATEGY & REALITY (Foundation Platform) */}
                  <g id="framework-stage-01">
                    {/* Platform Base */}
                    <polygon
                      points="145,340 190,325 210,337 165,352"
                      stroke="#F5F7F6"
                      strokeOpacity="0.7"
                      strokeWidth="1.3"
                      fill="#151817"
                    />
                    {/* Ground Support Stanchions */}
                    <line x1="165" y1="352" x2="165" y2="385" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.2" />
                    <line x1="210" y1="337" x2="210" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                    {/* Stage Beacon Node */}
                    <circle cx="178" cy="338" r="4.5" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="178" cy="338" r="1.8" fill="#F5F7F6" fillOpacity="0.7" />
                    {/* Architectural Stage Label Bar */}
                    <line x1="156" y1="344" x2="170" y2="339" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1" />
                  </g>

                  {/* STAGE 02: VALUE & OPPORTUNITY PRIORITIZATION */}
                  <g id="framework-stage-02">
                    {/* Platform Base */}
                    <polygon
                      points="200,295 245,280 265,292 220,307"
                      stroke="#F5F7F6"
                      strokeOpacity="0.7"
                      strokeWidth="1.3"
                      fill="#151817"
                    />
                    {/* Structural Uprights */}
                    <line x1="220" y1="307" x2="220" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Stage Beacon Node */}
                    <circle cx="233" cy="293" r="4.5" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="233" cy="293" r="1.8" fill="#F5F7F6" fillOpacity="0.7" />
                    {/* Internal Matrix Lines */}
                    <line x1="212" y1="298" x2="238" y2="289" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="222" y1="302" x2="248" y2="293" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  </g>

                  {/* STAGE 03: SYSTEMS & DATA ARCHITECTURE */}
                  <g id="framework-stage-03">
                    {/* Platform Base */}
                    <polygon
                      points="255,250 300,235 320,247 275,262"
                      stroke="#F5F7F6"
                      strokeOpacity="0.75"
                      strokeWidth="1.3"
                      fill="#151817"
                    />
                    {/* Structural Guide to Base */}
                    <line x1="275" y1="262" x2="275" y2="385" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Stage Beacon Node */}
                    <circle cx="288" cy="248" r="4.5" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="288" cy="248" r="1.8" fill="#F5F7F6" fillOpacity="0.7" />
                    {/* Architectural Blueprint Lines */}
                    <line x1="267" y1="253" x2="293" y2="244" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                    <line x1="277" y1="257" x2="303" y2="248" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                  </g>

                  {/* STAGE 04: PRODUCTION ENGINEERING & BUILD (GOLD FOCAL MILESTONE #C9A35B) */}
                  <g id="framework-stage-04-production-focus">
                    {/* Elevated Foundation Block */}
                    <polygon
                      points="310,205 365,188 388,202 333,219"
                      stroke="#F5F7F6"
                      strokeOpacity="0.9"
                      strokeWidth="1.5"
                      fill="#111312"
                    />
                    {/* Gold Highlighted Architectural Perimeter */}
                    <line x1="310" y1="205" x2="365" y2="188" stroke="#C9A35B" strokeWidth="2.2" />
                    <line x1="365" y1="188" x2="388" y2="202" stroke="#C9A35B" strokeWidth="2" />
                    <line x1="388" y1="202" x2="333" y2="219" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.6" />
                    <line x1="333" y1="219" x2="310" y2="205" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.6" />

                    {/* Gold Plumb Line to Ground Datum */}
                    <line
                      x1="350"
                      y1="210"
                      x2="350"
                      y2="385"
                      stroke="#C9A35B"
                      strokeOpacity="0.45"
                      strokeWidth="1.2"
                      strokeDasharray="2 3"
                    />

                    {/* Primary Production Delivery Beacon Node */}
                    <circle
                      cx="350"
                      cy="204"
                      r="7.5"
                      stroke="#C9A35B"
                      strokeWidth="1.6"
                      fill="#111312"
                    />
                    <circle
                      cx="350"
                      cy="204"
                      r="3.2"
                      fill="#C9A35B"
                    />
                    {/* Outer Target Ring */}
                    <circle
                      cx="350"
                      cy="204"
                      r="12"
                      stroke="#C9A35B"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />

                    {/* Internal Engineering Core Hatches */}
                    <line x1="325" y1="209" x2="355" y2="199" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.2" />
                    <line x1="335" y1="213" x2="368" y2="203" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1" />
                  </g>

                  {/* STAGE 05: ORGANIZATIONAL ADOPTION & ENABLEMENT */}
                  <g id="framework-stage-05">
                    {/* Platform Base */}
                    <polygon
                      points="375,160 420,145 440,157 395,172"
                      stroke="#F5F7F6"
                      strokeOpacity="0.75"
                      strokeWidth="1.3"
                      fill="#151817"
                    />
                    {/* Structural Guide to Base */}
                    <line x1="395" y1="172" x2="395" y2="385" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Stage Beacon Node */}
                    <circle cx="408" cy="158" r="4.5" stroke="#F5F7F6" strokeWidth="1.3" fill="#111312" />
                    <circle cx="408" cy="158" r="1.8" fill="#F5F7F6" fillOpacity="0.7" />
                    {/* Alignment Rules */}
                    <line x1="387" y1="163" x2="413" y2="154" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                    <line x1="397" y1="167" x2="423" y2="158" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                  </g>

                  {/* STAGE 06: CONTINUOUS GOVERNANCE & REFINEMENT (Summit Milestone) */}
                  <g id="framework-stage-06">
                    {/* Summit Platform */}
                    <polygon
                      points="430,120 475,105 495,117 450,132"
                      stroke="#F5F7F6"
                      strokeOpacity="0.8"
                      strokeWidth="1.4"
                      fill="#151817"
                    />
                    {/* Structural Vertical Column */}
                    <line x1="450" y1="132" x2="450" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Stage Beacon Node */}
                    <circle cx="463" cy="118" r="5" stroke="#F5F7F6" strokeWidth="1.4" fill="#111312" />
                    <circle cx="463" cy="118" r="2.2" fill="#F5F7F6" fillOpacity="0.85" />
                    {/* Crown Indicator */}
                    <line x1="458" y1="112" x2="468" y2="112" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1" />
                  </g>

                  {/* ------------------------------------------------------------- */}
                  {/* 4. LIFECYCLE PROGRESSION SPINE & CONTINUOUS CLOSED-LOOP       */}
                  {/* Connecting all 6 stages and returning to strategic datum      */}
                  {/* ------------------------------------------------------------- */}

                  {/* Forward Progression Trajectory Spine (Stages 1 through 6) */}
                  <path
                    d="M 178 338 L 233 293 L 288 248 L 350 204 L 408 158 L 463 118"
                    stroke="#F5F7F6"
                    strokeOpacity="0.65"
                    strokeWidth="1.5"
                  />

                  {/* Inter-stage Connector Links */}
                  <line x1="178" y1="338" x2="233" y2="293" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="233" y1="293" x2="288" y2="248" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="288" y1="248" x2="350" y2="204" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.4" />
                  <line x1="350" y1="204" x2="408" y2="158" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="408" y1="158" x2="463" y2="118" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />

                  {/* CONTINUOUS ITERATIVE REFINEMENT LOOP (Returning from Stage 6 back to Stage 1) */}
                  {/* Large Architectural Feedback Spline in Muted Gold (#C9A35B) */}
                  <path
                    d="M 463 118 C 480 60, 360 45, 260 55 C 170 65, 115 110, 145 280 C 150 305, 160 325, 178 338"
                    stroke="#C9A35B"
                    strokeOpacity="0.7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Re-entry Directional Chevron near Stage 1 */}
                  <polyline
                    points="170,326 178,338 182,328"
                    stroke="#C9A35B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Iterative Telemetry Feedback Beacon on Return Arc */}
                  <circle
                    cx="260"
                    cy="55"
                    r="4"
                    stroke="#C9A35B"
                    strokeWidth="1.3"
                    fill="#111312"
                  />
                  <circle
                    cx="260"
                    cy="55"
                    r="1.8"
                    fill="#C9A35B"
                  />

                  {/* Subtle Secondary Architectural Coordinate Grids */}
                  <line x1="178" y1="338" x2="495" y2="338" stroke="#F5F7F6" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="288" y1="248" x2="495" y2="248" stroke="#F5F7F6" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="350" y1="204" x2="495" y2="204" stroke="#C9A35B" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 4" />
                  <line x1="463" y1="118" x2="495" y2="118" stroke="#F5F7F6" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
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
                className="inline-flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Proprietary Methodology</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (64–68px Desktop / 40–44px Mobile | Max 3 Lines) */}
              <h1
                aria-label="A disciplined lifecycle for enterprise AI transformation."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  A disciplined lifecycle for enterprise AI transformation.
                </span>

                {/* Mobile Line Structure (40–44px, matching Transformation hero) */}
                <div className="sm:hidden space-y-0.5" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      A disciplined lifecycle
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      for enterprise AI
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      transformation.
                    </motion.span>
                  </div>
                </div>

                {/* Desktop Line Structure (Controlled 64–68px, line-height 1.02, max 3 lines) */}
                <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      style={{ fontSize: "clamp(46px, 4.3vw, 68px)", lineHeight: 1.02 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      A disciplined lifecycle
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      style={{ fontSize: "clamp(46px, 4.3vw, 68px)", lineHeight: 1.02 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      for enterprise AI
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      style={{ fontSize: "clamp(46px, 4.3vw, 68px)", lineHeight: 1.02 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      transformation.
                    </motion.span>
                  </div>
                </div>
              </h1>

              {/* 3. Supporting Copy Fade (Clear & Readable: 17.5–18.5px, width 620–660px) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: copyDuration, ease: transitionEase, delay: copyDelay }}
                className="text-[17.5px] sm:text-[18px] lg:text-[18.5px] text-[#AEB3AF] max-w-[620px] lg:max-w-[660px] leading-[1.52] font-normal tracking-[-0.005em]"
              >
                Start with business strategy and operational reality. Identify where automation creates defensible value. Engineer production-grade systems. Enable organizational adoption. Continuously refine.
              </motion.p>

              {/* 4. Single Focused CTA Button (Matching Transformation Hero Mobile & Desktop Behavior) */}
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
                  aria-label="Book a Discovery Call regarding our methodology"
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
