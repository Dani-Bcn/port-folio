import React , {useEffect,useState} from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const CloudsShips = () => { 
const handleLink=(()=>{
 
})
    return (
        <motion.div className='cardProyect'
            animate={{
                opacity:[0,1],
                x:[-100,0]
            }}        
        >        
            <motion.div className='imgShips'
               drag
               dragConstraints={{
                 top: -1,
                 left: -1,
                 right: 1,
                 bottom: 1,
               }}
               onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://google.com';
                }}            
          >
            </motion.div>  
            <div className='textProyect'>
                <h1>Ships clouds</h1>  
                <h3>Juego de naves para escritorio en 2d</h3>        
                <h3>Tecnologias utilizadas</h3>            
                <h3>HTML5, CSS, Canvas, JavaScript</h3>             
            </div>   
          
        </motion.div>         
    );
}
export default CloudsShips;
