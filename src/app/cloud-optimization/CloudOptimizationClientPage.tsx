"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import OptimizationHero from "@/components/cloud-optimization/OptimizationHero";
import OptimizationChallenge from "@/components/cloud-optimization/OptimizationChallenge";
import OptimizationFocus from "@/components/cloud-optimization/OptimizationFocus";
import OptimizationCapabilities from "@/components/cloud-optimization/OptimizationCapabilities";
import OptimizationOutcomes from "@/components/cloud-optimization/OptimizationOutcomes";
import OptimizationEngagement from "@/components/cloud-optimization/OptimizationEngagement";
import OptimizationEcosystem from "@/components/cloud-optimization/OptimizationEcosystem";
import OptimizationRelated from "@/components/cloud-optimization/OptimizationRelated";
import OptimizationCta from "@/components/cloud-optimization/OptimizationCta";

/**
 * Aiveeno — Cloud Optimization (/cloud-optimization)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Core Optimization Capabilities — #111312 Dark Graphite (3 conceptual states + 4 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function CloudOptimizationClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] =
    useState("Cloud Optimization");
  const [sourceContext, setSourceContext] = useState(
    "Cloud Optimization Page"
  );

  const handleOpenDiscovery = (
    context: string = "Cloud Optimization Discussion"
  ) => {
    setDiscoveryInterest("Cloud Optimization");
    setSourceContext(context);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Cloud Optimization",
      source_context: context,
    });
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#111312]">
        <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

        <main className="flex-1">
          {/* Section 01: Hero (#111312 Dark Graphite) */}
          <OptimizationHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <OptimizationChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <OptimizationFocus />

          {/* Section 04: Core Optimization Capabilities (#111312 Dark Graphite) */}
          <OptimizationCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <OptimizationOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <OptimizationEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <OptimizationEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified evidence exists */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <OptimizationRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <OptimizationCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

