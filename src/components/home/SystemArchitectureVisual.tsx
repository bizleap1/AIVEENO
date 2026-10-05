"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PipelineStage {
  step: string;
  title: string;
  code: string;
  detail: string;
  metrics: string;
}

const STAGES: PipelineStage[] = [
  {
    step: "01",
    title: "BUSINESS OPERATIONS",
    code: "OPS_CORE",
    detail: "Strategic business models, commercial objectives & unit economics",
    metrics: "STRATEGIC ALIGNMENT",
  },
  {
    step: "02",
    title: "WORKFLOWS + SYSTEMS",
    code: "FLOW_SYS",
    detail: "Cross-departmental processes, ERP handoffs & enterprise platforms",
    metrics: "PROCESS AUDIT",
  },
  {
    step: "03",
    title: "DATA + INTEGRATION",
    code: "DATA_FABRIC",
    detail: "Governed data pipelines, enterprise schemas & real-time sync",
    metrics: "SCHEMA GOVERNANCE",
  },
  {
    step: "04",
    title: "AI ENABLEMENT",
    code: "AI_ORCH",
    detail: "Domain-trained models, reasoning guardrails & agent workflows",
    metrics: "PRODUCTION LLM",
  },
  {
    step: "05",
    title: "TRANSFORMATION",
    code: "SCALE_VAL",
    detail: "Sustained operational leverage & permanent organizational capability",
    metrics: "BUSINESS IMPACT",
  },
];

export default function SystemArchitectureVisual() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STAGES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full rounded-[4px] border border-[#262626] bg-[#111111] p-5 sm:p-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#262626] pb-3 text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-2 text-[#FFFFFF]">
          <span className="h-1.5 w-1.5 rounded-none bg-[#FFFFFF]" />
          <span className="font-semibold tracking-[0.14em]">
            SYSTEM TRANSFORMATION CASCADE
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#A1A1AA]">
          <span className="hidden sm:inline">[MONOCHROME TECH]</span>
          <span className="text-[#FFFFFF]">ARCH / 2026</span>
        </div>
      </div>

      {/* Vertical Pipeline Cascade */}
      <div className="mt-5 space-y-2">
        {STAGES.map((stage, idx) => {
          const isActive = activeStep === idx;
          const isLast = idx === STAGES.length - 1;

          return (
            <div key={stage.step} className="relative">
              {/* Stage Card */}
              <button
                type="button"
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "w-full text-left transition-all p-3 sm:p-3.5 rounded-[3px] border",
                  isActive
                    ? "border-[#FFFFFF] bg-[#080808] text-[#FFFFFF]"
                    : "border-[#262626] bg-[#111111] text-[#A1A1AA] hover:border-[#D7D7D7]/40 hover:text-[#FFFFFF]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "text-[11px] font-mono font-semibold tracking-wider",
                        isActive ? "text-[#FFFFFF]" : "text-[#A1A1AA]"
                      )}
                    >
                      {stage.step}
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-mono tracking-tight font-medium">
                      {stage.title}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-[2px] border",
                      isActive
                        ? "border-[#FFFFFF]/40 bg-[#FFFFFF]/10 text-[#FFFFFF]"
                        : "border-[#262626] text-[#A1A1AA]"
                    )}
                  >
                    {stage.code}
                  </span>
                </div>

                {/* Expanded metadata when active */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 font-sans text-[12px] sm:text-[12.5px] leading-relaxed",
                    isActive
                      ? "max-h-20 mt-2 pt-2 border-t border-[#262626] text-[#A1A1AA]"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <p>{stage.detail}</p>
                </div>
              </button>

              {/* Connecting Technical Arrow Connector */}
              {!isLast && (
                <div className="flex justify-center py-1">
                  <div className="flex items-center gap-1.5 text-[#262626]">
                    <span className="h-2 w-px bg-[#262626]" />
                    <span className="font-mono text-[10px] text-[#A1A1AA]">↓</span>
                    <span className="h-2 w-px bg-[#262626]" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[10.5px] font-mono text-[#A1A1AA]">
        <div className="flex items-center gap-2">
          <span className="text-[#FFFFFF]">FLOW:</span>
          <span>DISCIPLINED EXECUTION</span>
        </div>
        <div className="text-[10px]">STAGE {activeStep + 1} OF 5</div>
      </div>
    </div>
  );
}
