import React, { useState, useEffect } from "react";
import Gridsection from "./Gridsection";
import Videosection from "./Videosection";
import CardSection from "./CardSection";
import ClientSection from "./ClientSection";
import ClientReview from "./ClientReview";
import MarqueeSection from "./MarqueeSection";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Whether animation should happen only once
    });
  }, []);
  // Set the scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handle scroll effect: background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Change background after scrolling 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div>
      {/* Banner Section */}
      <section
  className={`${
    isScrolled ? "relative" : "bg-transparent"
  } h-screen transition-all duration-300 bg-transition`}
>
  {/* Background Video */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <video 
      className="w-full h-full object-cover brightness-75"
      autoPlay
      loop
      muted
      loading="lazy" >
      <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739343368/bgVideo_gqmxr9.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 w-full h-full bg-black/40"></div>

  {/* Text Overlay */}
  <section
    className="h-full flex items-center justify-center bg-cover bg-center relative px-4 sm:px-8 md:px-12 lg:px-16 py-10"
    style={{ backgroundImage: `url('banner-image.jpg')` }}
  >
    <div
      className={`absolute inset-0 transition-all duration-500 ${
        hovered ? "bg-black/50" : "bg-black/10"
      }`}
    ></div>
    
    <div
      className={`relative z-10 text-center p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg transition-all duration-500 transform ${
        hovered ? "scale-105 shadow-2xl" : "scale-100"
      } bg-white/10 backdrop-blur-xl border border-white/20`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1
        className="text-3xl h-28  sm:text-5xl md:text-6xl lg:text-8xl font-light text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text drop-shadow-lg animate-fade-up leading-tight"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Welcome Virtugrow
      </h1>
      <p
        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mt-4 opacity-80 animate-fade-up px-2 sm:px-4 md:px-8"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Empowering digital growth with Virtugrow Digital .
      </p>
    </div>
  </section>
</section>


    </div>
    <CardSection/>
    <Videosection/>
    <MarqueeSection/>
    <ClientSection/>
    <ClientReview/>
    
    </>
  );
};

export default Home;
