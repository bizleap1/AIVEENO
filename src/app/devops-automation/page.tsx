import type { Metadata } from "next";
import DevOpsAutomationClientPage from "./DevOpsAutomationClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "DevOps & Automation",
  description:
    "Streamline software delivery and infrastructure operations through CI/CD, Infrastructure as Code and modern DevOps practices.",
  path: "/devops-automation",
});

const devopsJsonLd = buildServiceJsonLd({
  name: "DevOps & Automation",
  description:
    "Automate build, testing, deployment pipelines and infrastructure operations using CI/CD, Infrastructure as Code and repeatable engineering practices.",
  path: "/devops-automation",
  serviceType: "DevOps, CI/CD & Infrastructure Automation",
});

export default function DevOpsAutomationPage() {
  return (
    <>
      <JsonLd data={devopsJsonLd} />
      <DevOpsAutomationClientPage />
    </>
  );
}
