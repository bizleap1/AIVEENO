import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = {
  title: "Executive Insights & Architecture Papers | Aiveeno",
  description: "Executive briefings, architectural blueprints, and analysis on enterprise AI transformation and cloud engineering.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.16em] uppercase text-[#667085]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3157FF]" />
              <span>Thought Leadership & Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-medium text-[#0B1020] tracking-tight leading-[1.02]">
              Executive Insights & Research.
            </h1>

            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed font-normal">
              Technical briefs, architectural whitepapers, and commercial analyses addressing how organizations scale AI, manage cloud complexity, and protect enterprise data.
            </p>

            <div className="p-6 rounded-[8px] border border-dashed border-[#D9DEE7] bg-white text-[13px] text-[#667085] font-mono">
              [EXECUTIVE INSIGHTS AND ARCHITECTURE PAPERS MANAGED VIA CMS // PHASE 2 READY]
            </div>

            <div className="pt-2">
              <CTAButton href="/contact" variant="primary">
                Book a Discovery Call
              </CTAButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
