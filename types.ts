export interface Testimonial {
  id: number;
  name: string;
  location?: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  image: string;
  faqs: FaqItem[];
}

export interface MessageForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}