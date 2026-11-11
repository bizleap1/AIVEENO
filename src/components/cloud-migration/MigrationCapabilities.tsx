"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Migration & Modernization
 * SECTION 04: MIGRATION & MODERNIZATION CAPABILITIES (#111312 Dark Graphite)
 *
 * MAIN TECHNICAL VISUAL SECTION:
 * - Architectural 3-zone conceptual transition composition:
 *   1) EXISTING ENVIRONMENT -> 2) TRANSITION & MODERNIZATION -> 3) TARGET ENVIRONMENT
 * - Horizontal architectural progression on desktop, crisp vertical stack on mobile
 * - Six core migration & modernization capabilities displayed openly underneath in a clean
 *   3x2 typographic hairline layout (never hidden inside tabs/accordions, distinct from Consulting)
 * - Subtle hover/focus cross-highlighting between capabilities and their primary architectural zone
 * - Zero fake server counts, zero percentages, zero telemetry dashboards, zero guaranteed downtime claims
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type ZoneKey = "existing" | "transition" | "target";

interface ArchitectureZone {
  key: ZoneKey;
  code: string;
  label: string;
  sublabel: string;
  elements: string[];
  accent?: boolean;
}

const ARCHITECTURE_ZONES: ArchitectureZone[] = [
  {
    key: "existing",
    code: "01",
    label: "Existing Environment",
    sublabel: "Current Estate & Scope",
    elements: [
      "Applications & Services",
      "Workload Dependencies",
      "Operational Constraints",
    ],
  },
  {
    key: "transition",
    code: "02",
    label: "Transition & Modernization",
    sublabel: "Sequencing & Restructuring",
    elements: [
      "Migration Sequencing",
      "Architecture Restructuring",
      "Security & Continuity Planning",
    ],
    accent: true,
  },
  {
    key: "target",
    code: "03",
    label: "Target Environment",
    sublabel: "Modernized Foundation",
    elements: [
      "Modernized Cloud Architecture",
      "Updated Applications",
      "Operational Validation",
    ],
  },
];

interface MigrationCapability {
  number: string;
  title: string;
  description: string;
  zone: ZoneKey;
  zoneTag: string;
}

const MIGRATION_CAPABILITIES: MigrationCapability[] = [
  {
    number: "01",
    title: "Workload & Dependency Assessment",
    description:
      "Evaluate applications, infrastructure and dependencies relevant to a migration.",
    zone: "existing",
    zoneTag: "Existing Environment",
  },
  {
    number: "02",
    title: "Migration Planning",
    description:
      "Consider transition sequencing, workload requirements and operational constraints.",
    zone: "transition",
    zoneTag: "Transition",
  },
  {
    number: "03",
    title: "Cloud Architecture Modernization",
    description:
      "Evaluate appropriate architectural changes for modern cloud environments.",
    zone: "target",
    zoneTag: "Target Environment",
  },
  {
    number: "04",
    title: "Application Modernization",
    description:
      "Identify applications that may benefit from updates, restructuring or modernization.",
    zone: "transition",
    zoneTag: "Modernization",
  },
  {
    number: "05",
    title: "Security & Continuity Planning",
    description:
      "Incorporate security requirements and business continuity considerations.",
    zone: "transition",
    zoneTag: "Continuity & Controls",
  },
  {
    number: "06",
    title: "Validation & Optimization",
    description:
      "Review transitioned environments against relevant operational requirements and identify opportunities for improvement.",
    zone: "target",
    zoneTag: "Target Environment",
  },
];

