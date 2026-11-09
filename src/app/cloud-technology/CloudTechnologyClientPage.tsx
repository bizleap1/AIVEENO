"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CloudTechnologyHero from "@/components/cloud/CloudTechnologyHero";
import DiscoveryModal from "@/components/DiscoveryModal";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import Link from "next/link";
import { navigationData } from "@/data/navigation";

export default function CloudTechnologyClientPage() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInterest, setDiscoveryInterest] = useState("Cloud & Technology");
  const [sourceContext, setSourceContext] = useState("Cloud & Technology Overview Page");

  const cloudServices = navigationData.cloudTechnology.items;

  const handleOpenDiscovery = (contextOrInterest: string = "Cloud & Technology Strategy Consultation") => {
    setDiscoveryInterest("Cloud & Technology");
    setSourceContext(contextOrInterest);
    setIsDiscoveryOpen(true);
  };

  const handleCloseDiscovery = () => {
    setIsDiscoveryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      {/* Global Navbar with transparent overlay on dark hero */}
      <Navbar transparentOnHero onOpenDiscoveryModal={handleOpenDiscovery} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION (#111312 Dark Graphite Editorial Hero)                       */}
        {/* ========================================================================= */}
        <CloudTechnologyHero onOpenDiscoveryModal={handleOpenDiscovery} />

        {/* ========================================================================= */}
        {/* The Strategic Positioning of Cloud in Transformation                      */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="Architectural Perspective"
                  title="Why AI transformation demands modern cloud engineering."
                  description="High-performance models and agentic workflows require elastic compute, low-latency data pipelines, zero-trust network boundaries, and rigorous cost governance."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <p>
                  Deploying advanced intelligence onto fragile legacy servers or unmonitored cloud tenancies introduces unacceptable latency, unpredictable cloud spend, and severe data exposure risks.
                </p>
                <p>
                  Our technology consulting practice builds and modernizes the complete supporting foundation: automated Infrastructure as Code, Kubernetes microservices, enterprise lakehouses, and continuous deployment pipelines that enable your organization to scale with confidence.
                </p>

                <div className="p-6 rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] space-y-2">
                  <div className="font-semibold text-[#0B1020] text-[14px]">
                    What Enterprise Buyers Purchase:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[12px] font-mono text-[#111827]">
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">Modernization</span>
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">Resilience</span>
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">Security</span>
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">Scalability</span>
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">FinOps Control</span>
                    <span className="p-2 bg-white rounded border border-[#D9DEE7]">Velocity</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* 8 Cloud & Technology Offerings                                            */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Specialized Capabilities"
              title="Cloud & Technology Service Domains."
              description="Explore our independent technology practices designed to deliver architecture, migration, data engineering, and software modernization."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudServices.map((service, idx) => (
                <div
                  key={service.href}
                  className="rounded-[8px] border border-[#D9DEE7] bg-white p-7 shadow-xs hover:border-[#3157FF] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-mono text-[11px] text-[#3157FF] font-semibold">
                      PRACTICE // 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-heading font-medium text-[#0B1020] mt-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] text-[#667085] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D9DEE7]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[13px] font-medium text-[#3157FF] hover:underline"
                    >
                      <span>Explore service</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      {/* Global Dark Graphite Footer */}
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

