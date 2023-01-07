import React from 'react';

const Skills = () => {
    const skills = ["coco"]
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
