import React, {useEffect, useState} from 'react';
//exportar img en background => opacity:[coco,1],backgroundImage:`url(${images[count]})`
import {motion} from 'framer-motion'
import Images from  './Images'

const Design = () => { 
    const[id, setId] = useState(0)
    const links =[
        "DesignRoom",        
        "DesignBug",
        "Designkitchen",
        "Designkitchen2",
        "DesignRoom2",
        "DesignIphone",
        "DesignBathroom",
        "DesignOfice",
        "DesignMagneto",
        "DesignStair",
        "DesignVillage",
        "DesignRobot",
        "DesignCyborg",
    ]

const scale =((event)=>{    
    setId(event.target.id)
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
                        <motion.div  key={img} draggable="false"                   
                        initial={{opacity:0}}
                        whileInView={{      
                            opacity:[0,0,1],
                            scale:[0.5,1]                                    
                          }}
                          transition={{
                            delay:0.1
                          }}>
                          
                              <a href={`/${links[id]}`}><motion.img  id={i} src={img} alt="images" className='imagesDesign'
                   
                              onClick={(event)=>scale(event)}
                               
                            ></motion.img></a>
                  
                          
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
     </div>
    )
}  

export default Design;
