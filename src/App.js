import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';

export default class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
            </div>
        );
    }
}
