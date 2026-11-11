import type { Metadata } from "next";
import HomeClientPage from "./HomeClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

const HOMEPAGE_TITLE = "Aiveeno | AI Transformation & Automation Solutions";
const HOMEPAGE_DESCRIPTION =
  "We help organizations transform how their business operates with AI. Business-first AI transformation, workflow automation, paid transformation assessments, cloud consulting, data engineering, DevOps and software foundations.";

export const metadata: Metadata = buildPageMetadata({
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  path: "/",
  ogTitle: HOMEPAGE_TITLE,
  ogDescription:
    "Transform how your business operates with AI. Practical enterprise transformation grounded in workflows, priorities and resilient cloud foundations.",
});

export default function Home() {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aiveeno",
      url: SITE_URL,
      description: HOMEPAGE_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Aiveeno",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.webp`,
      serviceType: [
        "AI Business Transformation",
        "AI Transformation Assessment",
        "AI Solutions & Automation",
        "Cloud & Technology Foundations",
      ],
      description: HOMEPAGE_DESCRIPTION,
    },
  ];

  return (
    <>
      <JsonLd data={homeSchemas} />
      <HomeClientPage />
    </>
  );
}
