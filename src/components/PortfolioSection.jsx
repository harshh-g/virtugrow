import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    },
    {
      image: '/api/placeholder/400/300',
      title: 'Project Name Here',
      description: 'Small description'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-medium mb-1">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work That Speaks</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection