"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Security & Governance
 * SECTION 04: CORE SECURITY CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * PRINCIPAL VISUAL SECTION:
 * - Architectural security & governance boundary composition uniting:
 *   GOVERNANCE | VISIBILITY | ACCESS | ARCHITECTURE | CLOUD ENVIRONMENT | PROTECTION
 * - Restrained gold structural rules and crisp editorial lines — zero fake dashboards,
 *   zero risk scores, zero invented audit results, zero compliance badges, zero shields.
 * - All six proposed service capabilities remain openly visible underneath in a clean
 *   2-column x 3-row open typographic grid (no interaction needed to read any capability).
 * - Subtle hover/focus contrast emphasis highlights the related architectural layer.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type SecurityLayerKey =
  | "architecture"
  | "access"
  | "governance"
  | "environment"
  | "visibility"
  | "protection";

interface SecurityCapability {
  number: string;
  layer: SecurityLayerKey;
  layerTag: string;
  title: string;
  description: string;
}

const SECURITY_CAPABILITIES: SecurityCapability[] = [
  {
    number: "01",
    layer: "architecture",
    layerTag: "Architecture",
    title: "Security Architecture Review",
    description:
      "Evaluate architectural security considerations across cloud environments.",
  },
  {
    number: "02",
    layer: "access",
    layerTag: "Access",
    title: "Identity & Access Considerations",
    description:
      "Review access models and relevant identity-related control requirements.",
  },
  {
    number: "03",
    layer: "governance",
    layerTag: "Governance",
    title: "Governance & Policy Alignment",
    description:
      "Consider how cloud governance and operational responsibilities are defined.",
  },
  {
    number: "04",
    layer: "environment",
    layerTag: "Cloud Environment",
    title: "Configuration & Control Review",
    description:
      "Evaluate relevant configuration and security control considerations.",
  },
  {
    number: "05",
    layer: "visibility",
    layerTag: "Visibility",
    title: "Security Monitoring & Visibility",
    description:
      "Identify monitoring and visibility requirements for cloud environments.",
  },
  {
    number: "06",
    layer: "protection",
    layerTag: "Protection",
    title: "Protection & Improvement Priorities",
    description:
      "Identify areas where security protections and controls may require improvement.",
  },
];

