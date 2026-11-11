"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TheShiftSection from "@/components/home/TheShiftSection";
import ApproachSection from "@/components/home/ApproachSection";
import OpportunityMapSection from "@/components/home/OpportunityMapSection";
import FrameworkPreviewSection from "@/components/home/FrameworkPreviewSection";
import AssessmentSection from "@/components/home/AssessmentSection";
import TransformationScopeSection from "@/components/home/TransformationScopeSection";
import CloudFoundationSection from "@/components/home/CloudFoundationSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";

export default function HomeClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Business Transformation");
  const [sourceContext, setSourceContext] = useState("Homepage Direct");

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
      <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#0D1117]">
        {/* 01 — Top Sticky Enterprise Navigation with Choreographed Load & MegaMenu */}
        <Navbar onOpenDiscoveryModal={handleOpenDiscovery} />

        <main className="flex-1">
          {/* 01 — Hero (Light #F5F7F6) with continuous transition into Section 02: The Shift (Dark #0B1218) */}
          <HeroSection onOpenDiscoveryModal={handleOpenDiscovery}>
            <TheShiftSection />
          </HeroSection>

          {/* 03 — Why our approach: AI starts with the business (Assess -> Design -> Implement) */}
          <ApproachSection />

          {/* 04 — Transformation Opportunity Map: 4x2 Matrix of 8 Functional Domains */}
          <OpportunityMapSection />

          {/* 04 — Framework Lifecycle: Signature Motion Lifecycle with Iterative Feedback Loop */}
          <FrameworkPreviewSection />

          {/* 05 — AI Transformation Assessment: 1-Week Executive Offering & Roadmap Document Reveal */}
          <AssessmentSection onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* 06 — AI Capabilities: Swiss Typographic Capability Index */}
          <TransformationScopeSection />

          {/* 07 — Cloud & Technology: Technology Foundation (Dark Graphite Pause) */}
          <CloudFoundationSection />

          {/* 08 — Final CTA: Executive Call to Action (Warm Off-White Contrast) */}
          <FinalCtaSection onOpenDiscoveryModal={handleOpenDiscovery} />
        </main>

        {/* Enterprise Footer */}
        <Footer />

        {/* Enterprise Discovery Call Booking Modal with Context Tracking */}
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

