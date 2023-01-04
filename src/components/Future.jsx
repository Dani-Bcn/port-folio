import React from 'react';
import { useNavigate } from 'react-router-dom';

const Future = () => {
    const navigate = useNavigate()
    return (
        <div className='container-pages'>
            <div className='container-text' id='text-future'>
                <h2>Portfolio</h2>
            </div>
            <div className='container-secction' id='secction-future'>
                <div className='cards-secction-future'>About me</div>
                <div className='cards-secction-future'>Proyects</div>
                <div className='cards-secction-future' onClick={() => navigate("/")}>Skills</div>
                <div className='cards-secction-future' onClick={() => navigate("/")}>Design 3d</div>
            </div>

        </div>
    );
}

export default Future;
