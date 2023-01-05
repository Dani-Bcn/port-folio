import { React, useState } from 'react';
import { motion as m } from 'framer-motion'
import {useNavigate,NavLink} from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const images = ["Linkedin", "Github", "Domestika", "Contact"]
    const pages =["https://www.linkedin.com/in/daniperezbnc/","https://github.com/Dani-Bcn","https://www.domestika.org/es/nneodani"]
    const [isOpen, setIsOpen] = useState(false)
 
    const variantsFooter = {
        open: {
            opacity:1,
            y: [0, 230],
            clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
            height: ["100%", "500%"],
        },
        closed: {
            opacity:0.5,
            y: [230, 0],
            height: ["500%", "100%"],
            clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 0%)",
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        }
    }
    const variants = {
        open: {
            x: 0, opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1
            }
        },
        closed: {
            x: 100, opacity: 0,
            transition: {             
                duration: 0.5
            }
        },
    }

    return (
        <m.div className='container-footer' 
        onHoverStart={() => setIsOpen(!isOpen)} 
        onHoverEnd={() => setIsOpen(!isOpen)}
            variants={variantsFooter}
            animate={isOpen ? "open" : "closed"}
        >
            {
                images.map((e, i) => (
                    <a href={pages[i]} target="blank">
                           <m.div key={i}
                    style={{
                        cursor:"pointer"
                    }}
                        variants={variants}
                        animate={isOpen ? "open" : "closed"}
                    >{e}</m.div>
                    </a>
                 
                ))
            }
        </m.div>
    );
}

export default Footer;
