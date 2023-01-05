import { React, useState } from 'react';
import { motion as m } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
    const navigate  = useNavigate()
    const links=["Linkedin","Github","Domestika","Contact"]
    const direcctions=["https://www.linkedin.com/in/daniperezbnc/","https://github.com/Dani-Bcn","https://www.domestika.org/es/nneodani"]

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
                <a href={direcctions[i]}                
                style={{
                    height:"100%",
                    justifyContent:"space-evenly"
                }}>
                <div key={i}
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
