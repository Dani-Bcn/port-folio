import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion'

const Navbar = () => {
    const namesPages = ["Home", "About", "Proyects", "Skills", "Design"]
    const links = ["/", "about", "proyects", "skills", "design"]
    const [isOpen, setIsOpen] = useState(false)
    const variantsNav = {
        open: {
            clipPath: "circle(15% at 100% 0%)",
            backdropFilter: "blur(10px)",
            transition: {
                duration: 1,
                ease: "circOut",
            }
        },
        closed: {
            overFlow: "hidden",
            clipPath: "circle(3% at 100% 0%)",
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
            opacity: [0,0,1],     
            x: [-250, -250, -250, -250, 0],
            transition: {
                duration: 1.5,
                ease: "circOut",
            }
        },
        closed: {
            opacity: 0,
            x: [0, -250],
            transition: {
                duration: 1,
            }
        }
    }
    return ( 
            <m.div className='container-navbar' onClick={() => setIsOpen(!isOpen)}
                variants={variantsNav}
                animate={isOpen ? "open" : "closed"}
            >
                {
                    namesPages.map((e, i) => (
                        <NavLink key={i} to={links[i]}> <m.h3
                            style={{
                                fontSize: "3rem",
                                padding:"50px",
                                justifyContent: "center",
                            }}
                            variants={variantsNames}
                            animate={isOpen ? "open" : "closed"}
                        >{e}</m.h3></NavLink>
                    ))
                }

            </m.div>
    );
}

export default Navbar;