export default function MigrationCapabilities() {
  const [hoveredZone, setHoveredZone] = useState<ZoneKey | null>(null);

  return (
    <section
      id="migration-capabilities"
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
                <span>Our Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  A considered path from existing to modern.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[460px]"
              >
                Different environments require different migration and modernization decisions.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* ARCHITECTURAL 3-ZONE MIGRATION EXHIBIT                            */}
          {/* Existing Environment -> Transition & Modernization -> Target Env  */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: transitionEase, delay: 0.08 }}
            className="rounded-[10px] border border-white/[0.11] bg-[#161918] p-4 sm:p-6 lg:p-8"
          >
            {/* Exhibit Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-white/[0.08]">
              <span className="font-sans text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.13em] text-[#9FA5A1]">
                Conceptual Migration &amp; Modernization Scope
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Illustrative transition model — adapted per workload
              </span>
            </div>

            {/* Three Connected Architectural Zones (Horizontal Desktop / Vertical Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-3 lg:gap-0 items-stretch">
              {ARCHITECTURE_ZONES.map((zone, idx) => {
                const isEmphasized = hoveredZone === zone.key;
                const isDimmed = hoveredZone !== null && hoveredZone !== zone.key;

                return (
                  <div
                    key={zone.key}
                    className={`contents lg:contents`}
                  >
                    {/* Zone Column (3 of 11 cols on Desktop each -> 9 cols + 2 cols connectors) */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{
                        duration: 0.65,
                        ease: transitionEase,
                        delay: 0.12 + idx * 0.14,
                      }}
                      className={`lg:col-span-3 rounded-[6px] border p-4 sm:p-5 flex flex-col justify-between transition-colors duration-200 ${
                        isEmphasized
                          ? "border-[#C9A35B]/80 bg-[#1D211F]"
                          : zone.accent
                          ? "border-[#C9A35B]/45 bg-[#1B1F1D]"
                          : "border-white/[0.12] bg-[#191C1B]"
                      } ${isDimmed ? "opacity-75" : "opacity-100"}`}
                    >
                      <div className="space-y-4">
                        {/* Zone Header */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-sans text-[10.5px] font-semibold tracking-[0.14em] ${
                                zone.accent || isEmphasized
                                  ? "text-[#C9A35B]"
                                  : "text-[#9FA5A1]"
                              }`}
                            >
                              {zone.code}
                            </span>
                            <span
                              className="h-px w-3 bg-white/[0.18]"
                              aria-hidden="true"
                            />
                            <span className="font-sans text-[10.5px] uppercase tracking-[0.1em] text-[#9FA5A1]">
                              {zone.sublabel}
                            </span>
                          </div>

                          <h3 className="font-sans font-medium text-[17px] sm:text-[18px] text-[#F5F7F6] tracking-[-0.015em] leading-snug pt-0.5 uppercase">
                            {zone.label}
                          </h3>
                        </div>

                        {/* Clean Architectural Layers within Zone (Zero fake counts/metrics) */}
                        <div className="space-y-2 border-t border-white/[0.07] pt-3">
                          {zone.elements.map((el) => (
                            <div
                              key={el}
                              className={`rounded-[4px] border px-3 py-2 font-sans text-[13px] leading-snug transition-colors duration-200 ${
                                isEmphasized
                                  ? "border-[#C9A35B]/40 text-[#F5F7F6] bg-[#161918]"
                                  : "border-white/[0.08] text-[#C5CBC7] bg-[#151817]"
                              }`}
                            >
                              {el}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Bridge Tracks between Zone 01 -> 02 -> 03 */}
                    {idx < ARCHITECTURE_ZONES.length - 1 && (
                      <>
                        {/* Desktop Horizontal Structural Coupling */}
                        <div
                          className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center px-1 gap-3.5"
                          aria-hidden="true"
                        >
                          <span
                            className={`w-full h-px transition-colors duration-200 ${
                              hoveredZone === "transition" || hoveredZone === ARCHITECTURE_ZONES[idx].key || hoveredZone === ARCHITECTURE_ZONES[idx + 1].key
                                ? "bg-[#C9A35B]/85"
                                : "bg-white/[0.18]"
                            }`}
                          />
                          <span
                            className={`w-full h-px transition-colors duration-200 ${
                              hoveredZone !== null
                                ? "bg-[#C9A35B]/75"
                                : "bg-[#C9A35B]/55"
                            }`}
                          />
                          <span
                            className={`w-full h-px transition-colors duration-200 ${
                              hoveredZone === "transition" || hoveredZone === ARCHITECTURE_ZONES[idx].key || hoveredZone === ARCHITECTURE_ZONES[idx + 1].key
                                ? "bg-[#C9A35B]/85"
                                : "bg-white/[0.18]"
                            }`}
                          />
                        </div>

                        {/* Mobile Vertical Coupling Stem */}
                        <div
                          className="flex lg:hidden items-center justify-around px-16 py-0.5"
                          aria-hidden="true"
                        >
                          <span className="w-px h-4 bg-[#C9A35B]/55" />
                          <span className="w-px h-4 bg-white/[0.18]" />
                          <span className="w-px h-4 bg-[#C9A35B]/55" />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Exhibit Legend / Disclaimer */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                Illustrative transition architecture showing how environment analysis, modernization decisions and operational validation connect.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">Continuity &amp; architectural fit</span>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* SIX CAPABILITIES IN READABLE EDITORIAL HIERARCHY (Always Visible) */}
          {/* ================================================================= */}
          <div
            id="migration-capabilities-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-12 gap-y-8 border-t border-white/[0.10] pt-9 sm:pt-10"
          >
            {MIGRATION_CAPABILITIES.map((cap, idx) => {
              const isZoneActive = hoveredZone === cap.zone;

              return (
                <motion.div
                  key={cap.number}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.5,
                    ease: transitionEase,
                    delay: 0.06 + idx * 0.05,
                  }}
                  onMouseEnter={() => setHoveredZone(cap.zone)}
                  onMouseLeave={() => setHoveredZone(null)}
                  onFocus={() => setHoveredZone(cap.zone)}
                  onBlur={() => setHoveredZone(null)}
                  className="group space-y-2.5 pb-6 border-b border-white/[0.08] transition-colors duration-200"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-sans text-[11px] font-medium tracking-[0.14em] transition-colors duration-200 ${
                          isZoneActive
                            ? "text-[#C9A35B]"
                            : "text-[#9FA5A1] group-hover:text-[#C9A35B]"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-px transition-colors duration-200 ${
                          isZoneActive
                            ? "w-5 bg-[#C9A35B]"
                            : "w-3 bg-white/[0.18] group-hover:bg-[#C9A35B]/75"
                        }`}
                      />
                      <span className="font-sans text-[10.5px] uppercase tracking-[0.12em] text-[#9FA5A1]">
                        {cap.zoneTag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans font-medium text-[19px] sm:text-[20px] text-[#F5F7F6] tracking-[-0.015em] leading-[1.28] pt-0.5">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.58] font-normal">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

