import React from 'react';
import {addTask} from "../actions/tasks.action";
import {connect} from "react-redux";
import styled from "styled-components";

const AddTaskTag = styled.section`
    h1{
        text-align: center;
    }
    
    form{
        display: flex;
        flex-direction: column;
        input{
            height: 30px;
            width: 450px;
            margin-bottom: 20px;
            padding-left: 5px;
            font-size: 16px;
        }
        button[type='submit']{
            width: 250px;
            border: 1px solid #8bc34a;
            height: 30px;
            background-color: #8bc34a;
            margin: 0 auto 20px auto;
            cursor: pointer;
            &:hover{
                box-shadow: 2px 1px 3px 0px #65962c;
                border-color: #65962c;
            }
        }
    }
    
    p{
        text-align: center;
    }
`;

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
        <AddTaskTag>
            <h1>Create new task</h1>
            <form onSubmit={onSubmit}>
                <input type="text" ref={textInput} disabled={current === max}/>
                <button type="submit" disabled={current === max}>Add Task</button>
            </form>
            {current === max &&
            <p>You cannot create more then 10 tasks</p>
            }
            <p>You can create max {max} tasks, {max - current} lefts. </p>
        </AddTaskTag>
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
