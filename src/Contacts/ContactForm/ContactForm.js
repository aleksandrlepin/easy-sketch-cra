import React from 'react';
import ReactDOM from 'react-dom';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor (props) {
        super(props);
        this.HandleClick = this.HandleClick.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    HandleClick (event) {
        console.log('username: ', ReactDOM.findDOMNode(this.refs.inputUser).value);
        console.log('e-mail: ', ReactDOM.findDOMNode(this.refs.inputEmail).value);
        console.log('message: ', ReactDOM.findDOMNode(this.refs.inputMsg).value);
    }
    HandleSubmit (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render () {
        return (
            <form className="contacts__message" action="" method="post" onSubmit={this.HandleSubmit}>
                <input ref='inputUser' type="text" name="user" defaultValue='' placeholder="Name" />
                <input ref='inputEmail' type="email" name="email" defaultValue='' placeholder="Email" />
                <textarea ref='inputMsg' name="msg" defaultValue='' placeholder="Send a message"></textarea>
                <div className="btn-holder">
                    <button type="button" name="button" onClick={this.HandleClick}>Send</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
