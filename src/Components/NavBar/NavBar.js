import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='link-container'>
                <NavLink className='link' to='/fridge'>Food</NavLink>
                <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='link' to='/recipe'>Find a Recipe</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
