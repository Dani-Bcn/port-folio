import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import EasyBrick from './EasyBrick'
import HomeWork from './HomeWork'
import CloudsShips from './CloudsShips'

const Proyects = () => {
    const slide=[<CloudsShips/>,<EasyBrick/>,<HomeWork/>]
    const [displayLeft,setDisplayLeft] = useState(0)
    const [displayRight,setDisplayRight] = useState(0)
    const [count, setCount] = useState(1)
    useEffect(()=>{
        if(count < 1 ){
            setDisplayLeft(-250)
        }else{
            setDisplayLeft(0)
        }
        if(count > 1 ){
            setDisplayRight(250)
        }else{
            setDisplayRight(0)
        }
       
    })
 

   
          const slideRight=(()=>{
        setCount(conut => count +1)
        }) 
        const slideLeft=(()=>{
            setCount(conut => count -1)
        })   
    return (     
        <div className='container'>
            <h1>Proyectos</h1>      
            <span>
                <motion.button className='btnLeft' onClick={()=>slideLeft()}
                    animate={{
                       x:displayLeft,
                        opacity:[0,1]                        
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 50
                    }}
                ></motion.button>
                {slide[count]}   
                <motion.button className='btnRight' onClick={()=>slideRight()}
                    animate={{
                        x:displayRight,
                        opacity:[0,1]
                    }}    transition={{ 
                        type: "spring",                       
                        stiffness: 50,                       
                    }}
                ></motion.button>
            </span>                  
        </div>       
    )
}
export default Proyects
    