import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import EasyBrick from './EasyBrick';

const Proyects = () => {
    const slide=[<EasyBrick/>,"coco"]
    const [count, setCount] = useState(0)
    return (     
        <div className='container'>
               <h1>Proyectos</h1>      
            <span>
                <button>Hola</button>
                {slide[count]}   
                <button>Hola</button> 
            </span>                  
        </div>       
    );
}
export default Proyects
    