import React from 'react';
import { Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="flex flex-col  lg:flex-row h-screen  w-full bg-gradient-to-br from-[#0a1929] to-[#061017] text-white font-sans overflow-hidden">
      {/* Left side fixed content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 lg:fixed lg:left-0 lg:h-screen flex flex-col">
        {/* Contact header */}
        <div className="flex items-center mb-6">
          <div className="w-2 h-2 rounded-full bg-[#3CC7E0] mr-2"></div>
          <h2 className="text-sm font-medium">Contact</h2>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Partner Up!</h1>
          <p className="text-gray-300 text-lg">Tell us your project details and we'll get back to you ASAP.</p>
        </div>

        {/* Mission statement - pushes to bottom on desktop */}
        <div className="mt-auto mb-6">
          <p className="text-gray-300 max-w-md lg:max-w-sm leading-relaxed">
            We believe in a world where technology fosters your everyday experiences. Our mission is to make it happen!
          </p>
        </div>

        {/* Contact info */}
        <div className="text-gray-300">
          <p className="font-semibold mb-2">Contact</p>
          <p className="mb-1">virtugrowdigital@gmail.com</p>
          <p>+91 9105669880</p>
        </div>
      </div>

      {/* Right side scrollable form */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] h-screen overflow-y-auto py-8 px-4">
        <div className="bg-opacity-60 bg-[#0a1929] backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg mx-4 md:mx-8 lg:mx-10">
          <h3 className="text-xl mb-8">Tell us about your details</h3>
          
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Name fields */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            
            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white placeholder-gray-400"
                required
              />
            </div>
            
            {/* Phone */}
            <div className="mb-8">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white placeholder-gray-400"
                required
              />
            </div>
            
            {/* Service selection */}
            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 text-sm">How we can help you?</label>
              <div className="relative">
                <select 
                  id="service"
                  name="service"
                  className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected className="bg-[#0a1929] text-gray-300">Select Service</option>
                  <option value="app" className="bg-[#0a1929] text-white">App Development</option>
                  <option value="software" className="bg-[#0a1929] text-white">Software Development</option>
                  <option value="digital" className="bg-[#0a1929] text-white">Digital Marketing</option>
                  <option value="ui" className="bg-[#0a1929] text-white">UI/UX Design</option>
                  <option value="video" className="bg-[#0a1929] text-white">Video Editing</option>
                  <option value="ads" className="bg-[#0a1929] text-white">Ads Management</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3CC7E0] pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
            
            {/* Project details */}
            <div className="mb-8">
              <label htmlFor="projectDetails" className="block mb-2 text-sm">Describe your project here</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                placeholder="Your Project Details"
                className="w-full bg-transparent border-b border-[#3CC7E0] p-3 focus:outline-none text-white placeholder-gray-400 min-h-[120px] resize-y"
                required
              ></textarea>
            </div>
            
            {/* Submit button */}
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 bg-opacity-10 bg-[#3CC7E0] text-white border border-[#3CC7E0] rounded-full px-6 py-2 transition-all hover:bg-opacity-20"
            >
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