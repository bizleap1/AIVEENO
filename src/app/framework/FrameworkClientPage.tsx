"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FrameworkHero from "@/components/framework/FrameworkHero";
import FrameworkPrinciple from "@/components/framework/FrameworkPrinciple";
import FrameworkLifecycle from "@/components/framework/FrameworkLifecycle";
import FrameworkDetails from "@/components/framework/FrameworkDetails";
import FrameworkContinuous from "@/components/framework/FrameworkContinuous";
import FrameworkCta from "@/components/framework/FrameworkCta";
import DiscoveryModal from "@/components/DiscoveryModal";

/**
 * Aiveeno — AI Transformation Framework Page (/framework/)
 * Source of Truth: Enterprise_AI_Cloud_Website_Developer_Brief(1).pdf
 * 
 * Strategic Role:
 * Presents Aiveeno's proprietary consulting methodology as an interconnected,
 * iterative transformation lifecycle grounded in business reality.
 * 
 * Locked 6-Section Visual Architecture (Accenture-Inspired Editorial Experience):
 * 01. Hero → #111312 (Dark Editorial Hero with Bespoke Lifecycle Line-Art)
 * 02. Core Principle → #EBEFED (Alternate Light Surface: Business reality comes first)
 * 03. Connected Lifecycle → #111312 (Main Visual Section: Full-width connected rail)
 * 04. Inside the Framework → #F5F7F6 (Primary Light Surface: 4-facet Stage Explorer)
 * 05. Continuous Transformation → #EEF1F0 (Alternate Light Surface: Transformation doesn't end at launch)
 * 06. Final CTA → #F5F7F6 (Primary Light Conversion Surface: Discuss your transformation priorities)
 * + Global Dark Footer → #111312
 */

export default function FrameworkClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("AI Transformation Framework");
  const [sourceContext, setSourceContext] = useState("AI Transformation Framework Page");

  const handleOpenDiscovery = (contextOrInterest: string = "AI Transformation Framework") => {
    setDiscoveryInterest("AI Transformation Framework");
    setSourceContext(contextOrInterest);
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#111312]">
      {/* Global Enterprise Navbar with transparent overlay on dark hero */}
      <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 01 — ARCHITECTURAL HERO SECTION (#111312 Dark Graphite Editorial)          */}
        {/* ========================================================================= */}
        <FrameworkHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* ========================================================================= */}
        {/* 02 — CORE PRINCIPLE (#EBEFED Alternate Light Surface)                     */}
        {/* ========================================================================= */}
        <FrameworkPrinciple />

        {/* ========================================================================= */}
        {/* 03 — THE CONNECTED LIFECYCLE (#111312 Main Visual Rail Section)           */}
        {/* ========================================================================= */}
        <FrameworkLifecycle />

        {/* ========================================================================= */}
        {/* 04 — INSIDE THE FRAMEWORK (#F5F7F6 4-Facet Stage Detail Explorer)         */}
        {/* ========================================================================= */}
        <FrameworkDetails />

        {/* ========================================================================= */}
        {/* 05 — CONTINUOUS TRANSFORMATION (#EEF1F0 Typography-Led Iterative Section) */}
        {/* ========================================================================= */}
        <FrameworkContinuous />

        {/* ========================================================================= */}
        {/* 06 — FINAL CTA (#F5F7F6 Asymmetric Editorial Conversion Split)            */}
        {/* ========================================================================= */}
        <FrameworkCta onOpenDiscoveryModal={handleOpenDiscovery} />
      </main>

      {/* Global Dark Graphite Footer (#111312) */}
      <Footer />

      {/* Enterprise Discovery Call Booking Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={handleCloseDiscovery}
        initialInterest={discoveryInterest}
        sourceContext={sourceContext}
      />
    </div>
  );
}
