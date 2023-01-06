import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';
import Footer from './Footer';

const DesignFuture = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleValues = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='container-pages'>
            <div className='container-text'>
                <h2
                    style={{

                        opacity: 1
                    }}
                >Design 3d</h2>
            </div>
            <BackPage />
            <ClickFooter handleValues={handleValues} />
            <Footer values={isOpen} />
        </div>
    );
}

export default DesignFuture;
