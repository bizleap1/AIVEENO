"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function VoicesOfChangeSection() {
  const articles = [
    {
      readTime: "7 MIN READ",
      category: "EXECUTIVE BRIEF",
      title: "The Shift: Why Point-Solution Copilots Stumble and Systemic Transformation Wins",
      excerpt:
        "Over 80% of enterprise AI pilots fail to reach production scale. The root cause is not model capability, but architectural isolation from core workflow engines.",
      link: "/ai-business-transformation",
    },
    {
      readTime: "9 MIN READ",
      category: "ARCHITECTURE WHITEPAPER",
      title: "Building the Resilient Cloud Core for Autonomous Multi-Agent Workflows",
      excerpt:
        "How leading engineering teams transition from static cloud infrastructure to event-driven, sovereign enclaves optimized for high-throughput agentic execution.",
      link: "/cloud-consulting",
    },
    {
      readTime: "6 MIN READ",
      category: "GOVERNANCE REPORT",
      title: "The Enterprise Governance Playbook for Deterministic AI Systems",
      excerpt:
        "Practical frameworks for zero-trust access control, prompt firewalling, data isolation, and continuous model auditability in regulated industries.",
      link: "/cloud-security-governance",
    },
  ];

  return (
    <section className="relative w-full bg-[#080808] border-b border-[#1C2026] py-24 sm:py-32 select-none">
      <Container>
        {/* Section Header with Accenture Greater-Than Brand Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1C2026]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#A7ADB5]">
              <span className="text-[#FFFFFF] font-bold">&gt;</span>
              <span>VOICES OF CHANGE // RESEARCH & INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#FFFFFF] leading-[1.08]">
              Strategic perspectives on enterprise technology & AI.
            </h2>
          </div>
          <div className="text-[13px] text-[#8692A4] max-w-md font-normal leading-relaxed">
            Rigorous analysis, architectural blueprints, and executive guidance drawn from live enterprise production engagements.
          </div>
        </div>

        {/* 3-Column Editorial Whitepapers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {articles.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="flex flex-col justify-between p-8 rounded-[4px] bg-[#0E1014] border border-[#1C2026] hover:border-[#4B5563] transition-all group cursor-pointer"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#1C2026] text-[10px] font-mono text-[#8692A4]">
                  <span className="uppercase tracking-widest text-[#A7ADB5]">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>

                {/* Article Headline */}
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#FFFFFF] tracking-tight mt-6 group-hover:text-white transition-colors leading-[1.3]">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[13.5px] text-[#8692A4] leading-relaxed mt-4 font-normal">
                  {item.excerpt}
                </p>
              </div>

              {/* Bottom Read Action */}
              <div className="mt-8 pt-5 border-t border-[#1C2026] flex items-center justify-between text-[12px] font-mono text-[#FFFFFF] group-hover:text-[#F1F5F9]">
                <span>Read Analysis</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
