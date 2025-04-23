import React from "react";
import ava from '../assets/clients/avalogo.png';
import AuSmallFin from '../assets/clients/AuSmallFin.png';
import healthism from '../assets/clients/healthism.png';
import ludhiyanalogo from '../assets/clients/ludhiyanaHome.png';
import megalogo from '../assets/clients/megaHandloom.png';
import comfortHome from '../assets/clients/comfortlogo.png';
import cngCare from '../assets/clients/cng.png';
import yesBank from '../assets/clients/Yesbank.png';
import phoneMytra from '../assets/clients/phoneMytra.png';


const brands = [
  { name: 'AVA', logo: ava },
  { name: 'AU Small Finance Bank', logo: AuSmallFin },
  { name: 'Healthism', logo: healthism },
  { name: 'Ludhiyana Home', logo: ludhiyanalogo },
  { name: 'Mega Handloom', logo: megalogo },
  { name: 'Comfort Home', logo: comfortHome },
  { name: 'CNG Care', logo: cngCare },
  { name: 'Yes Bank', logo: yesBank },
  { name: 'Phone Mytra', logo: phoneMytra },
];

const BrandsSection = () => {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="m2 text-3xl font-bold mb-20">
        Brands we have worked with
      </h2>
      <div className="flex justify-center items-center gap-12 flex-wrap px-4">
      
        
        {brands.map((brand, index) => (
          
          <div key={index} className="transition-all duration-300">
            
            <img
            
              src={brand.logo}
              alt={brand.name}
              className="h-24 filter  transition duration-300 ease-in-out"
            />
          </div>
        ))}
        
        
      </div>
    </section>
  );
};

export default BrandsSection;
