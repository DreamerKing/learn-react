/**
 * Created by DK on 2016/12/26.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ContactApp from './components/ContactApp';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="contacts" component={ContactApp} />
    </Route>
);
