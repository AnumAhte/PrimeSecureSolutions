import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

/**
 * /privacy and /terms are disallowed to match the `robots: noindex` those
 * pages already set, so crawlers get one consistent instruction while the
 * real legal text is outstanding. Remove both lines once it is published.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/terms"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
