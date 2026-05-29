import credentialLicensed from '../assets/images/credential-licensed.svg';
import credentialHaag from '../assets/images/credential-haag.svg';
import credentialAdjuster from '../assets/images/credential-adjuster.svg';

const credentials = [
  {
    src: credentialLicensed,
    alt: 'Texas licensed and insured roofing contractor badge',
    title: 'Licensed, bonded & insured',
  },
  {
    src: credentialHaag,
    alt: 'HAAG Engineering certified storm damage roof inspector badge',
    title: 'HAAG Engineering certified',
  },
  {
    src: credentialAdjuster,
    alt: 'Licensed Texas insurance adjuster on staff for homeowner claims',
    title: 'Licensed insurance adjusters',
  },
];

export default function CredentialsGallery() {
  return (
    <section className="py-12 bg-rhino-gray border-y border-gray-100" aria-label="Licenses and certifications">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="sr-only">Licenses, insurance, and certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {credentials.map(({ src, alt, title }) => (
            <figure key={title} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-center">
              <img
                src={src}
                alt={alt}
                title={title}
                className="w-full h-32 object-contain mx-auto"
                loading="lazy"
                width={280}
                height={128}
              />
              <figcaption className="font-heading font-bold text-rhino-blue text-sm mt-3">{title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
