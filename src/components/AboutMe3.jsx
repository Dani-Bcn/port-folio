import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe3 = () => {
    const [on, setON] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setON(true)
        },8500)
        setTimeout(()=>{
            setON(false)
        },11500)
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
                <div className='imgAboutMe3'></div>
                <h1>...me inscribí en Ironhack y descubrí un mundo totalmente diferente para mi lleno de nuevos retos..</h1>
            </motion.div> 
            }          
           </AnimatePresence> 
             
        </div>      
    )
}

export default AboutMe3;
