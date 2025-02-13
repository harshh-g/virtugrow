import React from 'react'


const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Business',
      description: 'Showcase your professional excellence with tailored business solutions that drive growth and efficiency. Empower your enterprise with cutting-edge strategies.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310250/businessman_ukvoqa.jpg",
    },
    {
      id: 2,
      title: 'E-commerce',
      description: 'Elevate your online store with innovative designs and seamless user experiences, ensuring enhanced sales and customer satisfaction. Create a shopping experience like no other.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310252/ecom_t2k5da.jpg",
    },
    {
      id: 3,
      title: 'Sales',
      description: 'Accelerate your revenue with dynamic sales platforms designed to maximize engagement, track performance, and deliver measurable results.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310252/ecommerce-sales_b6udyi.jpg",
    },
    {
      id: 4,
      title: 'Education',
      description: 'Empower learners with intuitive educational platforms that offer innovative tools for teaching, learning, and collaboration, fostering academic success.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310253/edu_viwpuz.jpg",
    },
    {
      id: 5,
      title: 'Fashion',
      description: 'Set trends with captivating digital solutions for fashion brands that inspire style enthusiasts and redefine shopping experiences.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310255/f_nj26di.jpg",
    },
    {
      id: 6,
      title: 'Financial',
      description: 'Optimize financial operations with secure and robust platforms that simplify banking, investments, and asset management.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310253/fin_rrxyfk.jpg",
    },
    {
      id: 7,
      title: 'Food',
      description: 'Revolutionize the food industry with interactive solutions for restaurants, delivery services, and food brands, enhancing customer delight.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310252/food_wmahjw.jpg",
    },
    {
      id: 8,
      title: 'Healthcare',
      description: 'Provide critical healthcare solutions through user-friendly, compliant, and innovative platforms that improve care delivery and patient satisfaction.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310251/h_ucn8wa.jpg",
    },
    {
      id: 9,
      title: 'Holiday',
      description: 'Make vacation planning effortless with creative and resourceful platforms that bring dream destinations closer to reality.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310251/holiday_oekfzo.jpg",
    },
    {
      id: 10,
      title: 'Random',
      description: 'Innovative designs and solutions cater to diverse projects, offering creativity and functionality tailored to specific needs.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310252/random_my35qj.jpg",
    },
    {
      id: 11,
      title: 'Tour & Travels',
      description: 'Inspire wanderlust with stunning travel platforms that simplify bookings, promote destinations, and enrich journeys.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310259/t_t_f8jvse.jpg",
    },
    {
      id: 12,
      title: 'Traditional Business',
      description: 'Modernize traditional businesses with customized solutions that retain legacy while embracing digital transformation.',
      imgUrl: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738310261/traditonal_B_uboxkm.jpg",
    },
  ];
  

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
              <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739345353/portfolioBanner_z51z6s.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-[500px] bg-black/50"></div>
      
            {/* Main Content */}
            <div className=" -z-10 flex  justify-center flex-col w-full h-[388px]  items-center">
      
            <h2 className="text-5xl md:text-4xl lg:text-9xl font-semibold mb-11 tracking-wider drop-shadow-2xl text-gray-100   shadow-black">Portfolio</h2>
              </div>
              </div>

              
              <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-7xl font-light text-center text-gray-900 mb-24">Our Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-14">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden  transform transition-all duration-300 ease-in-out hover:scale-105 "
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="  flex items-center justify-center group-hover:bg-gray-100  text-black  transition-all duration-300 ease-in-out">
                <div >
                  <h3 className="text-2xl text-left font-semibold mt-8 mb-5">{item.title}</h3>
                  <div className='w-full h-full  '>
                  <p className=" text-base text-left font-normal">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
             
            
  
    </>
  )
}

export default Portfolio;
