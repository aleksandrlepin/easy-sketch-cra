import React from 'react';
import './Header.css';
import Logo from '../common/Logo/Logo';
import Menu from './Menu/Menu';
import Caption from './Caption/Caption';

function Header () {
    return (
        <header className="header" id="home">
            <div className="header__container">
                <Logo className="logo" />
                <Menu />
            </div>
            <Caption />
        </header>
    );
}

export default Header;
