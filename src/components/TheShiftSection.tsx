"use client";

/**
 * Aiveeno — Section 02: THE SHIFT
 * 
 * Layout Architecture:
 * - Desktop: 50/50 side-by-side comparison, fit-to-screen (approx 85–95vh max below sticky navbar).
 * - Mobile: Dedicated stacked single-column editorial layout:
 *   - Eyebrow: THE SHIFT
 *   - Headline: "Adopting AI is not the same as transforming with AI." (40–44px, Instrument Sans 500, line-height 0.96)
 *   - State 1: ADOPT AI ("Add tools to existing work.") with 220–260px tall horizontal business flow + disconnected abstract additions.
 *   - Thin Divider with 48–56px spacing.
 *   - State 2: TRANSFORM THE BUSINESS WITH AI ("Redesign how the business operates.") with 220–260px tall clean integrated operating backbone.
 * - Zero SaaS clutter: No white card boxes, no racetrack loops, no unnecessary arrows, no tiny labels.
 * - Palette: #E8EDEB background, #0D1B2A text, #3B4A5A secondary, #D4A64A subtle brass focal accent.
 */

export default function TheShiftSection() {
  return (
    <section
      id="the-shift"
      className="relative w-full bg-[#E8EDEB] text-[#0D1B2A] select-none py-12 sm:py-16 lg:py-8 xl:py-10 border-b border-[#0D1B2A]/[0.10] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — PERMANENT MAIN HEADLINE                                              */}
        {/* Mobile: 40–44px, line-height 0.96, font-weight 500                        */}
        {/* Desktop: Balanced ~23-34px scale, line-height 1.12                        */}
        {/* ========================================================================= */}
        <div className="max-w-[1040px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.18em] text-[#3B4A5A]">
            <span className="w-3.5 h-px bg-[#D4A64A]" />
            <span>The Shift</span>
          </div>

          {/* Main Headline */}
          <h2 className="mt-3 sm:mt-4 lg:mt-2.5 font-sans font-medium text-[38px] min-[390px]:text-[42px] sm:text-[44px] lg:text-[clamp(23px,2.5vw,34px)] text-[#0D1B2A] tracking-[-0.035em] leading-[0.96] lg:leading-[1.12]">
            Adopting AI is not the same as transforming with AI.
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 02 — COMPARISON CONTAINER                                                 */}
        {/* Mobile: Stacked single-column with 48–56px gap + thin divider            */}
        {/* Desktop: 50/50 side-by-side comparison                                    */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-6 border-t border-[#0D1B2A]/[0.10]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            
            {/* ----------------------------------------------------------------- */}
            {/* STATE 01: ADOPT AI                                                */}
            {/* ----------------------------------------------------------------- */}
            <div className="pt-6 sm:pt-8 pb-12 sm:pb-14 lg:py-4 pr-0 lg:pr-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0D1B2A]/[0.10]">
              <div>
                <h3 className="text-[28px] sm:text-[32px] lg:text-[25px] font-sans font-medium text-[#0D1B2A] tracking-[-0.03em] leading-tight">
                  Adopt AI
                </h3>
                <p className="mt-1.5 lg:mt-1 text-[15px] sm:text-[16px] lg:text-[15.5px] text-[#3B4A5A] font-sans font-normal leading-relaxed">
                  Add tools to existing work.
                </p>
              </div>

              {/* Visual Left: Linear Operating Flow + Flat Abstract Disconnected Modules */}
              <div className="mt-6 sm:mt-8 lg:mt-4 w-full flex items-center justify-center">
                {/* --- MOBILE VISUAL (220–260px high, dedicated viewport scale) --- */}
                <svg
                  viewBox="0 0 380 220"
                  className="w-full h-[220px] min-[390px]:h-[240px] sm:h-[260px] lg:hidden overflow-visible select-none"
                  aria-label="Adopt AI linear flow with disconnected additions"
                >
                  {/* Linear Baseline Flow */}
                  <line
                    x1="20"
                    y1="145"
                    x2="360"
                    y2="145"
                    stroke="#0D1B2A"
                    strokeOpacity="0.24"
                    strokeWidth="1.5"
                  />

                  {/* Flow Directional Ticks */}
                  <polygon points="90,142 96,145 90,148" fill="#0D1B2A" fillOpacity="0.28" />
                  <polygon points="190,142 196,145 190,148" fill="#0D1B2A" fillOpacity="0.28" />
                  <polygon points="290,142 296,145 290,148" fill="#0D1B2A" fillOpacity="0.28" />

                  {/* 4 Process Nodes */}
                  <circle cx="42" cy="145" r="4.5" fill="#0D1B2A" fillOpacity="0.85" />
                  <text
                    x="42"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Workflows
                  </text>

                  <circle cx="140" cy="145" r="4.5" fill="#0D1B2A" fillOpacity="0.85" />
                  <text
                    x="140"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Data
                  </text>

                  <circle cx="240" cy="145" r="4.5" fill="#0D1B2A" fillOpacity="0.85" />
                  <text
                    x="240"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Decisions
                  </text>

                  <circle cx="338" cy="145" r="4.5" fill="#0D1B2A" fillOpacity="0.85" />
                  <text
                    x="338"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Systems
                  </text>

                  {/* 3 Flat Abstract Disconnected Additions sitting outside the flow */}
                  {/* Addition 1: floating above Workflows */}
                  <rect
                    x="20"
                    y="50"
                    width="44"
                    height="16"
                    rx="2"
                    fill="#D6DDD9"
                    stroke="#0D1B2A"
                    strokeOpacity="0.30"
                    strokeWidth="1"
                  />
                  <line
                    x1="42"
                    y1="66"
                    x2="42"
                    y2="108"
                    stroke="#0D1B2A"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                    strokeDasharray="2.5 2.5"
                  />

                  {/* Addition 2: floating between Data and Decisions */}
                  <rect
                    x="168"
                    y="38"
                    width="44"
                    height="16"
                    rx="2"
                    fill="#D6DDD9"
                    stroke="#0D1B2A"
                    strokeOpacity="0.30"
                    strokeWidth="1"
                  />
                  <line
                    x1="190"
                    y1="54"
                    x2="190"
                    y2="100"
                    stroke="#0D1B2A"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                    strokeDasharray="2.5 2.5"
                  />

                  {/* Addition 3: floating above Systems */}
                  <rect
                    x="316"
                    y="52"
                    width="44"
                    height="16"
                    rx="2"
                    fill="#D6DDD9"
                    stroke="#0D1B2A"
                    strokeOpacity="0.30"
                    strokeWidth="1"
                  />
                  <line
                    x1="338"
                    y1="68"
                    x2="338"
                    y2="110"
                    stroke="#0D1B2A"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                    strokeDasharray="2.5 2.5"
                  />
                </svg>

                {/* --- DESKTOP VISUAL (Compact horizontal screen-fit scale) --- */}
                <svg
                  viewBox="0 0 540 110"
                  className="hidden lg:block w-full h-auto max-w-[540px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  <line
                    x1="20"
                    y1="75"
                    x2="520"
                    y2="75"
                    stroke="#0D1B2A"
                    strokeOpacity="0.22"
                    strokeWidth="1.5"
                  />

                  <polygon points="120,72 126,75 120,78" fill="#0D1B2A" fillOpacity="0.25" />
                  <polygon points="260,72 266,75 260,78" fill="#0D1B2A" fillOpacity="0.25" />
                  <polygon points="400,72 406,75 400,78" fill="#0D1B2A" fillOpacity="0.25" />

                  {/* 4 Process Nodes */}
                  <circle cx="55" cy="75" r="3.5" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="55" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>

                  <circle cx="195" cy="75" r="3.5" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="195" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>

                  <circle cx="335" cy="75" r="3.5" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="335" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Decisions
                  </text>

                  <circle cx="475" cy="75" r="3.5" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="475" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>

                  {/* Abstract Modules */}
                  <rect x="37" y="22" width="36" height="12" rx="2" fill="#D6DDD9" stroke="#0D1B2A" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="55" y1="34" x2="55" y2="56" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 2" />

                  <rect x="249" y="16" width="36" height="12" rx="2" fill="#D6DDD9" stroke="#0D1B2A" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="267" y1="28" x2="267" y2="50" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 2" />

                  <rect x="457" y="24" width="36" height="12" rx="2" fill="#D6DDD9" stroke="#0D1B2A" strokeOpacity="0.28" strokeWidth="1" />
                  <line x1="475" y1="36" x2="475" y2="58" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* STATE 02: TRANSFORM THE BUSINESS WITH AI                          */}
            {/* ----------------------------------------------------------------- */}
            <div className="pt-12 sm:pt-14 lg:py-4 pl-0 lg:pl-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[28px] sm:text-[32px] lg:text-[25px] font-sans font-medium text-[#0D1B2A] tracking-[-0.03em] leading-tight">
                  Transform the business with AI
                </h3>
                <p className="mt-1.5 lg:mt-1 text-[15px] sm:text-[16px] lg:text-[15.5px] text-[#3B4A5A] font-sans font-normal leading-relaxed">
                  Redesign how the business operates.
                </p>
              </div>

              {/* Visual Right: ONE Clean Continuous Operating Backbone */}
              <div className="mt-6 sm:mt-8 lg:mt-4 w-full flex items-center justify-center">
                {/* --- MOBILE VISUAL (220–260px high, dedicated viewport scale) --- */}
                <svg
                  viewBox="0 0 380 220"
                  className="w-full h-[220px] min-[390px]:h-[240px] sm:h-[260px] lg:hidden overflow-visible select-none"
                  aria-label="Transform the business with AI continuous operating backbone"
                >
                  {/* Clean Continuous Shared Backbone Rail (Dual-Track Precision Architecture) */}
                  <line
                    x1="20"
                    y1="141"
                    x2="360"
                    y2="141"
                    stroke="#0D1B2A"
                    strokeOpacity="0.20"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="145"
                    x2="360"
                    y2="145"
                    stroke="#D4A64A"
                    strokeWidth="2"
                  />
                  <line
                    x1="20"
                    y1="149"
                    x2="360"
                    y2="149"
                    stroke="#0D1B2A"
                    strokeOpacity="0.20"
                    strokeWidth="1"
                  />

                  {/* 4 Integrated Stations Connected Directly Into the Backbone */}
                  {/* Station 1: Workflows */}
                  <circle cx="42" cy="145" r="8" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="42" cy="145" r="3.5" fill="#D4A64A" />
                  <text
                    x="42"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Workflows
                  </text>

                  {/* Station 2: Data */}
                  <circle cx="140" cy="145" r="8" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="140" cy="145" r="3.5" fill="#D4A64A" />
                  <text
                    x="140"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Data
                  </text>

                  {/* Station 3: Decisions */}
                  <circle cx="240" cy="145" r="8" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="240" cy="145" r="3.5" fill="#D4A64A" />
                  <text
                    x="240"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Decisions
                  </text>

                  {/* Station 4: Systems */}
                  <circle cx="338" cy="145" r="8" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="338" cy="145" r="3.5" fill="#D4A64A" />
                  <text
                    x="338"
                    y="178"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fontSize="13.5"
                    fontFamily="inherit"
                    fontWeight="500"
                  >
                    Systems
                  </text>
                </svg>

                {/* --- DESKTOP VISUAL (Compact horizontal screen-fit scale) --- */}
                <svg
                  viewBox="0 0 540 110"
                  className="hidden lg:block w-full h-auto max-w-[540px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  <line
                    x1="20"
                    y1="72"
                    x2="520"
                    y2="72"
                    stroke="#0D1B2A"
                    strokeOpacity="0.20"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="75"
                    x2="520"
                    y2="75"
                    stroke="#D4A64A"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="78"
                    x2="520"
                    y2="78"
                    stroke="#0D1B2A"
                    strokeOpacity="0.20"
                    strokeWidth="1"
                  />

                  {/* 4 Integrated Stations */}
                  <circle cx="55" cy="75" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="55" cy="75" r="2.5" fill="#D4A64A" />
                  <text x="55" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>

                  <circle cx="195" cy="75" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="195" cy="75" r="2.5" fill="#D4A64A" />
                  <text x="195" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>

                  <circle cx="335" cy="75" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="335" cy="75" r="2.5" fill="#D4A64A" />
                  <text x="335" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Decisions
                  </text>

                  <circle cx="475" cy="75" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeWidth="1.5" />
                  <circle cx="475" cy="75" r="2.5" fill="#D4A64A" />
                  <text x="475" y="98" textAnchor="middle" fill="#0D1B2A" fontSize="12.5" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
