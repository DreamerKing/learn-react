/**
 * Created by DK on 2016/12/26.
 */

import React, { Component, PropTypes } from  'react';
import fetch from 'isomorphic-fetch';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactApp extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            contacts: this.props.initialData || [],
            filterText: ''
        }
    }

    componentDidMount() {
        if(!this.props.initialData) {
            ContactApp.requestInitialData().then(contacts => {
                this.setState({contacts});
            });
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm});
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                            onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contracts={this.state.contacts}
                             filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactApp.propTypes = {
    initialData: PropTypes.any
}

ContactApp.requestInitialData = () => {
    return fetch('http://localhost:3000/test.json')
        .then((response) => response.json());
};

export default ContactApp;
