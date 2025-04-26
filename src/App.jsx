import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import {  Route, Routes } from 'react-router';
import Home from './components/Home';
import ServicePage from './components/pages/ServicePage';
import PortfolioPage from './components/pages/PortfolioPage';

const App = () => {
    
  return (<>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/portfoliopage" element={<PortfolioPage />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App