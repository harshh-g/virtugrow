import React from 'react';

const StorySection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Modern Office Space" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-12 mb-8">
              <div>
                <h2 className="text-5xl font-bold text-cyan-500 mb-1">20+</h2>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-cyan-500 mb-1">60+</h2>
                <p className="text-gray-400">Completed Projects</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hi, we're Virtugrow Digital 🚀 We craft digital solutions to grow your brand. 
              From web development to UX/UI design and marketing, our team delivers impactful 
              results that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;