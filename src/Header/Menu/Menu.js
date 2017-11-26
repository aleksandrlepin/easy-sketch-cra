import React from 'react';
import './Menu.css';

function Menu () {
    return (
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
    );
}

export default Menu;
