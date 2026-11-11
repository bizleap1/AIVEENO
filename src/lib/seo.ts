import type { Metadata } from "next";

export const SITE_URL = "https://aiveeno.com";

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const fullUrl = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const fullTitle = /\bAiveeno\b/i.test(title) ? title : `${title} | Aiveeno`;
  const resolvedOgTitle = ogTitle ?? fullTitle;
  const resolvedOgDescription = ogDescription ?? description;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url: fullUrl,
      siteName: "Aiveeno",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: resolvedOgTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      images: [
        {
          url: "/twitter-image",
          alt: resolvedOgTitle,
        },
      ],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): Record<string, unknown> {
  const canonicalPath = path === "/" ? "" : path.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${canonicalPath}`,
    ...(serviceType ? { serviceType } : {}),
    provider: {
      "@type": "Organization",
      name: "Aiveeno",
      url: SITE_URL,
    },
  };
}

