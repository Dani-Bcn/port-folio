import React , {useEffect,useState} from 'react';
import {motion} from 'framer-motion'

const CloudsShips = () => {

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
            ></motion.div>                   
            <h2>Ships clouds</h2>  
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore enim eius, odio cumque error odit quasi quae repellat voluptatibus doloremque, minus reiciendis repudiandae dolor. Autem cum repellat dicta exercitationem natus.</p>                        
            <a  target="blank" href="https://brickmanager.herokuapp.com/"><h4>Link App</h4></a>                                   
        </motion.div>         
    );
}
export default CloudsShips;
