/**
 * Created by DK on 2017/2/14.
 */
import React, { Component, PropTypes } from 'react';

class HelloMessage extends Component {

    static PropTypes = {
        name: PropTypes.name.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hello { this.props.name }!</div>
    }
}

/*HelloMessage.PropTypes = {
    name: PropTypes.string.isRequired
}*/

export default HelloMessage;
