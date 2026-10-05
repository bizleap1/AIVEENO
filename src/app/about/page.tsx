import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckCircle2, Shield, Layers, Workflow, Cpu } from "lucide-react";

export const metadata = {
  title: "About Our Consulting Practice | Aiveeno",
  description:
    "Aiveeno is an enterprise technology transformation consultancy. We help organizations transform how their business operates with AI and modern technology foundations.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Business-First, Not Tool-First",
      description:
        "We begin with business economics, workflows, and operational reality rather than asking which AI tool to purchase.",
      icon: Workflow,
    },
    {
      title: "Strategy Seamlessly Linked to Engineering",
      description:
        "High-level advisory without technical execution creates shelfware. Deep engineering without business context creates shelf-code. We bridge both.",
      icon: Layers,
    },
    {
      title: "Resilient Foundations for Intelligence",
      description:
        "AI systems require robust data pipelines, modern cloud infrastructure, automated DevOps, and rigorous security to perform reliably in production.",
      icon: Cpu,
    },
    {
      title: "Client Intellectual Property Ownership",
      description:
        "All models, integrations, custom software, and architectural documentation created during our engagements remain the sole property of our clients.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="pb-16 border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
                <span>Enterprise Consulting Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.05]">
                Transforming how organizations operate with AI.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                We believe that meaningful enterprise AI adoption is not about purchasing software subscriptions or deploying isolated chatbots. It is about fundamentally redesigning business operations, decision flows, and technology foundations.
              </p>
            </div>
          </Container>
        </section>

        {/* Philosophy & Perspective Section */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="Our Perspective"
                  title="Why traditional AI initiatives stall."
                  description="Most organizations struggle to realize value from AI because initiatives are treated as experimental software trials rather than comprehensive operational transformations."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <p>
                  Deploying a generic AI model into an unmapped, fragmented operational environment produces inconsistent results and unquantified business impact. Real value emerges when domain workflows, legacy record systems, data pipelines, and human decision points are intentionally redesigned around intelligent automation.
                </p>
                <p>
                  At Aiveeno, we partner with executive leadership and technology teams to evaluate feasibility, design defensible roadmaps, and engineer the cloud, data, and software architecture necessary to sustain production deployment.
                </p>

                <div className="pt-4 border-t border-[#D9DEE7] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-[6px] border border-[#D9DEE7] bg-[#F7F8FA]">
                    <div className="font-semibold text-[#0B1020] text-[14px]">
                      Advisory Partnership
                    </div>
                    <div className="text-[12px] text-[#667085] mt-1">
                      Objective, vendor-neutral analysis of operational bottlenecks and strategic feasibility.
                    </div>
                  </div>

                  <div className="p-4 rounded-[6px] border border-[#D9DEE7] bg-[#F7F8FA]">
                    <div className="font-semibold text-[#0B1020] text-[14px]">
                      Engineering Execution
                    </div>
                    <div className="text-[12px] text-[#667085] mt-1">
                      Hands-on development of production-grade models, pipelines, and integrations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Operating Principles */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Consulting Principles"
              title="How we engage with enterprise organizations."
              description="A disciplined operating model built for organizations requiring rigorous governance, predictable capital allocation, and measurable throughput."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-[8px] border border-[#D9DEE7] bg-white shadow-xs space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#E9EEFF] text-[#3157FF]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-lg font-heading font-medium text-[#0B1020]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-[13.5px] text-[#667085] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* How Engagements Evolve */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl space-y-4">
              <SectionIntro
                eyebrow="Commercial Progression"
                title="How client relationships evolve."
                description="Our engagements begin with focused, low-risk diagnostic assessments and expand into multi-disciplinary transformation programs."
              />
            </div>

            <div className="mt-12 border border-[#D9DEE7] rounded-[8px] bg-[#F7F8FA] divide-y md:divide-y-0 md:divide-x divide-[#D9DEE7] grid grid-cols-1 md:grid-cols-3 overflow-hidden">
              <div className="p-7 space-y-3 bg-white">
                <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                  PHASE 01
                </span>
                <h4 className="text-lg font-heading font-medium text-[#0B1020]">
                  Assessment & Audit
                </h4>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  A structured one-week analysis of workflows, systems, data availability, and high-impact opportunities.
                </p>
              </div>

              <div className="p-7 space-y-3 bg-white">
                <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                  PHASE 02
                </span>
                <h4 className="text-lg font-heading font-medium text-[#0B1020]">
                  Architecture & Pilot
                </h4>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Design system blueprints, configure security enclaves, build initial models, and validate operational feasibility.
                </p>
              </div>

              <div className="p-7 space-y-3 bg-white">
                <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                  PHASE 03
                </span>
                <h4 className="text-lg font-heading font-medium text-[#0B1020]">
                  Scale & Partnership
                </h4>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Enterprise rollout across core departments with cloud optimization, continuous evaluation, and technology modernization.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
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
