"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SystemNode {
  id: string;
  step: string;
  label: string;
  sublabel: string;
  detail: string;
  elements: string[];
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: "business",
    step: "01",
    label: "Business Strategy",
    sublabel: "Strategic Intent & Value Thesis",
    detail: "Identifying commercial bottlenecks, revenue drivers, and organizational constraints.",
    elements: ["Executive Priorities", "Operating Model", "Capital Allocation"],
  },
  {
    id: "workflows",
    step: "02",
    label: "Workflows",
    sublabel: "Process & Decision Mapping",
    detail: "Analyzing how work actually moves across departments, tools, and human handoffs.",
    elements: ["Process Telemetry", "Repetitive Tasks", "Exception Handling"],
  },
  {
    id: "data",
    step: "03",
    label: "Data Architecture",
    sublabel: "Governed Semantic Foundations",
    detail: "Structuring enterprise data assets, vector representations, and ingestion pipelines.",
    elements: ["Enterprise Lakehouses", "Semantic Layer", "Data Lineage & Contracts"],
  },
  {
    id: "ai-systems",
    step: "04",
    label: "AI Systems",
    sublabel: "Agents & Specialized Models",
    detail: "Designing multi-agent workflows, domain-specific models, and deterministic guardrails.",
    elements: ["Agent Coordination", "Retrieval Engines", "Policy Guardrails"],
  },
  {
    id: "technology",
    step: "05",
    label: "Technology",
    sublabel: "Cloud, DevOps & Integrations",
    detail: "Modernizing resilient cloud compute, API gateways, and automated deployment pipelines.",
    elements: ["Multi-Cloud VPC", "ERP/CRM Connectors", "Automated CI/CD"],
  },
  {
    id: "outcomes",
    step: "06",
    label: "Outcomes",
    sublabel: "Compounding Operational Value",
    detail: "Delivering measurable throughput gains, margin improvement, and scalable capability.",
    elements: ["Cycle Time Reduction", "Enhanced Decisioning", "Scalable Operations"],
  },
];

export default function SystemsFlowDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>("ai-systems");

  const activeNode =
    SYSTEM_NODES.find((node) => node.id === activeNodeId) || SYSTEM_NODES[3];

  return (
    <div className="relative w-full rounded-[8px] border border-[#D9DEE7] bg-white p-6 sm:p-7 shadow-xs">
      {/* Top Header of Diagram */}
      <div className="flex items-center justify-between border-b border-[#D9DEE7] pb-3.5 text-[11px] font-mono text-[#667085]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
          <span className="font-semibold text-[#111827]">ENTERPRISE TRANSFORMATION MAP</span>
        </div>
        <span className="text-[10px] tracking-wider uppercase text-[#667085]">
          INTERACTIVE ARCHITECTURE
        </span>
      </div>

      {/* Connected Lifecycle Nodes */}
      <div className="mt-5 space-y-2">
        {SYSTEM_NODES.map((node, index) => {
          const isActive = activeNodeId === node.id;
          return (
            <div key={node.id} className="relative">
              <button
                type="button"
                onClick={() => setActiveNodeId(node.id)}
                className={cn(
                  "w-full text-left p-3 rounded-[6px] border transition-all flex items-center justify-between group",
                  isActive
                    ? "border-[#3157FF] bg-[#E9EEFF]/40 text-[#0B1020] shadow-xs"
                    : "border-[#D9DEE7]/70 bg-white text-[#111827] hover:border-[#B8C2D3] hover:bg-[#F7F8FA]"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded",
                      isActive
                        ? "bg-[#3157FF] text-white"
                        : "bg-[#F7F8FA] text-[#667085] group-hover:text-[#111827]"
                    )}
                  >
                    {node.step}
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold tracking-tight text-[#0B1020]">
                      {node.label}
                    </div>
                    <div className="text-[11px] text-[#667085] hidden sm:block">
                      {node.sublabel}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      isActive ? "bg-[#3157FF]" : "bg-[#D9DEE7] group-hover:bg-[#94A3B8]"
                    )}
                  />
                </div>
              </button>

              {/* Connecting vertical line to next node */}
              {index < SYSTEM_NODES.length - 1 && (
                <div className="flex justify-start pl-6 my-0.5">
                  <div className="h-2 w-px bg-[#D9DEE7]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Inspector Drawer for Selected Node */}
      <div className="mt-5 pt-4 border-t border-[#D9DEE7] bg-[#F7F8FA] rounded-[6px] p-4 border">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#667085] pb-1.5 border-b border-[#D9DEE7]">
          <span>SELECTED TIER: {activeNode.step} // {activeNode.label.toUpperCase()}</span>
          <span className="text-[#3157FF] font-medium">TRANSFORMATION FOCUS</span>
        </div>
        <p className="text-[12px] text-[#111827] mt-2 leading-relaxed font-normal">
          {activeNode.detail}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {activeNode.elements.map((elem, i) => (
            <span
              key={i}
              className="text-[10.5px] font-mono bg-white border border-[#D9DEE7] px-2 py-0.5 rounded text-[#111827]"
            >
              {elem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
