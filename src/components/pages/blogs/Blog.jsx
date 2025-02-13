import React from 'react';
import { Carousel } from 'flowbite-react';





const Blog = () => {

  const images = [
    { id: 1, src: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304686/m1_vhsgst.jpg", title: 'Video 1' },
    { id: 2, src: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304687/m2_xhb9ld.jpg", title: 'Video 2' },
    { id: 3, src: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304688/m3_zhbivc.jpg", title: 'Video 3' },
    
  ];

  const posts = [
    {
      id: 1,
      title: "Understanding React Context API",
      description: "A beginner's guide to managing state with Context API in React.",
      author: "John Doe",
      date: "January 20, 2025",
      image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304687/react_oaektp.png",
    },
    {
      id: 2,
      title: "Exploring Tailwind CSS Best Practices",
      description: "Learn how to make the most out of Tailwind CSS in your projects.",
      author: "Jane Smith",
      date: "January 15, 2025",
      image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304706/tailwind_zvmuay.png",
    },
    {
      id: 3,
      title: "Optimizing Performance in React Applications",
      description: "Tips and tricks to boost your React app's performance.",
      author: "Alex Johnson",
      date: "January 10, 2025",
      image: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304689/seo_o9kxzb.jpg",
    },
  ];

  return (
    <>
    <div className="w-full h-full snap-none ">
            {/* Background Video */}
            <video
              className=" w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739345341/blogs_hiitja.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-[500px] bg-black/50"></div>
      
            {/* Main Content */}
            <div className=" -z-10 flex  justify-center flex-col w-full h-[388px]  items-center">
      
            <h2 className="text-5xl md:text-4xl lg:text-9xl font-semibold mb-11 tracking-wider drop-shadow-2xl text-gray-100   shadow-black">Blogs</h2>
              </div>
              </div>
    
    
    
    <div className="bg-gray-50 min-h-full p-6">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-semibold text-center mb-16 text-gray-800">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 "
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <div className="w-full max-w-3xl">
        <Carousel pauseOnHover={false} interval={5000}>
          {images.map((image) => (
            <div key={image.id} className="bg-slate-400 relative w-full h-full flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    
    </>
  );
};

export default Blog;
