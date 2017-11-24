import React from 'react';
import './Contacts.css';
import ContactDetails from './ContactDetails/ContactDetails';
import ContactForm from './ContactForm/ContactForm';

function Contacts () {
    return (
        <section className="content" id="contacts">
            <h2>Contact</h2>
            <div className="contacts">
                <ContactDetails />
                <ContactForm />
            </div>
        </section>
    );
}

export default Contacts;
