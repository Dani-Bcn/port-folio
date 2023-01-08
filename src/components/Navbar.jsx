import React from 'react';


const Navbar = () => {
    const nameLinks=["Linkedin","Github","Domestika","Contact"]
    return (
        
        <div className='container-footer'>
            {
                nameLinks.map((e,i)=>(
                    <h3 key={i}>{e}</h3>
                ))                
            }            
        </div>
    );
}

export default Navbar;
