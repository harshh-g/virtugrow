import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import {  Route, Routes } from 'react-router';
import Home from './components/Home';
import ServicePage from './components/pages/ServicePage';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import AboutPage from './components/pages/AboutPage';
import SingleBlogPage from './components/pages/SingleBlogPage/SingleBlogPage';
import SingleBlogPage2 from './components/pages/SingleBlogPage/SingleBlogPage2';
import SingleBlogPage3 from './components/pages/SingleBlogPage/SingleBlogPage3';
import SingleBlogPage4 from './components/pages/SingleBlogPage/SingleBlogPage4';
import SingleBlogPage5 from './components/pages/SingleBlogPage/SingleBlogPage5';
import ContactPage from './components/pages/ContactPage';

const App = () => {
    
  return (<>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/portfoliopage" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/singleblogpage" element={<SingleBlogPage />} />
      <Route path="/singleblogpage2" element={<SingleBlogPage2 />} />
      <Route path="/singleblogpage3" element={<SingleBlogPage3 />} />
      <Route path="/singleblogpage4" element={<SingleBlogPage4 />} />
      <Route path="/singleblogpage5" element={<SingleBlogPage5 />} />
      <Route path="/contactpage" element={<ContactPage />} />

    </Routes>
    <Footer />

    </>
  )
}

export default App