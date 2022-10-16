import React, {useEffect, useState} from 'react';
//exportar img en background => opacity:[coco,1],backgroundImage:`url(${images[count]})`
import {motion} from 'framer-motion'
import Images from  './Images'



const Design = () => {
  
  
    return (
     <div className='container'>
        <motion.div className='containerImages'>
            <motion.div drag="x" className='innerImages'
            dragConstraints={{
                right:0,
                left:-4000
                }}>
                {Images.map((img)=>{
                    return (
                        <motion.div className='img'                    
                        initial={{opacity:0}}
                        whileInView={{      
                            opacity:[0,0,1]  ,
                            scale:[0.5,1]                                    
                          }}
                          transition={{
                            delay:0.3
                          }}>
                            <motion.img src={img} alt="images"
                                whileTap={{
                                    scale:2
                                }}
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
