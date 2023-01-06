import { React, useState, useEffect } from 'react';
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';
import Footer from './Footer';

const ProyectsFuture = () => {
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
                >Proyects</h2>
            </div>
            <BackPage />
            <ClickFooter handleValues={handleValues} />
            <Footer values={isOpen} />
        </div>
    );
}

export default ProyectsFuture;
