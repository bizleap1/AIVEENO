"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Data Engineering
 * SECTION 04: DATA ENGINEERING CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * MAIN VISUAL SECTION:
 * - Conceptual Four-Zone Data Architecture Composition:
 *   1. DATA SOURCES -> 2. INGESTION & TRANSFORMATION ->
 *   3. WAREHOUSE / LAKE FOUNDATIONS -> 4. ANALYTICS & AI CONSUMPTION
 * - Shows logical information architecture relationships rather than a decorative flowchart
 *   or deployed telemetry dashboard.
 * - Zero fake database records, zero invented data volume metrics, zero fake BI dashboards,
 *   zero random number streams, zero generic 3D database graphics.
 * - Six proposed capability descriptions arranged openly underneath in a 3-column x 2-row
 *   hairline grid (no tabs/accordions needed to read any item).
 * - Subtle hover/focus contrast highlights related architecture zones (180–220ms).
 * - Mobile: Clean vertical top-to-bottom 4-zone progression + stacked 6 capabilities.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type DataZoneKey = "sources" | "ingestion" | "foundations" | "consumption";

interface DataCapability {
  number: string;
  zones: DataZoneKey[];
  zoneLabel: string;
  title: string;
  description: string;
}

const DATA_CAPABILITIES: DataCapability[] = [
  {
    number: "01",
    zones: ["ingestion"],
    zoneLabel: "Pipelines",
    title: "Data Pipeline Engineering",
    description:
      "Design and build pipelines that move relevant information between systems.",
  },
  {
    number: "02",
    zones: ["ingestion"],
    zoneLabel: "ETL / ELT",
    title: "ETL/ELT Processes",
    description:
      "Support data extraction, transformation and loading based on analytical needs.",
  },
  {
    number: "03",
    zones: ["foundations"],
    zoneLabel: "Warehouses",
    title: "Data Warehouse Foundations",
    description:
      "Develop structured data foundations for reporting and analytical workloads.",
  },
  {
    number: "04",
    zones: ["foundations"],
    zoneLabel: "Data Lakes",
    title: "Data Lake Foundations",
    description:
      "Support suitable storage approaches for different forms of business data.",
  },
  {
    number: "05",
    zones: ["sources", "ingestion"],
    zoneLabel: "Integration",
    title: "Data Integration",
    description:
      "Connect relevant data sources, applications and downstream systems.",
  },
  {
    number: "06",
    zones: ["ingestion", "consumption"],
    zoneLabel: "Quality & Usability",
    title: "Data Quality Considerations",
    description:
      "Address relevant consistency, validation and usability needs within data workflows.",
  },
];

