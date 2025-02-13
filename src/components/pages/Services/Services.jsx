import React , { useState , useEffect  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [panelOpenRight, setPanelOpenRight] = useState(false);

  const [panelOpenLeft, setPanelOpenLeft] = useState(false);

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (ms)
        once: true,     // Whether animation should happen only once
      });
    }, []);

    
    const option1 = [
      { title: 'UI/UX Design', description: 'UI/UX Design involves creating user-friendly, aesthetically pleasing interfaces for digital products that improve the experience of users.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185263/uiAndUx_hmzewx.jpg' },
      { title: 'Website Design', description: 'Website design focuses on designing the layout, content structure, and overall visual experience of a website.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185262/web_design_klhheh.jpg'},
      { title: 'Mobile Experience', description: 'Mobile Experience refers to optimizing mobile applications for ease of use and functionality on mobile devices.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/mobile_app_development_cepknf.webp' },
      { title: 'Commerce Experience', description: 'Commerce Experience focuses on creating and improving the design of eCommerce websites and their shopping experiences.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185258/commerce_exp_nfljpl.jpg' },
      { title: 'Applications & Dashboards', description: 'Applications & Dashboards create user interfaces for business applications and provide essential business data via visual representation.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/app_and_dashboard_wb18pm.webp' },
      { title: 'Cross-Platform Experience', description: 'Cross-Platform Experience ensures consistent experience and design across different devices and platforms.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/cross_platform_exp_lk3xuw.png' },
      { title: 'Design Support and Maintenance', description: 'This involves offering continuous design support and making necessary design updates to adapt to changes in user needs.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/design_support_and_maintaine_fdk3f3.jpg' },
    ];
    
    const option2 = [
      { title: 'Data & Analytics', description: 'Data and analytics involve collecting, processing, and analyzing data to generate insights that drive business decision-making.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185257/analytics_xwx6k1.jpg' },
      { title: 'Web Development', description: 'Web Development refers to the creation and maintenance of websites and applications.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185262/web_development_r1icye.jpg' },
      { title: 'Mobile App Development', description: 'Mobile app development involves creating software applications for mobile devices like smartphones and tablets.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/mobile_expe_dt5evu.jpg' },
      { title: 'E-commerce', description: 'E-commerce involves creating online platforms for buying and selling goods and services.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/e-commerce_mk0582.jpg' },
      { title: 'Quality Assurance & Testing', description: 'Quality assurance and testing ensure software and applications meet user needs and industry standards.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/quality_assurance_and_testing_bwmca6.jpg' },
      { title: 'Cloud Services', description: 'Cloud services provide computing resources, such as storage and processing, via the internet.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/cloud_services_bgini6.webp'},
    ];
    
    const option3 = [
      { title: 'Social Media Management', description: 'Social Media Management involves managing social media profiles and campaigns to engage with users effectively.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/social_media_management_asm6gm.jpg' },
      { title: 'Performance Marketing', description: 'Performance Marketing focuses on using measurable, results-driven approaches to online advertising.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185262/performance_marketing_r7wuuh.webp' },
      { title: 'Search Engine Optimization', description: 'SEO ensures that content is optimized for search engines, making it easier for potential customers to find.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739189737/seo_sholhu.jpg' },
      { title: 'Content Marketing', description: 'Content marketing involves creating valuable, relevant content to attract and engage users.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/brand_consultanting_ndbizt.webp' },
      { title: 'Marketing Automation', description: 'Marketing Automation utilizes software to automate marketing tasks like email campaigns and social media posts.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/2d_3d_visua_g19t0i.webp' },
      { title: 'Analytics', description: 'Analytics refers to tracking and analyzing user behavior and interactions with a business’s digital content.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/data-analysis_ffpbzm.jpg' },
    ];
    
    const option4 = [
      { title: 'Brand Consulting', description: 'Brand consulting provides strategic advice to improve brand recognition, reputation, and performance.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/brand_collaterals_mbqhtq.jpg' },
      { title: 'Logo Design', description: 'Logo Design includes the creation of logos that visually represent a company’s identity and values.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/log_design_qihkwc.jpg' },
      { title: 'Brand Collateral', description: 'Brand collateral includes marketing materials, such as brochures, posters, and business cards, that reinforce the company’s identity.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185262/ui_ux_rpvdza.jpg' },
      { title: 'Graphic Design', description: 'Graphic Design focuses on creating visually compelling images for branding, advertising, and media.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185261/graphic_design_wucjid.jpg' },
      { title: '2D / 3D Visualization', description: '2D/3D Visualization creates graphical representations of products or services to showcase their designs or features.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185259/2d_3d_visua_g19t0i.webp' },
      { title: 'Brand Identity', description: 'Brand Identity encompasses all elements of a company’s brand, including logos, typography, and colors.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/brand_identity_w0h77t.jpg'},
      { title: 'Industrial Product Design', description: 'Industrial Product Design is focused on creating products that are functional, aesthetically appealing, and user-friendly.', image: 'https://res.cloudinary.com/dzbuyze8t/image/upload/v1739185260/industrial_product_design_rxpkwg.jpg' },
    ];
    
  const openPanelLeft = (topic) => {
    console.log(topic)
    if (panelOpenRight) {
      setPanelOpenRight(false); // Close the right panel if it’s open
    }
    setSelectedTopic(topic);
    setPanelOpenLeft(true);
  };

  const closePanelLeft = () => {
    setPanelOpenLeft(false);
    setSelectedTopic(null);
  };

  const openPanelRight = (topic) => {
    console.log(topic)
    if (panelOpenLeft) {
      setPanelOpenLeft(false); // Close the left panel if it’s open
    }
    setSelectedTopic(topic);
    setPanelOpenRight(true);
  };

  const closePanelRight = () => {
    setPanelOpenRight(false);
    setSelectedTopic(null);
  };
  return (
    <>

       {(panelOpenLeft || panelOpenRight) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 backdrop-blur-sm transition-all duration-300" />
      )}
      {/* Banner Section */}
      <div className="w-full h-full snap-none ">
                  {/* Background Video */}
                  <video
                    className=" w-full h-[500px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739344340/servicebanner2_xwfgps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            
                  {/* Overlay */}
                  <div className="absolute inset-0 w-full h-[500px] bg-black/50"></div>
            
                  {/* Main Content */}
                  <div className=" -z-10 flex pl-10   justify-center flex-col w-full h-[388px]  items-center">
            
                  <h2 className="text-5xl md:text-4xl lg:text-9xl  font-semibold mb-5 tracking-wide drop-shadow-2xl text-gray-100   shadow-black">Services</h2>
                    </div>
                    </div>
      
          {/* Experience Design Section */}
          <div className="w-full h-full flex mt-10 lg:flex-row flex-col sm:flex-col md:flex-row px-4 lg:px-12 md:px-8 sm:px-5">

