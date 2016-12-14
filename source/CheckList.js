/**
 * Created by DK on 2016/12/8.
 */

import React, {Component, PropTypes} from 'react';

class CheckList extends Component {

    handleClick(text){
        this.refs.myTextInput.focus();
        console.log(text);
        }

    render() {
        let tasks = this.props.tasks.map((task, index) => (
            <li className="checklist-task" key={'task'+index}>
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist-list-remove" />
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input  type="text"
                        ref="myTextInput"
                        className="checklist-task-add-task"
                />
                <input  type="button"
                        value="Focus the text input"
                        onClick={ this.handleClick.bind(this, "dk")}
                />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;