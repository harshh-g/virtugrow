import React from "react";

const MarqueeSection = () => {
  const messages = [
    "Welcome to Virtugrow!",
    "Explore our innovative solutions.",
    "We bring your ideas to life.",
    "Contact us today for a consultation!",
    "Virtugrow - Your Growth Partner.",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-4">
      {/* Marquee Wrapper */}
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {messages.map((message, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-gray-700 px-8"
          >
            {message}
          </span>
        ))}
        {/* Duplicate for seamless transition */}
        {messages.map((message, index) => (
          <span
            key={`dup-${index}`}
            className="text-lg font-semibold text-gray-700 px-8"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
