import {React, useState} from 'react';
import { motion as m } from 'framer-motion'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    const direcctions = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn","https://www.domestika.org/es/nneodani",  "Contact"]
    const linkss = ["Linkedin", "Github", "Domestika", "Contact"]
    const [isOpen, setIsOpen] = useState(false)
    const variantsLinks = {
        open: {
            opacity: 1,
            x: [200, 0],
            transition: {
                delay: 0.5
            }
        },
        closed: {
            opacity: 0,
            x: [0, 200],
            transition: {
                duration: 2,
            }
        }
    }
    const variants = {
        open: {
            scale: 10,
            x: "185px",
            y: "-400px",
            transition: {
                duration: 1,
                ease: "backInOut",
            }
        },
        closed: {
            scale: 1,
            x: "0px",
            y: "0px",
            transition: {
                duration: 1,
                delay: 0.5,
                ease: "backIn",
            },

        }
    }
    return (
        <m.div className='footer' onClick={() => setIsOpen(!isOpen)}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
            exit={{
                opacity: 0,
                x: [0, 200],
                transition: {
                    duration: 2,
                }
            }}
        >
            {
                linkss.map((e, i) => (
                    <m.div key={i}
                        style={{
                            height: "17px",
                            opacity: 0,
                            fontSize: "0.3rem",
                        }}
                        variants={variantsLinks}
                        animate={isOpen ? "open" : "closed"}
                    ><a href={direcctions[i]} onClick={() => setIsOpen(!isOpen)}><h5  >{e}</h5></a></m.div>
                ))
            }
        </m.div>
    )
}

export default Footer;
