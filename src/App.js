import React from 'react';
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import {motion, AnimatePresence} from 'framer-motion'
import './App.css'
import Home from './components/Home.jsx'
import Future from './components/Future';
import AboutFuture from './components/AboutFuture'
import ProyectsFuture from './components/ProyectsFuture';
import SkillsFuture from './components/SkillsFuture';
import DesignFuture from './components/DesignFuture';



const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence  className='App'  initial={true}>     
        <Routes  location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />  
          <Route path='/future' element={<Future/>}/>  
          <Route path='/aboutfuture' element={<AboutFuture/>}/>     
          <Route path='/proyectsfuture' element={<ProyectsFuture/>}/>     
          <Route path='/skillsfuture' element={<SkillsFuture/>}/>   
          <Route path='/designfuture' element={<DesignFuture/>}/>   
        </Routes>
      </AnimatePresence>   
  );
}

export default App;
