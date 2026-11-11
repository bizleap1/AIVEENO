"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance (/cloud-security-governance)
 * SECTION 01: HERO (#111312 Dark Graphite Editorial Surface)
 *
 * Bespoke Conceptual Security Architecture Blueprint (Left 50%):
 * - Communicates: Cloud environment core, concentric security boundaries,
 *   access & control mediation channels, and monitoring & governance perimeter.
 * - Pure architectural linework (#F5F7F6) + restrained muted-gold control gates (#C9A35B).
 * - Explicitly free of shields, padlocks, glowing cyber meshes, fake security dashboards,
 *   hacker tropes, 3D assets, or rising-platform graphics.
 *
 * Right Column (50%):
 * - Eyebrow: CLOUD SECURITY & GOVERNANCE
 * - H1: Secure cloud foundations. Clear operational control. (56–64px desktop / 36–42px mobile)
 * - CTA: Discuss Your Cloud Security (visible inside 100% zoom viewport)
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SecurityHeroProps {
  onOpenDiscoveryModal?: (context?: string) => void;
}

export default function SecurityHero({
  onOpenDiscoveryModal,
}: SecurityHeroProps) {
  const router = useRouter();

  const handleCtaClick = () => {
    if (onOpenDiscoveryModal) {
      onOpenDiscoveryModal("Cloud Security & Governance Hero");
    } else {
      router.push("/contact");
    }
  };

  // Sequential Reveal Timing (550–680ms total, never blanks Hero on initial load)
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
            {/* LEFT COLUMN: CONCEPTUAL SECURITY BOUNDARY ARCHITECTURE GRAPHIC    */}
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
                  aria-label="Conceptual architectural blueprint showing nested cloud security boundaries, access and control channels, and outer monitoring and governance framing"
                >
                  {/* ------------------------------------------------------------- */}
                  {/* 1. GOVERNANCE & VISIBILITY OUTER PERIMETER FRAME              */}
                  {/* ------------------------------------------------------------- */}
                  {/* Outer Architectural Governance Zone */}
                  <rect
                    x="56"
                    y="48"
                    width="428"
                    height="324"
                    rx="2"
                    stroke="#F5F7F6"
                    strokeOpacity="0.22"
                    strokeWidth="1.15"
                  />
                  {/* Upper Governance Header Partition Bar */}
                  <line
                    x1="56"
                    y1="88"
                    x2="484"
                    y2="88"
                    stroke="#C9A35B"
                    strokeOpacity="0.52"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="56"
                    y1="48"
                    x2="484"
                    y2="48"
                    stroke="#C9A35B"
                    strokeOpacity="0.82"
                    strokeWidth="1.5"
                  />
                  {/* Subtle Governance Segment Ticks inside header bar */}
                  <line x1="168" y1="48" x2="168" y2="88" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />
                  <line x1="372" y1="48" x2="372" y2="88" stroke="#F5F7F6" strokeOpacity="0.18" strokeWidth="1" />
                  <line x1="82" y1="68" x2="146" y2="68" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1" />
                  <line x1="200" y1="68" x2="340" y2="68" stroke="#C9A35B" strokeOpacity="0.65" strokeWidth="1.15" />
                  <line x1="396" y1="68" x2="458" y2="68" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1" />

                  {/* Monitoring Perimeter Reference Lines (Left & Right Vertical Rails) */}
                  <line
                    x1="92"
                    y1="108"
                    x2="92"
                    y2="348"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                  <line
                    x1="448"
                    y1="108"
                    x2="448"
                    y2="348"
                    stroke="#F5F7F6"
                    strokeOpacity="0.16"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* 2. ACCESS & CONTROL MEDIATION BOUNDARY (Left-to-Center Gate)  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Access Control Partition Strip */}
                  <rect
                    x="114"
                    y="112"
                    width="82"
                    height="236"
                    rx="2"
                    fill="#141716"
                    stroke="#F5F7F6"
                    strokeOpacity="0.3"
                    strokeWidth="1.15"
                  />
                  {/* Segmented Policy Check Gates */}
                  <rect x="128" y="130" width="54" height="38" rx="1.5" stroke="#C9A35B" strokeOpacity="0.6" strokeWidth="1.1" />
                  <rect x="128" y="186" width="54" height="38" rx="1.5" stroke="#F5F7F6" strokeOpacity="0.28" strokeWidth="1" />
                  <rect x="128" y="242" width="54" height="38" rx="1.5" stroke="#C9A35B" strokeOpacity="0.6" strokeWidth="1.1" />
                  <rect x="128" y="298" width="54" height="34" rx="1.5" stroke="#F5F7F6" strokeOpacity="0.24" strokeWidth="1" />

                  {/* Controlled Traversal Channels into Enclave */}
                  <line x1="182" y1="149" x2="232" y2="149" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.35" />
                  <line x1="182" y1="205" x2="232" y2="205" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1.1" />
                  <line x1="182" y1="261" x2="232" y2="261" stroke="#C9A35B" strokeOpacity="0.82" strokeWidth="1.35" />
                  <line x1="182" y1="315" x2="232" y2="315" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1.1" />

                  {/* Control Boundary Vertical Threshold Line */}
                  <line
                    x1="214"
                    y1="108"
                    x2="214"
                    y2="352"
                    stroke="#C9A35B"
                    strokeOpacity="0.72"
                    strokeWidth="1.3"
                  />
                  {/* Precision Boundary Datum Squares */}
                  <rect x="210" y="145" width="8" height="8" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />
                  <rect x="210" y="257" width="8" height="8" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />

                  {/* ------------------------------------------------------------- */}
                  {/* 3. SEGMENTED CLOUD ENVIRONMENT ARCHITECTURE (Right Enclave)   */}
                  {/* ------------------------------------------------------------- */}
                  <rect
                    x="232"
                    y="112"
                    width="196"
                    height="236"
                    rx="2"
                    fill="#161A18"
                    stroke="#F5F7F6"
                    strokeOpacity="0.44"
                    strokeWidth="1.25"
                  />

                  {/* Isolated Segment Zone A: Identity & Policy Plane */}
                  <rect
                    x="248"
                    y="128"
                    width="164"
                    height="56"
                    rx="1.5"
                    fill="#191D1B"
                    stroke="#C9A35B"
                    strokeOpacity="0.58"
                    strokeWidth="1.15"
                  />
                  <line x1="262" y1="149" x2="366" y2="149" stroke="#F5F7F6" strokeOpacity="0.45" strokeWidth="1.1" />
                  <line x1="262" y1="163" x2="336" y2="163" stroke="#C9A35B" strokeOpacity="0.55" strokeWidth="1" />
                  <rect x="382" y="143" width="16" height="24" stroke="#C9A35B" strokeOpacity="0.65" strokeWidth="1" />

                  {/* Isolated Segment Zone B: Workload & Service Tier */}
                  <rect
                    x="248"
                    y="198"
                    width="164"
                    height="68"
                    rx="1.5"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.32"
                    strokeWidth="1.1"
                  />
                  <rect x="262" y="212" width="62" height="40" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />
                  <rect x="336" y="212" width="62" height="40" stroke="#F5F7F6" strokeOpacity="0.32" strokeWidth="1" />

                  {/* Isolated Segment Zone C: Protected Data & Configuration Foundation */}
                  <rect
                    x="248"
                    y="280"
                    width="164"
                    height="52"
                    rx="1.5"
                    fill="#181C1A"
                    stroke="#F5F7F6"
                    strokeOpacity="0.36"
                    strokeWidth="1.1"
                  />
                  <line x1="262" y1="300" x2="394" y2="300" stroke="#F5F7F6" strokeOpacity="0.34" strokeWidth="1.1" />
                  <line x1="262" y1="314" x2="362" y2="314" stroke="#C9A35B" strokeOpacity="0.58" strokeWidth="1.1" />

                  {/* Vertical Governance Audit Conduit Linking All Segments to Top Governance Bar */}
                  <line
                    x1="330"
                    y1="88"
                    x2="330"
                    y2="348"
                    stroke="#C9A35B"
                    strokeOpacity="0.28"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <rect x="326" y="84" width="8" height="8" fill="#111312" stroke="#C9A35B" strokeWidth="1.2" />
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
                <span>Cloud Security &amp; Governance</span>
              </motion.div>

              {/* H1 (56–64px Desktop / 36–42px Mobile — unified compositing layer) */}
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
                Secure cloud foundations. Clear operational control.
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
                Strengthen cloud architecture, governance and security controls with a considered approach to visibility, monitoring and protection.
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
                  aria-label="Discuss Your Cloud Security"
                >
                  Discuss Your Cloud Security
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

