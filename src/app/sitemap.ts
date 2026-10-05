import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aiveeno.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/ai-business-transformation",
    "/framework",
    "/ai-transformation-assessment",
    "/ai-solutions",
    "/cloud-technology",
    "/cloud-consulting",
    "/cloud-migration-modernization",
    "/cloud-managed-services",
    "/cloud-security-governance",
    "/cloud-optimization",
    "/devops-automation",
    "/data-engineering",
    "/software-development",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/ai-") || route === "/framework" ? 0.9 : 0.8,
  }));
}
