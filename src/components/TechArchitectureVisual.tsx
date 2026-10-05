"use client";

import { useState } from "react";

export default function TechArchitectureVisual() {
  const [activeTier, setActiveTier] = useState<string>("ai");

  const tiers = [
    {
      id: "ops",
      code: "TIER_01",
      name: "BUSINESS OPERATIONS",
      detail: "Cross-functional enterprise workflows and core business processes.",
      nodes: ["Operations", "Finance", "Customer Exp", "Sales"],
      metric: "-42% Cycle Latency"
    },
    {
      id: "ai",
      code: "TIER_02",
      name: "AI SYSTEMS & REASONING",
      detail: "Multi-agent coordination protocols, fine-tuned models, and deterministic guardrails.",
      nodes: ["Agent Mesh", "Domain Models", "Policy Enforcer"],
      metric: "99.98% Precision"
    },
    {
      id: "data",
      code: "TIER_03",
      name: "DATA LAYER & FABRIC",
      detail: "Governed lakehouses, real-time event streaming, and semantic vector graphs.",
      nodes: ["Lakehouse", "Kafka Stream", "Vector Graph"],
      metric: "12.8M Evt/sec"
    },
    {
      id: "cloud",
      code: "TIER_04",
      name: "CLOUD INFRASTRUCTURE",
      detail: "Multi-cloud Kubernetes clusters, zero-trust network mesh, and automated failover.",
      nodes: ["Multi-Cloud VPC", "Zero-Trust", "Kubernetes"],
      metric: "99.995% SLA"
    },
    {
      id: "opt",
      code: "TIER_05",
      name: "CONTINUOUS OPTIMIZATION",
      detail: "Closed-loop model evaluation, FinOps governance, and compounding enterprise ROI.",
      nodes: ["Drift Telemetry", "FinOps", "Model Eval"],
      metric: "Closed-Loop Governance"
    }
  ];

  return (
    <div className="relative w-full rounded-xl border border-[#E4E0D7] bg-[#FCFBF9] p-5 sm:p-7 shadow-[0_2px_12px_rgba(20,20,20,0.03)] select-none">
      
      {/* Top Architectural Metadata Strip */}
      <div className="flex items-center justify-between border-b border-[#ECE8E1] pb-3 text-[11px] font-mono text-[#6F7378]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
          <span className="tracking-wider uppercase">SYS_MAP // TOPOLOGY_v4</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">LATENCY: &lt;18ms</span>
          <span className="text-[#141414] font-medium">SOC 2 TYPE II</span>
        </div>
      </div>

      {/* Architecture Systems Map Layout */}
      <div className="relative mt-5 pt-1 pb-2">
        
        {/* SVG Systems Bus with Branching Lines and Subtle Moving Data Packets */}
        <div className="relative w-full">
          <svg
            viewBox="0 0 460 380"
            className="w-full h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background 1px Architectural Coordinate Grid */}
            <defs>
              <pattern id="arch-canvas-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ECE8E1" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-canvas-grid)" opacity="0.6" />

            {/* Central Vertical Trunk Line */}
            <line x1="230" y1="58" x2="230" y2="330" stroke="#D1CCC2" strokeWidth="1.2" />
            
            {/* Moving data packets along central trunk - soft graphite, no bright glow */}
            <circle r="2.5" fill="#141414">
              <animateMotion
                path="M 230 58 L 230 330"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#6F7378" opacity="0.7">
              <animateMotion
                path="M 230 58 L 230 330"
                dur="4.5s"
                begin="2.25s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Branch Lines from Business Operations into Central AI Hub */}
            {/* Operations branch (left outer) */}
            <path d="M 65 30 L 65 52 L 230 58" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="3 3" />
            {/* Finance branch (left inner) */}
            <path d="M 175 30 L 175 52 L 230 58" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="3 3" />
            {/* Customer Exp branch (right inner) */}
            <path d="M 285 30 L 285 52 L 230 58" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="3 3" />
            {/* Sales branch (right outer) */}
            <path d="M 395 30 L 395 52 L 230 58" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="3 3" />

            {/* Soft moving dots along branches */}
            <circle r="2" fill="#6F7378">
              <animateMotion path="M 65 30 L 65 52 L 230 58" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#6F7378">
              <animateMotion path="M 175 30 L 175 52 L 230 58" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#6F7378">
              <animateMotion path="M 285 30 L 285 52 L 230 58" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#6F7378">
              <animateMotion path="M 395 30 L 395 52 L 230 58" dur="3.8s" repeatCount="indefinite" />
            </circle>

            {/* Horizontal T-Connectors for lower tiers */}
            {/* Data Layer lateral branches */}
            <line x1="160" y1="185" x2="300" y2="185" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="160" cy="185" r="2" fill="#9EA3A8" />
            <circle cx="300" cy="185" r="2" fill="#9EA3A8" />

            {/* Cloud & Security lateral branches */}
            <line x1="140" y1="255" x2="320" y2="255" stroke="#D1CCC2" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="140" cy="255" r="2" fill="#9EA3A8" />
            <circle cx="320" cy="255" r="2" fill="#9EA3A8" />

            {/* Return feedback loop for Continuous Optimization */}
            <path
              d="M 230 330 C 230 355, 435 355, 435 185 C 435 58, 300 58, 230 58"
              stroke="#D1CCC2"
              strokeWidth="0.9"
              strokeDasharray="3 4"
              opacity="0.5"
            />
          </svg>

          {/* HTML Overlay of Interactive Architecture Blocks */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            
            {/* 1. BUSINESS OPERATIONS TIER (Branches) */}
            <div className="pointer-events-auto">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#6F7378] text-center mb-1.5 font-medium">
                BUSINESS OPERATIONS
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Operations", sub: "Supply & Logistics" },
                  { label: "Finance", sub: "Ledger & Audit" },
                  { label: "Customer Exp", sub: "Support & CRM" },
                  { label: "Sales", sub: "Deal Pipeline" },
                ].map((branch, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveTier("ops")}
                    className={`cursor-pointer rounded border p-1.5 text-center transition-all ${
                      activeTier === "ops"
                        ? "border-[#141414] bg-[#141414] text-white shadow-xs"
                        : "border-[#E4E0D7] bg-white text-[#141414] hover:border-[#141414]"
                    }`}
                  >
                    <div className="text-[11px] font-semibold tracking-tight">{branch.label}</div>
                    <div className={`text-[8px] font-mono mt-0.5 ${activeTier === "ops" ? "text-neutral-300" : "text-[#6F7378]"}`}>
                      {branch.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. AI SYSTEMS TIER (Center Hub) */}
            <div className="pointer-events-auto flex justify-center -mt-1">
              <div
                onClick={() => setActiveTier("ai")}
                className={`cursor-pointer w-full max-w-[340px] rounded-lg border p-2.5 transition-all text-center ${
                  activeTier === "ai"
                    ? "border-[#141414] bg-[#141414] text-white shadow-sm ring-1 ring-[#141414]"
                    : "border-[#E4E0D7] bg-white text-[#141414] hover:border-[#9EA3A8]"
                }`}
              >
                <div className="flex items-center justify-between border-b pb-1 mb-1 border-current opacity-30 text-[9px] font-mono">
                  <span>CORE // 02</span>
                  <span>AI SYSTEMS</span>
                  <span>99.98% PRECISION</span>
                </div>
                <div className="text-xs font-semibold tracking-tight">
                  AI Transformation & Reasoning Engine
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-[9px] font-mono opacity-80">
                  <span>Agent Mesh</span>
                  <span>•</span>
                  <span>Domain LLMs</span>
                  <span>•</span>
                  <span>Guardrails</span>
                </div>
              </div>
            </div>

            {/* 3. DATA LAYER TIER */}
            <div className="pointer-events-auto flex justify-center -mt-1">
              <div
                onClick={() => setActiveTier("data")}
                className={`cursor-pointer w-full max-w-[320px] rounded-lg border p-2.5 transition-all text-center ${
                  activeTier === "data"
                    ? "border-[#141414] bg-[#141414] text-white shadow-sm ring-1 ring-[#141414]"
                    : "border-[#E4E0D7] bg-white text-[#141414] hover:border-[#9EA3A8]"
                }`}
              >
                <div className="flex items-center justify-between border-b pb-1 mb-1 border-current opacity-30 text-[9px] font-mono">
                  <span>FABRIC // 03</span>
                  <span>DATA LAYER</span>
                  <span>12.8M EVT/S</span>
                </div>
                <div className="text-xs font-semibold tracking-tight">
                  Enterprise Data Fabric & Modern Pipelines
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-[9px] font-mono opacity-80">
                  <span>Lakehouse</span>
                  <span>•</span>
                  <span>Kafka / Flink</span>
                  <span>•</span>
                  <span>Vector Index</span>
                </div>
              </div>
            </div>

            {/* 4. CLOUD INFRASTRUCTURE TIER */}
            <div className="pointer-events-auto flex justify-center -mt-1">
              <div
                onClick={() => setActiveTier("cloud")}
                className={`cursor-pointer w-full max-w-[340px] rounded-lg border p-2.5 transition-all text-center ${
                  activeTier === "cloud"
                    ? "border-[#141414] bg-[#141414] text-white shadow-sm ring-1 ring-[#141414]"
                    : "border-[#E4E0D7] bg-white text-[#141414] hover:border-[#9EA3A8]"
                }`}
              >
                <div className="flex items-center justify-between border-b pb-1 mb-1 border-current opacity-30 text-[9px] font-mono">
                  <span>INFRA // 04</span>
                  <span>CLOUD INFRASTRUCTURE</span>
                  <span>99.995% SLA</span>
                </div>
                <div className="text-xs font-semibold tracking-tight">
                  Multi-Cloud Foundation & Zero-Trust Security
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-[9px] font-mono opacity-80">
                  <span>AWS / Azure / GCP</span>
                  <span>•</span>
                  <span>Kubernetes</span>
                  <span>•</span>
                  <span>SOC2 Enclaves</span>
                </div>
              </div>
            </div>

            {/* 5. CONTINUOUS OPTIMIZATION TIER */}
            <div className="pointer-events-auto flex justify-center -mt-1">
              <div
                onClick={() => setActiveTier("opt")}
                className={`cursor-pointer w-full max-w-[300px] rounded-lg border p-2 transition-all text-center ${
                  activeTier === "opt"
                    ? "border-[#141414] bg-[#141414] text-white shadow-xs"
                    : "border-[#E4E0D7] bg-[#FAF9F5] text-[#141414] hover:border-[#9EA3A8]"
                }`}
              >
                <div className="text-[10px] font-semibold tracking-tight">
                  Continuous Optimization & Closed-Loop Governance
                </div>
                <div className="text-[8px] font-mono text-[#6F7378] mt-0.5">
                  Drift Telemetry • FinOps Guardrails • Compounding ROI
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Selected Tier Brief Footer */}
      <div className="mt-4 pt-3 border-t border-[#ECE8E1] flex items-center justify-between text-[11px] text-[#6F7378]">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="text-[#141414] font-medium">ACTIVE NODE:</span>
          <span>{tiers.find(t => t.id === activeTier)?.name}</span>
        </div>
        <div className="font-mono text-[10px] text-[#141414] font-semibold">
          {tiers.find(t => t.id === activeTier)?.metric}
        </div>
      </div>

    </div>
  );
}
