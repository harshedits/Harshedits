import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { AccordionItem } from '../components/FAQ';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100">Exquisite Collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2">
             <img src={service.image} alt={service.title} className="w-full rounded-xl shadow-2xl mb-8" />
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
               <h3 className="text-xl font-bold mb-4">Why Choose Our {service.title}?</h3>
               <ul className="space-y-3">
                 {service.features.map((feature, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="bg-secondary/10 p-1 rounded-full text-secondary"><Check size={16} /></div>
                     <span>{feature}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
              <span className="block text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Price Range</span>
              <span className="text-3xl font-bold text-primary">{service.priceRange}</span>
            </div>

            <div className="flex gap-4 mb-12">
               <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded hover:bg-blue-800 transition shadow-lg font-bold">
                 Visit Store to Buy
               </Link>
               <a href={`https://wa.me/91${CONTACT_INFO.whatsapp}?text=Hi, I am interested in ${service.title}`} className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 transition shadow-lg font-bold">
                 Inquire on WhatsApp
               </a>
            </div>

            {service.faqs.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} title={faq.question}>
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Other Services */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
           <h3 className="text-2xl font-bold mb-8 text-center">Explore Other Collections</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {SERVICES.filter(s => s.id !== id).map(s => (
               <Link key={s.id} to={`/services/${s.id}`} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center justify-between group">
                 <span className="font-bold text-gray-800 group-hover:text-primary">{s.title}</span>
                 <ArrowRight size={20} className="text-gray-400 group-hover:text-secondary" />
               </Link>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;