import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { Database, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Data Engineering & Platforms | Aiveeno",
  description:
    "Build reliable high-throughput data pipelines, governed lakehouses, streaming architectures, and vector repositories supporting enterprise analytics and AI.",
};

export default function DataEngineeringPage() {
  const capabilities = [
    { title: "Modern Lakehouse Architecture", desc: "Unified analytics storage across Snowflake, Databricks, BigQuery, and S3-based open table formats (Iceberg, Delta)." },
    { title: "Streaming & Event Pipelines", desc: "Real-time event processing with Apache Kafka, Flink, and cloud pub/sub backbones." },
    { title: "Automated Data Quality & Contracts", desc: "Continuous schema validation, drift detection, and automated data freshness alerts." },
    { title: "Vector & Semantic Data Foundations", desc: "High-dimensional vector indexing, hybrid search architectures, and semantic knowledge graphs for AI." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <section className="pb-20 border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
                <span>Data Engineering Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Enterprise Data Engineering.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Build reliable data pipelines, automated ETL/ELT workflows, governed lakehouses, and vector data foundations supporting both operational analytics and real-time AI reasoning.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Your Data Foundation
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="The Data Foundation"
                  title="No reliable AI without clean, governed data."
                  description="AI systems produce hallucinations and unpredictable outcomes when built on fragmented, out-of-date, or ungoverned data silos."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We engineer end-to-end data architectures that ingest, cleanse, transform, and index unstructured corporate assets and relational transactions into a queryable semantic fabric. With automated schema contracts and lineage tracking, your data becomes an authoritative source of truth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {capabilities.map((c, i) => (
                    <div key={i} className="p-4 rounded-[6px] border border-[#D9DEE7] bg-[#F7F8FA]">
                      <div className="font-semibold text-[#0B1020] text-[13.5px]">{c.title}</div>
                      <div className="text-[12px] text-[#667085] mt-1">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <CTAButton href="/contact" variant="primary">
                Discuss Your Data Foundation
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
