"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — Cloud Optimization
 * SECTION 04: CORE OPTIMIZATION CAPABILITIES (#111312 Dark Graphite Surface)
 *
 * MAIN VISUAL HIGHLIGHT SECTION:
 * - Side-by-side Asymmetric Editorial Composition:
 *   LEFT (7 cols): Three Explanatory Conceptual Optimization States:
 *     1. CURRENT ENVIRONMENT
 *     2. AREAS FOR IMPROVEMENT
 *     3. REFINED APPROACH
 *     (Explanatory architectural states — zero fictional savings %, zero fake dollar amounts,
 *      zero utilization charts, zero monitoring dashboards, zero before/after customer claims)
 *   RIGHT (5 cols): Four Core Optimization Capabilities displayed openly in full:
 *     01 Architecture Optimization
 *     02 Resource Utilization
 *     03 Performance Optimization
 *     04 Cost Efficiency
 * - Subtle hover/focus contrast highlights related conceptual bands across states (180–220ms).
 * - Mobile: Simplified clean vertical composition with zero horizontal scrolling.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

type CapabilityFocusKey =
  | "architecture"
  | "utilization"
  | "performance"
  | "cost";

interface OptimizationCapability {
  number: string;
  key: CapabilityFocusKey;
  title: string;
  description: string;
  lensLabel: string;
}

const OPTIMIZATION_CAPABILITIES: OptimizationCapability[] = [
  {
    number: "01",
    key: "architecture",
    title: "Architecture Optimization",
    lensLabel: "Structural Fit",
    description:
      "Evaluate architectural choices and opportunities for improving efficiency, performance and operational fit.",
  },
  {
    number: "02",
    key: "utilization",
    title: "Resource Utilization",
    lensLabel: "Capacity Alignment",
    description:
      "Review resource allocation, workload requirements and opportunities to reduce inefficient usage.",
  },
  {
    number: "03",
    key: "performance",
    title: "Performance Optimization",
    lensLabel: "Workload Behaviour",
    description:
      "Identify factors affecting workload performance and potential improvements.",
  },
  {
    number: "04",
    key: "cost",
    title: "Cost Efficiency",
    lensLabel: "Spend Alignment",
    description:
      "Evaluate cloud spending in relation to resource use, architectural decisions and operational requirements.",
  },
];

export default function OptimizationCapabilities() {
  const [activeKey, setActiveKey] = useState<CapabilityFocusKey | null>(null);

  const isMatched = (keys: CapabilityFocusKey[]) =>
    activeKey === null || keys.includes(activeKey);

  const stateBorderClass = (
    keys: CapabilityFocusKey[],
    defaultAccent?: boolean
  ) => {
    const highlighted = activeKey !== null && keys.includes(activeKey);
    const dimmed = activeKey !== null && !keys.includes(activeKey);

    return `transition-all duration-200 ${
      highlighted
        ? "border-[#C9A35B]/85 bg-[#1C201E]"
        : defaultAccent
        ? "border-[#C9A35B]/50 bg-[#181C1A]"
        : "border-white/[0.12] bg-[#181B1A]"
    } ${dimmed ? "opacity-65" : "opacity-100"}`;
  };

  return (
    <section
      id="optimization-capabilities"
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
                <span>Optimization Capabilities</span>
              </motion.div>

              <div className="overflow-hidden pb-1">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                  className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] text-[#F5F7F6] tracking-[-0.03em] leading-[1.06] max-w-[660px]"
                >
                  Find the right balance between performance and efficiency.
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
                Cloud optimization considers how resources, architecture and workloads support operational and business needs.
              </motion.p>
            </div>
          </div>

          {/* ================================================================= */}
          {/* BESPOKE OPTIMIZATION COMPOSITION (LEFT) + 4 CAPABILITIES (RIGHT)  */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-start">
            {/* LEFT (7 Cols): Conceptual Optimization State Progression */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.65, ease: transitionEase, delay: 0.08 }}
              className="lg:col-span-7 rounded-[10px] border border-white/[0.11] bg-[#161918] p-4 sm:p-6 lg:p-7"
            >
              {/* Exhibit Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-white/[0.08]">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.13em] text-[#9FA5A1]">
                  Conceptual Architecture &amp; Utilization Evaluation
                </span>
                <span className="font-sans text-[11.5px] text-[#C9A35B]/90 tracking-[0.02em]">
                  Explanatory states — not customer before/after results
                </span>
              </div>

              {/* Three Conceptual States Vertical / Architectural Progression */}
              <div className="space-y-4">
                {/* STATE 1: CURRENT ENVIRONMENT */}
                <div
                  className={`rounded-[6px] border p-4 sm:p-5 ${stateBorderClass([
                    "architecture",
                    "utilization",
                  ])}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/[0.08]">
                    <div>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                        State I
                      </span>
                      <h4 className="font-sans text-[15px] sm:text-[15.5px] font-medium uppercase tracking-[0.04em] text-[#F5F7F6] mt-0.5">
                        Current Environment
                      </h4>
                    </div>
                    <span className="font-sans text-[12px] text-[#9FA5A1]">
                      Existing sizing, dependencies &amp; legacy trade-offs
                    </span>
                  </div>

                  {/* Architectural Proportion Blocks (Visualizing uneven capacity & unused slack) */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-2 items-stretch sm:items-center">
                    <div
                      className={`sm:col-span-5 min-h-[34px] sm:h-8 py-1.5 rounded-[2px] border flex items-center justify-between px-3 text-[11.5px] transition-opacity duration-200 ${
                        isMatched(["utilization"])
                          ? "border-white/[0.28] bg-[#1E2220] text-[#D7DBD8]"
                          : "border-white/[0.12] bg-[#191C1B] text-[#9FA5A1]"
                      }`}
                    >
                      <span>Workload Capacity</span>
                      <span className="w-8 h-px border-b border-dashed border-white/[0.3]" aria-hidden="true" />
                    </div>
                    <div
                      className={`sm:col-span-4 min-h-[34px] sm:h-8 py-1.5 rounded-[2px] border flex items-center px-3 text-[11.5px] transition-opacity duration-200 ${
                        isMatched(["architecture"])
                          ? "border-white/[0.28] bg-[#1E2220] text-[#D7DBD8]"
                          : "border-white/[0.12] bg-[#191C1B] text-[#9FA5A1]"
                      }`}
                    >
                      <span>Coupled Services</span>
                    </div>
                    <div className="sm:col-span-3 min-h-[34px] sm:h-8 py-1.5 rounded-[2px] border border-dashed border-white/[0.18] flex items-center justify-between sm:justify-center px-3 sm:px-2 text-[11.5px] text-[#9FA5A1]">
                      <span className="sm:hidden text-[10.5px] uppercase tracking-[0.08em] text-[#9FA5A1]/80">
                        Unused Capacity
                      </span>
                      <span>Slack</span>
                    </div>
                  </div>
                </div>

                {/* Directional Evaluation Connector */}
                <div className="flex items-center justify-between px-4" aria-hidden="true">
                  <div className="w-px h-3.5 bg-[#C9A35B]/55" />
                  <div className="h-px flex-1 mx-4 bg-white/[0.08]" />
                  <div className="w-px h-3.5 bg-[#C9A35B]/55" />
                </div>

                {/* STATE 2: AREAS FOR IMPROVEMENT */}
                <div
                  className={`rounded-[6px] border p-4 sm:p-5 ${stateBorderClass(
                    ["utilization", "performance", "cost"],
                    true
                  )}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/[0.08]">
                    <div>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A35B]">
                        State II
                      </span>
                      <h4 className="font-sans text-[15px] sm:text-[15.5px] font-medium uppercase tracking-[0.04em] text-[#F5F7F6] mt-0.5">
                        Areas for Improvement
                      </h4>
                    </div>
                    <span className="font-sans text-[12px] text-[#C9A35B]/90">
                      Evaluation across capacity, latency &amp; spend drivers
                    </span>
                  </div>

                  {/* Three Clean Analytical Lenses (No charts, no dollar numbers) */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[12px]">
                    <div
                      className={`rounded-[3px] border px-3 py-2 transition-colors duration-200 ${
                        activeKey === "utilization"
                          ? "border-[#C9A35B] bg-[#212622] text-[#F5F7F6]"
                          : "border-white/[0.12] bg-[#161918] text-[#AEB3AF]"
                      }`}
                    >
                      Provisioning vs. actual workload demand
                    </div>
                    <div
                      className={`rounded-[3px] border px-3 py-2 transition-colors duration-200 ${
                        activeKey === "performance" || activeKey === "architecture"
                          ? "border-[#C9A35B] bg-[#212622] text-[#F5F7F6]"
                          : "border-white/[0.12] bg-[#161918] text-[#AEB3AF]"
                      }`}
                    >
                      Architectural constraints &amp; throughput friction
                    </div>
                    <div
                      className={`rounded-[3px] border px-3 py-2 transition-colors duration-200 ${
                        activeKey === "cost"
                          ? "border-[#C9A35B] bg-[#212622] text-[#F5F7F6]"
                          : "border-white/[0.12] bg-[#161918] text-[#AEB3AF]"
                      }`}
                    >
                      Spend drivers misaligned with business value
                    </div>
                  </div>
                </div>

                {/* Directional Evaluation Connector */}
                <div className="flex items-center justify-between px-4" aria-hidden="true">
                  <div className="w-px h-3.5 bg-[#C9A35B]/75" />
                  <div className="h-px flex-1 mx-4 bg-[#C9A35B]/25" />
                  <div className="w-px h-3.5 bg-[#C9A35B]/75" />
                </div>

                {/* STATE 3: REFINED APPROACH */}
                <div
                  className={`rounded-[6px] border p-4 sm:p-5 ${stateBorderClass(
                    ["architecture", "utilization", "performance", "cost"],
                    false
                  )}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/[0.08]">
                    <div>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9FA5A1]">
                        State III
                      </span>
                      <h4 className="font-sans text-[15px] sm:text-[15.5px] font-medium uppercase tracking-[0.04em] text-[#F5F7F6] mt-0.5">
                        Refined Approach
                      </h4>
                    </div>
                    <span className="font-sans text-[12px] text-[#AEB3AF]">
                      Balanced architecture, right-sized capacity &amp; operational fit
                    </span>
                  </div>

                  {/* Clean Aligned Structural Bands */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="h-8 rounded-[2px] border border-[#C9A35B]/45 bg-[#1B1F1D] flex items-center justify-between px-3 text-[12px] text-[#F5F7F6]">
                      <span>Aligned Architecture &amp; Sizing</span>
                      <span className="w-2.5 h-[2px] bg-[#C9A35B]" aria-hidden="true" />
                    </div>
                    <div className="h-8 rounded-[2px] border border-[#C9A35B]/45 bg-[#1B1F1D] flex items-center justify-between px-3 text-[12px] text-[#F5F7F6]">
                      <span>Performance &amp; Cost Clarity</span>
                      <span className="w-2.5 h-[2px] bg-[#C9A35B]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Exhibit Footnote */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-[#9FA5A1]">
                <span>
                  Hover or select a capability alongside to focus the related optimization lens.
                </span>
                <span className="text-[#C9A35B]/90 shrink-0">
                  Architectural balance &amp; clarity
                </span>
              </div>
            </motion.div>

            {/* RIGHT (5 Cols): FOUR OPEN CAPABILITY AREAS */}
            <div className="lg:col-span-5 border-t border-white/[0.14] divide-y divide-white/[0.09]">
              {OPTIMIZATION_CAPABILITIES.map((cap, idx) => {
                const isSelected = activeKey === cap.key;

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
                    onMouseEnter={() => setActiveKey(cap.key)}
                    onMouseLeave={() => setActiveKey(null)}
                    onFocus={() => setActiveKey(cap.key)}
                    onBlur={() => setActiveKey(null)}
                    tabIndex={0}
                    className="group py-6 sm:py-6.5 first:pt-6 last:pb-2 space-y-2 focus:outline-none transition-colors duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-sans text-[11px] font-semibold tracking-[0.14em] transition-colors duration-200 ${
                          isSelected
                            ? "text-[#C9A35B]"
                            : "text-[#9FA5A1] group-hover:text-[#C9A35B]"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-px transition-all duration-200 ${
                          isSelected
                            ? "w-5 bg-[#C9A35B]"
                            : "w-3 bg-white/[0.22] group-hover:bg-[#C9A35B]/80"
                        }`}
                      />
                      <span className="font-sans text-[10.5px] uppercase tracking-[0.12em] text-[#9FA5A1]">
                        {cap.lensLabel}
                      </span>
                    </div>

                    <h3
                      className={`font-sans font-medium text-[20px] sm:text-[21px] tracking-[-0.018em] leading-[1.26] pt-0.5 transition-colors duration-200 ${
                        isSelected ? "text-[#FFFFFF]" : "text-[#F5F7F6]"
                      }`}
                    >
                      {cap.title}
                    </h3>

                    <p className="font-sans text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.58] font-normal max-w-[460px]">
                      {cap.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

