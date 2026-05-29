/**
 * Post-build static prerender — bakes full HTML for each route so crawlers
 * receive content without executing JavaScript.
 */
import http from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

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

const LAUNCH_ARGS = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];

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

function localChromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);

  return candidates.find((p) => existsSync(p)) ?? null;
}

async function launchBrowser() {
  // Vercel / Linux CI: bundled Chromium (no system libnspr4 dependency)
  if (process.env.VERCEL === '1' || process.env.CI === 'true') {
    chromium.setGraphicsMode = false;
    return puppeteer.launch({
      args: [...chromium.args, ...LAUNCH_ARGS],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  // Local dev: use installed Chrome / Chromium
  const executablePath = localChromePath();
  if (!executablePath) {
    throw new Error(
      'Chrome not found for prerender. Install Google Chrome or set CHROME_PATH to your browser executable.',
    );
  }

  return puppeteer.launch({
    executablePath,
    headless: true,
    args: LAUNCH_ARGS,
  });
}

async function prerender() {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('SKIP_PRERENDER=1 — skipping prerender step');
    return;
  }

  const server = await serveDist();
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await launchBrowser();

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
