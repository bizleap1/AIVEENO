import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { homepageData } from "@/data/homepage";
import { Clock, Shield, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Transformation Assessment | Aiveeno",
  description:
    "Discover where AI can create the most value in your business. A focused, paid one-week engagement delivering an executive-ready opportunity report and transformation roadmap.",
};

export default function AssessmentPage() {
  const { assessment } = homepageData;

  const evaluationProcess = [
    { step: "01", name: "Qualification", desc: "Aligning on assessment scope, key departments, and preliminary business goals." },
    { step: "02", name: "Stakeholder Discovery", desc: "Targeted interviews with operational leads and technical owners to audit daily workflows." },
    { step: "03", name: "Technical Analysis", desc: "Examining data sources, schema readiness, API availability, and compliance constraints." },
    { step: "04", name: "Opportunity Mapping", desc: "Cataloging all potential AI and workflow automation use cases across functions." },
    { step: "05", name: "Feasibility Prioritization", desc: "Scoring opportunities by commercial leverage, capital cost, and technical feasibility." },
    { step: "06", name: "Executive Roadmap", desc: "Delivering the executive briefing, architectural blueprint, and phased implementation schedule." },
  ];

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
                <span>{assessment.positioningNote}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Discover where AI can create the most value in your business.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Before committing substantial capital to unverified technology initiatives, conduct a structured evaluation of workflows, systems, data foundations, and high-impact AI opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss the AI Transformation Assessment
                </CTAButton>
                <div className="flex items-center gap-2 text-[12px] font-mono text-[#667085]">
                  <Clock className="h-3.5 w-3.5 text-[#3157FF]" />
                  <span>{assessment.timing}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What We Examine (8 Critical Dimensions) */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Diagnostic Scope"
              title="What we examine during the assessment."
              description="A thorough diagnostic across operational procedures, technology debt, and data architectures."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assessment.whatWeExamine.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10.5px] font-mono text-[#3157FF] font-semibold">
                      DIMENSION // 0{idx + 1}
                    </span>
                    <h3 className="text-[15px] font-heading font-semibold text-[#0B1020] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] text-[#667085] leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6-Step Assessment Methodology */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Engagement Flow"
              title="How the assessment works."
              description="A disciplined one-week progression from initial stakeholder alignment to the delivery of an executive-ready transformation roadmap."
            />

            <div className="mt-12 border border-[#D9DEE7] rounded-[8px] bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#D9DEE7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 overflow-hidden">
              {evaluationProcess.map((step) => (
                <div key={step.step} className="p-6 space-y-2 hover:bg-[#F7F8FA] transition-colors">
                  <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                    {step.step}
                  </span>
                  <h4 className="text-[14px] font-heading font-semibold text-[#0B1020]">
                    {step.name}
                  </h4>
                  <p className="text-[12px] text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Deliverable Package & Contextual CTA */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-4xl mx-auto rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] p-8 sm:p-12 space-y-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#3157FF]" />
                <h3 className="text-2xl font-heading font-medium text-[#0B1020]">
                  Executive Deliverable Package
                </h3>
              </div>

              <p className="text-[14.5px] text-[#4B5563] leading-relaxed">
                {assessment.deliverable}
              </p>

              <div className="pt-4 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#667085]">
                  <Shield className="h-4 w-4 text-[#3157FF]" />
                  <span>Paid Diagnostic Engagement • Confidential NDA</span>
                </div>

                <CTAButton href="/contact" variant="primary">
                  Discuss the AI Transformation Assessment
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
