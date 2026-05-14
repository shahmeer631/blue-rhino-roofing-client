import { Helmet } from 'react-helmet-async';
import EstimateForm from '../components/EstimateForm';
import EmailReachOut from '../components/EmailReachOut';

const faqs = [
  { q: 'What makes Blue Rhino different from other Houston roofers?', a: 'Our team includes licensed Texas insurance adjusters who work only for homeowners. Most roofers just fix roofs — we work with your insurance company to make sure you receive the full amount you deserve.' },
  { q: 'How much does a new roof cost in Houston?', a: 'Every roof is different — cost depends on size, materials, and complexity. We offer free estimates and financing through Express Financial so you know exactly what to expect before any work begins.' },
  { q: 'Do you handle the insurance claim process?', a: 'Yes. We handle everything from initial documentation to filing, supplement requests, adjuster meetings, and even appraisal demands if your claim is underpaid or denied.' },
  { q: 'What warranty do you offer?', a: '5-year workmanship warranty plus 30-year manufacturer warranty on materials from brands like IKO, TAMKO, Owens Corning, and GAF.' },
  { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in 1 day. Commercial roofs usually take a couple of days up to about 30 days, depending on the size and scope of work. Insurance claim projects often take 30–90 days from approval to completion.' },
  { q: 'What areas do you serve?', a: 'Houston, Katy, Sugar Land, Cypress, The Woodlands, Spring, Humble, Pearland, and all surrounding Greater Houston Area communities.' },
  { q: "What if my insurance company's offer seems too low?", a: "You have the legal right to request an appraisal — it's often the best way to get a fair settlement without hiring an attorney. The process typically costs $1,000–$2,000, and if we believe we can win, we may cover the appraisal cost for you. You will still need to pay your deductible. We'll walk you through every step." },
  { q: 'Will Blue Rhino Roofing waive my deductible?', a: 'No — and you should be cautious of any contractor who offers to. Under Texas law, it\'s illegal for a contractor to waive your deductible. We operate with full transparency and compliance. You can verify this at https://www.tdi.texas.gov/tips/can-a-contractor-waive-my-deductible.html' },
];

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '(346) 733-8558', href: 'tel:+13467338558' },
  { icon: '✉️', label: 'Email', emailCard: true },
  { icon: '📍', label: 'Office', value: '2717 Commercial Center Blvd, Suite E200, Katy, TX 77494', href: null },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 7am–7pm | Emergency: 24/7', href: null },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Blue Rhino Roofing | Free Storm Damage Inspection | Katy & Houston TX</title>
        <meta name="description" content="Contact Blue Rhino Roofing for a free storm damage inspection and estimate. Serving Houston, Katy, and the Greater Houston Area. Call (346) 733-8558." />
        <meta name="keywords" content="contact Blue Rhino Roofing, free roof inspection Houston, Katy roofing estimate, storm damage inspection" />
      </Helmet>

      {/* Hero */}
      <section className="bg-rhino-blue pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-rhino-yellow/20 border border-rhino-yellow/40 text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm mb-6">GET IN TOUCH</div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">Get Your Free Storm Damage Inspection</h1>
          <p className="font-body text-gray-300 text-lg max-w-xl mx-auto mb-2">Complete the form below and we will contact you within 30 minutes.</p>
          <p className="font-heading font-semibold text-rhino-yellow text-sm">Licensed Insurance Adjusters | HAAG Certified | Katy & Houston TX</p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon, label, value, href, emailCard }) => (
              <div key={label} className="card text-center min-w-0">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-heading font-bold text-rhino-blue text-xs uppercase tracking-widest mb-1">{label}</div>
                {emailCard ? (
                  <EmailReachOut variant="card" />
                ) : href ? (
                  <a href={href} className="font-body text-gray-700 text-sm hover:text-rhino-blue-mid transition-colors">{value}</a>
                ) : (
                  <p className="font-body text-gray-700 text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-16 bg-rhino-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-2">Request a Free Inspection</h2>
              <p className="font-body text-gray-600 mb-8">Fill out the form — our team will get back to you within 30 minutes during business hours.</p>
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <EstimateForm variant="contact" />
              </div>
              <div className="mt-6 bg-rhino-blue rounded-2xl p-5 flex items-center gap-4">
                <span className="text-4xl shrink-0">⚖️</span>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Licensed Texas Insurance Adjusters on Staff</div>
                  <div className="font-body text-gray-300 text-xs mt-1">We work only for homeowners — never for insurance carriers. We know both sides of the claim.</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title mb-2">Frequently Asked Questions</h2>
              <p className="font-body text-gray-600 mb-8">Answers to the questions Houston homeowners ask us most.</p>
              <div className="flex flex-col gap-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                    <summary className="px-6 py-4 font-heading font-semibold text-rhino-blue cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                      <span className="text-sm">{q}</span>
                      <span className="text-rhino-yellow text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="font-body text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{a}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-8 bg-red-600 text-white rounded-2xl p-6">
                <div className="text-3xl mb-2">🚨</div>
                <h4 className="font-heading font-bold text-lg mb-1">Emergency Roof Repair?</h4>
                <p className="font-body text-sm text-red-100 mb-4">Active leak or severe storm damage? Call us — we prioritize emergency calls for Houston and Katy homeowners.</p>
                <a href="tel:+13467338558" className="inline-flex items-center gap-2 bg-white text-red-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm">
                  📞 (346) 733-8558 — Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
