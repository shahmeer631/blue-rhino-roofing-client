/** Inline badge graphics — avoids broken external SVG/img paths in dev and production. */

function LicensedBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 128"
      width={280}
      height={128}
      className="w-full h-32 mx-auto"
      role="img"
      aria-label="Texas licensed and insured roofing contractor badge"
    >
      <rect width="280" height="128" rx="12" fill="#0A2463" />
      <text
        x="140"
        y="55"
        textAnchor="middle"
        fill="#fbbf24"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
      >
        LICENSED
      </text>
      <text
        x="140"
        y="85"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        fontSize="14"
      >
        Bonded and Insured - TX
      </text>
    </svg>
  );
}

function HaagBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 128"
      width={280}
      height={128}
      className="w-full h-32 mx-auto"
      role="img"
      aria-label="HAAG Engineering certified storm damage roof inspector badge"
    >
      <rect width="280" height="128" rx="12" fill="#fbbf24" />
      <text
        x="140"
        y="55"
        textAnchor="middle"
        fill="#0A2463"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
      >
        HAAG CERTIFIED
      </text>
      <text
        x="140"
        y="85"
        textAnchor="middle"
        fill="#0A2463"
        fontFamily="Arial, sans-serif"
        fontSize="13"
      >
        Storm damage inspections
      </text>
    </svg>
  );
}

function AdjusterBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 128"
      width={280}
      height={128}
      className="w-full h-32 mx-auto"
      role="img"
      aria-label="Licensed Texas insurance adjuster on staff for homeowner claims"
    >
      <rect width="280" height="128" rx="12" fill="#1e3a8a" />
      <text
        x="140"
        y="50"
        textAnchor="middle"
        fill="#fbbf24"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
      >
        TX LICENSED
      </text>
      <text x="140" y="78" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontSize="14">
        Insurance adjusters
      </text>
      <text x="140" y="100" textAnchor="middle" fill="#93c5fd" fontFamily="Arial, sans-serif" fontSize="11">
        Working for homeowners only
      </text>
    </svg>
  );
}

const credentials = [
  { Badge: LicensedBadge, title: 'Licensed, bonded & insured' },
  { Badge: HaagBadge, title: 'HAAG Engineering certified' },
  { Badge: AdjusterBadge, title: 'Licensed insurance adjusters' },
];

export default function CredentialsGallery() {
  return (
    <section className="py-12 bg-rhino-gray border-y border-gray-100" aria-label="Licenses and certifications">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="sr-only">Licenses, insurance, and certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {credentials.map(({ Badge, title }) => (
            <figure key={title} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-center">
              <Badge />
              <figcaption className="font-heading font-bold text-rhino-blue text-sm mt-3">{title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
