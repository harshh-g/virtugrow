import React from 'react';
import brands from '../assets/Brands.png'

const BrandsSection = () => {
  const brands2 = [
    { logo: brands },
    
  ];

  return (
    <section className="py-12 border-y border-gray-800">
      <div className="container  px-4">
        <div className="flex justify-center  items-center  md:gap-0">
          {brands2.map((brand, index) => (
            <div key={index} className="group">
              <img 
                src={brand.logo} 
                className=" grayscale  opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;