// Frontend structure for VirtuGrow Digital website
// Main App.jsx component

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsSection from './components/BrandsSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './app.css'; // Tailwind CSS will be imported here

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  return (
    <Router>
      <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} min-h-screen transition-colors duration-300`}>
        <div className="max-w-screen-2xl mx-auto">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BrandsSection />
                <StorySection />
                <ServicesSection />
                <PortfolioSection />
                <TestimonialsSection />
                <ContactSection />
              </>
            } />
            {/* Add additional routes as needed */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;