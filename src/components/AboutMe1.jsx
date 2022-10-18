import React,{useState,useEffect} from 'react';
import{motion,AnimatePresence} from 'framer-motion'

const AboutMe1 = () => {
    const [on, setON] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setON(true)
        },500)
        setTimeout(()=>{
            setON(false)
        },3500)
    },[]) 
    return (       
        <div className='pagesAbout'>          
            <AnimatePresence >
                 {on &&
                    <motion.div className='aboutMe'
                        initial={{ opacity: 0 ,x:500}}
                        animate={{ opacity: 1 ,x:0}}
                        exit={{ opacity: 0 ,x:-500}}
                        transition={{duration:0.5}}
                    >               
                        <div className='imgAboutMe1'></div>
                        <h1>Apasionado del diseño gráfico y de la programación, cada vez más ocupaba mi tiempo de ocio en aprender a programar y a diseñar </h1>

                    </motion.div> 
                }          
            </AnimatePresence>    
        </div>
       
    )
}
export default AboutMe1;