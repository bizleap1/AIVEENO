"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ValueDomain {
  id: string;
  name: string;
  metric: string;
  metricLabel: string;
  description: string;
  useCases: string[];
}

const DOMAINS: ValueDomain[] = [
  {
    id: "operations",
    name: "Operations & Supply Chain",
    metric: "-42%",
    metricLabel: "Operational Cycle Time",
    description: "Orchestrate complex cross-functional logistics, dynamic inventory replenishment, and predictive quality monitoring.",
    useCases: [
      "Autonomous workflow orchestration across ERP & WMS",
      "Dynamic lead-time forecasting & bottleneck mitigation",
      "Predictive equipment maintenance & throughput optimization"
    ]
  },
  {
    id: "sales",
    name: "Sales & Commercial Strategy",
    metric: "+34%",
    metricLabel: "Deal Velocity & Conversion",
    description: "Empower revenue teams with real-time prospect intelligence, intent modeling, and automated RFP synthesis.",
    useCases: [
      "Multi-signal account intent & buying committee mapping",
      "Automated complex proposal and technical RFP generation",
      "Dynamic pricing guidance & contract term optimization"
    ]
  },
  {
    id: "cx",
    name: "Customer Experience & Service",
    metric: "68%",
    metricLabel: "Autonomous Tier-1 Resolution",
    description: "Deliver context-aware, multi-modal support that resolves customer issues natively without robotic canned responses.",
    useCases: [
      "Deeply integrated CRM copilots with live account history",
      "Real-time sentiment trajectory & escalation triggers",
      "Automated ticket synthesis & root-cause categorization"
    ]
  },
  {
    id: "finance",
    name: "Finance & Risk Operations",
    metric: "99.8%",
    metricLabel: "Reconciliation Accuracy",
    description: "Eliminate manual spreadsheet cycles with continuous ledger auditability, fraud detection, and predictive cash flow models.",
    useCases: [
      "Multi-entity automated ledger & invoice reconciliation",
      "Real-time fraud anomaly detection and sanction screening",
      "Predictive liquidity forecasting under macro scenarios"
    ]
  },
  {
    id: "hr",
    name: "HR & Talent Engineering",
    metric: "-55%",
    metricLabel: "Time-to-Productivity",
    description: "Transform talent acquisition and internal mobility with structured skills graphs and personalized onboarding copilots.",
    useCases: [
      "Automated technical credential & skill competency mapping",
      "Adaptive role-specific onboarding guidance copilots",
      "Predictive workforce attrition & team sentiment telemetry"
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Go-to-Market",
    metric: "3.2x",
    metricLabel: "Campaign Content Velocity",
    description: "Scale hyper-personalized messaging and localized campaigns while maintaining rigorous brand and compliance guardrails.",
    useCases: [
      "Dynamic segmentation based on product telemetry data",
      "Regulated content generation with compliance verification",
      "Cross-channel predictive churn and lifetime value models"
    ]
  },
  {
    id: "it-data",
    name: "IT & Data Engineering",
    metric: "-70%",
    metricLabel: "Incident MTTR",
    description: "Accelerate legacy modernization, automate data pipeline monitoring, and resolve production incidents before users notice.",
    useCases: [
      "Automated legacy COBOL/Java refactoring & documentation",
      "Self-healing data pipeline orchestration & schema contracts",
      "Zero-touch incident triage and automated runbook execution"
    ]
  }
];

export default function ValueAreasSection() {
  const [selectedId, setSelectedId] = useState<string>("operations");

  const selectedDomain = DOMAINS.find(d => d.id === selectedId) || DOMAINS[0];

  return (
    <section id="ai-transformation" className="py-20 md:py-28 bg-[#FCFBF9] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ECE8E1]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#6F7378]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
              <span>Measurable Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#141414] leading-[1.05]">
              Where AI Creates Real Business Value
            </h2>
            <p className="text-base text-[#6F7378] leading-relaxed">
              We focus strictly on high-impact business domains where AI and modern cloud systems produce tangible margin expansion, revenue acceleration, and operational resilience.
            </p>
          </div>

          <div className="text-xs font-mono text-[#6F7378] hidden lg:block">
            Targeting high-feasibility, high-ROI enterprise domains
          </div>
        </div>

        {/* Clean Interactive Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Domain Selection Tabs (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {DOMAINS.map((domain) => {
              const isSelected = selectedId === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedId(domain.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "border-[#141414] bg-[#141414] text-white shadow-xs"
                      : "border-[#E4E0D7] bg-[#F5F3EE] text-[#141414] hover:border-[#141414] hover:bg-[#EFECE6]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-medium ${isSelected ? "text-neutral-300" : "text-[#6F7378]"}`}>
                      {domain.metric}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {domain.name}
                    </span>
                  </div>

                  <ArrowUpRight className={`h-4 w-4 transition-transform ${
                    isSelected 
                      ? "text-white translate-x-0.5 -translate-y-0.5" 
                      : "text-[#6F7378] group-hover:text-[#141414]"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Domain Detail Card (Right 7 Cols) */}
          <div className="lg:col-span-7 rounded-xl border border-[#E4E0D7] bg-[#F5F3EE] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#E4E0D7]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6F7378]">
                    Domain Architecture & Use Cases
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#141414] mt-1 tracking-tight">
                    {selectedDomain.name}
                  </h3>
                </div>

                <div className="rounded-lg border border-[#E4E0D7] bg-white px-4 py-2.5 shadow-xs text-right">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#141414]">
                    {selectedDomain.metric}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#6F7378] font-medium">
                    {selectedDomain.metricLabel}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-[#6F7378] leading-relaxed">
                {selectedDomain.description}
              </p>

              <div className="mt-8 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#141414] font-mono">
                  Target Production Deployments:
                </div>
                <div className="space-y-3">
                  {selectedDomain.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-lg border border-[#E4E0D7] bg-white p-3.5 shadow-xs"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#F5F3EE] text-[11px] font-mono font-semibold text-[#141414] mt-0.5 border border-[#E4E0D7]">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-[#141414] leading-normal">
                        {uc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E4E0D7] flex items-center justify-between text-xs text-[#6F7378]">
              <span className="font-mono">Security: Zero Data Leakage • SOC2 Type II</span>
              <span className="font-mono">Deployment: VPC / Dedicated Tenant</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
