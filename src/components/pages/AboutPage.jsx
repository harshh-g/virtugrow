import React from 'react';
import './AboutPage.css';
import b1 from '../../assets/Aboutcover.jpg'
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const teamMembers = [
  { name: "Abhay Nishad", role: "App Developer", image: "#" },
  { name: "Aditya Verma", role: "App Developer", image: "#" },
  { name: "Harsh Gupta", role: "Fullstack Developer", image: "#" },
  { name: "Nitin Pathak", role: "UI/UX Designer", image: "#" },
  { name: "Aditya Pratap", role: "Tech Team Leader", image: "#" },
  { name: "Kiya Pandey", role: "App Developer", image: "#" },
  { name: "Manish Shirhane", role: "Fullstack Developer", image: "#" },
  { name: "Sharaddha", role: "Human Resource", image: "#" },
];


export default function AboutPage() {

  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight / 1.5;
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0, transition: { duration: 1 } });
  }, [visible, controls]);
  

  return (
    <main className="h-full relative">
      {/* Hero Section */}


      <div className='background-image'>
    <img src={b1} alt="About Background" />
  </div>

      
      <section className='h-screen bg-black relative z-1 div2'>
      <div className=" first-section  "> 
          <div className="first-section-element ">
          <div className="first-section-element2 ">
            <div className='first-section-element3 '>
            <div className="h-2 w-2 rounded-full bg-cyan-400 mr-3 "></div>
              <span className="first-section-element3-text  "> About</span>
            </div>
            <h1 className='blog-heading '>
            We help brands
            </h1>           
          </div>
            <div className='first-section-element3-div '>
              <h1 className='blog-heading2 '>grow online with</h1>
            </div>
            <div className='first-section-element3-div '>
              <h1 className='blog-heading3 '>smart digital work</h1>
            </div>
          </div>
            <div className="sub-heading-div  ">
             <div className='sub-heading-div2 '>
            <p className="sub-heading">At VirtuGrow Digital, we craft simple , effective strategies to boost your online presence and drive real results.</p>
             </div>
            </div>
      </div>
      </section>

       



      

      
      


      


      {/* CTA Section */}
    
    </main>
  );
}





