import type { MetadataRoute } from "next";
import { getHomepageUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getHomepageUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
