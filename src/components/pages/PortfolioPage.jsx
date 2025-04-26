import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import comp1 from '../../assets/new portfolio/comp1.png';
import comp2 from '../../assets/new portfolio/comp2.png';
import comp3 from '../../assets/new portfolio/comp3.png';
import comp4 from '../../assets/new portfolio/comp4.png';
import comp5 from '../../assets/new portfolio/comp5.png';
import comp6 from '../../assets/new portfolio/comp6.png';
import comp7 from '../../assets/new portfolio/comp7.png';
import comp8 from '../../assets/new portfolio/comp8.png';
import comp9 from '../../assets/new portfolio/comp9.png';
import comp10 from '../../assets/new portfolio/comp10.png';

export default function PortfolioPage() {
  // Main array containing arrays of projects by category
  const portfolioData = [
    {
      category: "Featured Works",
      projects: [
        { id: 1, name: "Project Name Here", description: "Small description", image: comp1 },
        { id: 2, name: "Project Name Here", description: "Small description", image: comp2 },
        { id: 3, name: "Project Name Here", description: "Small description", image: comp3 },
        { id: 4, name: "Project Name Here", description: "Small description", image: comp4 },
        { id: 5, name: "Project Name Here", description: "Small description", image: comp5 },
        { id: 6, name: "Project Name Here", description: "Small description", image: comp6 },
        { id: 7, name: "Project Name Here", description: "Small description", image: comp7 },
        { id: 8, name: "Project Name Here", description: "Small description", image: comp8 },
        { id: 9, name: "Project Name Here", description: "Small description", image: comp9 }
      ]
    },
    {
      category: "UX/UI Design",
      projects: [
        { id: 1, name: "Project Name Here", description: "Small description", image: comp1 },
        { id: 2, name: "Project Name Here", description: "Small description", image: comp4 },
        { id: 3, name: "Project Name Here", description: "Small description", image: comp2 },
        { id: 4, name: "Project Name Here", description: "Small description", image: comp5 },
        { id: 5, name: "Project Name Here", description: "Small description", image: comp7 },
        { id: 6, name: "Project Name Here", description: "Small description", image: comp6 },
        { id: 7, name: "Project Name Here", description: "Small description", image: comp3 },
        { id: 8, name: "Project Name Here", description: "Small description", image: comp8 },
        { id: 9, name: "Project Name Here", description: "Small description", image: comp9 }
      ]
    },
    {
      category: "Web Development",
      projects: [
        { id: 1, name: "Project Name Here", description: "Small description", image: comp9 },
        { id: 2, name: "Project Name Here", description: "Small description", image: comp2 },
        { id: 3, name: "Project Name Here", description: "Small description", image: comp7 },
        { id: 4, name: "Project Name Here", description: "Small description", image: comp4 },
        { id: 5, name: "Project Name Here", description: "Small description", image: comp5 },
        { id: 6, name: "Project Name Here", description: "Small description", image: comp6 },
        { id: 7, name: "Project Name Here", description: "Small description", image: comp1 },
        { id: 8, name: "Project Name Here", description: "Small description", image: comp8 },
        { id: 9, name: "Project Name Here", description: "Small description", image: comp3 }
      ]
    },
    {
      category: "App Development",
      projects: [
        { id: 1, name: "Project Name Here", description: "Small description", image: comp1 },
        { id: 2, name: "Project Name Here", description: "Small description", image: comp2 },
        { id: 3, name: "Project Name Here", description: "Small description", image: comp3 },
        { id: 4, name: "Project Name Here", description: "Small description", image: comp4 },
        { id: 5, name: "Project Name Here", description: "Small description", image: comp5 },
        { id: 6, name: "Project Name Here", description: "Small description", image: comp6 },
        { id: 7, name: "Project Name Here", description: "Small description", image: comp7 },
        { id: 8, name: "Project Name Here", description: "Small description", image: comp8 },
        { id: 9, name: "Project Name Here", description: "Small description", image: comp9 }
      ]
    },
    {
      category: "Digital Marketing",
      projects: [
        { id: 1, name: "Project Name Here", description: "Small description", image: comp1 },
        { id: 2, name: "Project Name Here", description: "Small description", image: comp2 },
        { id: 3, name: "Project Name Here", description: "Small description", image: comp3 },
        { id: 4, name: "Project Name Here", description: "Small description", image: comp4 },
        { id: 5, name: "Project Name Here", description: "Small description", image: comp5 },
        { id: 6, name: "Project Name Here", description: "Small description", image: comp6 },
        { id: 7, name: "Project Name Here", description: "Small description", image: comp7 },
        { id: 8, name: "Project Name Here", description: "Small description", image: comp8 },
        { id: 9, name: "Project Name Here", description: "Small description", image: comp9 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Featured Works");
  const [displayedProjects, setDisplayedProjects] = useState([]);

  // Update displayed projects when category changes
  useEffect(() => {
    const categoryData = portfolioData.find(item => item.category === activeCategory);
    if (categoryData) {
      setDisplayedProjects(categoryData.projects);
    }
  }, [activeCategory]);

  return (
    <div className="text-white bg-gradient-to-b from-[#002338]/90 via-[#0a0c0d] to-[#090b0d] min-h-screen">
  {/* Hero Section */}
  <section className="text-white bg-black min-h-screen flex items-center w-full z-0">
    <div className="w-full md:w-[80%] mx-auto py-16 md:py-0 md:h-[40%] flex flex-col px-4 md:px-6">
      <div className="flex flex-col md:flex-row leading-tight justify-start">
        <p className="text-cyan-400 text-sm pt-10 pb-4 md:pb-0 md:pr-16">• Portfolio</p>
        <h1 className="v2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Creating next level<br /> <span className=''>digital products</span>
        </h1>
      </div>
      <p className="c2 mt-6 text-base md:text-lg text-gray-300">
        Helping businesses grow with innovative<br className="hidden md:block" />
        solutions and strategic execution.
      </p>
    </div>
  </section>

  {/* Filter Categories */}
  <section className="container mx-auto px-4 border-t border-gray-700">
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 overflow-x-auto">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0 sm:mr-8">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-blue-500 whitespace-nowrap">Featured Works</span>
      </div>
      <div className="flex flex-nowrap md:flex-wrap gap-4 sm:gap-6 overflow-x-auto pb-2 md:pb-0">
        {portfolioData.map(item => (
          <button
            key={item.category}
            onClick={() => setActiveCategory(item.category)}
            className={`${activeCategory === item.category ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors whitespace-nowrap`}
          >
            {item.category}
          </button>
        ))}
      </div>
    </div>
  </section>

  {/* Portfolio Grid */}
  <section className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {displayedProjects.map(project => (
        <div key={project.id} className="group relative overflow-hidden rounded-lg">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[550px] mt-4 bg-transparent">
            <img 
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* CTA Section */}
  <section className="container mx-auto px-4 py-8 mb-8">
    <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 rounded-lg p-4 md:p-8 text-center">
      <p className="text-sm mb-2">HAVE A PROJECT IN MIND?</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-wider">LET'S WORK</h2>
      <button className="bg-white text-gray-900 px-4 md:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center mx-auto">
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</div>
  );
}