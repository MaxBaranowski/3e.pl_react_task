import React, {Component} from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import styled from "styled-components";

const Application = styled.section`
display: flex;
    flex-direction: column;
    width: 800px;
    justify-content: center;
    align-items: center;
`;

class App extends Component {
    render() {
        // const {tasks} = this.props;
        return (
            <Application>
                <AddTask/>
                <TaskList/>
            </Application>
        );
    }
}
 export default App;
