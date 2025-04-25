import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import {  Route, Routes } from 'react-router';
import Home from './components/Home';
import ServicePage from './components/pages/ServicePage';

const App = () => {
    
  return (<>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicepage" element={<ServicePage />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App