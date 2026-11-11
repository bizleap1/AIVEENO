import type { Metadata } from "next";
import FrameworkClientPage from "./FrameworkClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Transformation Framework & Consulting Approach",
  description:
    "A structured, iterative transformation lifecycle—Discovery, Assessment, Prioritization, Solution Design, Build, Adoption and Optimization—connecting business reality to engineering execution.",
  path: "/framework",
});

const frameworkServiceJsonLd = buildServiceJsonLd({
  name: "AI Transformation Framework",
  description:
    "Structured seven-stage consulting and engineering lifecycle connecting business discovery and assessment through solution design, build, adoption and ongoing optimization.",
  path: "/framework",
  serviceType: "AI Transformation Lifecycle & Advisory Methodology",
});

export default function FrameworkPage() {
  return (
    <>
      <JsonLd data={frameworkServiceJsonLd} />
      <FrameworkClientPage />
    </>
  );
}
