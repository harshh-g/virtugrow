import React, { useEffect, useRef } from 'react';
import { ArrowRightCircle, MouseIcon } from 'lucide-react';
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
      videoRef.current.playbackRate = 0.75;
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
        <button className="contact-btn">
          Contact Us <ArrowRightCircle size={20} />
        </button>
      </div>
      
      {/* Footer */}
      <footer className="hero-footer">
        <span className="footer-year">Since-Y:2024</span>
        <span className="footer-icon">
          <MouseIcon size={30} />
        </span>
        <span className="footer-address">1/74, Vivek Khand 2,Gomti Nagar, Lucknow</span>
      </footer>
    </section>
  );
};

export default Hero;