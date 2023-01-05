import React from 'react';
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';

const DesignFuture = () => {
    return (
        <div className='container-pages'>
            <div className='container-text'>
                <h2
                    style={{

                        opacity: 1
                    }}
                >Design 3d</h2>
            </div>
            <ClickFooter />
            <BackPage/>
        </div>
    );
}

export default DesignFuture;
