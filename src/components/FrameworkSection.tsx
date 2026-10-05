"use client";

interface Step {
  number: string;
  title: string;
  phase: string;
  summary: string;
  deliverables: string[];
}

const FRAMEWORK_STEPS: Step[] = [
  {
    number: "01",
    phase: "Discovery & Diagnostics",
    title: "Understand",
    summary: "Deep-dive into existing technological debt, system interdependencies, organizational bottlenecks, and enterprise strategic priorities.",
    deliverables: [
      "Technical infrastructure audit",
      "Process & workflow bottleneck mapping",
      "Data lineage & security baseline"
    ]
  },
  {
    number: "02",
    phase: "Opportunity Matrix",
    title: "Identify",
    summary: "Pinpoint where AI and modern cloud systems produce tangible leverage, screening out low-value hype in favor of measurable impact.",
    deliverables: [
      "High-feasibility use-case inventory",
      "Data readiness & gap analysis",
      "Regulatory & compliance impact review"
    ]
  },
  {
    number: "03",
    phase: "Capital & Risk Allocation",
    title: "Prioritize",
    summary: "Model financial returns, total cost of ownership (TCO), and implementation risks to define a defensible executive roadmap.",
    deliverables: [
      "Quantified ROI & margin forecast",
      "Phased transformation roadmap",
      "Vendor & tech stack evaluation"
    ]
  },
  {
    number: "04",
    phase: "Systems Architecture",
    title: "Design",
    summary: "Architect the resilient foundation: multi-cloud infrastructure, zero-trust access controls, RAG pipelines, and deterministic guardrails.",
    deliverables: [
      "End-to-end architecture blueprint",
      "Zero-trust & SOC2 governance spec",
      "Data pipeline & contract schemas"
    ]
  },
  {
    number: "05",
    phase: "Production Engineering",
    title: "Build & Deploy",
    summary: "Our engineering teams develop, test, and integrate production-grade systems directly with your core enterprise software.",
    deliverables: [
      "Hardened cloud infrastructure (IaC)",
      "Model fine-tuning & agentic pipelines",
      "Automated CI/CD & failover mechanisms"
    ]
  },
  {
    number: "06",
    phase: "Continuous Governance",
    title: "Optimize",
    summary: "Continuous telemetry, latency reduction, drift detection, model evaluation, and knowledge evolution to sustain compounding advantage.",
    deliverables: [
      "Real-time model observability suite",
      "Cost-per-inference governance",
      "Evolutionary capability roadmap"
    ]
  }
];

export default function FrameworkSection() {
  return (
    <section id="framework" className="py-20 md:py-28 bg-[#F5F3EE] border-b border-[#E4E0D7]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#6F7378]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#141414]" />
            <span>Consulting Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#141414] leading-[1.05]">
            The Transformation Framework
          </h2>
          <p className="text-base sm:text-lg text-[#6F7378] leading-relaxed font-normal">
            A disciplined, 6-stage engineering and advisory lifecycle designed to de-risk technological investment and accelerate time-to-production.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRAMEWORK_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-[#E4E0D7] bg-[#FCFBF9] p-6 sm:p-7 shadow-xs hover:border-[#141414] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#ECE8E1]">
                  <span className="font-mono text-xs font-bold text-[#6F7378] group-hover:text-[#141414] transition-colors">
                    PHASE {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#6F7378] bg-[#F5F3EE] px-2 py-0.5 rounded border border-[#E4E0D7]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#141414] mt-4 tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#6F7378] leading-relaxed">
                  {step.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-[#ECE8E1] space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#6F7378] font-semibold">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#141414]">
                    {step.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#141414]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#ECE8E1] flex items-center justify-between text-[11px] text-[#6F7378] font-mono">
                <span>Enterprise Gate Review</span>
                <span className="text-[#141414] font-medium">✓ Validated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
