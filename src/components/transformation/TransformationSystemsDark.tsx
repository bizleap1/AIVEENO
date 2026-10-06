"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "motion/react";

/**
 * Aiveeno — Flagship Service Page: Section 05
 * WHAT TRANSFORMATION CAN INCLUDE — DARK GRAPHITE (#111312)
 * 
 * Signature Accenture-Style Editorial Capability Experience:
 * - Strongest transition on the page: dark graphite panel (#111312) rises
 *   from the bottom and visually covers the previous light section.
 * - Replaces static card grid with large expandable capability rows.
 * - One capability open at a time. Left: Title, explanation, workloads | Right: Real consulting photo.
 * - Desktop hover: title strengthens to pure white, muted gold micro-line appears.
 * - Interactive click: row expands smoothly (350–450ms), image clip/crossfade (550–700ms).
 * - Exact easing: cubic-bezier(0.22, 1, 0.36, 1).
 * - Zero glow, zero particles, zero AI effects. Pure enterprise systems architecture.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  workloads: string[];
  image: string;
  imageAlt: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: "workflows",
    number: "01",
    title: "Workflow Automation & Orchestration",
    category: "Process Orchestration",
    headline: "Orchestrating multi-step business procedures across legacy backends.",
    description:
      "Orchestrating complex, multi-step business operations across legacy ERPs, internal databases, and core software without requiring manual data re-entry. We eliminate departmental silos and human handoff delays.",
    workloads: [
      "Cross-system record synchronization & automated state machines",
      "Automated operational exception routing with human-in-the-loop triage",
      "Multi-department document validation and straight-through processing",
    ],
    image: "/images/value-operations.jpg",
    imageAlt: "Enterprise operations leadership and consultants analyzing business process architecture",
  },
  {
    id: "agents",
    number: "02",
    title: "Autonomous AI Systems & Agents",
    category: "Agentic Systems",
    headline: "Specialized, policy-bounded agentic architectures inside corporate guardrails.",
    description:
      "Specialized, policy-bounded agentic architectures designed to reason through complex operational tasks while operating strictly within deterministic corporate boundaries, cryptographic citations, and auditable action gates.",
    workloads: [
      "Multi-step operational analysis and triage engines",
      "Deterministic policy-bounded action engines with approval gates",
      "Auditable execution logs with complete step lineage",
    ],
    image: "/images/ai-transformation-hero.jpg",
    imageAlt: "Senior consultants in strategic dialogue reviewing system policies and agent workflows",
  },
  {
    id: "knowledge",
    number: "03",
    title: "Governed Enterprise Knowledge",
    category: "Knowledge Retrieval",
    headline: "RAG architectures turning corporate archives into queryable intelligence.",
    description:
      "Secure retrieval-augmented architectures that turn scattered corporate documentation, wikis, and repositories into queryable, source-attributed enterprise intelligence with zero-trust data boundaries.",
    workloads: [
      "Regulatory & internal policy intelligence engines with verified citations",
      "Institutional memory discovery and synthesis across corporate archives",
      "Cryptographic citation and verified document attribution",
    ],
    image: "/images/assessment-strategy-session.jpg",
    imageAlt: "Executive consulting strategy dialogue reviewing stakeholder journeys and institutional intelligence",
  },
  {
    id: "integrations",
    number: "04",
    title: "Enterprise System Integrations",
    category: "Systems Integration",
    headline: "Production-grade API gateways connecting AI workloads into legacy software.",
    description:
      "Production-grade API gateways, webhook listeners, and event buses connecting modern AI workloads directly into SAP, Salesforce, Oracle, and proprietary software without rewriting legacy cores.",
    workloads: [
      "ERP and CRM bi-directional synchronization and event listeners",
      "Event-driven messaging and transaction fabrics",
      "Secure legacy system wrappers and connectors",
    ],
    image: "/images/value-commercial.jpg",
    imageAlt: "Senior executive commercial board meeting reviewing strategic enterprise systems and integration roadmaps",
  },
  {
    id: "data-foundations",
    number: "05",
    title: "Modern Data Foundations & Pipelines",
    category: "Data Architecture",
    headline: "Unified data fabrics, semantic layers, and automated data contracts.",
    description:
      "Unified data fabrics, automated data contracts, and semantic layers ensuring intelligent systems consume verified, clean, and regulatory-compliant enterprise data with continuous schema drift alerting.",
    workloads: [
      "Automated data quality monitoring & schema drift alerting",
      "Semantic business layers for natural language querying",
      "Zero-trust data masking and role-based access enforcement",
    ],
    image: "/images/systems-architecture.jpg",
    imageAlt: "Enterprise cloud architects and systems engineers collaborating around a distributed data architecture blueprint",
  },
  {
    id: "custom-platforms",
    number: "06",
    title: "Custom Software & Cloud Platforms",
    category: "Platform Engineering",
    headline: "Purpose-built enterprise platforms engineered for resilience and scale.",
    description:
      "Purpose-built enterprise web platforms, microservices, and multi-zone cloud architectures engineered to support scalable, fault-tolerant transformation initiatives with deterministic latency and cost telemetry.",
    workloads: [
      "High-concurrency microservices and workflow engines",
      "Inference cost governance and token telemetry",
      "Enterprise security baselines and compliance controls",
    ],
    image: "/images/cloud-infrastructure.jpg",
    imageAlt: "Modern enterprise infrastructure and data governance architecture session",
  },
];

export default function TransformationSystemsDark() {
  // Start with first capability open
  const [activeId, setActiveId] = useState<string>("workflows");

  const toggleCapability = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <motion.section
      initial={{ opacity: 0.96, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.8, ease: transitionEase }}
      className="relative z-20 w-full bg-[#111312] text-[#F5F5F1] py-16 sm:py-20 lg:py-24 border-t border-b border-white/[0.12] shadow-[0_-32px_75px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <Container className="px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: DARK GRAPHITE ACCENTURE STYLE                             */}
        {/* ========================================================================= */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: transitionEase, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
          >
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Systems Architecture</span>
          </motion.div>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: transitionEase, delay: 0.22 }}
              className="font-sans font-medium text-[32px] min-[390px]:text-[36px] sm:text-[40px] lg:text-[44px] text-[#F5F5F1] tracking-[-0.03em] leading-[1.08]"
            >
              What enterprise transformation includes.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: transitionEase, delay: 0.32 }}
            className="text-[15.5px] sm:text-[16.5px] text-[#AEB3AF] leading-[1.6] font-normal"
          >
            We engineer complete, production-ready systems tailored to your operating environment—avoiding fragile consumer tool wrappers in favor of resilient enterprise software.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* ACCENTURE-STYLE EXPANDABLE CAPABILITY ROWS (DARK SURFACE)                 */}
        {/* ========================================================================= */}
        <div className="border-t border-white/[0.12] divide-y divide-white/[0.10]">
          {capabilities.map((cap, idx) => {
            const isOpen = activeId === cap.id;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEase, delay: 0.2 + idx * 0.05 }}
                className="group"
              >
                {/* ----------------------------------------------------------------- */}
                {/* CAPABILITY ROW TRIGGER HEADER                                     */}
                {/* ----------------------------------------------------------------- */}
                <button
                  type="button"
                  onClick={() => toggleCapability(cap.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-6 sm:py-7 lg:py-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 min-w-0">
                    {/* Index Number */}
                    <span className="font-mono text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#C9A35B] shrink-0">
                      {cap.number}
                    </span>

                    {/* Capability Title with Hover Indicator */}
                    <div className="relative">
                      <h3
                        className={`font-sans font-medium text-[20px] sm:text-[23px] lg:text-[26px] tracking-[-0.025em] leading-snug transition-colors duration-200 ${
                          isOpen
                            ? "text-white"
                            : "text-[#F5F5F1]/85 group-hover:text-white"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      {/* Muted Gold Micro-line on Hover */}
                      <span
                        className={`absolute left-0 -bottom-1 h-px bg-[#C9A35B] transition-all duration-300 ${
                          isOpen ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Category Tag */}
                    <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-[2px] bg-white/[0.06] text-[10.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#AEB3AF] shrink-0">
                      {cap.category}
                    </span>
                  </div>

                  {/* Restrained Dark Toggle Indicator (+ / −) */}
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.14] group-hover:border-white/40 transition-colors duration-200 text-[#F5F5F1]">
                    <span
                      className={`font-mono text-[16px] leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#C9A35B]" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="sr-only">
                      {isOpen ? "Collapse capability details" : "Expand capability details"}
                    </span>
                  </div>
                </button>

                {/* ----------------------------------------------------------------- */}
                {/* EXPANDED CAPABILITY DETAIL PANEL (Left Story | Right Image)       */}
                {/* ----------------------------------------------------------------- */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`cap-content-${cap.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: transitionEase }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-8 sm:pb-10 lg:pb-12 border-t border-white/[0.08]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
                          
                          {/* Left Column: Headline, Explanation & Workloads (~58%) */}
                          <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                            
                            {/* Focused Sub-headline */}
                            <h4 className="font-sans font-medium text-[19px] sm:text-[21px] text-[#F5F5F1] tracking-[-0.02em] leading-snug">
                              {cap.headline}
                            </h4>

                            {/* Description */}
                            <p className="text-[14.5px] sm:text-[15px] text-[#AEB3AF] leading-[1.65] font-normal">
                              {cap.description}
                            </p>

                            {/* Key Workloads List */}
                            <div className="pt-3 border-t border-white/[0.08] space-y-3">
                              <div className="text-[10.5px] font-sans font-semibold uppercase tracking-[0.14em] text-[#F5F5F1]/80">
                                Typical Enterprise Workloads
                              </div>
                              <ul className="space-y-2.5">
                                {cap.workloads.map((workload, i) => (
                                  <li
                                    key={i}
                                    className="text-[13px] sm:text-[13.5px] text-[#AEB3AF] flex items-start gap-2.5 leading-snug"
                                  >
                                    <span
                                      className="w-1.5 h-1.5 rounded-full bg-[#C9A35B] shrink-0 mt-1.5"
                                      aria-hidden="true"
                                    />
                                    <span>{workload}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>

                          {/* Right Column: Real Consulting Systems Image (~42%) */}
                          <div className="lg:col-span-5 flex flex-col justify-start">
                            <motion.div
                              initial={{ opacity: 0, clipPath: "inset(5% 0% 0% 0%)" }}
                              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                              transition={{ duration: 0.6, ease: transitionEase, delay: 0.1 }}
                              className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[4px] overflow-hidden border border-white/[0.12] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] bg-[#1A1C1B]"
                            >
                              <Image
                                src={cap.image}
                                alt={cap.imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover object-center"
                              />
                            </motion.div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </Container>
    </motion.section>
  );
}
