import React from 'react';
import boardroomImg from '../assets/meeting.png'; // Replace with your actual image path

const StorySection = () => {
  return (
    <section className=" w-full   mx-auto mb-10 mt-20">
    {/* Image */}
    <img
      src={boardroomImg}
      alt="Boardroom"
      className="w-full lg:h-[500px] md:h-[300px] p-5 h-[100%] object-contain rounded-2xl"
    />
  
    {/* Text Content Card */}
    <div className="bg-white w-full mt-10 flex flex-col lg:flex-row justify-between p-6 gap-8 ">
      
      {/* Left: Our Story + Stats */}
      <div className="lg:w-[25%] md:w-full flex flex-col">
        <h3 className="text-3xl font-semibold text-cyan-600 pl-0  lg:pl-10  ">Our Story</h3>
        <div className="flex lg:justify-around justify-start  py-5 ">
          <div className="flex flex-col items-center mr-10">
            <p className="text-5xl font-bold text-cyan-600 ">20+</p>
            <p className="text-sm font-medium text-gray-700">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-cyan-600">60+</p>
            <p className="text-sm font-medium text-gray-700">Completed Projects</p>
          </div>
        </div>
      </div>
  
      {/* Right: Description */}
      <div className="lg:w-[30%] md:w-full flex items-center md:pr-4 pr-0 lg:pr-11">
        <p className="text-lg  md:text-left text-left">
          Hi, we’re <span className="font-semibold text-gray-900 leading-[34px]">Virtugrow Digital 🚀</span>. 
          We craft digital solutions to grow your brand. From web development to UX/UI design and marketing,
          our team delivers impactful results that matter.
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default StorySection;
