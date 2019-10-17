import React, {Component} from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    min-width: 500px;
    padding: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        border-color: #8bc34a;
    }
  
    .number{
        flex: 1;
        font-size: 16px;
    }
    
    h1{
        flex: 12;
        margin: 5px 0; 
    }
    
    .completed{
        color: #8bc34a;
        color: #8bc34a;
        font-weight: bold;
        font-size: 24px;
        flex:1;
    }
    
    .remove{
        border: none;
        right: 0px;
        font-size: 17px;
    }
`;


class Task extends Component {
    render() {
        // console.log(this.props)
        return (
            <Wrapper onClick={this.props.toggle}>
                <small className="number">N. {this.props.id}</small>
                {this.props.completed &&
                    <small className="completed">&#10003;</small>
                }
                <h1>{this.props.title}</h1>
                {/*<button onClick={this.props.toggle}>Change status</button>*/}
                <button className="remove" onClick={this.props.remove} disabled={!this.props.completed}>&#10060;</button>
            </Wrapper>
        );
    }
}

export default Task;
