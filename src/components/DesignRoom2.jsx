import React from 'react';
import {motion} from 'framer-motion'

const DesignRoom2 = () => {

    return (        
        <motion.div className='containerDesign'
            animate={{
            opacity:[0,1]}}
            transition={{
                duration:2
            }}
        >          
           <a href='./Design'><div className='designRoom2'></div></a>
        </motion.div>
    );
}
export default DesignRoom2;
