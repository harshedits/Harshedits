import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <AIAssistant />
    </Router>
  );
};

export default App;