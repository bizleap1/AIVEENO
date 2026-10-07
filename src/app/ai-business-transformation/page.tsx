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
 * 01. Hero → #F5F7F6 (Primary light surface)
 * 02. Business Challenge + Our Perspective → #EBEFED (Solid deeper alternate light surface)
 * 03. Where AI Creates Value → #F5F7F6 (Primary light surface)
 * 04. What Transformation Can Include → #111312 (DARK GRAPHITE capability anchor)
 * 05. Our Approach / Framework → #EEF1F0 (Alternate light surface slide-up)
 * 06. From Assessment to Implementation → #F5F7F6 (Primary light surface rail)
 * 07. Potential Outcomes → #EEF1F0 (Alternate light surface)
 * 08. Final Flagship CTA → #F5F7F6 (Primary light surface)
 * + Global Footer → #111312 (Dark graphite)
 * 
 * Color Flow Rhythm:
 * Light (#F5F7F6) → Grey (#EBEFED) → Light (#F5F7F6) → DARK (#111312) → Grey (#EEF1F0) → Light (#F5F7F6) → Grey (#EEF1F0) → Light (#F5F7F6) → DARK footer (#111312)
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
      <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* 01 — Flagship Hero: AI Business Transformation (#111312 Dark Editorial) */}
        <TransformationHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 02 — Business Challenge + Our Perspective: Unified Editorial Narrative Zone (#EEF1F0) */}
        <TransformationChallenge />

        {/* 03 — Where AI Creates Value: Expandable Editorial Service Explorer (#F5F7F6) */}
        <TransformationValueDomains onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* 04 — What Transformation Can Include: Main Dark Graphite Capability Section (#111312) */}
        <TransformationSystemsDark />

        {/* 05 — Our Approach / Framework: Disciplined Transformation Lifecycle (#EEF1F0) */}
        <TransformationFramework />

        {/* 06 — From Assessment to Implementation: Progressive Commercial Rail (#F5F7F6) */}
        <TransformationLifecycleRail />

        {/* 07 — Potential Outcomes: 2-Column High-Impact Statements (#EEF1F0) */}
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
