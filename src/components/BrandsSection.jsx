import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: 'Spotify', logo: '/api/placeholder/150/50' },
    { name: 'Google', logo: '/api/placeholder/150/50' },
    { name: 'Stripe', logo: '/api/placeholder/150/50' },
    { name: 'Mailchimp', logo: '/api/placeholder/150/50' }
  ];

  return (
    <section className="py-12 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-cyan-500 text-lg font-medium mb-10">Brands we have worked with</h3>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0">
          {brands.map((brand, index) => (
            <div key={index} className="group">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-10 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;