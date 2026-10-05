"use client";

/**
 * Aiveeno — Section 02: THE SHIFT (LOCKED & REFINED)
 * 
 * Visual Architecture:
 * - LEFT (Adopt AI): 4 Isolated Islands
 *   - Each area has a genuinely differentiated internal structure:
 *     - Workflows: Sequential process routing rails
 *     - Data: Concentric data-store schema rings
 *     - Systems: Technical modular architecture block
 *     - Decisions: Decision-tree logic diamond
 *   - Disconnected local interventions; zero shared operating structure.
 *   - Visually reads as: FRAGMENTED / DISCONNECTED SILOS.
 * - RIGHT (Transform the business with AI): 1 Connected Operating Matrix
 *   - Subtler architectural grid (25% lighter) to keep focus on living business relationships.
 *   - Central Brass nexus labeled "OPERATING MODEL" anchoring all cross-relationships.
 *   - All 4 areas deeply integrated into a single unified business operation.
 *   - Visually reads as: INTEGRATED OPERATING MODEL.
 * - Layout:
 *   - Desktop: 50/50 comparison, fit-to-screen (approx 85–95vh max below sticky navbar).
 *   - Mobile: Dedicated stacked single-column editorial layout (220–260px visual height, 48–56px gap).
 * - Palette: #E8EDEB background, #0D1B2A primary, #3B4A5A secondary, #D4A64A restrained brass accent.
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
        {/* ========================================================================= */}
        <div className="max-w-[1040px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.18em] text-[#3B4A5A]">
            <span className="w-3.5 h-px bg-[#D4A64A]" />
            <span>The Shift</span>
          </div>

          {/* Main Headline */}
          <h2 className="mt-3 sm:mt-4 lg:mt-2.5 font-sans font-medium text-[36px] min-[390px]:text-[39px] sm:text-[41px] lg:text-[clamp(21px,2.3vw,32px)] text-[#0D1B2A] tracking-[-0.035em] leading-[0.98] lg:leading-[1.12]">
            Adopting AI is not the same as transforming with AI.
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 02 — COMPARISON CONTAINER                                                 */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-6 border-t border-[#0D1B2A]/[0.10]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            
            {/* ----------------------------------------------------------------- */}
            {/* STATE 01: ADOPT AI (4 DIFFERENTIATED ISOLATED ISLANDS)             */}
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

              {/* Visual Left: 4 Differentiated Islands in Empty Negative Space */}
              <div className="mt-6 sm:mt-8 lg:mt-4 w-full flex items-center justify-center">
                
                {/* --- MOBILE VISUAL (350x250, dedicated stacked scale) --- */}
                <svg
                  viewBox="0 0 350 250"
                  className="w-full h-[220px] min-[390px]:h-[240px] sm:h-[260px] lg:hidden overflow-visible select-none"
                  aria-label="Adopt AI: Four differentiated isolated business islands with no shared structure"
                >
                  {/* ISLAND 1: Workflows (Top-Left: Process Routing Rails) */}
                  <circle cx="75" cy="65" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.13" strokeWidth="1" />
                  <line x1="61" y1="61" x2="89" y2="61" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                  <line x1="61" y1="69" x2="89" y2="69" stroke="#0D1B2A" strokeOpacity="0.32" strokeWidth="1" />
                  <circle cx="67" cy="61" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                  <circle cx="83" cy="69" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                  <text x="75" y="106" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>
                  {/* Local Intervention Arc */}
                  <path d="M 49 51 A 34 34 0 0 1 101 41" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="101" cy="41" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 2: Data (Top-Right: Concentric Schema Rings) */}
                  <circle cx="275" cy="65" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="275" cy="65" r="15" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                  <circle cx="275" cy="65" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1" />
                  <circle cx="275" cy="65" r="2" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="275" y="106" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>
                  {/* Local Intervention Arc */}
                  <path d="M 249 79 A 34 34 0 0 0 301 89" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="301" cy="89" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 3: Systems (Bottom-Left: Modular Architecture Block) */}
                  <circle cx="75" cy="180" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="6 3" />
                  <rect x="67" y="172" width="16" height="16" rx="2" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <line x1="67" y1="180" x2="83" y2="180" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                  <circle cx="75" cy="180" r="2" fill="#0D1B2A" fillOpacity="0.8" />
                  <text x="75" y="221" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>
                  {/* Local Intervention Arc */}
                  <path d="M 47 193 A 34 34 0 0 1 89 210" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="89" cy="210" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 4: Decisions (Bottom-Right: Logic Gate Diamond) */}
                  <circle cx="275" cy="180" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />
                  <polygon points="275,168 286,180 275,192 264,180" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <circle cx="275" cy="180" r="2" fill="#0D1B2A" fillOpacity="0.8" />
                  <line x1="258" y1="180" x2="262" y2="180" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                  <line x1="288" y1="180" x2="292" y2="180" stroke="#0D1B2A" strokeOpacity="0.3" strokeWidth="1" />
                  <text x="275" y="221" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Decisions
                  </text>
                </svg>

                {/* --- DESKTOP VISUAL (440x230, compact horizontal screen-fit scale) --- */}
                <svg
                  viewBox="0 0 440 230"
                  className="hidden lg:block w-full h-auto max-w-[440px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  {/* ISLAND 1: Workflows (Top-Left: Process Routing Rails) */}
                  <circle cx="100" cy="60" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.13" strokeWidth="1" />
                  <line x1="86" y1="56" x2="114" y2="56" stroke="#0D1B2A" strokeOpacity="0.30" strokeWidth="1" />
                  <line x1="86" y1="64" x2="114" y2="64" stroke="#0D1B2A" strokeOpacity="0.30" strokeWidth="1" />
                  <circle cx="92" cy="56" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                  <circle cx="108" cy="64" r="1.8" fill="#0D1B2A" fillOpacity="0.75" />
                  <text x="100" y="100" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>
                  {/* Local intervention */}
                  <path d="M 74 46 A 34 34 0 0 1 126 36" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="126" cy="36" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 2: Data (Top-Right: Concentric Schema Rings) */}
                  <circle cx="340" cy="60" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="340" cy="60" r="15" fill="none" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                  <circle cx="340" cy="60" r="6" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.42" strokeWidth="1" />
                  <circle cx="340" cy="60" r="2" fill="#0D1B2A" fillOpacity="0.75" />
                  <text x="340" y="100" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>
                  {/* Local intervention */}
                  <path d="M 314 74 A 34 34 0 0 0 366 84" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="366" cy="84" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 3: Systems (Bottom-Left: Modular Architecture Block) */}
                  <circle cx="100" cy="165" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="6 3" />
                  <rect x="93" y="158" width="14" height="14" rx="1.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.42" strokeWidth="1.2" />
                  <line x1="93" y1="165" x2="107" y2="165" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1" />
                  <circle cx="100" cy="165" r="2" fill="#0D1B2A" fillOpacity="0.75" />
                  <text x="100" y="205" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>
                  {/* Local intervention */}
                  <path d="M 72 178 A 34 34 0 0 1 114 195" fill="none" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.5" />
                  <circle cx="114" cy="195" r="2" fill="#0D1B2A" fillOpacity="0.6" />

                  {/* ISLAND 4: Decisions (Bottom-Right: Logic Gate Diamond) */}
                  <circle cx="340" cy="165" r="28" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />
                  <polygon points="340,154 349,165 340,176 331,165" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.42" strokeWidth="1.2" />
                  <circle cx="340" cy="165" r="2" fill="#0D1B2A" fillOpacity="0.75" />
                  <line x1="324" y1="165" x2="328" y2="165" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="352" y1="165" x2="356" y2="165" stroke="#0D1B2A" strokeOpacity="0.25" strokeWidth="1" />
                  <text x="340" y="205" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Decisions
                  </text>
                </svg>

              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* STATE 02: TRANSFORM THE BUSINESS WITH AI (OPERATING MODEL MATRIX)  */}
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

              {/* Visual Right: 1 Shared Continuous System Field / Operating Model Matrix */}
              <div className="mt-6 sm:mt-8 lg:mt-4 w-full flex items-center justify-center">
                
                {/* --- MOBILE VISUAL (350x250, dedicated stacked scale) --- */}
                <svg
                  viewBox="0 0 350 250"
                  className="w-full h-[220px] min-[390px]:h-[240px] sm:h-[260px] lg:hidden overflow-visible select-none"
                  aria-label="Transform the business with AI: Operating model uniting Workflows, Data, Decisions and Systems"
                >
                  {/* Subtle Shared Operating Field Matrix (25% Lighter / Non-Dominant) */}
                  <rect
                    x="30"
                    y="25"
                    width="290"
                    height="195"
                    fill="none"
                    stroke="#0D1B2A"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />
                  {/* Delicate Corner Tick Markers */}
                  <path d="M 26 25 L 30 25 L 30 21" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" />
                  <path d="M 324 25 L 320 25 L 320 21" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" />
                  <path d="M 26 220 L 30 220 L 30 224" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" />
                  <path d="M 324 220 L 320 220 L 320 224" fill="none" stroke="#0D1B2A" strokeOpacity="0.15" strokeWidth="1" />

                  {/* Faint Internal Coordinate Guides */}
                  <line x1="30" y1="122.5" x2="320" y2="122.5" stroke="#0D1B2A" strokeOpacity="0.06" strokeWidth="1" />
                  <line x1="175" y1="25" x2="175" y2="220" stroke="#0D1B2A" strokeOpacity="0.06" strokeWidth="1" />

                  {/* Active Relationship Framework Linking All 4 Areas */}
                  <line x1="75" y1="65" x2="275" y2="65" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="275" y1="65" x2="275" y2="180" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="275" y1="180" x2="75" y2="180" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="75" y1="180" x2="75" y2="65" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />

                  {/* Cross-Diagonal Interconnections Converging at the Nexus */}
                  <line x1="75" y1="65" x2="275" y2="180" stroke="#0D1B2A" strokeOpacity="0.16" strokeWidth="1" />
                  <line x1="75" y1="180" x2="275" y2="65" stroke="#0D1B2A" strokeOpacity="0.16" strokeWidth="1" />

                  {/* Central Operating Model Brass Integration Nexus */}
                  <circle cx="175" cy="122.5" r="9" fill="#E8EDEB" stroke="#D4A64A" strokeWidth="1.2" />
                  <circle cx="175" cy="122.5" r="2.8" fill="#D4A64A" />
                  <text
                    x="175"
                    y="141"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fillOpacity="0.75"
                    fontSize="9"
                    fontFamily="monospace"
                    letterSpacing="0.08em"
                  >
                    OPERATING MODEL
                  </text>

                  {/* 4 Coordinated Stations */}
                  {/* Workflows */}
                  <circle cx="75" cy="65" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <circle cx="75" cy="65" r="2.5" fill="#D4A64A" />
                  <text x="75" y="106" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>

                  {/* Data */}
                  <circle cx="275" cy="65" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <circle cx="275" cy="65" r="2.5" fill="#D4A64A" />
                  <text x="275" y="106" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>

                  {/* Systems */}
                  <circle cx="75" cy="180" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <circle cx="75" cy="180" r="2.5" fill="#D4A64A" />
                  <text x="75" y="221" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>

                  {/* Decisions */}
                  <circle cx="275" cy="180" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.45" strokeWidth="1.2" />
                  <circle cx="275" cy="180" r="2.5" fill="#D4A64A" />
                  <text x="275" y="221" textAnchor="middle" fill="#0D1B2A" fontSize="13" fontFamily="inherit" fontWeight="500">
                    Decisions
                  </text>
                </svg>

                {/* --- DESKTOP VISUAL (440x230, compact horizontal screen-fit scale) --- */}
                <svg
                  viewBox="0 0 440 230"
                  className="hidden lg:block w-full h-auto max-w-[440px] mx-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  {/* Subtle Shared Operating Field Matrix (25% Lighter / Non-Dominant) */}
                  <rect
                    x="50"
                    y="20"
                    width="340"
                    height="190"
                    fill="none"
                    stroke="#0D1B2A"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />
                  {/* Delicate Corner Tick Markers */}
                  <path d="M 46 20 L 50 20 L 50 16" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />
                  <path d="M 394 20 L 390 20 L 390 16" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />
                  <path d="M 46 210 L 50 210 L 50 214" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />
                  <path d="M 394 210 L 390 210 L 390 214" fill="none" stroke="#0D1B2A" strokeOpacity="0.14" strokeWidth="1" />

                  {/* Faint Internal Coordinate Guides */}
                  <line x1="50" y1="115" x2="390" y2="115" stroke="#0D1B2A" strokeOpacity="0.06" strokeWidth="1" />
                  <line x1="220" y1="20" x2="220" y2="210" stroke="#0D1B2A" strokeOpacity="0.06" strokeWidth="1" />

                  {/* Active Relationship Framework Linking All 4 Areas */}
                  <line x1="100" y1="60" x2="340" y2="60" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="340" y1="60" x2="340" y2="165" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="340" y1="165" x2="100" y2="165" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />
                  <line x1="100" y1="165" x2="100" y2="60" stroke="#0D1B2A" strokeOpacity="0.22" strokeWidth="1.2" />

                  {/* Cross-Diagonal Interconnections Converging at the Nexus */}
                  <line x1="100" y1="60" x2="340" y2="165" stroke="#0D1B2A" strokeOpacity="0.16" strokeWidth="1" />
                  <line x1="100" y1="165" x2="340" y2="60" stroke="#0D1B2A" strokeOpacity="0.16" strokeWidth="1" />

                  {/* Central Operating Model Brass Integration Nexus */}
                  <circle cx="220" cy="115" r="9" fill="#E8EDEB" stroke="#D4A64A" strokeWidth="1.2" />
                  <circle cx="220" cy="115" r="2.8" fill="#D4A64A" />
                  <text
                    x="220"
                    y="134"
                    textAnchor="middle"
                    fill="#0D1B2A"
                    fillOpacity="0.75"
                    fontSize="8.5"
                    fontFamily="monospace"
                    letterSpacing="0.08em"
                  >
                    OPERATING MODEL
                  </text>

                  {/* 4 Coordinated Stations */}
                  {/* Workflows */}
                  <circle cx="100" cy="60" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.40" strokeWidth="1.2" />
                  <circle cx="100" cy="60" r="2.5" fill="#D4A64A" />
                  <text x="100" y="100" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Workflows
                  </text>

                  {/* Data */}
                  <circle cx="340" cy="60" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.40" strokeWidth="1.2" />
                  <circle cx="340" cy="60" r="2.5" fill="#D4A64A" />
                  <text x="340" y="100" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Data
                  </text>

                  {/* Systems */}
                  <circle cx="100" cy="165" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.40" strokeWidth="1.2" />
                  <circle cx="100" cy="165" r="2.5" fill="#D4A64A" />
                  <text x="100" y="205" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Systems
                  </text>

                  {/* Decisions */}
                  <circle cx="340" cy="165" r="8.5" fill="#E8EDEB" stroke="#0D1B2A" strokeOpacity="0.40" strokeWidth="1.2" />
                  <circle cx="340" cy="165" r="2.5" fill="#D4A64A" />
                  <text x="340" y="205" textAnchor="middle" fill="#0D1B2A" fontSize="12" fontFamily="inherit" fontWeight="500">
                    Decisions
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
