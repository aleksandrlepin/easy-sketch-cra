import React, {Component} from 'react';
import data from './data.js';
import './Skills.css';

class LevelDiv extends React.Component {
    render () {
        let levelDiv = [];
        for (let j = 0; j < 11; j++) {
            if (j <= data[this.props.level].level) {
                levelDiv.push(
                    <div className="level__item level__item--dark"></div>
                );
            } else {
                levelDiv.push(
                    <div className="level__item"></div>
                );
            }
        }
        return (
            <div className="level">{levelDiv}</div>
        );
    }
}

class Skills extends React.Component {
    render () {
        let listItems = [];
        for (let i = 0; i < data.length; i++) {
            listItems.push(
                <li className="skills__item">
                    <span>{data[i].name}</span>
                    <div className="level">
                        <LevelDiv level={i} />
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
