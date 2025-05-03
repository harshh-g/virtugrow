import React from 'react';
import { Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white font-sans">

      {/* Left fixed section (only fixed on md+ screens) */}
      <div className="md:w-1/2 w-full md:fixed md:top-0 md:left-0 md:h-screen pt-20 md:pt-32 px-6 md:px-10  bg-black">
        {/* Contact header */}
        <div className="flex items-center mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#2FBECE] to-[#2974B7] mr-2"></div>
          <h2 className="text-base font-bold bg-gradient-to-b from-[#2FBECE] to-[#2974B7] bg-clip-text text-transparent">Contact</h2>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 blog-heading">Let's Partner Up!</h1>
          <p className="text-gray-300 text-lg mt-6 sub-heading">Tell us your project details and we'll get back to you ASAP.</p>
        </div>
      </div>

      {/* Right scrollable section */}
      <div className="md:ml-[50%] w-full md:w-1/2 pt-20 md:pt-40 px-6 overflow-y-auto md:h-screen">
        <div className="backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg bg-[#0a1929] mb-10">
          <h3 className="text-xl mb-8">Tell us about your details</h3>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input type="text" name="firstName" placeholder="First Name" className="flex-1 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
              <input type="text" name="lastName" placeholder="Last Name" className="flex-1 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
            </div>

            <input type="email" name="email" placeholder="Email" className="w-full mb-6 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />

            <input type="tel" name="phone" placeholder="Phone Number" className="w-full mb-8 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />

            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 text-sm">How we can help you?</label>
              <div className="relative">
                <select id="service" name="service" className="w-full bg-transparent border-b border-[#3CC7E0] p-3 text-white cursor-pointer appearance-none focus:outline-none" required>
                  <option value="" disabled selected className="bg-[#0a1929] text-gray-300">Select Service</option>
                  <option value="app" className="bg-[#0a1929] text-white">App Development</option>
                  <option value="software" className="bg-[#0a1929] text-white">Software Development</option>
                  <option value="digital" className="bg-[#0a1929] text-white">Digital Marketing</option>
                  <option value="ui" className="bg-[#0a1929] text-white">UI/UX Design</option>
                  <option value="video" className="bg-[#0a1929] text-white">Video Editing</option>
                  <option value="ads" className="bg-[#0a1929] text-white">Ads Management</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3CC7E0]">▼</div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="projectDetails" className="block mb-2 text-sm">Describe your project here</label>
              <textarea id="projectDetails" name="projectDetails" placeholder="Your Project Details" className="w-full bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 min-h-[120px] resize-y focus:outline-none" required></textarea>
            </div>

            <button type="submit" className="flex items-center gap-2 bg-opacity-10 bg-[#3CC7E0] text-white border border-[#3CC7E0] rounded-full px-6 py-2 transition-all hover:bg-opacity-20">
              Submit Inquiry
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
