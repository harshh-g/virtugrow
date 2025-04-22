import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import {  Route, Routes } from 'react-router';
import Home from './components/Home';

const App = () => {
    
  return (<>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App