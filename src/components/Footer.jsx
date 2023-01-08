import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion'

const Footer = () => {
    const namesPages = ["Likedin", "Github", "Domestika", "Contact"]
    const links = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani", "Contact"]
    const [isOpen, setIsOpen] = useState(false)
    const variantsNav = {
        open: {
            clipPath: "circle(141.4% at 0 100%)",
            backdropFilter: "blur(10px)",
            transition: {
                duration: 1,
                ease: "circOut",
            }
        },
        closed: {
            overFlow: "hidden",
            clipPath: "circle(10% at 0 100%)",
            backdropFilter: "blur(0px)",
            transition: {
                delay: 0.7,
                duration: 0.5,
                ease: "circOut",
            }
        }
    }
    const variantsNames = {
        open: {
            opacity: 1,
            x: [-300, -300, -300, -300, 0],
            transition: {
                duration: 1.5,
                ease: "circOut",
            }
        },
        closed: {
            opacity: 0,
            x: [0, -300],
            transition: {
                duration: 1,
            }
        }
    }
    return (

        <m.div className='container-footer' onClick={() => setIsOpen(!isOpen)}
            variants={variantsNav}
            animate={isOpen ? "open" : "closed"}
        >
            {
                namesPages.map((e, i) => (
                    <a href={links[i]} key={i} > <m.h3
                        style={{
                            fontSize: "3rem",
                            padding: "50px",
                            justifyContent: "center",
                        }}
                        variants={variantsNames}
                        animate={isOpen ? "open" : "closed"}
                    >{e}</m.h3></a>
                ))
            }
        </m.div>
    );
}
export default Footer;
