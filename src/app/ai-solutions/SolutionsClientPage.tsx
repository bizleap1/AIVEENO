"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsProblems from "@/components/solutions/SolutionsProblems";
import DiscoveryModal from "@/components/DiscoveryModal";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { homepageData } from "@/data/homepage";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases (/ai-solutions)
 * 
 * Features:
 * - Architectural Dark Graphite Hero (#111312) with custom multi-tier systems architecture line-art
 * - Global Navbar with transparentOnHero integration
 * - Detailed Architectural Categories & Typical Enterprise Workloads Grid
 * - Interactive Enterprise Discovery Booking Modal
 */

export default function SolutionsClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Solutions & Systems");
  const [sourceContext, setSourceContext] = useState("AI Solutions Page");

  const { capabilities } = homepageData.whatTransformationIncludes;

  const handleOpenDiscovery = (contextOrInterest: string = "AI Solutions & Systems") => {
    setDiscoveryInterest("AI Solutions & Systems");
    setSourceContext(contextOrInterest);
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#111312]">
      {/* Global Enterprise Navbar with transparent overlay on dark hero */}
      <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 01 — ARCHITECTURAL HERO SECTION (#111312 Dark Graphite Editorial)          */}
        {/* ========================================================================= */}
        <SolutionsHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* ========================================================================= */}
        {/* 02 — BUSINESS PROBLEMS WORTH SOLVING (#F5F7F6 Editorial Rows)             */}
        {/* ========================================================================= */}
        <SolutionsProblems />

        {/* Detailed Solutions Grid */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Architectural Categories"
              title="Systems engineered for operational reality."
              description="Each capability is custom-architected to address specific enterprise workflows while complying strictly with corporate security and privacy boundaries."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((solution, idx) => (
                <div
                  key={idx}
                  className="rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] p-7 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#D9DEE7]">
                      <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#3157FF] font-semibold">
                        {solution.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#667085]">
                        SYS_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-medium text-[#0B1020] mt-4 tracking-tight">
                      {solution.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] text-[#667085] leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D9DEE7]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#667085] font-semibold mb-2">
                      Typical Workloads:
                    </div>
                    <ul className="space-y-1 text-[12px] text-[#111827]">
                      {solution.typicalWorkloads.map((tw, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#3157FF]" />
                          <span>{tw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <CTAButton
                variant="primary"
                onClick={() => handleOpenDiscovery("Solutions Grid Bottom CTA")}
              >
                Book a Discovery Call
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      {/* Global Dark Graphite Footer (#111312) */}
      <Footer />

      {/* Enterprise Discovery Call Booking Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={handleCloseDiscovery}
        initialInterest={discoveryInterest}
        sourceContext={sourceContext}
      />
    </div>
  );
}
