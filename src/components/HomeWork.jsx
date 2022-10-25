import React from 'react';
import {motion} from 'framer-motion'

const EasyBrick = () => {
    return (
        <motion.div className='cardProyect'        
            animate={{
                opacity:[0,1],
                x:[100,0]
            }}        
        >   
        <motion.div className='imgHome'
            drag
            dragConstraints={{
                top: -1,
                left: -1,
                right: 1,
                bottom: 1,
            }}
            onClick={(e) => {
                e.preventDefault();
                window.location.href="https://homework-kids.netlify.app/" ;
            }} 
            ></motion.div>                              
             <div className='textProyect'>
                <h1>Homerwork for kids</h1> 
                <h3>App creada para gestionar las tereas de casa de los niños.</h3>
                <h3>Tecnologias utilizadas</h3>    
                <h3>HTML5, CSS ,JavaScript,React, React router dom, Node.js, Express, MongoDB, Mongoose, Postman </h3>
            </div>         
        </motion.div>         
    );
}
export default EasyBrick;
