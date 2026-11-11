import type { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Book a Discovery Call",
  description:
    "Start a conversation with Aiveeno about your business priorities, AI transformation goals, or cloud and technology challenges.",
  path: "/contact",
  ogDescription:
    "Tell us about your business priorities, technology challenges or transformation goals. Business-first conversations and practical next steps.",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Aiveeno & Book a Discovery Call",
  url: `${SITE_URL}/contact`,
  description:
    "Book a discovery call with Aiveeno to discuss AI business transformation, a focused paid assessment, or cloud and technology initiatives.",
  mainEntity: {
    "@type": "Organization",
    name: "Aiveeno",
    url: SITE_URL,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <ContactClientPage />
    </>
  );
}
