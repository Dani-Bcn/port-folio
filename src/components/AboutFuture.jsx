import React from 'react';
import BackPage from './BackPage';
import ClickFooter from './ClickFooter';

const AbotmeFuture = () => {
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
            <ClickFooter />
            <BackPage/>
        </div>
    );
}

export default AbotmeFuture;