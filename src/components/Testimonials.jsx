import { useState } from 'react';

const testimonials = [
  {
    name: 'CJ and Peanut',
    location: 'Google Review',
    stars: 5,
    text: 'From the start, Shawn was professional, kind, and patient with my questions about replacing my 18-year-old roof. The work quality and integrity were outstanding.',
    initials: 'CJ',
  },
  {
    name: 'Roger Burrows',
    location: 'Google Review',
    stars: 5,
    text: 'Shawn guided me through insurance from inspection to completion. They were punctual, answered every question, cleaned up well, and even handled extra vent work later at no charge.',
    initials: 'RB',
  },
  {
    name: 'Tiffany Nolan',
    location: 'Google Review',
    stars: 5,
    text: 'This was my second roof with Blue Rhino. Shawn helped push through insurance issues and got us a properly insurable new roof. Honest, direct, and knowledgeable.',
    initials: 'TN',
  },
  {
    name: 'Ezra V.',
    location: 'Google Review',
    stars: 4,
    text: 'I shared concerns after a major catastrophic event in our area. Blue Rhino responded with an apology and said they were offering free inspections and damage assessments to support residents.',
    initials: 'EV',
  },
  {
    name: 'Angela Stampone',
    location: 'Google Review',
    stars: 1,
    text: 'Reported dissatisfaction with pricing, workmanship, and warranty handling. This feedback is shown here for transparency.',
    initials: 'AS',
  },
  {
    name: 'Isaiah Hall',
    location: 'Google Review',
    stars: 5,
    text: 'Highly recommend this small business. Shawn was communicative, quick to help, and focused on building trust while explaining roof condition and next steps.',
    initials: 'IH',
  },
  {
    name: 'Sherri Webb',
    location: 'Google Review',
    stars: 5,
    text: 'They found hail damage quickly, appealed a denied claim, and got our new roof approved. Shawn kept us informed every step of the way.',
    initials: 'SW',
  },
  {
    name: 'Erica Hurtado',
    location: 'Google Review',
    stars: 5,
    text: 'I had missing shingles and water entering the attic. Blue Rhino replaced the roof, left the site clean, and delivered outstanding results.',
    initials: 'EH',
  },
  {
    name: 'Wesley Barta',
    location: 'Google Review',
    stars: 5,
    text: 'After a hail storm, Blue Rhino was very professional and very familiar with insurance. They helped document everything with photos.',
    initials: 'WB',
  },
  {
    name: 'Randy Dobson',
    location: 'Google Review',
    stars: 5,
    text: 'Blue Rhino did a great job on my new roof and worked with me through nearly a year of insurance delays.',
    initials: 'RD',
  },
  {
    name: 'Naeem Smith',
    location: 'Google Review',
    stars: 5,
    text: 'Shawn was sincere and genuine, walked me through everything step by step, and helped resolve insurance issues.',
    initials: 'NS',
  },
  {
    name: 'Aaron Crouch',
    location: 'Google Review',
    stars: 5,
    text: 'Shawn helped me fight State Farm after hail damage. It took months, but the roof was completed well and professionally.',
    initials: 'AC',
  },
  {
    name: 'Alf Ong',
    location: 'Google Review',
    stars: 5,
    text: 'Excellent service and understanding staff. They patiently explained the process and delivered a very good new roof.',
    initials: 'AO',
  },
  {
    name: 'Norma Atherton',
    location: 'Google Review',
    stars: 5,
    text: 'After a severe hail storm, service was prompt, educational, and professional. They worked smoothly with my insurance adjuster.',
    initials: 'NA',
  },
  {
    name: 'Sharmayne Thomas',
    location: 'Google Review',
    stars: 5,
    text: 'After years of insurance denials, Shawn got approval and completed the roof repair. Great persistence and quality work.',
    initials: 'ST',
  },
  {
    name: 'Your Guard Pro',
    location: 'Google Review',
    stars: 5,
    text: 'This group is the real deal. If insurance told you no, give Shawn a chance and you may be surprised.',
    initials: 'YG',
  },
  {
    name: 'Desiree Cruz',
    location: 'Google Review',
    stars: 5,
    text: 'Very informative and helpful throughout the process. I am glad I replaced my roof with Blue Rhino.',
    initials: 'DC',
  },
  {
    name: 'Yvonne Wallace',
    location: 'Google Review',
    stars: 5,
    text: 'Dedicated, reliable, and cost-effective. The team answered concerns patiently and explained details throughout the job.',
    initials: 'YW',
  },
  {
    name: 'Kimmy M',
    location: 'Google Review',
    stars: 5,
    text: 'Great service. Shawn was patient and very knowledgeable.',
    initials: 'KM',
  },
  {
    name: 'Randy Adolph',
    location: 'Google Review',
    stars: 5,
    text: "Shawn does a great job and is fast. It's nice to have someone you can trust.",
    initials: 'RA',
  },
  {
    name: 'Janet Gingell',
    location: 'Google Review',
    stars: 5,
    text: 'Shawn did a great job. I highly recommend him.',
    initials: 'JG',
  },
  {
    name: 'Michael Griswold',
    location: 'Google Review',
    stars: 1,
    text: 'Shared concern about receiving a solicitation flyer. This feedback is shown here for transparency.',
    initials: 'MG',
  },
  {
    name: 'Benjamin Hayman',
    location: 'Google Review',
    stars: 5,
    text: 'Great experience. Willing to help no matter what. Would recommend to anyone.',
    initials: 'BH',
  },
  {
    name: 'David Clark',
    location: 'Google Review',
    stars: 5,
    text: 'Quick communication and dependable service. It is nice to work with a local contractor who answers calls.',
    initials: 'DC',
  },
  {
    name: 'Thaddeus Mcgee',
    location: 'Google Review',
    stars: 5,
    text: 'Fantastic company with integrity. Would recommend to anyone.',
    initials: 'TM',
  },
  {
    name: 'Paul Valdez',
    location: 'Google Review',
    stars: 5,
    text: 'The owner was polite and kept me up to date through the whole process.',
    initials: 'PV',
  },
  {
    name: 'Harold Ruiz',
    location: 'Google Review',
    stars: 5,
    text: 'For me, this is the best roofing company around Katy.',
    initials: 'HR',
  },
  {
    name: 'Cynthia Simmons',
    location: 'Google Review',
    stars: 5,
    text: 'Excellent work and customer service.',
    initials: 'CS',
  },
  {
    name: 'Mj Hirt',
    location: 'Google Review',
    stars: 5,
    text: 'Great experience with Blue Rhino Roofing.',
    initials: 'MH',
  },
  {
    name: 'Sarah Brown',
    location: 'Google Review',
    stars: 5,
    text: 'Pleasure working with Blue Rhino Roofing.',
    initials: 'SB',
  },
  {
    name: 'Jesus Esqueda',
    location: 'Google Review',
    stars: 5,
    text: 'Positive review for Blue Rhino Roofing.',
    initials: 'JE',
  },
  {
    name: 'Gabe Miller',
    location: 'Google Review',
    stars: 5,
    text: 'Shared a positive customer review for Blue Rhino Roofing.',
    initials: 'GM',
  },
];

