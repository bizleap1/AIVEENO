import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { homepageData } from "@/data/homepage";

export default function TransformationScopeSection() {
  const { whatTransformationIncludes } = homepageData;

  return (
    <section id="ai-capabilities" className="py-20 sm:py-28 bg-[#F5F7F6] border-b border-[#D9DDDA] select-none">
      <Container>
        {/* Section Header */}
        <SectionIntro
          theme="light"
          eyebrow="AI Capabilities"
          title={whatTransformationIncludes.title}
          description={whatTransformationIncludes.subtitle}
        />

        {/* Swiss Typographic Capability Index (Hairline Matrix, No Box Cards) */}
        <div className="mt-16 border-t border-b border-[#D9DDDA] divide-y divide-[#D9DDDA]">
          {whatTransformationIncludes.capabilities.map((item, idx) => (
            <div
              key={idx}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-white px-4 sm:px-6 -mx-4 sm:-mx-6 transition-colors group"
            >
              {/* Col 1: Numeral & Category (3 cols) */}
              <div className="lg:col-span-3 space-y-1">
                <span className="font-mono text-sm font-medium text-[#0D1117]">
                  0{idx + 1} // CAPABILITY
                </span>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#6F7479]">
                  {item.category}
                </div>
              </div>

              {/* Col 2: Title & Narrative Description (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#0D1117] tracking-tight group-hover:text-[#0D1B2A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#6F7479] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Col 3: Typical Production Workloads (4 cols) */}
              <div className="lg:col-span-4 space-y-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#D9DDDA]">
                <div className="text-[12px] font-sans uppercase tracking-[0.08em] text-[#0D1117] font-medium flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-[#D4A64A]" />
                  <span>Production Workloads</span>
                </div>
                <div className="space-y-1.5">
                  {item.typicalWorkloads.map((workload, wIdx) => (
                    <div
                      key={wIdx}
                      className="text-[13px] text-[#6F7479] flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-none bg-[#D4A64A] shrink-0" />
                      <span>{workload}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
