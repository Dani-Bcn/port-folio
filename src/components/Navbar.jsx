import { React, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion'
import Scrollbar from 'smooth-scrollbar';


const Navbar = () => {
    const nameLinks = ["Linkedin", "Github", "Domestika", "Contact"]
    const links = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani", "/contact"]
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const options = {
            "damping": 0.03
        }
        const navbar = document.querySelector('.container-nav')
        const sticks = document.querySelector('#sticks')
        const scrollbar = Scrollbar.init(document.querySelector('html'), options)
        scrollbar.addListener(status => {
            const offset = status.offset
            navbar.style.top = offset.y + 'px'
            sticks.style.top = offset.y + 'px'
            console.log(offset.y)
        })

    })
    const arraySticks = [5, 5, 5]

    const variantsnav = {
        open: {
            x: [-500, 0],
            opacity: [0, 1],
        },
        closed: {
            x: [0, -500],
            opacity: [1, 0],
            transition: {
                delay: 0.5
            }
        }
    }
    const variantsH3 = {
        open: {
            y: [-500, 0],
            transition: {
                delay: 0.5
            }
        },
        closed: {
            y: [0, -500]
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
                    position: "absolute",
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
