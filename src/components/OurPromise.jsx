const pillars = [
  {
    icon: '⚖️',
    title: 'Insurance Expertise, Not Just Roofing',
    desc: 'Our team includes licensed adjusters who work exclusively for homeowners. We ensure your claim gets the attention it deserves.',
  },
  {
    icon: '🔎',
    title: 'Transparency, No Hidden Agendas',
    desc: 'Complete transparency from estimate to invoice. No hidden fees or surprise charges.',
  },
  {
    icon: '🧱',
    title: 'Quality That Stands the Test of Time',
    desc: 'Premium materials from trusted brands like IKO, TAMKO, Owens Corning, and GAF.',
  },
  {
    icon: '🤝',
    title: 'Partnership Beyond the Project',
    desc: '5-year workmanship warranty and ongoing support.',
  },
];

const integrity = [
  {
    icon: '⚡',
    title: 'Speed with Precision',
    desc: 'Residential replacements often in 1 day; commercial timelines depend on size (a few days up to ~30).',
  },
  {
    icon: '📢',
    title: 'Direct Communication',
    desc: 'No layers of management, just straight answers.',
  },
  {
    icon: '🏗️',
    title: 'Premium Materials Promise',
    desc: 'No shortcuts. Only trusted brands and suppliers.',
  },
  {
    icon: '📋',
    title: 'Insurance Claim Mastery',
    desc: 'We know storm damage vs. wear & tear vs. defective installation.',
  },
];

export default function OurPromise() {
  return (
    <section className="py-24 bg-rhino-gray" id="promise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">
            OUR PROMISE
          </div>
          <h2 className="section-title">OUR PROMISE IS SIMPLE: If the problem returns, so will we.</h2>
          <p className="section-subtitle mx-auto mt-4">
            At Blue Rhino Roofing, we've dedicated ourselves to supporting homeowners not just during the project — but long after completion.
            We prioritize making sure you're even happier after the job is done. While others just build roofs, we build relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-heading font-bold text-rhino-blue text-base mb-2">{p.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-rhino-blue rounded-3xl p-8 md:p-12">
          <h3 className="font-heading font-black text-2xl md:text-3xl text-white text-center mb-10">
            Integrity in Action
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrity.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-heading font-bold text-white text-sm mb-1">{item.title}</div>
                <p className="font-body text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
