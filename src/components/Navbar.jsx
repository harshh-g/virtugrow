import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ArrowRight} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowContactButton(true);
    } else {
      setShowContactButton(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  
  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
      
      // Add event listener to close menu on route change
      const handleRouteChange = () => setMobileMenuOpen(false);
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        document.body.style.overflow = 'auto'; // Restore scrolling when menu is closed
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${showContactButton ? 'lg:w-[740px]' : 'lg:w-[580px]'}  md:w-[560px] w-[400px] h-[67px] bg-black/90 backdrop-blur-2xl    rounded-full px-8 py-5 flex justify-between items-center`}>
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center ">
            <img src={logo} className="w-14 h-16" alt="Logo" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center ">
          <ul className="flex space-x-7 items-center ">
            <li><Link to="/" className="text-white hover:text-cyan-400 text-lg transition-colors">Home</Link></li>
            <li><Link to="/servicepage" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Services</Link></li>
            <li><Link to="/portfoliopage" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 text-lg transition-colors">Blog</Link></li>
            
        {showContactButton && (<li><Link
    to="/contactpage"
    className="relative top-0 -right-6  group overflow-hidden flex items-center justify-center px-3 py-2 text-black rounded-full bg-[linear-gradient(182deg,_#FFF_1.76%,_rgba(255,255,255,0.8)_98.24%)]  transition-all duration-500 ease-in shadow-lg invisible md:invisible lg:visible"
  >
    {/* Background overlay */}
    <span className="absolute inset-0 bg-gradient-to-b from-[#2FBECE] to-[#2974B7] group-hover:border-white group-hover:border-2 group-hover:rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease z-0"></span>

    {/* Button content */}
    <span className="relative z-10 flex items-center  text-black group-hover:text-white transition-colors duration-300 text-sm">
      <span className="mr-3 text-[16px]">Contact Us</span>
      <span className="w-5 h-5 flex items-center justify-center bg-gradient-to-b from-[#2FBECE] to-[#2974B7] rounded-full group-hover:bg-transparent transition-all duration-300">
        <ArrowRight size={16} className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-0 -rotate-45" />
      </span>
    </span>
  </Link></li>)}
          </ul>
        
        </nav>

        
        {/* Mobile Menu Button - Toggle between hamburger and X */}
        <button
          className="md:hidden text-gray-500 focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
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
          )}
        </button>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex items-center justify-end">
          <div className="p-8 w-full h-full flex flex-col">
            <div className="flex justify-end mb-12 mt-24">
              {/* Close button is already in the header */}
            </div>
            <nav>
              <ul className="space-y-8 flex flex-col items-end pr-8">
                <li>
                  <Link
                    to="/"
                    className="block text-white text-2xl font-medium hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicepage"
                    className="block text-gray-300 text-2xl font-medium hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfoliopage"
                    className="block text-gray-300 text-2xl font-medium hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-gray-300 text-2xl font-medium hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block text-gray-300 text-2xl font-medium hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-cyan-500 text-white font-medium text-lg  hover:bg-cyan-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;