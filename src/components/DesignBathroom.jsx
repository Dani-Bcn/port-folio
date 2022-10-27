import React from 'react';
import { motion } from 'framer-motion'

const DesignBathroom = () => {

    return (        
        <motion.div className='containerDesign'
            animate={{
            opacity:[0,1]}}
            transition={{
                duration:2
            }}
        >          
           <a href='./Design'><div className='designBathroom'></div></a>
        </motion.div>
    );
}
export default DesignBathroom;