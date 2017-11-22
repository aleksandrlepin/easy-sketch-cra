import React, {Component} from 'react';
import './Skills.css';
import Level from './Level/Level.js';

class Skills extends React.Component {
    render () {
        const listArr = this.props.data.map((item, i) => {
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
            <section className="content">
                <h2>Skills</h2>
                {ul}
            </section>
        );
    }
}

export default Skills;
