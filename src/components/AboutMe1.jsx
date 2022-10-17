import React from 'react';
import {motion} from 'framer-motion'


const AboutMe1 = () => {
    return (
        <motion.div className='cardDeveloper'
            animate={{
                x:[0,-2000],
                opacity:[1,0]
            }}
            transition={{
                duration:2,
                delay:5         
            }}
        >
            <motion.div className='overText'
                animate={{
                y:[0,50],
                scaleY:[1.5,0]}}
                transition={{
                    duration:3,
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
            >
                Apasionado del diseño gráfico  y de la programación cada vez mas pasaba mis horas de ocio
                delante del ordenador aprendiendo a programar y a diseñar...        
            </motion.h1>
            <motion.div className='imgDeveloper'
            animate={{
                opacity:[0,1]
            }}
            ></motion.div>
        </motion.div>   
    );
}

export default AboutMe1;
