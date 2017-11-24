import React from 'react';
import './Level.css';

class Level extends React.Component {
    render () {
        let level = [];
        for (let i = 0; i < 11; i++) {
            if (i <= this.props.data.level) {
                level.push(
                    <div className="level__item level__item--dark" key={i}></div>
                );
            } else {
                level.push(
                    <div className="level__item" key={i}></div>
                );
            }
        }
        return (
            <div className="level">{level}</div>
        );
    }
}

export default Level;
