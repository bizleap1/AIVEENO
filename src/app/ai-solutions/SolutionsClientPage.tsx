"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsProblems from "@/components/solutions/SolutionsProblems";
import SolutionsLandscape from "@/components/solutions/SolutionsLandscape";
import SolutionsEnvironments from "@/components/solutions/SolutionsEnvironments";
import SolutionsPathway from "@/components/solutions/SolutionsPathway";
import SolutionsCta from "@/components/solutions/SolutionsCta";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases (/ai-solutions)
 *
 * Page Flow:
 * 01. Hero (#111312 Dark Graphite Architectural Split)
 * 02. Business Problems Worth Solving (#F5F7F6 Editorial Rows)
 * 03. AI Solutions in Practice (#EEF1F0 Three-Chapter Editorial Landscape)
 * 04. Built for Business Environments (#111312 Dark Graphite Consideration Split)
 * 05. From Opportunity to Implementation (#F5F7F6 Assessment & Framework Pathways)
 * 06. Final CTA (#EEF1F0 Asymmetric Conversion Split) -> Global Dark Footer (#111312)
 */

export default function SolutionsClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Solutions & Systems");
  const [sourceContext, setSourceContext] = useState("AI Solutions Page");

  const handleOpenDiscovery = (contextOrInterest: string = "AI Solutions & Systems") => {
    setDiscoveryInterest("AI Solutions & Systems");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "AI Solutions & Systems",
      source_context: contextOrInterest,
    });
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
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

          {/* ========================================================================= */}
          {/* 03 — AI SOLUTIONS IN PRACTICE (#EEF1F0 Three-Chapter Solution Landscape)  */}
          {/* ========================================================================= */}
          <SolutionsLandscape />

          {/* ========================================================================= */}
          {/* 04 — BUILT FOR BUSINESS ENVIRONMENTS (#111312 Dark Graphite Split)        */}
          {/* ========================================================================= */}
          <SolutionsEnvironments />

          {/* ========================================================================= */}
          {/* 05 — FROM OPPORTUNITY TO IMPLEMENTATION (#F5F7F6 Destination Pathways)    */}
          {/* ========================================================================= */}
          <SolutionsPathway />

          {/* ========================================================================= */}
          {/* 06 — FINAL CTA (#EEF1F0 Asymmetric Conversion Split)                      */}
          {/* ========================================================================= */}
          <SolutionsCta onOpenDiscoveryModal={handleOpenDiscovery} />
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
    </MotionConfig>
  );
}
