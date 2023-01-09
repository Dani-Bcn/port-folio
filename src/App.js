import { React, useEffect, useState } from 'react';
import { Routes, Route, useLocation, } from "react-router-dom";
import { motion as m,AnimatePresence } from 'framer-motion'
import Scrollbar from 'smooth-scrollbar';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {

console.log(window.status)
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
          position: "fixed",
          top:0,
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
