"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization (/cloud-migration-modernization)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Architectural Transition Graphic (Left 50%):
 * - Communicates moving from a coupled legacy environment (bottom-left) across
 *   sequenced transition rails into cleanly decoupled, modernized cloud planes (top-right).
 * - Fine architectural strokes (#F5F7F6) with restrained muted-gold continuity lines (#C9A35B).
 * - Zero generic cloud shapes, zero glowing servers, zero dashboards or repeated isometric figures.
 *
 * Right Column (50%):
 * - Eyebrow: CLOUD MIGRATION & MODERNIZATION
 * - H1: Modernize your infrastructure. Move with purpose. (56–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Cloud Migration (visible inside 100% browser zoom initial viewport)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface MigrationHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function MigrationHero({
  onOpenDiscoveryModal,
}: MigrationHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud Migration & Modernization Hero");
    } else {
      router.push("/contact");
    }
  };

  // Sequential Entrance Timing (550–680ms total, no initial blank hero)
  const illustrationDelay = 0.04;
  const eyebrowDelay = 0.12;
  const h1Delay = 0.20;
  const copyDelay = 0.32;
  const ctaDelay = 0.40;

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[58px] lg:pt-[62px]">
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            {/* ================================================================= */}
            {/* LEFT COLUMN: RESTRAINED WORKLOAD TRANSITION ARCHITECTURE GRAPHIC   */}
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
                  aria-label="Architectural elevation showing tightly coupled legacy workloads transitioning across sequenced continuity tracks into separated, modernized cloud architecture tiers"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL HORIZON & DATUM COORDINATES                  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Ground baseline */}
                  <line
                    x1="34"
                    y1="364"
                    x2="506"
                    y2="364"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1.1"
                  />
                  {/* Ticks along ground baseline */}
                  <line x1="126" y1="364" x2="126" y2="371" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="270" y1="364" x2="270" y2="373" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.2" />
                  <line x1="406" y1="364" x2="406" y2="371" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />

                  {/* Right vertical architectural meridian */}
                  <line
                    x1="506"
                    y1="52"
                    x2="506"
                    y2="364"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                  />
                  <line x1="506" y1="92" x2="512" y2="92" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="506" y1="168" x2="512" y2="168" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.1" />
                  <line x1="506" y1="244" x2="512" y2="244" stroke="#F5F7F6" strokeOpacity="0.3" strokeWidth="1" />

                  {/* Top subtle guide line */}
                  <line
                    x1="44"
                    y1="52"
                    x2="506"
                    y2="52"
                    stroke="#F5F7F6"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. ORIGIN STATE: COUPLED EXISTING WORKLOAD ESTATE (Low-Left)  */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="52"
                    y="196"
                    width="150"
                    height="148"
                    rx="2"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.36"
                    strokeWidth="1.25"
                  />
                  {/* Tightly coupled nested internal dependencies */}
                  <rect
                    x="66"
                    y="210"
                    width="64"
                    height="56"
                    rx="1.5"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                  />
                  <rect
                    x="116"
                    y="236"
                    width="72"
                    height="58"
                    rx="1.5"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                  />
                  <rect
                    x="66"
                    y="280"
                    width="76"
                    height="50"
                    rx="1.5"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1"
                  />
                  {/* Overlapping internal coupling traces */}
                  <path
                    d="M80 226 H114 V252 H174"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1"
                  />
                  <path
                    d="M96 296 V266 H154 V318 H188"
                    stroke="#F5F7F6"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. TRANSITION & CONTINUITY CORRIDOR (Stepped Center Span)     */}
                  {/* ------------------------------------------------------------- */}
                  {/* Track 01: Ascending stepped path to Application Tier */}
                  <path
                    d="M202 222 H246 V92 H324"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  {/* Continuity verification parallel dash */}
                  <path
                    d="M202 232 H256 V104 H324"
                    stroke="#F5F7F6"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Track 02: Primary Muted-Gold Continuity & Transition Spine */}
                  <path
                    d="M202 268 H274 V168 H324"
                    stroke="#C9A35B"
                    strokeOpacity="0.88"
                    strokeWidth="1.5"
                  />
                  {/* Calibrated Transition Waypoints (Crisp Architectural Hairline Gates) */}
                  <line x1="274" y1="158" x2="274" y2="278" stroke="#C9A35B" strokeOpacity="0.35" strokeWidth="1" />
                  <rect
                    x="268"
                    y="162"
                    width="12"
                    height="12"
                    fill="#111312"
                    stroke="#C9A35B"
                    strokeWidth="1.3"
                  />

                  {/* Track 03: Ascending stepped path to Foundation / Data Tier */}
                  <path
                    d="M202 312 H292 V244 H324"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.2"
                  />

                  {/* Architectural vertical guide connecting transition span to baseline */}
                  <line
                    x1="274"
                    y1="278"
                    x2="274"
                    y2="364"
                    stroke="#C9A35B"
                    strokeOpacity="0.22"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. MODERNIZED TARGET PLANES (Separated Tiers, Upper-Right)    */}
                  {/* ------------------------------------------------------------- */}
                  {/* Vertical structural sync spine uniting modernized layers */}
                  <line
                    x1="406"
                    y1="118"
                    x2="406"
                    y2="294"
                    stroke="#C9A35B"
                    strokeOpacity="0.58"
                    strokeWidth="1.2"
                  />

                  {/* Tier A: Modernized Applications */}
                  <rect
                    x="324"
                    y="68"
                    width="162"
                    height="50"
                    rx="2"
                    fill="#161A18"
                    stroke="#F5F7F6"
                    strokeOpacity="0.52"
                    strokeWidth="1.25"
                  />
                  <line x1="340" y1="86" x2="432" y2="86" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.2" />
                  <line x1="340" y1="99" x2="400" y2="99" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1" />
                  <rect x="444" y="82" width="28" height="22" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.1" />

                  {/* Tier B: Architecture, Security & Continuity Layer (Gold Crown Focus) */}
                  <rect
                    x="324"
                    y="142"
                    width="162"
                    height="54"
                    rx="2"
                    fill="#181C1A"
                    stroke="#C9A35B"
                    strokeOpacity="0.82"
                    strokeWidth="1.4"
                  />
                  <line x1="324" y1="142" x2="486" y2="142" stroke="#C9A35B" strokeWidth="1.8" />
                  <line x1="342" y1="168" x2="468" y2="168" stroke="#F5F7F6" strokeOpacity="0.42" strokeWidth="1" />
                  <rect x="394" y="157" width="24" height="22" fill="#181C1A" stroke="#C9A35B" strokeWidth="1.3" />

                  {/* Tier C: Resilient Infrastructure & Workload Hosting */}
                  <rect
                    x="324"
                    y="220"
                    width="162"
                    height="50"
                    rx="2"
                    fill="#161A18"
                    stroke="#F5F7F6"
                    strokeOpacity="0.48"
                    strokeWidth="1.25"
                  />
                  <rect x="338" y="232" width="40" height="26" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <rect x="386" y="232" width="40" height="26" stroke="#C9A35B" strokeOpacity="0.65" strokeWidth="1.1" />
                  <rect x="434" y="232" width="40" height="26" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />

                  {/* Baseline Horizon Extension Beneath Target Estate */}
                  <line
                    x1="324"
                    y1="294"
                    x2="486"
                    y2="294"
                    stroke="#F5F7F6"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
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
                <span>Cloud Migration &amp; Modernization</span>
              </motion.div>

              {/* H1 (56–64px Desktop / 36–42px Mobile — single compositing layer) */}
              <motion.h1
                initial={{ opacity: 0.88, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.52,
                  ease: transitionEase,
                  delay: h1Delay,
                }}
                className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[62px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] lg:leading-[1.03] max-w-[610px]"
              >
                Modernize your infrastructure. Move with purpose.
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
                className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[18.5px] text-[#AEB3AF] max-w-[600px] leading-[1.56] font-normal tracking-[-0.005em]"
              >
                Migrate workloads and modernize applications with a considered approach to architecture, business continuity, security, performance and cost.
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
                  aria-label="Discuss Your Cloud Migration"
                >
                  Discuss Your Cloud Migration
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

