import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='link-container'>
                <NavLink className='link' to='/'>Home</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
