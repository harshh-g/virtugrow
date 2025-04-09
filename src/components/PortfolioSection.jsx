import React from 'react';
import b2 from '../assets/Frame.png'

const PortfolioSection = () => {
  const projects = [
    {
      image:b2
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-medium mb-1">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work That Speaks</h2>
        </div>
        
        <div className="w-full h-full">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                
                className="w-full h-full object-cover transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection