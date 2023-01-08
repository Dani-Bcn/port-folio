import React from 'react';

const Xfooter = () => {
    const stiks = [15, 25, 35]

    return (
        <div>
            {
                stiks.map((e) => (
                    <div className='xfooter'
                        style={{
                            marginBottom:`${e}px`
                        }}
                    > </div>
                ))
            }
        </div>
    );
}

export default Xfooter;
