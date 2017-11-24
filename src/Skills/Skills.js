import React from 'react';
import './Skills.css';
import Level from './Level/Level';

function Skills (props) {
    const listArr = props.data.map((item, i) => {
        return (
            <li className="skills__item" key={i}>
                <span>{item.name}</span>
                <div className="level">
                    <Level data={item}/>
                </div>
            </li>
        );
    });

    const ul = (<ul className="skills">{listArr}</ul>);

    return (
        <section className="content" id="skills">
            <h2>Skills</h2>
            {ul}
        </section>
    );
}

export default Skills;
