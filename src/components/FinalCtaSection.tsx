"use client";

import { ArrowRight, ShieldCheck, Lock, CalendarCheck } from "lucide-react";

interface FinalCtaProps {
  onOpenDiscoveryModal: (interest?: string) => void;
}

export default function FinalCtaSection({ onOpenDiscoveryModal }: FinalCtaProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F3EE] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="rounded-2xl border border-[#E4E0D7] bg-[#FCFBF9] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E0D7] bg-[#F5F3EE] px-3.5 py-1 text-xs font-mono font-medium text-[#141414]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
            <span>Next Step: Technical Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#141414] leading-[1.05]">
            Ready to transform your business with AI and technology?
          </h2>

          <p className="text-base sm:text-lg text-[#6F7378] max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential discovery call with our principal technology consulting team. We’ll review your systems, explore high-value opportunities, and discuss practical implementation paths.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => onOpenDiscoveryModal("Final CTA")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#141414] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#262626] transition-all shadow-xs active:scale-[0.98]"
            >
              <span>Book a Discovery Call</span>
            </button>

            <a
              href="#framework"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#D5D0C6] bg-transparent px-6 py-3.5 text-sm font-medium text-[#141414] hover:bg-[#EAE6DE]/70 transition-all"
            >
              <span>Explore Framework</span>
            </a>
          </div>

          <div className="pt-8 border-t border-[#ECE8E1] flex flex-wrap items-center justify-center gap-6 text-xs text-[#6F7378] font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#141414]" />
              <span>Mutual NDA Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarCheck className="h-4 w-4 text-[#141414]" />
              <span>Direct Partner Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-[#141414]" />
              <span>Enterprise Compliance Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
