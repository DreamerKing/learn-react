/**
 * Created by DK on 2017/2/14.
 */
import React, { Component, PropTypes } from 'react';

class HelloMessage extends Component {

    static PropTypes = {
        name: PropTypes.string.isRequired
    }

    render () {
        return <div>Hello { this.props.name }!</div>
    }
}

export default HelloMessage;
