import React from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <>
    <section className=" flex items-center justify-center h-full w-full">
    {/* Background image or decorative gradient */}
    <div className="absolute top-0 -z-10  h-[2000px] w-full">
      <img
        src="https://res.cloudinary.com/dzbuyze8t/image/upload/v1738304703/bgClient6_nmgsnf.jpg" // Replace with your banner image path
        alt="Contact Us Background"
        className="w-full h-full object-cover"
      />
    </div>

    {/*contact form */}
    <ContactForm/>
    </section>
    </>
  )
}

export default Contact