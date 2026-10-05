"use client";

import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface FinalCtaSectionProps {
  onOpenDiscoveryModal: (context?: string) => void;
}

export default function FinalCtaSection({
  onOpenDiscoveryModal,
}: FinalCtaSectionProps) {
  const { finalCta } = homepageData;

  return (
    <section id="final-cta" className="relative w-full bg-[#F5F7F6] border-b border-[#D9DDDA] py-20 md:py-28 select-none overflow-hidden">
      
      {/* Slow subtle datum line reveal */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-[#D9DDDA]" 
      />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          
          {/* Top Mono Label with Gold Dot */}
          <div className="inline-flex items-center gap-2 text-[11.5px] font-mono tracking-[0.16em] uppercase text-[#6F7479]">
            <span className="w-3.5 h-px bg-[#D4A64A]" />
            <span>10 // Next Step & Executive Engagement</span>
          </div>

          {/* Giant Display Heading in Instrument Sans 500 */}
          <h2 className="text-4xl sm:text-6xl lg:text-[64px] font-sans font-medium tracking-[-0.035em] text-[#0D1117] leading-[1.02]">
            Start with the business challenge. <br className="hidden sm:inline" />
            We will engineer the system.
          </h2>

          {/* Editorial Copy */}
          <p className="text-base sm:text-xl text-[#6F7479] max-w-2xl mx-auto leading-relaxed font-normal">
            {finalCta.supportingText}
          </p>

          {/* Action Buttons: 180-220ms hover */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenDiscoveryModal(finalCta.primaryCta.context)}
              className="group inline-flex h-[48px] items-center justify-center rounded-[3px] bg-[#0D1117] px-8 text-[15px] font-medium text-[#F5F7F6] hover:bg-[#D4A64A] hover:text-[#0D1117] transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>{finalCta.primaryCta.label}</span>
            </button>

            <Link
              href={finalCta.secondaryCta.href}
              className="group inline-flex h-[48px] items-center justify-center rounded-[3px] border border-[#D9DDDA] bg-[#FFFFFF] px-8 text-[15px] font-medium text-[#0D1117] hover:border-[#0D1117] hover:bg-[#F5F7F6] transition-all duration-200 active:scale-[0.99]"
            >
              <span>{finalCta.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Baseline Trust & Governance Row */}
          <div className="pt-12 border-t border-[#D9DDDA] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] text-[#6F7479] font-mono uppercase tracking-widest">
            <div>MUTUAL CONFIDENTIALITY NDA</div>
            <span className="text-[#D4A64A]">•</span>
            <div>SENIOR PARTNER LED</div>
            <span className="text-[#D4A64A]">•</span>
            <div>STRICT ZERO DATA LEAKAGE</div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
