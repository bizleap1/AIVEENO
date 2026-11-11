"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

/**
 * Aiveeno — AI Solutions & Enterprise Use Cases Page: Section 03
 * AI SOLUTIONS IN PRACTICE (#F5F7F6 Clean Editorial Surface)
 *
 * Three Distinct Asymmetric Consulting Showcases:
 * - Preserves all 7 capabilities & Instrument Sans hierarchy.
 * - Background: #F5F7F6, Tonal Exhibits: #EEF1F0 / #F5F7F6, Ink: #111312, Muted: #56616B, Gold Accent: #C9A35B.
 * - Muted gold dash retained beside section eyebrow per page standard.
 * - Eliminates stacked horizontal lines & generic AI node-and-wire / neural graphics.
 * - Replaced with clean management-consulting structural exhibits:
 *   01 — AUTOMATE: 3-stage operational process sequence (Intake -> Coordination -> Human Review)
 *   02 — CONNECT: Systems & knowledge convergence architecture (Sources -> Pipeline Bridge -> Team Context)
 *   03 — SUPPORT DECISIONS: Operational input -> Filtered context -> Purpose-built action stack
 * - Zero cards/shadows, zero node dots, zero glowing circuits, zero AI symbols.
 */

const transitionEase = [0.22, 1, 0.36, 1] as const;

/* ========================================================================= */
/* EXHIBIT 01 — AUTOMATE: STRUCTURED OPERATIONAL WORKFLOW SEQUENCE           */
/* ========================================================================= */

