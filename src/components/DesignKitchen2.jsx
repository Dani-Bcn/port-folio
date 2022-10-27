import React from 'react';
import {motion} from 'framer-motion'

const DesignKitchen2 = () => {

    return (        
        <motion.div className='containerDesign'
            animate={{
            opacity:[0,1]}}
            transition={{
                duration:2
            }}
        >          
           <a href='./Design'><div className='designKitchen2'></div></a>
        </motion.div>
    );
}
export default DesignKitchen2;
