"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  {
    num: "01",
    title: "Workflow Automation",
    subtitle: "Autonomous multi-step orchestration across ERP & CRM backbones",
    description: "Automating core enterprise workflows across systems, humans, and decisions with autonomous orchestration and exception handling.",
    deliverables: ["Cross-ERP Synchronization", "Exception Routing", "Throughput Monitoring"],
    href: "/ai-business-transformation",
  },
  {
    num: "02",
    title: "AI Systems / Agents",
    subtitle: "Specialized agentic architectures executing deterministic tasks",
    description: "Deploying multi-agent collaborative task topologies that reason, invoke APIs, and operate deterministically within enterprise guardrails.",
    deliverables: ["Collaborative Topologies", "Private Tool Calling", "Human-in-the-Loop"],
    href: "/software-development",
  },
  {
    num: "03",
    title: "Intelligent Knowledge",
    subtitle: "Private institutional intelligence over contracts, docs & records",
    description: "Unlocking institutional knowledge with sovereign RAG architectures over contracts, technical documentation, and enterprise records.",
    deliverables: ["Private RAG Systems", "Vector Semantic Index", "Automated Synthesis"],
    href: "/ai-business-transformation",
  },
  {
    num: "04",
    title: "Integrations",
    subtitle: "Resilient real-time connectors bridging legacy and modern SaaS",
    description: "Connecting fragmented SaaS platforms, legacy mainframes, and data silos into unified real-time event streams.",
    deliverables: ["Bidirectional Connectors", "Event-Driven Streaming", "API Gateway Governance"],
    href: "/cloud-consulting",
  },
  {
    num: "05",
    title: "Data Pipelines",
    subtitle: "Verified, low-latency data foundations feeding AI reasoning",
    description: "Building verified, low-latency data pipelines that feed high-integrity inputs into AI reasoning systems.",
    deliverables: ["Data Quality Assurances", "Automated Lineage", "Lakehouse Optimization"],
    href: "/data-engineering",
  },
  {
    num: "06",
    title: "Decision Support",
    subtitle: "Predictive & prescriptive scenario analytics for operational leaders",
    description: "Delivering predictive and prescriptive intelligence for executives, supply chain planners, and financial controllers.",
    deliverables: ["Scenario Modeling", "Margin Optimization", "Risk Forecaster"],
    href: "/ai-business-transformation",
  },
  {
    num: "07",
    title: "Custom Software",
    subtitle: "Enterprise-grade applications engineered for sovereign production",
    description: "Architecting purpose-built enterprise software that embeds AI directly into operational interfaces and user workflows.",
    deliverables: ["Microservice Architecture", "Zero-Trust Identity", "Continuous Delivery"],
    href: "/software-development",
  },
];

export default function WhatWeDoSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section id="capabilities" className="relative w-full bg-[#F5F7F6] border-b border-[#D9DDDA] py-24 sm:py-32 select-none overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9DDDA]"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.14em] uppercase text-[#6F7479]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24A]" />
              <span>WHAT WE DO // 07 CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#0D1117] leading-[1.08]">
              Total enterprise reinvention across technology & operations.
            </h2>
          </div>
          <div className="text-[15px] text-[#6F7479] max-w-md font-normal leading-relaxed">
            We avoid disconnected point solutions. Each capability is engineered to integrate directly into core transactional workflows.
          </div>
        </motion.div>

        {/* Large Typographic List Layout */}
        <div className="mt-10 border-t border-b border-[#D9DDDA] divide-y divide-[#D9DDDA]">
          {CAPABILITIES.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(idx)}
                className={cn(
                  "group relative py-7 px-4 sm:px-6 -mx-4 sm:-mx-6 transition-all duration-[240ms] ease-out cursor-pointer",
                  isHovered ? "bg-[#FFFFFF]" : "hover:bg-[#FFFFFF]/50"
                )}
              >
                {/* Thin top highlight hairline in gold */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[1.5px] bg-[#C9A24A] transition-opacity duration-[240ms] ease-out",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                  {/* Numeral: 1 col */}
                  <div className="lg:col-span-1 flex items-center">
                    <span
                      className={cn(
                        "font-mono text-base font-normal transition-colors duration-[240ms]",
                        isHovered ? "text-[#C9A24A]" : "text-[#6F7479]"
                      )}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Subtitle: 5 cols */}
                  <div className="lg:col-span-5 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3
                        className={cn(
                          "text-xl sm:text-2xl font-sans font-medium sm:font-semibold tracking-tight transition-all duration-[240ms]",
                          isHovered 
                            ? "text-[#0D1117] translate-x-1" 
                            : "text-[#0D1117]/85 group-hover:text-[#0D1117]"
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#6F7479] group-hover:text-[#0D1117] transition-colors duration-[240ms]">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description: 4 cols */}
                  <div className="lg:col-span-4">
                    <p
                      className={cn(
                        "text-[13.5px] leading-relaxed transition-colors duration-[240ms]",
                        isHovered ? "text-[#0D1117]" : "text-[#6F7479]"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Link CTA: 2 cols */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center text-[13px] font-mono font-medium transition-all duration-[200ms]",
                        isHovered 
                          ? "text-[#0D1117] translate-x-1" 
                          : "text-[#6F7479] group-hover:text-[#0D1117]"
                      )}
                    >
                      <span>Explore</span>
                    </Link>
                  </div>
                </div>

                {/* Sub-deliverable pill tags visible when active */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="pt-4 mt-4 border-t border-[#D9DDDA] flex flex-wrap gap-2"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7479] mr-2 flex items-center">
                      Key Deliverables:
                    </span>
                    {item.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11.5px] font-mono text-[#0D1117] bg-[#F5F7F6] border border-[#D9DDDA] px-2.5 py-0.5 rounded-[2px]"
                      >
                        {del}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Trust Footer */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-[12.5px] text-[#6F7479] font-mono">
          <div>DELIVERED VIA PRIVATE CLOUD ENCLAVES // ON-PREM OR DEDICATED VPC</div>
          <div>ZERO MODEL VENDOR LOCK-IN</div>
        </div>
      </Container>
    </section>
  );
}
