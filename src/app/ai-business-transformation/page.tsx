import type { Metadata } from "next";
import TransformationClientPage from "./TransformationClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Business Transformation",
  description:
    "Move from isolated AI experimentation to structured enterprise transformation grounded in workflows, systems, data readiness and measurable business value.",
  path: "/ai-business-transformation",
  ogTitle: "AI Business Transformation | Aiveeno",
  ogDescription:
    "Business-first AI transformation strategy, workflow redesign, prioritization and scalable engineering aligned with enterprise operating models.",
});

const transformationServiceJsonLd = buildServiceJsonLd({
  name: "AI Business Transformation",
  description:
    "End-to-end enterprise AI business transformation connecting business priorities, operational assessment, solution design, production engineering and continuous optimization.",
  path: "/ai-business-transformation",
  serviceType: "Enterprise AI Business Transformation Advisory & Engineering",
});

export default function AIBusinessTransformationPage() {
  return (
    <>
      <JsonLd data={transformationServiceJsonLd} />
      <TransformationClientPage />
    </>
  );
}
