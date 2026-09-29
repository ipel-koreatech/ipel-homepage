import type { MetadataRoute } from "next";

const base = "https://ipel-koreatech.vercel.app";

const routes = [
  "",
  "/people",
  "/people/members",
  "/people/gallery",
  "/research",
  "/projects",
  "/publications",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
