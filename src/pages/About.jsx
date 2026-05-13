import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const values = [
  { icon: '🤝', title: 'Integrity in every inspection', desc: 'Honest assessments every time — no manufactured damage, no inflated reports.' },
  { icon: '🔎', title: 'Transparency in every estimate', desc: 'Clear numbers from estimate through invoice — no hidden fees or surprises.' },
  { icon: '🧱', title: 'Quality in every installation', desc: 'Premium materials from IKO, TAMKO, Owens Corning, and GAF. No shortcuts.' },
  { icon: '🤜', title: 'Partnership beyond every project', desc: '5-year workmanship warranty and ongoing support after we leave the job site.' },
];

const team_badges = [
  { icon: '⭐', label: '4.8/5 Customer Rating' },
  { icon: '🏆', label: 'HAAG Engineering Certified for Storm Damage Inspections & Evaluations' },
  { icon: '⚖️', label: 'Licensed TX Insurance Adjusters — Working Only for Homeowners' },
];

const whyChoose = [
  { icon: '⚖️', title: 'Licensed Insurance Adjusters', desc: 'We work only for homeowners. We know exactly what carriers look for — and we make sure nothing gets missed on your claim.' },
  { icon: '🏆', title: 'HAAG Engineering Certified', desc: 'Certified for storm damage inspections and evaluations. Insurance companies respect HAAG Engineering credentials — it gives your claim more weight.' },
  { icon: '🧱', title: 'Premium Materials Only', desc: 'IKO, TAMKO, Owens Corning, and GAF. No cheap substitutes, no shortcuts.' },
  { icon: '💵', title: 'Transparent Pricing', desc: 'Honest assessments, upfront estimates, no hidden fees. What we quote is what you pay.' },
  { icon: '🛡️', title: '5-Year Workmanship Warranty', desc: 'All workmanship backed by our 5-year labor warranty, plus 30-year manufacturer warranty on materials.' },
  { icon: '📞', title: 'Direct Team Involvement', desc: 'No layers of management — just straight communication with decision-makers who care about your home.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Blue Rhino Roofing | Houston's Licensed Insurance Adjuster Roofers</title>
        <meta name="description" content="Blue Rhino Roofing is a Houston-based roofing company founded by licensed Texas insurance adjusters and HAAG Engineering Certified inspectors. We work only for homeowners." />
        <meta name="keywords" content="about Blue Rhino Roofing, Houston roofer, licensed insurance adjuster, HAAG certified, Katy Texas roofing" />
      </Helmet>

      {/* Hero */}
      <section className="bg-rhino-blue pt-28 pb-16 clip-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm mb-6">ABOUT US</div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-none mb-6">
              About Blue Rhino Roofing —<br /><span className="text-rhino-yellow">Our Story, Mission & Values</span>
            </h1>
            <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Blue Rhino Roofing is a Houston-based roofing company specializing in insurance-driven storm restoration. Founded by licensed Texas insurance adjusters and HAAG Engineering Certified inspectors for storm damage inspections and evaluations, Blue Rhino was born from a simple mission: give homeowners an honest advocate who understands both roofing AND insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">OUR STORY</div>
            <h2 className="section-title mb-6">Our Story</h2>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              Blue Rhino Roofing was started to serve families — plain and simple. With 4+ years of storm-related residential property inspection experience and a disciplined background, our team brings precision and integrity to every project.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              As licensed insurance adjusters, we saw firsthand how insurance companies underpay and deny legitimate storm damage claims. Blue Rhino exists to be the roofer who handles it — with the knowledge and credentials to get homeowners what they deserve.
            </p>
            <p className="font-body text-gray-700 font-semibold leading-relaxed border-l-4 border-rhino-yellow pl-4 italic">
              "At Blue Rhino Roofing, we're licensed Texas insurance adjusters AND your roofers. We see both sides of the claim — and we only work for homeowners. That means we know exactly what your insurance company is looking for, and we make sure nothing gets missed. Let us protect your home and your wallet."
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {team_badges.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-4 bg-rhino-gray rounded-2xl p-5 border border-gray-100">
                <span className="text-4xl shrink-0">{icon}</span>
                <span className="font-heading font-bold text-rhino-blue text-base">{label}</span>
              </div>
            ))}
            <div className="bg-rhino-blue rounded-2xl p-6 text-white">
              <div className="font-heading font-black text-4xl text-rhino-yellow mb-1">4+</div>
              <div className="font-body text-gray-300 text-sm">Years of storm-related residential property inspection experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-rhino-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">OUR VALUES</div>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-rhino-blue text-base mb-2">{v.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-rhino-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">WHY CHOOSE US</div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Why Houston Homeowners Choose Blue Rhino Roofing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((r) => (
              <div key={r.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{r.icon}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{r.title}</h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranties */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">WARRANTIES</div>
            <h2 className="section-title">Our Warranty Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-rhino-blue">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-heading font-bold text-xl text-rhino-blue mb-3">5-Year Workmanship Warranty</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">If your roof has issues due to installation within the first 5 years, we fix it.</p>
            </div>
            <div className="card border-l-4 border-rhino-yellow">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-heading font-bold text-xl text-rhino-blue mb-3">30-Year Manufacturer Warranty</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-3">Premium materials from IKO, TAMKO, Owens Corning, and GAF — all backed by manufacturer warranties. No cheap substitutes.</p>
              <p className="font-body text-gray-500 text-xs leading-relaxed"><strong>Exclusions:</strong> Caulking, sealants, coatings, painted or metal materials, natural wood defects. Owner must maintain gutters and perform routine care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rhino-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-rhino-blue mb-4">Ready to Work With Houston's Best?</h2>
          <p className="font-body text-rhino-blue/80 mb-8 text-lg">Get your free storm damage inspection today. No cost, no obligation — just honest answers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13467338558" className="btn-blue text-lg px-10 py-4">📞 Call (346) 733-8558</a>
            <Link to="/contact" className="bg-rhino-blue text-white font-heading font-bold px-10 py-4 rounded-lg hover:bg-rhino-blue-mid transition-colors inline-flex items-center gap-2 text-lg">Get Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
