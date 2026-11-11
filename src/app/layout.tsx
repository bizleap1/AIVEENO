import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const instrumentSans = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400 700",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const ibmPlexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
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
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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

  const rawGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const gtmId = rawGtmId && /^GTM-[A-Z0-9]+$/i.test(rawGtmId) ? rawGtmId : null;
  const rawGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const gaMeasurementId =
    rawGaId && /^G-[A-Z0-9]+$/i.test(rawGaId) ? rawGaId : null;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${inter.variable} ${ibmPlexMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F5F7F6] text-[#0D1117] font-sans selection:bg-[#0D1117] selection:text-[#F5F7F6]">
        {children}
        {gtmId ? (
          <Script id="gtm-loader" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`}
          </Script>
        ) : gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-config" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(gaMeasurementId)},{anonymize_ip:true});`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
