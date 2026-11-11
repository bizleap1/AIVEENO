"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import ContactHeroForm from "@/components/contact/ContactHeroForm";
import ContactNextSteps from "@/components/contact/ContactNextSteps";
import ContactAreas from "@/components/contact/ContactAreas";
import ContactClosing from "@/components/contact/ContactClosing";
import { normalizeContactInterest } from "@/lib/discovery";

/**
 * Aiveeno — Contact / Book a Discovery Call (/contact)
 *
 * Four Focused Editorial Conversion Sections:
 * 01 Hero + Discovery Form — #111312 Dark Left + #F5F7F6 Light Form Surface Right
 * 02 What Happens Next — #F5F7F6 Light Editorial (3 steps + paid-assessment clarification)
 * 03 Areas We Can Discuss — #EEF1F0 Alternate Light (AI Transformation & Cloud & Technology)
 * 04 Closing Statement — #F5F7F6 Light Editorial -> Global Dark Graphite Footer (#111312)
 */

function ContactHeroWithQueryParams() {
  const searchParams = useSearchParams();
  const rawInterest = searchParams.get("interest");
  const rawContext = searchParams.get("context");

  const initialInterest = normalizeContactInterest(rawInterest);
  const initialSourceContext =
    rawContext?.trim() ||
    (rawInterest?.trim()
      ? `Contact Page (${rawInterest.trim().slice(0, 80)})`
      : "Contact Page Direct");

  return (
    <ContactHeroForm
      key={`${initialInterest}:${initialSourceContext}`}
      initialInterest={initialInterest}
      initialSourceContext={initialSourceContext}
    />
  );
}

export default function ContactClientPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#111312]">
        <Navbar transparentOnHero />

        <main className="flex-1">
          {/* Section 01: Hero + Discovery Enquiry Form */}
          <Suspense fallback={<ContactHeroForm />}>
            <ContactHeroWithQueryParams />
          </Suspense>

          {/* Section 02: What Happens Next */}
          <ContactNextSteps />

          {/* Section 03: Areas We Can Discuss */}
          <ContactAreas />

          {/* Section 04: Compact Closing Reassurance */}
          <ContactClosing />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

