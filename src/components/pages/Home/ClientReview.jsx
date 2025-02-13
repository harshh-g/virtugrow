import React from "react";
import { Carousel } from "flowbite-react";

const reviews = [
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/healthism_wnfgrv.png",
    title: "Healthism",
    review: "Virtugrow's solutions were tailored perfectly to our needs, elevating our brand.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307931/client2_buv8ti.png",
    title: "Yes Bank",
    review: "The team was meticulous and professional throughout the project.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/ludhiyanalogo_fyoeth.png",
    title: "Au Small Finance Bank",
    review: "Virtugrow’s strategies gave us incredible results in a short time!",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307931/CDR_PLAZAIPHONE_bz4ch8.png",
    title: "Innovative Approach",
    review: "Their innovative strategies helped us break new ground.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/cng_hlruiz.png",
    title: "Reliable Partner",
    review: "Always delivering on time and exceeding expectations!",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/client3_nikiju.png",
    title: "Effortless Process",
    review: "The seamless process was a huge plus for our busy team.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/comfortlogo_afz24a.png",
    title: "Increased Engagement",
    review: "We saw increased client engagement thanks to their strategies.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/megalogo_n5obla.png",
    title: "Expert Guidance",
    review: "The team’s expertise truly stood out.",
  },
  {
    image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738307930/avalogo_mvmapn.png",
    title: "Exceeded Expectations",
    review: "We’re thrilled with the results! Couldn’t recommend them enough.",
  },
];

const myStyle = {
  backgroundImage: `url("https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304701/bgClient_vm2rqi.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const ClientReview = () => {
  return (
    <div className="h-[600px] sm:h-[600px] xl:h-[600px] 2xl:min-h-96 p-8" style={myStyle}>
      <Carousel slideInterval={5000} indicators={true}>
        {reviews.map((review, index) => (
          <div key={index} className="flex justify-center px-4">
            <div className="bg-white  shadow-lg rounded-lg p-6 sm:w-[350px] md:w-[400px] xl:w-[450px] h-[400px] max-w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={review.image}
                alt={`Client ${index + 1}`}
                className="w-32 h-32 rounded-full mx-auto object-contain"
                loading="lazy"
              />
              <h5 className="text-xl sm:text-2xl font-semibold mt-6 text-gray-800 text-center">
                {review.title}
              </h5>
              <p className="text-md sm:text-lg mt-4 text-gray-600 text-center">
                "{review.review}"
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientReview;
