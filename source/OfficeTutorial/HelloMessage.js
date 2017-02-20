/**
 * Created by DK on 2017/2/14.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloMessage extends Component {
    render () {
        return <div>Hello { this.props.name }!</div>
    }
}

render(<HelloMessage name="DreamerKing"/>, document.getElementById('root'));
