"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development (/software-development)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Conceptual Software Architecture Illustration (Left 50%):
 * - Communicates structured relationships between:
 *   1. Business Workflows (top operational plane)
 *   2. Interconnected Application Components & Modular Logic (central plane)
 *   3. Integration Bridges (lateral connectivity ports)
 *   4. Underlying Data & Technology Foundations (supporting plane)
 * - Restraint & precision: pure architectural linework (#F5F7F6) + muted-gold conduits (#C9A35B).
 * - Zero fake app screenshots, zero code snippets, zero AI nodes, zero glowing effects.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SoftwareHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function SoftwareHero({ onOpenDiscoveryModal }: SoftwareHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Software Development Hero");
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
            {/* LEFT COLUMN: BESPOKE CONCEPTUAL SOFTWARE ARCHITECTURE SVG          */}
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
                  aria-label="Conceptual software architecture illustration showing business workflows connected to modular application layers, system integrations and supporting foundations"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL REFERENCE FRAME & VERTICAL AXIS GUIDES       */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="44"
                    y="44"
                    width="452"
                    height="332"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                  />
                  {/* Quiet vertical structural axes */}
                  <line
                    x1="156"
                    y1="44"
                    x2="156"
                    y2="376"
                    stroke="#F5F7F6"
                    strokeOpacity="0.06"
                    strokeWidth="1"
                  />
                  <line
                    x1="344"
                    y1="44"
                    x2="344"
                    y2="376"
                    stroke="#F5F7F6"
                    strokeOpacity="0.06"
                    strokeWidth="1"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. TOP PLANE — BUSINESS WORKFLOWS                             */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="74"
                    y="68"
                    width="392"
                    height="56"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.25"
                  />
                  {/* Three aligned operational workflow modules */}
                  <rect
                    x="92"
                    y="82"
                    width="102"
                    height="28"
                    rx="1.5"
                    fill="#191D1B"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                  />
                  <line x1="106" y1="96" x2="176" y2="96" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />

                  <rect
                    x="218"
                    y="82"
                    width="104"
                    height="28"
                    rx="1.5"
                    fill="#191D1B"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.15"
                  />
                  <line x1="232" y1="96" x2="306" y2="96" stroke="#C9A35B" strokeOpacity="0.85" strokeWidth="1.2" />

                  <rect
                    x="346"
                    y="82"
                    width="102"
                    height="28"
                    rx="1.5"
                    fill="#191D1B"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                  />
                  <line x1="360" y1="96" x2="430" y2="96" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />

                  {/* Vertical coupling conduits from Business Workflows -> Core Plane */}
                  <line x1="143" y1="124" x2="143" y2="156" stroke="#F5F7F6" strokeOpacity="0.38" strokeWidth="1.15" />
                  <line x1="270" y1="124" x2="270" y2="156" stroke="#C9A35B" strokeOpacity="0.85" strokeWidth="1.35" />
                  <line x1="397" y1="124" x2="397" y2="156" stroke="#C9A35B" strokeOpacity="0.58" strokeWidth="1.15" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. CORE SPLIT PLANE — APPLICATION LAYER & SYSTEM INTEGRATIONS */}
                  {/* ------------------------------------------------------------- */}
                  {/* Left Functional Zone: Modular Application Components */}
                  <rect
                    x="74"
                    y="156"
                    width="244"
                    height="124"
                    rx="2"
                    fill="#161A18"
                    stroke="#C9A35B"
                    strokeOpacity="0.68"
                    strokeWidth="1.25"
                  />
                  {/* Upper Application Component Row (Core App + Platform Logic) */}
                  <rect
                    x="92"
                    y="174"
                    width="96"
                    height="40"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.1"
                  />
                  <line x1="104" y1="190" x2="172" y2="190" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.15" />
                  <line x1="104" y1="201" x2="154" y2="201" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1" />

                  <rect
                    x="204"
                    y="174"
                    width="96"
                    height="40"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.6"
                    strokeWidth="1.1"
                  />
                  <line x1="216" y1="190" x2="284" y2="190" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.15" />
                  <line x1="216" y1="201" x2="266" y2="201" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                  {/* Inter-module internal bond */}
                  <line x1="188" y1="194" x2="204" y2="194" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.2" />

                  {/* Lower Domain Services Plane */}
                  <rect
                    x="92"
                    y="228"
                    width="208"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1.1"
                  />
                  <line x1="108" y1="246" x2="252" y2="246" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.1" />
                  <line x1="264" y1="246" x2="284" y2="246" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.2" />

                  {/* Lateral Integration Couplings (Application Layer <-> Integrations) */}
                  <line x1="318" y1="196" x2="358" y2="196" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.3" />
                  <line x1="318" y1="244" x2="358" y2="244" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />
                  <rect x="334" y="192" width="8" height="8" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />
                  <rect x="334" y="240" width="8" height="8" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.1" />

                  {/* Right Functional Zone: Integration Layer */}
                  <rect
                    x="358"
                    y="156"
                    width="108"
                    height="124"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.44"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="372"
                    y="176"
                    width="80"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1.1"
                  />
                  <line x1="384" y1="194" x2="438" y2="194" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.15" />

                  <rect
                    x="372"
                    y="226"
                    width="80"
                    height="36"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#F5F7F6"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                  <line x1="384" y1="244" x2="434" y2="244" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.1" />

                  {/* Vertical coupling conduits to Foundations Plane */}
                  <line x1="143" y1="280" x2="143" y2="306" stroke="#F5F7F6" strokeOpacity="0.38" strokeWidth="1.15" />
                  <line x1="250" y1="280" x2="250" y2="306" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.3" />
                  <line x1="412" y1="280" x2="412" y2="306" stroke="#F5F7F6" strokeOpacity="0.42" strokeWidth="1.15" />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. SUPPORTING SUBSTRATE — DATA & TECHNOLOGY FOUNDATIONS       */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="74"
                    y="306"
                    width="392"
                    height="46"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.36"
                    strokeWidth="1.2"
                  />
                  <line x1="94" y1="329" x2="208" y2="329" stroke="#F5F7F6" strokeOpacity="0.42" strokeWidth="1.2" />
                  <line x1="226" y1="329" x2="342" y2="329" stroke="#C9A35B" strokeOpacity="0.78" strokeWidth="1.25" />
                  <line x1="360" y1="329" x2="446" y2="329" stroke="#F5F7F6" strokeOpacity="0.42" strokeWidth="1.2" />
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
                <span>Software Development</span>
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
                Software engineered around your business.
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
                Design, develop and modernize scalable applications and technology platforms built around real business requirements.
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
                  aria-label="Discuss Your Software Project"
                >
                  Discuss Your Software Project
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

