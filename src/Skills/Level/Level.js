import React, {Component} from 'react';
import './Level.css';
import data from '../../data/data.js';

class Level extends React.Component {
    render () {
        let level = [];
        for (let j = 0; j < 11; j++) {
            if (j <= data[this.props.level].level) {
                level.push(
                    <div className="level__item level__item--dark"></div>
                );
            } else {
                level.push(
                    <div className="level__item"></div>
                );
            }
        }
        return (
            <div className="level">{level}</div>
        );
    }
}

export default Level;
