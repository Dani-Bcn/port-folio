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
            <div className='imgShips'></div>                   
            <h2>Clouds Ships</h2>  
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore enim eius, odio cumque error odit quasi quae repellat voluptatibus doloremque, minus reiciendis repudiandae dolor. Autem cum repellat dicta exercitationem natus.</p>                        
            <a  target="blank" href="https://brickmanager.herokuapp.com/"><h2>Link App</h2></a>                                   
        </motion.div>         
    );
}
export default CloudsShips;
