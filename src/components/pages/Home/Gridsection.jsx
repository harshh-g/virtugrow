import React, { useState } from 'react'
import Card from './Card';
import { FaArrowRight  } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';



const Gridsection = () => {

  const navigate = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const cards = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304685/a_ekt0wd.jpg", 
        title: 'UI/UX Design',
        description: 'UI/UX design focuses on creating intuitive and user-friendly experiences by incorporating wireframing, prototyping, and user testing to optimize interaction and functionality.'
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304692/app_xtbp0i.jpg",
        title: 'Web Development',
        description: 'Web development involves building dynamic websites and applications, including front-end and back-end development, to ensure user-friendly design and optimal performance.'
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304697/a3_h8xmdf.jpg",
        title: 'Social Media Management',
        description: 'Social media management involves creating engaging content, interacting with followers, and analyzing performance metrics to enhance brand visibility and digital presence.'
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304688/p_zumc01.jpg",
        title: 'Logo Design',
        description: "Logo design focuses on creating unique visual symbols that represent a brand, helping to establish brand identity, improve recognition, and enhance visibility across digital platforms."
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304705/t_bxpcxy.jpg",
        title: 'Social Media Management',
        description: 'Social media management includes creating content, managing community engagement, and tracking performance metrics to strengthen brand presence on digital platforms.'
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304708/u_jz2yzi.jpg",
        title: 'Mobile App Development',
        description: 'Mobile app development involves designing and building apps for mobile devices on iOS and Android platforms, focusing on functionality, user experience, and performance.'
    }
];



  return (
<section className="py-12 lg:px-36 md:px-12 bg-gray-100">
  <div className="w-full mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold text-black mb-8">Our Services</h1>

    <div className="grid grid-cols-1 h-full sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>

    <div className="w-full h-20 flex justify-center mt-14">
      <Link
        to="/services"
        className="px-5 py-4 flex border-2 border-blue-300 leading-10 text-2xl bg-white text-black font-light hover:duration-300 transition-all hover:bg-black hover:text-custom-white hover:scale-105"
        aria-label="View more services" onClick={()=> navigate(`/services`)}
      >
        View More
        <FaArrowRight className="mt-2 ml-3 font-light" />
      </Link>
    </div>
  </div>
</section>

  )
}

export default Gridsection