import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/home'>Home</Link>
                <Link to='/vocabulary'>Your vocabulary</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;