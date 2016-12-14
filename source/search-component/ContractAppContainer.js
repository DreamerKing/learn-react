/**
 * Created by DK on 2016/12/14.
 */
import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import ContractApp from './ContractApp';

class ContractAppContainer extends Component {

    constructor(){
        super();
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch('../data/test.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    contacts:responseData
                })
            })
            .catch((error) => {
                console.log("Error fetching and parsing data", error);
            });
    }

    render() {
        return <ContractApp contracts={this.state.contacts}/>
    };

}


export default ContractAppContainer;

render(<ContractAppContainer/>, document.getElementById('root'));