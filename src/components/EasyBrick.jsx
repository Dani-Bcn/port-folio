import React , {useEffect,useState} from 'react';
import {motion} from 'framer-motion'

const EasyBrick = () => {

    return (
        <motion.div className='cardProyect'
            animate={{
                opacity:[0,1],
                x:[100,0]
            }}        
        >        
            <motion.div className='imgBrick'
               drag
               dragConstraints={{
                 top: -1,
                 left: -1,
                 right: 1,
                 bottom: 1,
               }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://brickmanager.herokuapp.com/";
                }}    
                ></motion.div>
                <div className='textProyect'>
                <h1>Easy Brick Manager</h1>  
                <h3>App para la gestión de piezas de lego</h3> 
                <h3>Tecnologias utilizadas</h3> 
                <h3>HTML5, CSS, JavaScript,Mongosse, Handlebars, MongoDb </h3>           
            </div> 
        </motion.div>         
    );
}
export default EasyBrick;
