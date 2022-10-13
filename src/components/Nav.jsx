import React , {useState,useE }from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {motion,LayoutGroup} from 'framer-motion'

    const Nav = (handleProps) => {    
    const [x,setX] = useState("start")  
    const [changeClass,setChangeClass] = useState("containerEnd")
    const [coco, setCoco] = useState(false)
    const spring = {
        type: "spring",
        stiffness: 300,
        damping:20
      };
      const clickProps=()=>{
      handleProps.props()
      }
     
    return (
        <motion.div className='nav'>                 
            <ul>
                {<NavLink onClick={()=>clickProps()} onMouseOver={()=>setChangeClass("containerStart")}  to="/AboutMe"><h3>Sobre mi</h3></NavLink>} 
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
