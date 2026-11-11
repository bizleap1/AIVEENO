"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Software Development
 * SECTION 04: DEVELOPMENT CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * MAIN VISUAL SECTION:
 * - Meaningful Multi-Plane Software Architecture Composition showing relationships across:
 *   1. BUSINESS WORKFLOWS (Top Operational Plane)
 *   2. APPLICATION LAYER <-> INTEGRATIONS (Middle Split Plane with Lateral Bridge)
 *   3. DATA & TECHNOLOGY FOUNDATIONS (Underlying Substrate Plane)
 * - Strictly distinct from Data Engineering's horizontal stream and DevOps's delivery pipeline.
 * - Zero fake screens, zero code terminals, zero deployment metrics, zero generic icons.
 * - Six proposed capability areas displayed openly underneath in a wide 2-column x 3-row
 *   hairline ledger; hovering/focusing any capability subtly emphasizes its relevant
 *   architecture layer(s) (180–220ms).
 * - Mobile: Clean vertical architecture progression + stacked 6 capability descriptions.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type ArchitectureLayerKey =
  | "workflows"
  | "application"
  | "integrations"
  | "foundations";

interface SoftwareCapability {
  number: string;
  layers: ArchitectureLayerKey[];
  layerLabel: string;
  title: string;
  description: string;
}

const SOFTWARE_CAPABILITIES: SoftwareCapability[] = [
  {
    number: "01",
    layers: ["workflows", "application"],
    layerLabel: "Custom Applications",
    title: "Custom Application Development",
    description:
      "Build applications around specific business processes and requirements.",
  },
  {
    number: "02",
    layers: ["workflows", "application", "foundations"],
    layerLabel: "Software Platforms",
    title: "Enterprise Software Platforms",
    description:
      "Design and develop software platforms to support organizational workflows.",
  },
  {
    number: "03",
    layers: ["application", "foundations"],
    layerLabel: "Modernization",
    title: "Application Modernization",
    description:
      "Evaluate and improve existing applications and underlying software structures.",
  },
  {
    number: "04",
    layers: ["application", "integrations"],
    layerLabel: "Connectivity",
    title: "System Integration",
    description:
      "Connect suitable applications and business systems through integrations.",
  },
  {
    number: "05",
    layers: ["application", "integrations", "foundations"],
    layerLabel: "Architecture",
    title: "Scalable Software Architecture",
    description:
      "Consider architectural approaches that support evolving requirements.",
  },
  {
    number: "06",
    layers: ["application", "foundations"],
    layerLabel: "Continuity",
    title: "Application Maintenance",
    description:
      "Support agreed updates, improvements and ongoing maintenance activities.",
  },
];

