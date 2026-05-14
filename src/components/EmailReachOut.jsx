import { COMPANY_EMAIL, GMAIL_COMPOSE_URL } from '../constants/contact';

/** Single clickable address — opens Gmail compose in a new tab. */
export default function EmailReachOut({ variant = 'card' }) {
  if (variant === 'compact') {
    return (
      <a
        href={GMAIL_COMPOSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-2 text-gray-300 text-sm hover:text-rhino-yellow transition-colors font-body"
        aria-label={`Email ${COMPANY_EMAIL} (opens Gmail)`}
      >
        <span className="shrink-0">✉️</span>
        <span className="break-all">{COMPANY_EMAIL}</span>
      </a>
    );
  }

  return (
    <a
      href={GMAIL_COMPOSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body text-gray-700 text-xs tracking-tight hover:text-rhino-blue-mid transition-colors text-center block w-full whitespace-nowrap"
      aria-label={`Email ${COMPANY_EMAIL} (opens Gmail)`}
    >
      {COMPANY_EMAIL}
    </a>
  );
}
