import { Link } from 'react-router-dom';

const emergencies = [
  { icon: '🌪️', title: 'Storm Damage Emergency', desc: 'Immediate response for hail, wind, and hurricane damage with full insurance claim assistance. We deploy fast when you need us most.' },
  { icon: '💧', title: 'Roof Leak Detection & Repair', desc: 'Advanced leak detection to find the source fast and provide permanent solutions — not just a patch that fails again in the next storm.' },
  { icon: '🏚️', title: 'Interior Water Damage', desc: 'Ceiling stains, drywall repair, and water damage restoration — all covered through your insurance claim.' },
];

export default function EmergencyServices() {
  return (
    <section className="py-20 bg-white" id="emergency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-red-100 text-red-600 font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">🚨 EMERGENCY SERVICES</div>
          <h2 className="section-title">Emergency Roof Repair in Houston & Katy</h2>
          <p className="section-subtitle mx-auto mt-4">Fast help when you need it — storm damage, leaks, and interior water damage with documentation and insurance claim assistance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {emergencies.map((e) => (
            <div key={e.title} className="card border-t-4 border-red-500">
              <div className="text-4xl mb-4">{e.icon}</div>
              <h3 className="font-heading font-bold text-xl text-rhino-blue mb-3">{e.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-600 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="font-heading font-black text-2xl mb-2">Active Leak or Storm Damage Right Now?</h3>
            <p className="font-body text-red-100">Call us immediately — we prioritize emergency calls for Houston and Katy homeowners.</p>
          </div>
          <a href="tel:+13467338558" className="bg-white text-red-600 font-heading font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors whitespace-nowrap text-lg inline-flex items-center gap-2 shrink-0">
            📞 (346) 733-8558
          </a>
        </div>
      </div>
    </section>
  );
}
