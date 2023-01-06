import React from 'react';

const Home = () => {
    return (
        <div className='container-home'>
            <div className='container-text-home'>
          
                <h2>I'm </h2>
                <h2>Dani Pérez</h2>
                <h4>Full Stack Developer</h4>
            </div>
            <div className='container-image-home'>
                <div
                    style={{
                        position:"absolute",
                        width:350,
                        height:350,
                        top:300,
                        backgroundColor:"wheat",
                        borderRadius:"100%",
                        zIndex:"1"
                    }}
                ></div>
                <div className='img-home'></div>
            </div>
        </div>
    );
}

export default Home;
