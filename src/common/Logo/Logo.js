import React from 'react';
import './Logo.css';

function Logo (props) {
    return (
        <div className={props.className}>
            <p>
                &#60; &#8260; &#62;
            </p>
        </div>
    );
}

export default Logo;
