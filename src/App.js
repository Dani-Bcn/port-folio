import React from 'react';
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import {motion, AnimatePresence} from 'framer-motion'
import './App.css'
import Home from './components/Home.jsx'
import Future from './components/Future';


const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence  className='App'  initial={true}>     
        <Routes  location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />  
          <Route path='/future' element={<Future/>}/>          
        </Routes>
      </AnimatePresence>   
  );
}

export default App;