export default function SecurityCapabilities() {
  const [activeLayer, setActiveLayer] = useState<SecurityLayerKey | null>(null);

  const layerClass = (key: SecurityLayerKey, highlightGold?: boolean) => {
    const isActive = activeLayer === key;
    const isDimmed = activeLayer !== null && !isActive;

    return `transition-all duration-200 ${
      isActive
        ? "border-[#C9A35B]/85 bg-[#1D221F] text-[#FFFFFF]"
        : highlightGold
        ? "border-[#C9A35B]/45 bg-[#1B1F1D] text-[#F5F7F6]"
        : "border-white/[0.12] bg-[#191C1B] text-[#F5F7F6]"
    } ${isDimmed ? "opacity-70" : "opacity-100"}`;
  };

  return (
    <section
      id="security-capabilities"
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
                <span>Security &amp; Governance Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Visibility, controls and protection across the environment.
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
                Cloud security decisions should reflect the architecture, risks and operational requirements of each organization.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* ARCHITECTURAL SECURITY & GOVERNANCE BOUNDARY EXHIBIT              */}
          {/* Six Conceptual Layers: GOVERNANCE | VISIBILITY | ACCESS |         */}
          {/* ARCHITECTURE | CLOUD ENVIRONMENT | PROTECTION                     */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: transitionEase, delay: 0.08 }}
            className="rounded-[10px] border border-white/[0.11] bg-[#161918] p-4 sm:p-6 lg:p-8"
          >
            {/* Exhibit Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-white/[0.08]">
              <span className="font-sans text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.13em] text-[#9FA5A1]">
                Security &amp; Governance Boundary Model
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Proposed capability considerations — not a deployed telemetry system
              </span>
            </div>

            {/* DESKTOP ARCHITECTURAL BOUNDARY MAP */}
            <div className="hidden lg:flex flex-col space-y-3">
              {/* Upper Governing Plane: GOVERNANCE + VISIBILITY */}
              <div className="grid grid-cols-12 gap-3">
                <div
                  className={`col-span-6 rounded-[6px] border px-5 py-4 flex items-center justify-between ${layerClass(
                    "governance",
                    true
                  )}`}
                >
                  <div>
                    <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                      Oversight Layer
                    </span>
                    <span className="block font-sans text-[15px] font-medium uppercase tracking-[0.04em] mt-0.5">
                      Governance
                    </span>
                  </div>
                  <span className="font-sans text-[12px] text-[#AEB3AF]">
                    Policies &amp; responsibilities
                  </span>
                </div>

                <div
                  className={`col-span-6 rounded-[6px] border px-5 py-4 flex items-center justify-between ${layerClass(
                    "visibility"
                  )}`}
                >
                  <div>
                    <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                      Operational Layer
                    </span>
                    <span className="block font-sans text-[15px] font-medium uppercase tracking-[0.04em] mt-0.5">
                      Visibility
                    </span>
                  </div>
                  <span className="font-sans text-[12px] text-[#AEB3AF]">
                    Security monitoring context
                  </span>
                </div>
              </div>

              {/* Architectural Control Coupling Line — aligned to Access (12.5%), Architecture (50%), Protection (87.5%) */}
              <div className="grid grid-cols-12 gap-3" aria-hidden="true">
                <div className="col-span-3 flex justify-center">
                  <div className="w-px h-3.5 bg-[#C9A35B]/50" />
                </div>
                <div className="col-span-6 flex justify-center">
                  <div className="w-px h-3.5 bg-[#C9A35B]/65" />
                </div>
                <div className="col-span-3 flex justify-center">
                  <div className="w-px h-3.5 bg-white/[0.22]" />
                </div>
              </div>

              {/* Core Enclave Horizontal Chain: ACCESS -> ARCHITECTURE (holding CLOUD ENVIRONMENT) -> PROTECTION */}
              <div className="grid grid-cols-12 gap-3 items-stretch">
                {/* 1. ACCESS Gate */}
                <div
                  className={`col-span-3 rounded-[6px] border p-4 flex flex-col justify-between ${layerClass(
                    "access"
                  )}`}
                >
                  <div>
                    <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                      Entry Controls
                    </span>
                    <h4 className="font-sans text-[15.5px] font-medium uppercase tracking-[0.04em] mt-1">
                      Access
                    </h4>
                  </div>
                  <p className="font-sans text-[12.5px] text-[#AEB3AF] leading-relaxed mt-3">
                    Identity models and access control boundaries
                  </p>
                </div>

                {/* 2. ARCHITECTURE Boundary housing CLOUD ENVIRONMENT */}
                <div
                  className={`col-span-6 rounded-[6px] border p-4 flex flex-col justify-between ${layerClass(
                    "architecture",
                    true
                  )}`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div>
                      <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                        Structural Foundation
                      </span>
                      <span className="block font-sans text-[15.5px] font-medium uppercase tracking-[0.04em] mt-0.5">
                        Architecture
                      </span>
                    </div>
                    <span className="font-sans text-[12px] text-[#AEB3AF]">
                      Workloads &amp; network boundaries
                    </span>
                  </div>

                  {/* Nested CLOUD ENVIRONMENT Anchor */}
                  <div
                    className={`mt-3 rounded-[4px] border px-4 py-3 flex items-center justify-between ${layerClass(
                      "environment"
                    )}`}
                  >
                    <span className="font-sans text-[13.5px] font-medium uppercase tracking-[0.04em] text-[#F5F7F6]">
                      Cloud Environment
                    </span>
                    <span className="font-sans text-[12px] text-[#AEB3AF]">
                      Configurations, workloads &amp; controls
                    </span>
                  </div>
                </div>

                {/* 3. PROTECTION Priorities */}
                <div
                  className={`col-span-3 rounded-[6px] border p-4 flex flex-col justify-between ${layerClass(
                    "protection"
                  )}`}
                >
                  <div>
                    <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                      Safeguards
                    </span>
                    <h4 className="font-sans text-[15.5px] font-medium uppercase tracking-[0.04em] mt-1">
                      Protection
                    </h4>
                  </div>
                  <p className="font-sans text-[12.5px] text-[#AEB3AF] leading-relaxed mt-3">
                    Control improvements and protection priorities
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE SIMPLIFIED VERTICAL BOUNDARY OVERVIEW */}
            <div className="lg:hidden space-y-2.5">
              <div className="rounded-[5px] border border-[#C9A35B]/45 bg-[#1B1F1D] px-3.5 py-2.5 flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 text-[12.5px]">
                <span className="font-medium uppercase tracking-[0.04em] text-[#F5F7F6]">
                  Governance &amp; Visibility
                </span>
                <span className="text-[11.5px] text-[#C9A35B] shrink-0">
                  Oversight plane
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-[12.5px]">
                <div className="rounded-[5px] border border-white/[0.12] bg-[#191C1B] px-3.5 py-2.5">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-[#9FA5A1]">
                    Boundary
                  </span>
                  <span className="font-medium uppercase text-[#F5F7F6]">
                    Access
                  </span>
                </div>
                <div className="rounded-[5px] border border-white/[0.12] bg-[#191C1B] px-3.5 py-2.5">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-[#9FA5A1]">
                    Safeguards
                  </span>
                  <span className="font-medium uppercase text-[#F5F7F6]">
                    Protection
                  </span>
                </div>
              </div>
              <div className="rounded-[5px] border border-[#C9A35B]/40 bg-[#181C1A] px-3.5 py-2.5 flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 text-[12.5px]">
                <span className="font-medium uppercase tracking-[0.04em] text-[#F5F7F6]">
                  Architecture &rarr; Cloud Environment
                </span>
                <span className="text-[11.5px] text-[#9FA5A1] shrink-0">
                  Core scope
                </span>
              </div>
            </div>

            {/* Exhibit Legend */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                Conceptual relationship between governance oversight, access boundaries, architecture and operational visibility.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">
                Architectural clarity &amp; control
              </span>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* SIX CAPABILITIES (2x3 Open Typographic Hairline Grid)              */}
          {/* Always Visible & Readable Without Clicking                        */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-0 border-t border-white/[0.12]">
            {SECURITY_CAPABILITIES.map((cap, idx) => {
              const isHighlighted = activeLayer === cap.layer;

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
                  onMouseEnter={() => setActiveLayer(cap.layer)}
                  onMouseLeave={() => setActiveLayer(null)}
                  onFocus={() => setActiveLayer(cap.layer)}
                  onBlur={() => setActiveLayer(null)}
                  tabIndex={0}
                  className="group py-6 sm:py-7 border-b border-white/[0.08] space-y-2 focus:outline-none transition-colors duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-sans text-[11px] font-semibold tracking-[0.14em] transition-colors duration-200 ${
                        isHighlighted
                          ? "text-[#C9A35B]"
                          : "text-[#9FA5A1] group-hover:text-[#C9A35B]"
                      }`}
                    >
                      {cap.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-200 ${
                        isHighlighted
                          ? "w-5 bg-[#C9A35B]"
                          : "w-3 bg-white/[0.2] group-hover:bg-[#C9A35B]/80"
                      }`}
                    />
                    <span className="font-sans text-[10.5px] uppercase tracking-[0.12em] text-[#9FA5A1]">
                      {cap.layerTag}
                    </span>
                  </div>

                  <h3
                    className={`font-sans font-medium text-[19px] sm:text-[20.5px] tracking-[-0.015em] leading-[1.28] pt-0.5 transition-colors duration-200 ${
                      isHighlighted ? "text-[#FFFFFF]" : "text-[#F5F7F6]"
                    }`}
                  >
                    {cap.title}
                  </h3>

                  <p className="font-sans text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[500px]">
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

