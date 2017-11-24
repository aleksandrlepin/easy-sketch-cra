import React, { Component } from 'react';

import data from './data/data';

import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <About />
                <Skills data={data} />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default App;
