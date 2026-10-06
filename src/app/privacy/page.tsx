import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Privacy Notice | Aiveeno",
  description: "Aiveeno enterprise privacy standards, confidentiality commitments, and data governance policies.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F6] text-[#0D1B2A] pt-28 pb-20 select-none">
      <Container className="max-w-4xl px-5 sm:px-6 lg:px-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]">
            <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
            <span>Legal & Governance</span>
          </div>

          <h1 className="font-sans font-medium text-[36px] sm:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.05]">
            Privacy Notice
          </h1>

          <div className="pt-4 border-t border-[#0D1B2A]/[0.08] space-y-5 text-[15px] sm:text-[16px] text-[#3B4A5A] leading-[1.6]">
            <p>
              Aiveeno operates as an enterprise technology consulting practice. We adhere strictly to verified commercial confidentiality, zero data leakage architectures, and enterprise security governance.
            </p>
            <p>
              Client data, workflows, and proprietary records are processed solely within authorized client environments or dedicated private enclaves. No client operational data is utilized for training public commercial foundation models.
            </p>
            <p>
              For privacy and governance inquiries, contact our legal team at{" "}
              <Link href="/contact" className="text-[#0D1B2A] underline underline-offset-4 font-medium hover:text-[#C9A35B] transition-colors">
                contact@aiveeno.com
              </Link>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
