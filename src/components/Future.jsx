import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';

const Future = () => {
    const navigate = useNavigate()
    const handleSecction = ["About me", "Proyects", "Skills", "Design 3d"]

    const linksPages = ((i) => {
        switch (i) {
            case 0: {
                { navigate("/aboutfuture") }
            }
                break;
            case 1: {
                { navigate("/proyectsfuture") }
            }
                break;
            case 2: {
                { navigate("/skillsfuture") }
            }
                break;
            case 3: {
                { navigate("/designfuture") }
            }
        }
    })
    return (
        <m.div className='container-pages' >
            <div className='container-text' id='text-future'>
                <m.h2
                    whileInView={{
                        x: [100, 0],
                        opacity: [0, 1],
                    }}
                    exit={{
                        x: [0, -100],
                        opacity: [1, 0],
                        transition: {
                            delay: 1
                        }
                    }}
                >Portfolio</m.h2>
            </div>
            <m.div className='container-secction' id='secction-future'>
                {
                    handleSecction.map((e, i) => (
                        <m.div key={i} className='cards-secction-future' onClick={() => linksPages(i)}
                            whileInView={{
                                opacity: [0, 1],
                                clipPath: ["polygon(0% 0%, 0% 0%, 40% 100%, 40% 100%)", "polygon(0% 0%, 60% 0%, 100% 100%, 40% 100%)"],
                                transition: {
                                    duration: 0.5,
                                    delay: 0.7 + i / 3,
                                    ease: "circOut"
                                }
                            }}
                            exit={{
                                opacity: [1, 1, 0],
                                clipPath: ["polygon(0% 0%, 60% 0%, 100% 100%, 40% 100%)", "polygon(0% 0%, 0% 0%, 40% 100%, 40% 100%)"],
                                transition: {
                                    duration: 0.5,
                                    delay: i / 3,
                                    ease: "circOut"
                                }
                            }}
                        >{e}</m.div>
                    ))
                }
            </m.div>
            <ClickFooter />
            <BackPage />
        </m.div>
    );
}

export default Future;
