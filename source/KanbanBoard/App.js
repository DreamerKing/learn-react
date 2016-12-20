import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EidtCard from './EditCard';
import NewCard from './NewCard';

/*let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: true
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];*/



render((<Router history={hashHistory}>
        <Route component={KanbanBoardContainer}>
            <Route path="/" component={KanbanBoard}>
                <Route path="new" component={NewCard} />
                <Route path="edit/:card_id" component={EidtCard}></Route>
            </Route>
        </Route>
        </Router>
), document.getElementById('root'));
