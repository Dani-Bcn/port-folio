import { React, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'


const Navbar = () => {
    const nameLinks = ["Linkedin", "Github", "Domestika", "Contact"]
    const links = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani", "/contact"]
    const [isOpen, setIsOpen] = useState(false)

    const arraySticks = [5, 5, 5]

    const variantsnav = {

        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        closed: {
            x: -1200,
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        }
    }
    const variantsH3 = {
        open: {
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        },
        closed: {
            x: -700,
            transition: {
                duration: 0.5,
            }
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
                <div className='card-nav'>
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
                </div>
            </m.div>
            <m.div id="sticks" onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: 50,
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
                                width: "50%",
                                height: 2.5,
                                marginTop: 7.5,
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
