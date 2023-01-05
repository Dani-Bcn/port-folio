import React from 'react';
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';

const SkillsFuture = () => {
    return (
        <div className='container-pages'>
            <div className='container-text'>
                <h2
                    style={{
                        opacity: 1
                    }}
                >Skills</h2>
            </div>
            <BackPage/>
            <ClickFooter />
        </div>
    );
}

export default SkillsFuture;
