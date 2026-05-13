/**
 * Backend base URL for API calls.
 * Local dev: leave unset → same-origin `/api/...` is proxied by Vite to localhost:5000.
 * Production (Vercel): set VITE_API_URL to your Railway public URL, no trailing slash
 * (e.g. https://your-service.up.railway.app).
 */
let warnedMissingApiBase = false;

export function apiUrl(path) {
  const base = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');
  if (
    import.meta.env.PROD &&
    !base &&
    path.startsWith('/api') &&
    typeof window !== 'undefined' &&
    !warnedMissingApiBase
  ) {
    warnedMissingApiBase = true;
    console.error(
      '[Blue Rhino] VITE_API_URL is missing at build time. Vercel → Settings → Environment Variables: add VITE_API_URL = your Railway URL, then Redeploy. Name must start with VITE_.'
    );
  }
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
