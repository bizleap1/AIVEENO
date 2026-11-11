"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation (/devops-automation)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Connected Software Delivery Workflow Architecture SVG (Left 50%):
 * - Communicates structured progression across the five lifecycle stages:
 *   CODE -> BUILD -> TEST -> DEPLOY -> OPERATE
 *   paired with an underlying Infrastructure as Code automation conduit.
 * - Restrained architectural linework (#F5F7F6) + subtle muted-gold flow rails (#C9A35B).
 * - Zero fake terminals, zero fictional deployment stats, zero glowing neon tubes.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface DevOpsHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function DevOpsHero({ onOpenDiscoveryModal }: DevOpsHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("DevOps & Automation Hero");
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
            {/* LEFT COLUMN: BESPOKE 5-STAGE DELIVERY WORKFLOW ARCHITECTURE SVG   */}
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
                  aria-label="Conceptual software delivery workflow illustration connecting Code, Build, Test, Deploy and Operate stages"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. OUTER ARCHITECTURAL FRAME                                  */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="32"
                    y="52"
                    width="476"
                    height="316"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                  />

                  {/* Subtle Background Coordinate Datum Grid */}
                  <line
                    x1="32"
                    y1="262"
                    x2="508"
                    y2="262"
                    stroke="#F5F7F6"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. CONTINUOUS DELIVERY CONDUIT AXIS (CODE -> OPERATE)         */}
                  {/* ------------------------------------------------------------- */}
                  <line
                    x1="88"
                    y1="176"
                    x2="452"
                    y2="176"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.25"
                  />

                  {/* Stage Vertical Alignment Guides up to Label Track */}
                  <line x1="88" y1="88" x2="88" y2="146" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <line x1="179" y1="88" x2="179" y2="146" stroke="#C9A35B" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="270" y1="88" x2="270" y2="146" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="361" y1="88" x2="361" y2="146" stroke="#C9A35B" strokeOpacity="0.5" strokeWidth="1" />
                  <line x1="452" y1="88" x2="452" y2="146" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. FIVE CONNECTED DELIVERY STAGE MODULES                      */}
                  {/* ------------------------------------------------------------- */}
                  {/* STAGE 1: CODE */}
                  <text
                    x="88"
                    y="80"
                    textAnchor="middle"
                    fill="#AEB3AF"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.6"
                  >
                    CODE
                  </text>
                  <rect
                    x="54"
                    y="146"
                    width="68"
                    height="60"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.4"
                    strokeWidth="1.2"
                  />
                  <line x1="68" y1="168" x2="108" y2="168" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />
                  <line x1="68" y1="184" x2="98" y2="184" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1.1" />

                  {/* Inter-stage Coupling Datum */}
                  <rect x="130" y="172" width="7" height="7" fill="#111312" stroke="#C9A35B" strokeWidth="1.1" />

                  {/* STAGE 2: BUILD */}
                  <text
                    x="179"
                    y="80"
                    textAnchor="middle"
                    fill="#C9A35B"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.6"
                  >
                    BUILD
                  </text>
                  <rect
                    x="145"
                    y="146"
                    width="68"
                    height="60"
                    rx="2"
                    fill="#161A18"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1.25"
                  />
                  <rect
                    x="159"
                    y="162"
                    width="40"
                    height="28"
                    rx="1.5"
                    fill="#1A1E1C"
                    stroke="#C9A35B"
                    strokeOpacity="0.55"
                    strokeWidth="1"
                  />

                  {/* Inter-stage Coupling Datum */}
                  <rect x="221" y="172" width="7" height="7" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.1" />

                  {/* STAGE 3: TEST */}
                  <text
                    x="270"
                    y="80"
                    textAnchor="middle"
                    fill="#AEB3AF"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.6"
                  >
                    TEST
                  </text>
                  <rect
                    x="236"
                    y="146"
                    width="68"
                    height="60"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <line x1="250" y1="166" x2="290" y2="166" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.15" />
                  <line x1="250" y1="184" x2="290" y2="184" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />

                  {/* Inter-stage Coupling Datum */}
                  <rect x="312" y="172" width="7" height="7" fill="#111312" stroke="#C9A35B" strokeWidth="1.1" />

                  {/* STAGE 4: DEPLOY */}
                  <text
                    x="361"
                    y="80"
                    textAnchor="middle"
                    fill="#C9A35B"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.6"
                  >
                    DEPLOY
                  </text>
                  <rect
                    x="327"
                    y="146"
                    width="68"
                    height="60"
                    rx="2"
                    fill="#161A18"
                    stroke="#C9A35B"
                    strokeOpacity="0.75"
                    strokeWidth="1.3"
                  />
                  <rect
                    x="341"
                    y="160"
                    width="40"
                    height="14"
                    rx="1"
                    fill="#1B201E"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                  />
                  <rect
                    x="341"
                    y="179"
                    width="40"
                    height="14"
                    rx="1"
                    fill="#1B201E"
                    stroke="#C9A35B"
                    strokeOpacity="0.65"
                    strokeWidth="1"
                  />

                  {/* Inter-stage Coupling Datum */}
                  <rect x="403" y="172" width="7" height="7" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.65" strokeWidth="1.1" />

                  {/* STAGE 5: OPERATE */}
                  <text
                    x="452"
                    y="80"
                    textAnchor="middle"
                    fill="#F5F7F6"
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="1.6"
                  >
                    OPERATE
                  </text>
                  <rect
                    x="418"
                    y="146"
                    width="68"
                    height="60"
                    rx="2"
                    fill="#151817"
                    stroke="#F5F7F6"
                    strokeOpacity="0.48"
                    strokeWidth="1.25"
                  />
                  <line x1="432" y1="168" x2="472" y2="168" stroke="#F5F7F6" strokeOpacity="0.55" strokeWidth="1.2" />
                  <line x1="432" y1="184" x2="472" y2="184" stroke="#C9A35B" strokeOpacity="0.75" strokeWidth="1.2" />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. INFRASTRUCTURE AS CODE & CONTINUOUS AUTOMATION FOUNDATION  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Vertical IaC Connectors: Code + Deploy + Operate */}
                  <line x1="88" y1="206" x2="88" y2="288" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1.1" />
                  <line x1="361" y1="206" x2="361" y2="288" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.2" />
                  <line x1="452" y1="206" x2="452" y2="288" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1.1" />

                  {/* Foundation Automation Plane */}
                  <rect
                    x="54"
                    y="288"
                    width="432"
                    height="48"
                    rx="2"
                    fill="#151817"
                    stroke="#C9A35B"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                  />
                  <text
                    x="270"
                    y="316"
                    textAnchor="middle"
                    fill="#AEB3AF"
                    fontSize="9.5"
                    fontWeight="500"
                    letterSpacing="1.8"
                  >
                    INFRASTRUCTURE AS CODE &amp; DELIVERY AUTOMATION
                  </text>
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
                <span>DevOps &amp; Automation</span>
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
                Build a better path from code to production.
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
                Streamline software delivery and infrastructure operations through CI/CD, automation and modern DevOps practices.
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
                  aria-label="Talk to a DevOps Specialist"
                >
                  Talk to a DevOps Specialist
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

