"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import TechArchitectureVisual from "./TechArchitectureVisual";

interface HeroProps {
  onOpenDiscoveryModal: (interest?: string) => void;
}

export default function Hero({ onOpenDiscoveryModal }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] pt-32 pb-20 lg:pt-36 lg:pb-24 flex items-center border-b border-[#E4E0D7] bg-[#F5F3EE] arch-grid-bg overflow-hidden">
      
      {/* Subtle 10% Opacity Architectural Technical Coordinates & Labels */}
      <div className="absolute top-24 left-8 text-[10px] font-mono tracking-widest text-[#141414]/15 uppercase select-none hidden lg:block">
        [SYS_REF // AIV-ENTERPRISE-01]
      </div>
      <div className="absolute top-24 right-8 text-[10px] font-mono tracking-widest text-[#141414]/15 uppercase select-none hidden lg:block">
        COORD: 37.7749° N, 122.4194° W
      </div>
      <div className="absolute bottom-8 left-8 text-[10px] font-mono tracking-widest text-[#141414]/15 uppercase select-none hidden lg:block">
        INFRA: MULTI-CLOUD // AI // DATA
      </div>
      <div className="absolute bottom-8 right-8 text-[10px] font-mono tracking-widest text-[#141414]/15 uppercase select-none hidden lg:block">
        SEC: ZERO-TRUST SOC2
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Side: 55% (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Small Eyebrow: Uppercase, graphite/charcoal */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#6F7378]">
                AI TRANSFORMATION + CLOUD TECHNOLOGY
              </span>
            </div>

            {/* Main Headline: 72–88px on desktop, 600-650 weight, 0.96-1.02 line-height, ALL in same charcoal color #141414 */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-semibold text-[#141414] tracking-[-0.035em] leading-[0.98] max-w-2xl">
              Transform how your <br className="hidden sm:inline" />
              business operates <br className="hidden sm:inline" />
              with AI.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-[#6F7378] leading-relaxed max-w-xl font-normal tracking-[-0.01em]">
              We help organizations identify where AI creates real business value, then design and build the technology required to implement it at scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenDiscoveryModal("Hero Consultation")}
                className="inline-flex items-center justify-center rounded-lg bg-[#141414] px-6 py-3.5 text-[14px] font-medium text-white hover:bg-[#262626] transition-all shadow-xs active:scale-[0.98]"
              >
                <span>Book a Discovery Call</span>
              </button>

              <a
                href="#the-shift"
                className="inline-flex items-center justify-center rounded-lg border border-[#D5D0C6] bg-transparent px-5 py-3.5 text-[14px] font-medium text-[#141414] hover:bg-[#EAE6DE]/70 hover:border-[#141414] transition-all"
              >
                <span>Explore AI Transformation</span>
              </a>
            </div>

            {/* 3 Subtle Proof/Value Lines */}
            <div className="pt-6 border-t border-[#E4E0D7]/90">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#141414]">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141414]/70" />
                  <span>Business-first transformation</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141414]/70" />
                  <span>AI + Cloud + Technology</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#141414]/70" />
                  <span>Strategy through implementation</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: 45% (lg:col-span-5) Proper Tech Architecture Visual */}
          <div className="lg:col-span-5">
            <TechArchitectureVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
