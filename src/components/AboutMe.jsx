import React from 'react';
import {motion} from 'framer-motion'

const AboutMe = () => {
    return (
        <motion.div className='container'        
            animate={{
                x:[-100, 0],
                opacity:[0,1]
            }}
        >
            <section className='containerSection'>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus ducimus debitis, numquam magni magnam quibusdam nostrum accusantium rerum reprehenderit quo error nobis atque. Culpa, quae? Vel nobis doloremque et.</h1>
            </section>          
        </motion.div>
    );
}
export default AboutMe;
