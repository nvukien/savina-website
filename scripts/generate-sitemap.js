#!/usr/bin/env node
/**
 * Generate sitemap.xml + update robots.txt
 * Chạy trước `vite build` để output `public/sitemap.xml` được include vào dist.
 *
 * Usage:
 *   node scripts/generate-sitemap.js [--baseUrl=https://savina.vn]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const COURSES_PATH = join(ROOT, 'src/data/courses.json');

// Parse args
const args = Object.fromEntries(
  process.argv.slice(2).filter(a => a.startsWith('--')).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const BASE_URL = (args.baseUrl || process.env.SITE_URL || 'https://savina.vn').replace(/\/$/, '');
const TODAY = new Date().toISOString().slice(0, 10);

// Static routes — đồng bộ với src/config/routes.js
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/chuong-trinh', priority: '0.9', changefreq: 'weekly' },
  { path: '/enrollment', priority: '0.7', changefreq: 'monthly' },
  { path: '/dang-ky', priority: '0.9', changefreq: 'monthly' },
  { path: '/news', priority: '0.6', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
];

// Dynamic course routes
let courseRoutes = [];
if (existsSync(COURSES_PATH)) {
  const { courses } = JSON.parse(readFileSync(COURSES_PATH, 'utf-8'));
  courseRoutes = courses.map(c => ({
    path: `/chuong-trinh/${c.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));
}

const allRoutes = [...STATIC_ROUTES, ...courseRoutes];
const LANGS = ['vi', 'en', 'ja'];

function urlEntry(route) {
  const fullUrl = `${BASE_URL}${route.path}`;
  const alternates = LANGS.map(lang =>
    `    <xhtml:link rel="alternate" hreflang="${lang}" href="${fullUrl}?lang=${lang}" />`
  ).join('\n');
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl}" />
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allRoutes.map(urlEntry).join('\n')}
</urlset>
`;

const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log(`✓ sitemap.xml generated (${allRoutes.length} URLs) → ${sitemapPath}`);

// robots.txt
const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dang-ky/success/

Sitemap: ${BASE_URL}/sitemap.xml
`;

const robotsPath = join(PUBLIC_DIR, 'robots.txt');
writeFileSync(robotsPath, robots, 'utf-8');
console.log(`✓ robots.txt updated → ${robotsPath}`);
