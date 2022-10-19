import React from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PageAboutMe from './components/PageAboutMe'
import AboutMe1 from './components/AboutMe1'
import AboutMe2 from './components/AboutMe2'
import AboutMe3 from './components/AboutMe3'
import AboutMe4 from './components/AboutMe4'
import AboutMe5 from './components/AboutMe5'
import AboutMe6 from './components/AboutMe6'
import Proyects from "./components/Proyects";
import Design from "./components/Design";
import EasyBrick from "./components/EasyBrick"
import HomeWork from "./components/HomeWork"
import CloudsShips from "./components/CloudsShips"
import Contact from "./components/Contact"
function App() {

  return (
    <div className="App">
      <Nav /> 
        <Routes>    
            <Route path="/" element={<Home/>}/> 
            <Route path="/pageAboutMe" element={<PageAboutMe/>}/>  
            <Route path="/aboutMe1" element={<AboutMe1/>}/>   
            <Route path="/aboutMe2" element={<AboutMe2/>}/>   
            <Route path="/aboutMe3" element={<AboutMe3/>}/>   
            <Route path="/aboutMe4" element={<AboutMe4/>}/>   
            <Route path="/aboutMe5" element={<AboutMe5/>}/>  
            <Route path="/aboutMe6" element={<AboutMe6/>}/> 
            <Route path="/proyects" element={<Proyects/>}/>  
            <Route path="/design" element={<Design/>}/>  
            <Route path="/easyBrick" element={<EasyBrick/>} />
            <Route path="/homeWork" element={<HomeWork/>} />
            <Route path="/cloudsShips" element={<CloudsShips/>} />
            <Route path="/contact" element={<Contact/>}/> 
        </Routes>
      <Footer/> 
    </div>  
  );
}

export default App;
