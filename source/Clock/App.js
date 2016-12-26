/* *
 * Features: 显示时钟
 * Create Time: 2016-12-26
 * Author: DreamerKing
 * Email: dreamingking@live.cn
 * */

import React, { Component } from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import Clock from './Clock';

class App extends Component {

    constructor() {
        super(...arguments);
        this.state = this.getTime();
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(this.getTime());
        }, 10);
    }

    getTime() {
        let now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            tenths: parseInt(now.getMilliseconds()/10)
        };
    }

    render() {
        let clocks = [];

        for (let i = 0; i < 200; i++) {
            clocks.push(
                <Clock  key={i}
                        hours={this.state.hours}
                       minutes={this.state.minutes}
                       seconds={this.state.seconds}
                       tenths={this.state.tenths} />
            )
        }

        return (
            <div>
                {clocks}
            </div>
        );
    }
}
Perf.start();
render(<App/>, document.getElementById('root'));
setTimeout(() => {
    Perf.stop();
    Perf.printWasted();
}, 2000);

// Perf.stop();
// Perf.printInclusive();
// Perf.printWasted();
