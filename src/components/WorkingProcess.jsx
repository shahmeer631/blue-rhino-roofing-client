const steps = [
  { num: '1', icon: '🔍', title: 'Free Storm Inspection', desc: 'Thorough certified roof inspection, detailed estimate, no pressure.' },
  { num: '2', icon: '📋', title: 'Insurance Claim Support', desc: 'We help file your claim, prepare documentation, handle all paperwork.' },
  { num: '3', icon: '🔨', title: 'Expert Installation', desc: 'Certified crew, premium materials. Residential often 1 day; commercial varies by scope (a few days up to about 30).' },
  { num: '4', icon: '✅', title: 'Final Inspection & Warranty', desc: 'Quality check, 5-year workmanship warranty, 30-year manufacturer warranty, 100% satisfaction.' },
];

export default function WorkingProcess() {
  return (
    <section className="py-24 bg-rhino-gray" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">HOW IT WORKS</div>
          <h2 className="section-title">How Blue Rhino Roofing Works — Simple & Stress-Free</h2>
          <p className="section-subtitle mx-auto mt-4">From first call to final nail — we guide you through every step so you never have to worry about what comes next.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-rhino-yellow to-rhino-blue z-0" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-rhino-blue flex flex-col items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-rhino-yellow font-display text-xs">STEP {step.num}</span>
              </div>
              <h3 className="font-heading font-bold text-rhino-blue text-base mb-2">{step.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
