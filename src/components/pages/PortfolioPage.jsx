import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import './PortfolioPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Featured Works");
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const portfolioRef = useRef(null);

  const portfolioData = [
    // --- Your portfolioData (same as before) ---
    {
      category: "Featured Works",
      projects: [
        { id: 1, name: "Project 1", description: "Small description", image: comp10, height: false },
        { id: 2, name: "Project 2", description: "Small description", image: comp9, height: true },
        { id: 3, name: "Project 3", description: "Small description", image: comp8, height: false },
        { id: 4, name: "Project 4", description: "Small description", image: comp7, height: false },
        { id: 5, name: "Project 5", description: "Small description", image: comp4, height: false },
        { id: 6, name: "Project 6", description: "Small description", image: comp1, height: true },
        { id: 7, name: "Project 7", description: "Small description", image: comp5, height: true },
        { id: 8, name: "Project 8", description: "Small description", image: comp3, height: false },
        { id: 9, name: "Project 9", description: "Small description", image: comp2, height: false }
      ]
    },
    {
      category: "UX/UI Design",
      projects: [
        { id: 1, name: "Project 1", description: "Small description", image: comp1, height: false },
        { id: 2, name: "Project 2", description: "Small description", image: comp9, height: true },
        { id: 3, name: "Project 3", description: "Small description", image: comp3, height: false },
        { id: 4, name: "Project 4", description: "Small description", image: comp7, height: false },
        { id: 5, name: "Project 5", description: "Small description", image: comp4, height: false },
        { id: 6, name: "Project 6", description: "Small description", image: comp10, height: true },
        { id: 7, name: "Project 7", description: "Small description", image: comp5, height: true },
        { id: 8, name: "Project 8", description: "Small description", image: comp8, height: false },
        { id: 9, name: "Project 9", description: "Small description", image: comp2, height: false }
      ]
    },
    {
      category: "Web Development",
      projects: [
        { id: 1, name: "Project 1", description: "Small description", image: comp7, height: false },
        { id: 2, name: "Project 2", description: "Small description", image: comp3, height: true },
        { id: 3, name: "Project 3", description: "Small description", image: comp8, height: false },
        { id: 4, name: "Project 4", description: "Small description", image: comp1, height: false },
        { id: 5, name: "Project 5", description: "Small description", image: comp4, height: false },
        { id: 6, name: "Project 6", description: "Small description", image: comp6, height: true },
        { id: 7, name: "Project 7", description: "Small description", image: comp5, height: true },
        { id: 8, name: "Project 8", description: "Small description", image: comp10, height: false },
        { id: 9, name: "Project 9", description: "Small description", image: comp2, height: false }
      ]
    },
    {
      category: "App Development",
      projects: [
        { id: 1, name: "Project 1", description: "Small description", image: comp3, height: false },
        { id: 2, name: "Project 2", description: "Small description", image: comp5, height: true },
        { id: 3, name: "Project 3", description: "Small description", image: comp8, height: false },
        { id: 4, name: "Project 4", description: "Small description", image: comp6, height: false },
        { id: 5, name: "Project 5", description: "Small description", image: comp4, height: false },
        { id: 6, name: "Project 6", description: "Small description", image: comp1, height: true },
        { id: 7, name: "Project 7", description: "Small description", image: comp9, height: true },
        { id: 8, name: "Project 8", description: "Small description", image: comp10, height: false },
        { id: 9, name: "Project 9", description: "Small description", image: comp2, height: false }
      ]
    },
    {
      category: "Digital Marketing",
      projects: [
        { id: 1, name: "Project 1", description: "Small description", image: comp4, height: false },
        { id: 2, name: "Project 2", description: "Small description", image: comp7, height: true },
        { id: 3, name: "Project 3", description: "Small description", image: comp8, height: false },
        { id: 4, name: "Project 4", description: "Small description", image: comp3, height: false },
        { id: 5, name: "Project 5", description: "Small description", image: comp9, height: false },
        { id: 6, name: "Project 6", description: "Small description", image: comp6, height: true },
        { id: 7, name: "Project 7", description: "Small description", image: comp5, height: true },
        { id: 8, name: "Project 8", description: "Small description", image: comp3, height: false },
        { id: 9, name: "Project 9", description: "Small description", image: comp2, height: false }
      ]
    }
  ];

  useEffect(() => {
    const categoryData = portfolioData.find(item => item.category === activeCategory);
    if (categoryData) {
      setDisplayedProjects(categoryData.projects);
    }
  }, [activeCategory]);

  useEffect(() => {
    // Scroll Animations
    gsap.from(".portfolio-grid-item", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%"
      }
    });

    // Hover Effects
    const images = gsap.utils.toArray(".portfolio-img");
    images.forEach(img => {
      const hover = gsap.to(img, { scale: 1.05, duration: 0.5, paused: true, ease: "power2.out" });
      img.addEventListener("mouseenter", () => hover.play());
      img.addEventListener("mouseleave", () => hover.reverse());
    });
  }, [displayedProjects]);

  return (
    <div className="text-white bg-gradient-to-b from-[#002338]/90 via-[#0a0c0d] to-[#090b0d] h-full" ref={portfolioRef}>
      {/* Hero Section */}
      <section className="text-white bg-black min-h-screen flex items-center w-full">
        <div className="w-full md:w-[80%] mx-auto py-16 md:py-0 md:h-[40%] flex flex-col px-4 md:px-6">
          <div className="flex flex-col md:flex-row leading-tight justify-start">
            <p className="text-cyan-400 text-sm pt-10 pb-4 md:pb-0 md:pr-16">• Portfolio</p>
            <h1 className="v2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Creating next level<br /><span>digital products</span>
            </h1>
          </div>
          <p className="c2 mt-6 text-base md:text-lg text-gray-300">
            Helping businesses grow with innovative<br className="hidden md:block" />
            solutions and strategic execution.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 mt-6">
  {/* Top hr */}
  <hr className="border-gray-700 w-full" />

  <div className="flex justify-center items-center category-container overflow-x-auto scrollbar-hide gap-6 sm:gap-10 md:gap-16 lg:gap-24 py-6 sm:py-8 md:py-10">
    {portfolioData.map(item => (
      <button
        key={item.category}
        onClick={() => setActiveCategory(item.category)}
        className={`whitespace-nowrap transition-colors category-btn flex items-center ${
          activeCategory === item.category
            ? 'text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {activeCategory === item.category && (
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
        )}
        {item.category}
      </button>
    ))}
  </div>

  {/* Bottom hr */}
  <hr className="border-gray-700 w-full" />
</section>



      {/* Portfolio Grid */}
      <section className="container mx-auto px-4  py-10 portfolio-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map(project => (
            <div key={project.id} className="portfolio-grid-item group relative overflow-hidden rounded-lg">
              <div className="mt-4 bg-transparent">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`portfolio-img w-full object-cover rounded-lg ${project.height ? 'h-[530px]' : 'h-[300px]'}`}
                />
              <div className={` ${project.height ? 'bottom-0 ' : 'top-[313px]'} p-3 `}>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto h-[400px] px-4 py-8 ">
    <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
      <p className="text-sm port pb-7 ">HAVE A PROJECT IN MIND?</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl port2">LET'S WORK</h2>
      <button className="btn px-4 md:px-6 py-2 mt-5  flex items-center mx-auto">
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className='arrow'>
  <g clipPath="url(#clip0_710_3134)">
    <path d="M3.50614 2.60489C3.50617 2.39276 3.59046 2.18933 3.74046 2.03933C3.89045 1.88933 4.09389 1.80505 4.30602 1.80502L9.39719 1.80502C9.60932 1.80505 9.81275 1.88933 9.96275 2.03933C10.1128 2.18933 10.197 2.39276 10.1971 2.60489V7.69606C10.1934 7.9058 10.1075 8.10571 9.95794 8.25274C9.80833 8.39977 9.60695 8.48216 9.39719 8.48216C9.18742 8.48216 8.98605 8.39977 8.83644 8.25274C8.68683 8.10571 8.60095 7.9058 8.59731 7.69606L8.54866 4.58479L3.17465 9.95881C3.02462 10.1088 2.82114 10.1931 2.60896 10.1931C2.39679 10.1931 2.19331 10.1088 2.04328 9.95881C1.89325 9.80878 1.80896 9.60529 1.80896 9.39312C1.80896 9.18095 1.89325 8.97746 2.04328 8.82743L7.41729 3.45342L4.30602 3.40477C4.09389 3.40474 3.89045 3.32046 3.74046 3.17046C3.59046 3.02046 3.50617 2.81703 3.50614 2.60489Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_710_3134">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </button>
    </div>
  </section>
    </div>
  );
}





