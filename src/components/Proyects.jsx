import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import EasyBrick from './EasyBrick'
import HomeWork from './HomeWork'
import CloudsShips from './CloudsShips'

const Proyects = () => {
    const slide=[<CloudsShips/>,<EasyBrick/>,<HomeWork/>]
    const [displayLeft,setDisplayLeft]  = useState("flex")
    const [displayRight, setDisplayRight] = useState("flex")
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        if(count > 1 ){
            setDisplayLeft("none")
        }else{
            setDisplayLeft("flex")
        }
        if(count < 1 ){
            setDisplayRight("none")
        }else{
            setDisplayRight("flex")
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
            <span>
                <motion.button className='btnLeft' onClick={()=>slideLeft()}
                    animate={{             
                        display:["flex",displayRight],               
                    }}                   
                ></motion.button>
                {slide[count]}   
                <motion.button className='btnRight' onClick={()=>slideRight()}
                    animate={{             
                        display:["flex",displayLeft],
                    }}  
                ></motion.button>
            </span>                  
        </div>       
    )
}
export default Proyects
    