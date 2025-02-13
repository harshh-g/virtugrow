import React from "react";

import { FaArrowRight  } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Card content array with images added
const services = [
  {
    id: 1,
    title: "Our Purpose",
    description: "To deliver experiences that change the way your customers feel about your business",
    icon: <FaArrowRight className="font-light ml-2 mt-1" />,
    image:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304691/s1_euii7a.jpg" , // Replace with actual image URL
  },
  {
    id: 2,
    title: "OurTeam",
    description: "Holistic leadership, holistic growth! A team of  visionaries connected by shared commitments for a unified vision",
    icon: <FaArrowRight className="font-light ml-2 mt-1" />,
    image:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304690/s2_me8wrl.jpg" , // Replace with actual image URL
  },
  {
    id: 3,
    title: "Award & Recognitions",
    description: "Our dedication is fueled by your compliments, inspiring us to push the boundaires and deliver something extraordinary",
    icon: <FaArrowRight className="font-light ml-2 mt-1" />,
    image:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304690/s3_pt73uv.jpg" , // Replace with actual image URL
  },
  {
    id: 4,
    title: "Our Brands",
    description: "We are one, but we are many! Transform your digital footprint with scalable and driven all-in-one solutions",
    icon: <FaArrowRight className="font-light ml-2 mt-1" />,
    image:"https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304705/s4_jqtixn.jpg", // Replace with actual image URL
  },
  
];

const About = () => {
  

  const navigate = useLocation();

  
  const myStyle = {
      backgroundImage:`url("https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304701/bgCLient2_mcskyp.jpg")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }

  const myStyle2 = {
    backgroundImage:`url("https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304702/storyBg_v1ck8o.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}
  return (
    <>
    <div className="w-full h-full snap-none ">
      {/* Background Video */}
       <video
                   className=" w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739345572/videoAbout_pugdaw.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
           
                 {/* Overlay */}
                 <div className="absolute inset-0 w-full h-[538px] bg-black/50"></div>
           
                 {/* Main Content */}
                 <div className=" -z-10 flex  justify-center flex-col w-full h-[388px]  items-center">
           
                 <h2 className="text-5xl md:text-4xl lg:text-9xl font-semibold mb-11 tracking-wider drop-shadow-2xl text-gray-100   shadow-black">About us</h2>
                   </div>
                   </div>

      
    


                   <div className="w-full h-full flex flex-col items-center mt-9 justify-center " style={myStyle}>
  {/* Who We Are Section */}
  <div className="flex flex-col items-center max-w-6xl text-center mt-8 p-6 sm:p-8 backdrop-blur-sm bg-black/70 rounded-lg shadow-lg">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">Who We Are?</h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-xl font-sans text-white text-justify leading-relaxed">
      Welcome to VirtuGrow Digital, the best digital marketing agency in Lucknow. As the top digital marketing company in Lucknow, we help businesses grow by creating innovative, results-driven strategies that boost online visibility, engage customers, and increase sales. Our expert team specializes in SEO, social media marketing, PPC advertising, content creation, and website optimization. Whether you're a startup or an established brand, we provide personalized digital marketing solutions tailored to your goals. Let’s work together to take your business to new heights!
      <br />
      At VirtuGrow Digital, we believe in making digital marketing simple and effective. Our team stays updated with the latest trends and technology to provide the best marketing solutions. We focus on helping brands get noticed, connect with their audience, and achieve their goals.
    </p>
  </div>

  {/* Mission and Vision Sections */}
  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 px-6 mb-10 sm:px-8">
    {/* Our Mission */}
    <div className="flex flex-col w-full sm:w-[600px] lg:h-[380px] border-2 border-blue-300 backdrop-blur-sm bg-black/50 rounded-lg shadow-lg p-5">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-white text-center">Our Mission</h2>
      <p className="text-base sm:text-lg md:text-xl text-white text-justify leading-relaxed">
      Our roadmap starts with our core goal of perseverance. This reflects our purpose as a company and acts as the guiding principle for evaluating our actions and decisions. We aim to make a meaningful contribution to the economy and society by providing world-class support to our clients.We are committed to creating exceptional value for your business by using our unique combination of expertise, dedication, and enthusiasm to attract more profitable leads and drive sales for organizations that serve their local communities.

      </p>
    </div>

    {/* Our Vision */}
    <div className="flex flex-col w-full sm:w-[600px] lg:h-[380px] border-2 border-blue-300 backdrop-blur-sm bg-black/50 rounded-lg shadow-lg p-5">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-white text-center">Our Vision</h2>
      <p className="text-base sm:text-lg md:text-xl text-white text-justify leading-relaxed">
      The competition worldwide is intensifying as the environment around us constantly evolves. To thrive as a business in the next decade and beyond, we must anticipate future trends and forces that will shape our industry and act swiftly to prepare for what's ahead. Our vision is all about preparing today for tomorrow, setting a long-term goal for our business, and providing a roadmap for success alongside our packaging partners.

      </p>
    </div>
  </div>
</div>

<div className="w-full h-full flex flex-col items-center justify-center bg-cyan-700" style={myStyle2}>
  {/* Our Story Section */}
  <div className="flex flex-col w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-6 text-center">
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-light mt-6 mb-4 text-white">Our Story</h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-xl mx-auto text-white text-justify leading-relaxed">
      From humble origins to global trailblazers - the transformational journey of an Indian startup from a small town in Lucknow, that moulded itself into a global technology game changer and now stands out from its peers. Our story is worth a good read!
    </p>
  </div>

  {/* Services Grid */}
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
      {services.map((service) => (
        <div
          key={service.id}
          className="group overflow-hidden relative bg-black/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg text-left"
        >
          {/* Image Section */}
          <div className="relative h-36 sm:h-48 lg:h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-custom-blue transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white text-sm sm:text-base">{service.description}</p>
            <div className="flex items-center mt-3 justify-end group-hover:text-blue-800 transition-all duration-300 text-white text-xl">
              Learn more {service.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* View All Services Button */}
  <button className="px-6 py-3 mt-8 mb-12 border-blue-300 border-2 flex leading-10 text-lg sm:text-2xl bg-white text-black font-light hover:duration-300 transition-all hover:bg-black hover:text-custom-white hover:scale-105" >
    <Link to='/services' onClick={() => navigate('/services')}>View All Services</Link> <FaArrowRight className="mt-2 ml-3 font-light" />
  </button>
</div>

   


</>
  );
};

export default About;
