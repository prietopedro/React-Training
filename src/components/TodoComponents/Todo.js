import React, { Component } from 'react'
import "./Todo.css"
import {TodoContainers} from "../../style"

export default class Todo extends Component {
    render() {
        return (
            <TodoContainers className={(this.props.todo.completed === true) ? "underline" : null} onClick={() => this.props.isCompleted(this.props.todo.id)}>
               {this.props.todo.task} 
            </TodoContainers>
        )
    }
}
