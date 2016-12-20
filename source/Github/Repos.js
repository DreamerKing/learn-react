/**
 * Created by DK on 2016/12/19.
 */

import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router';

class Repos extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            repositories: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/pro-react/repos')
            .then((response) => {
                console.log(response,"dk");
                if(response.ok){
                    response.json()
                } else {
                    throw new Error("Server response wasn't OK");
                }
            })
            .then((responseData) => {
                this.setState({repositories: responseData});
            })
            .catch((error) => {
                console.log(this.context.router,"dk");
                this.context.router.pushState(null, '/error');
            });
    }

    render() {
        let repos = this.state.repositories.map((repo) => {
            return (
                <li key={repo.id}>
                    <Link to={"/repo/" + repo.name} > {repo.name} </Link>
                </li>
            )
        });
        let child = this.props.children && React.cloneElement(this.props.children,
                { repositories: this.state.repositories }
            );
        return (
            <div>
                <h1>Github Repos</h1>
                <ul>
                    {repos}
                </ul>
                {child}
            </div>
        );
    }
}

export default Repos;
