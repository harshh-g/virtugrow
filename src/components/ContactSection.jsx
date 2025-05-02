import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';


const ContactSection = () => {
  return (
    <section className=" bg-black py-20">
      <div className='container mx-auto h-[400px] px-4  '>
      <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
      <p className="text-sm port pb-7 ">HAVE A PROJECT IN MIND?</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl port2">LET'S WORK</h2>
      <Link to="/contactpage" className='group relative overflow-hidden flex items-center lg:mt-12 lg:px-4 lg:py-3 md:mt-12 md:px-4 md:py-3 mt-7 px-4  py-3  text-black rounded-3xl bg-[linear-gradient(182deg,_#FFF_1.76%,_rgba(255,255,255,0.8)_98.24%)] transition-all duration-500 ease-in'> 
 
 {/* Background overlay that animates on hover */}
 <span className="absolute inset-0 bg-gradient-to-b from-[#2FBECE] group-hover:border-white group-hover:border-2 group-hover:rounded-full to-[#2974B7]  from-[56.52%] to-[117.39%] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease z-0"></span>

 {/* Button content on top of the animated background */}
 <span className="relative z-10 flex items-center text-black group-hover:text-white transition-colors duration-300">
   <span className="mr-3 leading-tight">Contact Us</span>
   <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-[#2FBECE] to-[#2974B7] from-[56.52%] to-[117.39%] rounded-full transition-all duration-300 group-hover:bg-transparent">
     <ArrowRight size={20} className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-0 -rotate-45 font-extralight" />
   </span>
 </span>
</Link>
    </div>
      </div>
    
  </section>
  );
};

export default ContactSection;