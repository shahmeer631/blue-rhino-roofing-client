import { Link } from 'react-router-dom';
import { homepageFaqs } from '../seo/faqs';

export default function HomeFaqSection() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">FAQ</div>
          <h2 className="section-title">Storm Damage & Insurance FAQs</h2>
          <p className="section-subtitle mx-auto mt-4">Answers Houston homeowners need before filing a claim or hiring a roofer.</p>
        </div>
        <div className="flex flex-col gap-3">
          {homepageFaqs.map(({ q, a }) => (
            <details key={q} className="bg-rhino-gray rounded-2xl shadow-sm border border-gray-100 group">
              <summary className="px-6 py-4 font-heading font-semibold text-rhino-blue cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span className="text-sm">{q}</span>
                <span className="text-rhino-yellow text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-5">
                <p className="font-body text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="text-center mt-8 font-body text-gray-600 text-sm">
          More questions?{' '}
          <Link to="/contact" className="text-rhino-blue-mid font-semibold hover:underline">
            View all FAQs on our contact page
          </Link>
        </p>
      </div>
    </section>
  );
}
