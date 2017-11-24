import React from 'react';
import './Header.css';
import Logo from '../common/Logo/Logo'

function Header () {
    return (
        <header className="header" id="home">
            <div className="header__container">
                <Logo className="logo" />
                <nav>
                    <ul className="menu">
                        <li>
                            <a className="menu__item menu__item--active" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="menu__item" href="#about">About</a>
                        </li>
                        <li>
                            <a className="menu__item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu__item" href="#contacts">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="caption">
                <h1>Name Surname</h1>
                <p>Front-end developer</p>
            </div>
        </header>
    );
}

export default Header;
