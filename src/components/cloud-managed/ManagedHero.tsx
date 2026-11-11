"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services (/cloud-managed-services)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Architectural Operations & Oversight Graphic (Left 50%):
 * - Communicates an actively overseen, interconnected cloud operating perimeter:
 *   outer operational governance frame, orthogonal coordination conduits, and
 *   structured core workload planes stabilized by restrained muted-gold axes (#C9A35B).
 * - Fine technical strokes (#F5F7F6), clear geometry, calm institutional poise.
 * - Zero fake telemetry dashboards, zero invented uptime numbers, zero neon servers,
 *   zero generic cloud icons, zero rising-platform overlap.
 *
 * Right Column (50%):
 * - Eyebrow: CLOUD MANAGED SERVICES
 * - H1: Keep your cloud operating at its best. (58–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Cloud Operations (visible at 100% zoom)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ManagedHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function ManagedHero({ onOpenDiscoveryModal }: ManagedHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud Managed Services Hero");
    } else {
      router.push("/contact");
    }
  };

  // Sequential Entrance Timing (550–680ms total, never starts blank)
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
            {/* LEFT COLUMN: ACTIVELY MANAGED CLOUD OPERATIONS ARCHITECTURAL SVG  */}
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
                  aria-label="Architectural diagram depicting an actively managed cloud environment with interconnected workload modules enclosed within structured operational oversight, security coordination and continuous improvement rails"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. OUTER COORDINATE MERIDIANS & OVERSIGHT BOUNDARY            */}
                  {/* ------------------------------------------------------------- */}
                  <line
                    x1="44"
                    y1="210"
                    x2="496"
                    y2="210"
                    stroke="#F5F7F6"
                    strokeOpacity="0.14"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                  <line
                    x1="270"
                    y1="40"
                    x2="270"
                    y2="380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.14"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* Outer Operational Governance Perimeter */}
                  <rect
                    x="74"
                    y="62"
                    width="392"
                    height="296"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.22"
                    strokeWidth="1.15"
                  />
                  {/* Corner Alignment Ticks */}
                  <path d="M74 80 V62 H92" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.4" />
                  <path d="M448 62 H466 V80" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.4" />
                  <path d="M74 340 V358 H92" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.4" />
                  <path d="M448 358 H466 V340" stroke="#C9A35B" strokeOpacity="0.8" strokeWidth="1.4" />

                  {/* Inner Continuous Operational Loop Frame */}
                  <rect
                    x="114"
                    y="96"
                    width="312"
                    height="228"
                    rx="2"
                    fill="#141716"
                    fillOpacity="0.5"
                    stroke="#C9A35B"
                    strokeOpacity="0.38"
                    strokeWidth="1.1"
                  />

                  {/* Top & Bottom Oversight Calibration Ticks */}
                  <line x1="176" y1="62" x2="176" y2="96" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="270" y1="54" x2="270" y2="96" stroke="#C9A35B" strokeOpacity="0.72" strokeWidth="1.2" />
                  <line x1="364" y1="62" x2="364" y2="96" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />

                  <line x1="176" y1="324" x2="176" y2="358" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="270" y1="324" x2="270" y2="366" stroke="#C9A35B" strokeOpacity="0.72" strokeWidth="1.2" />
                  <line x1="364" y1="324" x2="364" y2="358" stroke="#F5F7F6" strokeOpacity="0.25" strokeWidth="1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. INTERCONNECTED CLOUD INFRASTRUCTURE MODULES (Nested Grid)  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Upper-Left Managed Workload Block */}
                  <rect
                    x="140"
                    y="122"
                    width="116"
                    height="72"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <line x1="154" y1="144" x2="226" y2="144" stroke="#F5F7F6" strokeOpacity="0.38" strokeWidth="1.1" />
                  <line x1="154" y1="158" x2="206" y2="158" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <rect x="154" y="170" width="88" height="10" stroke="#F5F7F6" strokeOpacity="0.16" strokeWidth="1" />

                  {/* Upper-Right Availability & Resilience Module */}
                  <rect
                    x="284"
                    y="122"
                    width="116"
                    height="72"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <line x1="298" y1="144" x2="380" y2="144" stroke="#F5F7F6" strokeOpacity="0.38" strokeWidth="1.1" />
                  <line x1="298" y1="158" x2="356" y2="158" stroke="#F5F7F6" strokeOpacity="0.22" strokeWidth="1" />
                  <rect x="298" y="170" width="88" height="10" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1" />

                  {/* Lower-Left Security Coordination & Access Perimeter */}
                  <rect
                    x="140"
                    y="226"
                    width="116"
                    height="72"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.2"
                  />
                  <rect x="154" y="242" width="38" height="40" stroke="#C9A35B" strokeOpacity="0.45" strokeWidth="1" />
                  <line x1="204" y1="250" x2="242" y2="250" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                  <line x1="204" y1="264" x2="236" y2="264" stroke="#F5F7F6" strokeOpacity="0.2" strokeWidth="1" />

                  {/* Lower-Right Performance & Resource Optimization Module */}
                  <rect
                    x="284"
                    y="226"
                    width="116"
                    height="72"
                    rx="2"
                    fill="#171B19"
                    stroke="#F5F7F6"
                    strokeOpacity="0.42"
                    strokeWidth="1.2"
                  />
                  <line x1="300" y1="246" x2="384" y2="246" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1" />
                  <line x1="300" y1="262" x2="366" y2="262" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1" />
                  <line x1="300" y1="278" x2="348" y2="278" stroke="#C9A35B" strokeOpacity="0.58" strokeWidth="1.1" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. CENTRAL OVERSIGHT & COORDINATION CROSSWAY                  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Orthogonal Coordination Conduits */}
                  <line x1="256" y1="158" x2="284" y2="158" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="256" y1="262" x2="284" y2="262" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="198" y1="194" x2="198" y2="226" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />
                  <line x1="342" y1="194" x2="342" y2="226" stroke="#F5F7F6" strokeOpacity="0.35" strokeWidth="1.1" />

                  {/* Muted-Gold Operational Feedback Rails (Continuous Cycle) */}
                  <path
                    d="M114 210 H426"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M270 96 V324"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.25"
                  />

                  {/* Central Control Hub Anchor */}
                  <rect
                    x="246"
                    y="186"
                    width="48"
                    height="48"
                    rx="2"
                    fill="#111312"
                    stroke="#C9A35B"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="258"
                    y="198"
                    width="24"
                    height="24"
                    rx="1"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.65"
                    strokeWidth="1.1"
                  />
                  <rect
                    x="266"
                    y="206"
                    width="8"
                    height="8"
                    fill="#C9A35B"
                  />

                  {/* Subtle Outer Operational Perimeter Junction Ticks */}
                  <rect x="69" y="205" width="10" height="10" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />
                  <rect x="461" y="205" width="10" height="10" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />
                  <rect x="265" y="57" width="10" height="10" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.1" />
                  <rect x="265" y="353" width="10" height="10" fill="#111312" stroke="#F5F7F6" strokeOpacity="0.6" strokeWidth="1.1" />
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
                <span>Cloud Managed Services</span>
              </motion.div>

              {/* H1 (58–64px Desktop / 36–42px Mobile — unified compositing layer) */}
              <motion.h1
                initial={{ opacity: 0.88, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.52,
                  ease: transitionEase,
                  delay: h1Delay,
                }}
                className="font-sans font-medium text-[36px] min-[390px]:text-[38px] sm:text-[42px] md:text-[48px] lg:text-[58px] xl:text-[64px] text-[#F5F7F6] tracking-[-0.035em] leading-[1.06] lg:leading-[1.03] max-w-[600px]"
              >
                Keep your cloud operating at its best.
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
                Ongoing cloud management focused on availability, security, performance and operational efficiency—so your technology environment can support evolving business needs.
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
                  aria-label="Discuss Your Cloud Operations"
                >
                  Discuss Your Cloud Operations
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

