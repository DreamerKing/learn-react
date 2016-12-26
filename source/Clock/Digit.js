/* *
 * Features:时钟数字组件
 * Create Time: 2016-12-26
 * Author: DreamerKing
 * Email: dreamingking@live.cn
 * */

import React, { Component, PropTypes } from 'react';

class Digit extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value;
    }

    render() {
        let digitStyle = {
            display: 'inline-block',
            fontSize: 20,
            padding: 10,
            margin: 5,
            background: '#eee'
        };
        let displayValue;

        if(this.props.value < 10) {
            displayValue = '0' + this.props.value;
        } else {
            displayValue = this.props.value;
        }

        return (
            <div style={digitStyle}>{displayValue}</div>
        );

    }
}

Digit.propTypes = {
    value: PropTypes.number.isRequired
}

export default Digit;
