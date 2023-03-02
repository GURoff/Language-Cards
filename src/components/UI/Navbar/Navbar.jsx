import React from 'react';
import { Link } from "react-router-dom";

const NavbarModern = () => {
    return (
        //NavbarModern
        // <div>
        //     <nav class="menu">

        //         <input type="radio" name="nav-item" id="m-home" checked /><label htmlFor="m-home">Home</label>
        //         <input type="radio" name="nav-item" id="m-search" /><label htmlFor="m-search">Search</label>
        //         <input type="radio" name="nav-item" id="m-notification" /><label htmlFor="m-notification">Notification</label>
        //         <input type="radio" name="nav-item" id="m-favorites" /><label htmlFor="m-favorites">Favorites</label>
        //         <input type="radio" name="nav-item" id="m-profile" /><label htmlFor="m-profile">Profile</label>

        //         <div class="selector"></div>
        //     </nav>
        // </div>

        //Old Navbar

        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/home'>Home </Link>
                <Link to='/vocabulary'>Your vocabulary </Link>
                <Link to='/profile'>Your profile </Link>
                <Link to='/testpage'>Test Page </Link>
                <Link to='/about'>About </Link>
            </div>
        </div>
    );
};
//export default Navbar;
export default NavbarModern;