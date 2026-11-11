"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import SecurityHero from "@/components/cloud-security/SecurityHero";
import SecurityChallenge from "@/components/cloud-security/SecurityChallenge";
import SecurityFocus from "@/components/cloud-security/SecurityFocus";
import SecurityCapabilities from "@/components/cloud-security/SecurityCapabilities";
import SecurityOutcomes from "@/components/cloud-security/SecurityOutcomes";
import SecurityEngagement from "@/components/cloud-security/SecurityEngagement";
import SecurityEcosystem from "@/components/cloud-security/SecurityEcosystem";
import SecurityRelated from "@/components/cloud-security/SecurityRelated";
import SecurityCta from "@/components/cloud-security/SecurityCta";

/**
 * Aiveeno — Cloud Security & Governance (/cloud-security-governance)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Core Security Capabilities — #111312 Dark Graphite (6 conceptual layers + 6 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function CloudSecurityClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Cloud Security");
  const [sourceContext, setSourceContext] = useState(
    "Cloud Security & Governance Page"
  );

  const handleOpenDiscovery = (
    contextOrInterest: string = "Cloud Security & Governance Discussion"
  ) => {
    setDiscoveryInterest("Cloud Security");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Cloud Security",
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
          <SecurityHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <SecurityChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <SecurityFocus />

          {/* Section 04: Core Security Capabilities (#111312 Dark Graphite) */}
          <SecurityCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <SecurityOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <SecurityEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <SecurityEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified client evidence exists */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <SecurityRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <SecurityCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

