"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import TransformationHero from "@/components/transformation/TransformationHero";
import TransformationChallenge from "@/components/transformation/TransformationChallenge";
import TransformationPerspective from "@/components/transformation/TransformationPerspective";
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
 * Section Sequence & Locked Color Rhythm:
 * 01. Hero → #F5F7F6 (Clean core light surface)
 * 02. The Business Challenge → #EEF1F0 (Alternate light)
 * 03. Our Perspective → #F5F7F6 (Core light)
 * 04. Where AI Creates Value → #EEF1F0 (Alternate light)
 * 05. What Transformation Can Include → #111312 (DARK GRAPHITE visual anchor)
 * 06. Our Approach / Framework → #F5F7F6 (Core light)
 * 07. Assessment to Implementation → #EEF1F0 (Alternate light progressive rail)
 * 08. Potential Outcomes → #F5F7F6 (Core light 2-column editorial rows)
 * 09. Final Flagship CTA → #F5F7F6 (Core light)
 * 10. Global Footer → #111312 (Dark graphite)
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
      {/* 01 — Top Sticky Enterprise Navigation with MegaMenu */}
      <Navbar onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* 01 — Flagship Hero: AI Business Transformation (#F5F7F6) */}
        <TransformationHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 02 — The Business Challenge (#EEF1F0) */}
        <TransformationChallenge />

        {/* 03 — Our Perspective (#F5F7F6) */}
        <TransformationPerspective />

        {/* 04 — Where AI Can Create Value (#EEF1F0) */}
        <TransformationValueDomains onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 05 — What Transformation Can Include (#111312 DARK GRAPHITE) */}
        <TransformationSystemsDark />

        {/* 06 — Our Approach / Framework (#F5F7F6) */}
        <TransformationFramework />

        {/* 07 — From Assessment to Implementation: Progressive Rail (#EEF1F0) */}
        <TransformationLifecycleRail />

        {/* 08 — Potential Outcomes: 2-Column Editorial Rows (#F5F7F6) */}
        <TransformationOutcomes />

        {/* 09 — Final Flagship CTA (#F5F7F6) */}
        <TransformationCta onOpenDiscoveryModal={handleOpenDiscovery} />
      </main>

      {/* 10 — Global Dark Graphite Footer (#111312) */}
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