function OperationalWorkflowExhibit() {
  return (
    <div
      className="w-full rounded-[4px] bg-[#EEF1F0] p-5 sm:p-7 lg:p-8 select-none"
      role="region"
      aria-label="Illustrative workflow structure showing request intake, routine task coordination with draft preparation, and human review oversight before system completion."
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 sm:pb-5">
        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.13em] text-[#56616B]">
          Operational Sequence — Request to Oversight
        </span>
        <span className="text-[11.5px] font-sans text-[#6F7873]">
          End-to-end execution
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 items-stretch">
        {/* Stage 01: Intake */}
        <div className="bg-[#F5F7F6] p-4 sm:p-5 flex flex-col justify-between min-h-[152px] sm:min-h-[172px]">
          <div>
            <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#56616B]">
              01 · Intake
            </span>
            <p className="font-sans font-medium text-[15.5px] text-[#111312] leading-snug mt-1.5">
              Request captured
            </p>
          </div>
          <div className="border-l border-[#0D1B2A]/15 pl-3 mt-4 space-y-1">
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Categorized at entry
            </p>
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Routed to functional owner
            </p>
          </div>
        </div>

        {/* Stage 02: Execution */}
        <div className="bg-[#F5F7F6] p-4 sm:p-5 flex flex-col justify-between min-h-[152px] sm:min-h-[172px]">
          <div>
            <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#56616B]">
              02 · Coordination
            </span>
            <p className="font-sans font-medium text-[15.5px] text-[#111312] leading-snug mt-1.5">
              Work prepared
            </p>
          </div>
          <div className="border-l border-[#0D1B2A]/15 pl-3 mt-4 space-y-1">
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Repeatable handoffs run
            </p>
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Structured drafts assembled
            </p>
          </div>
        </div>

        {/* Stage 03: Oversight & Completion */}
        <div className="bg-[#F5F7F6] border-l-2 border-[#C9A35B] p-4 sm:p-5 flex flex-col justify-between min-h-[152px] sm:min-h-[172px]">
          <div>
            <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#785B21]">
              03 · Human Review
            </span>
            <p className="font-sans font-medium text-[15.5px] text-[#111312] leading-snug mt-1.5">
              Verified &amp; actioned
            </p>
          </div>
          <div className="border-l border-[#C9A35B]/45 pl-3 mt-4 space-y-1">
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Team sign-off at checkpoints
            </p>
            <p className="font-sans text-[13px] text-[#56616B] leading-snug">
              Recorded in core systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* EXHIBIT 02 — CONNECT: ENTERPRISE SYSTEMS & KNOWLEDGE CONVERGENCE          */
/* ========================================================================= */

function SystemConvergenceExhibit() {
  return (
    <div
      className="w-full rounded-[4px] bg-[#EEF1F0] p-5 sm:p-6 xl:p-8 select-none"
      role="region"
      aria-label="Illustrative information architecture showing internal documents, business applications, and operational records brought together via integrations and data pipelines for shared team access."
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 sm:pb-5">
        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.13em] text-[#56616B]">
          Information Structure — Sources to Team Context
        </span>
        <span className="text-[11.5px] font-sans text-[#6F7873]">
          Connected working view
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.12fr_0.93fr_1.05fr] gap-3 items-stretch">
        {/* Left: Disconnected Business Sources */}
        <div className="flex flex-col gap-2.5 justify-between min-w-0">
          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14.5px] text-[#111312] leading-snug">
              Internal documents
            </p>
            <p className="font-sans text-[12.5px] text-[#56616B] leading-snug mt-0.5">
              Policies, manuals &amp; operating guides
            </p>
          </div>

          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14.5px] text-[#111312] leading-snug">
              Business applications
            </p>
            <p className="font-sans text-[12.5px] text-[#56616B] leading-snug mt-0.5">
              CRM, ERP &amp; service tools
            </p>
          </div>

          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14.5px] text-[#111312] leading-snug">
              Institutional records
            </p>
            <p className="font-sans text-[12.5px] text-[#56616B] leading-snug mt-0.5">
              Shared history &amp; team knowledge
            </p>
          </div>
        </div>

        {/* Center Spine: Integrations & Data Pipelines */}
        <div className="bg-[#E4E8E5] border-l-2 border-[#C9A35B] px-3.5 xl:px-4 py-3.5 md:py-5 flex flex-col justify-center min-w-0">
          <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#785B21]">
            Bridge Layer
          </span>
          <p className="font-sans font-medium text-[13.5px] xl:text-[14.5px] text-[#111312] leading-snug mt-1">
            Integrations &amp; data pipelines
          </p>
          <p className="font-sans text-[12px] text-[#56616B] leading-snug mt-1.5">
            Structured across systems
          </p>
        </div>

        {/* Right: Unified Working Outcome */}
        <div className="bg-[#F5F7F6] p-4 xl:p-5 flex flex-col justify-between min-w-0">
          <div>
            <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-[#56616B]">
              Team Outcome
            </span>
            <p className="font-sans font-medium text-[15.5px] xl:text-[16px] text-[#111312] leading-snug mt-1.5">
              Usable working context
            </p>
            <p className="font-sans text-[12.5px] xl:text-[13px] text-[#56616B] leading-[1.52] mt-2">
              Accurate documents and system details surfaced inside daily workflows.
            </p>
          </div>

          <p className="font-sans text-[11px] xl:text-[11.5px] font-medium text-[#6F7873] pt-4">
            Searchable · Traceable · Current
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* EXHIBIT 03 — SUPPORT DECISIONS: INPUTS -> FILTERED CONTEXT -> ACTION      */
/* ========================================================================= */

function DecisionContextExhibit() {
  return (
    <div
      className="w-full rounded-[4px] bg-[#EEF1F0] p-5 sm:p-7 lg:p-8 select-none"
      role="region"
      aria-label="Illustrative decision support hierarchy showing operational inputs organized into filtered business context and delivered through purpose-built software for informed team action."
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 sm:pb-5">
        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.13em] text-[#56616B]">
          Decision Framing — Clarity Before Action
        </span>
        <span className="text-[11.5px] font-sans text-[#6F7873]">
          Built around team routines
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Tier 01: Operational Grounding */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14px] text-[#111312] leading-snug">
              Workflow state
            </p>
            <p className="font-sans text-[12px] text-[#56616B] leading-snug mt-0.5">
              Current operational progress
            </p>
          </div>
          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14px] text-[#111312] leading-snug">
              Business records
            </p>
            <p className="font-sans text-[12px] text-[#56616B] leading-snug mt-0.5">
              Relevant system history
            </p>
          </div>
          <div className="bg-[#F5F7F6] px-4 py-3">
            <p className="font-sans font-medium text-[14px] text-[#111312] leading-snug">
              Team priorities
            </p>
            <p className="font-sans text-[12px] text-[#56616B] leading-snug mt-0.5">
              Active business targets
            </p>
          </div>
        </div>

        {/* Tier 02: Contextual Synthesis */}
        <div className="bg-[#F5F7F6] border-l-2 border-[#C9A35B] px-4 sm:px-5 py-4">
          <span className="block font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#785B21]">
            Operational Context Layer
          </span>
          <p className="font-sans font-medium text-[16px] text-[#111312] leading-snug mt-1">
            Relevant context organized around the decision
          </p>
          <p className="font-sans text-[13px] text-[#56616B] leading-[1.52] mt-1">
            Removes scattered reporting clutter so teams review what matters directly in context.
          </p>
        </div>

        {/* Tier 03: Applied Decision Delivery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="bg-[#F5F7F6] px-4 py-3.5">
            <p className="font-sans font-medium text-[14.5px] text-[#111312] leading-snug">
              Purpose-built interface
            </p>
            <p className="font-sans text-[12.5px] text-[#56616B] leading-snug mt-0.5">
              Fits how business teams actually work
            </p>
          </div>
          <div className="bg-[#F5F7F6] px-4 py-3.5">
            <p className="font-sans font-medium text-[14.5px] text-[#111312] leading-snug">
              Informed next action
            </p>
            <p className="font-sans text-[12.5px] text-[#56616B] leading-snug mt-0.5">
              Supports timely, accountable decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* MAIN SECTION 03 COMPONENT                                                 */
/* ========================================================================= */

export default function SolutionsLandscape() {
  return (
    <section
      id="solution-landscape"
      className="relative z-10 w-full scroll-mt-[72px] bg-[#F5F7F6] text-[#111312] pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24"
    >
      <Container className="max-w-[1440px] xl:max-w-[1500px] px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col">
          {/* ========================================================================= */}
          {/* SECTION MASTHEAD                                                          */}
          {/* ========================================================================= */}
          <div className="max-w-[820px] space-y-3 sm:space-y-4 pb-10 sm:pb-12 lg:pb-14">
            {/* Eyebrow with Muted Gold Dash */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]"
            >
              <span className="w-3.5 h-px bg-[#C9A35B] shrink-0" aria-hidden="true" />
              <span>The Solution Landscape</span>
            </motion.div>

            {/* Headline H2: 34–38px Mobile / 48–54px Desktop */}
            <div className="overflow-hidden pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: transitionEase, delay: 0.06 }}
                className="font-sans font-medium text-[34px] min-[390px]:text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[54px] text-[#111312] tracking-[-0.03em] leading-[1.06]"
              >
                Solutions shaped around the work.
              </motion.h2>
            </div>

            {/* Intro: 16px Mobile / 17.5–18px Desktop */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: transitionEase, delay: 0.12 }}
              className="font-sans text-[16px] sm:text-[16.5px] lg:text-[17.5px] xl:text-[18px] text-[#56616B] leading-[1.58] font-normal max-w-[660px]"
            >
              Explore where AI can support workflows, information and decision-making.
            </motion.p>
          </div>

          {/* ========================================================================= */}
          {/* THREE LARGE ASYMMETRIC SHOWCASES                                          */}
          {/* Clean typographic spacing; single restrained dividers between 02 and 03   */}
          {/* ========================================================================= */}
          <div className="flex flex-col space-y-14 sm:space-y-16 lg:space-y-20">
            {/* ----------------------------------------------------------------------- */}
            {/* SHOWCASE 01 — AUTOMATE (5-Col Narrative Left | 7-Col Process Right)     */}
            {/* ----------------------------------------------------------------------- */}
            <motion.article
              aria-labelledby="showcase-automate-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: transitionEase }}
              className="pt-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                {/* Narrative Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                      <span className="text-[#785B21] font-semibold">01</span>
                      <span className="text-[#0D1B2A]/30">—</span>
                      <span>Automate</span>
                    </div>

                    <h3
                      id="showcase-automate-heading"
                      className="font-sans font-medium text-[27px] min-[390px]:text-[28px] sm:text-[31px] lg:text-[34px] xl:text-[38px] text-[#111312] tracking-[-0.025em] leading-[1.14] max-w-[460px]"
                    >
                      Make everyday operations easier to execute.
                    </h3>
                  </div>

                  {/* Illustrative Application */}
                  <div className="space-y-1.5 border-l-2 border-[#C9A35B] pl-4">
                    <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                      Illustrative application
                    </span>
                    <p className="font-sans text-[16px] lg:text-[16.5px] text-[#454E56] leading-[1.58] max-w-[440px]">
                      Route incoming requests, coordinate routine tasks and introduce human review checkpoints.
                    </p>
                  </div>

                  {/* Associated Capabilities */}
                  <div className="pt-1 space-y-3">
                    <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                      Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1">
                        <h4 className="font-sans font-medium text-[17px] lg:text-[17.5px] text-[#111312] tracking-[-0.015em]">
                          Workflow Automation
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Request routing &amp; repeatable handoffs
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sans font-medium text-[17px] lg:text-[17.5px] text-[#111312] tracking-[-0.015em]">
                          AI Systems &amp; Agents
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Multi-step task assistance with oversight
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consulting Visual Column */}
                <div className="lg:col-span-7">
                  <OperationalWorkflowExhibit />
                </div>
              </div>
            </motion.article>

            {/* ----------------------------------------------------------------------- */}
            {/* SHOWCASE 02 — CONNECT (Flipped: 7-Col Visual Left | 5-Col Copy Right)   */}
            {/* ----------------------------------------------------------------------- */}
            <motion.article
              aria-labelledby="showcase-connect-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: transitionEase }}
              className="border-t border-[#0D1B2A]/[0.08] pt-12 sm:pt-14 lg:pt-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                {/* Narrative Column (Mobile first, Desktop right) */}
                <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-2 xl:pl-4 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                      <span className="text-[#785B21] font-semibold">02</span>
                      <span className="text-[#0D1B2A]/30">—</span>
                      <span>Connect</span>
                    </div>

                    <h3
                      id="showcase-connect-heading"
                      className="font-sans font-medium text-[27px] min-[390px]:text-[28px] sm:text-[31px] lg:text-[34px] xl:text-[38px] text-[#111312] tracking-[-0.025em] leading-[1.14] max-w-[460px]"
                    >
                      Make business information easier to use.
                    </h3>
                  </div>

                  {/* Illustrative Application */}
                  <div className="space-y-1.5 border-l-2 border-[#C9A35B] pl-4">
                    <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                      Illustrative application
                    </span>
                    <p className="font-sans text-[16px] lg:text-[16.5px] text-[#454E56] leading-[1.58] max-w-[440px]">
                      Bring together internal documents, application data and relevant knowledge for team access.
                    </p>
                  </div>

                  {/* Associated Capabilities (3 clean restrained items, zero micro horizontal lines) */}
                  <div className="pt-1 space-y-3">
                    <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                      Capabilities
                    </span>
                    <div className="space-y-3.5">
                      <div className="space-y-0.5">
                        <h4 className="font-sans font-medium text-[17px] text-[#111312] tracking-[-0.015em]">
                          Intelligent Knowledge
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Retrievable internal documents &amp; answers
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="font-sans font-medium text-[17px] text-[#111312] tracking-[-0.015em]">
                          Integrations
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Connected business tools &amp; workflows
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="font-sans font-medium text-[17px] text-[#111312] tracking-[-0.015em]">
                          Data Pipelines
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Structured information prepared across systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consulting Visual Column (Mobile second, Desktop left) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <SystemConvergenceExhibit />
                </div>
              </div>
            </motion.article>

            {/* ----------------------------------------------------------------------- */}
            {/* SHOWCASE 03 — SUPPORT DECISIONS (6-Col Narrative Left | 6-Col Stack Right) */}
            {/* ----------------------------------------------------------------------- */}
            <motion.article
              aria-labelledby="showcase-decisions-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: transitionEase }}
              className="border-t border-[#0D1B2A]/[0.08] pt-12 sm:pt-14 lg:pt-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
                {/* Narrative Column */}
                <div className="lg:col-span-6 lg:pr-6 xl:pr-10 flex flex-col justify-between space-y-6 lg:pt-1">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 text-[11.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#56616B]">
                        <span className="text-[#785B21] font-semibold">03</span>
                        <span className="text-[#0D1B2A]/30">—</span>
                        <span>Support Decisions</span>
                      </div>

                      <h3
                        id="showcase-decisions-heading"
                        className="font-sans font-medium text-[27px] min-[390px]:text-[28px] sm:text-[31px] lg:text-[34px] xl:text-[40px] text-[#111312] tracking-[-0.025em] leading-[1.12] max-w-[520px]"
                      >
                        Turn relevant information into useful action.
                      </h3>
                    </div>

                    {/* Illustrative Application */}
                    <div className="space-y-1.5 border-l-2 border-[#C9A35B] pl-4">
                      <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                        Illustrative application
                      </span>
                      <p className="font-sans text-[16px] lg:text-[17px] text-[#454E56] leading-[1.58] max-w-[490px]">
                        Present relevant operational context through purpose-built interfaces for business teams.
                      </p>
                    </div>
                  </div>

                  {/* Capabilities (No redundant horizontal border-t strip) */}
                  <div className="pt-2 space-y-3">
                    <span className="block font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-[#6F7873]">
                      Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                      <div className="space-y-1">
                        <h4 className="font-sans font-medium text-[17.5px] text-[#111312] tracking-[-0.015em]">
                          Decision Support
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Operational context surfaced at decision time
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sans font-medium text-[17.5px] text-[#111312] tracking-[-0.015em]">
                          Custom Software
                        </h4>
                        <p className="font-sans text-[14px] text-[#56616B] leading-snug">
                          Purpose-built interfaces around real workflows
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consulting Visual Column */}
                <div className="lg:col-span-6">
                  <DecisionContextExhibit />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </Container>
    </section>
  );
}
