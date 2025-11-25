import { ServiceItem, Testimonial, FaqItem } from './types';

export const CONTACT_INFO = {
  name: "Suman Dwivedi",
  phone: "9919685110",
  altPhone: "7379829787",
  whatsapp: "9919685110",
  email: "varanasisilkemporium1@gmail.com",
  address: "Awas Vikas Colony, Chhedi Purwa, In Front of Bank of Baroda, Circular Road, Gonda 271001",
  mapLink: "https://maps.app.goo.gl/62ehb1FjvYLRzY6YA"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'varanasi-sarees',
    title: "Varanasi Sarees",
    description: "Handwoven traditional sarees sourced directly from Varanasi artisans. Ideal for weddings, festivals, and gifting.",
    features: ["Authentic weaving", "Soft drape", "Long-lasting colors", "Exclusive patterns"],
    priceRange: "₹499 to ₹14,999",
    image: "https://picsum.photos/id/1080/800/600",
    faqs: [
      { question: "Are sarees handwoven?", answer: "Yes." },
      { question: "Custom orders available?", answer: "Subject to availability." }
    ]
  },
  {
    id: 'silk-sarees',
    title: "Varanasi Silk Sarees",
    description: "Premium silk sarees with rich sheen, elegant motifs, and pure zari work. Perfect for weddings and special occasions.",
    features: ["Pure silk texture", "Rich radiance", "Durability", "Unique color combinations"],
    priceRange: "₹499 to ₹14,999",
    image: "https://picsum.photos/id/106/800/600",
    faqs: [
      { question: "Are these pure silk?", answer: "Yes." },
      { question: "Gift packaging available?", answer: "Yes." }
    ]
  },
  {
    id: 'suits',
    title: "Varanasi Suits",
    description: "Semi-stitched and unstitched suits in Banarasi and silk materials. Suitable for festive, office, and casual wear.",
    features: ["Premium fabrics", "Intricate detailing", "Long-lasting material"],
    priceRange: "₹499 to ₹14,999",
    image: "https://picsum.photos/id/175/800/600",
    faqs: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Priya Mishra", location: "Gonda", text: "I had never seen such real Varanasi silk in Gonda before! The quality is unbelievable and prices are very fair.", rating: 5 },
  { id: 2, name: "Anjali Verma", location: "Balrampur", text: "Visited many shops but nothing matched the premium collection at Varanasi Silk Emporium. My wedding saree became the highlight of the event!", rating: 5 },
  { id: 3, name: "Neha Singh", location: "Gonda", text: "The staff helped me select a saree that perfectly suited my occasion. Truly the best shop for authentic Varanasi sarees.", rating: 5 },
  { id: 4, name: "Ritu Saxena", text: "Beautiful designs", rating: 5 },
  { id: 5, name: "Tanya Singh", text: "Soft and luxurious silk", rating: 5 },
  { id: 6, name: "Manisha Jaiswal", text: "Affordable and premium", rating: 4 },
];

export const GENERAL_FAQ: FaqItem[] = [
  { question: "Are your sarees authentic from Varanasi?", answer: "Yes, every saree is sourced directly from Varanasi weavers." },
  { question: "Do you offer silk varieties for weddings?", answer: "Absolutely—our bridal silk range is one of our best-selling collections." },
  { question: "Can I exchange or return items?", answer: "Yes, we offer customer-friendly exchange policies on eligible items." },
  { question: "Do you have budget-friendly options?", answer: "Yes! We have beautiful Varanasi sarees starting at affordable prices." },
  { question: "Do you offer wholesale?", answer: "Limited wholesale options are available—contact us for details." },
  { question: "Is parking available near your store?", answer: "Yes, convenient parking is available near the Bank of Baroda on Circular Road." },
  { question: "Do you take custom orders?", answer: "Yes, custom color and design requests are accepted depending on availability." }
];