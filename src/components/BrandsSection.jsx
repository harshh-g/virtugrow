import React from "react";
import Marquee from "react-fast-marquee";

import ava from '../assets/clients/AV.PNG';
import AuSmallFin from '../assets/clients/A.PNG';
import healthism from '../assets/clients/H.PNG';
import ludhiyanalogo from '../assets/clients/LU.PNG';
import megalogo from '../assets/clients/MA.PNG';
import comfortHome from '../assets/clients/CM.PNG';
import cngCare from '../assets/clients/C.PNG';
import yesBank from '../assets/clients/Y.PNG';
import phoneMytra from '../assets/clients/PH.PNG';


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
    <section className="brands-section" style={{ padding: '0 0', backgroundColor: 'white' }}>
      <h2 className="lg:text-3xl sm:text-xl md:text-2xl font-bold" style={{
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #2FBECE, #2974B7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    
  }}>Brands we have worked with</h2>
      <Marquee speed={50} gradient={false} >
        {brands.map((brand, index) => (
          <div key={index} style={{ margin: '0 40px', display: 'flex', alignItems: 'center' }}>
            <img
              src={brand.logo}
              alt={brand.name}
              style={{ height: '150px', objectFit: 'cover', marginRight: '20px' }}
              title={brand.name}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandsSection;
