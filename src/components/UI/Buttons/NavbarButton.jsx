import React from 'react';

import classes from './MyButton.module.css';

const NavbarButton = ({children, ...props}) => {
    return (
        <button {...props} className = {classes.MyBtnNav}>
            {children}
        </button>
    );
};

export default NavbarButton;