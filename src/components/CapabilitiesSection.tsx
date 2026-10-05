"use client";

import { 
  Cloud, 
  ArrowRight, 
  Database, 
  GitBranch, 
  ShieldCheck, 
  Code2, 
  LifeBuoy, 
  Layers,
  ArrowUpRight 
} from "lucide-react";

interface Capability {
  icon: any;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

const CAPABILITIES: Capability[] = [
  {
    icon: Cloud,
    title: "Cloud Consulting & Strategy",
    tagline: "Architecture • FinOps • Multi-Cloud",
    description: "Design resilient, scalable cloud foundations across AWS, Azure, and GCP with rigorous cost governance and Well-Architected frameworks.",
    tags: ["Multi-Cloud VPC", "AWS / Azure / GCP", "FinOps Optimization", "Well-Architected Review"]
  },
  {
    icon: Layers,
    title: "Cloud Migration & Modernization",
    tagline: "Monolith to Microservices • Zero Downtime",
    description: "Transition legacy systems to cloud-native architectures, containerizing workloads and modernizing relational databases with uninterrupted continuity.",
    tags: ["Legacy Re-Platforming", "Database Migration", "Containerization", "Zero-Downtime Cutover"]
  },
  {
    icon: Database,
    title: "Data Engineering & Platforms",
    tagline: "Lakehouse • Streaming • Semantic Layer",
    description: "Build high-throughput ingestion pipelines and governed analytics layers that fuel both operational reporting and real-time AI reasoning.",
    tags: ["Snowflake / Databricks", "Kafka & Flink Streaming", "dbt Data Modeling", "Vector DB & RAG"]
  },
  {
    icon: GitBranch,
    title: "DevOps & Platform Engineering",
    tagline: "Kubernetes • Terraform • SRE",
    description: "Empower developer velocity with automated CI/CD pipelines, Kubernetes container orchestration, and declarative Infrastructure as Code.",
    tags: ["Terraform / OpenTofu", "Kubernetes (EKS/GKE)", "Automated CI/CD", "SRE Observability"]
  },
  {
    icon: ShieldCheck,
    title: "Security & Governance",
    tagline: "Zero-Trust • SOC2 • AI Safety",
    description: "Implement defense-in-depth protection across every layer, including identity governance, automated compliance audits, and AI model guardrails.",
    tags: ["Zero-Trust Network", "SOC2 / ISO 27001", "mTLS Encryption", "Model Guardrails"]
  },
  {
    icon: Code2,
    title: "Software Development",
    tagline: "Enterprise Apps • Distributed Systems",
    description: "Engineer high-performance, mission-critical custom applications and robust API ecosystems tailored to your proprietary business logic.",
    tags: ["Next.js & TypeScript", "Distributed APIs", "Event-Driven Systems", "Bespoke Enterprise Tools"]
  },
  {
    icon: LifeBuoy,
    title: "Managed Cloud & AI Operations",
    tagline: "24/7 Monitoring • SLA Governance",
    description: "Proactive infrastructure and model management with guaranteed SLAs, continuous cost containment, and rapid incident remediation.",
    tags: ["24/7 Operations", "Continuous Evaluation", "Capacity Tuning", "Guaranteed 99.99% SLA"]
  }
];

interface CapabilitiesProps {
  onOpenDiscoveryModal: (interest?: string) => void;
}

export default function CapabilitiesSection({ onOpenDiscoveryModal }: CapabilitiesProps) {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#F5F3EE] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E4E0D7]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#6F7378]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
              <span>Full-Stack Enterprise Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#141414] leading-[1.05]">
              Cloud & Technology Capabilities
            </h2>
            <p className="text-base text-[#6F7378] leading-relaxed">
              We bridge high-level transformation strategy with deep engineering execution. From multi-cloud infrastructure to custom software and enterprise data platforms.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenDiscoveryModal("All Capabilities Consultation")}
              className="inline-flex items-center text-xs font-semibold text-[#141414] hover:text-black transition-colors font-mono uppercase tracking-wider"
            >
              <span>Consult with a Principal Architect</span>
            </button>
          </div>
        </div>

        {/* Clean Modular Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E4E0D7] bg-[#FCFBF9] p-7 shadow-xs hover:border-[#141414] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#ECE8E1]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5F3EE] text-[#141414] border border-[#E4E0D7] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F7378]">
                      CAP_0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#141414] mt-4 tracking-tight">
                    {cap.title}
                  </h3>

                  <div className="text-[11px] font-mono text-[#6F7378] mt-0.5">
                    {cap.tagline}
                  </div>

                  <p className="mt-3 text-sm text-[#6F7378] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE8E1]">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-[#6F7378] bg-[#F5F3EE] border border-[#E4E0D7] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onOpenDiscoveryModal(cap.title)}
                      className="inline-flex items-center gap-1 text-[#141414] font-medium hover:underline"
                    >
                      <span>Explore capability</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
