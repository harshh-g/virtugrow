import { useEffect, useRef, useState } from 'react';
import './PortfolioPage.css';
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

import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';

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
  
  const [currentSlide, setCurrentSlide] = useState(0);
 
  
 

  // Handle slide changes
  

  

  return (
    <main className="h-full overflow-auto bg-black text-white">
      {/* Hero Section */}
      <section className=" first-section  "> 
          <div className="first-section-element ">
          <div className="first-section-element2 ">
            <div className='first-section-element3 '>
            <div className="h-2 w-2 rounded-full bg-cyan-400 mr-3 "></div>
              <span className="first-section-element3-text  "> Portfolio</span>
            </div>
            <h1 className='blog-heading '>
            Creating next level
            </h1>           
          </div>

            <div className='first-section-element3-div '>
              <h1 className='blog-heading '>digital products</h1>
            </div>
          </div>
            <div className="sub-heading-div  ">
             <div className='sub-heading-div2 '>
            <p className="sub-heading">Dive into our portfolio and see how we turn ideas into impact, creativity into results.</p>
             </div>
            </div>

           
      </section>
      
     


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
            : 'text-white'
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

      < section className=" bg-black py-20">
      <div className='container mx-auto h-[400px] px-4  '>
      <div className="bg-gradient-to-b from-[#0F0F0F]/80 to-[#0F0F0F]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
      <p className="text-sm port pb-7 ">HAVE A PROJECT IN MIND?</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl port2">LET'S WORK</h2>
      <Link to="/contactpage" className='group relative overflow-hidden flex items-center lg:mt-12 lg:px-4 lg:py-3 md:mt-12 md:px-4 md:py-3 mt-7 px-4  py-3  text-black rounded-3xl bg-[linear-gradient(182deg,_#FFF_1.76%,_rgba(255,255,255,0.8)_98.24%)] transition-all duration-500 ease-in'> 
 
 {/* Background overlay that animates on hover */}
 <span className="absolute inset-0 bg-gradient-to-b from-[#2FBECE] group-hover:border-white group-hover:border-2 group-hover:rounded-full to-[#2974B7]  from-[56.52%] to-[117.39%] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease z-0"></span>

 {/* Button content on top of the animated background */}
 <span className="relative z-10 flex items-center text-black group-hover:text-white transition-colors duration-300">
   <span className="mr-3 leading-tight">Contact Us</span>
   <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-[#2FBECE] to-[#2974B7] from-[56.52%] to-[117.39%] rounded-full transition-all duration-300 group-hover:bg-transparent">
     <ArrowRight size={20} className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-0 -rotate-45 font-extralight" />
   </span>
 </span>
</Link>
    </div>
      </div>
    
  </section>
      

      
      
    </main>
  );
}