"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CloudTechnologyHero from "@/components/cloud/CloudTechnologyHero";
import CloudPerspective from "@/components/cloud/CloudPerspective";
import CloudServicesDirectory from "@/components/cloud/CloudServicesDirectory";
import CloudFoundations from "@/components/cloud/CloudFoundations";
import CloudEngagement from "@/components/cloud/CloudEngagement";
import CloudOutcomes from "@/components/cloud/CloudOutcomes";
import CloudCta from "@/components/cloud/CloudCta";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";

export default function CloudTechnologyClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Cloud & Technology");
  const [sourceContext, setSourceContext] = useState("Cloud & Technology Overview Page");

  const handleOpenDiscovery = (
    contextOrInterest: string = "Cloud & Technology Strategy Consultation"
  ) => {
    setDiscoveryInterest("Cloud & Technology");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Cloud & Technology",
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
        {/* Global Navbar with transparent overlay on dark hero */}
        <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

        <main className="flex-1">
          {/* Section 01: Hero (#111312 Dark Graphite) — Preserved Unchanged */}
          <CloudTechnologyHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: Our Perspective (#F5F7F6 Light Editorial) */}
          <CloudPerspective />

          {/* Section 03: Cloud & Technology Services (#EEF1F0 Alternate Light) */}
          <CloudServicesDirectory />

          {/* Section 04: Connected Technology Foundations (#111312 Dark Graphite) */}
          <CloudFoundations />

          {/* Section 05: How We Engage (#F5F7F6 Light Editorial) */}
          <CloudEngagement />

          {/* Section 06: Business Outcomes (#EEF1F0 Alternate Light) */}
          <CloudOutcomes />

          {/* Section 07: Final CTA (#F5F7F6 Light Editorial) */}
          <CloudCta onOpenDiscoveryModal={handleOpenDiscovery} />
        </main>

        {/* Global Dark Graphite Footer — Preserved Unchanged */}
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
