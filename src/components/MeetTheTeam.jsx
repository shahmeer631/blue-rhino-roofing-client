import teamTruck from '../assets/images/team-truck.svg';

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
              <img
                src={teamTruck}
                alt="Blue Rhino Roofing service team and truck serving Houston and Katy Texas"
                title="Blue Rhino Roofing crew"
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
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
