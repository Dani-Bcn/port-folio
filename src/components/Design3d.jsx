import React from 'react';

const Design = () => {
    const skills = ["Html", "Css", "JavaScript", "React", "Express", "Node", "MongoDb", "MongoAtlas", "Postman", "npm", "Github", "Git", "Heroku", "Cloudinary", "Netlify"]
    return (
        <div className='container-pages'>
            <div className='title-about'>
                <h2>Designs 3d</h2>
            </div>
            <div className='container-secction-skills'>
                {
                    skills.map((e, i) => (
                        <div key={i}className='cards-skills'>img({e})</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Design;
