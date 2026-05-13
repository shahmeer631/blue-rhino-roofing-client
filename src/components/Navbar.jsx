import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import rhinoLogo from '../assets/Shawn_Logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/#services', label: 'Services' },
    { to: '/residential', label: 'Residential' },
    { to: '/commercial', label: 'Commercial' },
    { to: '/#insurance', label: 'Insurance Claims' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-rhino-blue shadow-2xl py-2' : 'bg-rhino-blue/95 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={rhinoLogo}
            alt="Blue Rhino Roofing logo"
            className="h-12 w-auto md:h-14 object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to}
              className={({ isActive }) => `font-heading font-semibold text-xs tracking-wide animated-underline transition-colors duration-200 ${isActive ? 'text-rhino-yellow' : 'text-white hover:text-rhino-yellow'}`}>
              {link.label}
            </NavLink>
          ))}
          <a href="tel:+13467338558"
            className="bg-rhino-yellow text-rhino-blue font-heading font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-rhino-yellow-dark transition-all duration-200 shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
            📞 (346) 733-8558
          </a>
        </nav>

        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-rhino-blue border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to}
              className={({ isActive }) => `font-heading font-semibold py-2 border-b border-white/10 ${isActive ? 'text-rhino-yellow' : 'text-white'}`}>
              {link.label}
            </NavLink>
          ))}
          <a href="tel:+13467338558" className="btn-primary mt-2 justify-center text-center">📞 (346) 733-8558</a>
        </div>
      )}
    </header>
  );
}
