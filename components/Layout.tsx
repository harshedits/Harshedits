import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sarees', path: '/services/varanasi-sarees' },
    { name: 'Silk Sarees', path: '/services/silk-sarees' },
    { name: 'Suits', path: '/services/suits' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> {CONTACT_INFO.phone}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> Gonda, Uttar Pradesh</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Open 7 Days a Week</span>
          <div className="h-4 w-[1px] bg-white/30"></div>
          <a href={CONTACT_INFO.mapLink} target="_blank" rel="noreferrer" className="hover:text-secondary transition">Get Directions</a>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
            Varanasi<span className="text-secondary">Silk</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`hover:text-secondary transition-colors ${location.pathname === link.path ? 'text-secondary border-b-2 border-secondary' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a href={`tel:${CONTACT_INFO.phone}`} className="hidden md:block bg-primary hover:bg-blue-800 text-white px-5 py-2 rounded-full font-medium text-sm transition shadow-lg">
            Call Now
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-lg font-medium text-gray-700 py-2 border-b border-gray-100">
                  {link.name}
                </Link>
              ))}
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-secondary text-white text-center py-3 rounded-md font-bold mt-2">
                Call Us: {CONTACT_INFO.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Varanasi<span className="text-secondary">Silk</span> Emporium</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Bringing authentic Varanasi craftsmanship to Gonda. Discover premium silk sarees, suits, and handwoven heritage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition"><Facebook size={20} /></a>
              <a href={`https://wa.me/91${CONTACT_INFO.whatsapp}`} className="bg-white/10 p-2 rounded-full hover:bg-secondary transition"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/services/varanasi-sarees" className="hover:text-secondary transition">Varanasi Sarees</Link></li>
              <li><Link to="/testimonials" className="hover:text-secondary transition">Customer Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Visit Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-secondary" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Varanasi Silk Emporium. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;