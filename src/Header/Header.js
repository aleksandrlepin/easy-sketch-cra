import React, {Component} from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <div className="logo">
                        <p>&#60; &#8260; &#62;</p>
                    </div>
                    <nav>
                        <ul className="menu">
                            <li>
                                <a className="menu__item menu__item--active" href="#">Home</a>
                            </li>
                            <li>
                                <a className="menu__item" href="#">About</a>
                            </li>
                            <li>
                                <a className="menu__item" href="#">Skills</a>
                            </li>
                            <li>
                                <a className="menu__item" href="#">Contact</a>
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
}
