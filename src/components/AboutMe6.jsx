import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe6 = () => {
    const [on, setON] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setON(true)
        },21500)
        setTimeout(()=>{
            setON(false)
        },24000)
    },[])
    return (       
        <div className='pagesAbout'> 
            <AnimatePresence>
                {on &&
                    <motion.div className='aboutMe'
                        initial={{ opacity: 0 ,x:500}}
                        animate={{ opacity: 1 ,x:0}}
                        exit={{ opacity: 0, x:-500}}
                        transition={{duration:0.5}}
                    >               
                        <h1>Tecnologias aprendidas</h1>
                    </motion.div> 
                }          
           </AnimatePresence>    
        </div>      
    )
}

export default AboutMe6;
