import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'

const Home = () => {
    const navigate = useNavigate()
    const workdsTitle = ["Welcome", "I'm Dani", "Chosse your theme"]
    const cardsSecction = ["Pofessional", "Crazy", "Minimlist"]

    return (
        <m.div className='container-pages' >
            <m.div className='container-text'>
                {
                    workdsTitle.map((e, i) => (
                        <m.h3 key={i}
                           whileInView={{
                                opacity: [0, 1],
                                height: [0, 75],
                                transition: {
                                    duration: 1.5,
                                    ease: "circOut"
                                }
                            }}
                            exit={{
                                opacity: [1, 0, 0],
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
                           whileInView={{
                            opacity:[0,1],
                                x: [50, 0],
                                transition: {
                                    delay: 0.5 + i / 2.5,
                                    duration: 1.5,
                                    ease: "circOut"
                                }
                            }}
                            exit={{
                                opacity: [1, 0],
                                x: [0, -100],
                                transition: {
                                    delay: 0.3 + i / 3,
                                    duration: 0.5,
                                    ease: "circOut"
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
