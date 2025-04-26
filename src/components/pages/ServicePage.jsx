import { useState, useEffect } from 'react';
import b2 from '../../assets/softdev.jpg'
import './servicepage.css'

export default function ServicePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});
  
  // Enhanced content for expanded service items with images
  const serviceDetails = {
    design: {
      "UI/UX Design": {
        description: "We create intuitive, user-focused interfaces that ensure seamless interactions and exceptional user experiences across all digital touchpoints.",
        image: b2
      },
      "Mobile Experience": {
        description: "Our mobile-first approach ensures your digital presence is optimized for all devices with responsive design and native-like experiences.",
        image: b2
      },
      "Applications & Dashboards": {
        description: "We develop custom applications and data dashboards that provide actionable insights and streamline business operations.",
        image: b2
      },
      "Cross-platform Experience": {
        description: "Our solutions work seamlessly across all platforms and devices, ensuring consistent brand experience everywhere.",
        image: b2
      },
      "Commercial Experience": {
        description: "We create compelling e-commerce experiences that drive conversions and enhance customer satisfaction.",
        image: b2
      },
      "Design Support & Maintenance": {
        description: "Our ongoing support ensures your digital assets remain current, secure, and optimized for performance.",
        image: b2
      }
    },
    technology: {
      "Data & Analytics": {
        description: "We transform raw data into actionable insights through advanced analytics and visualization tools.",
        image: b2
      },
      "Web Development": {
        description: "Our full-stack development team creates robust, scalable web applications using the latest technologies.",
        image: b2
      },
      "Mobile App Development": {
        description: "We build native and cross-platform mobile applications that deliver exceptional user experiences.",
        image: b2
      },
      "E-commerce": {
        description: "Our e-commerce solutions are designed to maximize conversions and streamline the customer journey.",
        image: b2
      },
      "Quality Assurance & Testing": {
        description: "Our rigorous testing methodology ensures your digital products are reliable, secure, and bug-free.",
        image: b2
      },
      "Cloud Services": {
        description: "We leverage cloud technologies to build scalable, reliable, and cost-effective digital solutions.",
        image: b2
      }
    },
    marketing: {
      "Social Media Management": {
        description: "We create and execute social media strategies that build brand awareness and engage your target audience.",
        image: b2
      },
      "Performance Marketing": {
        description: "Our data-driven approach maximizes ROI across paid media channels to drive measurable results.",
        image: b2
      },
      "Search Engine Optimization": {
        description: "We optimize your digital presence to improve visibility and drive organic traffic.",
        image: b2
      },
      "Content Marketing": {
        description: "We create compelling content that resonates with your audience and supports your business objectives.",
        image: b2
      },
      "Marketing Automation": {
        description: "We implement automated marketing workflows that nurture leads and drive conversions.",
        image: b2
      },
      "Analytics": {
        description: "Our analytics solutions provide deep insights into campaign performance and customer behavior.",
        image: b2
      }
    },
    branding: {
      "Brand Consulting": {
        description: "We help define and articulate your brand positioning, personality, and messaging strategy.",
        image: b2
      },
      "Logo Design": {
        description: "We create distinctive visual identities that capture your brand essence and resonate with your audience.",
        image: b2
      },
      "Brand Collateral": {
        description: "We design cohesive brand materials across all touchpoints for consistent brand communication.",
        image: b2
      },
      "Graphic Design": {
        description: "Our creative team produces visually compelling designs that communicate your brand message effectively.",
        image: b2
      },
      "2D / 3D Visualization": {
        description: "We bring your products and services to life through immersive visual experiences.",
        image: b2
      },
      "Brand Identity": {
        description: "We develop comprehensive brand guidelines that ensure consistency across all platforms.",
        image: b2
      }
    }
  };
  
  // Toggle expanded state for service items
  const toggleExpand = (sectionId, itemName) => {
    const key = `${sectionId}-${itemName}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Check if an item is expanded
  const isExpanded = (sectionId, itemName) => {
    const key = `${sectionId}-${itemName}`;
    return expandedItems[key] || false;
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.service-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && 
            (index === sections.length - 1 || sections[index + 1].offsetTop > scrollPosition)) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col font-sans bg-white">
      {/* Header/Navigation */}
      
      
      {/* Hero Section - Fixed */}
      <section className="bg-black text-white  min-h-screen flex items-center sticky top-0 left-0 w-full z-0 ">
        <div className="w-[80%] mx-auto h-[50%] flex flex-col px-6">
          <div className=" flex leading-tight  justify-start">
            <p className="text-cyan-400 text-sm pt-10  pr-16 ">• Services</p>
            <h1 className="v2">
              Crafting Digital<br />
              Success with Design<br />
              Development & Marketing
            </h1>
          </div>
            <p className="c2">
              Helping businesses grow with innovative<br />
              solutions and strategic execution.
            </p>
        </div>
      </section>
      
      {/* Service Sections with increasing z-index */}
      <div className="relative">
        {/* Spacer to push content below fixed hero */}
        <div className="h-screen"></div>
        
        {/* Section 1: Design - z-index: 10 */}
        <section className={`service-section sticky top-0 z-10 py-16 transition-all shadow-xl duration-700 ${activeSection >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} bg-white
]`}>
          <div className="w-screen h-screen mx-auto px-6 pt-24">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <span className="text-cyan-500 text-6xl font-bold">01</span>
                <p className="text-gray-500 text-sm mt-2">(Experience Design)</p>
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Designing Exceptional<br />Digital Experiences</h2>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <img src={b2} alt="Design devices" className="w-[300px] h-32 object-cover rounded" />
                </div>
                
                <div className="space-y-4">
                  {Object.keys(serviceDetails.design).map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <div 
                        className="flex justify-between items-center cursor-pointer" 
                        onClick={() => toggleExpand('design', item)}
                      >
                        <span>{item}</span>
                        <span className="text-xl transform transition-transform duration-300 ease-in-out">
                          {isExpanded('design', item) ? '−' : '+'}
                        </span>
                      </div>
                      {isExpanded('design', item) && (
                        <div className="pt-2 pl-2 text-sm text-gray-600 animate-fadeIn">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                              {serviceDetails.design[item].description}
                            </div>
                            <div className="md:w-1/2 mt-3 md:mt-0">
                              <img 
                                src={serviceDetails.design[item].image} 
                                alt={`${item} illustration`} 
                                className="w-full h-32 object-cover rounded shadow-md" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Technology - z-index: 20 */}
        <section className={`service-section sticky top-0 z-20 py-16 transition-all shadow-2xl duration-700 ${activeSection >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} bg-white`}>
          <div className="w-screen h-screen mx-auto px-6 ">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <span className="text-cyan-500 text-6xl font-bold">02</span>
                <p className="text-gray-500 text-sm mt-2">(Technology)</p>
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Innovative Technology<br />Solutions for a Digital World</h2>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <img src={b2} alt="AI technology" className="w-[300px] h-32 object-cover rounded" />
                </div>
                
                <div className="space-y-4">
                  {Object.keys(serviceDetails.technology).map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <div 
                        className="flex justify-between items-center cursor-pointer" 
                        onClick={() => toggleExpand('technology', item)}
                      >
                        <span>{item}</span>
                        <span className="text-xl transform transition-transform duration-300 ease-in-out">
                          {isExpanded('technology', item) ? '−' : '+'}
                        </span>
                      </div>
                      {isExpanded('technology', item) && (
                        <div className="pt-2 pl-2 text-sm text-gray-600 animate-fadeIn">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                              {serviceDetails.technology[item].description}
                            </div>
                            <div className="md:w-1/2 mt-3 md:mt-0">
                              <img 
                                src={serviceDetails.technology[item].image} 
                                alt={`${item} illustration`} 
                                className="w-full h-32 object-cover rounded shadow-md" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 3: Marketing - z-index: 30 */}
        <section className={`service-section sticky top-0 z-30 py-16 shadow-2xl transition-all duration-700 ${activeSection >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} bg-white`}>
          <div className="w-screen h-screen mx-auto px-6 pt-24">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <span className="text-cyan-500 text-6xl font-bold">03</span>
                <p className="text-gray-500 text-sm mt-2">(Digital Marketing)</p>
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Strategic Digital Marketing<br />for Growth & Engagement</h2>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <img src={b2} alt="SEO" className="w-[300px] h-32 object-cover rounded" />
                </div>
                
                <div className="space-y-4">
                  {Object.keys(serviceDetails.marketing).map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <div 
                        className="flex justify-between items-center cursor-pointer" 
                        onClick={() => toggleExpand('marketing', item)}
                      >
                        <span>{item}</span>
                        <span className="text-xl transform transition-transform duration-300 ease-in-out">
                          {isExpanded('marketing', item) ? '−' : '+'}
                        </span>
                      </div>
                      {isExpanded('marketing', item) && (
                        <div className="pt-2 pl-2 text-sm text-gray-600 animate-fadeIn">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                              {serviceDetails.marketing[item].description}
                            </div>
                            <div className="md:w-1/2 mt-3 md:mt-0">
                              <img 
                                src={serviceDetails.marketing[item].image} 
                                alt={`${item} illustration`} 
                                className="w-full h-32 object-cover rounded shadow-md" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Branding - z-index: 40 */}
        <section className={`service-section sticky top-0 z-40 py-16 transition-all shadow-2xl duration-700 ${activeSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} bg-white`}>
          <div className="w-screen h-screen mx-auto px-6 pt-24">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <span className="text-cyan-500 text-6xl font-bold">04</span>
                <p className="text-gray-500 text-sm mt-2">(Branding)</p>
              </div>
              <div className="md:w-2/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Building Strong &<br />Memorable Brands</h2>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <img src={b2} alt="Branding" className="w-[300px] h-32 object-cover rounded" />
                </div>
                
                <div className="space-y-4">
                  {Object.keys(serviceDetails.branding).map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3">
                      <div 
                        className="flex justify-between items-center cursor-pointer" 
                        onClick={() => toggleExpand('branding', item)}
                      >
                        <span>{item}</span>
                        <span className="text-xl transform transition-transform duration-300 ease-in-out">
                          {isExpanded('branding', item) ? '−' : '+'}
                        </span>
                      </div>
                      {isExpanded('branding', item) && (
                        <div className="pt-2 pl-2 text-sm text-gray-600 animate-fadeIn">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                              {serviceDetails.branding[item].description}
                            </div>
                            <div className="md:w-1/2 mt-3 md:mt-0">
                              <img 
                                src={serviceDetails.branding[item].image} 
                                alt={`${item} illustration`} 
                                className="w-full h-32 object-cover rounded shadow-md" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Push content for scrolling space */}
        <div className="h-screen"></div>
      </div>
      
      
      
    </div>
  );
}