import React from 'react';
import './Footer.css';
import FooterContact from './FooterContact/FooterContact'
import Logo from '../common/Logo/Logo';

function Footer () {
    return (
        <footer id="footer">
            <ul>
                <FooterContact type="Mobile:" contact=" +38066-66-66-666"/>
                <FooterContact type="Email:" contact=" mail@gmail.com"/>
                <FooterContact type="Skype:" contact=" mySkypeAcc"/>
            </ul>
            <Logo className="logo logo--bottom" />
        </footer>
    );
}

export default Footer;
