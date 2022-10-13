import React from 'react';
import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <motion.div className='containerContact'
        animate={{
            y:[200, 0],
            scale:[2,1],
            opacity:[0,1]
        }}>
            <section>  
            <form action="" className='form'>
                <ul>
                    <li><div className='iconAvatar'></div><input placeholder='Name'></input></li>
                    <li><div className='iconEmail'></div><input placeholder='email'></input></li>
                    <li><div className='iconTel'></div><input placeholder='Num'></input></li>
                </ul>
            </form> 

            </section>
                  
        </motion.div>
    )
}
export default Contact;
