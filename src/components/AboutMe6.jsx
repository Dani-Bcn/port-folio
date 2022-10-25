import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'
import ImgLogos from  './ImgLogos'
import ImgLogosDesign from  './ImgLogosDesign'

const AboutMe6 = () => {
    const [on, setOn] = useState(false)    
    const [count, setCount] = useState(0)
    const [active, setActive] = useState([false,false]) 
    useEffect(()=>{
        setTimeout(()=>{
            setOn(true)        
        },21500)
        // setTimeout(()=>{
        //     setOn(false)
        // },24000)       
    },[])
    return (       
        <div className='pagesAbout'> 
            <AnimatePresence>
                {on &&
                    <motion.div className='aboutMe'
                        initial={{ opacity: 0 ,x:500}}
                        animate={{ opacity: 1 ,x:0}}                      
                        transition={{duration:0.5}}
                    >               
                        <h2>Tecnologías aprendidas</h2>     
                        {ImgLogos.map((e)=>{
                        return(
                            <div >
                                <img className='imgLogos' src={e}></img>    
                            </div>                        
                       )
                    })}          
                      <h2>Diseño y animación web</h2>   
                      {ImgLogosDesign.map((e)=>{
                        return(
                            <div >
                                <img className='imgLogos' src={e}></img>    
                            </div>                        
                       )
                    })}                             
                  </motion.div>                   
                }            
           </AnimatePresence>    
        </div>      
    )
}
export default AboutMe6;
