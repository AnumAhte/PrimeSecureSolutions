import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/content/site";

/**
 * Generated from the routes that actually exist, so a page cannot be added
 * without appearing here. The service pages come from `services.items`, the
 * same source `generateStaticParams` uses.
 *
 * /privacy and /terms are excluded deliberately: both are `robots: noindex`
 * until their real text is supplied, and listing a noindex page in a sitemap
 * sends search engines contradictory instructions.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => new URL(path, siteUrl).toString();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.4, changeFrequency: "weekly" },
  ];

  return [
    ...staticPages.map((page) => ({
      url: url(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.items.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
