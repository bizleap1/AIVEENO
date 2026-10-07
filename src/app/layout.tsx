import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiveeno.com"),
  title: {
    default: "Aiveeno | AI Transformation & Automation Solutions",
    template: "%s | Aiveeno",
  },
  description:
    "We help organizations transform how their business operates with AI. Enterprise AI transformation, automation solutions, cloud consulting, data engineering, DevOps, and modern software foundations.",
  keywords: [
    "AI Transformation & Automation Solutions",
    "Enterprise AI Transformation",
    "Automation Solutions",
    "AI Consulting",
    "Cloud Consulting",
    "Cloud Migration",
    "Data Engineering",
    "DevOps Automation",
    "Cloud Security",
    "Software Development",
    "AI Transformation Assessment",
  ],
  authors: [{ name: "Aiveeno Technology Advisory" }],
  creator: "Aiveeno",
  publisher: "Aiveeno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiveeno.com",
    siteName: "Aiveeno",
    title: "Aiveeno | AI Transformation & Automation Solutions",
    description:
      "We help organizations transform how their business operates with AI. Practical enterprise transformation grounded in business reality, workflows, and resilient cloud architecture.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aiveeno | AI Transformation & Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiveeno | AI Transformation & Automation Solutions",
    description:
      "We help organizations transform how their business operates with AI. Enterprise AI transformation, cloud consulting, and software architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aiveeno",
    url: "https://aiveeno.com",
    logo: "https://aiveeno.com/logo.webp",
    description:
      "Enterprise technology transformation consultancy specializing in AI Business Transformation, Cloud Consulting, Data Engineering, and Software Modernization.",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${inter.variable} ${ibmPlexMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen bg-[#F5F7F6] text-[#0D1117] font-sans selection:bg-[#0D1117] selection:text-[#F5F7F6]">
        {children}
      </body>
    </html>
  );
}