<div className="w-full h-full md:w-1/2 sm:w-full sm:h-full lg:w-1/2">
  <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-2xl text-center md:text-left sm:text-left lg:text-left font-light mb-10">Experience Design</h1>
  {option1.map((service, idx) => (
    <h2
      key={idx}
      className="text-sm mx-auto sm:text-left lg:text-left md:text-left text-center lg:text-2xl md:text-lg sm:text-base font-medium border-b py-7 cursor-pointer hover:text-blue-600 transition-colors"
      onClick={() => openPanelRight(service)}>
      {service.title}
    </h2>
  ))}
</div>
<div className="lg:flex md:flex w-full h-full hidden md:w-2/4 lg:w-1/2 justify-center relative ">
  <video className="w-full h-full md:h-[270px] md:w-[300px] lg:w-[500px] lg:h-[400px] mx-auto aspect-video mt-10" autoPlay loop muted>
    <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739344986/app_qyknwk.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

</div>

{/* Technology Section */}
<div className="w-full h-full flex mt-10 lg:flex-row flex-col sm:flex-col md:flex-row px-4 lg:px-12 md:px-8 sm:px-5">
<div className="lg:flex md:flex w-full h-full hidden md:w-2/4 lg:w-1/2 justify-center relative  p-6">
  <video className="w-full h-full md:h-[270px] md:w-[300px] lg:w-[500px] lg:h-[400px] mx-auto aspect-video mt-10" autoPlay loop muted>
    <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739344962/technology_gaxbq0.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className="w-full h-full md:w-1/2 sm:w-full sm:h-full lg:w-1/2">
  <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-2xl text-center md:text-right sm:text-left lg:text-right font-light mb-10">Technology</h1>
  {option2.map((service, idx) => (
    <h2
      key={idx}
      className="text-sm mx-auto sm:text-left lg:text-right md:text-right text-center lg:text-2xl md:text-lg sm:text-base font-medium border-b py-7 cursor-pointer hover:text-blue-600 transition-colors"
      onClick={() => openPanelLeft(service)}>
      {service.title}
    </h2>
  ))}
</div>
</div>

{/* Digital Marketing Section */}
<div className="w-full h-full flex mt-10 lg:flex-row flex-col sm:flex-col md:flex-row px-4 lg:px-12 md:px-8 sm:px-5">
<div className="w-full h-full md:w-1/2 sm:w-full sm:h-full lg:w-1/2">
  <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-2xl text-center md:text-left sm:text-left lg:text-left font-light mb-10">Digital Marketing</h1>
  {option3.map((service, idx) => (
    <h2
      key={idx}
      className="text-sm mx-auto sm:text-left lg:text-left md:text-left text-center lg:text-2xl  md:text-lg sm:text-base font-medium border-b py-7 cursor-pointer hover:text-blue-600 transition-colors"
      onClick={() => openPanelRight(service)}>
      {service.title}
    </h2>
  ))}
