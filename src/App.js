import { React, useEffect } from 'react';
import { Routes, Route, useLocation, } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';

import { AnimatePresence } from 'framer-motion'
import './App.css'
import Home from './components/Home'

const App = () => {
  useEffect(() => {
    const options = {
      "damping": 0.03
    }
    const navbar = document.querySelector('.container-nav')
    const warning = document.getElementById('warning')
    const scrollbar = Scrollbar.init(document.querySelector('html'), options)
    scrollbar.addListener(status => {
      const offset = status.offset
      warning.style.top = 50 +offset.y + 'px'
      navbar.style.top = offset.y + 'px'
      warning.style.opacity = offset.y / 1000
      document.getElementById('home').style.opacity = 1 - offset.y / 500
    })
    
    console.log("La resolución de tu pantalla es: " + window.screen.width + " x " + window.screen.height)
  }, [])

  const location = useLocation()
  const nameLinks = ["Linkedin", "Github", "Domestika", "Contact"]
  const links =["https://www.linkedin.com/in/daniperezbnc/","https://github.com/Dani-Bcn","https://www.domestika.org/es/nneodani",]
  return (
    <div>
      <div className='container-nav' >
        {
          nameLinks.map((e, i) => (
            <a key={i} href={links[i]}><h3 >{e}</h3></a>
          ))
        }
      </div>
      <AnimatePresence className='App' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />

        </Routes>
      </AnimatePresence>


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


    </div>



  );
}

export default App;
