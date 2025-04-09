import React from 'react';
import { Layout, Code, Share2, PieChart, Smartphone, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="w-6 h-6 text-cyan-500" />,
      title: 'UI/UX Design',
      description: 'UI/UX design focuses on creating seamless and enjoyable user experiences. It involves wireframing, prototyping, and user testing.'
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-500" />,
      title: 'Web Development',
      description: 'Web development is the process of building websites and applications. It includes front-end and back-end development to ensure functionality.'
    },
    {
      icon: <Share2 className="w-6 h-6 text-cyan-500" />,
      title: 'Social Media Management',
      description: 'Social media management involves creating and posting content, engaging with followers, and analyzing social media performance.'
    },
    {
      icon: <PieChart className="w-6 h-6 text-cyan-500" />,
      title: 'Google Ads',
      description: 'Logo design is the process of creating a unique visual symbol that represents a company or brand. Its key to brand recognition and identity.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
      title: 'Mobile App Development',
      description: 'Mobile app development involves creating applications for iOS and Android. It includes designing, coding and testing apps for mobile devices.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-500" />,
      title: 'Digital Marketing',
      description: 'Digital marketing uses digital channels to promote products or services. It includes SEO, content marketing, email campaigns, and analytics.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-medium mb-1">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Palette Of Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800/70 hover:bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex mx-auto items-center justify-center w-12 h-12 bg-cyan-900/30 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold flex justify-center text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full inline-flex items-center transition-colors duration-300">
            View More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;