import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { LifeBuoy, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cloud Managed Services | Aiveeno",
  description:
    "Ongoing enterprise cloud management focused on continuous availability, security enforcement, performance tuning, and operational efficiency.",
};

export default function CloudManagedServicesPage() {
  const capabilities = [
    { title: "24/7 SRE Monitoring", desc: "Automated telemetry, proactive anomaly alerting, and deterministic runbook execution." },
    { title: "Security & Patch Governance", desc: "Continuous vulnerability scanning, automated zero-day patching, and policy auditing." },
    { title: "Capacity & Auto-Scaling", desc: "Dynamic resource provisioning adapting to real-time workload fluctuations without over-provisioning." },
    { title: "Backup & Disaster Recovery", desc: "Multi-region replication, continuous recovery point verification, and automated failover drills." },
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
                <span>Managed Operations Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Cloud Managed Services.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Ongoing management of enterprise cloud environments focused on continuous availability, proactive security enforcement, performance tuning, and operational efficiency.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Managed Cloud Services
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
                  eyebrow="Operational Reality"
                  title="Maintaining resilience around the clock."
                  description="Complex multi-cloud environments require dedicated site reliability engineering and automated governance to avoid expensive outages."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We manage mission-critical cloud and data infrastructure so internal engineering teams can focus on strategic product development. From automated alert triage to multi-region disaster recovery, our team ensures continuous operational uptime.
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
                Discuss Managed Cloud Services
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
