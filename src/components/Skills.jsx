import React from 'react';

const Skills = () => {
    const skills = ["Html", "Css", "JavaScript", "React", "Express", "Node", "MongoDb", "MongoAtlas", "Postman", "npm", "Github", "Git", "Heroku", "Cloudinary", "Netlify"]
    return (
        <div className='container-pages'>
            <div className='title-about'>
                <h2>Skills</h2>
            </div>
            <div className='container-secction-skills'>
                {
                    skills.map((e, i) => (
                        <div key={i} className='cards-skills'>img({e})</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
