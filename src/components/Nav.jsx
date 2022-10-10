import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {    
    return (
        <div className='nav'>
           <ul>
                {<NavLink className={(element) => element.isActive ? 'selected' : ''} to="./AboutMe"><h3>Sobre mi</h3></NavLink>} 
                {<NavLink  to="/Proyects"><h3>Proyectos</h3></NavLink>}  
                {<NavLink  to="/Design"><h3>Diseños 3D</h3></NavLink>}                                    
           </ul>
        </div>
    );
}

export default Nav;
