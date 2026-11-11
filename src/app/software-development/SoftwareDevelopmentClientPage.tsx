"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import SoftwareHero from "@/components/software-development/SoftwareHero";
import SoftwareChallenge from "@/components/software-development/SoftwareChallenge";
import SoftwareFocus from "@/components/software-development/SoftwareFocus";
import SoftwareCapabilities from "@/components/software-development/SoftwareCapabilities";
import SoftwareOutcomes from "@/components/software-development/SoftwareOutcomes";
import SoftwareEngagement from "@/components/software-development/SoftwareEngagement";
import SoftwareEcosystem from "@/components/software-development/SoftwareEcosystem";
import SoftwareRelated from "@/components/software-development/SoftwareRelated";
import SoftwareCta from "@/components/software-development/SoftwareCta";

/**
 * Aiveeno — Software Development (/software-development)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light (4 editorial pillars: DESIGN, DEVELOP, MODERNIZE, MAINTAIN)
 * 04 Development Capabilities — #111312 Dark Graphite (Layered software architecture + 6 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function SoftwareDevelopmentClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState(
    "Software Development"
  );
  const [sourceContext, setSourceContext] = useState(
    "Software Development Page"
  );

  const handleOpenDiscovery = (
    context: string = "Software Development Discussion"
  ) => {
    setDiscoveryInterest("Software Development");
    setSourceContext(context);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Software Development",
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
          <SoftwareHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <SoftwareChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <SoftwareFocus />

          {/* Section 04: Development Capabilities (#111312 Dark Graphite) */}
          <SoftwareCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <SoftwareOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <SoftwareEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <SoftwareEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified evidence exists */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <SoftwareRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <SoftwareCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

