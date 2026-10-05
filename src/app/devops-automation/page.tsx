import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { GitBranch, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "DevOps & Platform Automation | Aiveeno",
  description:
    "Automate development, testing, deployment, and infrastructure operations using modern CI/CD, Terraform Infrastructure as Code, and Kubernetes orchestration.",
};

export default function DevOpsAutomationPage() {
  const capabilities = [
    { title: "Infrastructure as Code", desc: "Declarative, repeatable infrastructure provisioning with Terraform, OpenTofu, and GitOps workflows." },
    { title: "Automated CI/CD Pipelines", desc: "Hardened deployment pipelines with automated linting, security audits, container scans, and rollback." },
    { title: "Kubernetes Platform Engineering", desc: "Production container orchestration across AWS EKS, Azure AKS, and Google GKE with automated autoscaling." },
    { title: "Observability & SRE", desc: "Distributed tracing, real-time metrics dashboards, and automated incident response runbooks." },
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
                <span>DevOps & Platform Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                DevOps & Platform Automation.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Automate development, testing, deployment, and infrastructure operations using modern CI/CD, Infrastructure as Code, and production Kubernetes engineering.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Talk to a DevOps Specialist
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
                  eyebrow="Developer Velocity"
                  title="Eliminating deployment friction and human error."
                  description="Manual deployments, environmental drift, and unmonitored changes reduce engineering velocity and jeopardize production reliability."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We build modern developer platforms that empower internal engineering teams to ship code safely and repeatedly. By establishing immutable infrastructure, automated container scanning, and GitOps release pipelines, we turn operations into an automated software capability.
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
                Talk to a DevOps Specialist
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
