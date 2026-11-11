import type { Metadata } from "next";
import SoftwareDevelopmentClientPage from "./SoftwareDevelopmentClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Software Development",
  description:
    "Design, develop and modernize scalable applications and technology platforms built around real business requirements.",
  path: "/software-development",
});

const softwareDevelopmentJsonLd = buildServiceJsonLd({
  name: "Software Development",
  description:
    "Design, build, modernize and maintain bespoke applications and integrated software platforms shaped around real business requirements.",
  path: "/software-development",
  serviceType: "Custom Application Development & System Modernization",
});

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <JsonLd data={softwareDevelopmentJsonLd} />
      <SoftwareDevelopmentClientPage />
    </>
  );
}
