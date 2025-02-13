import React from "react";
import { Link , useLocation } from "react-router-dom";

const Videosection = () => {
  const navigate= useLocation();
  return (
    <>
      <section className="bg-blue-custom flex items-center justify-evenly h-full">
        <div className="container w-full mx-auto px-8 sm:px-0 flex flex-col md:flex-row items-center justify-between">
          {/* Right Section - Video */}
          <div className="w-full lg:mt-16 md:mt-16  md:w-1/2 lg:w-[400px] lG:h-[400px] lg:ml-20 sm:mb-20">
            <div className="relative z-0 w-full h-[500px] overflow-hidden rounded-md">
              <video
                className="w-full h-full lg:md object-cover mix-blend-lighten "
                autoPlay
                loop
                muted
                loading="lazy"
              >
                <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739344069/bgVideo2_ssqkcx.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Left Section - Text Content */}
          <div className="w-full md:w-1/2  sm:pr-0 space-y-9 mb-10">
            <h1 className="text-4xl sm:text-base mt-5 text-left lg:text-5xl md:text-4xl  font-bold text-white">
              Empowering Your Digital Presence
            </h1>
            <p className="text-2xl pt-7  text-white/90 leading-relaxed">
              Discover innovative solutions and strategies to take your business
              to the next level. Let's create amazing digital experiences
              together.
            </p>
            <button className="mt-4 mb-5 px-6 py-3 bg-blue-600 mx-auto text-white text-lg  flex font-medium rounded-md hover:bg-blue-700 transition-all">
              <Link to='/about' onClick={()=> navigate('/about')} >Learn More</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videosection;
