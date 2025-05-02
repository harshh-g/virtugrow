import React from 'react';
import { motion } from 'framer-motion';
import comp1 from '../assets/new portfolio/comp1.png';
import comp2 from '../assets/new portfolio/comp2.png';
import comp3 from '../assets/new portfolio/comp3.png';
import comp4 from '../assets/new portfolio/comp4.png';
import comp5 from '../assets/new portfolio/comp5.png';
import comp6 from '../assets/new portfolio/comp6.png';

const portfolioItems = [
  {
    id: 1,
    title: 'Fashion',
    description: 'Set trends with captivating digital solutions for fashion brands that inspire style enthusiasts and redefine shopping experiences.',
    imgUrl: comp1,
    height: false,
  },
  {
    id: 2,
    title: 'E-commerce',
    description: 'Elevate your online store with innovative designs and seamless user experiences, ensuring enhanced sales and customer satisfaction.',
    imgUrl: comp2,
    height: true
  },
  {
    id: 3,
    title: 'Sales',
    description: 'Accelerate your revenue with dynamic sales platforms designed to maximize engagement, track performance, and deliver measurable results.',
    imgUrl: comp3,
    height: false
  },
  {
    id: 4,
    title: 'Business',
    description: 'Showcase your professional excellence with tailored business solutions that drive growth and efficiency.',
    imgUrl: comp4,
    height: false
  },
  {
    id: 5,
    title: 'Financial',
    description: 'Optimize financial operations with secure and robust platforms that simplify banking, investments, and asset management.',
    imgUrl: comp5,
    height: true
  },
  {
    id: 6,
    title: 'Education',
    description: 'Empower learners with intuitive educational platforms that offer innovative tools for teaching, learning, and collaboration.',
    imgUrl: comp6,
    height: false
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Centered heading section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base md:base lg:base font-bold mb-2 bg-gradient-to-b from-[#2FBECE] to-[#2974B7] bg-clip-text text-transparent ">Our Portfolio</h2>
          <p className="text-lg md:text-2xl text-white leading-relaxed tracking-[2px] font-bold ">
            Work That Speaks
          </p>
        </motion.div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.imgUrl}
                  alt={project.title}
                  className={`w-full object-cover rounded-2xl ${
                    project.height ? 'h-[500px]' : 'h-[300px]'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Text overlay */}
                <div className=" bg-gradient-to-t from-black/80 to-transparent p-6 pl-0">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-base opacity-90">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;