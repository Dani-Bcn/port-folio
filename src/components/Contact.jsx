import React from 'react';
import {motion} from 'framer-motion'

const Contact = () => {
    return (      
        <motion.div className='containerContact'
            animate={{
                y:[200, 0],
                scale:[2,1],
                opacity:[0,1]
            }}
            >                            
            <span><div className='iconAvatar'></div><h2>Daniel Pérez Aranda</h2> </span>
             <span><div className='iconEmail'></div><h2>nneodani@gmail.com</h2></span>
            <span><div className='iconTel'></div><h2>651110553</h2> </span>                
        </motion.div>       
    )
}
export default Contact;
