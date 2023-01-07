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
const App = () => {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence className='App' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/proyects' element={<Proyects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/design' element={<Design />} />
        </Routes>
      </AnimatePresence>
      <Navbar/>
     


    </div>



  );
}

export default App;
