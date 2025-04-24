import React from 'react';
import boardroomImg from '../assets/meeting.png'; // Replace with your actual image path

const StorySection = () => {
  return (
    <section className="w-[90%] mx-auto mb-16">
      {/* Image */}
      <img src={boardroomImg} alt="Boardroom" className="w-full object-contain rounded-t-2xl" />

      {/* Text Content Card */}
      <div className="bg-white rounded-b-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* Left: Our Story + Stats */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-cyan-600">Our Story</h3>
          <div className="flex gap-8">
            <div>
              <p className="text-5xl font-bold text-cyan-600">20+</p>
              <p className="text-sm font-medium text-gray-700">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-cyan-600">60+</p>
              <p className="text-sm font-medium text-gray-700">Completed Projects</p>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="md:col-span-2 flex items-center">
          <p className="text-base leading-relaxed text-gray-700 tracking-wide">
            Hi, we’re <span className="font-semibold text-gray-900">Virtugrow Digital 🚀</span>. 
            We craft digital solutions to grow your brand. From web development to UX/UI design and marketing,
            our team delivers impactful results that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
