import { React, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'
import Scrollbar from 'smooth-scrollbar';


const Navbar = () => {
    const nameLinks = ["Linkedin", "Github", "Domestika", "Contact", " "]
    const links = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani", "/contact"]
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {

        const navbar = document.querySelector('.container-nav')
        const sticks = document.querySelector('#sticks')
        const scrollbar = Scrollbar.init(document.querySelector('html'))
        scrollbar.addListener(status => {
            const offset = status.offset
            navbar.style.top = offset.y + 'px'
            sticks.style.top = offset.y + 'px'
        })
    })
    const arraySticks = [5, 5, 5]

    const variantsnav = {
        open: {
            width: "100vw",
            opacity:1,
        },
        closed: {
            width: 50,
            opacity:0,
        }
    }
    const variantsH3 = {
        open: {
            fontSize: "1rem",
        },
        closed: {
            fontSize: 0
        }
    }
    const variantsSticks = {
        open: {
            rotate: 90,
           
        },
        closed: {
            rotate: 0,
          
        }
    }
    return (
        <div>
            <m.div className='container-nav' onClick={() => setIsOpen(!isOpen)}
                variants={variantsnav}
                animate={
                    isOpen ? "open" : "closed"
                }>
                {
                    nameLinks.map((e, i) => (
                        <a key={i} href={links[i]}><m.h3
                            variants={variantsH3}
                            animate={
                                isOpen ? "open" : "closed"
                            }
                        >{e}</m.h3></a>
                    ))
                }
            </m.div>
            <m.div id="sticks" onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 40,
                    height: 50,
                    zIndex: 5,
                }}
                variants={variantsSticks}
                animate={isOpen ? "open" : "closed"}
            >
                {
                    arraySticks.map((e, i) => (
                        <div key={i}
                            style={{
                                width: 20,
                                height: 2.5,
                                marginTop:7.5,
                                backgroundColor: "rgb(255, 233, 205)"
                            }}
                        ></div>
                    ))
                }
            </m.div>
        </div>

    );
}

export default Navbar;
