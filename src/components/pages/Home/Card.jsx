import React, { useState } from "react";

const Card = ({ image, title, description }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="group overflow-hidden rounded-lg shadow-lg relative bg-white hover:shadow-xl transition-shadow duration-300 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-40 sm:h-56 lg:h-72 object-cover mix-blend-multiply transition-transform duration-300 ${
            isHover ? "scale-110" : ""
          }`}
          loading="lazy" />
      </div>

      {/* Text Content Section */}
      <div
        className={`p-4 ${
          isHover
            ? "bg-gray-700 text-white"
            : "bg-white text-gray-700"
        } transition-all duration-300`}
      >
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center mt-4">
          {title}
        </h2>
        <p className="text-sm sm:text-base mt-4 sm:mt-6 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
