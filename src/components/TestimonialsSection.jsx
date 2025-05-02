import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';;

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

const TestimonialCard = ({ quote, name, title, avatar }) => (
  <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-10 shadow-xl flex flex-col w-[95%] justify-evenly  h-full">
    <div className="text-3xl text-[#3763B6]">“</div>
    <p className="text-gray-800 text-lg mb-6">{quote}</p>
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);
export default function TestimonialsSection() {
  return (
    <div className="bg-[#F0F0F0] h-screen py-16">
      <h2 className="text-base md:base lg:base font-bold mb-2 bg-gradient-to-b from-[#2FBECE] to-[#2974B7] bg-clip-text text-transparent text-center">Testimonials</h2>
      <p className="text-lg md:text-2xl text-black leading-relaxed tracking-[2px] font-bold text-center mb-11">Hear from Our Clients</p>


<Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="px-4"
      >
        {Array(6).fill(testimonials[0]).map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
  
  <div className='mt-10'></div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="px-9"
      >
        {Array(6).fill(testimonials[0]).map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>


      
    </div>
  );
}
