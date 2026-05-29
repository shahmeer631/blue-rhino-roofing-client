/** BBB profile + before/after imagery (bundled via Vite so deploys always include files). */
import roofBefore from '../assets/images/roof-before.svg';
import roofAfter from '../assets/images/roof-after.svg';

const BBB_PROFILE_URL =
  'https://www.bbb.org/us/tx/katy/profile/roofing-contractors/blue-rhino-roofing-0915-90075546';

export default function HomeTrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">
              ACCREDITED & TRUSTED
            </div>
            <h2 className="section-title text-left mb-4">Better Business Bureau Accredited</h2>
            <p className="font-body text-gray-600 leading-relaxed mb-6">
              Blue Rhino Roofing is a{' '}
              <strong className="text-rhino-blue">BBB Accredited Business</strong> with an A+ rating. We
              stand behind our work and invite you to read our full profile, accreditation details, and
              verified business information on the Better Business Bureau website.
            </p>
            <a
              href={BBB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-rhino-blue text-white font-heading font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-95 transition-opacity"
            >
              <span className="text-2xl" aria-hidden>
                ✓
              </span>
              View our BBB profile (A+)
            </a>
            <p className="font-body text-gray-500 text-xs mt-4">
              Opens the official Better Business Bureau listing in a new tab.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-rhino-blue text-xl mb-6 text-center lg:text-left">
              Roof transformation — before and after
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-rhino-gray">
                <img
                  src={roofBefore}
                  alt="Storm-damaged residential roof before replacement in Houston Texas"
                  title="Roof before storm damage repair"
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <figcaption className="font-heading font-bold text-rhino-blue text-sm px-4 py-3 bg-white border-t border-gray-100">
                  Before
                </figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-rhino-gray">
                <img
                  src={roofAfter}
                  alt="New residential roof after professional replacement in Katy Texas"
                  title="Roof after professional installation"
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <figcaption className="font-heading font-bold text-rhino-blue text-sm px-4 py-3 bg-white border-t border-gray-100">
                  After
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
