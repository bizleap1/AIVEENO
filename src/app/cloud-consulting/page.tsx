import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";
import { Cloud, Check, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Cloud Consulting & Advisory | Aiveeno",
  description:
    "Assess current environments, define cloud strategy and multi-cloud architecture, determine platform fit, and plan enterprise modernization.",
};

export default function CloudConsultingPage() {
  const capabilities = [
    { title: "Current State Audit", desc: "Comprehensive assessment of infrastructure, licenses, dependencies, and architectural bottlenecks." },
    { title: "Multi-Cloud Strategy", desc: "Objective architectural evaluation across AWS, Microsoft Azure, and Google Cloud Platform." },
    { title: "Target Architecture Design", desc: "Blueprints for high availability, zero-trust network boundaries, and elastic compute scaling." },
    { title: "FinOps & Cost Modeling", desc: "Predictive total cost of ownership (TCO) modeling, reserve capacity planning, and governance policies." },
    { title: "Modernization Roadmap", desc: "Phased migration sequence de-risking operational continuity, cutover windows, and staff readiness." },
    { title: "Vendor & Platform Fit", desc: "Independent technology evaluation selecting compute, storage, and database solutions on technical merit." },
  ];

  const outcomes = [
    "Predictable cloud expenditure and elimination of idle provisioning waste",
    "Defensible executive roadmap aligned with business growth targets",
    "Reduced technical debt and elimination of single-vendor architectural lock-in",
    "Accelerated foundation ready for enterprise AI and modern data pipelines",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* 1. Hero */}
        <section className="pb-20 border-b border-[#D9DEE7]">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
                <span>Cloud Advisory Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Cloud Consulting & Advisory.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Assess current environments, define strategic multi-cloud architecture, determine platform fit, and design predictable adoption programs tailored to enterprise requirements.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Your Cloud Strategy
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Business Challenge & 3. What We Do */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="The Challenge"
                  title="Cloud complexity without strategic clarity."
                  description="Organizations often inherit sprawling, uncoordinated cloud resources, volatile monthly bills, and architectural debt that hinders new digital and AI initiatives."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We provide senior, vendor-neutral advisory to evaluate your current technology footprint, resolve architectural friction, and define an actionable cloud strategy. Whether designing multi-cloud VPC topologies or establishing FinOps cost governance, our architects ensure your cloud investments deliver concrete operational resilience.
                </p>
                <div className="p-5 rounded-[8px] border border-[#D9DEE7] bg-[#F7F8FA] space-y-2">
                  <div className="font-semibold text-[#0B1020] text-[14px]">
                    Core Deliverable:
                  </div>
                  <p className="text-[13px] text-[#667085]">
                    Executive Cloud Strategy & Target Architecture Blueprint, outlining platform recommendations, security policies, workload placement criteria, and phased adoption roadmaps.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Capabilities */}
        <section className="py-20 bg-[#F7F8FA] border-b border-[#D9DEE7]">
          <Container>
            <SectionIntro
              eyebrow="Capabilities"
              title="Advisory & Architecture Services."
              description="A structured range of consulting capabilities designed to evaluate, plan, and govern enterprise cloud adoption."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c, idx) => (
                <div key={idx} className="p-7 rounded-[8px] border border-[#D9DEE7] bg-white shadow-xs space-y-2.5">
                  <span className="font-mono text-[11px] font-semibold text-[#3157FF]">
                    CAP_0{idx + 1}
                  </span>
                  <h4 className="text-lg font-heading font-medium text-[#0B1020]">
                    {c.title}
                  </h4>
                  <p className="text-[13px] text-[#667085] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Business Outcomes */}
        <section className="py-20 bg-white border-b border-[#D9DEE7]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <SectionIntro
                  eyebrow="Business Outcomes"
                  title="Translating architecture into measurable value."
                  description="Strategic cloud advisory aligns technical decisions directly with commercial leverage, governance requirements, and operational stability."
                />
              </div>

              <div className="lg:col-span-6 space-y-3">
                {outcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 rounded-[6px] border border-[#D9DEE7] bg-[#F7F8FA] flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#3157FF] mt-1 shrink-0" />
                    <span className="text-[13.5px] text-[#111827] font-medium leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contextual CTA */}
            <div className="mt-16 text-center">
              <CTAButton href="/contact" variant="primary">
                Discuss Your Cloud Strategy
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
