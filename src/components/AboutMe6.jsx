import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe6 = () => {
    const [on, setOn] = useState(false)
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
                        <h1>Tecnologias aprendidas</h1>
                        <motion.div className='line'
                            animate={{
                                
                            }}
                        ></motion.div>
                    </motion.div> 
                }          
           </AnimatePresence>    
        </div>      
    )
}

export default AboutMe6;
