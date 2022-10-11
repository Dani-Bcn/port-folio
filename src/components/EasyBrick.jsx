import React from 'react';
import {motion} from 'framer-motion'

const EasyBrick = () => {
    return (
        <motion.div className='cardProyect'
            animate={{
                opacity:[0,1]
            }}
        
        >        
            <div className='imgBrick'></div>                   
            <h2>Easy brick manager </h2>  
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore enim eius, odio cumque error odit quasi quae repellat voluptatibus doloremque, minus reiciendis repudiandae dolor. Autem cum repellat dicta exercitationem natus.</p>                        
            <a  target="blank" href="https://brickmanager.herokuapp.com/"><h2>Link App</h2></a>                          
         
        </motion.div>         
    );
}
export default EasyBrick;
