"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Filter strictly to the 8 client PDF domains requested:
// Operations, Sales, Customer Experience, Finance, HR, Marketing, IT, Data
const DOMAIN_IDS = ["operations", "sales", "cx", "finance", "hr", "marketing", "it", "data"];

export default function OpportunityMapSection() {
  const { opportunityMap } = homepageData;
  const domains = opportunityMap.domains.filter((d) => DOMAIN_IDS.includes(d.id));
  
  const [activeId, setActiveId] = useState<string>("operations");
  const activeDomain = domains.find((d) => d.id === activeId) || domains[0];

  return (
    <section id="opportunity-map" className="relative w-full bg-[#F5F7F6] text-[#0D1117] border-b border-[#D9DDDA] py-20 sm:py-28 select-none">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9DDDA]">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-sans font-medium tracking-[0.12em] uppercase text-[#6F7479]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Transformation Opportunity Map</span>
            </div>
            <h2 className="font-sans font-medium text-[34px] sm:text-[44px] lg:text-[48px] text-[#0D1117] tracking-[-0.03em] leading-[1.05]">
              Where AI creates meaningful business value.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#6F7479] max-w-md font-normal leading-relaxed">
            Explore core enterprise functions to examine how workflows, data foundations, and intelligent systems combine to drive compounding operational leverage.
          </p>
        </div>

        {/* 4x2 Interactive Architectural Matrix */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9DDDA] border border-[#D9DDDA] rounded-[4px] overflow-hidden">
          {domains.map((domain, index) => {
            const isActive = domain.id === activeId;
            return (
              <button
                key={domain.id}
                type="button"
                onMouseEnter={() => setActiveId(domain.id)}
                onClick={() => setActiveId(domain.id)}
                className={cn(
                  "relative text-left p-6 sm:p-7 flex flex-col justify-between transition-all duration-[260ms] ease-out cursor-pointer min-h-[170px]",
                  isActive
                    ? "bg-[#FFFFFF] text-[#0D1117] opacity-100 z-10 shadow-xs"
                    : "bg-[#F5F7F6] text-[#6F7479] hover:bg-[#FFFFFF] hover:text-[#0D1117]"
                )}
              >
                {/* Thin top edge highlight line activated on hover/active */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[2px] bg-[#D4A64A] transition-opacity duration-[260ms] ease-out",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="flex items-center justify-between w-full">
                  <span className={cn(
                    "text-[12px] font-mono tracking-wider font-normal transition-colors duration-[260ms]",
                    isActive ? "text-[#D4A64A]" : "text-[#6F7479]"
                  )}>
                    0{index + 1}
                  </span>
                  <ArrowUpRight className={cn(
                    "h-3.5 w-3.5 transition-all duration-[260ms] ease-out",
                    isActive ? "opacity-100 translate-x-0.5 -translate-y-0.5 text-[#0D1117]" : "opacity-0 text-[#6F7479]"
                  )} />
                </div>

                <div className="mt-6 space-y-1.5">
                  <h3 className={cn(
                    "font-sans font-medium sm:font-semibold text-[18px] sm:text-[20px] tracking-tight transition-colors duration-[260ms]",
                    isActive ? "text-[#0D1117]" : "text-[#0D1117]/80"
                  )}>
                    {domain.name}
                  </h3>
                  <p className={cn(
                    "text-[12.5px] line-clamp-2 leading-relaxed transition-colors duration-[260ms]",
                    isActive ? "text-[#6F7479]" : "text-[#6F7479]"
                  )}>
                    {domain.executiveSummary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detail Inspector Panel */}
        <div className="mt-8 rounded-[4px] border border-[#D9DDDA] bg-[#FFFFFF] p-8 sm:p-10 text-[#0D1117] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#D9DDDA]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F7479]">
                ARCHITECTURAL SPECIFICATION // {activeDomain.name.toUpperCase()}
              </span>
              <h4 className="text-2xl sm:text-3xl font-sans font-medium sm:font-semibold text-[#0D1117] mt-1.5 tracking-tight">
                {activeDomain.name} Workflow Reinvention
              </h4>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] bg-[#F5F7F6] border border-[#D9DDDA] px-3 py-1 rounded-[2px]">
              Active Blueprint
            </div>
          </div>

          <p className="mt-6 text-[15.5px] sm:text-[17px] text-[#555B61] leading-relaxed max-w-4xl font-normal">
            {activeDomain.executiveSummary}
          </p>

          <div className="mt-8 pt-8 border-t border-[#D9DDDA] grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Priority Workflows */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
                01 / Priority Workflows
              </div>
              <ul className="space-y-2.5 text-[13.5px] text-[#555B61]">
                {activeDomain.focusAreas.map((fa, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#D4A64A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{fa}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow Impact */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
                02 / Operational Leverage
              </div>
              <ul className="space-y-2.5 text-[13.5px] text-[#555B61]">
                {activeDomain.workflowImpact.map((wi, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#D4A64A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{wi}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Foundation */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D1117] font-medium">
                03 / Technical Backbone
              </div>
              <ul className="space-y-2.5 text-[13.5px] text-[#555B61]">
                {activeDomain.technicalRequirements.map((tr, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#D4A64A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{tr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
