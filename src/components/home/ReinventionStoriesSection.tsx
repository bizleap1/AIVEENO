"use client";

import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function ReinventionStoriesSection() {
  const stories = [
    {
      industry: "FINANCIAL SERVICES & WEALTH",
      title: "Autonomous Credit Underwriting & Multi-Cloud Regulatory Audit",
      metric: "94%",
      metricLabel: "Reduction in risk reconciliation cycle",
      problem:
        "A tier-1 regional institution suffered from manual, multi-day loan verification and fragmented compliance audits across 6 legacy databases.",
      solution:
        "Engineered private sovereign LLM pipeline with deterministic policy guardrails, automated document extraction, and immutable audit logs.",
      impact:
        "Underwriting decisions compressed from 4 days to 28 minutes while maintaining 100% regulatory audit compliance.",
    },
    {
      industry: "LOGISTICS & SUPPLY CHAIN",
      title: "Agentic Disruption Routing & Real-Time Fleet Telemetry",
      metric: "52%",
      metricLabel: "Decrease in transit exception delays",
      problem:
        "Cross-border freight operator struggled with supply bottlenecks, weather disruptions, and manual dispatcher re-routing across 1,200 vehicles.",
      solution:
        "Deployed collaborative multi-agent system connected to IoT telemetry, live weather radar, and ERP inventory nodes for automated exception resolution.",
      impact:
        "Autonomous triage resolved 82% of transit disruptions without human intervention, saving $4.2M in annual delay penalties.",
    },
    {
      industry: "ENTERPRISE B2B SAAS",
      title: "Intelligent Customer Resolution & Autonomous Churn Defense",
      metric: "3.4x",
      metricLabel: "Operating leverage across tier-2 support",
      problem:
        "Rapidly growing enterprise SaaS provider experienced support ticket backlogs and customer dissatisfaction during quarterly onboarding peaks.",
      solution:
        "Architected role-bounded RAG decision agent integrated directly into Jira, GitHub, and Salesforce with verified identity governance.",
      impact:
        "First-response resolution rose from 31% to 88%, reducing average resolution duration from 14 hours to 4 minutes.",
    },
  ];

  return (
    <section id="proof" className="relative w-full bg-[#070707] border-b border-[#1C2026] py-20 sm:py-28 select-none">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1C2026]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-mono tracking-[0.16em] uppercase text-[#A7ADB5]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Proof & Enterprise Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#FFFFFF] leading-[1.08]">
              Proven enterprise outcomes, not experimental pilots.
            </h2>
          </div>
          <div className="text-[13px] text-[#8692A4] max-w-md font-normal leading-relaxed">
            Real transformations engineered for commercial reliability, zero data leakage, and compounding productivity gains.
          </div>
        </div>

        {/* 3-Column Editorial Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-[4px] bg-[#0C0E12] border border-[#1C2026] hover:border-[#D4A64A]/40 transition-all group"
            >
              <div>
                {/* Industry Tag & Indicator */}
                <div className="flex items-center justify-between pb-5 border-b border-[#1C2026]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8692A4]">
                    {story.industry}
                  </span>
                  <span className="text-[10px] font-mono text-[#A7ADB5]">
                    CASE 0{idx + 1}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="pt-6 pb-2">
                  <div className="text-4xl sm:text-5xl font-sans font-bold text-[#FFFFFF] tracking-tight group-hover:text-white transition-colors">
                    {story.metric}
                  </div>
                  <div className="text-[12px] font-mono text-[#8692A4] uppercase tracking-wider mt-1">
                    {story.metricLabel}
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#FFFFFF] tracking-tight mt-4">
                  {story.title}
                </h3>

                {/* Challenge & Solution Summary */}
                <div className="mt-5 pt-4 border-t border-[#1C2026] space-y-3 text-[13px] text-[#8692A4] leading-relaxed">
                  <div>
                    <span className="text-[#FFFFFF] font-medium">Challenge: </span>
                    {story.problem}
                  </div>
                  <div>
                    <span className="text-[#FFFFFF] font-medium">Architecture: </span>
                    {story.solution}
                  </div>
                </div>
              </div>

              {/* Bottom Result Pill */}
              <div className="mt-8 pt-4 border-t border-[#1C2026] flex items-center justify-between">
                <span className="text-[11.5px] font-mono text-[#FFFFFF]">
                  Verified Production Result
                </span>
                <span className="text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
