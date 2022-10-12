import React from 'react';
import {motion} from 'framer-motion'

const Design = () => {
    return (
        <motion.div className='container'
        animate={{
            x:[-100, 0],
            opacity:[0,1]
        }}
        >
            <h1>Diseños 3D</h1>
        </motion.div>
    );
}
export default Design;
