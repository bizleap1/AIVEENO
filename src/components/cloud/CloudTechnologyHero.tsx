"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud & Technology Overview Page (/cloud-technology)
 * HERO SECTION (#111312 Dark Graphite Editorial Surface)
 * 
 * Architectural Line-Art Visual Language:
 * - Bespoke Enterprise Cloud & Technology Architecture Illustration (Left 50%)
 * - Pure off-white architectural linework (#F5F7F6), dark graphite negative space (#111312),
 *   and subtle muted-gold core accents (#C9A35B).
 * - Zero AI glowing nodes, zero floating sparkles, zero fake HUD dashboards.
 * - Right Side Editorial Copy (50%):
 *   - Eyebrow: "CLOUD & TECHNOLOGY"
 *   - H1: "The technology behind transformation." (58–66px desktop / 36–42px mobile, Instrument Sans 500)
 *   - Description: "Modernize cloud environments, strengthen data foundations and build secure, scalable technology that supports evolving business needs."
 *   - Primary CTA: "Discuss Your Cloud Strategy" (tonal transition only, zero arrows/glow)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CloudTechnologyHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function CloudTechnologyHero({
  onOpenDiscoveryModal,
}: CloudTechnologyHeroProps) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
      onOpenDiscoveryModal("Cloud & Technology Strategy Consultation");
    } else {
      router.push("/contact");
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
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            
            {/* ===================================================================== */}
            {/* LEFT COLUMN: ARCHITECTURAL LINE-ART ILLUSTRATION (50%)                */}
            {/* Enterprise cloud infrastructure, data fabric & secure gateway topology */}
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
                  aria-label="Editorial illustration of enterprise cloud infrastructure, resilient multi-cloud architecture, and governed data foundations"
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
                  {/* 2. THE INFRASTRUCTURE & SYSTEMS ARCHITECT (Left)              */}
                  {/* ------------------------------------------------------------- */}
                  {/* Operations Review Station */}
                  <polygon
                    points="60,295 125,295 132,302 67,302"
                    stroke="#F5F7F6"
                    strokeOpacity="0.3"
                    strokeWidth="1.2"
                  />
                  <line x1="60" y1="295" x2="60" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                  <line x1="125" y1="295" x2="125" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                  
                  {/* Architecture Diagram Tablet / Interface on Table */}
                  <polygon
                    points="75,293 110,293 116,282 81,282"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.1"
                  />
                  <line x1="84" y1="288" x2="108" y2="288" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1" />

                  {/* Systems Architect Silhouette (Grounded Consulting Posture) */}
                  {/* Head */}
                  <circle cx="94" cy="232" r="10.5" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />
                  {/* Torso & Shoulder */}
                  <path
                    d="M84 256 C84 246, 104 246, 104 256 L107 295 L81 295 Z"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                  />
                  {/* Forward Arm pointing toward the cloud infrastructure topology */}
                  <path
                    d="M103 258 L122 274 L142 274"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. TIER 01: GOVERNED DATA FABRIC & LAKEHOUSE PLATFORM (Base)  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Base Enterprise Data Foundation Plinth */}
                  <polygon
                    points="160,360 470,360 488,342 178,342"
                    stroke="#F5F7F6"
                    strokeOpacity="0.3"
                    strokeWidth="1.2"
                  />
                  <line x1="160" y1="360" x2="160" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                  <line x1="470" y1="360" x2="470" y2="385" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.2" />
                  <line x1="488" y1="342" x2="488" y2="367" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1.2" />

                  {/* Foundation Partition Lines (Data Lake, Warehouses, Operational Stores) */}
                  <line x1="260" y1="360" x2="278" y2="342" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="365" y1="360" x2="383" y2="342" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  
                  {/* Data Ingestion Pipeline Conduits */}
                  <line x1="195" y1="342" x2="195" y2="280" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="230" y1="342" x2="230" y2="280" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="300" y1="342" x2="300" y2="280" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="335" y1="342" x2="335" y2="280" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="405" y1="342" x2="405" y2="280" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="440" y1="342" x2="440" y2="280" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. TIER 02: ELASTIC MULTI-CLOUD & CONTAINER PLATFORM (Middle) */}
                  {/* ------------------------------------------------------------- */}
                  {/* Multi-Cloud Infrastructure Horizon (AWS, Azure, GCP Planes) */}
                  <polygon
                    points="175,280 455,280 470,265 190,265"
                    stroke="#F5F7F6"
                    strokeOpacity="0.35"
                    strokeWidth="1.2"
                  />
                  <line x1="175" y1="280" x2="175" y2="295" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1.2" />
                  <line x1="455" y1="280" x2="455" y2="295" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1.2" />

                  {/* 3 Distributed Cloud Cluster Enclosures */}
                  {/* Cluster A: Cloud VPC 01 (AWS) */}
                  <polygon
                    points="195,255 260,255 270,245 205,245"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.1"
                  />
                  <line x1="195" y1="255" x2="195" y2="265" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="260" y1="255" x2="260" y2="265" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="270" y1="245" x2="270" y2="255" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  
                  {/* Cluster B: Cloud VPC 02 (Azure / Multi-Region Core) */}
                  <polygon
                    points="285,255 350,255 360,245 295,245"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <line x1="285" y1="255" x2="285" y2="265" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="350" y1="255" x2="350" y2="265" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="360" y1="245" x2="360" y2="255" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />

                  {/* Cluster C: Cloud VPC 03 (GCP / Data Engine) */}
                  <polygon
                    points="375,255 440,255 450,245 385,245"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.1"
                  />
                  <line x1="375" y1="255" x2="375" y2="265" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="440" y1="255" x2="440" y2="265" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="450" y1="245" x2="450" y2="255" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />

                  {/* Central Spine Risers connecting Infrastructure to Security Gateway */}
                  <line x1="230" y1="245" x2="230" y2="185" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="320" y1="245" x2="320" y2="170" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.2" />
                  <line x1="410" y1="245" x2="410" y2="185" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 5. TIER 03: ZERO-TRUST SECURITY & GOVERNANCE GATEWAY (Top)    */}
                  {/* ------------------------------------------------------------- */}
                  {/* Master Governance & Security Enclosure */}
                  <polygon
                    points="245,170 395,170 410,155 260,155"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                  />
                  <line x1="245" y1="170" x2="245" y2="180" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="395" y1="170" x2="395" y2="180" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />
                  <line x1="410" y1="155" x2="410" y2="165" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />

                  {/* Muted Gold Secure Core Anchor Vault */}
                  <polygon
                    points="295,150 345,150 355,140 305,140"
                    stroke="#C9A35B"
                    strokeOpacity="0.85"
                    strokeWidth="1.4"
                  />
                  <line x1="295" y1="150" x2="295" y2="155" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.3" />
                  <line x1="345" y1="150" x2="345" y2="155" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.3" />
                  <line x1="355" y1="140" x2="355" y2="145" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.3" />

                  {/* Muted Gold Central Meridian Line (High-Resilience Telemetry Spine) */}
                  <line
                    x1="325"
                    y1="130"
                    x2="325"
                    y2="140"
                    stroke="#C9A35B"
                    strokeOpacity="0.9"
                    strokeWidth="1.4"
                  />
                  
                  {/* Precision Crosshair Target on Core */}
                  <line x1="321" y1="145" x2="329" y2="145" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1" />
                  <line x1="325" y1="141" x2="325" y2="149" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1" />

                  {/* High-Altitude Horizon & System Extent Baseline */}
                  <line
                    x1="140"
                    y1="110"
                    x2="480"
                    y2="110"
                    stroke="#F5F7F6"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </motion.div>

            {/* ===================================================================== */}
            {/* RIGHT COLUMN: EDITORIAL MASTHEAD COPY & PRIMARY CTA (50%)              */}
            {/* Disciplined hierarchy & typography strictly matching user briefing    */}
            {/* ===================================================================== */}
            <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-4.5 lg:space-y-5">
              
              {/* 1. Eyebrow Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: transitionEase, delay: eyebrowDelay }}
                className="text-[13px] sm:text-[13.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                Cloud &amp; Technology
              </motion.div>

              {/* 2. Headline Line-by-Line Masked Reveal (58–66px Desktop / 36–42px Mobile) */}
              <h1
                aria-label="The technology behind transformation."
                className="tracking-[-0.035em]"
              >
                <span className="sr-only">
                  The technology behind transformation.
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
                      The technology
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line2Delay }}
                      className="block font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      behind
                    </motion.span>
                  </div>
                  <div className="overflow-hidden pb-[0.08em]">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: h1Duration, ease: transitionEase, delay: h1Line3Delay }}
                      className="block font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[42px] text-[#F5F7F6] leading-[1.04]"
                    >
                      transformation.
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
                      The technology behind
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
                      transformation.
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
                Modernize cloud environments, strengthen data foundations and build secure, scalable technology that supports evolving business needs.
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
                  aria-label="Discuss Your Cloud Strategy"
                >
                  Discuss Your Cloud Strategy
                </button>
              </motion.div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}

