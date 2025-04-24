import React from "react";
import Marquee from "react-fast-marquee";

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
    <section className="brands-section" style={{ padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
      <h2 className="lg:text-3xl sm:text-xl md:text-2xl font-bold" style={{
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(to right, #2FBECE, #2974B7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    
  }}>Brands we have worked with</h2>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {brands.map((brand, index) => (
          <div key={index} style={{ margin: '0 40px', display: 'flex', alignItems: 'center' }}>
            <img
              src={brand.logo}
              alt={brand.name}
              style={{ height: '60px', objectFit: 'contain' }}
              title={brand.name}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandsSection;
