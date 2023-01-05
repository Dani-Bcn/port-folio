import { React, useState } from 'react';
import { motion as m } from 'framer-motion'

const Footer = (props) => {
    const links=["Linkedin","Github","Domestika","Contact"]

    const { values } = props
    console.log(values)
    const variants = {
        open: {
            x: "-15px",
            transition: {
                duration: 1,
                ease: "circOut"
            }
        },
        closed: {
            x: "500px",
            transition: {
                duration: 1,
                ease: "circOut"
            }
        }
    }
    return (
        <m.div className='footer-page' 
            variants={variants}
            animate={values ? "open" : "closed"}
        > {
            links.map((e,i)=>(
                <div key={i}
                style={{
                    height:"100%",
                    justifyContent:"space-bevenly"
                }}>{e}</div>
            ))
        }
        </m.div>
    );
}

export default Footer;
