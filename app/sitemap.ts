import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";

const staticRoutes = [
  "/",
  "/about",
  "/architecture",
  "/construction",
  "/contact",
  "/data-deletion",
  "/design-home",
  "/engineering",
  "/interiors",
  "/interiors/balcony",
  "/interiors/bathroom",
  "/interiors/bedroom",
  "/interiors/dining",
  "/interiors/foyer",
  "/interiors/living-room",
  "/interiors/modular-kitchen",
  "/interiors/kids-bedroom",
  "/interiors/pooja",
  "/interiors/pooja-foyer",
  "/interiors/wall-panels",
  "/interiors/wardrobe",
  "/packages",
  "/privacy-policy",
  "/projects",
  "/real-estate",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
