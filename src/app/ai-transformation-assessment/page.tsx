import type { Metadata } from "next";
import AssessmentClientPage from "./AssessmentClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Transformation Assessment",
  description:
    "A focused, paid one-week diagnostic examining workflows, systems, data readiness and AI opportunities to deliver practical, executive-ready priorities before implementation.",
  path: "/ai-transformation-assessment",
});

const assessmentServiceJsonLd = buildServiceJsonLd({
  name: "AI Transformation Assessment",
  description:
    "Focused, paid consulting assessment examining business workflows, legacy systems, data foundations and practical AI transformation priorities in approximately one week.",
  path: "/ai-transformation-assessment",
  serviceType: "Paid AI Readiness & Workflow Diagnostic Engagement",
});

export default function AssessmentPage() {
  return (
    <>
      <JsonLd data={assessmentServiceJsonLd} />
      <AssessmentClientPage />
    </>
  );
}
