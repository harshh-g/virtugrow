import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useNavigate();

  

  const navLinkClass = `text-2xl font-light font-custom-font md:text-lg hover:text-custom-blue ${isScrolled ? "text-gray-600" : "text-custom-white"}`;
  const dropdownLinkClass = `block px-4 py-3 mb-1 font-light md:text-lg hover:bg-white font-custom-font hover:text-black hover:rounded-xl ${isScrolled ? "text-white rounded-xl" : "text-custom-white"}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DropdownMenu = () => (
    <div
      className={`absolute left-0  bg-slate-950 h-[334px] border shadow-lg w-56 rounded-xl ${isScrolled ? "text-white" : "text-black"}`}
    >
      {[
        { to: "/appdevelopment", text: "App Development" },
        { to: "/softwaredevelopment", text: "Software Development" },
        { to: "/digitalmarketing", text: "Digital Marketing" },
        { to: "/graphicdesigning", text: "Graphic Designing" },
        { to: "/videoediting", text: "Video Editing" },
        { to: "/admanagement", text: "Ad Management" },
      ].map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={dropdownLinkClass} onClick={()=> location(link.to)}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-custom-white" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" onClick={()=> setMenuOpen(false)}>
            <img
              src="https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304685/logo2bg_pq2fod.png"
              alt="Logo"
              className="h-28 w-20 mix-blend-multiply hover:scale-110" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-8 items-center">
            <Link to="/" className={navLinkClass} onClick={()=> location('/')}>Home</Link>
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={navLinkClass}><Link to='/services' onClick={()=> location('/services')}>Services</Link></button>
              {dropdownOpen && <DropdownMenu />}
            </div>
            <Link to="/portfolio" className={navLinkClass} onClick={()=> location('/portfolio')}>Portfolio</Link>
            <Link to="/blogs" className={navLinkClass} onClick={()=> location('/blogs')}>Blogs</Link>
            <Link to="/about" className={navLinkClass} onClick={()=> location('/about')}>About us</Link>
          </div>

          {/* Contact Button */}
          <button className={`px-5 py-2  leading-10 text-lg sm:text-xl hidden sm:hidden lg:block md:block lg:text-xl  font-light hover:duration-300 transition-all hover:bg-black hover:text-white hover:scale-105 ${isScrolled ? "text-black border-blue-300 border-2 " : "text-white bg-blue-400"}`}>
      <Link to="/contact" onClick={() => location('/contact')}>
        Contact
      </Link>
    </button>
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t w-full h-screen">
          {[
            { to: "/", text: "Home" ,  },
            { to: "/services", text: "Services", dropdown: true },
            { to: "/portfolio", text: "Portfolio" },
            { to: "/blogs", text: "Blogs" },
            { to: "/about", text: "About us" },
          ].map((link, index) => (
            <div key={index} className="border-t relative">
              {link.dropdown ? (
                <>
                  <button
                    
                    className="w-full px-4 py-5 flex justify-between text-gray-700 font-custom-font font-medium hover:bg-gray-100"
                  >
                    <Link to={link.to} onClick={()=> setMenuOpen(false) }>{link.text}</Link>  <button onClick={() => setDropdownOpen(!dropdownOpen)} >{dropdownOpen ? <FaLessThan className="mt-2 w-6 rotate-90" />  : <FaGreaterThan className="mt-2 w-6 rotate-90" />}</button>
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 bg-gray-200">
                      {[
                        { to: "/appdevelopment", text: "App Development" },
                        { to: "/softwaredevelopment", text: "Software Development" },
                        { to: "/digitalmarketing", text: "Digital Marketing" },
                        { to: "/graphicdesigning", text: "Graphic Designing" },
                        { to: "/videoediting", text: "Video Editing" },
                        { to: "/admanagement", text: "Ad Management" }
                      ].map((subLink) => (
                        <Link
                          key={subLink.to}
                          to={subLink.to}
                          className="block px-4 py-5 text-gray-700 font-custom-font hover:bg-gray-100 font-medium" onClick={()=> setMenuOpen(false)}
                        >
                          {subLink.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className="block px-4 py-5 text-gray-700 font-custom-font hover:bg-gray-100 font-medium" onClick={()=> setMenuOpen(false)}
                >
                  {link.text}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="sm:px-2 py-2 mt-24 mb-5 flex justify-center items-center text-gray-700 font-semibold font-custom-font border-2 border-blue-300 w-full hover:bg-custom-blue hover:text-white hover:rounded-full"
            onClick={()=> setMenuOpen(false)} >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
