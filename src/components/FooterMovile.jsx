import { React, useState } from 'react';
import { motion as m } from 'framer-motion'

const FooterMovile = () => {
  const links = ["Linkedin", "Highub", "Domestika", "Contact"]
  const pages = ["https://www.linkedin.com/in/daniperezbnc/", "https://github.com/Dani-Bcn", "https://www.domestika.org/es/nneodani"]
  const [isOpen, setIsOpen] = useState(false)
  const variantsFooter = {
    open: {
      opacity:1,
      scale: [1, 2],
      x: [70, -130],
      y: [-70, 75],
      rotate: [50, 0],
      transition: {
        duration: 1,
        ease: "circOut"
      }
    },
    closed: {
      opacity:[0,1],
      scale: [2, 1],
      x: [-130, 70],
      y: [75, -70],
      rotate: [0, 45],
      transition: {
        delay: 1,
        duration: 1.5,
        ease: "circOut"
      }
    }
  }
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
        duration: 1.5,
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
          <m.a key={i} href={pages[i]} target="blank"
            variants={variantsPages}
            animate={isOpen ? "open" : "closed"}>
            <m.div>{e}</m.div>
          </m.a>
        ))
      }

    </m.div>
  )
}

export default FooterMovile;
