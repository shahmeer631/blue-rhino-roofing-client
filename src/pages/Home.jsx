import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
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

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Blue Rhino Roofing | Houston Storm Damage Roofing Experts | Licensed Insurance Adjusters</title>
        <meta name="description" content="Houston and Katy's trusted storm damage roofing experts. Licensed insurance adjusters working only for homeowners. Free inspections, insurance claim support, 5-year warranty. Call (346) 733-8558." />
        <meta name="keywords" content="Houston roofing, storm damage repair Houston, insurance claim roofing Houston, Katy roofer, roof replacement Houston, licensed adjuster roofer, HAAG Engineering certified roofer Houston, Blue Rhino Roofing" />
        <meta property="og:title" content="Blue Rhino Roofing | Houston Storm Damage Roofing Experts" />
        <meta property="og:description" content="Licensed insurance adjusters working only for homeowners. Free storm inspections. Call (346) 733-8558." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          "name": "Blue Rhino Roofing",
          "url": "https://www.bluerhinoroofing.net",
          "telephone": "+13467338558",
          "email": "shawn@bluerhinoroofing.net",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2717 Commercial Center Blvd Suite E200",
            "addressLocality": "Katy",
            "addressRegion": "TX",
            "postalCode": "77494",
            "addressCountry": "US"
          },
          "areaServed": ["Houston", "Katy", "Sugar Land", "Cypress", "The Woodlands", "Spring", "Humble", "Pearland", "Friendswood", "Missouri City", "Richmond", "Memorial", "River Oaks", "Heights", "Montrose"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "200" },
          "priceRange": "$$"
        })}</script>
      </Helmet>

      <HeroSection />
      <MeetTheTeam />
      <OurPromise />
      <ServicesSection />
      <InsuranceProcess />
      <EmergencyServices />
      <WorkingProcess />
      <AppraisalProcess />
      <DeductibleInfo />
      <WhyUs />
      <Testimonials />

      {/* Estimate section */}
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

      {/* Service areas */}
      <section className="py-12 bg-rhino-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-heading font-bold text-white mb-4 text-lg">Proudly Serving the Greater Houston Area</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Houston', 'Katy', 'Sugar Land', 'Cypress', 'The Woodlands', 'Spring', 'Humble', 'Pearland', 'Friendswood', 'Missouri City', 'Richmond', 'Memorial', 'River Oaks', 'Heights', 'Montrose'].map((city) => (
              <span key={city} className="bg-white/10 border border-white/20 text-white text-sm font-heading px-4 py-1.5 rounded-full hover:bg-rhino-yellow hover:text-rhino-blue transition-colors cursor-default">{city}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
