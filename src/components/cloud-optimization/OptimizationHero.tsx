"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization (/cloud-optimization)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Conceptual Architecture & Efficiency Calibration Blueprint (Left 50%):
 * - Communicates an existing cloud environment (uneven, fragmented workload sizing
 *   and loose cross-dependencies on left) being evaluated across a central gold
 *   calibration axis into balanced, proportionally fit architectural planes (right).
 * - Fine structural linework (#F5F7F6) + restrained muted-gold anchors (#C9A35B).
 * - Zero fake cost dashboards, zero utilization charts, zero 3D servers,
 *   zero neon icons, zero invented savings statistics, zero rising-platform overlap.
 *
 * Right Column (50%):
 * - Eyebrow: CLOUD OPTIMIZATION
 * - H1: Make more of your cloud investment. (58–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Cloud Optimization (visible inside initial 100% viewport)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface OptimizationHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function OptimizationHero({
  onOpenDiscoveryModal,
}: OptimizationHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud Optimization Hero");
    } else {
      router.push("/contact");
    }
  };

  // Sequential Editorial Reveal Timing (550–680ms total, never starts blank)
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
            {/* LEFT COLUMN: ARCHITECTURAL EVALUATION & REFINEMENT BLUEPRINT      */}
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
                  aria-label="Conceptual architectural blueprint showing an uneven cloud allocation evaluated across a calibration datum axis into balanced, aligned architectural tiers"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL DATUM FRAME & REFERENCE COORDINATES          */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="44"
                    y="48"
                    width="452"
                    height="324"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                  />
                  {/* Horizontal Alignment Datum Lines */}
                  <line
                    x1="44"
                    y1="156"
                    x2="496"
                    y2="156"
                    stroke="#F5F7F6"
                    strokeOpacity="0.09"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                  <line
                    x1="44"
                    y1="264"
                    x2="496"
                    y2="264"
                    stroke="#F5F7F6"
                    strokeOpacity="0.09"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. LEFT ZONE: UNALIGNED EXISTING ALLOCATION & COMPLEXITY      */}
                  {/* ------------------------------------------------------------- */}
                  {/* Upper oversized module with unused slack region */}
                  <rect
                    x="68"
                    y="78"
                    width="156"
                    height="64"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1.15"
                  />
                  <rect
                    x="80"
                    y="92"
                    width="64"
                    height="36"
                    rx="1"
                    fill="#191D1B"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                  />
                  {/* Diagonal hairline indicating unutilized headroom inside oversized block */}
                  <line
                    x1="156"
                    y1="92"
                    x2="212"
                    y2="128"
                    stroke="#F5F7F6"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Middle mismatched/fragmented workload modules */}
                  <rect
                    x="68"
                    y="174"
                    width="96"
                    height="72"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.15"
                  />
                  <rect
                    x="176"
                    y="164"
                    width="48"
                    height="82"
                    rx="2"
                    fill="#151817"
                    stroke="#C9A35B"
                    strokeOpacity="0.45"
                    strokeWidth="1.1"
                  />
                  {/* Tight cross-dependency lines adding structural friction */}
                  <line
                    x1="120"
                    y1="142"
                    x2="120"
                    y2="174"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                  />
                  <line
                    x1="164"
                    y1="194"
                    x2="176"
                    y2="194"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1.1"
                  />
                  <line
                    x1="164"
                    y1="224"
                    x2="176"
                    y2="224"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1.1"
                  />

                  {/* Lower wide fragmented span */}
                  <rect
                    x="68"
                    y="280"
                    width="156"
                    height="56"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1.1"
                  />
                  <line
                    x1="84"
                    y1="308"
                    x2="206"
                    y2="308"
                    stroke="#F5F7F6"
                    strokeOpacity="0.22"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. CENTRAL CALIBRATION MERIDIAN (Evaluation Axis)             */}
                  {/* ------------------------------------------------------------- */}
                  <line
                    x1="270"
                    y1="32"
                    x2="270"
                    y2="388"
                    stroke="#C9A35B"
                    strokeOpacity="0.82"
                    strokeWidth="1.5"
                  />
                  {/* Caliper Evaluation Tick Marks */}
                  <rect
                    x="265"
                    y="106"
                    width="10"
                    height="10"
                    fill="#111312"
                    stroke="#C9A35B"
                    strokeWidth="1.25"
                  />
                  <rect
                    x="265"
                    y="205"
                    width="10"
                    height="10"
                    fill="#111312"
                    stroke="#C9A35B"
                    strokeWidth="1.25"
                  />
                  <rect
                    x="265"
                    y="303"
                    width="10"
                    height="10"
                    fill="#111312"
                    stroke="#C9A35B"
                    strokeWidth="1.25"
                  />
                  {/* Evaluation conduits bridging Left -> Center -> Right */}
                  <line
                    x1="224"
                    y1="111"
                    x2="308"
                    y2="111"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.3"
                  />
                  <line
                    x1="224"
                    y1="210"
                    x2="308"
                    y2="210"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.3"
                  />
                  <line
                    x1="224"
                    y1="308"
                    x2="308"
                    y2="308"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.3"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. RIGHT ZONE: REFINED ARCHITECTURAL PROPORTION & FIT         */}
                  {/* ------------------------------------------------------------- */}
                  {/* Outer unified refined environment perimeter */}
                  <rect
                    x="308"
                    y="78"
                    width="164"
                    height="258"
                    rx="2"
                    fill="#161A18"
                    stroke="#F5F7F6"
                    strokeOpacity="0.44"
                    strokeWidth="1.25"
                  />

                  {/* Tier A: Aligned Architecture Span */}
                  <rect
                    x="324"
                    y="94"
                    width="132"
                    height="48"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="340"
                    y1="118"
                    x2="440"
                    y2="118"
                    stroke="#F5F7F6"
                    strokeOpacity="0.52"
                    strokeWidth="1.2"
                  />

                  {/* Tier B: Proportionally Balanced Workload Modules */}
                  <rect
                    x="324"
                    y="158"
                    width="60"
                    height="96"
                    rx="1.5"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.15"
                  />
                  <rect
                    x="396"
                    y="158"
                    width="60"
                    height="96"
                    rx="1.5"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.15"
                  />
                  <line
                    x1="336"
                    y1="206"
                    x2="372"
                    y2="206"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="408"
                    y1="206"
                    x2="444"
                    y2="206"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.2"
                  />

                  {/* Tier C: Clean Operational Foundation */}
                  <rect
                    x="324"
                    y="270"
                    width="132"
                    height="50"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1.15"
                  />
                  <line
                    x1="340"
                    y1="295"
                    x2="440"
                    y2="295"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.1"
                  />

                  {/* Corner Alignment Reference Markers on Refined Frame */}
                  <line x1="464" y1="68" x2="478" y2="68" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.2" />
                  <line x1="478" y1="68" x2="478" y2="82" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.2" />
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
                <span>Cloud Optimization</span>
              </motion.div>

              {/* H1 (58–64px Desktop / 36–42px Mobile — single clean compositing layer) */}
              <motion.h1
                initial={{ opacity: 0.88, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.52,
                  ease: transitionEase,
                  delay: h1Delay,
                }}
                className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] md:text-[48px] lg:text-[58px] xl:text-[62px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] lg:leading-[1.03] max-w-[580px]"
              >
                Make more of your cloud investment.
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
                className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[19px] text-[#AEB3AF] max-w-[580px] leading-[1.56] font-normal tracking-[-0.005em]"
              >
                Optimize cloud architecture, resource utilization and performance with a considered approach to operational efficiency and cost.
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
                  className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-8 sm:px-10 text-[15px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
                  aria-label="Discuss Your Cloud Optimization"
                >
                  Discuss Your Cloud Optimization
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

