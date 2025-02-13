import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  // icons object array
  const icons = [
    { img: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317548/facebook_vtz60j.png", link: "https://www.facebook.com/people/Virtu-Grow/pfbid0Q4nDgiRW2ombKtZWsDep9pz4b194NLUSbdFSTbiq5y9nrppWntxRWS3qBjb5EVGDl/" },
    { img: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317626/instagram_tsgs8c.png", link: "https://www.instagram.com/virtu_growdigital?igsh=MWxnNGgzdzltZnFhMQ==" },
    { img: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/linkedin_sibqbp.png", link: "https://in.linkedin.com/company/virtu-grow-digital" },
    { img: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/youtube_jeksuy.png", link: "https://www.youtube.com/@VirtuGrowDigital" },
    { img: "https://res.cloudinary.com/dzbuyze8t/image/upload/v1738317653/social_n6duot.png", link: "https://in.pinterest.com/virtugrow/" }
  ];

  // https://script.google.com/macros/s/AKfycbxi_k_QgoKmKDeRlIpdWMxQuKOkQAJh598_zrHk-pyjRrqTEWVlULbksEHLsbJayKvaUw/exec  <-> Google Sheet Link

  const form = useRef();
  const navigate = useNavigate();

  const users = {
    name: '',
    email: '',
    phone: '',
    query: '',
  };

  const [myVal, setVal] = useState(users);
  const [errors, setErrors] = useState({});

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setVal({ ...myVal, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error for the specific field
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    // Strict Email Validation
    const emailRegex = /^(?!abc|123)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(myVal.email.trim())) {
      newErrors.email = myVal.email.trim()
        ? "Invalid email format. It should not start with 'abc', '123' or contain invalid characters."
        : "Email is required.";
      isValid = false;
    } else {
      // Gmail-specific Validation
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!gmailRegex.test(myVal.email.trim())) {
        newErrors.email = "Only Gmail domains are allowed.";
        isValid = false;
      }
    }

    // Strict Phone Validation (Indian Mobile Numbers Only)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!myVal.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(myVal.phone)) {
      newErrors.phone = "Phone number must be 10 digits and start with 6, 7, 8, or 9.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const submitForm = async (e) => {
    e.preventDefault();

    // Validate the form first
    let isValid = validate()



    if (isValid) {
      // Send data to Google Sheets
      const googleSheetUrl =
        'https://script.google.com/macros/s/AKfycbxi_k_QgoKmKDeRlIpdWMxQuKOkQAJh598_zrHk-pyjRrqTEWVlULbksEHLsbJayKvaUw/exec';
      try {
        await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `Name=${myVal.name}&Email=${myVal.email}&Phone=${myVal.phone}&Query=${myVal.query}`,
        });

        // Send data to MongoDB
        const response = await axios.post('/api/contact', myVal);

        // Send email after Google Sheets and MongoDB operations
        emailjs
          .sendForm('service_ckp17mb', 'template_ns22aqj', form.current, {
            publicKey: 'D0p33cLXNlOrmraGM',
          })
          .then(
            (result) => {
              console.log('Email sent successfully:', result.text);
            },
            (error) => {
              console.error('Email sending failed:', error.text);
            }
          );

        toast.success(response.data.message, {
          position: 'top-right',
        });
        navigate('/');

      } catch (error) {
        console.error('Form submission failed:', error);
        toast.error('Failed to submit the form. Please try again.', {
          position: 'top-right',
        });
      }
    } else {
      toast.error('Please fix the validation errors.', {
        position: 'top-right',
      });
      return;
    }
  };

  return (
    <>
      <section className="w-full h-full flex flex-col px-4 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full">
          {/* First section */}
          <div className="w-full lg:w-1/2 h-auto mt-24 mb-8 lg:mb-14  hidden md:hidden lg:flex-row lg:block justify-start">
            {/* Left section */}
            <div className="w-full h-full relative top-0 left-44">
              <video
                className="w-[500px] md:w-[300px] h-[500px] md:h-[400px] object-cover mix-blend-screen"
                autoPlay
                loop
                muted
              >
                <source src="https://res.cloudinary.com/dzbuyze8t/video/upload/v1739345768/v2_yqaxlr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-auto mb-8 lg:mb-14 flex justify-end sm:justify-center">
            <form
              className="bg-transparent p-6 md:p-9 rounded-md mt-6 lg:mt-10 backdrop-blur-sm shadow-lg w-full max-w-md lg:max-w-lg border-2 border-white"
              ref={form}
              onSubmit={submitForm}
            >
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-center text-white">
                Contact Us
              </h2>

              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-medium text-left mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={eventHandler}
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-medium text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={eventHandler}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-white font-medium text-left mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={eventHandler}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Query Field */}
              <div className="mb-6">
                <label
                  htmlFor="query"
                  className="block font-medium text-left text-white mb-2"
                >
                  Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  placeholder="Enter your query"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  maxLength={300} // Limiting to 300 characters
                  onChange={eventHandler}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>

          </div>
          <div className="mt-28 hidden   lg:flex flex-col space-y-4  md:flex sm:hidden  px-4">
            {icons.map((icon, idx) => (
              <Link to={icon.link} key={idx}>
                <img
                  src={icon.img}
                  className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
                  alt={`Social Media Icon ${idx + 1}`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="flex justify-center w-full h-full mt-7 mb-16">
          <div className="w-full h-auto mb-14 flex flex-col bg-black/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:mt-10 md:ml-10 justify-center">
            <div className="flex justify-center mt-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-6">
                Our Location
              </h2>
            </div>

            <div className="w-full h-full flex justify-center">
              <iframe
                className="w-full sm:w-[500px] md:w-[700px] lg:w-[800px] h-[300px] sm:h-[400px] rounded-md shadow-lg border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3440980115042!2d80.99441377514317!3d26.86080656231982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37c6ff33c1b%3A0xb09f8e6adce354ae!2sVirtuGrow%20Digital!5e0!3m2!1sen!2sin!4v1737361582377!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
