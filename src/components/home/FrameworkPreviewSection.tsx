"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Aiveeno — Section 05: FRAMEWORK PREVIEW
 * 
 * Based directly on client brief & locked homepage sequence:
 * - Eyebrow: "OUR FRAMEWORK"
 * - Headline: "From opportunity to transformation."
 * - High-level methodology visual (not detailed process)
 * - 7 client-approved stages from the flagship framework:
 *   Discovery → Assessment → Prioritization → Solution Design → Build → Adoption → Optimization
 * - Connected horizontal lifecycle / system diagram, text minimal
 * - CTA: "Explore Our Framework" — no arrow
 * - Single font system: 100% Instrument Sans
 */

interface FrameworkStage {
  number: string;
  name: string;
  summary: string;
}

const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    number: "01",
    name: "Discovery",
    summary: "Context & operational goals",
  },
  {
    number: "02",
    name: "Assessment",
    summary: "Workflows, systems & data",
  },
  {
    number: "03",
    name: "Prioritization",
    summary: "Value vs. feasibility",
  },
  {
    number: "04",
    name: "Solution Design",
    summary: "Architecture & operating model",
  },
  {
    number: "05",
    name: "Build",
    summary: "Engineering & integration",
  },
  {
    number: "06",
    name: "Adoption",
    summary: "People, workflows & training",
  },
  {
    number: "07",
    name: "Optimization",
    summary: "Continuous scale & leverage",
  },
];

export default function FrameworkPreviewSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="framework-preview"
      className="relative w-full bg-[#FFFFFF] text-[#0D1B2A] select-none pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 scroll-mt-[76px] overflow-hidden border-b border-[#0D1B2A]/[0.08]"
    >
      <Container>
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER                                                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between">
          <div>
            {/* Eyebrow: OUR FRAMEWORK */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Our Framework</span>
            </div>

            {/* Headline */}
            <h2 className="mt-5 sm:mt-6 font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.02] lg:leading-[1.04]">
              From opportunity to transformation.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="mt-4 lg:mt-0 flex flex-col justify-end">
            <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-[#3B4A5A] leading-[1.52] font-normal max-w-[480px]">
              A disciplined, phased methodology designed to move from business reality to reliable production systems that stick.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02 — CONNECTED HORIZONTAL LIFECYCLE / SYSTEM DIAGRAM (7 Stages)           */}
        {/* ========================================================================= */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          
          {/* Desktop & Tablet: Connected 7-Stage Horizontal Pipeline */}
          <div className="hidden md:block relative bg-[#F5F7F6] border border-[#0D1B2A]/[0.08] rounded-[4px] p-6 lg:p-8 overflow-hidden">
            
            {/* Continuous Horizontal Structural Rail */}
            <div className="absolute top-[48px] left-[6%] right-[6%] h-[2px] bg-[#0D1B2A]/[0.10] z-0" />
            
            {/* Active Stage Rail Highlight */}
            <div
              className="absolute top-[48px] left-[6%] h-[2px] bg-[#D4A64A] transition-all duration-300 ease-out z-0"
              style={{
                width: `${(activeStage / (FRAMEWORK_STAGES.length - 1)) * 88}%`,
              }}
            />

            {/* 7 Horizontal Stations */}
            <div className="relative z-10 grid grid-cols-7 gap-2 lg:gap-3 items-start">
              {FRAMEWORK_STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isPassed = activeStage > idx;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    onMouseEnter={() => setActiveStage(idx)}
                    className="group relative flex flex-col items-center text-center cursor-pointer transition-all duration-200 focus:outline-none"
                    aria-label={`Framework Stage ${stage.number}: ${stage.name}`}
                  >
                    {/* Node Dot / Status Anchor */}
                    <div className="relative flex items-center justify-center w-10 h-10 mb-4">
                      {/* Pulse halo for active station */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-[#D4A64A]/20 animate-ping opacity-60" />
                      )}
                      
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 border ${
                          isActive
                            ? "bg-[#0D1B2A] border-[#D4A64A] shadow-xs"
                            : isPassed
                            ? "bg-[#FFFFFF] border-[#D4A64A]"
                            : "bg-[#FFFFFF] border-[#0D1B2A]/20 group-hover:border-[#0D1B2A]/50"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-sans font-medium ${
                            isActive
                              ? "text-[#D4A64A]"
                              : isPassed
                              ? "text-[#D4A64A]"
                              : "text-[#3B4A5A]"
                          }`}
                        >
                          {stage.number}
                        </span>
                      </div>
                    </div>

                    {/* Stage Name */}
                    <div
                      className={`text-[13px] lg:text-[14px] font-sans font-medium transition-colors duration-200 leading-snug ${
                        isActive ? "text-[#0D1B2A]" : "text-[#0D1B2A]/75 group-hover:text-[#0D1B2A]"
                      }`}
                    >
                      {stage.name}
                    </div>

                    {/* Minimal 1-line summary */}
                    <p className="mt-1 text-[11px] lg:text-[11.5px] font-sans text-[#3B4A5A] leading-tight line-clamp-2 max-w-[120px]">
                      {stage.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Continuous Iteration Loop Indicator Bar */}
            <div className="mt-8 pt-5 border-t border-[#0D1B2A]/[0.06] flex items-center justify-between text-[11px] font-sans font-medium text-[#3B4A5A]/80">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]" />
                <span>Continuous Iterative Optimization Loop</span>
              </div>
              <span className="text-[#3B4A5A]/60">
                Stage 07 feeds ongoing Discovery for scalable enterprise leverage
              </span>
            </div>

          </div>

          {/* Mobile: Clean Vertical Pipeline */}
          <div className="md:hidden relative bg-[#F5F7F6] border border-[#0D1B2A]/[0.08] rounded-[4px] p-5">
            <div className="relative pl-6 space-y-5">
              {/* Vertical connector spine */}
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-[#0D1B2A]/[0.15]" />

              {FRAMEWORK_STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={`mob-${stage.number}`}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className="relative flex items-start gap-3.5 text-left w-full cursor-pointer focus:outline-none"
                  >
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center border text-[9.5px] font-sans font-medium ${
                        isActive
                          ? "bg-[#0D1B2A] border-[#D4A64A] text-[#D4A64A]"
                          : "bg-[#FFFFFF] border-[#0D1B2A]/20 text-[#3B4A5A]"
                      }`}
                    >
                      {stage.number}
                    </div>

                    {/* Content */}
                    <div>
                      <div
                        className={`text-[14px] font-sans font-medium ${
                          isActive ? "text-[#0D1B2A]" : "text-[#0D1B2A]/80"
                        }`}
                      >
                        {stage.name}
                      </div>
                      <p className="text-[12px] font-sans text-[#3B4A5A] mt-0.5">
                        {stage.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================================= */}
          {/* 03 — CTA: Explore Our Framework (Strictly NO ARROW)               */}
          {/* ========================================================================= */}
          <div className="mt-8 sm:mt-10 flex items-center justify-start">
            <Link
              href="/framework"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[3px] bg-[#0D1B2A] text-[#FFFFFF] text-[13.5px] sm:text-[14px] font-sans font-medium tracking-[0.02em] hover:bg-[#1A2E44] transition-colors shadow-xs"
            >
              Explore Our Framework
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}
