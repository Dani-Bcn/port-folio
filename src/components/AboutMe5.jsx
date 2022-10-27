import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe5 = () => {
    const [on, setOn] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setOn(true)
        },17000)
        setTimeout(()=>{
            setOn(false)
        },21000)
    },[])
  
    return (       
        <div className='pagesAbout'>        
            <AnimatePresence>
                {on &&
                    <motion.div className='aboutMe'
                        initial={{ opacity: 0 ,x:500}}
                        animate={{ opacity: 1 ,x:0}}
                        exit={{ opacity: 0 ,x:-500}}
                        transition={{duration:0.5}}
                    >               
                        <div className='imgAboutMe5'></div>
                        <h1>...al final después de haber sacrificado durante varios meses mucha vida social, conseguí graduarme... pero un momento esto solo es el principio, aún no he conseguido todos mis objetivos...</h1>            
                    </motion.div>                     
                }                       
           </AnimatePresence>          
        </div>      
    )
}
export default AboutMe5;