export default function DataCapabilities() {
  const [activeZones, setActiveZones] = useState<DataZoneKey[] | null>(null);

  const zoneClass = (key: DataZoneKey, defaultGold?: boolean) => {
    const isActive = activeZones !== null && activeZones.includes(key);
    const isDimmed = activeZones !== null && !activeZones.includes(key);

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
      id="data-capabilities"
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
                  Engineering the flow from data to insight.
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
                Reliable data systems depend on how information is integrated, processed, stored and made available.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* CONCEPTUAL FOUR-ZONE DATA ARCHITECTURE EXHIBIT                    */}
          {/* DATA SOURCES -> INGESTION & TRANSFORMATION ->                     */}
          {/* WAREHOUSE / LAKE FOUNDATIONS -> ANALYTICS & AI CONSUMPTION        */}
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
                Conceptual Data Architecture Model
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Illustrative data flow — not a real client deployment
              </span>
            </div>

            {/* DESKTOP HORIZONTAL 4-ZONE DATA FLOW (lg+) */}
            <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_28px_minmax(0,1.22fr)_28px_minmax(0,1.22fr)_28px_minmax(0,1fr)] gap-2.5 items-stretch">
              {/* ZONE 1: DATA SOURCES */}
              <div
                className={`rounded-[6px] border p-4 flex flex-col ${zoneClass(
                  "sources"
                )}`}
              >
                <div className="min-h-[54px]">
                  <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                    Zone 01
                  </span>
                  <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.035em] mt-1 leading-snug">
                    Data Sources
                  </h4>
                </div>
                <div className="mt-3 flex-1 flex flex-col justify-center space-y-2 border-t border-white/[0.08] pt-3.5 text-[12px] text-[#AEB3AF]">
                  <div className="py-1 border-b border-white/[0.06]">Applications</div>
                  <div className="py-1 border-b border-white/[0.06]">Databases</div>
                  <div className="py-1">Operational systems</div>
                </div>
              </div>

              {/* Conduit 1 -> 2 */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <div
                  className={`w-full h-px relative transition-colors duration-200 ${
                    activeZones === null ||
                    activeZones.includes("sources") ||
                    activeZones.includes("ingestion")
                      ? "bg-[#C9A35B]/75"
                      : "bg-white/[0.15]"
                  }`}
                >
                  <span
                    className={`absolute right-0 -top-[3px] w-[7px] h-[7px] border-t border-r rotate-45 transition-colors duration-200 ${
                      activeZones === null ||
                      activeZones.includes("sources") ||
                      activeZones.includes("ingestion")
                        ? "border-[#C9A35B]"
                        : "border-white/[0.25]"
                    }`}
                  />
                </div>
              </div>

              {/* ZONE 2: INGESTION & TRANSFORMATION */}
              <div
                className={`rounded-[6px] border p-4 flex flex-col ${zoneClass(
                  "ingestion",
                  true
                )}`}
              >
                <div className="min-h-[54px]">
                  <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                    Zone 02
                  </span>
                  <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.035em] mt-1 leading-snug">
                    Ingestion &amp; Transformation
                  </h4>
                </div>
                <div className="mt-3 flex-1 flex flex-col justify-center space-y-2.5 border-t border-white/[0.08] pt-3.5 text-[12px] text-[#AEB3AF]">
                  <div className="rounded-[3px] border border-white/[0.09] bg-[#151817] px-3 py-2 text-[#D5D9D6]">
                    Pipeline Movement &amp; Integration
                  </div>
                  <div className="rounded-[3px] border border-[#C9A35B]/45 bg-[#151817] px-3 py-2 text-[#F5F7F6]">
                    ETL / ELT Processing &amp; Validation
                  </div>
                </div>
              </div>

              {/* Conduit 2 -> 3 */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <div
                  className={`w-full h-px relative transition-colors duration-200 ${
                    activeZones === null ||
                    activeZones.includes("ingestion") ||
                    activeZones.includes("foundations")
                      ? "bg-[#C9A35B]/80"
                      : "bg-white/[0.15]"
                  }`}
                >
                  <span
                    className={`absolute right-0 -top-[3px] w-[7px] h-[7px] border-t border-r rotate-45 transition-colors duration-200 ${
                      activeZones === null ||
                      activeZones.includes("ingestion") ||
                      activeZones.includes("foundations")
                        ? "border-[#C9A35B]"
                        : "border-white/[0.25]"
                    }`}
                  />
                </div>
              </div>

              {/* ZONE 3: WAREHOUSE / LAKE FOUNDATIONS */}
              <div
                className={`rounded-[6px] border p-4 flex flex-col ${zoneClass(
                  "foundations"
                )}`}
              >
                <div className="min-h-[54px]">
                  <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                    Zone 03
                  </span>
                  <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.035em] mt-1 leading-snug">
                    Warehouse / Lake Foundations
                  </h4>
                </div>
                <div className="mt-3 flex-1 flex flex-col justify-center space-y-2.5 border-t border-white/[0.08] pt-3.5 text-[12px] text-[#AEB3AF]">
                  <div className="rounded-[3px] border border-[#C9A35B]/40 bg-[#151817] px-3 py-2 text-[#F5F7F6]">
                    Structured Data Warehouses
                  </div>
                  <div className="rounded-[3px] border border-white/[0.1] bg-[#151817] px-3 py-2 text-[#D5D9D6]">
                    Organized Data Lake Storage
                  </div>
                </div>
              </div>

              {/* Conduit 3 -> 4 */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <div
                  className={`w-full h-px relative transition-colors duration-200 ${
                    activeZones === null ||
                    activeZones.includes("foundations") ||
                    activeZones.includes("consumption")
                      ? "bg-[#C9A35B]/80"
                      : "bg-white/[0.15]"
                  }`}
                >
                  <span
                    className={`absolute right-0 -top-[3px] w-[7px] h-[7px] border-t border-r rotate-45 transition-colors duration-200 ${
                      activeZones === null ||
                      activeZones.includes("foundations") ||
                      activeZones.includes("consumption")
                        ? "border-[#C9A35B]"
                        : "border-white/[0.25]"
                    }`}
                  />
                </div>
              </div>

              {/* ZONE 4: ANALYTICS & AI CONSUMPTION */}
              <div
                className={`rounded-[6px] border p-4 flex flex-col ${zoneClass(
                  "consumption",
                  true
                )}`}
              >
                <div className="min-h-[54px]">
                  <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                    Zone 04
                  </span>
                  <h4 className="font-sans text-[13.5px] xl:text-[14px] font-medium uppercase tracking-[0.035em] mt-1 leading-snug">
                    Analytics &amp; AI Consumption
                  </h4>
                </div>
                <div className="mt-3 flex-1 flex flex-col justify-center space-y-2 border-t border-white/[0.08] pt-3.5 text-[12px] text-[#AEB3AF]">
                  <div className="py-1 border-b border-white/[0.06] text-[#F5F7F6]">
                    Reporting &amp; BI
                  </div>
                  <div className="py-1 border-b border-white/[0.06] text-[#F5F7F6]">
                    Analytical Workloads
                  </div>
                  <div className="py-1 text-[#C9A35B]">AI Applications</div>
                </div>
              </div>
            </div>

            {/* MOBILE SIMPLIFIED VERTICAL 4-ZONE PROGRESSION */}
            <div className="lg:hidden space-y-2.5">
              <div className="rounded-[5px] border border-white/[0.12] bg-[#181B1A] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9FA5A1]">
                  01 &mdash; Data Sources
                </span>
                <p className="font-sans text-[13px] text-[#D5D9D6]">
                  Applications, databases &amp; operational systems
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-[#C9A35B]/50 bg-[#191D1B] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#C9A35B]">
                  02 &mdash; Ingestion &amp; Transformation
                </span>
                <p className="font-sans text-[13px] text-[#F5F7F6]">
                  Data pipelines, ETL/ELT processing &amp; integration
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-white/[0.14] bg-[#181B1A] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9FA5A1]">
                  03 &mdash; Warehouse / Lake Foundations
                </span>
                <p className="font-sans text-[13px] text-[#D5D9D6]">
                  Structured warehouses &amp; organized lake storage
                </p>
              </div>

              <div className="flex justify-center py-0.5" aria-hidden="true">
                <span className="w-px h-3 bg-[#C9A35B]/65" />
              </div>

              <div className="rounded-[5px] border border-[#C9A35B]/50 bg-[#191D1B] px-3.5 py-3 space-y-1">
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#C9A35B]">
                  04 &mdash; Analytics &amp; AI Consumption
                </span>
                <p className="font-sans text-[13px] text-[#F5F7F6]">
                  Reporting, business intelligence &amp; AI applications
                </p>
              </div>
            </div>

            {/* Exhibit Legend */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                End-to-end conceptual relationship across collection, transformation, storage and downstream usage.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">
                Sources &rarr; Foundations &rarr; Insight
              </span>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* SIX CAPABILITIES (3x2 Open Typographic Hairline Grid)              */}
          {/* All Six Remain Open & Readable Without Clicking                   */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-12 gap-y-0 border-t border-white/[0.12]">
            {DATA_CAPABILITIES.map((cap, idx) => {
              const isHighlighted =
                activeZones !== null &&
                cap.zones.some((z) => activeZones.includes(z));

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
                  onMouseEnter={() => setActiveZones(cap.zones)}
                  onMouseLeave={() => setActiveZones(null)}
                  onFocus={() => setActiveZones(cap.zones)}
                  onBlur={() => setActiveZones(null)}
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
                      {cap.zoneLabel}
                    </span>
                  </div>

                  <h3
                    className={`font-sans font-medium text-[19px] sm:text-[20.5px] tracking-[-0.015em] leading-[1.28] pt-0.5 transition-colors duration-200 ${
                      isHighlighted ? "text-[#FFFFFF]" : "text-[#F5F7F6]"
                    }`}
                  >
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
