import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe2 = () => {
    const [on, setOn] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setOn(true)
        },4000)
        setTimeout(()=>{
            setOn(false)
        },8000)
    },[])
    return (    
        <div className='pagesAbout'>  
           <AnimatePresence  >
                {on &&
                <motion.div className='aboutMe'
                    initial={{ opacity: 0 ,x:500}}
                    animate={{ opacity: 1 ,x:0}}
                    exit={{ opacity: 0 ,x:-500}}
                    transition={{duration:0.5}}
                >               
                    <div className='imgAboutMe2'></div>
                    <h1>...hasta que decidí dar un paso adelante, dejé mi puesto de trabajo, en el cual llevaba 6 años y me aventuré a conseguir mis objetivos...</h1>
                </motion.div> 
                }           
            </AnimatePresence>     
        </div>             
     
    )
}

export default AboutMe2;
