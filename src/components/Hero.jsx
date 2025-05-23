import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MouseIcon } from 'lucide-react';
import bg from '../assets/Bg.png';
import video from '../assets/banner.mp4';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  
  

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    
    // 🎥 Set playback speed slightly slower
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.90;
    }

    if (title && subtitle) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
          subtitle.style.opacity = '1';
          subtitle.style.transform = 'translateY(0)';
        }, 400);
      }, 500);
    }
  }, []);

  return (
    <section className="hero-container">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Image Overlay */}
      <img src={bg} alt="Overlay" className="hero-overlay" />
      
      {/* Dark Gradient Overlay */}
      <div className="hero-dark-overlay" />
      
      {/* Main Content */}
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          Grow Digitally
        </h1>
        <h2 ref={subtitleRef} className="hero-subtitle">
          Scale Effortlessly
        </h2>
        
        {/* Updated Contact Button with Animation */}
        <div className="w-full flex justify-center">
 
 <Link to="/contactpage" className='group relative overflow-hidden flex items-center lg:mt-12 lg:px-4 lg:py-3 md:mt-12 md:px-4 md:py-3 mt-7 px-4  py-3  text-black rounded-3xl bg-[linear-gradient(182deg,_#FFF_1.76%,_rgba(255,255,255,0.8)_98.24%)] transition-all duration-500 ease-in'> 
 
    {/* Background overlay that animates on hover */}
    <span className="absolute inset-0 bg-gradient-to-b from-[#2FBECE] group-hover:border-white group-hover:border-2 group-hover:rounded-full to-[#2974B7]  from-[56.52%] to-[117.39%] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease z-0"></span>

    {/* Button content on top of the animated background */}
    <span className="relative z-10 flex items-center text-black group-hover:text-white transition-colors duration-300">
      <span className="mr-3 leading-tight">Contact Us</span>
      <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-[#2FBECE] to-[#2974B7] from-[56.52%] to-[117.39%] rounded-full transition-all duration-300 group-hover:bg-transparent">
        <ArrowRight size={20} className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-0 -rotate-45 font-extralight" />
      </span>
    </span>
</Link>
</div>
      </div>
      
      {/* Footer */}
      <footer className="hero-footer">
        <span className="footer-year">Since-Y:2024</span>
        <span>

        <span className="footer-icon relative   h-8 w-5 border border-white rounded-full overflow-hidden">
  <span className="absolute top-0  w-1 h-2 bg-white rounded-3xl animate-[scrollMouse_2.6s_ease-in-out_infinite]" />
</span>
        </span>

        <span className="footer-address">1/74, Vivek Khand 2,Gomti Nagar, Lucknow</span>
      </footer>

      <style>
  {`
    @keyframes scrollMouse {
      0% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(20px); opacity: 0.7; }
      100% { transform: translateY(0); opacity: 1; }
    }
  `}
</style>
    </section>
  );
};

export default Hero;