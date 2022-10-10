import React from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Proyects from "./components/Proyects";
import Design from "./components/Design";



function App() {
  return (
    <div className="App">
      <Nav/> 
      <Routes>    
          <Route path="/" element={<Home/>}/> 
          <Route path="/aboutMe" element={<AboutMe/>}/>     
          <Route path="/proyects" element={<Proyects/>}/>  
          <Route path="/design" element={<Design/>}/>  
      </Routes>
      <Footer/> 
    </div>  
  );
}

export default App;
