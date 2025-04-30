import React from 'react';
import './AboutPage.css';



export default function AboutPage() {
  

  return (
    <main className="h-full overflow-auto bg-black text-white">
      {/* Hero Section */}
      
      <section className=" first-section  "> 
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

           
        
      </section>


      {/* CTA Section */}
    
    </main>
  );
}





