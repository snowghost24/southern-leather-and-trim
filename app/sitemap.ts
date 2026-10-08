import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/leather",
    "/detailing",
    ...(site.gallery.length ? ["/gallery"] : []),
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
