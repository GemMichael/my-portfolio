import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gemmichaeln.vercel.app/";

  const pages = ["/", "/about", "/projects", "/contact"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));
}
