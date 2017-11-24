import React from 'react';
import './AboutItem.css';

function AboutItem (props) {
    return (
        <article className={props.className}>
            {props.children}
        </article>
    );
}

export default AboutItem;
