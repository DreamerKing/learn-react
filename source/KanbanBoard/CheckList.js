/**
 * Created by DK on 2016/12/8.
 */

import React, {Component, PropTypes} from 'react';

class CheckList extends Component {

    handleClick(text){
        this.refs.myTextInput.focus();
        console.log(text);
        }

    checkInputKeyPress(evt) {
        if(evt.key === "Enter") {
            this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
            evt.target.value = '';
        }
    }
    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li className="checklist-task" key={'task' + taskIndex}>
                <input type="checkbox"
                       checked={task.done}
                       onChange={
                           this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
                       } />
                {task.name}
                <a href="#"
                   className="checklist-list-remove"
                   onClick={
                       this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)
                   } />
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input  type="text"
                        ref="myTextInput"
                        className="checklist-task-add-task"
                        onKeyPress={this.checkInputKeyPress.bind(this)} />
                <input  type="button"
                        value="Focus the text input"
                        onClick={ this.handleClick.bind(this, "dk")} />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default CheckList;