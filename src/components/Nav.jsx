import { React, useState } from 'react';
import { motion as m } from 'framer-motion'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  
    const direcctions = ["/", "/about", "/proyects", "/skills", "/design"]
    const linkss = ["Home", "About", "Proyects", "Skills", "Design"]
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
            x: "-185px",
            y: "400px",
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
        <m.div className='nav' onClick={() => setIsOpen(!isOpen)}
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
                    ><NavLink to={direcctions[i]} onClick={() => setIsOpen(!isOpen)}><h5  >{e}</h5></NavLink></m.div>
                ))
            }
        </m.div>
    )
}

export default Nav;
