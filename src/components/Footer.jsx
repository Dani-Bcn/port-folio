import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    
    return (
        <div className='footer'>
            <ul>
                <a  target="blank" href='https://www.linkedin.com/in/daniperezbnc/'><li><div className='imgLinke'></div></li></a>
                <a  target="blank" href='https://www.domestika.org/es/nneodani/portfolio'><li><div className='imgDomest'></div></li></a>
                <a  target="blank" href='https://github.com/Dani-Bcn'><li><div className='imgGitHub'></div></li></a>
                {<NavLink  to="/Contact" className="imgContact"></NavLink>} 
            </ul>
        </div>
    );
}
export default Footer;
