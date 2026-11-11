"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import MigrationHero from "@/components/cloud-migration/MigrationHero";
import MigrationChallenge from "@/components/cloud-migration/MigrationChallenge";
import MigrationFocus from "@/components/cloud-migration/MigrationFocus";
import MigrationCapabilities from "@/components/cloud-migration/MigrationCapabilities";
import MigrationOutcomes from "@/components/cloud-migration/MigrationOutcomes";
import MigrationEngagement from "@/components/cloud-migration/MigrationEngagement";
import MigrationEcosystem from "@/components/cloud-migration/MigrationEcosystem";
import MigrationRelated from "@/components/cloud-migration/MigrationRelated";
import MigrationCta from "@/components/cloud-migration/MigrationCta";

/**
 * Aiveeno — Cloud Migration & Modernization (/cloud-migration-modernization)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified case studies yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Migration & Modernization Capabilities — #111312 Dark Graphite (3-zone exhibit + 6 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function CloudMigrationClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Cloud Migration");
  const [sourceContext, setSourceContext] = useState(
    "Cloud Migration & Modernization Page"
  );

  const handleOpenDiscovery = (
    contextOrInterest: string = "Cloud Migration & Modernization Discussion"
  ) => {
    setDiscoveryInterest("Cloud Migration");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Cloud Migration",
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
          <MigrationHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <MigrationChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <MigrationFocus />

          {/* Section 04: Migration & Modernization Capabilities (#111312 Dark Graphite) */}
          <MigrationCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <MigrationOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <MigrationEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <MigrationEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified client outcomes exist */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <MigrationRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <MigrationCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

