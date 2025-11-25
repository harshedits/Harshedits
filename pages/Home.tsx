import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, TESTIMONIALS, GENERAL_FAQ } from '../constants';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Accordion, AccordionItem } from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Women in Gonda Prefer Us</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Authentic Craftsmanship", desc: "Sourced directly from Varanasi weaving communities.", icon: "🎨" },
              { title: "Premium Silk Quality", desc: "Luxurious feel, elegant drape, and lasting quality.", icon: "✨" },
              { title: "Exclusive Designs", desc: "Patterns and motifs unique to our Gonda store.", icon: "💎" },
              { title: "Affordable Range", desc: "Varanasi artistry at accessible prices.", icon: "💰" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition border border-gray-100 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Signature Collections</h2>
            <p className="text-gray-600">Handpicked elegance for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore Collection <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
             <h2 className="text-3xl font-serif font-bold mb-6">Experience the Difference</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "New Shop With 100% Verified Authentic Products",
                 "Direct Varanasi Source — No Middlemen",
                 "Customer-Friendly Exchanges",
                 "Hundreds of Happy Local Customers"
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                   <span>{text}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex-shrink-0">
             <Link to="/contact" className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg inline-block">
               Visit Our Store Today
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Products List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://picsum.photos/id/325/600/600" alt="Bridal Saree" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Featured</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 mt-2">Highlights of the Season</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4 p-4 border-l-4 border-secondary bg-gray-50">
                  <div>
                    <h4 className="font-bold text-lg">Pure Varanasi Silk Bridal Saree</h4>
                    <p className="text-sm text-gray-600">The epitome of grace for your special day.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 border-l-4 border-secondary bg-gray-50">
                  <div>
                    <h4 className="font-bold text-lg">Handwoven Zari Border Banarasi Georgette</h4>
                    <p className="text-sm text-gray-600">Lightweight luxury with traditional intricacy.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 border-l-4 border-secondary bg-gray-50">
                  <div>
                    <h4 className="font-bold text-lg">Premium Varanasi Silk Suit Sets</h4>
                    <p className="text-sm text-gray-600">Elegant unstitched sets for custom styling.</p>
                  </div>
                </li>
              </ul>
              <Link to="/services/varanasi-sarees" className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-blue-800 transition">
                View Full Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">What Gonda Says About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex text-secondary mb-3">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/testimonials" className="text-primary font-bold hover:text-secondary underline">Read More Reviews</Link>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {GENERAL_FAQ.map((faq, index) => (
               <AccordionItem key={index} title={faq.question}>
                 {faq.answer}
               </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;