import { Link } from 'react-router-dom';
import EmailReachOut from './EmailReachOut';
import rhinoLogo from '../assets/Shawn_Logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-rhino-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={rhinoLogo}
              alt="Blue Rhino Roofing — storm damage roofing Houston Katy TX"
              title="Blue Rhino Roofing"
              className="h-12 w-auto md:h-14 object-contain"
              width={180}
              height={56}
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-body mb-4">
            Storm damage roofing experts serving Houston, Katy, and the Greater Houston Area. Licensed insurance adjusters working only for homeowners.
          </p>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="tel:+13467338558" className="hover:text-rhino-yellow transition-colors flex items-center gap-2">📞 (346) 733-8558</a>
            <EmailReachOut variant="compact" />
            <span className="flex items-center gap-2">📍 2717 Commercial Center Blvd, Suite E200, Katy, TX 77494</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Licensed', 'Bonded', 'Insured', 'HAAG Certified', 'TX Licensed Adjusters'].map((b) => (
              <span key={b} className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full font-heading">{b}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-rhino-yellow mb-4 tracking-wide text-sm uppercase">Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li><Link to="/residential" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Residential Roofing</Link></li>
            <li><Link to="/commercial" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Commercial Roofing</Link></li>
            <li><Link to="/#insurance" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Storm Damage Claims</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Gutters & Siding</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Interior Water Damage</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Financing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-rhino-yellow mb-4 tracking-wide text-sm uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300 mb-6">
            <li><Link to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Services</Link></li>
            <li><Link to="/#insurance" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Insurance Claims</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
          </ul>
          <h4 className="font-heading font-bold text-rhino-yellow mb-3 tracking-wide text-sm uppercase">Service Areas</h4>
          <p className="text-gray-400 text-xs leading-relaxed font-body">Houston • Katy • Sugar Land • Cypress • The Woodlands • Spring • Humble • Pearland • Friendswood • Missouri City • Richmond • Memorial • River Oaks • Heights • Montrose</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {year} Blue Rhino Roofing. All rights reserved. | Licensed Texas Insurance Adjusters</p>
          <p>Serving Houston, Katy & the Greater Houston Area</p>
        </div>
      </div>
    </footer>
  );
}
