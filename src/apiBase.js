/**
 * Backend base URL for API calls.
 * Local dev: leave unset → same-origin `/api/...` is proxied by Vite to localhost:5000.
 * Production (Vercel): set VITE_API_URL to your Railway public URL, no trailing slash
 * (e.g. https://your-service.up.railway.app).
 */
export function apiUrl(path) {
  const base = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
