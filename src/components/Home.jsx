import React from 'react';
import { motion as m } from 'framer-motion'

const Home = () => {
    return (
        <m.div className='container-home'
            animate={{
                opacity: [0, 1],
                transition: {
                    duration: 1,
                }
            }}
            exit={{

                transition: {
                    delay: 3,
                    duration: 3,
                }
            }}>
            <div className='container-text-home'>
                <h2>I'm </h2>
                <h2>Dani Pérez</h2>
                <h4>Full Stack Developer</h4>
            </div>
            <div className='container-image-home'>
                <div id="ball"
                    style={{
                        position: "absolute",
                        width: 350,
                        height: 350,
                        top: 300,
                        backgroundColor: "wheat",
                        borderRadius: "100%",
                        zIndex: "1"
                    }}
                ></div>
                <div className='img-home'></div>
            </div>
        </m.div>
    );
}

export default Home;
