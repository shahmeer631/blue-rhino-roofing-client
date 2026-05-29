import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../seo/site';

/**
 * Single source for per-page meta — avoids duplicate tags vs index.html shell.
 */
export default function SeoHead({
  title,
  description,
  path = '/',
  keywords,
  ogImage,
  jsonLd = [],
}) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
