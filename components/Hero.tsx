import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1059/1920/1080" 
          alt="Silk Saree Texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
            New in Gonda
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Gonda’s Trusted Destination for Authentic <span className="text-secondary">Varanasi Silk</span> Sarees
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
            Discover the finest handpicked Varanasi Sarees, Silk Sarees, and Suits—premium quality and unmatched variety you won’t find anywhere else in Gonda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services/varanasi-sarees" className="bg-secondary hover:bg-amber-700 text-white px-8 py-3 rounded text-center font-bold transition transform hover:-translate-y-1 shadow-lg">
              Shop Varanasi Sarees
            </Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded text-center font-bold transition">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;