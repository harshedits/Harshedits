import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/id/1068/1920/600" alt="Weaving loom" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Weaving traditions into modern elegance.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Founder Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">From Varanasi to Gonda</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded by <strong>{CONTACT_INFO.name}</strong>, Varanasi Silk Emporium was built on a simple mission: 
              to bring authentic Varanasi silk to Gonda at fair prices. We understand that finding genuine handloom silk 
              can be difficult, which is why we source directly from the weavers, eliminating middlemen and ensuring purity.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">To make authentic Banarasi heritage accessible to every woman in Gonda.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-sm">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">Authenticity, customer-first service, and uncompromising quality assurance.</p>
            </div>
             <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 shadow-sm">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-600">Led by Suman Dwivedi with expert sales & styling assistants.</p>
            </div>
          </div>

          {/* Why Choose Us List */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
             <h3 className="text-2xl font-serif font-bold mb-6 text-center">Why Locals Trust Us</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {['Pure Varanasi Silk', 'Exclusive Designs', 'Direct Sourcing', 'Affordable Pricing', 'Trusted Locally'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm">
                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
                   <span className="font-medium text-gray-800">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;