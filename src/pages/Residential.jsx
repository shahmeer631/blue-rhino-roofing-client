import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { RESIDENTIAL_META } from '../seo/pageMeta';
import { breadcrumbSchema, localBusinessSchema, webPageSchema } from '../seo/schema';
import EstimateForm from '../components/EstimateForm';

const roofTypes = [
  { icon: '🏠', name: 'Asphalt Shingles', desc: 'The most popular choice for Houston homes. Durable, cost-effective, and available from trusted brands like IKO, TAMKO, Owens Corning, and GAF. Excellent in the Texas climate.', lifespan: '20–30 yrs', cost: '$', best: 'Most homeowners' },
  { icon: '🔩', name: 'Metal Roofing', desc: 'Premium durability with 50+ year lifespan. Energy efficient, fire resistant, and excellent for Houston\'s hail and high-wind storms. A long-term investment that pays off.', lifespan: '50+ yrs', cost: '$$$', best: 'Long-term value' },
  { icon: '🧱', name: 'Tile Roofing', desc: 'Clay or concrete tile adds dramatic curb appeal and exceptional longevity. Popular in Houston\'s upscale communities and neighborhoods.', lifespan: '40–50 yrs', cost: '$$$', best: 'Curb appeal' },
  { icon: '🪵', name: 'Wood Shake', desc: 'Natural beauty with great insulation. Requires more maintenance but delivers a classic, upscale look for traditional Houston-area homes.', lifespan: '25–30 yrs', cost: '$$', best: 'Traditional homes' },
  { icon: '🔲', name: 'Slate Roofing', desc: 'The gold standard of roofing — natural stone with 100+ year lifespan. A premium investment that dramatically increases resale value.', lifespan: '100+ yrs', cost: '$$$$', best: 'Premium homes' },
  { icon: '🌿', name: 'Storm-Rated Systems', desc: 'High-impact, Class 4 rated shingles specifically recommended for Houston\'s hail corridor. May qualify you for insurance premium discounts.', lifespan: '30+ yrs', cost: '$$', best: 'Storm-prone areas' },
];

const process = [
  { step: '1', title: 'Free Storm Inspection', desc: 'HAAG-certified inspection, all damage documented with photos and a detailed written report — at zero cost.' },
  { step: '2', title: 'Insurance Claim Support', desc: 'We help you file the claim with proper documentation. Licensed adjusters on staff — we know the language carriers use.' },
  { step: '3', title: 'Expert Installation', desc: 'Certified crew installs your roof with premium IKO, TAMKO, Owens Corning, or GAF materials. Most jobs done in 1 day.' },
  { step: '4', title: 'Final Inspection & Warranty', desc: 'We walk the finished job with you. 5-year workmanship warranty + 30-year manufacturer warranty provided at completion.' },
];

export default function Residential() {
  return (
    <>
      <SeoHead
        {...RESIDENTIAL_META}
        jsonLd={[
          localBusinessSchema(),
          webPageSchema({ path: RESIDENTIAL_META.path, name: RESIDENTIAL_META.title, description: RESIDENTIAL_META.description }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Residential Roofing', url: '/residential' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-rhino-blue pt-28 pb-16 clip-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm mb-6">RESIDENTIAL ROOFING</div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-none mb-6">
              Your Houston Home Deserves<br /><span className="text-rhino-yellow">The Best Roof.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              From full replacements to emergency storm repairs, we handle every residential roofing job with premium materials, expert craftsmanship, and licensed insurance adjuster support — backed by a 5-year workmanship warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13467338558" className="btn-primary">📞 Call (346) 733-8558</a>
              <Link to="/contact" className="btn-secondary">Get Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roof types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Roof Types We Install in Houston</h2>
            <p className="section-subtitle mx-auto mt-4">Not sure which roof is right for your home? We'll help you find the perfect match for your budget, neighborhood, and Houston's climate. We use only trusted brands: IKO, TAMKO, Owens Corning, and GAF.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofTypes.map((r) => (
              <div key={r.name} className="card">
                <div className="text-4xl mb-3">{r.icon}</div>
                <h3 className="font-heading font-bold text-xl text-rhino-blue mb-2">{r.name}</h3>
                <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">{r.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-blue-100 text-rhino-blue px-3 py-1 rounded-full font-heading font-semibold">⏱ {r.lifespan}</span>
                  <span className="bg-yellow-100 text-rhino-blue px-3 py-1 rounded-full font-heading font-semibold">💰 {r.cost}</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-heading font-semibold">✓ {r.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-rhino-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Simple 4-Step Process</h2>
            <p className="section-subtitle mx-auto mt-4">We make roofing simple, stress-free, and fully supported from first call to final warranty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 bg-rhino-blue text-white rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-4 shadow-lg">{p.step}</div>
                <h4 className="font-heading font-bold text-rhino-blue mb-2">{p.title}</h4>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials callout */}
      <section className="py-12 bg-rhino-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-heading font-bold text-white text-xl mb-3">Premium Materials — Only Trusted Brands</h3>
          <p className="font-body text-gray-300 text-sm mb-6">We never use cheap substitutes. Every roof we install uses materials from the manufacturers that Houston homeowners and insurance companies trust most.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['IKO', 'TAMKO', 'Owens Corning', 'GAF'].map((brand) => (
              <span key={brand} className="bg-white/10 border border-white/20 text-white font-heading font-bold px-6 py-2.5 rounded-xl text-lg hover:bg-rhino-yellow hover:text-rhino-blue transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-rhino-gray border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center font-body text-sm text-gray-600">
          Also see our{' '}
          <Link to="/commercial" className="text-rhino-blue-mid font-semibold hover:underline">commercial roofing</Link>
          ,{' '}
          <Link to="/#insurance" className="text-rhino-blue-mid font-semibold hover:underline">insurance claim process</Link>
          , and{' '}
          <Link to="/contact" className="text-rhino-blue-mid font-semibold hover:underline">free inspection form</Link>.
        </div>
      </section>

      {/* Estimate */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Get a Free Estimate in Houston or Katy</h2>
            <p className="section-subtitle mx-auto mt-4">Ready to get started? Fill out the form and we'll be in touch within 30 minutes during business hours.</p>
          </div>
          <div className="bg-rhino-gray rounded-3xl p-8">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
