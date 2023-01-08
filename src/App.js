import React from 'react';
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Design from './components/Design3d'
import Navbar from './components/Navbar';
import Xnav from './components/Xnav';
import Footer from './components/Footer';
import Xfooter from './components/Xfooter';

const App = () => {
  const location = useLocation()
  return (
    <div
      style={{
        overflow: "hidden"
      }}>
      <AnimatePresence className='App' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/proyects' element={<Proyects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/design' element={<Design />} />
        </Routes>
      </AnimatePresence>
      <Navbar />
      <Xnav />
      <Footer />
      <Xfooter />
      {/*       
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "120px",
          height: "25px",
          padding: "20px",
          fontSize: "1.2rem",
          backgroundColor: "red",
          zIndex: 5,

        }}
      >Under construction !</div> */}


    </div>



  );
}

export default App;
