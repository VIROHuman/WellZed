// Generates public sitemap.xml from the same route list used by the app.
// Run automatically as part of `npm run build` (see package.json).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DOMAIN = process.env.SITE_DOMAIN || "https://www.wellzed.com.au";

// Keep in sync with src/data/site.js NDIS_PRODUCTS / NDIS_UPDATES slugs.
const NDIS_PRODUCT_SLUGS = [
  "invoicing-app",
  "invoice-processor",
  "budget-calculator",
  "budget-health-check",
  "support-item-finder",
  "mmm-finder",
];

const NDIS_UPDATE_SLUGS = [
  "pricing-arrangements-update",
  "claiming-process-notes",
  "product-release-notes",
];

const CORE_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/what-we-build", priority: "0.9", changefreq: "monthly" },
  { path: "/how-we-work", priority: "0.9", changefreq: "monthly" },
  { path: "/why-wellzed", priority: "0.9", changefreq: "monthly" },
  { path: "/ndis", priority: "0.9", changefreq: "monthly" },
  { path: "/ndis/updates", priority: "0.7", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

const routes = [
  ...CORE_ROUTES,
  ...NDIS_PRODUCT_SLUGS.map((slug) => ({ path: `/ndis/products/${slug}`, priority: "0.7", changefreq: "monthly" })),
  ...NDIS_UPDATE_SLUGS.map((slug) => ({ path: `/ndis/updates/${slug}`, priority: "0.5", changefreq: "yearly" })),
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
writeFileSync(path.join(outDir, "sitemap.xml"), xml);
console.log(`sitemap.xml written with ${routes.length} URLs → ${outDir}/sitemap.xml`);
