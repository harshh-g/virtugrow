import React from "react";
import './SingleBlogPage.css'
import comp1 from '../../../assets/blogsrc.jpg';
import { useNavigate } from "react-router";
import b1 from '../../../assets/icons/blog1.png';
import b2 from '../../../assets/icons/blog2.jpg';
import b3 from '../../../assets/icons/blog3.jpg';
import b4 from '../../../assets/icons/blog4.jpg';
import b5 from '../../../assets/icons/blog5.png';
import b6 from '../../../assets/icons/blog6.png';



export default function SingleBlogPage5() {

  const location = useNavigate();

  const relatedArticles = [
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b4 , height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b2 , height: true},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b6 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b3 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: b5 ,height: false},
    { title: "Article Name – Headline of an Article", author: "Author Name", image: comp1 ,height: true},
  ];

  return (
    <div className="bg-black/90 text-white px-4 mx-auto w-full py-40 font-sans">
      {/* Back */}

      <div className="w-[50%] mx-auto"> 
     <button onClick={() => location(-1)}>
     <p className="text-sm text-gray-400 mb-10 cursor-pointer">&larr; Back</p>
      </button> 
      
      

      {/* Date */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Aug 29th, 2023</p>

      {/* Title */}
      <h1 className="blog-heading3">
        This Is The Article Name – <br />
        Headline Comes Here
      </h1>

      {/* Author Info */}
      <div className="flex items-center mt-10 gap-5 mb-6">
        <img src={comp1} alt="Author" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-white text-sm">Name Lastname</p>
          <p className="text-xs text-gray-400">Position @ Company</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-4xl w-full rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.6)] mb-8">
        <img src={b4} alt="Main" className="w-full h-[420px] object-cover rounded-2xl" />
      </div>

      {/* Body */}
      <div className="text-gray-300 space-y-6 max-w-4xl text-[15px] leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur. Eros sed nisl erat nunc eget non integer et est. Orci tellus nisl
          point tristique risus sit leo cursus. Adipiscing vitae et adipiscing bibendum adipiscing. Pellentesque
          ipsum massa nunc commodo dignissim dolor.
        </p>
        <p>
          Habitanti dictumst cursus congue dictum tellus bibendum elit. Elementum adipiscing pretium vestibulum.
        </p>
        <p>
          Eros vel faucibus felis imperdiet quis id tellus. At pellentesque et dictum ornare faucibus orci.
        </p>

        {/* Quote */}
        <div className="bg-[#fff]/50 backdrop-blur-2xl  p-6 rounded-lg shadow-inner italic">
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
      <div className="w-[85%] mx-auto mt-20">
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


      <section className="container mx-auto h-[400px] px-4 py-8 ">
    <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
      <p className="port pb-7 ">HAVE A PROJECT IN MIND?</p>
      <h2 className=" port2">LET'S WORK</h2>
      <button className="btn px-4 md:px-6 py-2 mt-5  flex items-center mx-auto">
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className='arrow'>
  <g clipPath="url(#clip0_710_3134)">
    <path d="M3.50614 2.60489C3.50617 2.39276 3.59046 2.18933 3.74046 2.03933C3.89045 1.88933 4.09389 1.80505 4.30602 1.80502L9.39719 1.80502C9.60932 1.80505 9.81275 1.88933 9.96275 2.03933C10.1128 2.18933 10.197 2.39276 10.1971 2.60489V7.69606C10.1934 7.9058 10.1075 8.10571 9.95794 8.25274C9.80833 8.39977 9.60695 8.48216 9.39719 8.48216C9.18742 8.48216 8.98605 8.39977 8.83644 8.25274C8.68683 8.10571 8.60095 7.9058 8.59731 7.69606L8.54866 4.58479L3.17465 9.95881C3.02462 10.1088 2.82114 10.1931 2.60896 10.1931C2.39679 10.1931 2.19331 10.1088 2.04328 9.95881C1.89325 9.80878 1.80896 9.60529 1.80896 9.39312C1.80896 9.18095 1.89325 8.97746 2.04328 8.82743L7.41729 3.45342L4.30602 3.40477C4.09389 3.40474 3.89045 3.32046 3.74046 3.17046C3.59046 3.02046 3.50617 2.81703 3.50614 2.60489Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_710_3134">
      <rect width="12" height="12" fill="black"/>
    </clipPath>
  </defs>
</svg>
      </button>
    </div>
  </section>





    </div>



  );
}
