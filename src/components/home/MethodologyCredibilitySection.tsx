import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";

export default function MethodologyCredibilitySection() {
  const { methodologyCredibility } = homepageData;

  return (
    <section className="relative w-full bg-[#0A0A0A] border-b border-[#1C2026] py-24 sm:py-32 select-none">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1C2026]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#A7ADB5]">
              <span className="text-[#FFFFFF] font-bold">&gt;</span>
              <span>OPERATIONAL GOVERNANCE & CHARTER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[#FFFFFF] leading-[1.08]">
              {methodologyCredibility.title}
            </h2>
          </div>
          <div className="text-[13px] text-[#8692A4] max-w-md font-normal leading-relaxed">
            {methodologyCredibility.subtitle}
          </div>
        </div>

        {/* Governance Charter Matrix (Dark Obsidian Grid) */}
        <div className="mt-12 border-t border-b border-[#1C2026] divide-y divide-[#1C2026]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1C2026]">
            {methodologyCredibility.commitments.slice(0, 2).map((item, idx) => (
              <div key={idx} className="p-8 sm:p-10 space-y-4 bg-[#0E1014] hover:bg-[#12151B] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8692A4]">
                    CLAUSE 0{idx + 1} // GOVERNANCE STANDARD
                  </span>
                  <span className="text-[10px] font-mono text-[#FFFFFF] font-semibold bg-[#161920] border border-[#282F3B] px-2 py-0.5 rounded-[2px]">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#FFFFFF] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#8692A4] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1C2026]">
            {methodologyCredibility.commitments.slice(2, 4).map((item, idx) => (
              <div key={idx + 2} className="p-8 sm:p-10 space-y-4 bg-[#0E1014] hover:bg-[#12151B] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8692A4]">
                    CLAUSE 0{idx + 3} // GOVERNANCE STANDARD
                  </span>
                  <span className="text-[10px] font-mono text-[#FFFFFF] font-semibold bg-[#161920] border border-[#282F3B] px-2 py-0.5 rounded-[2px]">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#FFFFFF] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#8692A4] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Evidence Notice */}
        <div className="mt-10 p-5 bg-[#0E1014] border border-[#1C2026] rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8692A4]">
          <div className="flex items-center gap-2">
            <span className="text-[#FFFFFF] font-bold">&gt;</span>
            <span className="text-[#FFFFFF] font-medium uppercase tracking-wider">
              CLIENT CASE EVIDENCE & AUDITED METRICS:
            </span>
            <span>ENTERPRISE GRADE ASSURANCE</span>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-[#A7ADB5]">
            AUTHENTIC COMMERCIAL PROOF ONLY
          </span>
        </div>
      </Container>
    </section>
  );
}
