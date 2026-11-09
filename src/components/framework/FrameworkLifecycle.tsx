"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Transformation Framework Page: Section 03
 * THE TRANSFORMATION LIFECYCLE (#111312 Dark Graphite Surface)
 * 
 * Accenture-Inspired Enterprise Editorial Lifecycle Composition:
 * - Ultra-clean typographic discipline: Eliminated repetitive horizontal table rules
 *   between stages and chapters for an open, premium, executive layout.
 * - Single grounding header divider + single subtle footer footnote divider.
 * - 3 Visually Distinct Editorial Chapters:
 *   - CHAPTER 01 · UNDERSTAND (Discovery, Assessment, Prioritization)
 *   - CHAPTER 02 · ENGINEER (Solution Design, Build)
 *   - CHAPTER 03 · ADOPT & REFINE (Adoption, Optimization)
 * - Large, readable stage typography (~21–24px, Instrument Sans 500) with generous breathing room.
 * - Understated closed-loop return relationship from Optimization back to ongoing Discovery.
 * - Compact natural height (~400–450px) perfectly fitting below the sticky navbar.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

interface StageItem {
  number: string;
  title: string;
}

interface ChapterGroup {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  stages: StageItem[];
}

const LIFECYCLE_CHAPTERS: ChapterGroup[] = [
  {
    id: "understand",
    chapterNumber: "01",
    title: "Understand",
    subtitle: "Strategy, workflows & operational realities",
    stages: [
      { number: "01", title: "Discovery" },
      { number: "02", title: "Assessment" },
      { number: "03", title: "Prioritization" },
    ],
  },
  {
    id: "engineer",
    chapterNumber: "02",
    title: "Engineer",
    subtitle: "Architecture, models & production systems",
    stages: [
      { number: "04", title: "Solution Design" },
      { number: "05", title: "Build" },
    ],
  },
  {
    id: "adopt-refine",
    chapterNumber: "03",
    title: "Adopt & Refine",
    subtitle: "Operational enablement & continuous leverage",
    stages: [
      { number: "06", title: "Adoption" },
      { number: "07", title: "Optimization" },
    ],
  },
];

export default function FrameworkLifecycle() {
  return (
    <section
      id="transformation-lifecycle"
      className="relative z-10 w-full scroll-mt-[80px] bg-[#111312] text-[#F5F7F6] py-10 sm:py-12 lg:py-14 xl:py-16"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col space-y-7 sm:space-y-8 lg:space-y-9">

          {/* ========================================================================= */}
          {/* SECTION HEADER: EYEBROW + H2 + EDITORIAL DESCRIPTION                      */}
          {/* ========================================================================= */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-10 pb-5 border-b border-white/[0.08]">
            <div className="max-w-[680px] space-y-2 sm:space-y-2.5">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="text-[10.5px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#AEB3AF]"
              >
                The Transformation Lifecycle
              </motion.div>

              {/* Headline H2: Controlled 36–42px Desktop / 30–34px Mobile */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="text-[28px] min-[390px]:text-[30px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-sans font-medium text-[#F5F7F6] tracking-[-0.03em] leading-[1.08]"
              >
                Transformation is a connected process.
              </motion.h2>
            </div>

            {/* Description: 15–16px Desktop / 14.5–15px Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
              className="text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#9CA3AF] font-sans font-normal leading-[1.54] max-w-[460px] lg:pb-0.5"
            >
              From understanding business needs to building, adopting and refining solutions.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP LIFECYCLE COMPOSITION: THREE CLEAN EDITORIAL CHAPTERS (>= 1024px) */}
          {/* Repetitive horizontal divider lines removed for premium typographic flow  */}
          {/* ========================================================================= */}
          <div className="hidden lg:block space-y-8">

            {/* 3 Chapters Grid */}
            <div className="grid grid-cols-3 gap-10 xl:gap-14 items-start pt-1">
              {LIFECYCLE_CHAPTERS.map((chapter, chapterIdx) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: transitionEase,
                    delay: 0.18 + chapterIdx * 0.1,
                  }}
                  className="flex flex-col space-y-4"
                >
                  {/* Chapter Header (Clean, borderless) */}
                  <div className="space-y-1 pb-1">
                    <div className="inline-flex items-center gap-2 text-[10.5px] xl:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#C9A35B]">
                      <span>Chapter {chapter.chapterNumber}</span>
                      <span className="text-white/[0.24]">·</span>
                      <span className="text-[#F5F7F6]">{chapter.title}</span>
                    </div>
                    <p className="font-sans text-[12.5px] xl:text-[13px] text-[#8C9590] leading-snug">
                      {chapter.subtitle}
                    </p>
                  </div>

                  {/* Stage Titles: Open, border-free typographic rows */}
                  <div className="space-y-2.5 pt-1">
                    {chapter.stages.map((stage) => (
                      <div
                        key={stage.number}
                        className="group flex items-baseline gap-3.5 py-1 transition-colors duration-200"
                      >
                        {/* Number Index */}
                        <span className="font-mono text-[11.5px] font-medium text-[#7B847F] group-hover:text-[#C9A35B] transition-colors duration-200 shrink-0 select-none">
                          {stage.number}
                        </span>

                        {/* Stage Name with subtle contrast hover change */}
                        <h3 className="font-sans font-medium text-[21px] xl:text-[23px] text-[#D0D7DE] group-hover:text-white transition-colors duration-200 tracking-[-0.02em] leading-snug">
                          {stage.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ======================================================================= */}
            {/* UNDERSTATED RETURN RELATIONSHIP FOOTNOTE (SINGLE MINIMAL TOP HAIRLINE)   */}
            {/* ======================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: transitionEase, delay: 0.45 }}
              className="pt-6 border-t border-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-6 text-[13px] font-sans">
                {/* Left: The Iterative Principle */}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#F5F7F6]">An iterative journey</span>
                  <span className="text-white/[0.25]">—</span>
                  <span className="text-[#9CA3AF]">What is learned informs what comes next.</span>
                </div>

                {/* Right: Return Loop Note */}
                <div className="text-[12px] font-sans text-[#8C9590]">
                  Ongoing optimization informs next-cycle discovery &amp; reassessment
                </div>
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE LIFECYCLE COMPOSITION: SINGLE-COLUMN CONNECTED FLOW (< 1024px)     */}
          {/* ========================================================================= */}
          <div className="block lg:hidden space-y-7">
            <div className="relative pl-5 sm:pl-6 border-l border-white/[0.12] space-y-6 my-1">
              {LIFECYCLE_CHAPTERS.map((chapter, chapterIdx) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: transitionEase, delay: chapterIdx * 0.08 }}
                  className="space-y-2.5 relative"
                >
                  {/* Chapter Label (Clean, borderless) */}
                  <div className="space-y-0.5 pb-1">
                    <div className="inline-flex items-center gap-2 text-[10.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#C9A35B]">
                      <span>Chapter {chapter.chapterNumber}</span>
                      <span className="text-white/[0.24]">·</span>
                      <span className="text-[#F5F7F6]">{chapter.title}</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#8C9590] leading-snug">
                      {chapter.subtitle}
                    </p>
                  </div>

                  {/* Stage Titles: Clean border-free list */}
                  <div className="space-y-1.5 pt-0.5">
                    {chapter.stages.map((stage) => (
                      <div
                        key={stage.number}
                        className="flex items-baseline gap-3 py-1"
                      >
                        <span className="font-mono text-[11px] font-medium text-[#7B847F] shrink-0 select-none">
                          {stage.number}
                        </span>
                        <h3 className="font-sans font-medium text-[20px] sm:text-[22px] text-[#D0D7DE] tracking-[-0.02em] leading-snug">
                          {stage.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Return Footnote (Clean, borderless) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: transitionEase }}
              className="pt-3 border-t border-white/[0.08] text-[12px] font-sans text-[#AEB3AF] space-y-1"
            >
              <div className="text-[#F5F7F6] font-medium text-[12.5px]">
                An iterative journey
              </div>
              <p className="text-[#8C9590] text-[11.5px] leading-relaxed">
                What is learned informs what comes next. Ongoing optimization informs continuous discovery and reassessment.
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
