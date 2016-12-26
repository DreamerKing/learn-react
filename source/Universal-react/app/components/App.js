/**
 * Created by DK on 2016/12/26.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class  App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>{''}
                    <link to="/contacts">Contacts</link>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
