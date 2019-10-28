import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div onCLick={() => this.props.isCompleted(this.props.key)}>
               {this.props.todo.task} 
            </div>
        )
    }
}
