import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EstimateForm from '../components/EstimateForm';

const systems = [
  { icon: '⬜', name: 'TPO Roofing', desc: 'The most popular commercial flat roofing system in Houston. Energy-efficient white membrane reflects UV rays, lowering cooling costs — critical in the Texas heat.', ideal: 'Retail, Offices, Warehouses' },
  { icon: '⬛', name: 'Modified Bitumen', desc: 'Multi-layer asphalt-based system with excellent puncture resistance and waterproofing. Time-tested reliability for Houston\'s flat and low-slope commercial roofs.', ideal: 'Apartment complexes, Large commercial' },
  { icon: '🔩', name: 'Metal Roofing', desc: 'Standing seam and corrugated metal systems for commercial buildings. Superior longevity, minimal maintenance, and excellent performance during Houston storm seasons.', ideal: 'Industrial, Agricultural, Mixed-use' },
  { icon: '🔵', name: 'PVC Roofing', desc: 'Chemical-resistant and highly durable single-ply membrane. Excellent for buildings with grease exhausts or chemical exposure in Houston\'s industrial corridor.', ideal: 'Restaurants, Labs, Industrial' },
  { icon: '⚫', name: 'EPDM (Rubber)', desc: 'Durable synthetic rubber membrane known for flexibility and weather resistance. Cost-effective with excellent long-term performance on low-slope roofs.', ideal: 'Low-slope commercial buildings' },
  { icon: '🏗️', name: 'Built-Up Roofing (BUR)', desc: 'Traditional multi-ply hot asphalt system offering excellent redundancy and long track record of performance on commercial properties across Houston.', ideal: 'Schools, Government buildings' },
];

const industries = ['Office Buildings', 'Warehouses', 'Retail Stores', 'Restaurants', 'Industrial Facilities', 'Schools & Institutions', 'HOA Complexes', 'Medical Facilities'];

export default function Commercial() {
  return (
    <>
      <Helmet>
        <title>Commercial Roofing Houston & Katy TX | Blue Rhino Roofing</title>
        <meta name="description" content="Professional commercial roofing in Houston and Katy TX. TPO, modified bitumen, metal, EPDM. Storm damage experts with insurance claim support for businesses. Free estimates." />
        <meta name="keywords" content="commercial roofing Houston, flat roof Katy TX, TPO roofing Houston, EPDM, business roofing, commercial roof replacement Houston, storm damage commercial" />
      </Helmet>

      {/* Hero */}
      <section className="bg-rhino-blue pt-28 pb-16 clip-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm mb-6">COMMERCIAL ROOFING</div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-none mb-6">
              Houston Business Roofing<br /><span className="text-rhino-yellow">Built to Last.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              Minimal disruption to your operations. Maximum durability for your investment. We've roofed warehouses, offices, retail centers, and everything in between across the Greater Houston Area — with insurance claim support when storm damage is involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13467338558" className="btn-primary">📞 (346) 733-8558</a>
              <Link to="/contact" className="btn-secondary">Request a Proposal</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-rhino-yellow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: 'Greater Houston', label: 'Service Area' },
              { num: 'Varies', label: 'Commercial: a couple of days to about 30 by scope' },
              { num: 'HAAG', label: 'Engineering Certified' },
              { num: '100%', label: 'Projects On Time & Budget' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-3xl text-rhino-blue">{num}</div>
                <div className="font-heading font-semibold text-rhino-blue text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Commercial Roofing Systems We Install</h2>
            <p className="section-subtitle mx-auto mt-4">We install every major commercial roofing system in Houston. Our team will assess your building and recommend the right solution for your needs, budget, and Houston's climate demands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((s) => (
              <div key={s.name} className="card">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-heading font-bold text-xl text-rhino-blue mb-2">{s.name}</h3>
                <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="text-xs bg-blue-50 text-rhino-blue px-3 py-1.5 rounded-full font-heading font-semibold inline-block">🏢 Best for: {s.ideal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-rhino-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-black text-4xl text-white mb-3">Industries We Serve in Houston</h2>
          <p className="text-gray-300 font-body mb-10">If your Houston-area building has a roof, we can handle it — including storm damage insurance claims.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="bg-white/10 border border-white/20 text-white font-heading font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-rhino-yellow hover:text-rhino-blue transition-colors cursor-default">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate */}
      <section className="py-24 bg-rhino-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Request a Commercial Proposal</h2>
            <p className="section-subtitle mx-auto mt-4">Tell us about your Houston-area project and we'll prepare a detailed scope and estimate.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
