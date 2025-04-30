import React from "react";

export default function SingleBlogPage() {
  const relatedArticles = [
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb1.jpg" },
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb2.jpg" },
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb3.jpg" },
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb4.jpg" },
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb5.jpg" },
    { title: "Article Name – Headline of an Article", author: "Author Name", image: "/images/thumb6.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#0a0f1c] to-black text-white px-4 md:px-24 py-10 font-sans">
      {/* Back */}
      <p className="text-sm text-gray-400 mb-2 cursor-pointer">&larr; Back</p>

      {/* Date */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Aug 29th, 2023</p>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        This Is The Article Name – <br />
        Headline Comes Here
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-10">
        <img src="/images/author.jpg" alt="Author" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-white text-sm">Name Lastname</p>
          <p className="text-xs text-gray-400">Position @ Company</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-4xl w-full rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.6)] mb-8">
        <img src="/images/article-main.jpg" alt="Main" className="w-full object-cover" />
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
        <div className="bg-[#1b1b1b] border-l-4 border-cyan-500 p-6 rounded-lg shadow-inner italic">
          <p>
            “Here we’re going to showcase something interesting the interviewee or article author has written or said.”
          </p>
          <p className="mt-3 not-italic text-sm text-right text-white">– Name Lastname</p>
        </div>

        <p>
          Blandit commodo sed non feugiat massa at porttitor. Risus eros mattis odio ultrices egestas.
        </p>
      </div>

      {/* Related Articles */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-10">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {relatedArticles.map((article, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="font-medium text-white text-sm leading-snug">{article.title}</p>
                <p className="text-xs text-gray-400 mt-1">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
