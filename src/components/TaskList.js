import React from 'react';
import {connect} from "react-redux"
import Task from "./Task";
import {changeTaskStatus, removeTask} from "../actions/tasks.action";


const TodoList = (props) => {

    let tasks = props.tasks;
    if (tasks && tasks.length) {
        return (
            <ul>
                {tasks.map(task => {
                        // console.log(task)
                        return (
                            <Task
                                key={task.id}
                                {...task}
                                toggle={() => props.changeTaskStatus(task.id)}
                                remove={() => props.removeTask(task.id)}
                            />
                        )
                    }
                )}
            </ul>
        )
    } else {
        return (
            <p>No tasks</p>
        )
    }
};

const mapStateToProps = store => {
    // console.log(store);
    return {
        tasks: store.tasks.tasks
    }
};

const mapDispatchToProps = dispatch => ({
    changeTaskStatus: task => dispatch(changeTaskStatus(task)),
    removeTask: task => dispatch(removeTask(task))
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
