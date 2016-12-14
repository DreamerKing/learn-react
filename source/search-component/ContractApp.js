/**
 * Created by DK on 2016/12/14.
 */

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ContractApp extends Component {

    constructor() {
        super();
        this.state = {
            filterText: ''
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText = {this.state.filterText}
                            onUserInput = {this.handleUserInput.bind(this)} />
                <ContractList   contracts = { this.props.contracts }
                                filterText={this.state.filterText} />
            </div>
        )
    }
}

ContractApp.propTypes = {
    contracts: PropTypes.arrayOf(PropTypes.object)
}

export default ContractApp;


class SearchBar extends Component {

    handleChange(event) {
        this.props.onUserInput(event.target.value);
    }

    render() {
        return <input   type="search"
                        placeholder="search"
                        value={this.props.filterText}
                        onChange = {this.handleChange.bind(this)} />
    }
}

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

class ContractList extends Component {
    render() {
        let filteredContracts = this.props.contracts.filter(
            (contract) => contract.name.indexOf(this.props.filterText) !== -1
        );
        return (
            <ul>
                {filteredContracts.map(
                    (contract) => <ContractItem key={contract.email}
                                            name={contract.name}
                                            email={contract.email} />
                )}
            </ul>
        )
    }
}

ContractList.propTypes = {
    contracts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired
}

class ContractItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContractItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}


// render(<ContractApp contracts={contracts}/>, document.getElementById('root'));

