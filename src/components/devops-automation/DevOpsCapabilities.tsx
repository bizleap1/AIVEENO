"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — DevOps & Automation
 * SECTION 04: CORE DEVOPS CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * MAIN VISUAL SECTION:
 * - Conceptual Five-Stage Software Delivery Lifecycle Architecture:
 *   CODE -> BUILD -> TEST -> DEPLOY -> OPERATE
 *   accompanied by cross-cutting automation rails beneath:
 *   1. CI/CD & Workflow Automation (Code · Build · Test · Deploy)
 *   2. Infrastructure as Code & Operations Automation (Code · Deploy · Operate)
 * - Strictly distinguishes DevOps from Data Engineering & Cloud Operations.
 * - Zero fake terminals, zero deployment logs, zero invented build-success stats,
 *   zero neon glow effects, zero cards-for-cards'-sake.
 * - Six capabilities cleanly arranged openly underneath in a 3x2 typographic hairline grid;
 *   hover/focus gently highlights related delivery stages & rails (180–220ms).
 * - Mobile: Vertically connected progression + stacked capabilities, zero overflow.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type DeliveryStageKey = "code" | "build" | "test" | "deploy" | "operate";
type RailKey = "cicd" | "iac";

interface ActiveHighlight {
  stages: DeliveryStageKey[];
  rails: RailKey[];
}

interface DevOpsCapability {
  number: string;
  highlight: ActiveHighlight;
  stageTag: string;
  title: string;
  description: string;
}

const DELIVERY_STAGES: {
  key: DeliveryStageKey;
  label: string;
  note: string;
}[] = [
  { key: "code", label: "CODE", note: "Source & config versions" },
  { key: "build", label: "BUILD", note: "Package & prepare builds" },
  { key: "test", label: "TEST", note: "Automated quality checks" },
  { key: "deploy", label: "DEPLOY", note: "Repeatable release delivery" },
  { key: "operate", label: "OPERATE", note: "Ongoing infra automation" },
];

const DEVOPS_CAPABILITIES: DevOpsCapability[] = [
  {
    number: "01",
    highlight: { stages: ["code", "build", "test", "deploy"], rails: ["cicd"] },
    stageTag: "Code · Build · Test · Deploy",
    title: "CI/CD Pipelines",
    description:
      "Design or improve continuous integration and delivery workflows appropriate to the engineering environment.",
  },
  {
    number: "02",
    highlight: { stages: ["build"], rails: ["cicd"] },
    stageTag: "Build Stage",
    title: "Build Automation",
    description:
      "Reduce repeated manual activities in software build processes.",
  },
  {
    number: "03",
    highlight: { stages: ["test"], rails: ["cicd"] },
    stageTag: "Test Stage",
    title: "Testing Automation",
    description:
      "Introduce suitable automated testing steps into delivery workflows.",
  },
  {
    number: "04",
    highlight: { stages: ["deploy"], rails: ["cicd", "iac"] },
    stageTag: "Deploy Stage",
    title: "Deployment Automation",
    description:
      "Support repeatable application deployment practices.",
  },
  {
    number: "05",
    highlight: { stages: ["code", "deploy", "operate"], rails: ["iac"] },
    stageTag: "Code · Deploy · Operate",
    title: "Infrastructure as Code",
    description:
      "Define and manage appropriate infrastructure configuration through code.",
  },
  {
    number: "06",
    highlight: { stages: ["operate"], rails: ["iac"] },
    stageTag: "Operate Stage",
    title: "Infrastructure Operations Automation",
    description:
      "Identify opportunities to automate relevant recurring infrastructure tasks.",
  },
];

