import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = {
  title: "Industry Transformation Solutions | Aiveeno",
  description: "Enterprise AI and technology transformation tailored to regulated and complex industry operating environments.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
              <span>Phase 2 Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
              Industry Transformation Practices.
            </h1>

            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
              Specialized domain frameworks and regulatory compliance blueprints for Financial Services, Healthcare & Life Sciences, Manufacturing & Logistics, and Technology.
            </p>

            <div className="p-6 rounded-[8px] border border-dashed border-[#D9DEE7] bg-white text-[13px] text-[#667085] font-mono">
              [INDUSTRY PRACTICE PAGES ARE PREPARED FOR CMS-DRIVEN EXPANSION UPON STAKEHOLDER REVIEWS]
            </div>

            <div className="pt-2">
              <CTAButton href="/contact" variant="primary">
                Discuss Your Industry Requirements
              </CTAButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
