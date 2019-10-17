import React, {Component} from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import styled from "styled-components";
import {getTasks} from "../actions/tasks.action";
import {connect} from "react-redux";
import axios from 'axios';

const Application = styled.section`
    display: flex;
    flex-direction: column;
    width: 800px;
    justify-content: center;
    align-items: center;
`;

class App extends Component {
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5`)
            .then(res => {
                // console.log(1, res.data);
                this.props.getTasks(res.data)
            })
    }

    render() {
        return (
            <Application>
                <AddTask/>
                <TaskList/>
            </Application>
        );
    }
}

// export default App;
const mapStateToProps = store => {
    // console.log(store);
    return {
        // tasks: store.tasks.tasks
    }
};

const mapDispatchToProps = dispatch => ({
    getTasks: req => dispatch(getTasks(req))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
