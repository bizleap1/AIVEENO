"use client";

export default function CaseOutcomesSection() {
  const caseStudies = [
    {
      sector: "Financial Services & Payments",
      title: "Core Settlement Modernization & Real-Time Fraud AI",
      client: "Global Tier-1 Clearing Network",
      challenge: "Legacy mainframe settlement batch architecture causing 4-hour reconciliation windows and volatile token compute costs.",
      solution: "Engineered an event-driven AWS/Kafka pipeline with localized sub-50ms fraud scoring models and deterministic ledger synchronization.",
      stats: [
        { label: "Settlement Latency", value: "-82%" },
        { label: "Annual Cloud Cost", value: "-$3.8M" },
        { label: "Core Availability", value: "99.999%" }
      ]
    },
    {
      sector: "Healthcare & Life Sciences",
      title: "HIPAA-Compliant Enterprise Knowledge Copilot",
      client: "Multi-Facility Hospital Network",
      challenge: "Clinicians spending 14+ hours weekly searching siloed medical records, unstructured lab notes, and clinical trial databases.",
      solution: "Architected a zero-trust, private-enclave RAG system with verifiable audit trails, role-based access, and strict PHI isolation.",
      stats: [
        { label: "Time Saved / Clinician", value: "4.5 hrs/wk" },
        { label: "Data Leakage Incidents", value: "0" },
        { label: "Compliance Score", value: "100% HIPAA" }
      ]
    },
    {
      sector: "Manufacturing & Supply Logistics",
      title: "Autonomous Supply Chain & Predictive Maintenance",
      client: "Industrial Equipment Manufacturer",
      challenge: "Unplanned manufacturing halts across 6 regional plants costing $450k per downtime event with erratic parts inventory.",
      solution: "Deployed edge-to-cloud IoT ingestion on Azure Kubernetes with predictive failure models and automated ERP replenishment triggers.",
      stats: [
        { label: "Unplanned Downtime", value: "-54%" },
        { label: "Inventory Holding Cost", value: "-28%" },
        { label: "Payback Period", value: "7 Months" }
      ]
    }
  ];

  return (
    <section id="outcomes" className="py-20 md:py-28 bg-[#FCFBF9] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#6F7378]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
            <span>Demonstrated Value</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#141414] leading-[1.05]">
            Proven Enterprise Outcomes
          </h2>
          <p className="text-base sm:text-lg text-[#6F7378] leading-relaxed font-normal">
            Real transformations delivered for forward-thinking organizations requiring rock-solid reliability, regulatory compliance, and bottom-line impact.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E4E0D7] bg-[#F5F3EE] p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E4E0D7]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F7378] font-semibold">
                    {cs.sector}
                  </span>
                  <span className="text-[10px] font-mono text-[#6F7378]">
                    CS // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#141414] mt-4 tracking-tight leading-snug">
                  {cs.title}
                </h3>

                <p className="mt-3 text-sm text-[#6F7378] leading-relaxed">
                  {cs.solution}
                </p>

                {/* Metrics Grid */}
                <div className="mt-6 pt-4 border-t border-[#E4E0D7] grid grid-cols-3 gap-2">
                  {cs.stats.map((st, sIdx) => (
                    <div key={sIdx} className="rounded-lg bg-white p-2.5 border border-[#E4E0D7] text-center">
                      <div className="text-base font-bold font-mono text-[#141414]">
                        {st.value}
                      </div>
                      <div className="text-[9px] font-medium text-[#6F7378] uppercase tracking-tight mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E4E0D7] flex items-center justify-between text-xs text-[#6F7378] font-mono">
                <span>Verified Architecture</span>
                <span className="text-[#141414] font-medium">Enterprise Grade</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
