import React from "react";
import './SingleBlogPage.css'
import comp1 from '../../../assets/blogsrc.jpg';
import { useNavigate ,Link } from "react-router";
import b1 from '../../../assets/icons/blog1.png';
import b2 from '../../../assets/icons/blog2.jpg';
import b3 from '../../../assets/icons/blog3.jpg';
import b4 from '../../../assets/icons/blog4.jpg';
import b5 from '../../../assets/icons/blog5.png';
import b6 from '../../../assets/icons/blog6.png';
import { ArrowRight} from 'lucide-react';


export default function SingleBlogPage() {

  const location = useNavigate();

  const relatedArticles = [
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b1 , height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b2 , height: true},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b3 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b4 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b5 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b6 ,height: true},
  ];

  return (
    <div className="bg-black/90 text-white  lg:mx-auto md:mx-auto w-full     font-sans">
      {/* Back */}

     <div className="w-full px-4 md:px-10 lg:px-0 lg:w-[50%] lg:mx-auto py-20 md:py-28 lg:py-44">
      {/* Back Button */}
      <button onClick={() => window.history.back()} className="mb-6 md:mb-10">
        <p className="text-sm text-gray-400 cursor-pointer">&larr; Back</p>
      </button>

      {/* Date */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Aug 29th, 2023</p>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        This Is The Article Name – <br />
        Headline Comes Here
      </h1>

      {/* Author Info */}
      <div className="flex items-center mt-6 md:mt-10 gap-4 md:gap-5 mb-6">
        <img src={comp1} alt="Author" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-white text-sm md:text-base">Name Lastname</p>
          <p className="text-xs text-gray-400">Position @ Company</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.6)] mb-8">
        <img src={comp1} alt="Main" className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover rounded-2xl" />
      </div>

      {/* Body */}
      <div className="text-gray-300 space-y-6 text-[15px] leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur. Eros sed nisl erat nunc eget non integer et est. Orci tellus nisl
          point tristique risus sit leo cursus. Adipiscing vitae et adipiscing bibendum adipiscing.
        </p>
        <p>
          Habitanti dictumst cursus congue dictum tellus bibendum elit. Elementum adipiscing pretium vestibulum.
        </p>
        <p>
          Eros vel faucibus felis imperdiet quis id tellus. At pellentesque et dictum ornare faucibus orci.
        </p>

        {/* Quote */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-lg shadow-inner italic border-l-4 border-cyan-500">
          <p>
            “Here we’re going to showcase something interesting the interviewee or article author has written or said.”
          </p>
          <p className="mt-3 not-italic text-sm text-right text-white">– Name Lastname</p>
        </div>

        <p>
          Blandit commodo sed non feugiat massa at porttitor. Risus eros mattis odio ultrices egestas.
        </p>
      </div>
    </div>

      {/* Related Articles */}
      <div className="lg:w-[85%] w-full lg:mx-auto md:mx-auto mx-0 ">
        <h2 className="text-3xl font-bold mb-20 text-center blog-title ">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full">
          {relatedArticles.map((article, index) => (
            <div
              key={index}
              className=" rounded-xl overflow-visible  hover:scale-105 transition-transform duration-300"
            >
              <img src={article.image} alt={article.title} className={`portfolio-img w-full object-cover rounded-lg ${article.height ? 'h-[450px]' : 'h-[270px]'}`}  />
              <div className="p-4">
                <p className="font-medium text-white text-sm leading-snug">{article.title}</p>
                <p className="text-xs text-gray-400 mt-1">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      < section className=" bg-black py-20 ">
      <div className='container mx-auto h-[400px] px-4  '>
      <div className="bg-gradient-to-b from-[#0F0F0F]/80 to-[#0F0F0F]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
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





    </div>



  );
}
