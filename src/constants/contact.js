/** Company inbox */
export const COMPANY_EMAIL = 'shawn@bluerhinoroofing.net';

/** Gmail compose in the browser (avoids broken corporate mailto handlers). */
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(COMPANY_EMAIL)}`;
