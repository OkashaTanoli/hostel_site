import React from 'react';
import Logo from '../../images/logo.png'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='first'></div>
            <img src={Logo} alt="Logo" />
        </div>
    );
}

export default Header;