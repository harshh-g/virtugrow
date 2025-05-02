import React from 'react';
import { Link } from 'react-router-dom';
import b3 from '../assets/Bottom.png';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-6 ">
      <div className="container mx-auto px-4">
        {/* Grid for Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-12">
          
          {/* About Section */}
          <div>
            
            <p className="text-gray-400 mb-6  leading-relaxed">
              We believe in a world where technology fosters your everyday experiences. Our philosophy is to make it happen!
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">virtugrowdigital@gmail.com</p>
              <p className="text-gray-400">+91 9999559999</p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Pages</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-cyan-400 transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/app-development" className="text-gray-400 hover:text-cyan-400 transition-colors">App Development</Link></li>
              <li><Link to="/services/software-development" className="text-gray-400 hover:text-cyan-400 transition-colors">Software Development</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-cyan-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-cyan-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/video-editing" className="text-gray-400 hover:text-cyan-400 transition-colors">Video Editing</Link></li>
              <li><Link to="/services/ads-management" className="text-gray-400 hover:text-cyan-400 transition-colors">Ads Management</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Social Media</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center">Pinterest</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="xl:col-span-1">
            <h3 className="text-white text-lg font-bold mb-6">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/termsAndConditions" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Image */}
        <div className="flex justify-center ">
          <img src={b3} alt="Bottom Decoration" objectFit="cover" className="max-w-full h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
