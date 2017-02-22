/**
 * Created by DK on 2017/2/22.
 */
import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);

    }

    render() {
        return (
            <div>
                <h1>Hello, React</h1>
                <FormateDate date={this.state.date}/>
            </div>
        )
    }
}

class FormateDate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return  <h2>It is {this.props.date.toLocaleDateString()} {this.props.date.getSeconds().toString()}</h2>
    }

}

export default Clock;
