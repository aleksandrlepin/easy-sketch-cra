import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header.js';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Contacts from './Contacts/Contacts.js';
import Footer from './Footer/Footer.js';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <About />
                <Skills />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default App;
