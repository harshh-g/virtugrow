import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    quote: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Radha Rani",
    role: "CEO, Google",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Their creativity and professionalism blew us away. We’ve never worked with a more responsive team.",
    name: "Amit Verma",
    role: "CTO, Amazon",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "An absolute pleasure to work with. They exceeded our expectations in every way.",
    name: "Priya Sharma",
    role: "Marketing Head, Facebook",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "We’ve seen tremendous growth in our brand presence after collaborating with them!",
    name: "Sahil Khan",
    role: "Founder, Startupify",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    quote: "They delivered top-notch service with incredible attention to detail. Highly recommend.",
    name: "Neha Joshi",
    role: "COO, SnapTech",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-sky-500 text-sm font-semibold mb-2">Testimonials</h2>
      <h3 className="text-3xl text-center font-bold text-gray-900 mb-10">Hear from Our Clients</h3>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-4 h-full transition-all duration-700 ease-in-out">
              <svg
                className="w-8 h-8 text-sky-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.002 5.002 0 002 11v2a3 3 0 003 3h3a3 3 0 003-3v-2a5.002 5.002 0 00-3.83-4.83zM17.17 6A5.002 5.002 0 0012 11v2a3 3 0 003 3h3a3 3 0 003-3v-2a5.002 5.002 0 00-3.83-4.83z" />
              </svg>
              <p className="text-gray-800 text-base font-medium leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
