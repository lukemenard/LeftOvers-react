import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ logOut }) => {
    return (
        <div className='navbar'>
            <div className='link-container'>
                <h4 className='link navbar-title'>LeftOvers</h4>
                <NavLink className='link' to='/'>Fridge</NavLink>
                <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='link' to='/recipe'>Find a Recipe</NavLink>
                <img src='https://image.flaticon.com/icons/svg/126/126467.svg' alt='logout button' className='logout-button' onClick={logOut} />
            </div>
        </div>
    );
}

export default NavBar;
