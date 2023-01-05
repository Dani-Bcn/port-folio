import { React, useState } from 'react';
import { motion as m } from 'framer-motion'

const ClickFooter = (props) => {

    const { handleValues } = props 
       
    return (
        <div className='click-footer-page'  onClick={(e)=>handleValues(e)}> </div>
    )
}

export default ClickFooter;
