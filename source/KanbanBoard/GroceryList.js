/**
 * Created by DK on 2016/12/8.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class GroceryList extends Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1" name="Bread"/>
                <ListItem quantity="6" name="Eggs"/>
                <ListItem quantity="2" name="Milk"/>
            </ul>
        )
    }
}

class ListItem extends Component {
    render () {
        return (
            <li>
                {this.props.quantity} X {this.props.name}
            </li>
        )
    }
}

export default GroceryList;

ReactDOM.render(<GroceryList/>, document.getElementById("root"));