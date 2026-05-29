/** Canonical site URL — set VITE_SITE_URL in production (e.g. Vercel env). */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL || 'https://www.bluerhinoroofing.net').replace(/\/$/, '');

export const BUSINESS = {
  name: 'Blue Rhino Roofing',
  legalName: 'Blue Rhino Roofing',
  phone: '(346) 733-8558',
  phoneE164: '+13467338558',
  email: 'help@BlueRhinoRoofing.net',
  streetAddress: '2717 Commercial Center Blvd Suite E200',
  addressLocality: 'Katy',
  addressRegion: 'TX',
  postalCode: '77494',
  addressCountry: 'US',
  priceRange: '$$',
  ratingValue: '4.8',
  reviewCount: '200',
  bbbUrl:
    'https://www.bbb.org/us/tx/katy/profile/roofing-contractors/blue-rhino-roofing-0915-90075546',
  openingHours: ['Mo-Sa 07:00-19:00'],
  areaServed: [
    'Houston',
    'Katy',
    'Sugar Land',
    'Cypress',
    'The Woodlands',
    'Spring',
    'Humble',
    'Pearland',
    'Friendswood',
    'Missouri City',
    'Richmond',
    'Memorial',
    'River Oaks',
    'Heights',
    'Montrose',
  ],
};

export const ROUTES = ['/', '/about', '/residential', '/commercial', '/contact'];

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-share.svg`;
