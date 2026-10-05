"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const CLOUD_LAYERS = [
  {
    id: "cloud",
    title: "Cloud Infrastructure & Platforms",
    category: "CLOUD CORE",
    role: "Architecting high-throughput, sovereign compute foundations across AWS, Azure, and Google Cloud with optimized GPU and CPU utilization.",
    capabilities: ["Multi-Cloud Architecture", "GPU Cluster Orchestration", "FinOps Compute Governance"],
    link: "/cloud-consulting",
  },
  {
    id: "data",
    title: "Modern Data Fabric & Warehouses",
    category: "DATA BACKBONE",
    role: "Unifying distributed enterprise data into low-latency lakehouses, vector indexes, and strictly governed real-time pipelines.",
    capabilities: ["Semantic Vector Stores", "Real-Time Streaming", "Automated Schema Governance"],
    link: "/data-engineering",
  },
  {
    id: "devops",
    title: "DevOps & Production Infrastructure",
    category: "DEVOPS & SRE",
    role: "Engineering automated deployment pipelines, Kubernetes cluster management, and continuous reliability for mission-critical operations.",
    capabilities: ["Automated CI/CD", "Kubernetes Management", "Zero-Downtime Releases"],
    link: "/devops-automation",
  },
  {
    id: "security",
    title: "Zero-Trust Security & Sovereign Enclaves",
    category: "CYBER DEFENSE",
    role: "Hardening perimeter boundaries, model prompt firewalls, and data enclave encryption to ensure zero leakage of proprietary IP.",
    capabilities: ["Model Prompt Guardrails", "Zero-Trust Enclaves", "Continuous Audit Compliance"],
    link: "/cloud-security-governance",
  },
  {
    id: "software",
    title: "Custom Software & API Fabrics",
    category: "SOFTWARE ENGINEERING",
    role: "Building robust, scalable applications and resilient integration fabrics that connect legacy records to intelligent automation.",
    capabilities: ["API Gateway Orchestration", "Legacy System Connectors", "Event-Driven Microservices"],
    link: "/software-development",
  },
];

export default function CloudFoundationSection() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section id="cloud-technology" className="relative w-full bg-[#F5F7F6] border-b border-[#D9DDDA] py-20 sm:py-28 select-none overflow-hidden">
      
      {/* Fine architectural grid background: 32px intervals with subtle line reveal */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(to right, #D9DDDA 1px, transparent 1px), linear-gradient(to bottom, #D9DDDA 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <Container>
        {/* Asymmetric Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column (5 cols): Positioning & Thesis (Supportive capability) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-[11.5px] font-mono tracking-[0.16em] uppercase text-[#6F7479]">
                <span className="w-3.5 h-px bg-[#D4A64A]" />
                <span>08 // Cloud & Technology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-medium text-[#0D1117] tracking-[-0.035em] leading-[1.04]">
                AI systems fail on brittle infrastructure.
              </h2>

              <p className="text-[17px] text-[#6F7479] leading-[1.55] font-normal">
                Enterprise AI requires resilient cloud architecture, verified data pipelines, DevOps automation, and zero-trust security. Cloud is our technical foundation, ensuring business transformation operates reliably at scale.
              </p>

              <div className="pt-2">
                <Link
                  href="/cloud-technology"
                  className="group inline-flex items-center text-[14px] font-sans font-medium text-[#0D1117] hover:text-[#D4A64A] transition-colors border-b border-[#D4A64A] pb-1"
                >
                  <span>Explore Cloud Architecture</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-[#D9DDDA] text-[12px] font-mono text-[#6F7479] space-y-1">
                <div>CLOUD • DATA • DEVOPS • SECURITY • SOFTWARE</div>
                <div className="text-[#0D1117]">ENTERPRISE RESILIENCE FOR PRODUCTION WORKLOADS</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 cols): 5 Stacked Technical Infrastructure Layers */}
          <div className="lg:col-span-7 border-t border-b border-[#D9DDDA] divide-y divide-[#D9DDDA]">
            {CLOUD_LAYERS.map((layer, idx) => {
              const isActive = activeLayer === idx;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0.7 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onMouseEnter={() => setActiveLayer(idx)}
                  className={cn(
                    "py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 space-y-3 transition-all duration-[240ms] ease-out cursor-pointer group relative",
                    isActive ? "bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]" : "hover:bg-[#FFFFFF]/60"
                  )}
                >
                  {/* Left subtle vertical gold edge highlight */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4A64A] transition-opacity duration-[240ms]",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />

                  <div className="flex items-baseline justify-between">
                    <span className={cn(
                      "text-[11px] font-mono uppercase tracking-wider transition-colors duration-[240ms]",
                      isActive ? "text-[#D4A64A] font-medium" : "text-[#6F7479]"
                    )}>
                      LAYER 0{idx + 1} // {layer.category}
                    </span>
                    <Link
                      href={layer.link}
                      className="text-[12px] font-sans font-medium text-[#6F7479] hover:text-[#0D1117] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3 w-3 text-[#D4A64A]" />
                    </Link>
                  </div>

                  <h3 className={cn(
                    "text-xl sm:text-2xl font-sans font-medium tracking-tight transition-colors duration-[240ms]",
                    isActive ? "text-[#0D1117]" : "text-[#1A1F26]"
                  )}>
                    {layer.title}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-[#6F7479] transition-colors duration-[240ms]">
                    {layer.role}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {layer.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className={cn(
                          "text-[11px] font-mono px-2.5 py-0.5 rounded-[2px] border transition-colors duration-[240ms]",
                          isActive 
                            ? "text-[#0D1117] bg-[#F5F7F6] border-[#D9DDDA]" 
                            : "text-[#6F7479] bg-[#FFFFFF] border-[#D9DDDA]/80"
                        )}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
