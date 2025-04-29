import { useEffect, useRef, useState } from 'react';
import './BlogPage.css';

export default function BlogPage() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dotsRef = useRef([]);
  
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "This is a featured article - The most important piece of content",
      description: "Very short description of what's actually being discussed in this article, maybe the first sentences to provide a preview.",
      image: "/api/placeholder/800/500",
      link: "/blog/article-1"
    },
    {
      id: 2,
      title: "SEO Strategies for Small Businesses in 2025",
      description: "Discover the latest SEO techniques that can help small businesses compete with larger corporations in the digital space.",
      image: "/api/placeholder/800/500",
      link: "/blog/article-2"
    },
    {
      id: 3,
      title: "Social Media Trends Reshaping Marketing",
      description: "Explore how emerging social platforms and changing user behaviors are creating new opportunities for brand engagement.",
      image: "/api/placeholder/800/500",
      link: "/blog/article-3"
    },
    {
      id: 4,
      title: "Website Performance: Speed vs. Features",
      description: "Finding the perfect balance between rich website functionality and the loading speeds your visitors demand.",
      image: "/api/placeholder/800/500",
      link: "/blog/article-4"
    },
    {
      id: 5,
      title: "Building Brand Authority Through Content",
      description: "Learn how strategic content creation can position your company as a thought leader in your industry.",
      image: "/api/placeholder/800/500",
      link: "/blog/article-5"
    }
  ];

  // Handle slide changes
  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  // Set up auto-sliding
  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % blogs.length;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(slideInterval);
  }, [currentSlide, blogs.length]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-44  px-10 w-[80%] lg:w-[90%]  mx-auto  h-[100vh] first-section  "> 
                <div className="flex flex-col items-start space-y-4 ">
          <div className="flex items-center mt-10  ml-10 ">
            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span className="text-blue-400 mr-10 text-2xl">Blogs</span>
            <h1 className='blog-heading '>
            Fresh ideas and
            </h1>           
          </div>
            <div>
              <h1 className='blog-heading2 '>insights to grow</h1>
            </div>
            <div>
              <h1 className='blog-heading3 '>your brand online</h1>
            </div>
          </div>
            <div className="sub-heading-div   ">
             <div className='sub-heading-div2 '>
            <p className="sub-heading">Discover the latest news, insights, and strategies for your business growth.</p>
             </div>
            </div>
        
      </section>
      
      {/* Featured Blogs Slider */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-blue-400 text-2xl mb-10">Featured Blogs</h2>
        
        <div className="relative overflow-hidden" ref={sliderRef}>
          <div 
            className="flex transition-transform duration-700 ease-out" 
            style={{ 
              width: `${blogs.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / blogs.length)}%)`
            }}
          >
            {blogs.map((blog, index) => (
              <div 
                key={blog.id}
                className="w-full"
                style={{ flex: `0 0 ${100 / blogs.length}%` }}
              >
                <div className="flex flex-col md:flex-row bg-gray-900 rounded-xl overflow-hidden mx-2">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-3xl font-bold mb-4">{blog.title}</h3>
                    <p className="text-gray-400 mb-6">{blog.description}</p>
                    <a 
                      href={blog.link} 
                      className="inline-flex items-center text-white"
                    >
                      Read Now 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {blogs.map((_, index) => (
              <button
                key={index}
                ref={el => dotsRef.current[index] = el}
                className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-gray-600'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.3s forwards;
        }
      `}</style>
    </main>
  );
}