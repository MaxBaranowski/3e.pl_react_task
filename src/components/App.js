import React, {Component} from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import styled from "styled-components";
import {connect} from "react-redux";

const Application = styled.section`
    display: flex;
    flex-direction: column;
    width: 800px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

class App extends Component {
    componentDidMount() {
        this.props.getTasks();
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
    getTasks: () => dispatch({type: "GET_TASKS"})
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
