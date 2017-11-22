import React, {Component} from 'react';
import './Skills.css';
import Level from './Level/Level.js';
// import data from '../data/data.js';

class Skills extends React.Component {
    // constructor (props) {
    //     super (props);
    //     {name: this.props.name;
    //     level: this.props.level}
    // }
    render () {
        let listItems = this.props.data.map((item, i) => {
            return (
                <li className="skills__item">
                    <span>{item.name}</span>
                    <div className="level">
                        <Level level={i} />
                    </div>
                </li>
            );
        });
        console.log('props = ', this.props.data);

        // let listItems = [];
        // for (let i = 0; i < data.length; i++) {
        //     listItems.push(
        //         <li className="skills__item">
        //             <span>{data[i].name}</span>
        //             <div className="level">
        //                 <Level level={i} />
        //             </div>
        //         </li>
        //     );
        // }
        return (
            <section className="content">
                <h2>Skills</h2>
                <ul className="skills">{listItems}</ul>
            </section>
        );
    }
}

export default Skills;
