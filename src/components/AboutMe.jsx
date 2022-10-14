import React from 'react';
import {motion} from 'framer-motion'

const AboutMe = () => {
    return (
        <motion.div className='container'>
            <motion.section className='containerAbout'>
                <motion.div className='overText'
                animate={{
                   y:[0,50],
                   scaleY:[1.5,0]                }}
                transition={{
                    duration:5,
                    ease:"linear"
                }}
                ></motion.div>
                <motion.h1
                    animate={{
                        y:[300,25],
                        opacity:[0.5,1]                        
                    }}
                    transition={{
                        duration:3,
                        ease:"linear"
                    }}
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus ducimus debitis, numquam magni magnam quibusdam nostrum accusantium rerum reprehenderit quo error nobis atque. Culpa, quae? Vel nobis doloremque et.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus ducimus debitis, numquam magni magnam quibusdam nostrum accusantium rerum reprehenderit quo error nobis atque. Culpa, quae? Vel nobis doloremque et.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, delectus ducimus debitis, numquam magni magnam quibusdam nostrum accusantium rerum reprehenderit quo error nobis atque. Culpa, quae? Vel nobis doloremque et.
             
                </motion.h1>
            </motion.section>          
        </motion.div>
    );
}
export default AboutMe;
