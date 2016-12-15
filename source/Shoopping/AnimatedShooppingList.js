/**
 * Created by DK on 2016/12/15.
 */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShooppingList extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {id: 1, name: 'Milk'},
                {id: 2, name: 'Yogurt'},
                {id: 3, name: 'Orange Juice'}
            ]
        }
    }

    handleChange(evt) {
        if(evt.key === "Enter") {
            let newItem = {id: Date.now(), name: evt.target.value};
            let newItems = this.state.items.concat(newItem);
            evt.target.value = '';
            this.setState({items: newItems});
        }
    }

    handleRemove(index){
        let newItems = this.state.items;
        newItems.splice(index,1);
        this.setState({item: newItems});
    }

    render() {
        let shoppingItems = this.state.items.map((item, index) => (
            <div key={item.id}
                 className="item"
                 onClick={this.handleRemove.bind(this, index)} >
                {item.name}
            </div>
        ));

        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}
                                        transitionAppear={true}
                                        transitionAppearTimeout={300} >
                {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text"
                       value={this.state.newItem}
                        onKeyDown={this.handleChange.bind(this)} />
            </div>
        )
    }
}

export default AnimatedShooppingList;

render(<AnimatedShooppingList/>, document.getElementById('root'));
