import { React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';
import Footer from './Footer';

const Home = () => {
    const navigate = useNavigate()
    const workdsTitle = ["Welcome", "I'm Dani", "Chosse your theme"]
    const cardsSecction = ["Pofessional", "Crazy", "Minimalist"]
    const [isOpen, setIsOpen] = useState(false)
    const handleValues = () => {
        setIsOpen(!isOpen)

    }
    useEffect(() => {
          if (isOpen === true) {
        document.getElementById("pages").style.filter = "grayscale(80%)"
    }else{
        document.getElementById("pages").style.filter = "grayscale(0)"
    }
    },[isOpen])
  
    return (
        <m.div className='container-pages' id="pages">
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
                                opacity: [1, 0],
                                height: [75, 0],
                                transition: {
                                    duration: 1.5,
                                    ease: "circIn"
                                }
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
                                opacity: [0, 1],
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
                                    delay: 0.3 + i / 2.5,
                                    duration: 1,
                                    ease: "circIn"
                                }
                            }}
                        >{e}</m.div>
                    ))
                }
            </m.div>
            <BackPage />
            <ClickFooter handleValues={handleValues} />
            <Footer values={isOpen} />
        </m.div>
    );
}

export default Home;
