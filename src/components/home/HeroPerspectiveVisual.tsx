"use client";

import { motion } from "motion/react";

export default function HeroPerspectiveVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[88%] sm:w-full max-w-[560px] h-[160px] sm:h-[200px] lg:h-[220px] mx-auto mt-8 sm:mt-10 lg:mt-11 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 45%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 45%, transparent 100%)",
      }}
    >
      {/* Central Soft Ambient Graphite/Silver Light Diffusion */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] lg:w-[460px] h-[160px] lg:h-[200px] rounded-full bg-gradient-to-b from-[#25252A]/30 via-[#131316]/20 to-transparent blur-[70px]"
      />

      {/* 3D Perspective Stage */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective: "850px",
          perspectiveOrigin: "50% 40%",
        }}
      >
        <motion.div 
          className="relative w-[520px] sm:w-[580px] h-[320px] flex items-center justify-center"
          style={{
            transform: "rotateX(58deg) rotateZ(0deg)",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateZ: [0, 0.5, 0, -0.5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* SVG Perspective System: Tiered Geometric Obsidian/Silver Planes */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 600 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient for hairline grid lines */}
              <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#71717A" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#3F3F46" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#18181B" stopOpacity="0" />
              </radialGradient>

              {/* Surface Facet Gradients */}
              <linearGradient id="facet-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#24242A" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#161619" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="facet-mid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1C1C20" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0E0E10" stopOpacity="0.45" />
              </linearGradient>

              <linearGradient id="facet-base" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#151518" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0A0A0C" stopOpacity="0.2" />
              </linearGradient>

              {/* Silver Specular Hairline Edges */}
              <linearGradient id="edge-silver-bright" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3F3F46" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A1A1AA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3F3F46" stopOpacity="0.3" />
              </linearGradient>

              <linearGradient id="edge-silver-muted" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#52525B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#27272A" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Receding Perspective Grid Lattice */}
            <g stroke="url(#grid-fade)" strokeWidth="0.75">
              <line x1="30" y1="60" x2="570" y2="60" />
              <line x1="30" y1="100" x2="570" y2="100" />
              <line x1="30" y1="140" x2="570" y2="140" />
              <line x1="30" y1="180" x2="570" y2="180" />
              <line x1="30" y1="220" x2="570" y2="220" />
              <line x1="30" y1="260" x2="570" y2="260" />
              <line x1="30" y1="300" x2="570" y2="300" />

              <line x1="80" y1="40" x2="20" y2="320" />
              <line x1="160" y1="40" x2="120" y2="320" />
              <line x1="230" y1="40" x2="220" y2="320" />
              <line x1="300" y1="40" x2="300" y2="320" stroke="#52525B" strokeOpacity="0.35" />
              <line x1="370" y1="40" x2="380" y2="320" />
              <line x1="440" y1="40" x2="480" y2="320" />
              <line x1="520" y1="40" x2="580" y2="320" />
            </g>

            {/* Tier 1: Outer Structural Base Platform */}
            <polygon
              points="300,70 460,135 460,230 300,295 140,230 140,135"
              fill="url(#facet-base)"
              stroke="#27272A"
              strokeWidth="0.8"
            />

            {/* Tier 2: Mid Elevated Geometric Step */}
            <polygon
              points="300,95 425,145 425,220 300,270 175,220 175,145"
              fill="url(#facet-mid)"
              stroke="url(#edge-silver-muted)"
              strokeWidth="0.9"
            />

            {/* Tier 3: Core Monolithic Obsidian Stage */}
            <polygon
              points="300,120 390,158 390,210 300,248 210,210 210,158"
              fill="url(#facet-top)"
              stroke="url(#edge-silver-bright)"
              strokeWidth="1.2"
            />

            {/* Inner Isometric Structural Bridges */}
            <g stroke="#71717A" strokeWidth="0.75" strokeOpacity="0.35">
              <line x1="300" y1="120" x2="300" y2="248" />
              <line x1="210" y1="158" x2="390" y2="210" />
              <line x1="390" y1="158" x2="210" y2="210" />
            </g>

            {/* Center Geometric Apex Point */}
            <polygon
              points="300,165 330,178 330,195 300,208 270,195 270,178"
              fill="#1C1C22"
              stroke="#A1A1AA"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
            <circle cx="300" cy="186.5" r="2" fill="#FFFFFF" fillOpacity="0.85" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