export default function DevOpsCapabilities() {
  const [activeHighlight, setActiveHighlight] =
    useState<ActiveHighlight | null>(null);
  const [hoveredCapNumber, setHoveredCapNumber] = useState<string | null>(null);

  const stageClass = (key: DeliveryStageKey, idx: number) => {
    const isActive =
      activeHighlight !== null && activeHighlight.stages.includes(key);
    const isDimmed =
      activeHighlight !== null && !activeHighlight.stages.includes(key);
    const isAccentStage = idx === 1 || idx === 3;

    return `transition-all duration-200 ${
      isActive
        ? "border-[#C9A35B]/85 bg-[#1D221F] text-[#FFFFFF]"
        : isAccentStage
        ? "border-[#C9A35B]/45 bg-[#191D1B] text-[#F5F7F6]"
        : "border-white/[0.12] bg-[#181B1A] text-[#F5F7F6]"
    } ${isDimmed ? "opacity-65" : "opacity-100"}`;
  };

  const railClass = (key: RailKey) => {
    const isActive =
      activeHighlight !== null && activeHighlight.rails.includes(key);
    const isDimmed =
      activeHighlight !== null && !activeHighlight.rails.includes(key);

    return `transition-all duration-200 ${
      isActive
        ? "border-[#C9A35B]/85 bg-[#1D221F] text-[#FFFFFF]"
        : "border-white/[0.11] bg-[#151817] text-[#AEB3AF]"
    } ${isDimmed ? "opacity-65" : "opacity-100"}`;
  };

  return (
    <section
      id="devops-capabilities"
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
                <span>DevOps Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Automation across the delivery lifecycle.
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
                Connected delivery practices can help teams manage software changes and infrastructure more consistently.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* CONCEPTUAL 5-STAGE SOFTWARE DELIVERY WORKFLOW EXHIBIT             */}
          {/* CODE — BUILD — TEST — DEPLOY — OPERATE                            */}
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
                Conceptual Delivery &amp; Automation Lifecycle
              </span>
              <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                Illustrative workflow architecture — not live telemetry
              </span>
            </div>

            {/* DESKTOP CONNECTED 5-STAGE TRACK (lg+) */}
            <div className="hidden lg:block space-y-5">
              {/* Primary Row: CODE -> BUILD -> TEST -> DEPLOY -> OPERATE */}
              <div className="grid grid-cols-[minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)_22px_minmax(0,1fr)] gap-2 items-stretch">
                {DELIVERY_STAGES.map((stage, idx) => (
                  <div key={stage.key} className="contents">
                    <div
                      className={`rounded-[6px] border p-4 flex flex-col justify-between ${stageClass(
                        stage.key,
                        idx
                      )}`}
                    >
                      <div className="border-b border-white/[0.08] pb-2.5 mb-3">
                        <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                          0{idx + 1}
                        </span>
                        <h4 className="font-sans text-[14px] font-medium uppercase tracking-[0.06em] mt-1">
                          {stage.label}
                        </h4>
                      </div>
                      <p className="font-sans text-[12px] text-[#AEB3AF] leading-relaxed">
                        {stage.note}
                      </p>
                    </div>

                    {idx < DELIVERY_STAGES.length - 1 && (
                      <div
                        className="flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="w-full h-px bg-[#C9A35B]/70 relative">
                          <span className="absolute right-0 -top-[3px] w-[7px] h-[7px] border-t border-r border-[#C9A35B] rotate-45" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Lower Cross-Cutting Automation Rails */}
              <div className="grid grid-cols-12 gap-4 pt-1">
                <div
                  className={`col-span-7 rounded-[5px] border px-4 py-3 flex items-center justify-between gap-4 ${railClass(
                    "cicd"
                  )}`}
                >
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C9A35B]">
                    CI/CD &amp; Delivery Automation Track
                  </span>
                  <span className="font-sans text-[12px] text-[#9FA5A1]">
                    Connects Code &rarr; Build &rarr; Test &rarr; Deploy
                  </span>
                </div>

                <div
                  className={`col-span-5 rounded-[5px] border px-4 py-3 flex items-center justify-between gap-4 ${railClass(
                    "iac"
                  )}`}
                >
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F5F7F6]">
                    IaC &amp; Operations Track
                  </span>
                  <span className="font-sans text-[12px] text-[#9FA5A1]">
                    Code &rarr; Deploy &rarr; Operate
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE SIMPLIFIED VERTICAL 5-STAGE LIFECYCLE */}
            <div className="lg:hidden space-y-2">
              {DELIVERY_STAGES.map((stage, idx) => (
                <div key={stage.key}>
                  <div className="rounded-[5px] border border-white/[0.12] bg-[#181B1A] px-3.5 py-2.5 flex items-center justify-between gap-3">
                    <div>
                      <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                        0{idx + 1} &mdash; {stage.label}
                      </span>
                      <p className="font-sans text-[12.5px] text-[#D5D9D6] mt-0.5">
                        {stage.note}
                      </p>
                    </div>
                  </div>
                  {idx < DELIVERY_STAGES.length - 1 && (
                    <div
                      className="flex justify-center py-0.5"
                      aria-hidden="true"
                    >
                      <span className="w-px h-2.5 bg-[#C9A35B]/65" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Exhibit Legend */}
            <div className="mt-6 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
              <span>
                End-to-end delivery relationship linking source changes, automated checks, repeatable releases and infrastructure operations.
              </span>
              <span className="text-[#C9A35B]/90 shrink-0">
                Code &rarr; Build &rarr; Test &rarr; Deploy &rarr; Operate
              </span>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* SIX CAPABILITIES (3x2 Open Typographic Hairline Grid)              */}
          {/* All Six Remain Open & Readable Without Clicking                   */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-12 gap-y-0 border-t border-white/[0.12]">
            {DEVOPS_CAPABILITIES.map((cap, idx) => {
              const isHighlighted = hoveredCapNumber === cap.number;

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
                  onMouseEnter={() => {
                    setActiveHighlight(cap.highlight);
                    setHoveredCapNumber(cap.number);
                  }}
                  onMouseLeave={() => {
                    setActiveHighlight(null);
                    setHoveredCapNumber(null);
                  }}
                  onFocus={() => {
                    setActiveHighlight(cap.highlight);
                    setHoveredCapNumber(cap.number);
                  }}
                  onBlur={() => {
                    setActiveHighlight(null);
                    setHoveredCapNumber(null);
                  }}
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
                      {cap.stageTag}
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
