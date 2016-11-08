import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <li>
                <h3 className="contact-name">{this.props.contact.name}</h3>
                <p className="number">{this.props.contact.phone_number}</p>
                <p className="address">{this.props.contact.address}</p>
            </li>
        );
    }
}

export default Contact;