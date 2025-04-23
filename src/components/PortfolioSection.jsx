import React from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Business',
    description: 'Showcase your professional excellence with tailored business solutions that drive growth and efficiency. Empower your enterprise with cutting-edge strategies.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/businessman.jpg",
  },
  {
    id: 2,
    title: 'E-commerce',
    description: 'Elevate your online store with innovative designs and seamless user experiences, ensuring enhanced sales and customer satisfaction. Create a shopping experience like no other.',
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
    title: 'Education',
    description: 'Empower learners with intuitive educational platforms that offer innovative tools for teaching, learning, and collaboration, fostering academic success.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/edu.jpg",
  },
  {
    id: 5,
    title: 'Fashion',
    description: 'Set trends with captivating digital solutions for fashion brands that inspire style enthusiasts and redefine shopping experiences.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/f.jpg",
  },
  {
    id: 6,
    title: 'Financial',
    description: 'Optimize financial operations with secure and robust platforms that simplify banking, investments, and asset management.',
    imgUrl: "https://virtugrow-site-storage.s3.eu-north-1.amazonaws.com/portfolio_images/fin.jpg",
  },
  
];

const Portfolio = () => {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-[#63aeae] to-[#817d9d] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-lg font-medium">Our Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">Work That Speaks</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src={project.imgUrl} alt="" className="w-full h-60 object-cover rounded-xl" />
              <div className="mt-3 text-left px-2">
                <h3 className="text-base sm:text-lg font-semibold text-black">{project.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-800">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
