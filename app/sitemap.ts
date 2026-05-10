import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";

const staticRoutes = [
  "/",
  "/about",
  "/architecture",
  "/brochure",
  "/construction",
  "/contact",
  "/design-home",
  "/engineering",
  "/interiors",
  "/interiors/bathroom",
  "/interiors/bedroom",
  "/interiors/foyer",
  "/interiors/living-room",
  "/interiors/modular-kitchen",
  "/interiors/pooja",
  "/interiors/pooja-foyer",
  "/interiors/wardrobe",
  "/packages",
  "/projects",
  "/real-estate",
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
