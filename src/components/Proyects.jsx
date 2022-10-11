import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import EasyBrick from './EasyBrick';
import HomeWork from './HomeWork';

const Proyects = () => {
    const slide=[<EasyBrick/>,<HomeWork/>]
    const [count, setCount] = useState(0)

          const slideRight=(()=>{
        setCount(conut => count -1)
        }) 
        const slideLeft=(()=>{
            setCount(conut => count +1)
        }) 

  
    return (     
        <div className='container'>
               <h1>Proyectos</h1>      
            <span>
                <button onClick={()=>slideRight()}>Hola</button>
                {slide[count]}   
                <button  onClick={()=>slideLeft()} >Hola</button> 
            </span>                  
        </div>       
    );
}
export default Proyects
    