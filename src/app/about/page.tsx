import type { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Aiveeno | Enterprise AI & Technology Consultancy",
  description:
    "Aiveeno connects business-first AI transformation with cloud, data and engineering capabilities to help organizations approach technology change with clarity and purpose.",
  path: "/about",
  ogDescription:
    "We connect AI-led business transformation with cloud, data and engineering capabilities to help organizations approach technology change with clarity and purpose.",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Aiveeno",
  url: `${SITE_URL}/about`,
  description:
    "Aiveeno connects business-first AI transformation with cloud, data and engineering capabilities.",
  mainEntity: {
    "@type": "Organization",
    name: "Aiveeno",
    url: SITE_URL,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutClientPage />
    </>
  );
}
