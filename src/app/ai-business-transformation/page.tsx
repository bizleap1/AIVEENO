"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import TransformationHero from "@/components/transformation/TransformationHero";
import TransformationChallenge from "@/components/transformation/TransformationChallenge";
import TransformationValueDomains from "@/components/transformation/TransformationValueDomains";
import TransformationSystemsDark from "@/components/transformation/TransformationSystemsDark";
import TransformationFramework from "@/components/transformation/TransformationFramework";
import TransformationLifecycleRail from "@/components/transformation/TransformationLifecycleRail";
import TransformationOutcomes from "@/components/transformation/TransformationOutcomes";
import TransformationCta from "@/components/transformation/TransformationCta";
import DiscoveryModal from "@/components/DiscoveryModal";

/**
 * Aiveeno — Flagship Service Page: AI Business Transformation (/ai-business-transformation)
 * 
 * Locked 8-Section Visual Architecture (Accenture-Inspired Editorial Experience):
 * 01. Hero → #F5F7F6 (Clean core light surface)
 * 02. Business Challenge + Our Perspective → #EEF1F0 (Merged richer editorial narrative zone)
 * 03. Where AI Creates Value → #F5F7F6 (Interactive expandable editorial service explorer)
 * 04. What Transformation Can Include → #111312 (DARK GRAPHITE capability anchor)
 * 05. Our Approach / Framework → #F5F7F6 (Disciplined consulting lifecycle)
 * 06. From Assessment to Implementation → #EEF1F0 (Progressive horizontal/vertical rail)
 * 07. Potential Outcomes → #F5F7F6 (High-impact 2-column editorial outcome statements)
 * 08. Final Flagship CTA → #F5F7F6 (Asymmetric editorial split & discovery call)
 * + Global Footer → #111312 (Dark graphite)
 */

export default function AIBusinessTransformationPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Business Transformation");
  const [sourceContext, setSourceContext] = useState("AI Business Transformation Flagship");

  const handleOpenDiscovery = (contextOrInterest: string = "AI Business Transformation") => {
    if (contextOrInterest.includes("Assessment")) {
      setDiscoveryInterest("AI Transformation Assessment");
    } else if (contextOrInterest.includes("Cloud")) {
      setDiscoveryInterest("Cloud Consulting");
    } else {
      setDiscoveryInterest("AI Business Transformation");
    }
    setSourceContext(contextOrInterest);
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#0E1C2A]">
      {/* Top Sticky Enterprise Navigation with MegaMenu */}
      <Navbar onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* 01 — Flagship Hero: AI Business Transformation (#F5F7F6) */}
        <TransformationHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 02 — Business Challenge + Our Perspective: Unified Editorial Narrative Zone (#EEF1F0) */}
        <TransformationChallenge />

        {/* 03 — Where AI Creates Value: Expandable Editorial Service Explorer (#F5F7F6) */}
        <TransformationValueDomains onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 04 — What Transformation Can Include: Main Dark Graphite Capability Section (#111312) */}
        <TransformationSystemsDark />

        {/* 05 — Our Approach / Framework: Disciplined Transformation Lifecycle (#F5F7F6) */}
        <TransformationFramework />

        {/* 06 — From Assessment to Implementation: Progressive Commercial Rail (#EEF1F0) */}
        <TransformationLifecycleRail />

        {/* 07 — Potential Outcomes: 2-Column High-Impact Statements (#F5F7F6) */}
        <TransformationOutcomes />

        {/* 08 — Final Flagship CTA: Asymmetric Editorial Split (#F5F7F6) */}
        <TransformationCta onOpenDiscoveryModal={handleOpenDiscovery} />
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
