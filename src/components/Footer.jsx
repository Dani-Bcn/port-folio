import { React, useState } from 'react';
import { motion as m } from 'framer-motion'

const Footer = (props) => {

    const links=["Linkedin","Github","Domestika","Contact"]
    const direcctions=["https://www.linkedin.com/in/daniperezbnc/","https://github.com/Dani-Bcn","https://www.domestika.org/es/nneodani"]

    const { values } = props
    console.log(values)
    const variants = {
        open: {
            opacity:1,
            x: "-15px",
            transition: {
                duration: 1,
                ease: "circOut"
            }
        },
        closed: {
            opacity:0,
            x: ["-15px","400px"],
            transition: {
                duration: 1,
                ease: "circIn"
            }
        }
    }
    return (
        <m.div className='footer-page' 
            variants={variants}
            animate={values ? "open" : "closed"}
            exit={"closed"}
        > {
            links.map((e,i)=>(
                <a   key={i} href={direcctions[i]}                
                style={{
                    height:"100%",
                    justifyContent:"space-evenly"
                }}>
                <div
                    style={{
                        height:"100%"
                    }}
                >{e}</div>
                  </a>
            ))         
        }         
        </m.div>
    );
}

export default Footer;
