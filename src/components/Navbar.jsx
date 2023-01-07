import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion'

const Navbar = () => {
    const namesPages = ["Home", "About", "Proyects", "Skills", "Contact"]
    const links = ["/","/about","/proyects","skills","design","skills"]
    const [isOpen, setIsOpen] = useState(false)
    const variantsNav = {
        open: {
            clipPath: ["circle(10% at 50% 50%)", "circle(71% at 50% 50%)"],
            top: ["-50%", "0%"],
            left: ["50%", "0%"],
            backdropFilter: "blur(10px)",
            transition: {
                duration: 1,
                ease: "circIn",
            }
        },
        closed: {
            overFlow:"hidden",
            clipPath: "circle(10% at 50% 50%)",
            top: "-50%",
            left: "50%",
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
            padding:[ "50px","50px"],
            fontSize: ["2rem","2rem"],
            x:[-170,-170,-170,-170,0],
            transition: {
              
                duration: 1.5,
                ease: "circOut",
            }
        },
        closed: {
            opacity:1,
            padding: [50,50,0],
            fontSize:["2rem","2rem","0rem"],
            x: [0,-200],
            transition: {              
                duration:1,
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
                   <NavLink  key={i} to={links[i]}> <m.h3
                        style={{
                          
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
