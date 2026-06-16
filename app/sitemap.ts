import { MetadataRoute } from "next";
import { SERVICES, LOCATIONS } from "@/lib/constants";

const BASE = "https://www.plumbingemergencylosangeles.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
