import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { Layers, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cloud Migration & Modernization | Aiveeno",
  description:
    "Move and modernize legacy workloads with rigorous attention to architecture, business continuity, security, performance, and cost.",
};

export default function CloudMigrationPage() {
  const capabilities = [
    { title: "Application Re-Platforming", desc: "Containerizing monolithic applications into scalable, cloud-native microservices." },
    { title: "Database Migration", desc: "Zero-downtime cutover from proprietary legacy databases to modern managed cloud engines." },
    { title: "Zero-Downtime Migration", desc: "Blue/green and canary deployment architectures ensuring zero disruption to live operations." },
    { title: "Legacy Code Modernization", desc: "Refactoring legacy software into modular APIs and event-driven architectures." },
    { title: "Performance Benchmarking", desc: "Automated load and latency testing ensuring post-migration performance meets enterprise SLAs." },
    { title: "Security Boundary Hardening", desc: "Re-architecting network security, IAM policies, and encryption during transit and rest." },
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
                <span>Modernization Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Cloud Migration & Modernization.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Move and modernize complex workloads with meticulous attention to architecture, operational continuity, security, performance, and cost containment.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Your Cloud Migration
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
                  eyebrow="The Challenge"
                  title="Legacy fragility and migration risk."
                  description="Organizations often postpone modernization due to fears of operational downtime, data corruption, and unforeseen budget overruns."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We engineer disciplined migration pipelines that modernize legacy software, relational databases, and monolithic services into scalable cloud environments. Through automated canary cutovers, comprehensive schema validation, and rollback harnesses, we ensure zero operational disruption.
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
                Discuss Your Cloud Migration
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
