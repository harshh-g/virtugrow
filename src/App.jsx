import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
  return (
    <Router>
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} min-h-screen transition-colors duration-300`}>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              
            </>
          } />
          {/* Add additional routes as needed */}
        </Routes>
        
      </div>
    </div>
  </Router>
  )
}

export default App