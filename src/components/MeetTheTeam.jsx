/** Team section graphic — inline SVG so it always renders on Vercel (no external file). */
function TeamTruckGraphic() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 500"
      width={800}
      height={500}
      className="w-full h-48 sm:h-56"
      role="img"
      aria-label="Blue Rhino Roofing service team and truck serving Houston and Katy Texas"
    >
      <rect width="800" height="500" fill="#0A2463" />
      <rect x="80" y="220" width="420" height="140" rx="12" fill="#fbbf24" />
      <rect x="500" y="260" width="180" height="100" rx="8" fill="#1e3a8a" />
      <circle cx="200" cy="380" r="40" fill="#111827" />
      <circle cx="560" cy="380" r="40" fill="#111827" />
      <text
        x="400"
        y="120"
        textAnchor="middle"
        fill="#fbbf24"
        fontFamily="Arial, sans-serif"
        fontSize="36"
        fontWeight="bold"
      >
        BLUE RHINO ROOFING
      </text>
      <text
        x="400"
        y="170"
        textAnchor="middle"
        fill="#e5e7eb"
        fontFamily="Arial, sans-serif"
        fontSize="18"
      >
        Licensed adjusters - Houston and Katy TX
      </text>
    </svg>
  );
}

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">MEET THE TEAM</div>
            <h2 className="section-title mb-6">Meet the Blue Rhino Roofing Team</h2>
            <blockquote className="border-l-4 border-rhino-yellow pl-6 mb-8">
              <p className="font-body text-gray-700 text-lg italic leading-relaxed">
                "At Blue Rhino Roofing, we're licensed Texas insurance adjusters AND your roofers. We see both sides of the claim — and we only work for homeowners. That means we know exactly what your insurance company is looking for, and we make sure nothing gets missed. Let us protect your home and your wallet."
              </p>
            </blockquote>
            <div className="flex flex-col gap-3">
              {[
                { icon: '⭐', label: '4.8/5 Customer Rating' },
                { icon: '🏆', label: 'HAAG Engineering Certified for Storm Damage Inspections & Evaluations' },
                { icon: '⚖️', label: 'Licensed TX Insurance Adjusters — Working Only for Homeowners' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-rhino-gray rounded-xl px-5 py-3 border border-gray-100">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <span className="font-heading font-semibold text-rhino-blue text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <figure className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <TeamTruckGraphic />
            </figure>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '4+', label: 'Years Storm Inspection Experience', icon: '📋', color: 'bg-rhino-blue text-white' },
                { num: 'TX', label: 'Licensed Insurance Adjusters on Staff', icon: '⚖️', color: 'bg-rhino-yellow text-rhino-blue' },
                { num: 'HAAG', label: 'Engineering Certified Inspectors', icon: '🏆', color: 'bg-rhino-yellow text-rhino-blue' },
                { num: 'By scope', label: 'Residential often 1 day · Commercial a few days–30', icon: '⚡', color: 'bg-rhino-blue text-white' },
              ].map(({ num, label, icon, color }) => (
                <div key={label} className={`${color} rounded-2xl p-6 shadow-lg`}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-display text-3xl mb-1">{num}</div>
                  <div className="font-body text-sm opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
