"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Flagship Service Page Hero: AI BUSINESS TRANSFORMATION
 * 
 * Accenture-Inspired Enterprise Editorial Architecture:
 * - Dark Premium Surface: #111312 (deep black negative space, zero purple, zero tech glows).
 * - Slim Contextual Service Sub-Navigation Strip (#161917) anchored beneath main navbar:
 *   Left label: "AI Business Transformation", Right tabs: What we do, Why transformation fails,
 *   Our approach, Assessment, Framework.
 *   Active state: ONLY thin muted-gold (#C9A45C) underline (no filled dark pills, no chunky boxes).
 * - Split Hero Layout (Left Custom Line-Art Illustration / Right Content).
 * - Left Side: Pure editorial line-art illustration communicating business transformation
 *   (human leadership & strategist, interconnected workflow planes, vector systems flow,
 *   strategic decision diamond, and radiating enterprise scale/value in large negative space).
 *   ZERO dashboard panels, ZERO KPI metrics, ZERO fake technical terminology.
 * - Right Side:
 *   - Eyebrow: "AI BUSINESS TRANSFORMATION" with muted gold dash (#C9A45C).
 *   - Headline (H1): "Transform how your business operates with AI." (Instrument Sans 500, 68–76px desktop, 42–46px mobile, line-height 0.98–1.02, max 3 lines).
 *   - Supporting copy: "Move beyond isolated AI tools and redesign workflows, systems and decision-making around measurable business value." (max-w-[580px]).
 *   - Single CTA: "Book a Discovery Call" (dark filled button, no arrow, no icon, subtle tonal shift hover).
 * - Hero Height: approximately 620–680px natural desktop height (no forced 100vh).
 * - Transition: Dark Hero (#111312) transitions into Light Surface (#EBEFED) in Section 02.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface TransformationHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function TransformationHero({
  onOpenDiscoveryModal,
}: TransformationHeroProps) {
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
      onOpenDiscoveryModal("AI Business Transformation Flagship Hero");
    } else {
      window.location.href = "/contact";
    }
  };

  // Restrained Editorial Reveal Timings (Sequence: illustration -> eyebrow -> H1 masked -> body -> CTA)
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
      {/* MAIN HERO SECTION (EDITORIAL SPLIT: 48/52 | CONTROLLED HEIGHT ~620–680px)  */}
      {/* Moved 50–70px upward: reduced excess top padding below navbar               */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            
            {/* ===================================================================== */}
            {/* LEFT COLUMN: CUSTOM EDITORIAL LINE-ART ILLUSTRATION (48–50%)          */}
            {/* Scaled +8–12% bigger & moved slightly upward for optimal balance      */}
            {/* Mobile: 220–260px high, first in mobile flow, zero hover simulation   */}
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
                  aria-label="Editorial illustration of enterprise business transformation through leadership, workflow redesign, and measurable business value destination"
                >
                  {/* Architectural Grounding Baseline */}
                  <line
                    x1="30"
                    y1="380"
                    x2="495"
                    y2="380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1.4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* SCENE 1: THE HUMAN STRATEGIST / CONSULTING LEADERSHIP (Left)   */}
                  {/* ------------------------------------------------------------- */}
                  
                  {/* Minimalist Strategy Table Plinth */}
                  <line
                    x1="65"
                    y1="310"
                    x2="155"
                    y2="310"
                    stroke="#F5F7F6"
                    strokeOpacity="0.65"
                    strokeWidth="1.4"
                  />
                  <line
                    x1="75"
                    y1="310"
                    x2="75"
                    y2="380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.3"
                  />
                  <line
                    x1="145"
                    y1="310"
                    x2="145"
                    y2="380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.3"
                  />

                  {/* Strategy Folio on Plinth */}
                  <polygon
                    points="85,305 118,298 126,309 93,310"
                    stroke="#F5F7F6"
                    strokeOpacity="0.75"
                    strokeWidth="1.3"
                  />

                  {/* Human Figure Silhouette (Line Art - Crisp & Defined) */}
                  {/* Head */}
                  <circle
                    cx="105"
                    cy="225"
                    r="13"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Torso & Jacket Posture */}
                  <path
                    d="M 105 238 L 105 315"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Shoulders */}
                  <path
                    d="M 88 256 C 96 244, 114 244, 122 256"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Left Arm Resting at Table */}
                  <path
                    d="M 88 256 L 80 305"
                    stroke="#F5F7F6"
                    strokeOpacity="0.9"
                    strokeWidth="1.5"
                  />
                  {/* Right Arm Gesturing Forward Towards Operating Model */}
                  <path
                    d="M 122 256 L 142 280 L 178 276"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  {/* Legs / Lower Posture to Baseline */}
                  <path
                    d="M 98 315 L 94 380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.85"
                    strokeWidth="1.45"
                  />
                  <path
                    d="M 112 315 L 116 380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.85"
                    strokeWidth="1.45"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* SCENE 2: INTERCONNECTED WORKFLOW PLANES & PROCESS GEOMETRY     */}
                  {/* ------------------------------------------------------------- */}
                  
                  {/* Workflow Stage 01: Perspective Operational Plane */}
                  <g>
                    {/* Top Surface */}
                    <polygon
                      points="180,250 230,225 275,242 225,267"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.6"
                    />
                    {/* Vertical Drop Volumes */}
                    <line x1="180" y1="250" x2="180" y2="268" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="225" y1="267" x2="225" y2="285" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="275" y1="242" x2="275" y2="260" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <polyline points="180,268 225,285 275,260" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    {/* Internal Process Alignment Hairline */}
                    <line x1="205" y1="238" x2="250" y2="255" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.25" />
                  </g>

                  {/* Systems Transfer Flow: Curved Bezier Connectors */}
                  <path
                    d="M 245 233 C 270 210, 275 195, 295 185"
                    stroke="#F5F7F6"
                    strokeOpacity="1"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M 225 285 C 265 295, 300 260, 315 220"
                    stroke="#F5F7F6"
                    strokeOpacity="0.5"
                    strokeWidth="1.3"
                    strokeDasharray="3 3"
                  />

                  {/* Workflow Stage 02: Elevated Operating Model Plane */}
                  <g>
                    {/* Top Surface */}
                    <polygon
                      points="295,180 350,152 400,170 345,198"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.65"
                    />
                    {/* Vertical Drop Volumes */}
                    <line x1="295" y1="180" x2="295" y2="200" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="345" y1="198" x2="345" y2="218" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="400" y1="170" x2="400" y2="190" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <polyline points="295,200 345,218 400,190" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    {/* Internal Geometric Cross-Axis */}
                    <line x1="322" y1="166" x2="372" y2="184" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.25" />
                    <line x1="320" y1="189" x2="375" y2="161" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.25" />
                  </g>

                  {/* ------------------------------------------------------------- */}
                  {/* SCENE 3: BUSINESS VALUE DESTINATION PLATFORM (Stage 03)        */}
                  {/* Cohesive architectural destination in same perspective system */}
                  {/* ------------------------------------------------------------- */}
                  
                  {/* Connector Vector into Destination State */}
                  <path
                    d="M 370 160 C 390 145, 395 135, 410 125"
                    stroke="#C9A45C"
                    strokeWidth="1.6"
                  />

                  {/* Stage 03 Perspective Destination Platform */}
                  <g>
                    {/* Destination Platform Surface */}
                    <polygon
                      points="390,118 445,90 495,108 440,136"
                      stroke="#F5F7F6"
                      strokeOpacity="1"
                      strokeWidth="1.65"
                    />
                    {/* Vertical Volume Drops */}
                    <line x1="390" y1="118" x2="390" y2="135" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="440" y1="136" x2="440" y2="153" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <line x1="495" y1="108" x2="495" y2="125" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    <polyline points="390,135 440,153 495,125" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.35" />
                    
                    {/* Destination Crown Top Edge (Muted Gold) */}
                    <line
                      x1="390"
                      y1="118"
                      x2="445"
                      y2="90"
                      stroke="#C9A45C"
                      strokeWidth="2.2"
                    />

                    {/* Integrated Target Value Milestone Node */}
                    <circle
                      cx="442"
                      cy="113"
                      r="4.5"
                      stroke="#C9A45C"
                      strokeWidth="1.6"
                      fill="#111312"
                    />
                    <circle
                      cx="442"
                      cy="113"
                      r="2"
                      fill="#C9A45C"
                    />
                  </g>

                  {/* Ascending Measurable Value Trajectory Arc (Terminates directly at destination node) */}
                  <path
                    d="M 230 260 C 310 250, 380 190, 442 113"
                    stroke="#C9A45C"
                    strokeOpacity="0.65"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Continuous Feedback Loop: Returning Telemetry Arc to Strategist */}
                  <path
                    d="M 440 145 C 385 240, 260 320, 155 305"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1.3"
                    strokeDasharray="4 4"
                  />
                </svg>

              </div>
            </motion.div>

            {/* ===================================================================== */}
            {/* RIGHT COLUMN: EDITORIAL MASTHEAD COPY & CTA (50–52%)                   */}
            {/* Tightened vertical rhythm ensures CTA is fully visible in 1st viewport */}
            {/* ===================================================================== */}
            <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-4.5 lg:space-y-5">
              
              {/* 1. Eyebrow Reveal with Muted Gold Dash */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
                className="inline-flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A45C] shrink-0" aria-hidden="true" />
                <span>AI Business Transformation</span>
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (64–68px Desktop / 40–44px Mobile | Max 3 Lines) */}
              <h1
                aria-label="Transform how your business operates with AI."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  Transform how your business operates with AI.
                </span>

                {/* Mobile Line Structure (40–44px) */}
                <div className="sm:hidden space-y-0.5" aria-hidden="true">
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line1Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      Transform how your
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      business operates
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[40px] min-[390px]:text-[42px] sm:text-[44px] text-[#F5F7F6] leading-[1.02]"
                    >
                      with AI.
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
                      Transform how your
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
                      business operates
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
                      with AI.
                    </motion.span>
                  </div>
                </div>
              </h1>

              {/* 3. Supporting Copy Fade (Clear & Readable: 18–19px, width 620–660px) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: copyDuration, ease: transitionEase, delay: copyDelay }}
                className="text-[17.5px] sm:text-[18px] lg:text-[18.5px] text-[#F0F2F1] max-w-[620px] lg:max-w-[660px] leading-[1.52] font-normal tracking-[-0.005em]"
              >
                Move beyond isolated AI tools and redesign workflows, systems and decision-making around measurable business value.
              </motion.p>

              {/* 4. Single Focused CTA (Fully Visible in 1st Viewport, Subtle Tonal Shift, No Scale/Lift/Glow) */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ctaDuration, ease: transitionEase, delay: ctaDelay }}
                className="pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A45C]/80 text-[#F5F7F6] px-8 sm:px-10 text-[15px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none"
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
