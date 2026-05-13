const steps = [
  { num: '01', icon: '🔍', title: 'Free Inspection & Documentation', desc: 'Thorough certified inspection, all storm damage documented with photos and detailed reports.' },
  { num: '02', icon: '📋', title: 'Insurance Claim Filing Support', desc: 'We help you file the claim with proper documentation that speaks the adjuster\'s language.' },
  { num: '03', icon: '🤝', title: 'Adjuster Meeting Assistance', desc: 'We meet with your insurance adjuster on-site to ensure proper assessment and nothing gets missed.' },
  { num: '04', icon: '✅', title: 'Approval & Expert Repair', desc: 'Once approved, our crew completes your roof with premium materials and 5-year workmanship warranty.' },
];

export default function InsuranceProcess() {
  return (
    <section className="py-24 bg-rhino-gray" id="insurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">INSURANCE CLAIMS</div>
          <h2 className="section-title">Storm Damage & Insurance Claims — Your Licensed Adjuster-Backed Roofing Team</h2>
          <p className="section-subtitle mx-auto mt-4">
            When storm damage strikes, Blue Rhino Roofing is your first call. Unlike other roofers, our team includes licensed Texas insurance adjusters who work only for homeowners — meaning we know exactly how carriers evaluate claims, what documentation they need, and how to handle underpayments and denials.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-rhino-blue via-rhino-yellow to-rhino-blue mx-32 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 ${i % 2 === 0 ? 'bg-rhino-blue' : 'bg-rhino-yellow'}`}>
                  {step.icon}
                </div>
                <div className={`text-xs font-heading font-black tracking-widest mb-2 ${i % 2 === 0 ? 'text-rhino-blue' : 'text-rhino-yellow-dark'}`}>STEP {step.num}</div>
                <h3 className="font-heading font-bold text-rhino-blue text-base mb-2">{step.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Appraisal rights callout */}
        <div className="mt-16 bg-white border-l-4 border-rhino-yellow rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl shrink-0">⚖️</span>
            <div>
              <h3 className="font-heading font-bold text-xl text-rhino-blue mb-2">Your Rights — The Insurance Appraisal Process</h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed mb-3">
                If your insurance company's settlement doesn't seem fair, you have the <strong>legal right to request an appraisal</strong> — without hiring an attorney. The appraisal process is often the best way to get the fairest settlement. Typical cost is $1,000–$2,000, and <strong>if we believe we can win, Blue Rhino Roofing may cover the appraisal cost for you.</strong> You will still be responsible for paying your deductible.
              </p>
              <p className="font-body text-gray-500 text-xs">We'll explain the entire process and walk you through it step by step.</p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-8 bg-rhino-blue rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-2">Storm damage? Don't wait.</h3>
            <p className="text-gray-300 font-body">Most insurance claims must be filed within a specific window. Call us today for a free certified inspection.</p>
          </div>
          <a href="tel:+13467338558" className="btn-primary whitespace-nowrap text-lg px-10 py-4 shrink-0">
            📞 Call (346) 733-8558 — It's Free
          </a>
        </div>
      </div>
    </section>
  );
}
