import React from 'react'
import Hero from './Hero.jsx'
import BrandsSection from './BrandsSection.jsx'
import StorySection from './StorySection.jsx'
import ServicesSection from './ServicesSection.jsx'
import PortfolioSection from './PortfolioSection.jsx'
import TestimonialsSection from './TestimonialsSection.jsx'
import ContactSection from './ContactSection.jsx'

import { Contact } from 'lucide-react'
const Home = () => {
  return (
    <div>
        <Hero/>
        <BrandsSection/>
        <StorySection/>
        <ServicesSection/>
        <PortfolioSection/>
        <TestimonialsSection/>
        <ContactSection/>
    </div>
  )
}

export default Home