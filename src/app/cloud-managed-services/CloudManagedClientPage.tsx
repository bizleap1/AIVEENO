"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import ManagedHero from "@/components/cloud-managed/ManagedHero";
import ManagedChallenge from "@/components/cloud-managed/ManagedChallenge";
import ManagedFocus from "@/components/cloud-managed/ManagedFocus";
import ManagedCapabilities from "@/components/cloud-managed/ManagedCapabilities";
import ManagedOutcomes from "@/components/cloud-managed/ManagedOutcomes";
import ManagedEngagement from "@/components/cloud-managed/ManagedEngagement";
import ManagedEcosystem from "@/components/cloud-managed/ManagedEcosystem";
import ManagedRelated from "@/components/cloud-managed/ManagedRelated";
import ManagedCta from "@/components/cloud-managed/ManagedCta";

/**
 * Aiveeno — Cloud Managed Services (/cloud-managed-services)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Managed Service Capabilities — #111312 Dark Graphite (Central `CLOUD ENVIRONMENT` <-> 5 open disciplines)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light (2x2 Connected Operational Cycle)
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function CloudManagedClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Managed Cloud");
  const [sourceContext, setSourceContext] = useState(
    "Cloud Managed Services Page"
  );

  const handleOpenDiscovery = (
    contextOrInterest: string = "Cloud Managed Services Discussion"
  ) => {
    setDiscoveryInterest("Managed Cloud");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Managed Cloud",
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
        <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

        <main className="flex-1">
          {/* Section 01: Hero (#111312 Dark Graphite) */}
          <ManagedHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <ManagedChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <ManagedFocus />

          {/* Section 04: Managed Service Capabilities (#111312 Dark Graphite) */}
          <ManagedCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <ManagedOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <ManagedEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <ManagedEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified client outcomes exist */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <ManagedRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <ManagedCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

