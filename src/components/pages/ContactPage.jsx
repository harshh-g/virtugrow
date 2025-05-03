import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactPage.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: '',
  });

  const [loading, setLoading] = useState(false);

  const apiClient = axios.create({
    timeout: 10000,
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w.-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, phone } = formData;

    if (!validateEmail(email)) {
      toast.error('Please enter a valid Gmail address.');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post('/api/contact', formData);
      toast.success(response.data.message || 'Inquiry submitted!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        projectDetails: '',
      });

      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error('Submission failed. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white font-sans w-full lg:h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] lg:fixed top-0 left-0 lg:h-screen pt-40 lg:pt-15 px-6 lg:px-10 z-10">
        <div className="flex items-center ml-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#2FBECE] to-[#2974B7] mr-2"></div>
          <h2 className="text-base font-bold bg-gradient-to-b from-[#2FBECE] to-[#2974B7] bg-clip-text text-transparent">Contact</h2>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 blog-heading">Let's Partner Up!</h1>
          <p className="text-gray-300 text-lg mt-6 sub-heading">Tell us your project details and we'll get back to you ASAP.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:ml-[50%] lg:w-[50%] lg:h-screen overflow-y-auto pt-10 lg:pt-40 px-6">
        <div className="backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg bg-[#0a1929] mb-10">
          <h3 className="text-xl mb-8">Tell us about your details</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="flex-1 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="flex-1 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-6 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full mb-8 bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 focus:outline-none" required />
            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 text-sm">How we can help you?</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#3CC7E0] p-3 text-white cursor-pointer appearance-none focus:outline-none"
                  required
                >
                  <option value="" disabled className="bg-[#0a1929] text-gray-300">Select Service</option>
                  <option value="app" className="bg-[#0a1929]/90 text-white">App Development</option>
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
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Your Project Details"
                className="w-full bg-transparent border-b border-[#3CC7E0] p-3 text-white placeholder-gray-400 min-h-[120px] resize-y focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 bg-opacity-10 bg-[#3CC7E0] text-white border border-[#3CC7E0] rounded-full px-6 py-2 transition-all hover:bg-opacity-20 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              {loading ? (
                <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
              ) : (
                <>
                  Submit Inquiry <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
