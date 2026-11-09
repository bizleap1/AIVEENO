"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 01
 * HERO SECTION (#111312 Dark Graphite Editorial)
 * 
 * Bespoke Architectural Line-Art Illustration:
 * Specific Concept: "AI Transformation Assessment — Evaluating Workflows, Systems & Data to Prioritize High-Value Opportunities."
 * 
 * Artistic Direction:
 * - Exact same architectural line-art visual language as approved AI Business Transformation hero.
 * - Refined architectural off-white lines (#F5F7F6), dark graphite negative space (#111312), and muted gold selection accents (#C9A35B).
 * - Complete, recognizable human analyst posture at an executive consultation desk.
 * - Scene 1: Analyst at desk with stylus examining assessment materials.
 * - Scene 2: 3 tangible diagnostic documents resting flat on desk:
 *   1. Workflows Diagnostic Sheet (under analyst hand)
 *   2. Systems & Data Architecture Audit Matrix (midground)
 *   3. Selected High-Value Priority Opportunity (foreground, muted gold perimeter & beacon)
 * - Scene 3: Architectural Value vs. Feasibility evaluation matrix in background with optimal high-value plotted node and trajectory arc connecting to the prioritized sheet.
 * - Zero copied transformation staircases, zero fake HUDs, zero AI brain/tech clichés.
 * - 50/50 editorial split matching AI Business Transformation hero layout.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface AssessmentHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function AssessmentHero({ onOpenDiscoveryModal }: AssessmentHeroProps) {
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
      onOpenDiscoveryModal("AI Transformation Assessment Hero");
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
            {/* Bespoke assessment evaluation visual in true architectural style      */}
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
                  aria-label="Editorial illustration of AI Transformation Assessment examining workflows, systems and data to discover prioritized transformation opportunities"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL GROUNDING BASELINE                           */}
                  {/* ------------------------------------------------------------- */}
                  <line
                    x1="30"
                    y1="385"
                    x2="495"
                    y2="385"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1.4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. THE EXECUTIVE CONSULTING WORKSPACE DESK                    */}
                  {/* ------------------------------------------------------------- */}
                  {/* Isometric Desk Surface */}
                  <polygon
                    points="60,260 475,250 495,335 45,345"
                    stroke="#F5F7F6"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    fill="#111312"
                  />
                  {/* Front Beveled Edge Profile */}
                  <polygon
                    points="45,345 495,335 495,343 45,353"
                    stroke="#F5F7F6"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                    fill="#151817"
                  />
                  {/* Architectural Trestle Legs Grounded to Floor Baseline */}
                  <line
                    x1="65"
                    y1="353"
                    x2="65"
                    y2="385"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.4"
                  />
                  <line
                    x1="475"
                    y1="343"
                    x2="475"
                    y2="385"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.4"
                  />
                  {/* Stretcher Support Rail */}
                  <line
                    x1="65"
                    y1="375"
                    x2="475"
                    y2="368"
                    stroke="#F5F7F6"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. THE EXECUTIVE ANALYST / DIAGNOSTIC CONSULTANT              */}
                  {/* ------------------------------------------------------------- */}
                  {/* Studio Chair Silhouette */}
                  <path
                    d="M 50 260 C 45 220, 52 180, 62 165"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.3"
                  />
                  <line
                    x1="72"
                    y1="315"
                    x2="72"
                    y2="355"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.3"
                  />
                  <line
                    x1="72"
                    y1="355"
                    x2="48"
                    y2="385"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1.2"
                  />

                  {/* Analyst Head */}
                  <circle
                    cx="95"
                    cy="180"
                    r="14"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                    fill="#111312"
                  />
                  {/* Focused Downward Gaze Line */}
                  <line
                    x1="100"
                    y1="182"
                    x2="108"
                    y2="188"
                    stroke="#F5F7F6"
                    strokeOpacity="0.8"
                    strokeWidth="1.3"
                  />

                  {/* Collar & Neck Profile */}
                  <path
                    d="M 92 194 L 88 215"
                    stroke="#F5F7F6"
                    strokeOpacity="0.85"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M 98 194 L 102 215"
                    stroke="#F5F7F6"
                    strokeOpacity="0.85"
                    strokeWidth="1.4"
                  />

                  {/* Shoulders & Tailored Jacket (Attentive posture) */}
                  <path
                    d="M 72 225 C 85 210, 110 210, 122 225"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Spine Profile */}
                  <path
                    d="M 72 225 C 68 255, 70 285, 75 315"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Front Chest Line */}
                  <path
                    d="M 122 225 C 130 250, 128 275, 120 305"
                    stroke="#F5F7F6"
                    strokeOpacity="0.9"
                    strokeWidth="1.5"
                  />

                  {/* Left Arm & Hand (Anchoring Diagnostic Folio) */}
                  <line
                    x1="75"
                    y1="225"
                    x2="88"
                    y2="280"
                    stroke="#F5F7F6"
                    strokeOpacity="0.9"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="88"
                    y1="280"
                    x2="135"
                    y2="285"
                    stroke="#F5F7F6"
                    strokeOpacity="0.95"
                    strokeWidth="1.5"
                  />
                  {/* Hand anchored on Document 1 */}
                  <path
                    d="M 135 285 C 142 283, 150 283, 156 286 C 158 288, 156 291, 150 293 C 144 294, 138 292, 135 290"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.4"
                    fill="#111312"
                  />

                  {/* Right Arm & Hand (Holding Stylus Poised over Priority Document) */}
                  <line
                    x1="122"
                    y1="225"
                    x2="148"
                    y2="265"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  <line
                    x1="148"
                    y1="265"
                    x2="205"
                    y2="260"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Right Hand Contour */}
                  <path
                    d="M 205 260 C 213 256, 222 256, 227 259 C 229 262, 226 265, 219 267 L 205 265"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.4"
                    fill="#111312"
                  />
                  {/* Review Stylus pointing directly toward Priority Document */}
                  <line
                    x1="220"
                    y1="258"
                    x2="242"
                    y2="276"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. THREE ASSESSMENT DIAGNOSTIC DOCUMENTS ON THE DESK          */}
                  {/* ------------------------------------------------------------- */}
                  
                  {/* DOCUMENT 1: Workflows Diagnostic Sheet (Under Left Hand) */}
                  <g id="assessment-doc-workflows">
                    <polygon
                      points="130,270 195,265 210,320 145,326"
                      stroke="#F5F7F6"
                      strokeOpacity="0.75"
                      strokeWidth="1.3"
                      fill="#111312"
                    />
                    {/* Process Step 1 Box */}
                    <polygon
                      points="140,278 158,276 160,286 142,288"
                      stroke="#F5F7F6"
                      strokeOpacity="0.6"
                      strokeWidth="1"
                    />
                    {/* Process Connector Arrow */}
                    <line
                      x1="160"
                      y1="281"
                      x2="168"
                      y2="280"
                      stroke="#F5F7F6"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                    />
                    {/* Process Step 2 Box */}
                    <polygon
                      points="168,275 186,273 188,283 170,285"
                      stroke="#F5F7F6"
                      strokeOpacity="0.6"
                      strokeWidth="1"
                    />
                    {/* Internal Workflow diagnostic rules */}
                    <line x1="142" y1="296" x2="195" y2="291" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                    <line x1="145" y1="306" x2="200" y2="301" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  </g>

                  {/* DOCUMENT 2: Systems & Enterprise Data Audit Matrix (Midground) */}
                  <g id="assessment-doc-systems">
                    <polygon
                      points="215,263 290,257 308,312 233,319"
                      stroke="#F5F7F6"
                      strokeOpacity="0.65"
                      strokeWidth="1.3"
                      fill="#111312"
                    />
                    {/* Header bar */}
                    <polygon
                      points="265,261 285,259 288,266 268,268"
                      stroke="#F5F7F6"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                    />
                    {/* Comparative Matrix Rows */}
                    <line x1="228" y1="275" x2="292" y2="269" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="232" y1="286" x2="298" y2="280" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="236" y1="297" x2="302" y2="291" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                    {/* Column Divider */}
                    <line x1="260" y1="266" x2="270" y2="308" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />
                  </g>

                  {/* DOCUMENT 3: THE SELECTED HIGH-VALUE OPPORTUNITY (Foreground Highlight) */}
                  <g id="assessment-doc-selected-opportunity">
                    {/* Underlying Document Surface */}
                    <polygon
                      points="255,270 385,258 408,332 278,345"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.5"
                      fill="#111312"
                    />

                    {/* Muted Gold Perimeter Selection Highlight (#C9A35B) */}
                    <line x1="255" y1="270" x2="385" y2="258" stroke="#C9A35B" strokeWidth="2.2" />
                    <line x1="385" y1="258" x2="408" y2="332" stroke="#C9A35B" strokeWidth="2" />
                    <line x1="408" y1="332" x2="278" y2="345" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.5" />
                    <line x1="278" y1="345" x2="255" y2="270" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.5" />

                    {/* Quiet Priority Beacon Node on Selected Sheet */}
                    <circle
                      cx="362"
                      cy="275"
                      r="5"
                      stroke="#C9A35B"
                      strokeWidth="1.6"
                      fill="#111312"
                    />
                    <circle
                      cx="362"
                      cy="275"
                      r="2.2"
                      fill="#C9A35B"
                    />

                    {/* Document Content Rules on the Selected Priority Sheet */}
                    <line x1="278" y1="282" x2="345" y2="276" stroke="#C9A35B" strokeOpacity="0.85" strokeWidth="1.4" />
                    <line x1="282" y1="295" x2="378" y2="286" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.1" />
                    <line x1="286" y1="308" x2="385" y2="299" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1" />
                    <line x1="290" y1="321" x2="370" y2="313" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  </g>

                  {/* Stylus Target Ray into Priority Document */}
                  <line
                    x1="242"
                    y1="276"
                    x2="268"
                    y2="282"
                    stroke="#C9A35B"
                    strokeWidth="1.4"
                    strokeOpacity="0.7"
                    strokeDasharray="2 2"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 5. OPPORTUNITY EVALUATION MATRIX (VALUE VS. FEASIBILITY)      */}
                  {/* Background architectural quadrant plotting high-impact ROI    */}
                  {/* ------------------------------------------------------------- */}
                  
                  {/* Vertical Axis (Business Value) */}
                  <line
                    x1="310"
                    y1="205"
                    x2="310"
                    y2="85"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.3"
                  />
                  <polyline
                    points="307,92 310,85 313,92"
                    stroke="#F5F7F6"
                    strokeOpacity="0.6"
                    strokeWidth="1.2"
                  />

                  {/* Horizontal Axis (Implementation Feasibility) */}
                  <line
                    x1="310"
                    y1="205"
                    x2="470"
                    y2="205"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.3"
                  />
                  <polyline
                    points="463,202 470,205 463,208"
                    stroke="#F5F7F6"
                    strokeOpacity="0.6"
                    strokeWidth="1.2"
                  />

                  {/* Quadrant Divider Hairlines */}
                  <line
                    x1="310"
                    y1="145"
                    x2="460"
                    y2="145"
                    stroke="#F5F7F6"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="390"
                    y1="205"
                    x2="390"
                    y2="90"
                    stroke="#F5F7F6"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Evaluated Opportunity Nodes in Matrix */}
                  <circle
                    cx="345"
                    cy="175"
                    r="3"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                    fill="#111312"
                  />
                  <circle
                    cx="370"
                    cy="125"
                    r="3"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    fill="#111312"
                  />

                  {/* THE OPTIMAL HIGH-VALUE OPPORTUNITY NODE (High Value / High Feasibility) */}
                  <circle
                    cx="430"
                    cy="115"
                    r="5.5"
                    stroke="#C9A35B"
                    strokeWidth="1.8"
                    fill="#111312"
                  />
                  <circle
                    cx="430"
                    cy="115"
                    r="2.5"
                    fill="#C9A35B"
                  />
                  {/* Selection Ring */}
                  <circle
                    cx="430"
                    cy="115"
                    r="9"
                    stroke="#C9A35B"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Roadmap Trajectory Arc (Connecting Optimal Opportunity to Deliverable Sheet) */}
                  <path
                    d="M 430 115 C 460 170, 420 230, 362 275"
                    stroke="#C9A35B"
                    strokeOpacity="0.75"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Continuous Feedback Loop returning to Analyst */}
                  <path
                    d="M 310 95 C 240 85, 130 120, 95 165"
                    stroke="#F5F7F6"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
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
                <span>AI Transformation Assessment</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (64–68px Desktop / 40–44px Mobile | Max 3 Lines) */}
              <h1
                aria-label="Discover where AI can create the most value in your business."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  Discover where AI can create the most value in your business.
                </span>

                {/* Mobile Line Structure (disciplined 3-line scale matching Transformation hero) */}
                <div className="sm:hidden space-y-0.5" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      className="block font-sans font-medium text-[31px] min-[390px]:text-[34px] sm:text-[40px] text-[#F5F7F6] leading-[1.04]"
                    >
                      Discover where AI
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[31px] min-[390px]:text-[34px] sm:text-[40px] text-[#F5F7F6] leading-[1.04]"
                    >
                      can create the most value
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[31px] min-[390px]:text-[34px] sm:text-[40px] text-[#F5F7F6] leading-[1.04]"
                    >
                      in your business.
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
                      Discover where AI
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
                      can create the most value
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
                      in your business.
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
                A focused assessment of workflows, systems and data to identify practical opportunities and priorities for AI-led transformation.
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
                  aria-label="Discuss the AI Transformation Assessment"
                >
                  Discuss the AI Transformation Assessment
                </button>
              </motion.div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
