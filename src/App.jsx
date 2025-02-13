import React from 'react'
import Navbar from './components/Navabar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import  Services  from './components/pages/Services/Services'
import Appdevelopment from './components/pages/dropdown/app-development/app development/Appdevelopment'
import Softwaredevelop from './components/pages/dropdown/software/Softwaredevelop'
import Digitalmarketing from './components/pages/dropdown/digital Marketing/Digitalmarketing'
import Graphicdesign from './components/pages/dropdown/graphic-design/Graphicdesign'
import Videoediting from './components/pages/dropdown/videoediting/Videoediting'
import Portfolio from './components/pages/portfolio/Portfolio'
import Blog from './components/pages/blogs/Blog'
import Footer from './components/Footer/Footer'
import Contact from './components/pages/Contact/Contact'
import AdManager from './components/pages/dropdown/ads-manager/AdManager'
import { ToastContainer } from 'react-toastify'
import Privacy from './components/Privacy'
import ScrollToTop from './ScrollToTop'







const App = () => {
  return (
    <div> 
   <ToastContainer position="top-left" />
   <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/appdevelopment' element={<Appdevelopment/>} />
      <Route path='/softwaredevelopment' element={<Softwaredevelop/>} />
      <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
      <Route path='/graphicdesigning' element={<Graphicdesign/>} />
      <Route path='/videoediting' element={<Videoediting/>} />
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/admanagement'element={<AdManager/>} />
      <Route path='/private' element={<Privacy/>} />
      
      
      
   
      
    </Routes>
    <Footer/>
     
     
     
    
    </div>
  )
}

export default App