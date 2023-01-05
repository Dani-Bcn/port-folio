import { React, useState } from 'react';
import { motion as m } from 'framer-motion'

const FooterMovile = () => {
  const links = ["Linkedin", "Highub", "Domestika", "Contact"]
  const pages = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani"]
  const [isOpen, setIsOpen] = useState(false)
  const variantsPages = {
    open: {
      y: [150, 0],
      transition: {
        delay: 0.5,
        duration: 1.5,
      }
    },
    closed: {
      y: [0, 250],
      transition: {
        delay: 0.5,
        duration: 1.5,
      }
    }
  }
  const variantsFooter = {
    open: {
      scale: [1, 2],
      x: [0, -125],
      y: [0, 100],
      clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      transition: {
        duration: 1,
        ease: "circOut"
      }
    },
    closed: {
      scale: [2, 1],
      x: [-125, 0],
      y: [100, 0],
      clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 0%)",
      transition: {
        duration: 1,
        ease: "circOut"
      }
    }
  }
  return (
    <m.div className='footer-movile' id='movile' onClick={() => setIsOpen(!isOpen)}
      variants={variantsFooter}
      animate={isOpen ? "open" : "closed"}
    >
      {
        links.map((e, i) => (
          <m.a href={pages[i] } target="blank"
            variants={variantsPages}
            animate={isOpen ? "open" : "closed"}>
            <m.div key={i}

            >{e}</m.div>
          </m.a>
        ))
      }

    </m.div>
  )
}

export default FooterMovile;
