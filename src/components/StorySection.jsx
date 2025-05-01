import React from 'react';
import boardroomImg from '../assets/meeting.png'; // Replace with your actual image path

const StorySection = () => {
  return (
    <section className="w-[95%] mx-auto mb-16">
      {/* Image */}
      <img src={boardroomImg} alt="Boardroom" className="w-full object-contain rounded-2xl" />

      {/* Text Content Card */}
      <div className="bg-white w-[100%]  mt-10 flex justify-between">
        
        {/* Left: Our Story + Stats */}
        <div className="w-[25%] flex flex-col ">
          <h3 className="text-3xl  font-semibold text-cyan-600 pl-14">Our Story</h3>
          <div className="flex justify-around  py-5  ">

            <div className=' flex flex-col p-2 items-center'>
              <p className="text-5xl font-bold text-cyan-600">20+</p>
              <p className="text-sm font-medium text-gray-700">Happy Clients</p>
            </div>
            <div className=' flex flex-col p-2 items-center'> 
              <p className="text-5xl font-bold text-cyan-600">60+</p>
              <p className="text-sm font-medium text-gray-700">Completed Projects</p>
            </div>

          </div>
        </div>

        {/* Right: Description */}
        <div className="w-[30%] flex items-center pr-11 ">
          <p className="text-lg">
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
