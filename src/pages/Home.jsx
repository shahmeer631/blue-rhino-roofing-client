import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import HeroSection from '../components/HeroSection';
import HomeTrustSection from '../components/HomeTrustSection';
import ServicesSection from '../components/ServicesSection';
import InsuranceProcess from '../components/InsuranceProcess';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import EstimateForm from '../components/EstimateForm';
import MeetTheTeam from '../components/MeetTheTeam';
import OurPromise from '../components/OurPromise';
import AppraisalProcess from '../components/AppraisalProcess';
import DeductibleInfo from '../components/DeductibleInfo';
import EmergencyServices from '../components/EmergencyServices';
import WorkingProcess from '../components/WorkingProcess';
import HomeFaqSection from '../components/HomeFaqSection';
import CredentialsGallery from '../components/CredentialsGallery';
import { HOME_META } from '../seo/pageMeta';
import { homepageFaqs } from '../seo/faqs';
import { featuredReviews } from '../seo/reviews';
import {
  localBusinessSchema,
  faqPageSchema,
  reviewSchema,
  webPageSchema,
} from '../seo/schema';

export default function Home() {
  const jsonLd = [
    localBusinessSchema(),
    webPageSchema({
      path: HOME_META.path,
      name: HOME_META.title,
      description: HOME_META.description,
    }),
    faqPageSchema(homepageFaqs),
    ...reviewSchema(featuredReviews),
  ];

  return (
    <>
      <SeoHead {...HOME_META} jsonLd={jsonLd} />

      <HeroSection />
      <HomeTrustSection />
      <CredentialsGallery />
      <MeetTheTeam />
      <OurPromise />
      <ServicesSection />
      <InsuranceProcess />
      <EmergencyServices />
      <WorkingProcess />
      <AppraisalProcess />
      <DeductibleInfo />
      <HomeFaqSection />
      <WhyUs />
      <Testimonials />

      <section className="py-24 bg-rhino-gray" id="estimate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-rhino-blue text-rhino-yellow font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">FREE ESTIMATE</div>
            <h2 className="section-title">Get Your Free Roof Estimate</h2>
            <p className="section-subtitle mx-auto mt-4">Fill out the form below and our team will contact you within 30 minutes during business hours. No obligation, no pressure — just honest answers from licensed roofing experts.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <EstimateForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-rhino-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-heading font-bold text-white mb-4 text-lg">Proudly Serving the Greater Houston Area</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Houston', 'Katy', 'Sugar Land', 'Cypress', 'The Woodlands', 'Spring', 'Humble', 'Pearland', 'Friendswood', 'Missouri City', 'Richmond', 'Memorial', 'River Oaks', 'Heights', 'Montrose'].map((city) => (
              <span key={city} className="bg-white/10 border border-white/20 text-white text-sm font-heading px-4 py-1.5 rounded-full hover:bg-rhino-yellow hover:text-rhino-blue transition-colors cursor-default">{city}</span>
            ))}
          </div>
          <p className="mt-6 text-gray-300 text-sm font-body">
            Explore our{' '}
            <Link to="/residential" className="text-rhino-yellow hover:underline font-semibold">residential roofing</Link>
            ,{' '}
            <Link to="/commercial" className="text-rhino-yellow hover:underline font-semibold">commercial roofing</Link>
            , and{' '}
            <Link to="/contact" className="text-rhino-yellow hover:underline font-semibold">contact page</Link>
            {' '}for a free storm damage inspection.
          </p>
        </div>
      </section>
    </>
  );
}
