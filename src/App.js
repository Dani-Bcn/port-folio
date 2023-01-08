import { React, useEffect, useState } from 'react';
import { Routes, Route, useLocation, } from "react-router-dom";
import { motion as m,AnimatePresence } from 'framer-motion'
import Scrollbar from 'smooth-scrollbar';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const options = {
      "damping": 0.03
    }

    const warning = document.getElementById('warning')
    const scrollbar = Scrollbar.init(document.querySelector('html'), options)
    scrollbar.addListener(status => {
      const offset = status.offset
      warning.style.top = 50 + offset.y + 'px'
      warning.style.opacity = offset.y / 1000
      document.getElementById('home').style.opacity = 1 - offset.y / 500

    })
  },[])
  const location = useLocation()

  return (
    <div>
   
      <AnimatePresence className='App' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
      <Navbar/>
      <div id='warning'
        style={{
          textAlign: "center",
          position: "absolute",
          left: "0px",
          width: "120px",
          height: "25px",
          padding: "20px",
          fontSize: "1.2rem",
          backgroundColor: "red",
          pinType: "fixed",
          zIndex: 5,

        }}
      >Under construction !</div>


    </div >



  );
}

export default App;
