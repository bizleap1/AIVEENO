import type { Metadata } from "next";
import CloudManagedClientPage from "./CloudManagedClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud Managed Services",
  description:
    "Ongoing cloud management focused on availability, security, performance and operational efficiency—so your technology environment can support evolving business needs.",
  path: "/cloud-managed-services",
  ogDescription:
    "Ongoing cloud management, availability oversight, performance monitoring, security coordination and continuous operational improvement.",
});

const cloudManagedJsonLd = buildServiceJsonLd({
  name: "Cloud Managed Services",
  description:
    "Ongoing operational oversight, reliability monitoring, performance tuning, security coordination and day-to-day management for cloud environments.",
  path: "/cloud-managed-services",
  serviceType: "Managed Cloud Operations & Oversight",
});

export default function CloudManagedServicesPage() {
  return (
    <>
      <JsonLd data={cloudManagedJsonLd} />
      <CloudManagedClientPage />
    </>
  );
}
