import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from 'lucide-react';
import logo from '../assets/logo.png'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[560px] h-[72px] ${
      scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-black/70'
    } rounded-full px-8 py-5 flex justify-between items-center`}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="text-cyan-400 text-2xl font-bold">
            <img src={logo} className='w-16 h-20' alt="" />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
          <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        {darkMode ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </button>

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
  );
};

export default Navbar;