import React from 'react';

const Xnav = () => {
    
    const stiks = [15, 25, 35]

    return (
        <div>
            {
                stiks.map((e) => (
                    <div className='xnav'
                        style={{
                            marginTop:`${e}px`
                        }}
                    > </div>
                ))
            }
        </div>
    );
}

export default Xnav;
