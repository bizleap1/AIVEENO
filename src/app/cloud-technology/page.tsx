import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";
import { Cloud, Database, GitBranch, ShieldCheck, Code2, ArrowUpRight } from "lucide-react";
import { navigationData } from "@/data/navigation";

export const metadata = {
  title: "Cloud & Technology Foundations | Aiveeno",
  description:
    "Enterprise infrastructure, data architectures, DevOps, security, and software foundations engineered to support scalable AI business transformation.",
};

export default function CloudTechnologyPage() {
  const cloudServices = navigationData.cloudTechnology.items;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="pb-20 border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
                <span>Foundational Technology Capability</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Resilient technology foundations for transformation.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Cloud is not commodity hosting. We engineer modernization, resilience, security, scalability, and operational capability across AWS, Microsoft Azure, and Google Cloud to support mission-critical enterprise systems.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Your Cloud Strategy
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        {/* The Strategic Positioning of Cloud in Transformation */}
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

        {/* 8 Cloud & Technology Offerings */}
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

      <Footer />
    </div>
  );
}
