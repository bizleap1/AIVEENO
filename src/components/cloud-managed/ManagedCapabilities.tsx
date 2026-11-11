"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Managed Services
 * SECTION 04: MANAGED SERVICE CAPABILITIES (#111312 Dark Graphite)
 *
 * MAIN TECHNICAL VISUAL SECTION:
 * - Architectural operational overview connecting ONE central concept:
 *   `CLOUD ENVIRONMENT`
 *   to five ongoing management disciplines:
 *   01 — Availability Management
 *   02 — Performance Monitoring
 *   03 — Security Operations Coordination
 *   04 — Resource & Cost Visibility
 *   05 — Operational Maintenance
 * - Communicates operational relationships with fine lines, clear typography, and
 *   restrained muted-gold emphasis (#C9A35B).
 * - All five capabilities remain openly readable at all times without interaction.
 * - Restrained hover/focus visual emphasis only. Zero fake dashboards, charts,
 *   incident counts, uptime percentages, or SLA promises.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface ManagedDiscipline {
  number: string;
  shortLabel: string;
  title: string;
  description: string;
  nodeY: number;
}

const MANAGED_DISCIPLINES: ManagedDiscipline[] = [
  {
    number: "01",
    shortLabel: "Availability Management",
    title: "Availability Management",
    description:
      "Review service availability and relevant operational conditions.",
    nodeY: 68,
  },
  {
    number: "02",
    shortLabel: "Performance Monitoring",
    title: "Performance Monitoring",
    description:
      "Monitor applicable performance indicators and investigate emerging issues.",
    nodeY: 146,
  },
  {
    number: "03",
    shortLabel: "Security Ops Coordination",
    title: "Security Operations Coordination",
    description:
      "Support operational security monitoring and coordination within agreed responsibilities.",
    nodeY: 224,
  },
  {
    number: "04",
    shortLabel: "Resource & Cost Visibility",
    title: "Resource & Cost Visibility",
    description:
      "Review cloud resource utilization and opportunities to improve efficiency.",
    nodeY: 302,
  },
  {
    number: "05",
    shortLabel: "Operational Maintenance",
    title: "Operational Maintenance",
    description:
      "Support agreed maintenance activities, updates and operational improvements.",
    nodeY: 380,
  },
];

export default function ManagedCapabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="managed-capabilities"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#111312] text-[#F5F7F6] py-14 sm:py-16 lg:py-22 border-t border-b border-white/[0.08]"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Editorial Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
                <span>Core Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Operational control. Continuous improvement.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[480px]"
              >
                Cloud management requires visibility across the environment and a structured approach to operational priorities.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* ARCHITECTURAL OPERATIONAL RELATIONSHIP OVERVIEW                   */}
          {/* Central `CLOUD ENVIRONMENT` <-> Five Management Disciplines       */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: transitionEase, delay: 0.08 }}
            className="rounded-[10px] border border-white/[0.11] bg-[#161918] p-4 sm:p-6 lg:p-8"
          >
            {/* Exhibit Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 lg:mb-8 border-b border-white/[0.08]">
              <span className="font-sans text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.13em] text-[#9FA5A1]">
                Operational Management Architecture
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Proposed service capability scope — tailored to agreed responsibilities
              </span>
            </div>

            {/* Split Composition: Relationship Architecture Diagram (Left) + All 5 Open Capabilities (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* LEFT: Desktop Architectural SVG Relationship Composition (`CLOUD ENVIRONMENT` <-> 01..05) */}
              <div className="hidden lg:block lg:col-span-5 select-none">
                <svg
                  viewBox="0 0 460 448"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Conceptual operational overview showing the central Cloud Environment connected across five core management disciplines: Availability Management, Performance Monitoring, Security Operations Coordination, Resource and Cost Visibility, and Operational Maintenance"
                >
                  {/* Vertical Distribution Bus Spine */}
                  <line
                    x1="218"
                    y1="68"
                    x2="218"
                    y2="380"
                    stroke="#F5F7F6"
                    strokeOpacity="0.2"
                    strokeWidth="1.2"
                  />

                  {/* Primary Anchor Trunk from Cloud Environment Core to Distribution Bus */}
                  <line
                    x1="158"
                    y1="224"
                    x2="218"
                    y2="224"
                    stroke="#C9A35B"
                    strokeOpacity={activeIndex !== null ? "0.9" : "0.65"}
                    strokeWidth="1.5"
                    className="transition-all duration-200"
                  />

                  {/* Central Concept Block: CLOUD ENVIRONMENT */}
                  <rect
                    x="14"
                    y="156"
                    width="144"
                    height="136"
                    rx="4"
                    fill="#1B1F1D"
                    stroke="#C9A35B"
                    strokeOpacity={activeIndex !== null ? "0.9" : "0.58"}
                    strokeWidth="1.3"
                    className="transition-all duration-200"
                  />
                  {/* Inner Architectural Boundary Accent */}
                  <line
                    x1="14"
                    y1="156"
                    x2="158"
                    y2="156"
                    stroke="#C9A35B"
                    strokeWidth="2"
                  />
                  <line
                    x1="28"
                    y1="194"
                    x2="144"
                    y2="194"
                    stroke="#FFFFFF"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                  />

                  <text
                    x="28"
                    y="181"
                    fill="#C9A35B"
                    fontSize="9.5"
                    fontWeight="600"
                    letterSpacing="0.14em"
                    fontFamily="var(--font-sans), sans-serif"
                  >
                    MANAGED SCOPE
                  </text>
                  <text
                    x="28"
                    y="222"
                    fill="#F5F7F6"
                    fontSize="14.5"
                    fontWeight="600"
                    letterSpacing="0.01em"
                    fontFamily="var(--font-sans), sans-serif"
                  >
                    CLOUD
                  </text>
                  <text
                    x="28"
                    y="241"
                    fill="#F5F7F6"
                    fontSize="14.5"
                    fontWeight="600"
                    letterSpacing="0.01em"
                    fontFamily="var(--font-sans), sans-serif"
                  >
                    ENVIRONMENT
                  </text>
                  <text
                    x="28"
                    y="269"
                    fill="#9FA5A1"
                    fontSize="10.5"
                    fontFamily="var(--font-sans), sans-serif"
                  >
                    Workloads &amp; Services
                  </text>

                  {/* Five Connected Operational Discipline Branches */}
                  {MANAGED_DISCIPLINES.map((item, idx) => {
                    const isFocused = activeIndex === idx;
                    const isDimmed = activeIndex !== null && activeIndex !== idx;

                    return (
                      <g
                        key={item.number}
                        className="cursor-pointer transition-opacity duration-200"
                        style={{ opacity: isDimmed ? 0.5 : 1 }}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        {/* Horizontal Connector Branch from Spine to Discipline Node */}
                        <line
                          x1="218"
                          y1={item.nodeY}
                          x2="256"
                          y2={item.nodeY}
                          stroke={isFocused ? "#C9A35B" : "#F5F7F6"}
                          strokeOpacity={isFocused ? "0.95" : "0.28"}
                          strokeWidth={isFocused ? "1.6" : "1.1"}
                          className="transition-all duration-200"
                        />

                        {/* Square Technical Node Marker along Spine */}
                        <rect
                          x="215"
                          y={item.nodeY - 3}
                          width="6"
                          height="6"
                          fill={isFocused ? "#C9A35B" : "#161918"}
                          stroke={isFocused ? "#C9A35B" : "#C9A35B"}
                          strokeOpacity={isFocused ? "1" : "0.65"}
                          strokeWidth="1.1"
                        />

                        {/* Discipline Frame Box */}
                        <rect
                          x="256"
                          y={item.nodeY - 26}
                          width="192"
                          height="52"
                          rx="4"
                          fill={isFocused ? "#1E2320" : "#191C1B"}
                          stroke={isFocused ? "#C9A35B" : "#FFFFFF"}
                          strokeOpacity={isFocused ? "0.78" : "0.12"}
                          strokeWidth={isFocused ? "1.3" : "1"}
                          className="transition-all duration-200"
                        />

                        <text
                          x="270"
                          y={item.nodeY - 6}
                          fill={isFocused ? "#C9A35B" : "#9FA5A1"}
                          fontSize="9.5"
                          fontWeight="600"
                          letterSpacing="0.14em"
                          fontFamily="var(--font-sans), sans-serif"
                        >
                          {item.number}
                        </text>

                        <text
                          x="270"
                          y={item.nodeY + 12}
                          fill="#F5F7F6"
                          fontSize="12.5"
                          fontWeight="500"
                          fontFamily="var(--font-sans), sans-serif"
                        >
                          {item.shortLabel}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* MOBILE SIMPLIFIED CENTRAL ANCHOR BANNER */}
              <div className="lg:hidden rounded-[6px] border border-[#C9A35B]/45 bg-[#1B1F1D] px-4 py-3.5 flex items-center justify-between gap-3">
                <div>
                  <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                    Central Scope
                  </span>
                  <span className="block font-sans text-[15px] font-medium uppercase tracking-[0.02em] text-[#F5F7F6] mt-0.5">
                    Cloud Environment
                  </span>
                </div>
                <span className="font-sans text-[12px] text-[#9FA5A1] text-right">
                  5 connected disciplines
                </span>
              </div>

              {/* RIGHT: Five Core Managed Service Capabilities (Always Openly Visible) */}
              <div className="lg:col-span-7 border-t border-white/[0.09] divide-y divide-white/[0.08]">
                {MANAGED_DISCIPLINES.map((cap, idx) => {
                  const isFocused = activeIndex === idx;

                  return (
                    <motion.div
                      key={cap.number}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{
                        duration: 0.5,
                        ease: transitionEase,
                        delay: 0.06 + idx * 0.06,
                      }}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onFocus={() => setActiveIndex(idx)}
                      onBlur={() => setActiveIndex(null)}
                      tabIndex={0}
                      className={`group py-4 sm:py-5 transition-colors duration-200 focus:outline-none ${
                        isFocused ? "bg-white/[0.025] px-3 -mx-3 rounded-[4px]" : ""
                      }`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-5 items-baseline">
                        <div className="sm:col-span-5 flex items-start gap-2.5">
                          <span
                            className={`font-sans text-[11px] font-semibold tracking-[0.14em] pt-[5px] shrink-0 transition-colors duration-200 ${
                              isFocused
                                ? "text-[#C9A35B]"
                                : "text-[#9FA5A1] group-hover:text-[#C9A35B]"
                            }`}
                          >
                            {cap.number}
                          </span>
                          <h3
                            className={`font-sans font-medium text-[17.5px] sm:text-[18.5px] tracking-[-0.015em] leading-[1.28] transition-colors duration-200 ${
                              isFocused ? "text-[#FFFFFF]" : "text-[#F5F7F6]"
                            }`}
                          >
                            {cap.title}
                          </h3>
                        </div>

                        <p className="sm:col-span-7 font-sans text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.56] font-normal pl-6.5 sm:pl-0">
                          {cap.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Subtle Exhibit Legend */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                Illustrative operational overview mapping the cloud environment to ongoing oversight, coordination and maintenance activities.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">
                Governance &amp; operational discipline
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

