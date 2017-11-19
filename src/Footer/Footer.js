import React, {Component} from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <ul>
                    <li><span>Mobile:</span> +38066-66-66-666</li>
                    <li><span>Email:</span> mail@gmail.com</li>
                    <li><span>Skype:</span> mySkypeAcc</li>
                </ul>
                <div className="logo logo--bottom">&#60; &#8260; &#62;</div>
            </footer>
        );
    }
}

export default Footer;
