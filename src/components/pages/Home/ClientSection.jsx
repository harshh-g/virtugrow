import React from "react";

const clients = [
  { id: 1, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307931/client2_buv8ti.png", alt: "Client 1" },
  { id: 2, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307931/CDR_PLAZAIPHONE_bz4ch8.png", alt: "Client 2" },
  { id: 3, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/ludhiyanalogo_fyoeth.png", alt: "Client 3" },
  { id: 4, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/cng_hlruiz.png", alt: "Client 4" },
  { id: 5, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/client3_nikiju.png", alt: "Client 5" },
  { id: 6, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/comfortlogo_afz24a.png", alt: "Client 6" },
  { id: 7, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/megalogo_n5obla.png", alt: "Client 7" },
  { id: 8, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/avalogo_mvmapn.png", alt: "Client 8" },
  { id: 9, logo: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/healthism_wnfgrv.png", alt: "Client 9" }
];

const ClientSection = () => {
  return (
    <section className="py-16 px-5 bg-custom-blue2">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-custom-white mb-8">Our Esteemed Clients</h2>
        <p className="text-3xl text-gray-600 mb-12">
          Trusted by global brands to deliver innovative and efficient solutions.
        </p>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center px-4 py-5 bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/80"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-24 w-auto object-contain"
                loading="lazy"  // Lazy load the images for better performance
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
