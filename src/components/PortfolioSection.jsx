import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 1,
    title: 'Fashion',
    description: 'Set trends with captivating digital solutions for fashion brands that inspire style enthusiasts and redefine shopping experiences.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/f.jpg",
  },
  {
    id: 2,
    title: 'E-commerce',
    description: 'Elevate your online store with innovative designs and seamless user experiences, ensuring enhanced sales and customer satisfaction.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/ecom.jpg",
  },
  {
    id: 3,
    title: 'Sales',
    description: 'Accelerate your revenue with dynamic sales platforms designed to maximize engagement, track performance, and deliver measurable results.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/ecommerce-sales.jpg",
  },
  {
    id: 4,
    title: 'Business',
    description: 'Showcase your professional excellence with tailored business solutions that drive growth and efficiency.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/businessman.jpg",
  },
  {
    id: 5,
    title: 'Financial',
    description: 'Optimize financial operations with secure and robust platforms that simplify banking, investments, and asset management.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/fin.jpg",
  },
  {
    id: 6,
    title: 'Education',
    description: 'Empower learners with intuitive educational platforms that offer innovative tools for teaching, learning, and collaboration.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/edu.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full px-4 py-20 bg-gradient-to-br from-[#0f1117] via-[#0c0e13] to-[#1b1e29] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-lg font-medium">Our Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">Work That Speaks</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group relative transition-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-black font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-zinc-700 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
