import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { homepageData } from "@/data/homepage";
import { ArrowRight, Bot, GitBranch, Database, Shield, Workflow } from "lucide-react";

export const metadata = {
  title: "AI Solutions & Enterprise Use Cases | Aiveeno",
  description:
    "Production-grade AI systems, intelligent workflow automation, enterprise agent mesh, and private knowledge systems engineered for complex operating environments.",
};

export default function AISolutionsPage() {
  const { capabilities } = homepageData.whatTransformationIncludes;

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
                <span>Production Systems & Applications</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Enterprise AI Solutions & Systems.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Engineered to execute inside your private cloud or on-premises environment. We build production systems that integrate seamlessly with ERP, CRM, and core operational data.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Your AI Architecture
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        {/* Detailed Solutions Grid */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Architectural Categories"
              title="Systems engineered for operational reality."
              description="Each capability is custom-architected to address specific enterprise workflows while complying strictly with corporate security and privacy boundaries."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((solution, idx) => (
                <div
                  key={idx}
                  className="rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] p-7 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#D9DEE7]">
                      <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#3157FF] font-semibold">
                        {solution.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#667085]">
                        SYS_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-medium text-[#0B1020] mt-4 tracking-tight">
                      {solution.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] text-[#667085] leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D9DEE7]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#667085] font-semibold mb-2">
                      Typical Workloads:
                    </div>
                    <ul className="space-y-1 text-[12px] text-[#111827]">
                      {solution.typicalWorkloads.map((tw, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#3157FF]" />
                          <span>{tw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <CTAButton href="/contact" variant="primary">
                Book a Discovery Call
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
