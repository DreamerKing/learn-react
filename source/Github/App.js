/**
 * Created by DK on 2016/12/19.
 */

import React, { Component, PropType } from 'react';
import { render } from 'react-dom';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentWillMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        })
    }

    render() {
        var Child;
        switch (this.state.route) {
            case '/about' : Child = About; break;
            case '/repos' : Child = Repos; break;
            default:        Child = Home;
        }

        return (
            <div>
                <header>App</header>
                <menu>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/repos">Repos</a></li>
                </menu>
                <Child />
            </div>
        )

    }
}

export default App;

render(<App/>, document.getElementById('root'));
