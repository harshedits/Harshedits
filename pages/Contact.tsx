import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { LoadingState } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    // Basic Validation
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (formData.phone.length < 10) {
       setErrorMsg('Please enter a valid phone number.');
       return;
    }

    setStatus(LoadingState.LOADING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(LoadingState.SUCCESS);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus(LoadingState.IDLE), 5000); // Reset success message
    }, 1500);
  };

  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
        <p className="mt-2 text-blue-200">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
             <div>
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-primary"><MapPin /></div>
                   <div>
                     <p className="font-bold text-gray-800">Visit Our Store</p>
                     <p className="text-gray-600">{CONTACT_INFO.address}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-primary"><Phone /></div>
                   <div>
                     <p className="font-bold text-gray-800">Call Us</p>
                     <p className="text-gray-600">
                       <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition">{CONTACT_INFO.phone}</a>, <br/>
                       <a href={`tel:${CONTACT_INFO.altPhone}`} className="hover:text-primary transition">{CONTACT_INFO.altPhone}</a>
                     </p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-primary"><Mail /></div>
                   <div>
                     <p className="font-bold text-gray-800">Email Us</p>
                     <p className="text-gray-600 break-all">{CONTACT_INFO.email}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-primary"><Clock /></div>
                   <div>
                     <p className="font-bold text-gray-800">Opening Hours</p>
                     <p className="text-gray-600">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Map Embed Placeholder (using iframe for simplicity as requested functionality) */}
             <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200 relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.297746243286!2d81.9610!3d27.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzQ4LjAiTiA4McKwNTcnMzkuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy"
                 title="Google Maps Location"
               ></iframe>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            {status === LoadingState.SUCCESS ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle />
                <div>
                  <p className="font-bold">Thank you!</p>
                  <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                   <div className="bg-red-50 text-red-600 p-3 rounded flex items-center gap-2">
                     <AlertCircle size={18} /> {errorMsg}
                   </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="99196xxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === LoadingState.LOADING}
                  className={`w-full bg-primary text-white font-bold py-4 rounded hover:bg-blue-800 transition shadow-lg ${status === LoadingState.LOADING ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === LoadingState.LOADING ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;