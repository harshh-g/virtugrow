import React from "react";
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link , useLocation } from "react-router-dom";

// Card content array with images added
const services = [
  {
    id: 1,
    title: "UI / UX",
    description: "UI focuses on the visual design and interactivity of a product, while UX covers the overall experience and satisfaction a user has with it.",
    icon: <FaLaptopCode />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304692/android_hpx9jq.jpg",
    link : '/softwaredevelopment'
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Mobile App is for designing and build app for ios and android platforms focusing on user experience and performance",
    icon: <FaMobileAlt />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304688/appD_hhjise.jpg",
    link : '/appdevelopment'
  },
  {
    id: 3,
    title: "Web development",
    description: "web development involves designing  building, testing, and maintaining websites/apps,including front-end and back-end development.",
    icon: <FaChartLine />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304702/socalM_iun1sm.jpg",
    link : '/digitalmarketing'
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "An e-commerce solution enables online selling with features like payment, inventory, and analytics.",
    icon: <FaPalette />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304686/mobile_huw1xa.jpg",
    link : '/graphicdesigning'
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "creating engaging content intracting with followers enhance brand visibility and digital presence which gives  genuine leads",
    icon: <FaSearch />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304690/seo_qopzkr.jpg",
    link : '/videoediting'

  },
  {
    id: 6,
    title: "Logo Design",
    description: "Bold, minimal, and modern logos with dynamic colors and symbolism, tailored for start-ups or established brands",
    icon: <FaShoppingCart />,
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304711/cyber_yweilq.jpg",
    link : '/admanagement'
  },
];

const CardSection = () => {

  

  return (
    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto  sm:px-8 lg:px-0 text-center">
    {/* Section Header */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
      Our Services
    </h2>
    <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-10">
      Innovative solutions crafted to bring your ideas to life and achieve your business goals.
    </p>

    {/* Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="group overflow-hidden relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg text-left flex flex-col"
        >
          {/* Image Section */}
          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-5xl">
              {service.icon}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between p-4 lg:p-6 flex-grow">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-custom-blue transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base mb-7 text-gray-600">
              {service.description}
            </p>
          </div>

          {/* Arrow Button */}
          <div className="absolute bottom-1 right-4">
            <button className="w-10 h-10 rounded-full  bg-custom-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Link
                to={service.link}
                
              >
                <FaArrowRight className="font-light " />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* View All Services Button */}
  <div className="w-full flex justify-center mt-14">
    <button className="px-5 py-4 flex border-blue-300 border-2 leading-10 text-lg sm:text-xl lg:text-2xl bg-white text-black font-light hover:duration-300 transition-all hover:bg-black hover:text-white hover:scale-105">
      <Link to="/services" >
        View All Services
      </Link>
      <FaArrowRight className="ml-3 mt-1 leading-2" />
    </button>
  </div>
</section>

  );
};

export default CardSection;
