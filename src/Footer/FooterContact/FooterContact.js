import React from 'react';
import './FooterContact.css';

function FooterContact (props) {
    return (
        <li><span>{props.type}</span>{props.contact}</li>
    )
}


export default FooterContact;
