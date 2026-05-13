import { Link } from 'react-router-dom';

const services = [
  { icon: '🏠', title: 'Residential Roofing', desc: 'Repair, replacement, maintenance. Asphalt, metal, all systems.', link: '/residential', color: 'from-blue-50 to-blue-100' },
  { icon: '🏢', title: 'Commercial Roofing', desc: 'TPO, modified bitumen, flat/low-slope systems.', link: '/commercial', color: 'from-yellow-50 to-yellow-100' },
  { icon: '⛈️', title: 'Storm Damage & Insurance Claims', desc: 'Licensed adjusters on staff. Full claim support.', link: '/contact', color: 'from-blue-50 to-blue-100' },
  { icon: '🏚️', title: 'Gutters & Siding', desc: 'Installation, repair, storm damage inspection.', link: '/contact', color: 'from-yellow-50 to-yellow-100' },
  { icon: '💧', title: 'Interior Water Damage', desc: 'Ceiling stains, drywall, water damage restoration.', link: '/contact', color: 'from-blue-50 to-blue-100' },
  { icon: '💳', title: 'Financing Available', desc: 'Through Express Financial. Flexible terms.', link: '/contact', color: 'from-yellow-50 to-yellow-100' },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">WHAT WE DO</div>
          <h2 className="section-title">Comprehensive Roofing Services for All of Houston</h2>
          <p className="section-subtitle mx-auto mt-4">From minor repairs to full replacements and insurance claims — we handle every roofing need with expert craftsmanship and unmatched service across the Greater Houston Area.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className={`card bg-gradient-to-br ${svc.color} border-0`}>
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="font-heading font-bold text-xl text-rhino-blue mb-3">{svc.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
              <Link to={svc.link} className="inline-flex items-center gap-2 text-rhino-blue-mid font-heading font-semibold text-sm hover:gap-3 transition-all">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
