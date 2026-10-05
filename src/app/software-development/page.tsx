import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { Code2, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Enterprise Custom Software Development | Aiveeno",
  description:
    "Design, develop, modernize, and maintain scalable custom applications, mission-critical internal tools, and distributed API platforms.",
};

export default function SoftwareDevelopmentPage() {
  const capabilities = [
    { title: "Custom Enterprise Applications", desc: "Building high-performance web applications and executive command centers using modern Next.js and TypeScript." },
    { title: "Distributed API Ecosystems", desc: "High-throughput GraphQL, REST, and gRPC microservices connecting backend engines to front-line interfaces." },
    { title: "Legacy System Wrappers", desc: "Architecting non-intrusive integration layers allowing legacy ERP and mainframe systems to interact with modern AI services." },
    { title: "Role-Specific Workspaces", desc: "Intuitive operational user interfaces designed around human-in-the-loop workflows and decision ergonomics." },
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
                <span>Software Engineering Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Custom Software Development.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Design, engineer, modernize, and maintain mission-critical custom applications and scalable software platforms tailored to your proprietary business logic.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Custom Software Development
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
                  eyebrow="Proprietary Advantage"
                  title="Software engineered for unique operational needs."
                  description="Off-the-shelf software forces organizations into rigid workflows. Proprietary software allows you to encode your core competitive differentiators."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We engineer modern, secure, and maintainable software systems from initial architectural blueprints through to production deployment. Whether modernizing a legacy operational portal or building bespoke workflow tooling for front-line teams, our engineers build durable digital assets.
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
                Discuss Custom Software Development
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
