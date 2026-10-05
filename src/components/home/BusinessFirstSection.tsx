"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { homepageData } from "@/data/homepage";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function BusinessFirstSection() {
  const { businessFirst } = homepageData;
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative w-full bg-[#F5F7F6] text-[#0D1117] border-b border-[#D9DDDA] py-10 sm:py-16 md:py-24 lg:py-32 select-none overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#D9DDDA]"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.14em] uppercase text-[#6F7479]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24A]" />
              <span>OPERATING METHODOLOGY // 07 PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#0D1117] leading-[1.08]">
              {businessFirst.title}
            </h2>
          </div>
          <div className="text-[15px] text-[#6F7479] max-w-md font-normal leading-relaxed">
            {businessFirst.subtitle}
          </div>
        </motion.div>

        {/* Sequential Architectural Progression with Vertical Progress Line */}
        <div className="mt-12 relative">
          
          {/* Vertical Architectural Guide Line */}
          <div className="hidden md:block absolute left-[8px] top-6 bottom-6 w-px bg-[#D9DDDA]" />
          
          <div className="border-t border-b border-[#D9DDDA] divide-y divide-[#D9DDDA]">
            {businessFirst.steps.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0.5, x: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className={cn(
                    "py-7 pl-0 md:pl-8 pr-4 sm:pr-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-all duration-200 cursor-pointer relative group",
                    isSelected ? "bg-[#FFFFFF] shadow-xs" : "hover:bg-[#FFFFFF]/50"
                  )}
                >
                  {/* Left Node Dot on the vertical line (desktop) */}
                  <div className="hidden md:flex absolute left-[5px] top-[34px] items-center justify-center">
                    <span 
                      className={cn(
                        "h-[7px] w-[7px] rounded-full transition-all duration-250",
                        isSelected 
                          ? "bg-[#C9A24A] scale-125 shadow-xs" 
                          : "bg-[#D9DDDA] group-hover:bg-[#6F7479]"
                      )} 
                    />
                  </div>

                  {/* Col 1: Step Number (2 cols) */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span 
                      className={cn(
                        "font-mono text-base font-normal transition-colors duration-200",
                        isSelected ? "text-[#C9A24A]" : "text-[#6F7479]"
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7479]">
                      PHASE
                    </span>
                  </div>

                  {/* Col 2: Step Name (4 cols) with subtle 2px translate */}
                  <div className="md:col-span-4">
                    <h3 
                      className={cn(
                        "text-lg sm:text-xl font-sans font-medium sm:font-semibold tracking-tight transition-all duration-200",
                        isSelected 
                          ? "text-[#0D1117] translate-x-1" 
                          : "text-[#0D1117]/85 group-hover:text-[#0D1117]"
                      )}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Col 3: Step Description & Focus (6 cols) */}
                  <div className="md:col-span-6">
                    <p 
                      className={cn(
                        "text-[13.5px] leading-relaxed transition-colors duration-200",
                        isSelected ? "text-[#0D1117]" : "text-[#6F7479]"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Editorial Principle Rule Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 pt-8 border-t border-[#D9DDDA] flex flex-col md:flex-row items-baseline justify-between gap-6 text-[13px]"
        >
          <div className="max-w-2xl text-[#6F7479] leading-relaxed">
            <span className="font-medium text-[#0D1117]">Methodology principle: </span>
            Enterprise AI architectures fail when driven by generic model novelty. Lasting ROI is achieved only when systems are engineered around specific departmental handoffs, margin requirements, and existing data infrastructure.
          </div>
          <div className="text-[11px] font-mono text-[#6F7479] shrink-0 uppercase tracking-widest flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24A]" />
            <span>RIGOROUS METHODOLOGY // 2026</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
