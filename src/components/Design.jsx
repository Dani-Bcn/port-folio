import React, {useEffect, useState} from 'react';
//exportar img en background => opacity:[coco,1],backgroundImage:`url(${images[count]})`
import {motion} from 'framer-motion'
import Images from  './Images'



const Design = () => {  

const scale =((event)=>{

    console.log(event.target.id)
})

    return (
     <div className='container'>      
        <motion.div className='containerImages'>
            <motion.div  className='innerImages'
            dragConstraints={{
                right:0,
                left:-4000
                }}>
                {Images.map((img,i)=>{
                    return (
                        <motion.div  key={img} draggable="false" className='img'                    
                        initial={{opacity:0}}
                        whileInView={{      
                            opacity:[0,0,1],
                            scale:[0.5,1]                                    
                          }}
                          transition={{
                            delay:0.1
                          }}>
                            <motion.img  id={i} src={img} alt="images"
                               onClick={(event)=>scale(event)}
                            ></motion.img>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
     </div>
    )
}  

export default Design;
