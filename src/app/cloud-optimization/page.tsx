import type { Metadata } from "next";
import CloudOptimizationClientPage from "./CloudOptimizationClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud Optimization",
  description:
    "Optimize cloud architecture, resource utilization and performance with a considered approach to operational efficiency and cost.",
  path: "/cloud-optimization",
  ogDescription:
    "Evaluate cloud architecture, resource utilization, workload performance and cost efficiency with a considered approach to operational alignment.",
});

const cloudOptimizationJsonLd = buildServiceJsonLd({
  name: "Cloud Optimization",
  description:
    "Review and improve cloud architecture, resource utilization, workload performance and ongoing cloud spend efficiency.",
  path: "/cloud-optimization",
  serviceType: "Cloud Architecture, Performance & Cost Optimization",
});

export default function CloudOptimizationPage() {
  return (
    <>
      <JsonLd data={cloudOptimizationJsonLd} />
      <CloudOptimizationClientPage />
    </>
  );
}
