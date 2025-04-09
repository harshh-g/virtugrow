import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import banner from '../assets/banner.mp4'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden w-f">
      <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply"></div>
      
      {/* Video background replacing the image */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover "
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-12 leading-tight">
            Grow Digitally<br />Scale Effortlessly
          </h1>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-colors duration-300"
          >
            Contact Us
            <ArrowRightCircle className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="flex justify-between items-center mt-24 text-gray-400 text-sm border-t border-gray-800 pt-6">
          <div>Since-Y.2024</div>
          <div>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div>1/74, Vivek Khand 2,Gomti Nagar, Lucknow</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;