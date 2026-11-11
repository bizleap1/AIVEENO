import type { Metadata } from "next";
import CloudMigrationClientPage from "./CloudMigrationClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud Migration & Modernization",
  description:
    "Migrate workloads and modernize applications with a considered approach to architecture, business continuity, security, performance and cost.",
  path: "/cloud-migration-modernization",
  ogDescription:
    "Workload migration, dependency assessment, application modernization, security planning and operational validation aligned around continuity and architecture.",
});

const cloudMigrationJsonLd = buildServiceJsonLd({
  name: "Cloud Migration & Modernization",
  description:
    "Move workloads and modernize applications with structured planning across target architecture, continuity, security, performance and cost.",
  path: "/cloud-migration-modernization",
  serviceType: "Cloud Migration & Application Modernization",
});

export default function CloudMigrationPage() {
  return (
    <>
      <JsonLd data={cloudMigrationJsonLd} />
      <CloudMigrationClientPage />
    </>
  );
}
