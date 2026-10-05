"use client";

/**
 * Aiveeno — Approach Section (Section 03)
 * High-end enterprise consultancy aesthetic: typography-led, minimal, and confident.
 * Architecture:
 * - Row 1: "AI starts with the business." headline + supporting copy.
 * - Row 2: 3 equal columns (Assess -> Design -> Implement) with large faint 120-160px background numerals.
 * - Restrained brass accents and subtle hover feedback (no decorative icons or diagrams).
 */

const APPROACH_STEPS = [
  {
    num: "01",
    tag: "01 — ASSESS & PRIORITISE",
    title: "Assess & Prioritise",
    desc: "Identify where AI can create the greatest business value.",
    keyword: "OPPORTUNITY",
  },
  {
    num: "02",
    tag: "02 — DESIGN THE ROADMAP",
    title: "Design the Roadmap",
    desc: "Define the data, workflows and technology required.",
    keyword: "DIRECTION",
  },
  {
    num: "03",
    tag: "03 — IMPLEMENT & OPTIMISE",
    title: "Implement & Optimise",
    desc: "Build, integrate and continuously improve the solution.",
    keyword: "IMPACT",
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative w-full bg-[#F5F7F6] text-[#0D1117] border-b border-[#0D1117]/[0.05] select-none pt-8 sm:pt-10 md:pt-14 pb-12 sm:pb-14 md:pb-16 overflow-hidden"
    >
      {/* 3-Column Frame Container: 1240px Desktop, balanced padding on Mobile */}
      <div className="w-[calc(100%-40px)] sm:w-[calc(100%-48px)] md:w-[min(1240px,calc(100vw-48px))] mx-auto border-t md:border-x border-[#0D1117]/[0.06]">
        
        {/* ROW 1: Clear Business-First Headline + Supporting Copy */}
        <div className="grid grid-cols-1 md:grid-cols-[58%_42%] md:divide-x divide-[#0D1117]/[0.06] items-stretch">
          
          {/* Col 1 (58%): Eyebrow + Headline */}
          <div className="px-6 sm:px-7 md:p-8 md:pr-10 pt-6 sm:pt-7 md:pt-7 pb-4 sm:pb-5 md:pb-6 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-[#6F7479]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Approach</span>
            </div>

            <h2 className="mt-3 sm:mt-3.5 md:mt-2.5 font-sans font-medium text-[clamp(36px,9.2vw,42px)] md:text-[clamp(32px,3.6vw,50px)] lg:text-[46px] xl:text-[48px] text-[#0D1117] tracking-[-0.035em] leading-[0.98] md:leading-[1.04]">
              AI starts with the business.
            </h2>
          </div>

          {/* Col 2 (42%): Supporting Copy */}
          <div className="px-6 sm:px-7 md:p-8 md:pl-10 pt-1 sm:pt-2 md:pt-7 pb-6 sm:pb-7 md:pb-6 flex flex-col justify-end">
            <p className="text-[16px] sm:text-[16.5px] md:text-[15.5px] lg:text-[17px] text-[#6B727A] leading-[1.48] font-normal max-w-[470px]">
              We find where AI can create value, build the right roadmap, and turn it into a system that scales.
            </p>
          </div>

        </div>

        {/* ROW 2: Typography-Led 3-Column Minimal Grid */}
        <div className="relative border-t border-[#0D1117]/[0.06]">
          <div className="grid grid-cols-1 divide-y md:divide-y-0 md:grid-cols-3 md:divide-x divide-[#0D1117]/[0.06] items-stretch">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9 min-h-[250px] sm:min-h-[270px] md:min-h-[290px] overflow-hidden transition-colors duration-300 hover:bg-[#EFF3F1]/40"
              >
                {/* Large Faint Background Numeral (120–160px desktop, ~4–6% opacity) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute right-4 sm:right-6 bottom-1 sm:bottom-2 md:bottom-2 font-sans font-light text-[110px] sm:text-[130px] md:text-[140px] lg:text-[160px] leading-none tracking-[-0.06em] text-[#0D1117] opacity-[0.045] transition-all duration-500 ease-out group-hover:opacity-[0.085] group-hover:-translate-y-1"
                >
                  {step.num}
                </div>

                {/* Top: Tag + Title + Description */}
                <div className="relative z-10">
                  {/* Step Eyebrow with Animated Brass Line */}
                  <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#6F7479]">
                    <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                    <span>{step.tag}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-3.5 sm:mt-4 text-[21px] sm:text-[22px] md:text-[23px] font-sans font-medium tracking-[-0.025em] text-[#0D1117] transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-[15px] sm:text-[15.5px] md:text-[15px] font-sans text-[#555B61] leading-[1.48] max-w-[320px] md:max-w-none">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom: Restrained Keyword Anchor */}
                <div className="relative z-10 mt-8 sm:mt-10 md:mt-12 flex items-center justify-between border-t border-[#0D1117]/[0.05] pt-3.5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#8A9198] transition-colors duration-300 group-hover:text-[#0D1117]">
                    <span className="h-1 w-1 rounded-full bg-[#D4A64A]/60 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#D4A64A]" />
                    <span>{step.keyword}</span>
                  </div>
                  <span className="text-[11.5px] font-mono text-[#8A9198]/40 transition-colors duration-300 group-hover:text-[#D4A64A]">
                    {step.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