</div>

<div className="lg:flex md:flex w-full h-full hidden md:w-2/4 lg:w-1/2 justify-center relative p-6">
  <video className="w-full h-full md:h-[270px] md:w-[300px] lg:w-[500px] lg:h-[400px] mx-auto aspect-video mt-10" autoPlay loop muted>
    <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739344972/digitalM_fhswse.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
</div>

{/* Branding Section */}
<div className="w-full h-full flex mt-10 lg:flex-row flex-col sm:flex-col md:flex-row px-4 lg:px-12 md:px-8 sm:px-5">
<div className="lg:flex md:flex w-full h-full hidden md:w-2/4 lg:w-1/2 justify-center relative p-6">
  <video className="w-full h-full md:h-[270px] md:w-[300px] lg:w-[500px] lg:h-[400px] mx-auto aspect-video mt-10" autoPlay loop muted>
    <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739345009/branding_tpmpyn.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className="w-full h-full md:w-1/2 sm:w-full sm:h-full lg:w-1/2">
  <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-2xl text-center md:text-right sm:text-left lg:text-right font-light mb-10">Branding</h1>
  {option4.map((service, idx) => (
    <h2
      key={idx}
      className="text-sm mx-auto sm:text-left lg:text-right md:text-right  text-center lg:text-2xl md:text-lg sm:text-base font-medium border-b py-7 cursor-pointer hover:text-blue-600 transition-colors"
      onClick={() => openPanelLeft(service)}>
      {service.title}
    </h2>
  ))}
</div>
</div>



      {/* Impact Section */}
      <div className="flex flex-col items-center w-full h-full lg:w-1/2 mx-auto md:h-1/2  text-center p-6 sm:p-10  mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-8xl font-semibold mb-11 text-gray-800">
          Our Impact
        </h2>
        <p className="text-base w-full sm:text-lg md:text-base lg:text-2xl  mb-20 mt-10 text-gray-700 leading-relaxed">
          Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives, and build ecosystems that foster progress.
        </p>
        <div className="flex justify-between w-full">
          <div className="font-semibold pr-7 text-sm mb-10">
            <p>
              700+<br />
              Projects launched successfully<br />
              across the globe
            </p>
          </div>
          <div className="font-semibold pr-7 text-sm mb-10">
            <p>
              10M<br />
              Daily customer engagement<br />
              through our projects
            </p>
          </div>
          <div className="font-semibold text-sm mb-10">
            <p>
              100+<br />
              Digital transformation stories<br />
              that made a difference
            </p>
          </div>
        </div>
      </div>

  
     
       {/* Panels for displaying service description */}
       {panelOpenRight && selectedTopic && (
  <div className="fixed top-0 z-50 right-0 w-full md:w-1/2 lg:w-1/2 h-full  backdrop-blur-sm bg-white  shadow-xl transition-all duration-500 overflow-y-auto " data-aos="fade-up" data-aos-delay="500">
    <button onClick={closePanelRight} className="mt-6 ml-5 font-semibold text-red-950 border-red-600 px-2 py-1 rounded-lg border-2 hover:bg-red-500 hover:text-white">Close</button>
    <div className="p-6 ">
      {/* Image section */}
     
      <div className="mb-6">
        <img src={selectedTopic.image} alt={selectedTopic.title} className="w-full h-auto rounded-lg" />
      </div>
      
      {/* Title */}
      <h2 className="text-6xl text-center font-light text-black mt-10">{selectedTopic.title}</h2>
      
      {/* Description */}
      <p className="mt-10 text-black p-10 text-3xl font-thin ">{selectedTopic.description}</p>
    </div>
  </div>
)}

{panelOpenLeft && selectedTopic && (
  <div className="fixed top-0 z-50 left-0 w-full md:w-1/2 lg:w-1/2 h-full backdrop-blur-sm bg-white shadow-xl transition-all duration-500 overflow-y-auto " data-aos="fade-up" data-aos-delay="500">
    <button onClick={closePanelLeft} className="mt-6 ml-5 font-semibold z-50  text-red-950 border-red-600 px-2 py-1 rounded-lg border-2 hover:bg-red-500 hover:text-white">Close</button>
    <div className="p-6">
      {/* Image section */}
      <div className="mb-6">
        <img src={selectedTopic.image} alt={selectedTopic.title} className="w-full h-auto rounded-lg" />
      </div>
      
      {/* Title */}
      <h2 className=" text-3xl text-center font-light text-black mt-10 lg:text-4xl md:text-3xl sm:text-2xl">{selectedTopic.title}</h2>
      
      {/* Description */}
      <p className="mt-10 text-black text-3xl font-thin ">{selectedTopic.description}</p>
    </div>
  </div>
)}

    </>
  );
};

export default Services;
