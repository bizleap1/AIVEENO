"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Assessment Page: Section 01
 * HERO SECTION (#111312 Dark Graphite Editorial)
 * 
 * Custom Editorial Scene: "BUSINESS PROFESSIONAL REVIEWING AND PRIORITIZING OPPORTUNITIES"
 * - Cohesive architectural scene: One professional seated at a clean desk viewed in three-quarter profile.
 * - Natural human anatomy: Visible shoulders, left arm resting on the desk holding a document,
 *   and right hand with evaluation stylus pointing directly at the selected opportunity.
 * - Three assessment documents grounded directly ON THE DESK surface:
 *   1. One sheet being actively reviewed under the left hand.
 *   2. One midground sheet with structured assessment lines.
 *   3. One clearly selected priority sheet highlighted in muted gold (#C9A35B).
 * - Zero floating papers, zero disconnected body parts, zero technical flowcharts or labels.
 * - Right Column: Eyebrow, H1, description, and compact CTA button preserved 100% as approved.
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

  // Coordinated Sequence: Desk -> Professional -> Documents -> Selected Gold Highlight -> H1 -> CTA
  const deskDelay = isMobile ? 0.05 : 0.08;
  const personDelay = isMobile ? 0.12 : 0.16;
  const docsDelay = isMobile ? 0.20 : 0.26;
  const goldSheetDelay = isMobile ? 0.28 : 0.36;

  const eyebrowDelay = isMobile ? 0.34 : 0.44;
  const h1Line1Delay = isMobile ? 0.40 : 0.50;
  const h1Line2Delay = isMobile ? 0.46 : 0.58;
  const h1Line3Delay = isMobile ? 0.52 : 0.66;
  const h1Duration = isMobile ? 0.35 : 0.55;

  const copyDelay = isMobile ? 0.58 : 0.74;
  const copyDuration = isMobile ? 0.30 : 0.40;

  const ctaDelay = isMobile ? 0.64 : 0.82;
  const ctaDuration = isMobile ? 0.30 : 0.35;

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[58px] lg:pt-[62px]">
      
      {/* ========================================================================= */}
      {/* MAIN HERO SECTION (EDITORIAL SPLIT: ~46% LEFT / ~54% RIGHT)                */}
      {/* Controlled height ~620–680px, no forced 100vh, CTA clearly above the fold  */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            
            {/* ===================================================================== */}
            {/* LEFT COLUMN: BESPOKE EDITORIAL SCENE (~46%)                           */}
            {/* Professional seated at desk reviewing documents & selecting priority  */}
            {/* Mobile: 220–250px high, order-1 (above text)                          */}
            {/* ===================================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-1 flex items-center justify-center lg:justify-start -mt-2 sm:-mt-4 lg:-mt-6 xl:-mt-8">
              <div className="relative w-full max-w-[360px] sm:max-w-[430px] md:max-w-[490px] lg:max-w-[560px] aspect-[540/400] h-[220px] sm:h-[250px] md:h-[280px] lg:h-auto flex items-center justify-center select-none pointer-events-none">
                
                {/* Bespoke Editorial Line-Art SVG: Reviewing & Prioritizing Opportunities */}
                <svg
                  viewBox="0 0 540 400"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full max-h-full max-w-full"
                  aria-label="Editorial illustration of a business professional seated at a desk reviewing assessment documents and selecting a prioritized opportunity"
                >
                  {/* Floor Horizon Reference */}
                  <line
                    x1="30"
                    y1="390"
                    x2="510"
                    y2="390"
                    stroke="#F5F7F6"
                    strokeOpacity="0.2"
                    strokeWidth="1.1"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 1. THE ARCHITECTURAL DESK (Solid, Grounded Work Surface)       */}
                  {/* ------------------------------------------------------------- */}
                  <motion.g
                    id="grounded-desk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: transitionEase, delay: deskDelay }}
                  >
                    {/* Desk Surface (Solid perspective table between y=230 and y=340) */}
                    <polygon
                      points="90,230 470,230 490,340 50,340"
                      stroke="#F5F7F6"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      fill="#111312"
                    />

                    {/* Desk Front Edge Profile */}
                    <line x1="50" y1="340" x2="490" y2="340" stroke="#F5F7F6" strokeOpacity="0.9" strokeWidth="1.6" />
                    <line x1="50" y1="348" x2="490" y2="348" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.2" />
                    <line x1="50" y1="340" x2="50" y2="348" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.2" />
                    <line x1="490" y1="340" x2="490" y2="348" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.2" />

                    {/* Desk Trestle Legs */}
                    <line x1="65" y1="348" x2="65" y2="390" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.3" />
                    <line x1="475" y1="348" x2="475" y2="390" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.3" />
                  </motion.g>

                  {/* ------------------------------------------------------------- */}
                  {/* 2. THE SEATED PROFESSIONAL (Attentive Reviewing Posture)       */}
                  {/* ------------------------------------------------------------- */}
                  <motion.g
                    id="seated-professional"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: transitionEase, delay: personDelay }}
                  >
                    {/* Architectural Studio Chair (Behind Figure) */}
                    <path
                      d="M 85 240 C 78 180, 85 140, 95 110 C 100 98, 112 95, 122 98"
                      stroke="#F5F7F6"
                      strokeOpacity="0.35"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M 82 250 L 74 330 L 68 390"
                      stroke="#F5F7F6"
                      strokeOpacity="0.25"
                      strokeWidth="1.2"
                    />

                    {/* Head & Hair Contour (Focused downward gaze towards desk papers) */}
                    <path
                      d="M 132 125 C 122 108, 128 88, 142 78 C 158 68, 180 72, 192 86"
                      stroke="#F5F7F6"
                      strokeOpacity="0.9"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 142 78 C 160 70, 190 75, 200 95 C 204 105, 202 115, 196 122"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.5"
                    />
                    {/* Forehead and Brow */}
                    <path
                      d="M 196 110 L 202 124 L 198 127"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    {/* Nose Bridge and Tip (Angle towards documents) */}
                    <path
                      d="M 198 127 L 210 142 L 203 146"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    {/* Lips & Sculpted Jawline */}
                    <path
                      d="M 203 146 C 201 152, 199 155, 203 160 C 199 166, 192 170, 184 173"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 184 173 C 172 176, 158 170, 152 158"
                      stroke="#F5F7F6"
                      strokeOpacity="0.85"
                      strokeWidth="1.4"
                    />
                    {/* Ear Contour */}
                    <path
                      d="M 154 136 C 150 130, 156 124, 161 129 C 163 133, 161 143, 155 146"
                      stroke="#F5F7F6"
                      strokeOpacity="0.8"
                      strokeWidth="1.3"
                    />
                    {/* Downcast Eye Line (Attentively reading papers) */}
                    <line
                      x1="188"
                      y1="132"
                      x2="196"
                      y2="136"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.4"
                    />

                    {/* Neck and Collar */}
                    <path d="M 182 174 L 188 202" stroke="#F5F7F6" strokeOpacity="0.85" strokeWidth="1.4" />
                    <path d="M 142 145 L 136 195" stroke="#F5F7F6" strokeOpacity="0.85" strokeWidth="1.4" />
                    <path d="M 180 198 L 198 220 L 185 248" stroke="#F5F7F6" strokeOpacity="1" strokeWidth="1.6" />
                    <path d="M 172 208 L 160 236" stroke="#F5F7F6" strokeOpacity="0.75" strokeWidth="1.3" />

                    {/* Upper Body & Tailored Jacket (Leaning forward over desk) */}
                    <path
                      d="M 136 195 C 115 208, 102 232, 98 268 L 95 320"
                      stroke="#F5F7F6"
                      strokeOpacity="0.9"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M 188 202 C 210 215, 230 235, 238 262"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.6"
                    />

                    {/* LEFT ARM & HAND: Resting on the desk holding Document 1 */}
                    {/* Upper arm to elbow */}
                    <path d="M 98 268 L 115 305" stroke="#F5F7F6" strokeOpacity="0.9" strokeWidth="1.5" />
                    {/* Forearm lying on the desk */}
                    <path d="M 115 305 L 160 316 L 190 306" stroke="#F5F7F6" strokeOpacity="0.9" strokeWidth="1.5" />
                    {/* Left Hand Fingers anchored along the document edge */}
                    <path
                      d="M 190 306 C 200 302, 214 298, 226 295"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 192 310 C 202 306, 214 304, 224 301"
                      stroke="#F5F7F6"
                      strokeOpacity="0.85"
                      strokeWidth="1.3"
                    />

                    {/* RIGHT ARM & HAND: Extending forward with Review Stylus */}
                    {/* Shoulder to elbow */}
                    <path d="M 238 262 L 268 295" stroke="#F5F7F6" strokeOpacity="0.95" strokeWidth="1.6" />
                    {/* Forearm reaching forward over desk */}
                    <path d="M 268 295 L 320 285" stroke="#F5F7F6" strokeOpacity="0.95" strokeWidth="1.6" />
                    {/* Hand and Fingers holding stylus poised over selected document */}
                    <path
                      d="M 320 285 C 330 278, 342 272, 354 266"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 324 288 C 334 284, 346 280, 356 275"
                      stroke="#F5F7F6"
                      strokeOpacity="0.85"
                      strokeWidth="1.3"
                    />
                    {/* Review Stylus pointing directly toward Priority Document */}
                    <line
                      x1="332"
                      y1="288"
                      x2="376"
                      y2="252"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.6"
                    />
                  </motion.g>

                  {/* ------------------------------------------------------------- */}
                  {/* 3. TWO ASSESSMENT SHEETS GROUNDED DIRECTLY ON THE DESK         */}
                  {/* ------------------------------------------------------------- */}
                  <motion.g
                    id="desk-documents"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: transitionEase, delay: docsDelay }}
                  >
                    {/* SHEET 1: Actively Examined Document (Anchored by Left Hand) */}
                    <g id="examined-sheet-1">
                      <polygon
                        points="170,245 255,235 270,310 185,320"
                        stroke="#F5F7F6"
                        strokeOpacity="0.85"
                        strokeWidth="1.35"
                        fill="#111312"
                      />
                      {/* Document Structure Rules */}
                      <line x1="185" y1="255" x2="225" y2="250" stroke="#F5F7F6" strokeOpacity="0.55" strokeWidth="1.1" />
                      <line x1="188" y1="268" x2="250" y2="260" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                      <line x1="192" y1="280" x2="255" y2="272" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                      <line x1="196" y1="292" x2="245" y2="285" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                    </g>

                    {/* SHEET 2: Structured Review Matrix Sheet (Midground of Desk) */}
                    <g id="structured-sheet-2">
                      <polygon
                        points="240,225 355,215 375,280 260,290"
                        stroke="#F5F7F6"
                        strokeOpacity="0.7"
                        strokeWidth="1.3"
                        fill="#111312"
                      />
                      {/* Title block & Structured Matrix Lines */}
                      <polygon points="325,222 350,220 353,230 328,232" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                      <line x1="255" y1="242" x2="350" y2="232" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                      <line x1="260" y1="256" x2="358" y2="246" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                      <line x1="265" y1="270" x2="365" y2="260" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                      <line x1="295" y1="228" x2="305" y2="275" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />
                    </g>
                  </motion.g>

                  {/* ------------------------------------------------------------- */}
                  {/* 4. SHEET 3: THE SELECTED PRIORITY OPPORTUNITY (Foreground)     */}
                  {/* Grounded on the desk & highlighted in muted gold (#C9A35B)     */}
                  {/* ------------------------------------------------------------- */}
                  <motion.g
                    id="selected-gold-priority-sheet"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: transitionEase, delay: goldSheetDelay }}
                  >
                    {/* Underlying Document Surface on the Desk */}
                    <polygon
                      points="310,240 430,230 450,320 330,330"
                      stroke="#F5F7F6"
                      strokeOpacity="0.95"
                      strokeWidth="1.6"
                      fill="#111312"
                    />

                    {/* Muted Gold Selection Perimeter Highlight (#C9A35B) */}
                    {/* Top Highlight Edge */}
                    <line
                      x1="310"
                      y1="240"
                      x2="430"
                      y2="230"
                      stroke="#C9A35B"
                      strokeWidth="2.4"
                    />
                    {/* Right Highlight Edge */}
                    <line
                      x1="430"
                      y1="230"
                      x2="450"
                      y2="320"
                      stroke="#C9A35B"
                      strokeWidth="2.1"
                    />
                    {/* Bottom Edge Accent */}
                    <line
                      x1="450"
                      y1="320"
                      x2="330"
                      y2="330"
                      stroke="#C9A35B"
                      strokeOpacity="0.85"
                      strokeWidth="1.7"
                    />
                    {/* Left Edge Accent */}
                    <line
                      x1="330"
                      y1="330"
                      x2="310"
                      y2="240"
                      stroke="#C9A35B"
                      strokeOpacity="0.85"
                      strokeWidth="1.7"
                    />

                    {/* Quiet Priority Beacon Node on Selected Sheet */}
                    <circle
                      cx="405"
                      cy="255"
                      r="4.8"
                      stroke="#C9A35B"
                      strokeWidth="1.6"
                      fill="#111312"
                    />
                    <circle
                      cx="405"
                      cy="255"
                      r="2.2"
                      fill="#C9A35B"
                    />

                    {/* Document Content Rules on the Selected Priority Sheet */}
                    <line x1="335" y1="255" x2="385" y2="250" stroke="#C9A35B" strokeOpacity="0.85" strokeWidth="1.3" />
                    <line x1="340" y1="270" x2="425" y2="262" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.1" />
                    <line x1="345" y1="285" x2="430" y2="277" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1" />
                    <line x1="350" y1="300" x2="415" y2="294" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  </motion.g>

                  {/* Subtle Examination Ray between Stylus Tip and Priority Beacon */}
                  <line
                    x1="376"
                    y1="252"
                    x2="398"
                    y2="254"
                    stroke="#C9A35B"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                    strokeDasharray="2.5 2.5"
                  />
                </svg>

              </div>
            </div>

            {/* ===================================================================== */}
            {/* RIGHT COLUMN: EDITORIAL MASTHEAD COPY & COMPACT CTA (~55%)             */}
            {/* Retained exactly as approved, content-based auto width, no arrows     */}
            {/* ===================================================================== */}
            <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-4.5 lg:space-y-5 lg:pl-2 xl:pl-4">
              
              {/* 1. Eyebrow Reveal with Muted Gold Dash */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
                className="inline-flex items-center gap-2.5 text-[12.5px] sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>AI Transformation Assessment</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (54–64px Desktop / 36–42px Mobile) */}
              <h1
                aria-label="Discover where AI can create the most value in your business."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  Discover where AI can create the most value in your business.
                </span>

                {/* Mobile Line Structure (36–42px) */}
                <div className="sm:hidden space-y-0.5" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      className="block font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      Discover where AI
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      can create the most value
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      in your business.
                    </motion.span>
                  </div>
                </div>

                {/* Desktop Line Structure (Controlled 54–64px, line-height 1.04, max 3 lines) */}
                <div className="hidden sm:block space-y-0.5 lg:space-y-1" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      style={{ fontSize: "clamp(42px, 3.8vw, 62px)", lineHeight: 1.04 }}
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
                      style={{ fontSize: "clamp(42px, 3.8vw, 62px)", lineHeight: 1.04 }}
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
                      style={{ fontSize: "clamp(42px, 3.8vw, 62px)", lineHeight: 1.04 }}
                      className="block whitespace-nowrap font-sans font-medium text-[#F5F7F6] tracking-[-0.035em]"
                    >
                      in your business.
                    </motion.span>
                  </div>
                </div>
              </h1>

              {/* 3. Supporting Copy Fade (Clear & Readable: 18px, #AEB3AF, max-width ~580px) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: copyDuration, ease: transitionEase, delay: copyDelay }}
                className="text-[17px] sm:text-[17.5px] lg:text-[18px] text-[#AEB3AF] max-w-[580px] leading-[1.54] font-normal tracking-[-0.005em]"
              >
                A focused assessment of workflows, systems and data to identify practical opportunities and priorities for AI-led transformation.
              </motion.p>

              {/* 4. Single Focused CTA Button (Content-based auto width, restrained padding, no arrows, no lift) */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ctaDuration, ease: transitionEase, delay: ctaDelay }}
                className="pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-6 sm:px-7 text-[14px] sm:text-[14.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto max-w-fit text-center select-none"
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
