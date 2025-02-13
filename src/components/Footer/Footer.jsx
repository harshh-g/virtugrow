import React from 'react';
import { Link  } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {

  const icons = [
      {img:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317548/facebook_vtz60j.png", link:"https://www.facebook.com/people/Virtu-Grow/pfbid0Q4nDgiRW2ombKtZWsDep9pz4b194NLUSbdFSTbiq5y9nrppWntxRWS3qBjb5EVGDl/"},
      {img:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317626/instagram_tsgs8c.png" ,link:"https://www.instagram.com/virtu_growdigital?igsh=MWxnNGgzdzltZnFhMQ=="},
      {img:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/linkedin_sibqbp.png", link:"https://in.linkedin.com/company/virtu-grow-digital"},
      {img:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/youtube_jeksuy.png", link:"https://www.youtube.com/@VirtuGrowDigital"},
      {img:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/social_n6duot.png", link:"https://in.pinterest.com/virtugrow/"}
     ];
  

 const myStyle = {
     backgroundImage:`url("https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304703/bgFooter2_g2odon.jpg")`,
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
 }
  
  return (
    <footer className="bg-gray-900  text-white py-12 w-full h-full position: relative;
  z-index: 1;" style={myStyle}>

      {/* Top Section */}
      <div className="flex flex-col  md:flex-row justify-between items-center md:items-start w-full px-6">
        
        {/* Logo & Text Section */}
        <div className="w-full md:w-2/4 flex flex-col items-center md:items-start space-y-4">
          {/* Logo and text */}
          <div className="flex items-center space-x-4  ml-5 ">
            <Link to="/" className="flex items-center" >
              <img src="https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304685/logo2bg_pq2fod.png" alt="Logo" className="h-28 w-24 hover:scale-110 transition-transform" />
            </Link>
            <h2 className="text-4xl text-transparent font-custom-font bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-light leading-10">
              Virtugrow
            </h2> 
          </div>

          {/* Description Text */}
          <p className="text-gray-400 ml-10 font-light text-center md:text-left text-xl max-w-[500px]">
            We believe in a world where technology fosters your everyday experiences. Our mission is to make it happen!
          </p>
        </div>

        {/* Button Section */}
        <div className=" md:mt-0 w-full md:w-2/4 flex justify-center ">
          <button className="px-6 py-4 mt-16 text-gray-900 font-medium bg-custom-blue rounded-full transition-all duration-300 hover:bg-slate-700 hover:text-white">
            <Link to="/contact" >Get in Touch</Link>
          </button>
        </div>

      </div>
     
      {/* Middle Section */}

      <div className="container mt-16 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-8 sm:gap-16">
        {/* Navigation Section */}
        <div className='ml-16'>
          <h3 className="text-2xl font-medium mb-6">Navigation</h3>
          <ul className="space-y-2">
          <Link
                  to={'/'}
                  className="text-gray-400 font-light hover:text-custom-blue transition-all duration-300"
                >Home
          
                </Link>
            {['Services','About', 'Portfolio', 'Blogs', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                  className="text-gray-400 font-light hover:text-custom-blue transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className='ml-16'>
          <h3 className="text-2xl font-medium mb-6">Services</h3>
          <ul className="space-y-2">
            {['App Development', 'Software Development', 'Digital Marketing ', 'Graphic Designing', 'Video Editing',  'Ad Management'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                  className="text-gray-400 font-light hover:text-custom-blue transition-all duration-300"
                   >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className='ml-16 md:ml-5'>
          <h3 className="text-2xl font-medium mb-6">Contact Us</h3>
          <div className="space-y-5">
            <p className="text-gray-400 font-light flex">
              <MdEmail className="text-xl mr-3 md:mr-2" />virtugrowdigital@gmail.com <span className="hover:text-custom-blue transition-all"></span>
            </p>
            <p className="text-gray-400 font-light flex"><FaPhoneAlt className='mr-3 text-xl' />Phone: +91 9105669880</p>
            <p className="text-gray-400 font-light flex"><IoLocationOutline className="text-xl mr-1 " />Address: 1/74, Vivek Khand 2,Gomti Nagar, 
            Lucknow,<br/> Uttar Pradesh 226010</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20">
        {/* Footer Text */}
        
        <div className="border-t border-gray-700 pt-14 text-center text-custom-white text-sm">
         &copy; {new Date().getFullYear()} Virtugrow. All rights reserved.
        </div>
        <Link className='flex justify-center' to='/private'>Privacy Policy </Link>
        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center md:justify-end items-center space-x-6 px-4">
          {icons.map((icon, idx) => (
            <Link to={icon.link} key={idx}>
              <img
                src={icon.img}
                className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
                alt={`Social Media Icon ${idx + 1}`}
              />
            </Link>
          ))}
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
