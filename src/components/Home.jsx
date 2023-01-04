import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'

const Home = () => {
    const navigate = useNavigate()
    const workdsTitle = ["Welcome", "I'm Dani", "Chosse your theme"]
    const cardsSecction = ["Pofessional", "Crazy", "Minimlist"]

    return (
        <m.div className='container-pages'
            animate={{
                opacity: [0, 0, 1],
                transition: {
                    duration: 1,
                    ease: "circOut"
                }
            }}
            exit={{
                opacity: [1, 0], transition: {
                    duration: 0.5,
                    delay: 2.5,
                    ease: "circOut"
                }
            }}
        >
            <m.div className='container-text'>
                {
                    workdsTitle.map((e, i) => (
                        <m.h3 key={i}
                            animate={{
                                opacity: [0, 1],
                                height: [0, 75],
                                transition: {
                                    delay: 1,
                                    duration: 1,
                                    ease: "circOut"
                                }
                            }}
                            exit={{
                                height: [75, 0]
                            }}
                        >{e}</m.h3>
                    ))
                }
            </m.div>
            <m.div className='container-secction'>
                {
                    cardsSecction.map((e, i) => (
                        <m.div key={i} className='cards-secction' onClick={() => navigate("/future")}
                            animate={{
                                opacity: [0,  1],
                                x: [300, 0],
                                transition: {
                                    delay: 2 + i / 2,
                                    duration: 1.5,
                                    ease: "circOut"
                                }
                            }}
                            exit={{
                                opacity: [1,0],
                                x: [0, -500],
                                transition: {
                                    delay: 1+i / 2,
                                    duration: 1,
                                    ease: "circIn"
                                }
                            }}
                        >{e}</m.div>
                    ))
                }
            </m.div>
        </m.div>
    );
}

export default Home;