export default function SoftwareCapabilities() {
  const [activeLayers, setActiveLayers] = useState<
    ArchitectureLayerKey[] | null
  >(null);

  const layerClass = (key: ArchitectureLayerKey, defaultGold?: boolean) => {
    const isActive = activeLayers !== null && activeLayers.includes(key);
    const isDimmed = activeLayers !== null && !activeLayers.includes(key);

    return `transition-all duration-200 ${
      isActive
        ? "border-[#C9A35B]/85 bg-[#1D221F] text-[#FFFFFF]"
        : defaultGold
        ? "border-[#C9A35B]/45 bg-[#191D1B] text-[#F5F7F6]"
        : "border-white/[0.12] bg-[#181B1A] text-[#F5F7F6]"
    } ${isDimmed ? "opacity-65" : "opacity-100"}`;
  };

  return (
    <section
      id="development-capabilities"
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
                <span>Development Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Applications designed to work together.
                </motion.h2>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.14 }}
                className="font-sans text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[490px]"
              >
                Effective software engineering considers application functionality, architecture, integration and maintainability together.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* CONCEPTUAL MULTI-PLANE SOFTWARE ARCHITECTURE EXHIBIT              */}
          {/* BUSINESS WORKFLOWS                                                */}
          {/* APPLICATION LAYER  <-->  INTEGRATIONS                             */}
          {/* DATA & TECHNOLOGY FOUNDATIONS                                     */}
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
                Conceptual Software Architecture Model
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Illustrative application structure — not a real client system
              </span>
            </div>

            {/* DESKTOP LAYERED ARCHITECTURE COMPOSITION (lg+) */}
            <div className="hidden lg:flex lg:flex-col space-y-2.5">
              {/* TOP PLANE: BUSINESS WORKFLOWS */}
              <div
                className={`rounded-[6px] border px-5 py-4 ${layerClass(
                  "workflows"
                )}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                      Plane 01
                    </span>
                    <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.04em]">
                      Business Workflows
                    </h4>
                  </div>
                  <span className="font-sans text-[12px] text-[#9FA5A1]">
                    Operational Processes &amp; Functional Priorities
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-[12.5px] text-[#D5D9D6]">
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2">
                    Operational Requirements &amp; Rules
                  </div>
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2">
                    Cross-Team Workflows &amp; Handoffs
                  </div>
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2">
                    Evolving Business Needs
                  </div>
                </div>
              </div>

              {/* VERTICAL COUPLING ROW: WORKFLOWS <-> CORE & INTEGRATIONS */}
              <div
                className="grid grid-cols-[minmax(0,1.55fr)_36px_minmax(0,1fr)] gap-2 px-5 h-5 items-center"
                aria-hidden="true"
              >
                <div className="flex justify-around">
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("workflows") ||
                      activeLayers.includes("application")
                        ? "bg-[#C9A35B]/75"
                        : "bg-white/[0.15]"
                    }`}
                  />
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("workflows") ||
                      activeLayers.includes("application")
                        ? "bg-[#C9A35B]/75"
                        : "bg-white/[0.15]"
                    }`}
                  />
                </div>
                <div />
                <div className="flex justify-center">
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("workflows") ||
                      activeLayers.includes("integrations")
                        ? "bg-white/[0.32]"
                        : "bg-white/[0.14]"
                    }`}
                  />
                </div>
              </div>

              {/* MIDDLE SPLIT PLANE: APPLICATION LAYER <-> INTEGRATIONS */}
              <div className="grid grid-cols-[minmax(0,1.55fr)_36px_minmax(0,1fr)] gap-2 items-stretch">
                {/* PLANE 02: APPLICATION LAYER */}
                <div
                  className={`rounded-[6px] border px-5 py-4 flex flex-col justify-between ${layerClass(
                    "application",
                    true
                  )}`}
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                        Plane 02
                      </span>
                      <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.04em]">
                        Application Layer
                      </h4>
                    </div>
                    <span className="font-sans text-[12px] text-[#C9A35B]/90">
                      Core Software Structures
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[12.5px]">
                    <div className="rounded-[3px] border border-[#C9A35B]/45 bg-[#151817] px-3.5 py-2.5 text-[#F5F7F6]">
                      Custom Business Applications
                    </div>
                    <div className="rounded-[3px] border border-white/[0.1] bg-[#151817] px-3.5 py-2.5 text-[#D5D9D6]">
                      Enterprise Software Platforms
                    </div>
                    <div className="col-span-2 rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2 text-[#AEB3AF]">
                      Modular Application Logic, Modernization &amp; Maintainable Structure
                    </div>
                  </div>
                </div>

                {/* LATERAL BRIDGE: APPLICATION LAYER <-> INTEGRATIONS */}
                <div className="flex flex-col justify-center gap-3" aria-hidden="true">
                  <div
                    className={`w-full h-px relative transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("application") ||
                      activeLayers.includes("integrations")
                        ? "bg-[#C9A35B]/80"
                        : "bg-white/[0.15]"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -top-[3px] w-[7px] h-[7px] bg-[#161918] border transition-colors duration-200 ${
                        activeLayers === null ||
                        activeLayers.includes("application") ||
                        activeLayers.includes("integrations")
                          ? "border-[#C9A35B]"
                          : "border-white/[0.25]"
                      }`}
                    />
                  </div>
                  <div
                    className={`w-full h-px relative transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("application") ||
                      activeLayers.includes("integrations")
                        ? "bg-white/[0.32]"
                        : "bg-white/[0.14]"
                    }`}
                  />
                </div>

                {/* PLANE 03: INTEGRATIONS */}
                <div
                  className={`rounded-[6px] border px-5 py-4 flex flex-col justify-between ${layerClass(
                    "integrations"
                  )}`}
                >
                  <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                        Plane 03
                      </span>
                      <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.04em]">
                        Integrations
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-[12.5px] text-[#AEB3AF]">
                    <div className="rounded-[3px] border border-white/[0.1] bg-[#151817] px-3.5 py-2 text-[#D5D9D6]">
                      Connected Applications &amp; Systems
                    </div>
                    <div className="rounded-[3px] border border-[#C9A35B]/40 bg-[#151817] px-3.5 py-2 text-[#F5F7F6]">
                      Structured System Interfaces
                    </div>
                  </div>
                </div>
              </div>

              {/* VERTICAL COUPLING ROW: CORE & INTEGRATIONS <-> FOUNDATIONS */}
              <div
                className="grid grid-cols-[minmax(0,1.55fr)_36px_minmax(0,1fr)] gap-2 px-5 h-5 items-center"
                aria-hidden="true"
              >
                <div className="flex justify-around">
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("application") ||
                      activeLayers.includes("foundations")
                        ? "bg-[#C9A35B]/75"
                        : "bg-white/[0.15]"
                    }`}
                  />
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("application") ||
                      activeLayers.includes("foundations")
                        ? "bg-[#C9A35B]/75"
                        : "bg-white/[0.15]"
                    }`}
                  />
                </div>
                <div />
                <div className="flex justify-center">
                  <span
                    className={`w-px h-5 transition-colors duration-200 ${
                      activeLayers === null ||
                      activeLayers.includes("integrations") ||
                      activeLayers.includes("foundations")
                        ? "bg-[#C9A35B]/65"
                        : "bg-white/[0.14]"
                    }`}
                  />
                </div>
              </div>

              {/* BOTTOM PLANE: DATA & TECHNOLOGY FOUNDATIONS */}
              <div
                className={`rounded-[6px] border px-5 py-4 ${layerClass(
                  "foundations",
                  true
                )}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                      Plane 04
                    </span>
                    <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.04em]">
                      Data &amp; Technology Foundations
                    </h4>
                  </div>
                  <span className="font-sans text-[12px] text-[#AEB3AF]">
                    Storage, Platform Infrastructure &amp; Ongoing Support
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-[12.5px] text-[#D5D9D6]">
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2">
                    Underlying Data &amp; Persistence Layer
                  </div>
                  <div className="rounded-[3px] border border-[#C9A35B]/40 bg-[#151817] px-3.5 py-2 text-[#F5F7F6]">
                    Scalable Cloud &amp; Environment Foundations
                  </div>
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3.5 py-2">
                    Long-Term Maintainability &amp; Updates
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE SIMPLIFIED VERTICAL 4-LAYER ARCHITECTURE PROGRESSION */}
            <div className="lg:hidden space-y-2.5">
              <div className="rounded-[5px] border border-white/[0.12] bg-[#181B1A] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9FA5A1]">
                  01 &mdash; Business Workflows
                </span>
                <p className="font-sans text-[13px] text-[#D5D9D6]">
                  Operational processes, rules &amp; team interactions
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-[#C9A35B]/50 bg-[#191D1B] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#C9A35B]">
                  02 &mdash; Application Layer
                </span>
                <p className="font-sans text-[13px] text-[#F5F7F6]">
                  Custom applications, enterprise platforms &amp; modular logic
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-white/[0.14] bg-[#181B1A] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9FA5A1]">
                  03 &mdash; Integrations
                </span>
                <p className="font-sans text-[13px] text-[#D5D9D6]">
                  System interfaces connecting existing applications
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-[#C9A35B]/50 bg-[#191D1B] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#C9A35B]">
                  04 &mdash; Data &amp; Technology Foundations
                </span>
                <p className="font-sans text-[13px] text-[#F5F7F6]">
                  Supporting storage, platform structure &amp; maintainability
                </p>
              </div>
            </div>

            {/* Exhibit Legend */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                Architectural relationship uniting operational workflows, modular application code, integrations and underlying foundations.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">
                Workflows &harr; Applications &harr; Foundations
              </span>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* SIX CAPABILITIES (2-Column x 3-Row Open Editorial Ledger)         */}
          {/* All Six Remain Open & Readable Without Clicking                   */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-0 border-t border-white/[0.12]">
            {SOFTWARE_CAPABILITIES.map((cap, idx) => {
              const isHighlighted =
                activeLayers !== null &&
                cap.layers.some((layer) => activeLayers.includes(layer));

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
                  onMouseEnter={() => setActiveLayers(cap.layers)}
                  onMouseLeave={() => setActiveLayers(null)}
                  onFocus={() => setActiveLayers(cap.layers)}
                  onBlur={() => setActiveLayers(null)}
                  tabIndex={0}
                  className="group py-6 sm:py-7 border-b border-white/[0.08] space-y-2 focus:outline-none transition-colors duration-200 cursor-default"
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
                      {cap.layerLabel}
                    </span>
                  </div>

                  <h3
                    className={`font-sans font-medium text-[19.5px] sm:text-[21px] tracking-[-0.015em] leading-[1.28] pt-0.5 transition-colors duration-200 ${
                      isHighlighted ? "text-[#FFFFFF]" : "text-[#F5F7F6]"
                    }`}
                  >
                    {cap.title}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[15.5px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[520px]">
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

