import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe4 = () => {
    const [on, setOn] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setOn(true)
        },12000)
        setTimeout(()=>{
            setOn(false)
        },16500)
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
                        <div className='imgAboutMe4'></div>
                        <h1>...las emociones oscilaban como en montaña rusa.. miedos, fustraciones, dudas, pero tambien...muchas satisfactiones a diferentes niveles...</h1>
                    </motion.div> 
                }          
           </AnimatePresence>    
      
        </div>      
    )
}
export default AboutMe4;
