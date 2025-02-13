import React from 'react'
import bannerImage from "../../../assets/technologyBanner.jpg";

const Technologies = () => {
  return (
    <section className="bg-gray-100  w-full h-[500px] md:h-[700px]">
      {/* Background Image */}
      <div
        className="absolute  inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      
    </section>
  )
}

export default Technologies