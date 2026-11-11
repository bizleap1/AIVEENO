"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import ConsultingHero from "@/components/cloud-consulting/ConsultingHero";
import ConsultingChallenge from "@/components/cloud-consulting/ConsultingChallenge";
import ConsultingFocus from "@/components/cloud-consulting/ConsultingFocus";
import ConsultingCapabilities from "@/components/cloud-consulting/ConsultingCapabilities";
import ConsultingOutcomes from "@/components/cloud-consulting/ConsultingOutcomes";
import ConsultingEngagement from "@/components/cloud-consulting/ConsultingEngagement";
import ConsultingEcosystem from "@/components/cloud-consulting/ConsultingEcosystem";
import ConsultingRelated from "@/components/cloud-consulting/ConsultingRelated";
import ConsultingCta from "@/components/cloud-consulting/ConsultingCta";

/**
 * Aiveeno — Cloud Consulting / Advisory (/cloud-consulting)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified case studies yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Consulting Capabilities — #111312 Dark Graphite (interactive editorial explorer)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function CloudConsultingClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Cloud Consulting");
  const [sourceContext, setSourceContext] = useState("Cloud Consulting / Advisory Page");

  const handleOpenDiscovery = (
    contextOrInterest: string = "Cloud Consulting / Advisory Strategy Discussion"
  ) => {
    setDiscoveryInterest("Cloud Consulting");
    setSourceContext(contextOrInterest);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "Cloud Consulting",
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
          <ConsultingHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <ConsultingChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <ConsultingFocus />

          {/* Section 04: Consulting Capabilities (#111312 Dark Graphite) */}
          <ConsultingCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <ConsultingOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <ConsultingEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <ConsultingEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified client outcomes exist */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <ConsultingRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <ConsultingCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

