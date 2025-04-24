import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

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
    <div className="bg-gradient-to-br from-white via-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <h2 className="text-center text-sky-500 text-sm font-semibold uppercase mb-2 tracking-widest">Testimonials</h2>
      <h3 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 mb-16">What Our Clients Say</h3>

      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl p-8 md:p-10 flex flex-col gap-6 mx-auto max-w-xl"
            >
              <div className="absolute -top-5 -left-5 text-sky-400 text-7xl font-serif opacity-30 pointer-events-none">“</div>

              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-sky-400"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-gray-900 font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
