/**
 * Created by DK on 2016/12/15.
 */
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

class ShoppingCart extends Component {
    render() {
        const style = {
            backgroundColor: '#FFFFFF'
        };

        return (
            <div className="shopping-cart"
                style={style}>
                Drag here to order!
            </div>
        );
    }
}