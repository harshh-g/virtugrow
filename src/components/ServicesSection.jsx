import React from 'react';
import { motion } from 'framer-motion';
import bg1 from '../assets/icons/1.gif';
import bg2 from '../assets/icons/2.gif';
import bg3 from '../assets/icons/3.gif';
import bg4 from '../assets/icons/4.gif';
import bg5 from '../assets/icons/5.gif';
import bg6 from '../assets/icons/6.gif';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-8 flex flex-col items-center transition-all duration-300"
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 20px rgba(26, 156, 156, 0.2)',
        backgroundColor: 'rgba(26, 27, 32, 0.95)',
        scale: 1.02
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white rounded-full p-4 mb-4 transition-all duration-300 relative group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center text-sm">{description}</p>
    </motion.div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <motion.img src={bg1} alt="UI/UX Design" className="w-16 h-16"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
      title: "UI/UX Design",
      description: "UI/UX design focuses on creating seamless and enjoyable user experiences. It involves wireframing, prototyping, and user testing."
    },
    {
      icon: (
        <motion.img src={bg4} alt="Web Development" className="w-16 h-16"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ),
      title: "Web Development",
      description: "Web development is the process of building websites and applications. It includes front-end and back-end development to ensure functionality."
    },
    {
      icon: (
        <motion.img src={bg6} alt="Social Media Management" className="w-16 h-16"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      ),
      title: "Social Media Management",
      description: "Social media management involves creating and curating content, engaging with followers, and analyzing social media performance."
    },
    {
      icon: (
        <motion.img src={bg2} alt="Google Ads" className="w-16 h-16"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
      title: "Google Ads",
      description: "Logo design is the process of creating a unique visual symbol that represents a company or brand. It's key to brand recognition and identity."
    },
    {
      icon: (
        <motion.img src={bg3} alt="Mobile App Development" className="w-16 h-16"
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ),
      title: "Mobile App Development",
      description: "Mobile app development involves creating applications for mobile devices. This includes designing, coding, and testing apps for iOS or Android."
    },
    {
      icon: (
        <motion.img src={bg5} alt="Digital Marketing" className="w-16 h-16"
          animate={{ y: [0, 5, 0], rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ),
      title: "Digital Marketing",
      description: "Social media management involves creating and curating content, engaging with followers, and analyzing social media performance."
    }
  ];
  

  // Card variant for staggered entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-linear-to-r from-[#63aeae] to-[#817d9d] py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-teal-400 text-lg mb-2">Our Services</h2>
          <h1 className="text-white text-4xl font-bold">Our Palette Of Expertise</h1>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="w-full flex justify-center">
 
 <Link to="/contactpage" className='group relative overflow-hidden flex items-center lg:mt-12 lg:px-4 lg:py-3 md:mt-12 md:px-4 md:py-3 mt-7 px-4  py-3  text-black rounded-3xl bg-[linear-gradient(182deg,_#FFF_1.76%,_rgba(255,255,255,0.8)_98.24%)] transition-all duration-500 ease-in'> 
 
    {/* Background overlay that animates on hover */}
    <span className="absolute inset-0 bg-gradient-to-b from-[#2FBECE] group-hover:border-white group-hover:border-2 group-hover:rounded-full to-[#2974B7]  from-[56.52%] to-[117.39%] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease z-0"></span>

    {/* Button content on top of the animated background */}
    <span className="relative z-10 flex items-center text-black group-hover:text-white transition-colors duration-300">
      <span className="mr-3 leading-tight">View More</span>
      <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-[#2FBECE] to-[#2974B7] from-[56.52%] to-[117.39%] rounded-full transition-all duration-300 group-hover:bg-transparent">
        <ArrowRight size={20} className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-0 -rotate-45 font-extralight" />
      </span>
    </span>
</Link>
</div>
      </div>
    </div>
  );
};

export default ServiceSection;