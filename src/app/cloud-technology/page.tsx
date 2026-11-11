import type { Metadata } from "next";
import CloudTechnologyClientPage from "./CloudTechnologyClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud & Technology Foundations",
  description:
    "Modernize cloud environments, strengthen data foundations and build secure, scalable technology platforms aligned with evolving business needs.",
  path: "/cloud-technology",
});

const cloudTechnologyServiceJsonLd = buildServiceJsonLd({
  name: "Cloud & Technology Services",
  description:
    "Enterprise cloud consulting, migration, managed operations, security and governance, optimization, DevOps automation, data engineering and software development.",
  path: "/cloud-technology",
  serviceType: "Cloud Architecture, Data Engineering & Technology Services",
});

export default function CloudTechnologyPage() {
  return (
    <>
      <JsonLd data={cloudTechnologyServiceJsonLd} />
      <CloudTechnologyClientPage />
    </>
  );
}
