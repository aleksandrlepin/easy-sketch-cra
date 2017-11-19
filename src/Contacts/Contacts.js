import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends React.Component {
    constructor (props) {
        super(props);
        this.state = {userValue: '', emailValue: '', msgValue: ''};
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);

    }
    HandleChange (event) {
        if (event.target.name === 'user') {
            this.setState({userValue: event.target.value});
        } else if (event.target.name === 'email') {
            this.setState({emailValue: event.target.value});
        } else if (event.target.name === 'msg') {
            this.setState({msgValue: event.target.value});
        }
    }
    HandleSubmit (event) {
        console.log('username: ', this.state.userValue);
        console.log('e-mail: ', this.state.emailValue);
        console.log('message: ', this.state.msgValue);
        event.preventDefault();
    }
    render () {
        return (
            <section className="content">
                <h2>Contact</h2>
                <div className="contacts">
                    <ul>
                        <li><span>Phone number:</span></li>
                        <li>+38066-66-66-666</li><br />
                        <li><span>Email:</span></li>
                        <li>mail@gmail.com</li><br />
                        <li><span>Skype:</span></li>
                        <li>mySkypeAcc</li><br />
                    </ul>
                    <form className="contacts__message" action="/" method="post" onSubmit={this.HandleSubmit}>
                        <input type="text" name="user" value={this.state.userValue} onChange={this.HandleChange} placeholder="Name" />
                        <input type="email" name="email" value={this.state.emailValue} onChange={this.HandleChange} placeholder="Email" />
                        <textarea name="msg" value={this.state.msgValue} onChange={this.HandleChange} placeholder="Send a message"></textarea>
                        <div className="btn-holder">
                            <button type="submit" name="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contacts;
