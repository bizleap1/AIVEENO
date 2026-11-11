"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering (/data-engineering)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Conceptual Data Journey Architecture Illustration (Left 50%):
 * - Communicates structured information flow across four purposeful layers:
 *   1. DATA SOURCES (Disparate operational & application origins)
 *   2. DATA PIPELINES (Extraction, preparation & reliable conduits)
 *   3. DATA FOUNDATIONS (Organized warehouse & lake structures)
 *   4. ANALYTICS & AI (Reporting, BI & downstream AI consumption)
 * - Clean architectural linework (#F5F7F6) + restrained muted-gold conduits (#C9A35B).
 * - Zero fake dashboards, zero cylinder DB clip-art, zero glowing particles,
 *   zero invented charts/volumes, zero rising-platform overlap.
 *
 * Right Column (50%):
 * - Eyebrow: DATA ENGINEERING
 * - H1: Build data foundations your business can rely on. (56–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Data Engineering Needs (visible inside initial 100% viewport)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DataHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function DataHero({ onOpenDiscoveryModal }: DataHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Data Engineering Hero");
    } else {
      router.push("/contact");
    }
  };

  // Coordinated Reveal Sequence (550–680ms total, never renders initial blank hero)
  const illustrationDelay = 0.04;
  const eyebrowDelay = 0.12;
  const h1Delay = 0.2;
  const copyDelay = 0.32;
  const ctaDelay = 0.4;

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[58px] lg:pt-[62px]">
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            {/* ================================================================= */}
            {/* LEFT COLUMN: BESPOKE CONCEPTUAL DATA FLOW ARCHITECTURE SVG        */}
            {/* ================================================================= */}
            <motion.div
              initial={{ opacity: 0.92, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.64,
                ease: transitionEase,
                delay: illustrationDelay,
              }}
              className="lg:col-span-6 order-1 flex items-center justify-center lg:justify-start -mt-1 sm:-mt-2 lg:-mt-4 xl:-mt-5"
            >
              <div className="relative w-full max-w-[310px] min-[390px]:max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[700px] aspect-[540/420] flex items-center justify-center select-none pointer-events-none">
                <svg
                  viewBox="0 0 540 420"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full max-h-full max-w-full"
                  aria-label="Conceptual data engineering architecture illustration showing data sources flowing through data pipelines into organized data foundations that support analytics and AI applications"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL REFERENCE FRAME                              */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="36"
                    y="54"
                    width="468"
                    height="312"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                  />
                  {/* Column Coordinate Baseline */}
                  <line
                    x1="36"
                    y1="96"
                    x2="504"
                    y2="96"
                    stroke="#F5F7F6"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                  />

                  {/* Subtle Architectural Stage Axis Ticks at Top */}
                  <line x1="94" y1="68" x2="118" y2="68" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.2" />
                  <line x1="196" y1="68" x2="220" y2="68" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.3" />
                  <line x1="308" y1="68" x2="342" y2="68" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.3" />
                  <line x1="432" y1="68" x2="458" y2="68" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.3" />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. STAGE I — DATA SOURCES (Disparate Origin Nodes)            */}
                  {/* ------------------------------------------------------------- */}
                  {/* Source 1: Operational Systems */}
                  <rect
                    x="56"
                    y="120"
                    width="76"
                    height="50"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.15"
                  />
                  <line x1="68" y1="138" x2="116" y2="138" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="68" y1="150" x2="104" y2="150" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />

                  {/* Source 2: Application Records */}
                  <rect
                    x="56"
                    y="186"
                    width="76"
                    height="50"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.15"
                  />
                  <line x1="68" y1="204" x2="120" y2="204" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="68" y1="216" x2="110" y2="216" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1" />

                  {/* Source 3: Files & Structured Stores */}
                  <rect
                    x="56"
                    y="252"
                    width="76"
                    height="50"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.15"
                  />
                  <line x1="68" y1="270" x2="112" y2="270" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="68" y1="282" x2="118" y2="282" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. STAGE II — DATA PIPELINES & TRANSFORMATION                 */}
                  {/* ------------------------------------------------------------- */}
                  {/* Converging Input Channels */}
                  <path
                    d="M132 145 H162 L176 172"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.25"
                  />
                  <line
                    x1="132"
                    y1="211"
                    x2="176"
                    y2="211"
                    stroke="#C9A35B"
                    strokeOpacity="0.82"
                    strokeWidth="1.35"
                  />
                  <path
                    d="M132 277 H162 L176 250"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.25"
                  />

                  {/* Pipeline Processing Gate Enclosure */}
                  <rect
                    x="176"
                    y="128"
                    width="68"
                    height="166"
                    rx="2"
                    fill="#161A18"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.25"
                  />
                  {/* Internal Extract / Transform / Validate Strata */}
                  <rect
                    x="188"
                    y="144"
                    width="44"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                  />
                  <rect
                    x="188"
                    y="193"
                    width="44"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.7"
                    strokeWidth="1.15"
                  />
                  <rect
                    x="188"
                    y="242"
                    width="44"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                  />

                  {/* Organized Pipeline Output Channels -> Foundations */}
                  <line x1="244" y1="162" x2="282" y2="162" stroke="#C9A35B" strokeOpacity="0.78" strokeWidth="1.3" />
                  <line x1="244" y1="211" x2="282" y2="211" stroke="#C9A35B" strokeOpacity="0.88" strokeWidth="1.4" />
                  <line x1="244" y1="260" x2="282" y2="260" stroke="#C9A35B" strokeOpacity="0.78" strokeWidth="1.3" />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. STAGE III — DATA FOUNDATIONS (Warehouse + Lake Structure)  */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="282"
                    y="114"
                    width="112"
                    height="194"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.48"
                    strokeWidth="1.3"
                  />
                  {/* Upper Foundation Zone: Structured Warehouse Grid */}
                  <rect
                    x="294"
                    y="128"
                    width="88"
                    height="78"
                    rx="1.5"
                    fill="#1B1F1D"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1.15"
                  />
                  <line x1="304" y1="150" x2="372" y2="150" stroke="#F5F7F6" strokeOpacity="0.38" strokeWidth="1" />
                  <line x1="304" y1="168" x2="372" y2="168" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="304" y1="186" x2="372" y2="186" stroke="#C9A35B" strokeOpacity="0.55" strokeWidth="1" />
                  <line x1="336" y1="138" x2="336" y2="196" stroke="#F5F7F6" strokeOpacity="0.16" strokeWidth="1" />

                  {/* Lower Foundation Zone: Organized Data Lake Tiers */}
                  <rect
                    x="294"
                    y="218"
                    width="88"
                    height="76"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.1"
                  />
                  <line x1="304" y1="240" x2="372" y2="240" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1.1" />
                  <line x1="304" y1="258" x2="372" y2="258" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1" />
                  <line x1="304" y1="276" x2="356" y2="276" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1" />

                  {/* Precision Datum Squares bridging into Consumption */}
                  <line x1="394" y1="167" x2="424" y2="167" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.25" />
                  <line x1="394" y1="256" x2="424" y2="256" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.3" />
                  <rect x="405" y="163" width="8" height="8" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.1" />
                  <rect x="405" y="252" width="8" height="8" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />

                  {/* ------------------------------------------------------------- */}
                  {/* 5. STAGE IV — ANALYTICS & AI CONSUMPTION                      */}
                  {/* ------------------------------------------------------------- */}
                  {/* Analytics & Business Intelligence Tier */}
                  <rect
                    x="424"
                    y="128"
                    width="62"
                    height="76"
                    rx="2"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.44"
                    strokeWidth="1.2"
                  />
                  <line x1="436" y1="154" x2="474" y2="154" stroke="#F5F7F6" strokeOpacity="0.55" strokeWidth="1.2" />
                  <line x1="436" y1="172" x2="468" y2="172" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1.1" />

                  {/* AI & Modeling Consumption Tier */}
                  <rect
                    x="424"
                    y="220"
                    width="62"
                    height="76"
                    rx="2"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.25"
                  />
                  <line x1="436" y1="246" x2="474" y2="246" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.2" />
                  <line x1="436" y1="264" x2="468" y2="264" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.1" />
                </svg>
              </div>
            </motion.div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: EDITORIAL COPY & PRIMARY CTA (50%)                  */}
            {/* ================================================================= */}
            <div className="lg:col-span-6 order-2 flex flex-col justify-center space-y-4 sm:space-y-4.5 lg:space-y-5">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0.9, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: transitionEase,
                  delay: eyebrowDelay,
                }}
                className="inline-flex items-center gap-2.5 text-[12px] sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Data Engineering</span>
              </motion.div>

              {/* H1 (56–64px Desktop / 36–42px Mobile — single unified layer) */}
              <motion.h1
                initial={{ opacity: 0.88, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.52,
                  ease: transitionEase,
                  delay: h1Delay,
                }}
                className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[62px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] lg:leading-[1.03] max-w-[600px]"
              >
                Build data foundations your business can rely on.
              </motion.h1>

              {/* Supporting Description (18–19px Desktop / 16–17px Mobile) */}
              <motion.p
                initial={{ opacity: 0.9, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  ease: transitionEase,
                  delay: copyDelay,
                }}
                className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[19px] text-[#AEB3AF] max-w-[600px] leading-[1.56] font-normal tracking-[-0.005em]"
              >
                Design reliable data pipelines, ETL/ELT workflows and modern data foundations that support analytics, business intelligence and AI applications.
              </motion.p>

              {/* Single Focused CTA */}
              <motion.div
                initial={{ opacity: 0.9, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.38,
                  ease: transitionEase,
                  delay: ctaDelay,
                }}
                className="pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex min-h-[50px] sm:min-h-[52px] py-2.5 items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-5 sm:px-10 text-[14.5px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                  aria-label="Discuss Your Data Engineering Needs"
                >
                  Discuss Your Data Engineering Needs
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

