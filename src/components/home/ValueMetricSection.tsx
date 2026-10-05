import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function ValueMetricSection() {
  const metrics = [
    {
      value: "+48%",
      label: "Operational Cycle Compression",
      description: "Average reduction in enterprise workflow completion time across automated operational pipelines.",
      tag: "SPEED",
    },
    {
      value: "3.8x",
      label: "Measurable Enterprise ROI",
      description: "Direct cost leverage and throughput yield realized across production AI and cloud implementations.",
      tag: "VALUE",
    },
    {
      value: "100%",
      label: "Zero Data Leakage & Private Tenancy",
      description: "Client data is never used for public model training. Strict VPC and sovereign enclave boundaries.",
      tag: "GOVERNANCE",
    },
    {
      value: "< 60d",
      label: "Time to First Production Value",
      description: "From 1-Week strategic assessment to verified live deployment in mission-critical workflows.",
      tag: "VELOCITY",
    },
  ];

  return (
    <section className="relative w-full bg-[#080808] border-b border-[#1C2026] py-16 sm:py-20 select-none">
      <Container>
        {/* Section Header with Accenture 360° Value Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1C2026]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#A7ADB5]">
              <span className="text-[#FFFFFF] font-bold">&gt;</span>
              <span>360° VALUE CREATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-[#FFFFFF]">
              Measurable impact engineered into every transformation.
            </h2>
          </div>
          <div className="text-[12px] font-mono text-[#8692A4] uppercase tracking-wider hidden md:block">
            VERIFIED METRICS // ENTERPRISE REINVENTION
          </div>
        </div>

        {/* 4-Column High-Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-[4px] bg-[#0E1014]/60 border border-[#1C2026] hover:border-[#384150] transition-all group"
            >
              {/* Category Tag & Index */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8692A4] uppercase tracking-widest pb-4 border-b border-[#1C2026]">
                <span>0{idx + 1} // {metric.tag}</span>
                <span className="text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>

              {/* Bold Quantitative Value */}
              <div className="text-4xl sm:text-5xl font-sans font-bold tracking-[-0.04em] text-[#FFFFFF] mt-4 mb-2 group-hover:text-white">
                {metric.value}
              </div>

              {/* Metric Title */}
              <h3 className="text-[14px] font-sans font-semibold text-[#F1F5F9] tracking-tight">
                {metric.label}
              </h3>

              {/* Metric Narrative */}
              <p className="text-[12.5px] text-[#8692A4] leading-relaxed mt-2 font-normal">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
