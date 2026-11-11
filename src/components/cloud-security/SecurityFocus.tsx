"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 03: WHAT WE DO (#EEF1F0 Alternate Light Editorial Surface)
 *
 * Asymmetric Consulting Composition:
 * - Left Column: Primary architectural security & accountability statement
 * - Right Column: Connected vertical architectural spine uniting:
 *   SECURE ARCHITECTURE <-> GOVERNANCE & CONTROLS <-> MONITORING & PROTECTION
 * - Distinct from Consulting's numbered horizontal chapters; no cards, no jargon walls,
 *   no decorative hover effects
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface SecurityPillar {
  label: string;
  description: string;
}

const SECURITY_PILLARS: SecurityPillar[] = [
  {
    label: "Secure Architecture",
    description:
      "Evaluate cloud architecture and security considerations relevant to workloads, access and infrastructure.",
  },
  {
    label: "Governance & Controls",
    description:
      "Consider policies, responsibilities and controls needed to support organizational requirements.",
  },
  {
    label: "Monitoring & Protection",
    description:
      "Address security visibility, monitoring considerations and protection priorities.",
  },
];

export default function SecurityFocus() {
  return (
    <section
      id="what-we-do"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#EEF1F0] text-[#111312] py-14 sm:py-16 lg:py-22"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Primary Statement */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Our Security Approach</span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#111312] tracking-[-0.03em] leading-[1.06] max-w-[520px]"
              >
                Security needs architecture and accountability.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[470px] pt-1"
            >
              We approach cloud security through the relationship between technology architecture, governance and operational visibility.
            </motion.p>
          </div>

          {/* Right Column: Connected Three-Pillar Security Architecture Axis */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            {/* Restrained Vertical Spine Linking Architecture -> Governance -> Monitoring */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute left-[7px] top-4 bottom-8 w-px bg-[#0D1B2A]/[0.16]"
            />

            <div className="space-y-8 sm:space-y-10">
              {SECURITY_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.08 + idx * 0.09,
                  }}
                  className="relative sm:pl-9 space-y-2 border-b sm:border-b-0 border-[#0D1B2A]/[0.09] pb-6 sm:pb-0 last:border-b-0 last:pb-0"
                >
                  {/* Square Boundary Marker along Structural Connector Rail */}
                  <span
                    aria-hidden="true"
                    className={`hidden sm:block absolute left-0 top-[6px] w-[15px] h-[15px] border bg-[#EEF1F0] ${
                      idx === 1
                        ? "border-[#C9A35B]"
                        : "border-[#0D1B2A]/35"
                    }`}
                  >
                    <span
                      className={`block w-[5px] h-[5px] m-[4px] ${
                        idx === 1 ? "bg-[#C9A35B]" : "bg-[#111312]/55"
                      }`}
                    />
                  </span>

                  <h3 className="font-sans text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.13em] text-[#8E6C2A]">
                    {pillar.label}
                  </h3>

                  <p className="font-sans text-[17px] sm:text-[18.5px] lg:text-[19.5px] text-[#111312] leading-[1.48] tracking-[-0.012em] font-normal max-w-[540px]">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

