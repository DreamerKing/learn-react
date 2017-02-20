import React, { Component } from 'react';

class Timer extends Component {
    constructor(pros) {
        super(pros);
        this.state = { secondElapsed: 0 };
    }

    tick() {
        this.setState((preState) => ({
                secondElapsed: preState.secondElapsed + 1
        }));
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <div>Timer: { this.state.secondElapsed }</div>
    }

}

export default  Timer;
