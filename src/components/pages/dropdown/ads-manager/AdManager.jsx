import React from 'react'

const AdManager = () => {
  return (
    <>
    <div className="w-full h-full snap-none ">
          {/* Background Video */}
          <video
            className=" w-full h-[700px] lg:h-[700px] sm:h-[700px] md:h-[700px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1738315883/add_lrhziw.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          {/* Overlay */}
          <div className="absolute inset-0 w-full h-[700px] bg-black/50"></div>
    
          {/* Main Content */}
          <div className=" z-10 flex mx-auto items-center mt-24 justify-end flex-col w-full h-full mb-[92px] px-4 ">
    
            <div className="flex flex-col items-center max-w-7xl h-full  text-center lg:h-[400px] md:h-[400px] backdrop-blur-sm snap-y bg-white/70 p-6 sm:p-10 rounded-lg shadow-lg">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-11 text-gray-800">
                Ad-Manager
              </h2>
    
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl  lg:text-xl tracking-wider font-sans text-gray-700 text-justify leading-relaxed ">
              At VirtuGrow Digital, we provide premium campaign management services in Lucknow for your business growth in the digital landscape. Services include Facebook campaign management, Google PPC, SEO, content marketing, and email marketing. We create customized campaigns that align with your specific business objectives, thus reaching your target audience and getting measurable results. Whether you need brand awareness, drive traffic, or sales, we work to ensure our strategies help you maximize ROI and succeed.
              </p>
            </div>

            
          </div>
       
       
       
          {/* Mission and Vision Sections */}
          <div className='flex justify-center mt-10 flex-col'>
            <h1 className='text-center font-light text-7xl lg:mt-7 md:mt-7 sm:mt-7 mt-7 mb-5'>Breif</h1>
            
            </div>
  <div className="flex flex-col sm:flex-row justify-center items-center w-full h-auto  gap-8 mt-10 px-6  sm:px-10 mb-20">
    
    <div className="flex flex-col w-full sm:w-2/4 h-full  md:h-full  rounded-lg shadow-lg p-5">

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-6 text-black">Info</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-black text-justify  leading-relaxed">
      App development involves the process of creating software applications for devices such as smartphones, tablets, and computers. It typically includes designing, coding, testing, and deploying an app to meet specific user needs or solve problems. Developers use programming languages and frameworks like Swift, Java, Kotlin, Flutter, or React Native, depending on the target platform (iOS, Android, or cross-platform).  </p>
    </div>
  
    {/* Our Vision */}
    <div className="flex flex-col w-full sm:w-1/2  h-[350px]  rounded-lg shadow-lg p-5">

      <img src="https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304686/app2bg_qwhqy2.png" alt="" className='w-full h-full' />
    </div>

  </div>

</div>
        
    
    
    </>
  )
}

export default AdManager