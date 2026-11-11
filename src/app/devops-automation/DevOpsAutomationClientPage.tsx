"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import DevOpsHero from "@/components/devops-automation/DevOpsHero";
import DevOpsChallenge from "@/components/devops-automation/DevOpsChallenge";
import DevOpsFocus from "@/components/devops-automation/DevOpsFocus";
import DevOpsCapabilities from "@/components/devops-automation/DevOpsCapabilities";
import DevOpsOutcomes from "@/components/devops-automation/DevOpsOutcomes";
import DevOpsEngagement from "@/components/devops-automation/DevOpsEngagement";
import DevOpsEcosystem from "@/components/devops-automation/DevOpsEcosystem";
import DevOpsRelated from "@/components/devops-automation/DevOpsRelated";
import DevOpsCta from "@/components/devops-automation/DevOpsCta";

/**
 * Aiveeno — DevOps & Automation (/devops-automation)
 *
 * Surface Rhythm (Section 08 Verified Proof omitted cleanly — no verified evidence yet):
 * 01 Hero — #111312 Dark Graphite
 * 02 The Challenge — #F5F7F6 Light Editorial
 * 03 What We Do — #EEF1F0 Alternate Light
 * 04 Core DevOps Capabilities — #111312 Dark Graphite (Code->Build->Test->Deploy->Operate + 6 open capabilities)
 * 05 Business Outcomes — #F5F7F6 Light Editorial
 * 06 How We Engage — #EEF1F0 Alternate Light
 * 07 Technology Ecosystem — #F5F7F6 Light Editorial
 * 09 Related Capabilities — #EEF1F0 Alternate Light
 * 10 Final CTA — #F5F7F6 Light Editorial
 * + Global Dark Graphite Footer — #111312
 */

export default function DevOpsAutomationClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] =
    useState("DevOps & Automation");
  const [sourceContext, setSourceContext] = useState(
    "DevOps & Automation Page"
  );

  const handleOpenDiscovery = (
    context: string = "DevOps & Automation Discussion"
  ) => {
    setDiscoveryInterest("DevOps & Automation");
    setSourceContext(context);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "DevOps & Automation",
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
          <DevOpsHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: The Challenge (#F5F7F6 Light Editorial) */}
          <DevOpsChallenge />

          {/* Section 03: What We Do (#EEF1F0 Alternate Light) */}
          <DevOpsFocus />

          {/* Section 04: Core DevOps Capabilities (#111312 Dark Graphite) */}
          <DevOpsCapabilities />

          {/* Section 05: Business Outcomes (#F5F7F6 Light Editorial) */}
          <DevOpsOutcomes />

          {/* Section 06: How We Engage (#EEF1F0 Alternate Light) */}
          <DevOpsEngagement />

          {/* Section 07: Technology Ecosystem (#F5F7F6 Light Editorial) */}
          <DevOpsEcosystem />

          {/* Section 08 (Verified Proof) omitted cleanly until verified evidence exists */}

          {/* Section 09: Related Capabilities (#EEF1F0 Alternate Light) */}
          <DevOpsRelated />

          {/* Section 10: Final CTA (#F5F7F6 Light Editorial) */}
          <DevOpsCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

