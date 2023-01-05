import React from 'react';
import { useNavigate } from 'react-router-dom';


const BackPage = () => {
    const navigate = useNavigate()
    return (
        <div className='back-page' onClick={() => navigate(-1)}>  </div>
    );
}
export default BackPage;
