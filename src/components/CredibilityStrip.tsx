"use client";

export default function CredibilityStrip() {
  const ecosystemPartners = [
    { name: "Amazon Web Services", role: "Advanced Tier" },
    { name: "Microsoft Azure", role: "Enterprise Partner" },
    { name: "Google Cloud", role: "Premier Partner" },
    { name: "Snowflake", role: "Select Partner" },
    { name: "Databricks", role: "AI & Data Specialist" },
    { name: "SOC 2 Type II", role: "Certified Practice" },
  ];

  return (
    <section className="border-b border-[#E4E0D7] bg-[#FCFBF9] py-6 sm:py-7">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.14em] uppercase text-[#6F7378]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#141414]/40" />
            <span>Trusted Enterprise & Cloud Stack</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex items-center gap-6 sm:gap-8 lg:gap-10">
            {ecosystemPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-start md:items-center text-left md:text-center group"
              >
                <span className="text-xs font-semibold text-[#141414] tracking-tight group-hover:text-black transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-[#6F7378] font-mono tracking-wide mt-0.5">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
