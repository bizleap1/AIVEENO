"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import DiscoveryModal from "@/components/DiscoveryModal";
import { trackDiscoveryEvent } from "@/lib/analytics";
import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutPerspective from "@/components/about/AboutPerspective";
import AboutExpertise from "@/components/about/AboutExpertise";
import AboutEngagement from "@/components/about/AboutEngagement";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutCta from "@/components/about/AboutCta";

/**
 * Aiveeno — About Aiveeno (/about)
 *
 * Seven Focused Editorial Identity Sections (Verified Credibility omitted cleanly):
 * 01 Hero — #111312 Dark Graphite (Typography-first asymmetric composition)
 * 02 Who We Are — #F5F7F6 Light Editorial
 * 03 Our Perspective — #EEF1F0 Alternate Light (Full-width statement + offset narrative)
 * 04 Our Expertise — #111312 Dark Graphite (AI Transformation & Cloud & Technology)
 * 05 How We Engage — #F5F7F6 Light Editorial (Concise 5-stage commercial journey + qualifier)
 * 06 What Guides Our Work — #EEF1F0 Alternate Light (Three descriptive working principles)
 * 07 Final CTA — #F5F7F6 Light Editorial -> Global Dark Graphite Footer (#111312)
 */

export default function AboutClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState(
    "AI Business Transformation"
  );
  const [sourceContext, setSourceContext] = useState("About Aiveeno Page");

  const handleOpenDiscovery = (context: string = "About Aiveeno Discussion") => {
    setDiscoveryInterest("AI Business Transformation");
    setSourceContext(context);
    trackDiscoveryEvent({
      event: "discovery_cta_click",
      area_of_interest: "AI Business Transformation",
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
          <AboutHero onOpenDiscoveryModal={handleOpenDiscovery} />

          {/* Section 02: Who We Are (#F5F7F6 Light Editorial) */}
          <AboutWhoWeAre />

          {/* Section 03: Our Perspective (#EEF1F0 Alternate Light) */}
          <AboutPerspective />

          {/* Section 04: Our Expertise (#111312 Dark Graphite) */}
          <AboutExpertise />

          {/* Section 05: How We Work (#F5F7F6 Light Editorial) */}
          <AboutEngagement />

          {/* Section 06: What Guides Our Work (#EEF1F0 Alternate Light) */}
          <AboutPrinciples />

          {/* Verified Credibility / Team / History omitted cleanly until approved content exists */}

          {/* Section 07: Final CTA (#F5F7F6 Light Editorial) */}
          <AboutCta onOpenDiscoveryModal={handleOpenDiscovery} />
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

