import type { Metadata } from "next";
import SolutionsClientPage from "./SolutionsClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Solutions & Enterprise Use Cases",
  description:
    "Practical AI solutions, workflow automation, intelligent document processing and private decision-support systems engineered around real business environments.",
  path: "/ai-solutions",
});

const solutionsServiceJsonLd = buildServiceJsonLd({
  name: "AI Solutions & Enterprise Use Cases",
  description:
    "Practical AI systems, workflow automation and decision-support solutions integrated cleanly into business environments.",
  path: "/ai-solutions",
  serviceType: "Enterprise AI Solutions & Automation",
});

export default function AISolutionsPage() {
  return (
    <>
      <JsonLd data={solutionsServiceJsonLd} />
      <SolutionsClientPage />
    </>
  );
}
