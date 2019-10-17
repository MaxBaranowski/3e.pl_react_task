import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask, removeTask} from "../actions/tasks.action";

class App extends Component {
    render() {
        const {tasks} = this.props;
        return (
            <div>
                <pre>
                store: {JSON.stringify(tasks, null, 2)}
              </pre>
                <button onClick={this.props.addTask}>add</button>
                <button onClick={this.props.removeTask}>remove</button>
            </div>
        );
    }
}

const mapStateToProps = store => {
    // console.log(store);
    return {
        tasks: store.tasks
    }
};

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTask(task)),
    removeTask: task => dispatch(removeTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
