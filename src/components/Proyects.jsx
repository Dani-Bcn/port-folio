import React from 'react';

const Proyects = () => {
    const proyects=["Uno","Dos","tres"]
    return (
        <div className='container-pages'>
            <div className='title-about'>
                <h2>Proyects</h2>
            </div>
            <div className='container-secction-proyects'>
                {
                    proyects.map((e,i)=>(
                        <div className='images-proyects' key={i}>{e}</div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Proyects;
