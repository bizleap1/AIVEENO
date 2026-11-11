"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Consulting / Advisory (/cloud-consulting)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Conceptual Architecture Illustration (Left 50%):
 * - Fine-line architectural blueprint geometry on #111312 dark surface
 * - Left sub-zone: Current environment modules & inter-system dependencies
 * - Center vertical meridian (#C9A35B): Strategic evaluation & priority alignment axis
 * - Right sub-zone: Target cloud architecture tiers, security perimeter & phased roadmap
 * - Zero fake metrics, zero server clip-art, zero glowing particles
 *
 * Right Column (50%):
 * - Eyebrow: CLOUD CONSULTING / ADVISORY
 * - H1: Cloud strategy built around business priorities. (58–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Cloud Strategy (visible inside initial 100% viewport)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ConsultingHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function ConsultingHero({
  onOpenDiscoveryModal,
}: ConsultingHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud Consulting / Advisory Hero");
    } else {
      router.push("/contact");
    }
  };

  // Coordinated Reveal Sequence (illustration subtle -> text staggered 550-650ms, zero hydration restart)
  const illustrationDelay = 0.05;
  const eyebrowDelay = 0.10;
  const h1Delay = 0.18;
  const h1Duration = 0.52;
  const copyDelay = 0.30;
  const copyDuration = 0.42;
  const ctaDelay = 0.38;
  const ctaDuration = 0.38;

  return (
    <div className="relative w-full bg-[#111312] text-[#F5F7F6] pt-[58px] lg:pt-[62px]">
      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-10 sm:pb-12 lg:pb-14 border-b border-white/[0.08] overflow-hidden">
        <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-14 items-center">
            {/* ================================================================= */}
            {/* LEFT COLUMN: BESPOKE ARCHITECTURAL PLANNING ILLUSTRATION (50%)    */}
            {/* ================================================================= */}
            <motion.div
              initial={{ opacity: 0.92, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
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
                  aria-label="Conceptual architectural blueprint showing existing technology assessment aligned across an evaluation meridian into structured target cloud architecture and sequenced modernization planning"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. ARCHITECTURAL DATUM FRAME & COORDINATE TICKS               */}
                  {/* ------------------------------------------------------------- */}
                  {/* Top-Left / Top-Right / Bottom-Left / Bottom-Right Crop Marks */}
                  <path d="M28 50 V34 H44" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1.1" />
                  <path d="M496 34 H512 V50" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1.1" />
                  <path d="M28 370 V386 H44" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1.1" />
                  <path d="M496 386 H512 V370" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1.1" />

                  {/* Vertical Left Elevation Ruler */}
                  <line x1="44" y1="68" x2="44" y2="366" stroke="#F5F7F6" strokeOpacity="0.16" strokeWidth="1" />
                  <line x1="39" y1="114" x2="44" y2="114" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="39" y1="211" x2="44" y2="211" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="39" y1="308" x2="44" y2="308" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />

                  {/* Ground Datum Baseline */}
                  <line x1="44" y1="366" x2="496" y2="366" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1.2" />
                  <line x1="146" y1="366" x2="146" y2="372" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1" />
                  <line x1="270" y1="366" x2="270" y2="374" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.2" />
                  <line x1="400" y1="366" x2="400" y2="372" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1" />

                  {/* Top Horizon Guide Hairline */}
                  <line
                    x1="68"
                    y1="56"
                    x2="492"
                    y2="56"
                    stroke="#F5F7F6"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. EXISTING ENVIRONMENT ASSESSMENT DOMAIN (Left Stack)        */}
                  {/* ------------------------------------------------------------- */}
                  {/* Module A: Existing Business Applications */}
                  <rect
                    x="68"
                    y="78"
                    width="156"
                    height="72"
                    rx="2"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.38"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="80"
                    y="92"
                    width="58"
                    height="44"
                    rx="1.5"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1"
                  />
                  <line x1="90" y1="106" x2="128" y2="106" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="90" y1="118" x2="118" y2="118" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />
                  <rect
                    x="148"
                    y="92"
                    width="64"
                    height="44"
                    rx="1.5"
                    stroke="#F5F7F6"
                    strokeOpacity="0.24"
                    strokeWidth="1"
                  />
                  <line x1="158" y1="106" x2="202" y2="106" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="158" y1="118" x2="192" y2="118" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />

                  {/* Module B: Workloads, Dependencies & Integration Mesh */}
                  <rect
                    x="68"
                    y="178"
                    width="156"
                    height="66"
                    rx="2"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.38"
                    strokeWidth="1.2"
                  />
                  {/* Orthogonal internal dependency traces */}
                  <path
                    d="M84 196 H128 V226 H208"
                    stroke="#F5F7F6"
                    strokeOpacity="0.3"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M84 226 H110 V196 H208"
                    stroke="#F5F7F6"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Module C: Legacy Infrastructure & Data Stores */}
                  <rect
                    x="68"
                    y="272"
                    width="156"
                    height="72"
                    rx="2"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.34"
                    strokeWidth="1.2"
                  />
                  <rect x="80" y="286" width="38" height="44" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <rect x="127" y="286" width="38" height="44" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <rect x="174" y="286" width="38" height="44" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <line x1="86" y1="300" x2="112" y2="300" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1" />
                  <line x1="133" y1="300" x2="159" y2="300" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1" />
                  <line x1="180" y1="300" x2="206" y2="300" stroke="#F5F7F6" strokeOpacity="0.26" strokeWidth="1" />

                  {/* Vertical Discovery Coupling Traces (Left Domain) */}
                  <line x1="112" y1="150" x2="112" y2="178" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1.1" />
                  <line x1="180" y1="150" x2="180" y2="178" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="146" y1="244" x2="146" y2="272" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1.1" />
                  <line x1="194" y1="244" x2="194" y2="272" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. EVALUATION MERIDIAN & STRATEGIC ALIGNMENT AXIS (Center)    */}
                  {/* ------------------------------------------------------------- */}
                  {/* Evaluation Input Vectors */}
                  <line x1="224" y1="114" x2="262" y2="114" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.1" strokeDasharray="3 3" />
                  <line x1="224" y1="211" x2="262" y2="211" stroke="#F5F7F6" strokeOpacity="0.55" strokeWidth="1.2" />
                  <line x1="224" y1="308" x2="262" y2="308" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.1" strokeDasharray="3 3" />

                  {/* Vertical Architectural Evaluation Rails */}
                  <line x1="262" y1="56" x2="262" y2="366" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />
                  <line x1="278" y1="56" x2="278" y2="366" stroke="#C9A35B" strokeOpacity="0.72" strokeWidth="1.3" />

                  {/* Calibrated Alignment Marks (Geometric Drafting Diamonds — Zero Glow) */}
                  <polygon points="270,108 276,114 270,120 264,114" fill="#111312" stroke="#C9A35B" strokeWidth="1.3" />
                  <polygon points="270,205 276,211 270,217 264,211" fill="#111312" stroke="#C9A35B" strokeWidth="1.4" />
                  <polygon points="270,302 276,308 270,314 264,308" fill="#111312" stroke="#C9A35B" strokeWidth="1.3" />

                  {/* Clean Directional Vectors Into Target Cloud Blueprint */}
                  <line x1="278" y1="114" x2="318" y2="114" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.2" />
                  <line x1="278" y1="211" x2="318" y2="211" stroke="#C9A35B" strokeOpacity="0.9" strokeWidth="1.35" />
                  <line x1="278" y1="308" x2="318" y2="308" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.2" />

                  {/* ------------------------------------------------------------- */}
                  {/* 4. TARGET CLOUD ARCHITECTURE & MODERNIZATION ROADMAP (Right)  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Outer Architectural Scope Boundary */}
                  <rect
                    x="306"
                    y="68"
                    width="188"
                    height="286"
                    rx="3"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.22"
                    strokeWidth="1.1"
                  />

                  {/* Architectural Backbone Vertical Spine */}
                  <line x1="400" y1="146" x2="400" y2="276" stroke="#C9A35B" strokeOpacity="0.55" strokeWidth="1.2" />

                  {/* Tier 01: Cloud Strategy & Workload Placement (Gold Top Datum) */}
                  <rect
                    x="318"
                    y="84"
                    width="164"
                    height="62"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.55"
                    strokeWidth="1.25"
                  />
                  <line x1="318" y1="84" x2="482" y2="84" stroke="#C9A35B" strokeOpacity="0.9" strokeWidth="1.8" />
                  {/* Balanced placement partitions */}
                  <rect x="330" y="98" width="42" height="34" rx="1" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1" />
                  <rect x="379" y="98" width="42" height="34" rx="1" stroke="#C9A35B" strokeOpacity="0.7" strokeWidth="1.1" />
                  <rect x="428" y="98" width="42" height="34" rx="1" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1" />

                  {/* Tier 02: Target Architecture & Governance Boundary */}
                  <rect
                    x="318"
                    y="174"
                    width="164"
                    height="74"
                    rx="2"
                    fill="#181C1A"
                    stroke="#C9A35B"
                    strokeOpacity="0.75"
                    strokeWidth="1.35"
                  />
                  {/* Inner Security & Governance Boundary */}
                  <rect
                    x="328"
                    y="184"
                    width="144"
                    height="54"
                    rx="1.5"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  {/* Interconnected Architecture Bus */}
                  <line x1="342" y1="211" x2="458" y2="211" stroke="#F5F7F6" strokeOpacity="0.48" strokeWidth="1.1" />
                  <rect x="386" y="199" width="28" height="24" fill="#181C1A" stroke="#C9A35B" strokeOpacity="0.95" strokeWidth="1.35" />
                  <line x1="394" y1="211" x2="406" y2="211" stroke="#C9A35B" strokeWidth="1.2" />
                  <line x1="400" y1="205" x2="400" y2="217" stroke="#C9A35B" strokeWidth="1.2" />

                  {/* Tier 03: Phased Adoption & Modernization Roadmap */}
                  <rect
                    x="318"
                    y="276"
                    width="164"
                    height="64"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.48"
                    strokeWidth="1.2"
                  />
                  {/* Stepped Planning Horizon Bars (3 Sequential Tracks) */}
                  <line x1="332" y1="294" x2="394" y2="294" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.6" />
                  <line x1="394" y1="294" x2="402" y2="294" stroke="#C9A35B" strokeWidth="1.8" />
                  <line x1="364" y1="308" x2="432" y2="308" stroke="#F5F7F6" strokeOpacity="0.5" strokeWidth="1.6" />
                  <line x1="432" y1="308" x2="440" y2="308" stroke="#C9A35B" strokeWidth="1.8" />
                  <line x1="396" y1="322" x2="460" y2="322" stroke="#F5F7F6" strokeOpacity="0.4" strokeWidth="1.6" />
                  <line x1="460" y1="322" x2="468" y2="322" stroke="#C9A35B" strokeWidth="1.8" />
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
                <span>Cloud Consulting / Advisory</span>
              </motion.div>

              {/* H1 (58-66px Desktop / 36-42px Mobile, single unified compositing layer for identical font weight) */}
              <motion.h1
                initial={{ opacity: 0.88, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: h1Duration,
                  ease: transitionEase,
                  delay: h1Delay,
                }}
                className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] md:text-[48px] lg:text-[58px] xl:text-[62px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] lg:leading-[1.03] max-w-[600px]"
              >
                Cloud strategy built around business priorities.
              </motion.h1>

              {/* Supporting Description (18-19px Desktop / 16-17px Mobile) */}
              <motion.p
                initial={{ opacity: 0.9, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: copyDuration,
                  ease: transitionEase,
                  delay: copyDelay,
                }}
                className="text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[18.5px] text-[#AEB3AF] max-w-[600px] leading-[1.56] font-normal tracking-[-0.005em]"
              >
                We assess your technology environment, define a practical cloud direction and help plan architecture, adoption and modernization around your business needs.
              </motion.p>

              {/* Primary CTA Button */}
              <motion.div
                initial={{ opacity: 0.9, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ctaDuration,
                  ease: transitionEase,
                  delay: ctaDelay,
                }}
                className="pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex h-[50px] sm:h-[52px] items-center justify-center rounded-[4px] bg-[#202522] hover:bg-[#28302A] border border-white/[0.28] hover:border-[#C9A35B]/80 text-[#F5F7F6] px-8 sm:px-10 text-[15px] sm:text-[15.5px] font-sans font-medium tracking-[0.01em] transition-colors duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full sm:w-auto text-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A35B]"
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
