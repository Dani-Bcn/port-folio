import React from 'react';

const Xnav = () => {
    
    const stiks = [15, 25, 35]

    return (
        <div>
            {
                stiks.map((e,i) => (
                    <div className='xnav' key={i}
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
