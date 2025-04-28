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
import './BlogPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Featured Blogs");
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const portfolioRef = useRef(null);

  const blogData = [
    {
      category: "Featured Blogs",
      posts: [
        { 
          id: 1, 
          title: "This is a featured article - The most important piece of content", 
          description: "Every client description of what's actually being discussed in this article with the full instructions to provide a preview.", 
          image: comp1,
          author: "Author Name"
        },
        { 
          id: 2, 
          title: "This is a featured article - The most important piece of content", 
          description: "Every client description of what's actually being discussed in this article with the full instructions to provide a preview.", 
          image: comp2,
          author: "Author Name"
        },
        { 
          id: 3, 
          title: "This is a featured article - The most important piece of content", 
          description: "Every client description of what's actually being discussed in this article with the full instructions to provide a preview.", 
          image: comp3,
          author: "Author Name"
        }
      ]
    },
    {
      category: "UX/UI Design",
      posts: [
        { 
          id: 1, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp4,
          author: "Author Name"
        },
        { 
          id: 2, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp5,
          author: "Author Name"
        },
        { 
          id: 3, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp6,
          author: "Author Name"
        }
      ]
    },
    {
      category: "Web Development",
      posts: [
        { 
          id: 1, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp7,
          author: "Author Name"
        },
        { 
          id: 2, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp8,
          author: "Author Name"
        },
        { 
          id: 3, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp9,
          author: "Author Name"
        }
      ]
    },
    {
      category: "App Development",
      posts: [
        { 
          id: 1, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp1,
          author: "Author Name"
        },
        { 
          id: 2, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp2,
          author: "Author Name"
        },
        { 
          id: 3, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp3,
          author: "Author Name"
        }
      ]
    },
    {
      category: "Digital Marketing",
      posts: [
        { 
          id: 1, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp4,
          author: "Author Name"
        },
        { 
          id: 2, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp5,
          author: "Author Name"
        },
        { 
          id: 3, 
          title: "Article Name - Headline of an Article", 
          description: "", 
          image: comp6,
          author: "Author Name"
        }
      ]
    }
  ];

  useEffect(() => {
    const categoryData = blogData.find(item => item.category === activeCategory);
    if (categoryData) {
      setDisplayedProjects(categoryData.posts);
    }
  }, [activeCategory]);

  useEffect(() => {
    // Slide in animations for hero section
    gsap.from(".hero-text h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(".hero-text p", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });

    // Animate blog cards
    gsap.from(".blog-card", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 80%"
      }
    });

    // Animate category buttons
    gsap.from(".category-btn", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.8
    });

    // CTA section animation
    gsap.from(".cta-section", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%"
      }
    });

    // Hover effects for blog cards
    const cards = gsap.utils.toArray(".blog-card");
    cards.forEach(card => {
      const hover = gsap.to(card, { 
        y: -10, 
        boxShadow: "0 22px 40px rgba(0, 0, 0, 0.3)", 
        duration: 0.3, 
        paused: true, 
        ease: "power2.out" 
      });
      card.addEventListener("mouseenter", () => hover.play());
      card.addEventListener("mouseleave", () => hover.reverse());
    });
  }, [displayedProjects]);

  return (
    <div className="text-white bg-gradient-to-b from-[#002338]/90 via-[#0a0c0d] to-[#090b0d] min-h-screen" ref={portfolioRef}>
      {/* Navigation Bar */}
      

      <section className="text-white bg-black min-h-screen flex items-center w-full">
        <div className="w-full md:w-[80%] mx-auto py-16 md:py-0 md:h-[40%] flex flex-col px-4 md:px-6">
          <div className="flex flex-col md:flex-row leading-tight justify-start">
            <p className="text-cyan-400 text-sm pt-10 pb-4 md:pb-0 md:pr-16">• Blogs</p>
            <h1 className="v2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Fresh ideas and<br /> 
            insights to grow<br />
            your brand online
            </h1>
          </div>
          <p className="c2 mt-6 text-base md:text-lg text-gray-300">
          Discover quick tips, trends, and strategies for digital success.
          </p>
        </div>
      </section>


      

      {/* Featured Blogs Slider */}
      <section className="px-4 md:px-12 py-8">
        <h2 className="text-xl font-semibold mb-6 px-2">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blog-grid">
          <div className="blog-card bg-[#111111] rounded-lg overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img src={comp2} alt="Blog" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">This is a featured article - The most important piece of content</h3>
              <p className="text-gray-400 text-sm mb-4">Every client description of what's actually being discussed in this article with the full instructions to provide a preview.</p>
              <a href="#" className="text-cyan-400 inline-flex items-center text-sm">
                Read Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="blog-card bg-[#111111] rounded-lg overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img src={comp3} alt="Blog" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">This is a featured article - The most important piece of content</h3>
              <p className="text-gray-400 text-sm mb-4">Every client description of what's actually being discussed in this article with the full instructions to provide a preview.</p>
              <a href="#" className="text-cyan-400 inline-flex items-center text-sm">
                Read Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="blog-card bg-[#111111] rounded-lg overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img src={comp4} alt="Blog" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">This is a featured article - The most important piece of content</h3>
              <p className="text-gray-400 text-sm mb-4">Every client description of what's actually being discussed in this article with the full instructions to provide a preview.</p>
              <a href="#" className="text-cyan-400 inline-flex items-center text-sm">
                Read Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Slider Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <div key={index} className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
          ))}
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 md:px-12 mt-8">
        <hr className="border-gray-800 w-full mb-6" />
        
        <div className="flex overflow-x-auto scrollbar-hide gap-8 py-2 category-container">
          {blogData.map(item => (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`category-btn whitespace-nowrap transition-colors ${
                activeCategory === item.category
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === item.category && (
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 inline-block"></div>
              )}
              {item.category}
            </button>
          ))}
        </div>
        
        <hr className="border-gray-800 w-full mt-6" />
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 blog-grid">
          {/* Tokyo Night Scene */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp5} alt="Tokyo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Mountain View */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp6} alt="Mountain View" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Portfolio Website */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp7} alt="Portfolio Website" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Laptop Work */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp8} alt="Laptop" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* RGB Keyboard */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp9} alt="RGB Keyboard" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Showreel */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp10} alt="Showreel" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Food Website */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp1} alt="Food Website" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* Design Elements */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp2} alt="Design Elements" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
          
          {/* E-Commerce */}
          <div className="blog-card bg-transparent">
            <div className="rounded-lg overflow-hidden h-64 mb-4">
              <img src={comp3} alt="E-Commerce" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium">Article Name - Headline of an Article</h3>
            <p className="text-gray-400 text-sm">Author Name</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 cta-section">
        <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 rounded-lg p-12 text-center">
          <p className="text-sm uppercase tracking-wider mb-4">HAVE A PROJECT IN MIND?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">LET'S WORK</h2>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full inline-flex items-center">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}