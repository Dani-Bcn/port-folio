import React from 'react';
import {motion} from 'framer-motion'

const Contact = () => {   
    return (     
        <motion.div className='container'>                 
            <div className='contact'>                                     
                <motion.span
                    animate={{
                        opacity:[0,1],
                        x:[-200,0]
                    }}
                ><div className='iconAvatar'></div><h2>Daniel Pérez Aranda</h2> </motion.span>
                <motion.span
                   animate={{
                    opacity:[0,1],
                    x:[200,0]
                }}
                ><div className='iconEmail'></div><h2>nneodani@gmail.com</h2></motion.span>
                <motion.span
                   animate={{
                    opacity:[0,1],
                    x:[-200,0]
                }}
                ><div className='iconTel'></div><h2>651110553</h2> </motion.span>   
                <motion.span
                   animate={{
                    opacity:[0,1],
                    x:[200,0]
                }}><div className='iconPoint'></div><h2>Montgat (BCN)</h2> </motion.span>   
                <motion.a className='btnSearch' href="mailto:nneodani@gmail.com"
                   animate={{
                    opacity:[0,1],
                    y:[200,0]
                }}
                ><button>Enviar correo</button></motion.a>   
            </div>             
        </motion.div>      
    )
}
export default Contact;