export default function Testimonials() {
  const cardsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const [page, setPage] = useState(0);
  const visibleTestimonials = testimonials.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-rhino-yellow/20 text-rhino-blue font-heading font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-4">
            REAL CUSTOMERS
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-rhino-yellow text-2xl">★</span>
            ))}
            <span className="font-heading font-bold text-rhino-blue ml-2 text-lg">4.7/5</span>
            <span className="text-gray-500 font-body ml-1">(4.7 from 32 Google reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => (
            <div key={t.name} className="card flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={`${t.name}-${idx}-${i}`} className="text-rhino-yellow text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-gray-700 text-sm leading-relaxed flex-grow">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-rhino-blue flex items-center justify-center text-white font-heading font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-semibold text-rhino-blue text-sm">{t.name}</div>
                  <div className="font-body text-gray-500 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8 gap-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrevPage}
              className="w-12 h-12 rounded-full bg-rhino-blue text-white text-2xl flex items-center justify-center shadow-md hover:opacity-90 transition"
              aria-label="Show previous testimonials"
              title="Show previous testimonials"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNextPage}
              className="w-12 h-12 rounded-full bg-rhino-blue text-white text-2xl flex items-center justify-center shadow-md hover:opacity-90 transition"
              aria-label="Show next testimonials"
              title="Show next testimonials"
            >
              →
            </button>
          </div>
          <p className="text-sm text-gray-500 font-body">
            Showing page {page + 1} of {totalPages}
          </p>
        </div>
      </div>
    </section>
  );
}
