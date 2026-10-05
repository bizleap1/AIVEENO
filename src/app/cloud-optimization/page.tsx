import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { TrendingUp, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cloud & FinOps Optimization | Aiveeno",
  description:
    "Improve cloud architecture, resource utilization, workload latency, and FinOps cost efficiency across multi-cloud enterprise footprints.",
};

export default function CloudOptimizationPage() {
  const capabilities = [
    { title: "FinOps Cost Governance", desc: "Automated billing analytics, rightsizing recommendations, and programmatic budget alerts." },
    { title: "Inference & GPU Optimization", desc: "Batch inference scheduling, model quantization, and spot instance architectures reducing AI compute costs." },
    { title: "Storage Tiering & Lifecycle", desc: "Automating archival pipelines from high-speed flash to cold storage based on access telemetry." },
    { title: "Network Egress Reduction", desc: "Optimizing multi-region data routing, edge caching, and private peering to contain transit fees." },
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
                <span>FinOps & Optimization Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Cloud & FinOps Optimization.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Improve architecture, resource utilization, workload latency, and financial efficiency across your multi-cloud and AI infrastructure footprint.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Cloud Optimization
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
                  eyebrow="Financial Discipline"
                  title="Eliminating waste without degrading performance."
                  description="As enterprise workloads expand, unmonitored compute resources and volatile AI inference requests create substantial capital leakage."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We conduct systematic FinOps audits to identify over-provisioned nodes, unattached volumes, redundant data transfers, and suboptimal inference routines. We then implement automated policies, spot cluster strategies, and reserved instance allocations to ensure maximum financial return.
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
                Discuss Cloud Optimization
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
