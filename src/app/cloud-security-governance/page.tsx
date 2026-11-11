import type { Metadata } from "next";
import CloudSecurityClientPage from "./CloudSecurityClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cloud Security & Governance",
  description:
    "Strengthen cloud architecture, governance and security controls with a considered approach to visibility, monitoring and protection.",
  path: "/cloud-security-governance",
  ogDescription:
    "Cloud security architecture review, identity and access considerations, governance alignment, security monitoring and protection priorities.",
});

const cloudSecurityJsonLd = buildServiceJsonLd({
  name: "Cloud Security & Governance",
  description:
    "Strengthen cloud architecture, access controls, governance alignment, visibility, monitoring and protection across cloud environments.",
  path: "/cloud-security-governance",
  serviceType: "Cloud Security Architecture & Governance",
});

export default function CloudSecurityGovernancePage() {
  return (
    <>
      <JsonLd data={cloudSecurityJsonLd} />
      <CloudSecurityClientPage />
    </>
  );
}
