import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gemmichaeln.vercel.app/";

  const pages = ["/hero", "/about", "/services", "/portfolio"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));
}
