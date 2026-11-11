"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
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
import { trackDiscoveryEvent } from "@/lib/analytics";

/**
 * Aiveeno — Flagship Service Page: AI Business Transformation (/ai-business-transformation)
 *
 * Locked 8-Section Visual Architecture:
 * 01. Hero -> #111312 (Dark Editorial Hero) / Surface #F5F7F6
 * 02. Business Challenge + Our Perspective -> #EBEFED
 * 03. Where AI Creates Value -> #F5F7F6
 * 04. What Transformation Can Include -> #111312
 * 05. Our Approach -> #EBEFED
 * 06. From Assessment to Implementation -> #F5F7F6
 * 07. Potential Outcomes -> #EBEFED
 * 08. Final Flagship CTA -> #F5F7F6
 * + Global Footer -> #111312
 */

export default function TransformationClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Business Transformation");
  const [sourceContext, setSourceContext] = useState("AI Business Transformation Flagship");

  const handleOpenDiscovery = (contextOrInterest: string = "AI Business Transformation") => {
    const resolvedInterest = contextOrInterest.includes("Assessment")
      ? "AI Transformation Assessment"
      : contextOrInterest.includes("Cloud")
        ? "Cloud Consulting"
        : "AI Business Transformation";

    setDiscoveryInterest(resolvedInterest);
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: resolvedInterest,
      source_context: contextOrInterest,
    });
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#0E1C2A]">
        <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

        <main className="flex-1">
          <TransformationHero onOpenDiscoveryModal={handleOpenDiscovery} />
          <TransformationChallenge />
          <TransformationValueDomains onOpenDiscoveryModal={handleOpenDiscovery} />
          <TransformationSystemsDark />
          <TransformationFramework />
          <TransformationLifecycleRail />
          <TransformationOutcomes />
          <TransformationCta onOpenDiscoveryModal={handleOpenDiscovery} />
        </main>

        <Footer />

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

