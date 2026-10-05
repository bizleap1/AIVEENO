import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Workflow, Cpu, Layers } from "lucide-react";

export const metadata = {
  title: "AI Business Transformation | Aiveeno",
  description:
    "Transform how the organization operates, makes decisions and creates value with AI. Move beyond isolated experiments into a structured enterprise transformation program.",
};

export default function AIBusinessTransformationPage() {
  const possibleOutcomes = [
    {
      title: "Enhanced Operational Efficiency",
      description: "Potential to compress cycle times and eliminate repetitive manual data movement across departments.",
    },
    {
      title: "Organizational Scalability",
      description: "Ability to handle higher transaction and customer volume without linear headcount expansion.",
    },
    {
      title: "Accelerated Execution & Decisioning",
      description: "Faster information synthesis and automated exception handling for business-critical workflows.",
    },
    {
      title: "Governed Institutional Knowledge",
      description: "Instant access to verified corporate knowledge with complete source attribution and security.",
    },
    {
      title: "Elevated Stakeholder Experiences",
      description: "More responsive and context-aware interactions for enterprise customers, partners, and internal staff.",
    },
  ];

  const commercialPath = [
    { step: "01", name: "Discovery", desc: "Initial dialogue to understand operational friction and commercial priorities." },
    { step: "02", name: "Assessment", desc: "Structured one-week diagnostic of workflows, systems, and data readiness." },
    { step: "03", name: "Prioritization", desc: "Screening opportunities by commercial leverage and implementation feasibility." },
    { step: "04", name: "Solution Design", desc: "Architecting systems blueprints, security protocols, and data contracts." },
    { step: "05", name: "Build & Deploy", desc: "Engineering production-ready models, agents, and cloud integrations." },
    { step: "06", name: "Adoption", desc: "Embedding systems into daily operating rhythms with change enablement." },
    { step: "07", name: "Optimization", desc: "Continuous monitoring of model drift, inference costs, and throughput." },
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
                <span>Flagship Transformation Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Transform how your organization operates with AI.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Move beyond isolated AI experimentation toward a structured transformation program grounded in business value, workflow redesign, and resilient technology architecture.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTAButton href="/contact" variant="primary">
                  Book a Discovery Call
                </CTAButton>
                <CTAButton href="/ai-transformation-assessment" variant="secondary" icon="upRight">
                  Explore 1-Week Assessment
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        {/* The Business Challenge & Our Perspective */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="The Business Challenge"
                  title="Why tool-first AI adoption produces limited return."
                  description="Organizations frequently invest in disconnected generative AI tools, only to find that core operational efficiency and decision quality remain fundamentally unchanged."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <p>
                  Isolated AI deployments create excitement during prototype demonstrations, but consistently stall when introduced to the reality of enterprise environments. Disjointed tools do not integrate cleanly with ERP systems, lack access to governed corporate data, and create severe compliance, privacy, and shadow IT vulnerabilities.
                </p>
                <div className="p-6 rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] space-y-2">
                  <div className="font-semibold text-[#0B1020] text-[15px]">
                    The Aiveeno Perspective:
                  </div>
                  <p className="text-[13.5px] text-[#667085]">
                    True transformation does not start with a model or a software subscription. It starts with mapping the operational reality of how your business executes work, identifying where automation unlocks structural leverage, and engineering the complete system required to support it.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Commercial Path: Assessment to Implementation */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Commercial Lifecycle"
              title="From assessment to scalable implementation."
              description="A clear, progressive engagement model designed to maintain financial discipline and executive control at every stage."
            />

            <div className="mt-12 border border-[#D9DEE7] rounded-[8px] bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#D9DEE7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 overflow-hidden">
              {commercialPath.map((stage) => (
                <div key={stage.step} className="p-6 space-y-2 hover:bg-[#F7F8FA] transition-colors">
                  <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                    {stage.step}
                  </span>
                  <h4 className="text-[14px] font-heading font-semibold text-[#0B1020]">
                    {stage.name}
                  </h4>
                  <p className="text-[12px] text-[#667085] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Potential Outcomes (Framed ethically without guaranteed ROI claims) */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Anticipated Value"
              title="Potential operational outcomes."
              description="How structured enterprise transformation creates lasting business capability and competitive leverage."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {possibleOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3157FF]" />
                    <h3 className="text-base font-heading font-medium text-[#0B1020]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contextual CTA for AI Transformation */}
            <div className="mt-16 text-center">
              <CTAButton href="/contact" variant="primary">
                Discuss Your AI Transformation
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
