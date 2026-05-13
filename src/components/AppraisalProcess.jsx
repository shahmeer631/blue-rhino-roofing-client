const steps = [
  { num: 1, title: 'Your Home Sustains Covered Damage', desc: 'A storm, hail, wind, or other covered event causes damage to your home.' },
  { num: 2, title: 'Your Insurance Company Offers a Settlement', desc: '...that you believe is too low to properly fix your home.' },
  {
    num: 3,
    title: 'You Have the Right to Demand an Appraisal',
    desc: 'As a homeowner, you have the legal right to demand an independent appraisal of the damage to your property and the true cost of repairs. Both you and your insurance company each hire your own independent appraiser. Once the appraisal process begins, the insurance company has no say in the outcome — nor does anyone else. The decision rests entirely with the independent appraisers (and the umpire, if needed). The process is straightforward, and we make it simple.',
  },
  { num: 4, title: 'The Insurance Company Hires Their Appraiser', desc: 'The insurance company selects their own independent appraiser to represent their side.' },
  { num: 5, title: 'Both Appraisers Investigate the Loss', desc: 'Each appraiser inspects the property and establishes the degree of damage and the cost for repairs.' },
  {
    num: 6,
    title: 'Agreement or Impasse',
    bullets: [
      { label: 'Appraisers Agree', text: 'If both appraisers agree on the value, they sign an Executed Award and the settlement is final.' },
      { label: 'Impasse', text: 'If the two appraisers cannot agree, a neutral third party — the umpire — is assigned.' },
    ],
  },
  { num: 7, title: 'The Umpire Renders a Final Award', desc: 'The umpire reviews both appraisals and renders a final judgment and award.' },
];

export default function AppraisalProcess() {
  return (
    <section className="py-24 bg-white" id="appraisal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">YOUR RIGHTS</div>
          <h2 className="section-title">Your Rights — The Insurance Appraisal Process</h2>
          <p className="section-subtitle mx-auto mt-4">
            If your insurance company's settlement doesn't seem fair, you have the right to request an appraisal. Here's how it works.
          </p>
        </div>

        <div className="bg-rhino-yellow/10 border border-rhino-yellow rounded-2xl p-6 mb-10 flex items-start gap-4">
          <span className="text-4xl shrink-0">💡</span>
          <div>
            <h3 className="font-heading font-bold text-rhino-blue text-lg mb-1">You Don't Need an Attorney</h3>
            <p className="font-body text-gray-700 text-sm leading-relaxed">
              Most homeowners don't know they have the legal right to challenge an unfair insurance settlement — <strong>without hiring an attorney</strong>. The appraisal process is often the best way to get the most fair estimate and decision. The typical cost for an appraisal is between <strong>$1,000–$2,000</strong>. If we believe we can win, <strong>Blue Rhino Roofing may cover the cost of the appraisal for the homeowner.</strong> Keep in mind, you will still be responsible for paying your deductible. We'll explain the entire process and walk you through it step by step.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rhino-blue via-rhino-yellow to-rhino-blue hidden md:block" />
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-rhino-blue rounded-full flex items-center justify-center text-rhino-yellow font-display text-xl shrink-0 z-10 shadow-lg">{step.num}</div>
                <div className="flex-1 bg-rhino-gray rounded-2xl p-5 border border-gray-100">
                  <h4 className="font-heading font-bold text-rhino-blue mb-1">Step {step.num} — {step.title}</h4>
                  {step.desc && <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>}
                  {step.bullets && (
                    <ul className="mt-2 space-y-2">
                      {step.bullets.map((b) => (
                        <li key={b.label} className="font-body text-gray-600 text-sm leading-relaxed">
                          <strong className="text-rhino-blue">{b.label}:</strong> {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-white border-2 border-rhino-yellow rounded-2xl p-6 shadow-lg">
          <h3 className="font-heading font-bold text-rhino-blue text-lg mb-2">Executed Award</h3>
          <p className="font-body text-gray-700 text-sm leading-relaxed">
            An Executed Award requires two signatures: either both appraisers, or — in the event of an impasse — one appraiser and the umpire.
            <strong className="text-rhino-blue"> Your insurance company must pay what is decided.</strong>
          </p>
        </div>

        <div className="mt-10 bg-rhino-blue rounded-2xl p-6 text-center">
          <h3 className="font-heading font-bold text-white text-xl mb-2">Think Your Claim Was Underpaid?</h3>
          <p className="font-body text-gray-300 text-sm mb-5">Call us. We'll review your claim for free and tell you honestly if you have a case.</p>
          <a href="tel:+13467338558" className="btn-primary inline-flex">📞 Call (346) 733-8558 — Free Review</a>
        </div>
      </div>
    </section>
  );
}
