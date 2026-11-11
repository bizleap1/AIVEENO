"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import DataHero from "@/components/data-engineering/DataHero";
import DataChallenge from "@/components/data-engineering/DataChallenge";
import DataFocus from "@/components/data-engineering/DataFocus";
import DataCapabilities from "@/components/data-engineering/DataCapabilities";
import DataOutcomes from "@/components/data-engineering/DataOutcomes";
import DataEngagement from "@/components/data-engineering/DataEngagement";
import DataEcosystem from "@/components/data-engineering/DataEcosystem";
import DataRelated from "@/components/data-engineering/DataRelated";
import DataCta from "@/components/data-engineering/DataCta";

/**
 * Aiveeno — Data Engineering (/data-engineering)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Core Capabilities — #111312 Dark Graphite (4-zone architecture exhibit + 6 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 Engagement Approach — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function DataEngineeringClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] =
    useState("Data Engineering");
  const [sourceContext, setSourceContext] = useState("Data Engineering Page");

  const handleOpenDiscovery = (
    context: string = "Data Engineering Discussion"
  ) => {
    setDiscoveryInterest("Data Engineering");
    setSourceContext(context);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Data Engineering",
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
          <DataHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <DataChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <DataFocus />

          {/* Section 04: Data Engineering Capabilities (#111312 Dark Graphite) */}
          <DataCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <DataOutcomes />

          {/* Section 06: Engagement Approach (#EEF1F0 Alternate Light) */}
          <DataEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <DataEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified evidence exists */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <DataRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <DataCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

