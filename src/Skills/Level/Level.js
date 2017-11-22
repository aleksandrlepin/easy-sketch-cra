import React, {Component} from 'react';
import './Level.css';

class Level extends React.Component {
    render () {
        console.log('level', this.props);

        let level = [];
        for (let j = 0; j < 11; j++) {
            if (j <= this.props.data.level) {
                level.push(
                    <div className="level__item level__item--dark" key={j}></div>
                );
            } else {
                level.push(
                    <div className="level__item" key={j}></div>
                );
            }
        }
        return (
            <div className="level">{level}</div>
        );
    }
}

export default Level;
