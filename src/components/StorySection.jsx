import React from 'react';
import b2 from '../assets/Numbers.png'

const StorySection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  items-center ">
          <div className="w-full ">
            <img 
              src={b2} 
              alt="Modern Office Space" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;