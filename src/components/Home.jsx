
import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion'

const Home = () => {
const[top,setTop] =useState(0)

useEffect(() => {  
    const coco =setInterval(()=>{
        setTop(top => top + 1)
        myFunction(top)
        clearInterval(coco)
        if(top > 1000){
            setTop(1)
        }
    },100)
})
function myFunction() {    
    document.getElementById("page").style.backgroundPositionX=`${1}px`; 
    document.getElementById("page").style.backgroundPositionY=`${top* 5}px`;    
}
    return (
        <div className='container'>      
            <motion.h1 id="page" className='pageHome'
            animate={{
              opacity:[0,1]
            }}            
                transition={{
                    duration:3,
                }}
            >Daniel Pérez</motion.h1>
        </div>
    );
}
export default Home;
