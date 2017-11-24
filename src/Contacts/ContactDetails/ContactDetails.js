import React from 'react';
import './ContactDetails.css';

class ContactDetails extends React.Component {
    render () {
        return (
            <ul>
                <li><span>Phone number:</span></li>
                <li>+38066-66-66-666</li><br />
                <li><span>Email:</span></li>
                <li>mail@gmail.com</li><br />
                <li><span>Skype:</span></li>
                <li>mySkypeAcc</li><br />
            </ul>
        );
    }
}

export default ContactDetails;
