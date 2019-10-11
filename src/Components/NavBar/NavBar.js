import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = ({ logOut }) => {
    return (
        <div className='navbar'>
            <div className='link-container'>
                <NavLink className='link' to='/'>Food</NavLink>
                <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='link' to='/recipe'>Find a Recipe</NavLink>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
}

export default NavBar;
