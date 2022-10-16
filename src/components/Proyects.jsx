import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import EasyBrick from './EasyBrick'
import HomeWork from './HomeWork'
import CloudsShips from './CloudsShips'

const Proyects = () => {

    const slide=[<CloudsShips/>,<EasyBrick/>,<HomeWork/>]
    const [displayLeft, setDisplayLeft]  = useState(1)
    const [displayRight, setDisplayRight] = useState(1)
    const [sumLeft, setSumLeft] = useState(1)
    const [sumRight, setSumRight] = useState(1)
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        if(count > 1 ){
            setDisplayLeft(0)
            setSumRight(0)
        }else{
            setDisplayLeft(1)
            setSumRight(1)
        }
        if(count < 1 ){
            setDisplayRight(0)
            setSumLeft(0)
          
        }else{
            setDisplayRight(1)
            setSumLeft(1)
        }       
    })   
        const slideRight=(()=>{
        setCount(count => count + sumRight)
        }) 
        const slideLeft=(()=>{
            setCount(count => count - sumLeft)
        })   
    return (     
        <div className='container'>   
            <span>
                <motion.button className='btnLeft' onClick={()=>slideLeft()}
                    animate={{             
                       opacity:displayRight,               
                    }}                   
                ></motion.button>
                {slide[count]}   
                <motion.button className='btnRight' onClick={()=>slideRight()}
                    animate={{             
                        opacity:displayLeft,
                    }}  
                ></motion.button>
            </span>             
            <span className='rotate'><h3>Puedes girar tu terminal </h3><motion.div className='arrows'
                animate={{
                    rotate:360
                }}
                transition={{
                    duration:20,
                    repeat:Infinity,
                    ease: "linear" 
                }}
            ></motion.div></span>
        </div>       
    )
}
export default Proyects
    