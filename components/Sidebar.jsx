import React from 'react';
import FontAwesome from 'react-fontawesome';

class Sidebar extends React.Component {
    componentWillMount() {
        this.setState({
            name: "",
            phone_number: "",
            address: ""
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createContact(this.state)
    }
    
    handleChange(data) {
        let state = this.state;
        let name = data.target.name;
        state[name] = data.target.value;
        this.setState(state);
        
    }
    
    render() {
        return (
            <div id="sidebar">
                <h1 id="search-text">
                    Phone Book
                </h1>
                <FontAwesome name="book" id="bookicon" size="4x" />
                <form id="contactForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Name" name="name" value={this.props.name} onChange={this.handleChange.bind(this)} />
                    <input type="text" placeholder="Phone Number" name="phone_number" value={this.props.phone_number} onChange={this.handleChange.bind(this)} />
                    <input type="text" placeholder="Address" name="address" value={this.props.address} onChange={this.handleChange.bind(this)} />
                    <button type="submit">Add Contact</button>
                </form>
            </div>
        );
    }
}

export default Sidebar;