import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import AboutMe1 from './AboutMe1';
import AboutMe2 from './AboutMe2';
import AboutMe3 from './AboutMe3';
import AboutMe4 from './AboutMe4';
import AboutMe5 from './AboutMe5';
import AboutMe6 from './AboutMe6';

const PageAboutMe = () => {
 
    return (
        <div className='containerAbout'>
            <AboutMe1/>
            <AboutMe2/>
            <AboutMe3/>
            <AboutMe4/>
            <AboutMe5/>
            <AboutMe6/> 
        </div>
    );
}
export default PageAboutMe;
