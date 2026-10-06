import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Terms of Engagement | Aiveeno",
  description: "Aiveeno commercial terms of engagement, intellectual property rights, and consulting governance.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F6] text-[#0D1B2A] pt-28 pb-20 select-none">
      <Container className="max-w-4xl px-5 sm:px-6 lg:px-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]">
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Legal & Governance</span>
          </div>

          <h1 className="font-sans font-medium text-[36px] sm:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.05]">
            Terms of Engagement
          </h1>

          <div className="pt-4 border-t border-[#0D1B2A]/[0.08] space-y-5 text-[15px] sm:text-[16px] text-[#3B4A5A] leading-[1.6]">
            <p>
              These Terms govern executive advisory engagements, AI transformation assessments, and software engineering implementations delivered by Aiveeno.
            </p>
            <p>
              All custom software architectures, pipeline configurations, and proprietary transformation roadmaps engineered during commercial engagements remain the exclusive intellectual property of the commissioning client.
            </p>
            <p>
              Engagements are formally initiated via executed Statements of Work (SOW) and bilateral Non-Disclosure Agreements (NDA). Inquiries may be directed to{" "}
              <Link href="/contact" className="text-[#0D1B2A] underline underline-offset-4 font-medium hover:text-[#C9A35B] transition-colors">
                our team
              </Link>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
