import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-rhino-blue overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rhino-yellow opacity-5 transform skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-rhino-yellow opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6">
            <span className="w-2 h-2 bg-rhino-yellow rounded-full animate-pulse-slow" />
            Licensed adjuster–backed storm restoration
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Houston's Storm Damage Roofing Experts —{' '}
            <span className="text-rhino-yellow">We Work With Your Insurance Company</span>{' '}
            to Take the Stress Off of You
          </h1>
          <p className="font-heading font-semibold text-rhino-yellow text-sm mb-3 tracking-wide">
            Blue Rhino Roofing | Licensed Insurance Adjusters Who Work Only for Homeowners | Free Storm Inspections | Katy & Greater Houston Area
          </p>
          <p className="font-body text-gray-300 text-base leading-relaxed max-w-xl mb-8">
            Discover why homeowners across the Greater Houston Area trust Blue Rhino Roofing as their local roofing and insurance claim experts for storm damage repairs, roof replacement, and insurance claim support. We deliver honest assessments, transparent pricing, and permanent roofing solutions — backed by licensed insurance adjusters who work exclusively for homeowners, never for insurance companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="tel:+13467338558" className="btn-primary text-base px-8 py-4">
              📞 Call (346) 733-8558 — Free Storm Inspection
            </a>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4 flex flex-col items-center justify-center py-3 sm:py-4">
              <span>Get Free Estimate</span>
              <span className="text-xs font-body font-normal opacity-90 mt-0.5">No Obligation, Fast Response</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '🔍', title: 'Free Storm Damage Inspections', desc: 'Certified inspectors assess your roof at no cost' },
              { icon: '⚖️', title: 'Licensed Insurance Adjusters', desc: 'We work only for homeowners, never for carriers' },
              { icon: '🛡️', title: '5-Year Workmanship Warranty', desc: 'Plus 30-year manufacturer material warranty' },
              { icon: '🏆', title: 'HAAG Engineering Certified', desc: 'Certified for storm damage inspections and evaluations' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <div className="font-heading font-bold text-white text-xs leading-snug">{title}</div>
                  <div className="font-body text-gray-300 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            { num: '4.8/5', label: 'Customer Rating', icon: '⭐' },
            { num: 'HAAG', label: 'Engineering Certified', icon: '🏆' },
            { num: 'TX Licensed', label: 'Insurance Adjusters', icon: '⚖️' },
            { num: '$0', label: 'Cost for Storm Inspection', icon: '🔍' },
          ].map(({ num, label, icon }) => (
            <div key={label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-display text-3xl text-rhino-yellow">{num}</div>
              <div className="font-body text-gray-300 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 300 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
