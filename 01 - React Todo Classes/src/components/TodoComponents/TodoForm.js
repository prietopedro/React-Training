import React, { Component } from 'react'
import {FormContainer, Input, Btn} from "../../style"

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem(this.state.task);
        this.setState({task: ""})
    }
    render() {
        return (
                <FormContainer>
                    <Input type="text" onChange={this.handleChange} value={this.state.task} placeholder="Add A Todo" />
                    <Btn onClick={this.handleSubmit}>Add Todo</Btn>
                    <Btn onClick={this.props.clearList}>Clear List</Btn>
                </FormContainer>
        )
    }
}
