import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Engagement",
  description:
    "Aiveeno commercial terms of engagement, intellectual property rights, and consulting governance.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#0D1B2A]">
      <Navbar solidBackground />

      <main className="flex-1 pt-28 pb-20">
        <Container className="max-w-4xl px-5 sm:px-6 lg:px-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#3B4A5A]">
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>Legal &amp; Governance</span>
            </div>

            <h1 className="font-sans font-medium text-[36px] sm:text-[46px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.05]">
              Terms of Engagement
            </h1>

            <div className="pt-4 border-t border-[#0D1B2A]/[0.08] space-y-5 text-[15px] sm:text-[16px] text-[#3B4A5A] leading-[1.6]">
              <p>
                These Terms govern executive advisory engagements, AI transformation assessments, and software engineering implementations delivered by Aiveeno.
              </p>
              <p>
                All custom software architectures, pipeline configurations, and transformation roadmaps engineered during commercial engagements remain the intellectual property of the commissioning client as specified under executed engagement agreements.
              </p>
              <p>
                Engagements are formally initiated via executed Statements of Work (SOW) and applicable confidentiality agreements. Inquiries may be directed through{" "}
                <Link
                  href="/contact"
                  className="text-[#0D1B2A] underline underline-offset-4 font-medium hover:text-[#C9A35B] transition-colors"
                >
                  our Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
