import { React, useState } from 'react';
import { motion as m } from 'framer-motion'
import Image1 from '../img/Ships.png'
import Image2 from '../img/Brick-manager.png'
import Image3 from '../img/HomeWorksKids.png'

const Proyects = () => {
    const images = [Image1, Image2, Image3]
    const [isOpen, setIsOpen] = useState(true)
    const variantsImages1 = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        closed: {
            y: 500,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='container-pages'>
            <div className='title-about'>
                <h2>Proyects</h2>
            </div>
            <div className='container-secction-proyects'>
                {
                    // onClick={() => setIsOpen(!isOpen)}
                    images.map((e, i) => (
                        <div key={i} 
                            style={{
                                position:"relative"
                            }}
                        >
                            <m.div className='images-proyects' id={i}
                                style={{
                                    backgroundImage: `url(${e})`,
                                    zIndex:3,
                                }}
                                whileTap={{
                                    opacity:0
                                }}                               
                            >                        
                            </m.div>
                                    <m.div className='back-images-proyects'
                                    variants={variantsImages1}
                                    animate={
                                        isOpen ? "open" : "closed"
                                    }
                                 
                                ><h2>coco</h2>
                                </m.div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Proyects;
