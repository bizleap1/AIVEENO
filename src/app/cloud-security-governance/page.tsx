import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cloud Security & Governance | Aiveeno",
  description:
    "Secure cloud architecture, zero-trust network access, compliance governance, automated controls, and proactive threat protection.",
};

export default function CloudSecurityGovernancePage() {
  const capabilities = [
    { title: "Zero-Trust Architecture", desc: "Least-privilege IAM policies, mutual TLS encryption, and micro-segmented network boundaries." },
    { title: "Data Privacy & Enclaves", desc: "Confidential compute architectures, tokenization, and strict isolation preventing unauthorized data access." },
    { title: "AI Model Safety & Guardrails", desc: "Deterministic policy enforcement preventing prompt injection, data exfiltration, and model misuse." },
    { title: "Compliance Automation", desc: "Continuous policy-as-code auditing against SOC 2, HIPAA, ISO 27001, and regulatory standards." },
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
                <span>Security & Governance Practice</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
                Cloud Security & Governance.
              </h1>

              <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
                Secure architecture, zero-trust access controls, compliance automation, continuous telemetry, and protection of enterprise cloud and AI environments.
              </p>

              <div className="pt-2">
                <CTAButton href="/contact" variant="primary">
                  Discuss Cloud Security & Governance
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
                  eyebrow="The Imperative"
                  title="Protecting corporate assets in an AI-driven era."
                  description="Adopting advanced cloud and AI capabilities without defense-in-depth creates unacceptable regulatory exposure and intellectual property risks."
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                <h3 className="text-xl font-heading font-semibold text-[#0B1020]">
                  What We Do
                </h3>
                <p>
                  We architect hardened, zero-trust cloud foundations that secure data at rest, in transit, and during computation. From confidential cloud enclaves for sensitive training data to automated policy enforcement, our security engineers ensure complete compliance and auditability.
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
                Discuss Cloud Security & Governance
              </CTAButton>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
