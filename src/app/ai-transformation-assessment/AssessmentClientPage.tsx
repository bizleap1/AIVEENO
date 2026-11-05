"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import AssessmentHero from "@/components/assessment/AssessmentHero";
import AssessmentClarity from "@/components/assessment/AssessmentClarity";
import AssessmentExamine from "@/components/assessment/AssessmentExamine";
import DiscoveryModal from "@/components/DiscoveryModal";

/**
 * Aiveeno — AI Transformation Assessment Page (/ai-transformation-assessment/)
 * Source of Truth: Enterprise_AI_Cloud_Website_Developer_Brief(1).pdf
 * 
 * Strategic Role:
 * Creates a credible, paid diagnostic entry point into a broader transformation relationship.
 * 
 * Target Page Architecture (to be designed section-by-section):
 * 01. Hero (Dark Graphite Editorial with Custom Assessment Line-Art) [IMPLEMENTED]
 * 02. What the Assessment Is / Why It Matters [NEXT]
 * 03. What We Examine
 * 04. How the Assessment Works
 * 05. What You Receive (Deliverable Package)
 * 06. Timeline and Commercial Positioning (One-Week Paid Diagnostic)
 * 07. From Assessment to Transformation
 * 08. Final CTA
 * + Global Dark Footer (#111312)
 */

export default function AssessmentClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Transformation Assessment");
  const [sourceContext, setSourceContext] = useState("AI Transformation Assessment Page");

  const handleOpenDiscovery = (contextOrInterest: string = "AI Transformation Assessment") => {
    setDiscoveryInterest("AI Transformation Assessment");
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
        {/* 01 — HERO SECTION (Dark Graphite Editorial Asymmetric Composition)        */}
        {/* ========================================================================= */}
        <AssessmentHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* ========================================================================= */}
        {/* 02 — CLARITY BEFORE IMPLEMENTATION (Light Contrast Surface #EBEFED)       */}
        {/* ========================================================================= */}
        <AssessmentClarity />

        {/* ========================================================================= */}
        {/* 03 — WHAT WE EXAMINE (Editorial Scope Matrix #F5F7F6)                     */}
        {/* ========================================================================= */}
        <AssessmentExamine />

        {/* 
          Future Sections to be implemented and reviewed sequentially:
          04. How the Assessment Works
          05. What You Receive
          06. Timeline and Commercial Positioning
          07. From Assessment to Transformation
          08. Final CTA
        */}
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

