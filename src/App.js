import React from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Proyects from "./components/Proyects";
import Design from "./components/Design";
import EasyBrick from "./components/EasyBrick"
import HomeWork from "./components/HomeWork"
function App() {
  return (
    <div className="App">
      <Nav/> 
      <Routes>    
          <Route path="/" element={<Home/>}/> 
          <Route path="/aboutMe" element={<AboutMe/>}/>     
          <Route path="/proyects" element={<Proyects/>}/>  
          <Route path="/design" element={<Design/>}/>  
          <Route path="/easyBrick" element={<EasyBrick/>} />
          <Route path="/homeWork" element={<HomeWork/>} />
      </Routes>
      <Footer/> 
    </div>  
  );
}

export default App;
