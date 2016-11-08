import React from 'react';
import Contact from './Contact.jsx';

class AllContacts extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }
    
    newSearch(event) {
        this.setState({
            search: event.target.value
        })
    }
    
    render() {
        let searchUp = this.props.contacts.filter(
            (contact) => {
                let name = contact.name.toLowerCase(); 
                return name.indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        
        return (
            <div id="contact-list">
                <div id="search">
                    <input type="text" value={this.state.search} onChange={this.newSearch.bind(this)} placeholder="Search Contacts" />
                </div>
                <ul id="list">
                    {searchUp.map((contact) => {
                        return <Contact contact={contact} />
                    })}
                </ul>
            </div>
        );
    }
}


export default AllContacts;