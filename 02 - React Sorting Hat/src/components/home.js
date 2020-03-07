import React, { Component } from 'react'

export default class Home extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/questions")
    }
    
    render() {
        return (
            <div>
                <h1>Welcome Stranger!</h1>
                <h3>Click Below To See Which House You Belong To!</h3>
                <button onClick={this.onSubmit}>Sort Hat</button>
            </div>
        )
    }
}
