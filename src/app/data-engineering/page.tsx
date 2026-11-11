import type { Metadata } from "next";
import DataEngineeringClientPage from "./DataEngineeringClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Data Engineering",
  description:
    "Design reliable data pipelines, ETL/ELT workflows and modern data foundations that support analytics, business intelligence and AI applications.",
  path: "/data-engineering",
});

const dataEngineeringJsonLd = buildServiceJsonLd({
  name: "Data Engineering",
  description:
    "Build dependable data pipelines, ETL/ELT workflows, warehouses and lakehouse foundations prepared for analytics, business intelligence and AI workloads.",
  path: "/data-engineering",
  serviceType: "Data Pipelines, ETL/ELT & Data Platform Engineering",
});

export default function DataEngineeringPage() {
  return (
    <>
      <JsonLd data={dataEngineeringJsonLd} />
      <DataEngineeringClientPage />
    </>
  );
}
