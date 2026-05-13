const reasons = [
  { icon: '⚖️', title: 'Licensed Insurance Adjusters', desc: 'Our team includes licensed Texas adjusters who work only for homeowners. We know exactly what carriers look for — and we make sure nothing gets missed.' },
  { icon: '🏆', title: 'HAAG Engineering Certified', desc: 'HAAG Engineering certified for storm damage inspections and evaluations. Insurance companies respect HAAG credentials — it gives your claim more weight.' },
  { icon: '🧱', title: 'Premium Materials Only', desc: 'We use trusted brands like IKO, TAMKO, Owens Corning, and GAF. No cheap substitutes, no shortcuts — ever.' },
  { icon: '💵', title: 'Transparent Pricing', desc: 'Honest assessments, upfront estimates, no hidden fees. What we quote is what you pay — complete transparency from estimate to invoice.' },
  { icon: '🛡️', title: '5-Year Workmanship Warranty', desc: 'All workmanship backed by our 5-year labor warranty, plus 30-year manufacturer warranty on materials. We stand behind every nail.' },
  { icon: '📞', title: 'Direct Team Involvement', desc: 'No layers of management. You talk directly to decision-makers. Fast answers, direct communication, and real accountability.' },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-rhino-blue clip-diagonal-reverse" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">WHY BLUE RHINO?</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Why Houston Homeowners Choose Blue Rhino Roofing</h2>
          <p className="font-body text-gray-300 text-lg mt-4 max-w-2xl mx-auto">We're not just another roofing company. We're your licensed advocate — from certified inspection to final nail.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{r.icon}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="font-body text-gray-300 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
