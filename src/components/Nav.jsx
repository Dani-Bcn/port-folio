import React , {useState}from 'react';
import { NavLink} from 'react-router-dom';
import {motion} from 'framer-motion'

    const Nav = () => {    
    const [changeClass,setChangeClass] = useState("containerEnd")
    const spring = {
        type: "spring",
        stiffness: 300,
        damping:20
      };    
     
    return (
        <motion.div className='nav'>                 
            <ul>
                {<NavLink  onMouseOver={()=>setChangeClass("containerStart")}  to="/PageAboutMe"><h3>Sobre mi</h3></NavLink>} 
                {<NavLink  onMouseOver={()=>setChangeClass("containerCenter")} to="/Proyects"><h3>Proyectos</h3></NavLink>}  
                {<NavLink   onMouseOver={()=>setChangeClass("containerEnd")} to="/Design"><h3>Diseños 3D</h3></NavLink>}                                    
            </ul>
            {console.log(changeClass)}
            <motion.div   className={changeClass}>           
                <motion.div layout transition={spring} className='underLine'></motion.div>    
            </motion.div>   
        </motion.div>
    );
}
export default Nav;
