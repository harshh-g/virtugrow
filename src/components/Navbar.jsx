import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
    <header className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[580px] h-[72px]  bg-black/40 backdrop/blur-sm rounded-full px-8 py-5 flex justify-between items-center`}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center"><img src={logo} className='w-14 h-16 ' alt="" /></Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex ">
        <ul className="flex space-x-7">
          <li><Link to="/" className="text-white hover:text-cyan-400 text-lg transition-colors">Home</Link></li>
          <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Portfolio</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">About Us</Link></li>
          <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Blog</Link></li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      
        
     

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 bg-gray-900 rounded-lg shadow-lg p-4 w-48">
          <ul className="space-y-3">
            <li><Link to="/" className="block text-white hover:text-cyan-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="block text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
          </ul>
        </div>
      )}
    </header>
    

    </>
    
  );
};

export default Navbar;