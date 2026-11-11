import type { Metadata } from "next";
import CloudConsultingClientPage from "./CloudConsultingClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud Consulting / Advisory",
  description:
    "Assess your technology environment, define a practical cloud direction and plan architecture, platform suitability, adoption and modernization around business priorities.",
  path: "/cloud-consulting",
  ogDescription:
    "Cloud strategy, architecture advisory, platform evaluation and modernization planning aligned with business priorities.",
});

const cloudConsultingJsonLd = buildServiceJsonLd({
  name: "Cloud Consulting / Advisory",
  description:
    "Assess current technology environments, evaluate cloud architecture and platform fit, and establish clear adoption and modernization roadmaps.",
  path: "/cloud-consulting",
  serviceType: "Cloud Strategy & Architecture Advisory",
});

export default function CloudConsultingPage() {
  return (
    <>
      <JsonLd data={cloudConsultingJsonLd} />
      <CloudConsultingClientPage />
    </>
  );
}
