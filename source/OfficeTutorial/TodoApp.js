/**
 * Created by DK on 2017/2/20.
 */
import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items = {this.state.items} removeItem={ this.handleRemove }/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <button>{`Add # ${this.state.items.length + 1}`}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((preState) => ({
            items: preState.items.concat(newItem),
            text: ''
        }));
    }

    handleRemove(index) {
        console.log("Remove:", index);
        var preState = this.state.items;
        preState && preState.splice(index,1);
        this.setState({
            items: preState
        });
    }

}

export default TodoApp;

class TodoList extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={item.id}>{item.text} <span onClick={() => this.props.removeItem(index)}>X</span></li>
                ))}
            </ul>
        );
    }
}

































