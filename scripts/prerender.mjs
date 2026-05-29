/**
 * Post-build static prerender — bakes full HTML for each route so crawlers
 * receive content without executing JavaScript.
 */
import http from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const routes = ['/', '/about', '/residential', '/commercial', '/contact'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.ico': 'image/x-icon',
};

function resolveFile(urlPath) {
  const safePath = decodeURIComponent(urlPath.split('?')[0]);
  const relative = safePath === '/' ? 'index.html' : safePath.replace(/^\//, '');
  let filePath = join(dist, relative);

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return filePath;
  }

  const withIndex = join(filePath, 'index.html');
  if (existsSync(withIndex) && statSync(withIndex).isFile()) {
    return withIndex;
  }

  return join(dist, 'index.html');
}

function serveDist() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        const filePath = resolveFile(req.url || '/');
        const body = readFileSync(filePath);
        const type = MIME[extname(filePath)] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': type });
        res.end(body);
      } catch {
        res.writeHead(500).end('Server error');
      }
    });
    server.listen(0, () => resolve(server));
  });
}

function outFileForRoute(route) {
  if (route === '/') return join(dist, 'index.html');
  return join(dist, route.slice(1), 'index.html');
}

async function prerender() {
  const server = await serveDist();
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    for (const route of routes) {
      const url = `${base}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
      await page.waitForSelector('#root h1', { timeout: 20000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 500));

      const html = await page.content();
      const outPath = outFileForRoute(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, 'utf8');
      console.log(`prerendered ${route} -> ${outPath}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
