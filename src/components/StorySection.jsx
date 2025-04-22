import React from 'react';
import boardroomImg from '../assets/meeting.png'; // Replace with your actual image path

const StorySection = () => {
  return (
    <section className="bg-[#0d1128]">
      {/* Image */}
      <img src={boardroomImg} alt="Boardroom" className="w-full object-contain" />

      {/* Text Content Card */}
      <div className="bg-white rounded-b-2xl p-6 md:p-12 grid md:grid-cols-3 gap-6 items-start text-gray-800">
  {/* Left: Our Story + Stats */}
  <div className="space-y-12">
    <h3 className="text-2xl font-semibold text-cyan-600">Our Story</h3>
    <div className="flex gap-10">
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
  <div className="md:col-span-2 flex  justify-around">
    <p className="text-base m3  leading-relaxed text-gray-700 tracking-tighter">
      Hi, we’re <span className="font-semibold text-gray-900">Virtugrow Digital 🚀</span>. 
      We craft digital solutions
      to grow your brand. From web development to UX/UI
      design and marketing,
      our team delivers impactful results that matter.
    </p>
  </div>
</div>

    </section>
  );
};

export default StorySection;
