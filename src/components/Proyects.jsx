import React from 'react';

const Proyects = () => {
    const proyects = ["Uno", "Dos", "tres"]
    return (
        <div className='container-pages'>
            <div className='title-about'>
                <h2>Proyects</h2>
            </div>
            <div className='container-secction-proyects'>
                {
                    proyects.map((e, i) => (
                        <div>
                            <h3 key={i}>{e}</h3>
                            <div className='images-proyects'></div>
                        </div>

                    ))
                }

            </div>
        </div>
    );
}

export default Proyects;
