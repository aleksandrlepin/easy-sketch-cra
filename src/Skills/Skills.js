import React, {Component} from 'react';
import './Skills.css';
import data from '../data/data.js';
import Level from './Level/Level.js';

class Skills extends React.Component {
    render () {
        let listItems = [];
        for (let i = 0; i < data.length; i++) {
            listItems.push(
                <li className="skills__item">
                    <span>{data[i].name}</span>
                    <div className="level">
                        <Level level={i} />
                    </div>
                </li>
            );
        }
        return (
            <section className="content">
                <h2>Skills</h2>
                <ul className="skills">{listItems}</ul>
            </section>
        );
    }
}

export default Skills;
