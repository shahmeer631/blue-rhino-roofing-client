export default function DeductibleInfo() {
  return (
    <section className="py-20 bg-rhino-gray" id="deductible">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">KNOW THE FACTS</div>
          <h2 className="section-title">Understanding Your Insurance Deductible</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-heading font-bold text-xl text-rhino-blue mb-4">What Is a Deductible?</h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
              Your deductible is the amount you're responsible for paying before your insurance company covers the rest of your claim. It may be a specific dollar amount or a percentage of your home's insured value.
            </p>
            <div className="bg-rhino-yellow/10 border border-rhino-yellow rounded-xl p-4 mb-4">
              <p className="font-body text-gray-700 text-sm"><strong>Example:</strong> On a home insured for $150,000, a 2% deductible means you'd pay $3,000 out of pocket before insurance covers the rest.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                'Your deductible applies to each claim you file — not once per year like health insurance.',
                'Higher deductibles generally mean lower premium payments, but make sure you can afford the out-of-pocket cost if damage occurs.',
                'Filing small claims may affect how much you pay for insurance later.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-gray-600 text-sm">
                  <span className="text-rhino-blue font-bold shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl shrink-0">⚠️</span>
                <div>
                  <h3 className="font-heading font-bold text-red-700 text-lg mb-2">Beware of Contractors Who Offer to "Waive" Your Deductible</h3>
                  <p className="font-body text-red-700 text-sm leading-relaxed mb-3">
                    Under <strong>Texas law, it is illegal</strong> for a contractor to waive, absorb, or help you avoid paying your deductible. Contractors who do this may be:
                  </p>
                  <ul className="flex flex-col gap-1 mb-3">
                    {['Inflating repair costs', 'Submitting false information to your insurance company', 'Cutting corners with lower quality materials'].map((item) => (
                      <li key={item} className="font-body text-red-600 text-sm flex items-center gap-2">
                        <span className="text-red-500">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-body text-red-700 text-xs font-semibold">This is considered fraud and can result in fines or criminal charges.</p>
                </div>
              </div>
            </div>

            <div className="bg-rhino-blue rounded-2xl p-6 text-white">
              <div className="flex items-start gap-3">
                <span className="text-3xl shrink-0">✅</span>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">Blue Rhino Roofing Will Never Waive Your Deductible</h3>
                  <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">
                    We operate with full transparency and in compliance with Texas law. Your insurance company can ask for proof that you paid your deductible before paying the full amount of your claim.
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-gray-400 text-xs">Verify this information directly from the Texas Department of Insurance:</p>
                    <a href="https://www.tdi.texas.gov/tips/deductibles.html" target="_blank" rel="noopener noreferrer" className="text-rhino-yellow text-xs hover:underline font-body break-all">tdi.texas.gov/tips/deductibles.html</a>
                    <a href="https://www.tdi.texas.gov/tips/can-a-contractor-waive-my-deductible.html" target="_blank" rel="noopener noreferrer" className="text-rhino-yellow text-xs hover:underline font-body break-all">tdi.texas.gov/tips/can-a-contractor-waive-my-deductible.html</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
