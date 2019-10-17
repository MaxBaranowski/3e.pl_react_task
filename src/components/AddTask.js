import React from 'react';
import {addTask} from "../actions/tasks.action";
import {connect} from "react-redux";

const AddTask = (props) => {
    const {current, max} = props.tasks;
    const {addTask} = props;

    let textInput = React.createRef();

    let onSubmit = (e) => {
        e.preventDefault();
        // console.log(textInput.current.value);
        let text = textInput.current.value.trim();
        if (text) {
            addTask(text);
            textInput.current.value = '';
        }
    };


    return (
        <div>
            <h1>Create new task</h1>
            <form onSubmit={onSubmit}>
                <input type="text" ref={textInput}/>
                <button type="submit">Add Task</button>
            </form>
            <small>You can create max {max} tasks, {max - current} lefts. </small>
        </div>
    );
};


const mapStateToProps = store => {
    // console.log(store);
    return {
        tasks: store.tasks
    }
};

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTask(task))
    // removeTask: task => dispatch(removeTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
