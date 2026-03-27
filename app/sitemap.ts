import { MetadataRoute } from "next";
import { projects } from "@/app/data/projects";
import { otherProjects } from "@/app/data/otherProjects";

const BASE_URL = "https://iremercadal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/about`, priority: 0.9 },
    { url: `${BASE_URL}/directing`, priority: 0.8 },
    { url: `${BASE_URL}/cinematography`, priority: 0.8 },
    { url: `${BASE_URL}/other`, priority: 0.7 },
  ];

  const directingPages = projects
    .filter((p) => p.roles?.includes("Director"))
    .map((p) => ({ url: `${BASE_URL}/directing/${p.slug}`, priority: 0.7 }));

  const cinematographyPages = projects
    .filter((p) => p.roles?.includes("Cinematographer"))
    .map((p) => ({ url: `${BASE_URL}/cinematography/${p.slug}`, priority: 0.7 }));

  const otherPages = otherProjects.map((p) => ({
    url: `${BASE_URL}/other/${p.slug}`,
    priority: 0.6,
  }));

  return [...staticPages, ...directingPages, ...cinematographyPages, ...otherPages];
}
