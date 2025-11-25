import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-16 text-center">
         <h1 className="text-4xl font-serif font-bold">Happy Customers</h1>
         <p className="mt-2 text-blue-200">See what the people of Gonda are saying</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition relative">
              <Quote className="absolute top-6 right-6 text-gray-100" size={48} />
              <div className="flex text-secondary mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "text-secondary" : "text-gray-300"} />
                 ))}
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-primary text-lg">{t.name}</p>
                {t.location && <p className="text-sm text-gray-500">{t.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;