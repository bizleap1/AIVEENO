"use client";

/**
 * Aiveeno — Section 03: WHY OUR APPROACH
 * 
 * Philosophy: "AI starts with the business."
 * Executive consulting aesthetic: editorial, purposeful diagrams, minimal, and confident.
 * 
 * 3 Core Visual Principles:
 * - 01 — BUSINESS FIRST
 *   - Visual: Business Operating Map (Central business priority surrounded by Operations,
 *     Sales, Customer Experience, Finance, and Data; high-leverage opportunity highlighted in Brass).
 * - 02 — VALUE BEFORE TECHNOLOGY
 *   - Visual: Opportunity Matrix (Business Impact × Feasibility 2x2 matrix, several opportunity
 *     points with high-value priority target highlighted in Brass).
 * - 03 — BUILD FOR ADOPTION
 *   - Visual: Integrated Operating Model (Operating structure uniting People, Workflows,
 *     Data, and Technology around an adoption core).
 */

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative w-full bg-[#F5F7F6] text-[#0D1B2A] select-none pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-11 lg:pb-16 xl:pt-12 xl:pb-18 overflow-hidden scroll-mt-[76px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 01 — SECTION HEADER (Exact Rhythm: 40–50px after navbar -> Eyebrow -> 24–28px -> Headline) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] lg:gap-12 items-end justify-between">
          
          {/* Eyebrow + Headline */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
              <span className="w-3.5 h-px bg-[#D4A64A]" />
              <span>Why Our Approach</span>
            </div>

            {/* Main Headline (24–28px gap below eyebrow) */}
            <h2 className="mt-6 sm:mt-7 font-sans font-medium text-[34px] min-[390px]:text-[38px] sm:text-[44px] lg:text-[48px] xl:text-[52px] text-[#0D1B2A] tracking-[-0.035em] leading-[1.02] lg:leading-[1.04]">
              AI starts with the business.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="mt-4 lg:mt-0 flex flex-col justify-end">
            <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-[#3B4A5A] leading-[1.52] font-normal max-w-[480px]">
              We find where AI can create real operational value, design the right architectural roadmap, and embed it into everyday execution that scales.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 02 — 3 LARGE PURPOSEFUL VISUAL PRINCIPLES (36–40px below headline)         */}
        {/* ========================================================================= */}
        <div className="mt-9 sm:mt-10 lg:mt-10 border border-[#0D1B2A]/[0.08] bg-[#F5F7F6]">
          <div className="grid grid-cols-1 divide-y lg:divide-y-0 lg:grid-cols-3 lg:divide-x divide-[#0D1B2A]/[0.08] items-stretch">
              
              {/* ============================================================= */}
              {/* PRINCIPLE 01: BUSINESS FIRST                                   */}
              {/* ============================================================= */}
              <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-9 min-h-[480px] lg:min-h-[510px] overflow-hidden transition-colors duration-300 hover:bg-[#E8EDEB]/30">
                
                {/* Text Block (~35% visual weight) */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
                    <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                    <span>01 — PRINCIPLE</span>
                  </div>

                  <h3 className="mt-3.5 text-[22px] sm:text-[23px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A]">
                    Business First
                  </h3>

                  <p className="mt-2 text-[14.5px] font-sans text-[#3B4A5A] leading-[1.5] max-w-[340px] lg:max-w-none">
                    Start with business priorities, workflows and operational reality.
                  </p>
                </div>

                {/* Dominant Diagram (~65% visual weight): Business Operating Map (Radial / Circular) */}
                <div className="my-5 lg:my-6 w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-[250px] sm:h-[265px] lg:h-[280px] select-none overflow-visible"
                    aria-label="Business Operating Map: Understanding business priorities across operations, sales, customer experience and finance before selecting technology"
                  >
                    {/* Concentric Reference Rings */}
                    <circle cx="180" cy="130" r="78" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeDasharray="3 3" />
                    <circle cx="180" cy="130" r="108" fill="none" stroke="#0D1B2A" strokeOpacity="0.035" />
                    
                    {/* Standard Connecting Links */}
                    <line x1="180" y1="130" x2="180" y2="50" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                    <line x1="180" y1="130" x2="262" y2="188" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                    <line x1="180" y1="130" x2="98" y2="188" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />
                    <line x1="180" y1="130" x2="98" y2="88" stroke="#0D1B2A" strokeOpacity="0.18" strokeWidth="1" />

                    {/* HIGHLIGHTED BUSINESS OPPORTUNITY: Link from Center to Customer Experience */}
                    <line x1="180" y1="130" x2="262" y2="88" stroke="#D4A64A" strokeWidth="1.6" />
                    <line x1="180" y1="130" x2="262" y2="88" stroke="#D4A64A" strokeOpacity="0.25" strokeWidth="5" />

                    {/* CENTER: Business Priority Hub */}
                    <circle cx="180" cy="130" r="32" fill="#F5F7F6" stroke="#0D1B2A" strokeWidth="1.4" />
                    <circle cx="180" cy="130" r="5" fill="#0D1B2A" />
                    <text x="180" y="126" textAnchor="middle" fill="#0D1B2A" fontSize="9" fontWeight="600" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" letterSpacing="0.04em">
                      BUSINESS
                    </text>
                    <text x="180" y="138" textAnchor="middle" fill="#0D1B2A" fontSize="9" fontWeight="600" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" letterSpacing="0.04em">
                      PRIORITY
                    </text>

                    {/* Surrounding Business Areas */}
                    {/* 01: Operations (Top) */}
                    <circle cx="180" cy="50" r="10" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1" />
                    <circle cx="180" cy="50" r="2.5" fill="#0D1B2A" fillOpacity="0.75" />
                    <text x="180" y="32" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="500">
                      Operations
                    </text>

                    {/* 02: Customer Experience (Top-Right: High-Leverage Opportunity Node) */}
                    <circle cx="262" cy="88" r="14" fill="#F5F7F6" stroke="#D4A64A" strokeWidth="1.5" />
                    <circle cx="262" cy="88" r="4" fill="#D4A64A" />
                    <text x="262" y="58" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600">
                      Customer Experience
                    </text>
                    <text x="262" y="70" textAnchor="middle" fill="#D4A64A" fontSize="8.5" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600" letterSpacing="0.05em">
                      OPPORTUNITY
                    </text>

                    {/* 03: Sales & Revenue (Bottom-Right) */}
                    <circle cx="262" cy="188" r="10" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1" />
                    <circle cx="262" cy="188" r="2.5" fill="#0D1B2A" fillOpacity="0.75" />
                    <text x="262" y="214" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="500">
                      Sales & Revenue
                    </text>

                    {/* 04: Finance (Bottom-Left) */}
                    <circle cx="98" cy="188" r="10" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1" />
                    <circle cx="98" cy="188" r="2.5" fill="#0D1B2A" fillOpacity="0.75" />
                    <text x="98" y="214" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="500">
                      Finance
                    </text>

                    {/* 05: Data & Systems (Top-Left) */}
                    <circle cx="98" cy="88" r="10" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.35" strokeWidth="1" />
                    <circle cx="98" cy="88" r="2.5" fill="#0D1B2A" fillOpacity="0.75" />
                    <text x="98" y="70" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="500">
                      Data & Systems
                    </text>
                  </svg>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 flex items-center justify-between border-t border-[#0D1B2A]/[0.06] pt-3.5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.08em] text-[#3B4A5A]/80 transition-colors duration-300 group-hover:text-[#0D1B2A]">
                    <span className="h-1 w-1 rounded-full bg-[#D4A64A]" />
                    <span>OPERATING REALITY</span>
                  </div>
                  <span className="text-[11.5px] font-sans font-medium text-[#3B4A5A]/40 transition-colors duration-300 group-hover:text-[#D4A64A]">
                    01
                  </span>
                </div>

              </div>

              {/* ============================================================= */}
              {/* PRINCIPLE 02: VALUE BEFORE TECHNOLOGY                         */}
              {/* ============================================================= */}
              <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-9 min-h-[480px] lg:min-h-[510px] overflow-hidden transition-colors duration-300 hover:bg-[#E8EDEB]/30">
                
                {/* Text Block (~35% visual weight) */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
                    <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                    <span>02 — PRINCIPLE</span>
                  </div>

                  <h3 className="mt-3.5 text-[22px] sm:text-[23px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A]">
                    Value Before Technology
                  </h3>

                  <p className="mt-2 text-[14.5px] font-sans text-[#3B4A5A] leading-[1.5] max-w-[340px] lg:max-w-none">
                    Prioritise opportunities by business impact and practical feasibility.
                  </p>
                </div>

                {/* Dominant Diagram (~65% visual weight): Simplified Opportunity Matrix (Cartesian 2x2) */}
                <div className="my-5 lg:my-6 w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-[250px] sm:h-[265px] lg:h-[280px] select-none overflow-visible"
                    aria-label="Opportunity Matrix: Prioritising opportunities by business impact and practical feasibility"
                  >
                    {/* Matrix Outer Framing Box */}
                    <rect x="50" y="32" width="270" height="185" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeWidth="1" />
                    
                    {/* Top-Right Quadrant: Subtle Restrained Brass Zone */}
                    <rect x="185" y="32" width="135" height="92.5" fill="#D4A64A" fillOpacity="0.045" />
                    <path d="M 314 32 L 320 32 L 320 38" fill="none" stroke="#D4A64A" strokeWidth="1.2" />

                    {/* Quadrant Divider Grid Lines */}
                    <line x1="185" y1="32" x2="185" y2="217" stroke="#0D1B2A" strokeOpacity="0.12" strokeDasharray="3 3" />
                    <line x1="50" y1="124.5" x2="320" y2="124.5" stroke="#0D1B2A" strokeOpacity="0.12" strokeDasharray="3 3" />

                    {/* Main Axes */}
                    <line x1="50" y1="217" x2="50" y2="24" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                    <line x1="50" y1="217" x2="328" y2="217" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />

                    {/* Axis Arrow Ticks */}
                    <path d="M 47 27 L 50 21 L 53 27" fill="none" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />
                    <path d="M 324 214 L 330 217 L 324 220" fill="none" stroke="#0D1B2A" strokeOpacity="0.5" strokeWidth="1.2" />

                    {/* Axis Labels (Single font: Instrument Sans) */}
                    <text x="45" y="23" textAnchor="end" fill="#0D1B2A" fontSize="9" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600" letterSpacing="0.04em">
                      IMPACT
                    </text>
                    <text x="328" y="233" textAnchor="end" fill="#0D1B2A" fontSize="9" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600" letterSpacing="0.04em">
                      FEASIBILITY →
                    </text>

                    {/* 5-6 Opportunity Points Across Matrix */}
                    {/* Lower & Left Opportunities (Muted) */}
                    <circle cx="102" cy="175" r="3.5" fill="#3B4A5A" fillOpacity="0.25" />
                    <circle cx="135" cy="150" r="3" fill="#3B4A5A" fillOpacity="0.20" />
                    <circle cx="112" cy="80" r="3.5" fill="#3B4A5A" fillOpacity="0.30" />
                    <circle cx="270" cy="175" r="4" fill="#3B4A5A" fillOpacity="0.35" />

                    {/* Secondary High-Feasibility Candidate in Top-Right */}
                    <circle cx="218" cy="68" r="4" fill="#D4A64A" fillOpacity="0.5" />

                    {/* Primary Highlighted High-Value Opportunity (Top-Right Zone) */}
                    <circle cx="260" cy="74" r="16" fill="none" stroke="#D4A64A" strokeOpacity="0.25" strokeDasharray="2 2" />
                    <circle cx="260" cy="74" r="11" fill="#F5F7F6" stroke="#D4A64A" strokeWidth="1.5" />
                    <circle cx="260" cy="74" r="3.5" fill="#D4A64A" />

                    {/* Single Clear Label: "High-value opportunity" */}
                    <text
                      x="260"
                      y="104"
                      textAnchor="middle"
                      fill="#0D1B2A"
                      fontSize="10.5"
                      fontFamily="var(--font-sans), 'Instrument Sans', sans-serif"
                      fontWeight="600"
                    >
                      High-value opportunity
                    </text>
                  </svg>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 flex items-center justify-between border-t border-[#0D1B2A]/[0.06] pt-3.5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.08em] text-[#3B4A5A]/80 transition-colors duration-300 group-hover:text-[#0D1B2A]">
                    <span className="h-1 w-1 rounded-full bg-[#D4A64A]" />
                    <span>IMPACT × FEASIBILITY</span>
                  </div>
                  <span className="text-[11.5px] font-sans font-medium text-[#3B4A5A]/40 transition-colors duration-300 group-hover:text-[#D4A64A]">
                    02
                  </span>
                </div>

              </div>

              {/* ============================================================= */}
              {/* PRINCIPLE 03: BUILD FOR ADOPTION                              */}
              {/* ============================================================= */}
              <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-9 min-h-[480px] lg:min-h-[510px] overflow-hidden transition-colors duration-300 hover:bg-[#E8EDEB]/30">
                
                {/* Text Block (~35% visual weight) */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#3B4A5A]">
                    <span className="h-px w-3 bg-[#D4A64A] transition-all duration-300 ease-out group-hover:w-6" />
                    <span>03 — PRINCIPLE</span>
                  </div>

                  <h3 className="mt-3.5 text-[22px] sm:text-[23px] font-sans font-medium tracking-[-0.025em] text-[#0D1B2A]">
                    Build for Adoption
                  </h3>

                  <p className="mt-2 text-[14.5px] font-sans text-[#3B4A5A] leading-[1.5] max-w-[340px] lg:max-w-none">
                    Design solutions around the way people, workflows and systems actually operate.
                  </p>
                </div>

                {/* Dominant Diagram (~65% visual weight): Connected Square Operating Structure (100% Orthogonal / Square) */}
                <div className="my-5 lg:my-6 w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-[250px] sm:h-[265px] lg:h-[280px] select-none overflow-visible"
                    aria-label="Operating Model: Interlocked square operating structure connecting People, Workflows, Data, and Technology"
                  >
                    {/* Outer Boundary Operating Frame */}
                    <rect x="48" y="24" width="264" height="206" rx="4" fill="none" stroke="#0D1B2A" strokeOpacity="0.08" strokeWidth="1" />
                    
                    {/* Corner Coordinate Bracket Ticks */}
                    <path d="M 42 24 L 48 24 L 48 18" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 318 24 L 312 24 L 312 18" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 42 230 L 48 230 L 48 236" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                    <path d="M 318 230 L 312 230 L 312 236" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />

                    {/* Connected Square Structural Rails (Dominant Square Framework) */}
                    {/* Upper Rail: People <-> Workflows */}
                    <line x1="112" y1="62" x2="248" y2="62" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                    {/* Lower Rail: Technology <-> Data */}
                    <line x1="112" y1="192" x2="248" y2="192" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                    {/* Left Rail: People <-> Technology */}
                    <line x1="96" y1="78" x2="96" y2="176" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />
                    {/* Right Rail: Workflows <-> Data */}
                    <line x1="264" y1="78" x2="264" y2="176" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1.6" />

                    {/* Diagonal Convergence Alignment Ties to Center */}
                    <line x1="96" y1="62" x2="136" y2="104" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                    <line x1="264" y1="62" x2="224" y2="104" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                    <line x1="96" y1="192" x2="136" y2="150" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />
                    <line x1="264" y1="192" x2="224" y2="150" stroke="#0D1B2A" strokeOpacity="0.10" strokeDasharray="3 3" strokeWidth="1" />

                    {/* Direct Orthogonal Inflow Conduits into Center Operating Model Module */}
                    {/* Top Inflow */}
                    <line x1="180" y1="62" x2="180" y2="104" stroke="#D4A64A" strokeWidth="1.5" />
                    <rect x="178" y="60" width="4" height="4" fill="#D4A64A" />
                    {/* Bottom Inflow */}
                    <line x1="180" y1="192" x2="180" y2="150" stroke="#D4A64A" strokeWidth="1.5" />
                    <rect x="178" y="190" width="4" height="4" fill="#D4A64A" />
                    {/* Left Inflow */}
                    <line x1="96" y1="127" x2="136" y2="127" stroke="#D4A64A" strokeWidth="1.5" />
                    <rect x="94" y="125" width="4" height="4" fill="#D4A64A" />
                    {/* Right Inflow */}
                    <line x1="264" y1="127" x2="224" y2="127" stroke="#D4A64A" strokeWidth="1.5" />
                    <rect x="262" y="125" width="4" height="4" fill="#D4A64A" />

                    {/* CENTER: Connected Square Operating Model Core Module */}
                    <rect x="136" y="104" width="88" height="46" rx="4" fill="#F5F7F6" stroke="#D4A64A" strokeWidth="1.5" />
                    <rect x="140" y="108" width="80" height="38" rx="2" fill="none" stroke="#D4A64A" strokeOpacity="0.25" strokeWidth="0.8" />
                    <rect x="178" y="125" width="4" height="4" fill="#D4A64A" />
                    <text x="180" y="121" textAnchor="middle" fill="#0D1B2A" fontSize="8" fontWeight="600" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" letterSpacing="0.08em">
                      OPERATING
                    </text>
                    <text x="180" y="133" textAnchor="middle" fill="#0D1B2A" fontSize="8" fontWeight="600" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" letterSpacing="0.08em">
                      MODEL
                    </text>

                    {/* 4 OPERATIONAL SQUARE STATIONS */}
                    {/* Station 01: People (Top-Left) */}
                    <rect x="80" y="47" width="32" height="30" rx="4" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                    <circle cx="96" cy="57" r="2.8" fill="#0D1B2A" />
                    <path d="M 89 67 A 7 7 0 0 1 103 67" fill="none" stroke="#0D1B2A" strokeWidth="1.2" />
                    <text x="96" y="38" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600">
                      People
                    </text>

                    {/* Station 02: Workflows (Top-Right) */}
                    <rect x="248" y="47" width="32" height="30" rx="4" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                    <line x1="255" y1="58" x2="273" y2="58" stroke="#0D1B2A" strokeWidth="1.2" />
                    <line x1="255" y1="65" x2="273" y2="65" stroke="#0D1B2A" strokeWidth="1.2" />
                    <text x="264" y="38" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600">
                      Workflows
                    </text>

                    {/* Station 03: Technology (Bottom-Left) */}
                    <rect x="80" y="177" width="32" height="30" rx="4" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                    <rect x="88" y="184" width="16" height="16" rx="2" fill="none" stroke="#0D1B2A" strokeWidth="1.1" />
                    <line x1="91" y1="192" x2="101" y2="192" stroke="#0D1B2A" strokeWidth="1.1" />
                    <text x="96" y="222" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600">
                      Technology
                    </text>

                    {/* Station 04: Data (Bottom-Right) */}
                    <rect x="248" y="177" width="32" height="30" rx="4" fill="#F5F7F6" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                    <rect x="256" y="184" width="7" height="7" rx="1" fill="#0D1B2A" fillOpacity="0.75" />
                    <rect x="265" y="184" width="7" height="7" rx="1" fill="#0D1B2A" fillOpacity="0.30" />
                    <rect x="256" y="193" width="7" height="7" rx="1" fill="#0D1B2A" fillOpacity="0.30" />
                    <rect x="265" y="193" width="7" height="7" rx="1" fill="#0D1B2A" fillOpacity="0.75" />
                    <text x="264" y="222" textAnchor="middle" fill="#0D1B2A" fontSize="11" fontFamily="var(--font-sans), 'Instrument Sans', sans-serif" fontWeight="600">
                      Data
                    </text>
                  </svg>
                </div>

                {/* Footer Metadata */}
                <div className="relative z-10 flex items-center justify-between border-t border-[#0D1B2A]/[0.06] pt-3.5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.08em] text-[#3B4A5A]/80 transition-colors duration-300 group-hover:text-[#0D1B2A]">
                    <span className="h-1 w-1 rounded-full bg-[#D4A64A]" />
                    <span>OPERATING INTEGRATION</span>
                  </div>
                  <span className="text-[11.5px] font-sans font-medium text-[#3B4A5A]/40 transition-colors duration-300 group-hover:text-[#D4A64A]">
                    03
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
  );
}
