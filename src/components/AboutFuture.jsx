import { React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion'
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';
import Footer from './Footer';

const AbotmeFuture = () => {
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
                >About me</h2>
            </div>
            <div className='container-secction'>
                <div></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sapiente tempore iste, amet illum numquam vel odio vitae placeat soluta, harum labore quis mollitia. Fuga blanditiis vel veritatis dolorum modi?</p>
            </div>
            <BackPage/>
            <ClickFooter handleValues={handleValues} />
            <Footer values={isOpen} />         
        </div>
    );
}

export default AbotmeFuture;
