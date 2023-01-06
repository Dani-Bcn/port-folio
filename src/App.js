import React from 'react';
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Nav from './components/Nav';
import Proyects from './components/Proyects';

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence className='App' initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/proyects' element={<Proyects />} />
      </Routes>
      <Nav />
    </AnimatePresence>

  );
}

export default App;
