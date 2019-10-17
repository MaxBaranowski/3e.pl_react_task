import React, {Component} from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  min-width: 500px;
`;


class Task extends Component {
    render() {
        // console.log(this.props)
        return (
            <Wrapper>
                <small>{this.props.id}</small>
                <h1>{this.props.text}</h1>
                <small>{this.props.completed ? "completed" : "uncopmleted"}</small>
                <button onClick={this.props.toggle}>Change status</button>
                <button onClick={this.props.remove}>x</button>
            </Wrapper>
        );
    }
}

export default Task;
