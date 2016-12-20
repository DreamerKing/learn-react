/**
 * Created by DK on 2016/12/19.
 */

import React, { Component, PropType } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory , IndexRoute, Link } from 'react-router';

import About from './About';
import Home  from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import ServerError from './ServerError';


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
        return (
            <div>
                <header>App</header>
                <menu>
                    <li><Link href="#/about" activeClassName='active'>About</Link></li>
                    <li><Link href="#/repos" activeClassName='active'>Repos</Link></li>
                </menu>
                {this.props.children}
            </div>
        )

    }
}

export default App;

render((
    <Router  history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} title="About us"/>
            <Route path="repos" component={Repos}>
                <Route path="/repo/:repo_name" component={RepoDetails}/>
            </Route>
            <Route path="error" component={ServerError} />
        </Route>
    </Router>
), document.getElementById('root'));
