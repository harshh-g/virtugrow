import React from 'react';


const ContactSection = () => {
  return (
    <section className="container mx-auto h-[400px] px-4 py-8 ">
    <div className="bg-gradient-to-b from-[#001a29]/80 to-[#000a14]/80 h-full flex flex-col justify-center items-center rounded-lg p-4 md:p-8 text-center">
      <p className="text-sm port pb-7 ">HAVE A PROJECT IN MIND?</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl port2">LET'S WORK</h2>
      <button className="btn px-4 md:px-6 py-2 mt-5  flex items-center mx-auto">
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className='arrow'>
  <g clip-path="url(#clip0_710_3134)">
    <path d="M3.50614 2.60489C3.50617 2.39276 3.59046 2.18933 3.74046 2.03933C3.89045 1.88933 4.09389 1.80505 4.30602 1.80502L9.39719 1.80502C9.60932 1.80505 9.81275 1.88933 9.96275 2.03933C10.1128 2.18933 10.197 2.39276 10.1971 2.60489V7.69606C10.1934 7.9058 10.1075 8.10571 9.95794 8.25274C9.80833 8.39977 9.60695 8.48216 9.39719 8.48216C9.18742 8.48216 8.98605 8.39977 8.83644 8.25274C8.68683 8.10571 8.60095 7.9058 8.59731 7.69606L8.54866 4.58479L3.17465 9.95881C3.02462 10.1088 2.82114 10.1931 2.60896 10.1931C2.39679 10.1931 2.19331 10.1088 2.04328 9.95881C1.89325 9.80878 1.80896 9.60529 1.80896 9.39312C1.80896 9.18095 1.89325 8.97746 2.04328 8.82743L7.41729 3.45342L4.30602 3.40477C4.09389 3.40474 3.89045 3.32046 3.74046 3.17046C3.59046 3.02046 3.50617 2.81703 3.50614 2.60489Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_710_3134">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </button>
    </div>
  </section>
  );
};

export default ContactSection;