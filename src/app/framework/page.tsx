import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { homepageData } from "@/data/homepage";
import { ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "AI Transformation Framework & Consulting Methodology | Aiveeno",
  description:
    "A proprietary, disciplined transformation lifecycle connecting business reality to engineering execution, continuous adoption, and ongoing refinement.",
};

export default function FrameworkPage() {
  const { stages } = homepageData.frameworkPreview;

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
                <span>Proprietary Methodology</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Our AI Transformation Framework.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Start with business strategy and operational reality. Identify where automation creates defensible value. Engineer production-grade systems. Enable organizational adoption. Continuously refine.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Book a Discovery Call
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        {/* Detailed 6-Stage Deep-Dive */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Lifecycle Architecture"
              title="A structured, iterative consulting lifecycle."
              description="Each stage produces tangible deliverables, resolves technical risk, and moves your organization toward compounding operational capability."
            />

            <div className="mt-14 space-y-8">
              {stages.map((stage) => (
                <div
                  key={stage.stageNumber}
                  className="rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] p-8 sm:p-10 shadow-xs"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#D9DEE7] gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-base font-semibold px-2.5 py-1 rounded bg-[#3157FF] text-white">
                        {stage.stageNumber}
                      </span>
                      <h2 className="text-2xl font-heading font-medium text-[#0B1020]">
                        {stage.title}
                      </h2>
                    </div>

                    <div className="text-[12px] font-mono text-[#3157FF]">
                      Principle: {stage.principle}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[13px]">
                    <div className="space-y-1.5">
                      <div className="font-mono uppercase text-[11px] text-[#667085] font-semibold">
                        What Happens:
                      </div>
                      <p className="text-[#4B5563] leading-relaxed">
                        {stage.whatHappens}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-mono uppercase text-[11px] text-[#667085] font-semibold">
                        Why It Matters:
                      </div>
                      <p className="text-[#4B5563] leading-relaxed">
                        {stage.whyItMatters}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-mono uppercase text-[11px] text-[#667085] font-semibold">
                        What Is Produced:
                      </div>
                      <p className="text-[#111827] font-medium leading-relaxed">
                        {stage.whatIsProduced}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-mono uppercase text-[11px] text-[#667085] font-semibold">
                        Advancement Gate:
                      </div>
                      <p className="text-[#3157FF] font-medium leading-relaxed">
                        {stage.advancement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Continuous Transformation Principle */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EEFF] text-[#3157FF]">
                <RefreshCw className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-heading font-medium text-[#0B1020]">
                Transformation is continuous, not a one-time project.
              </h2>

              <p className="text-[15px] text-[#667085] leading-relaxed">
                As models advance, business conditions shift, and new data streams become accessible, the architecture evolves. We design systems with closed-loop telemetry and modular interfaces so your organization adapts seamlessly.
              </p>

              <div className="pt-4">
                <CTAButton href="/contact" variant="primary">
                  Book a Discovery Call
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
