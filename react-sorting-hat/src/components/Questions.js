import React, { Component } from 'react'
import Question from "./Question"

export default class Questions extends Component {
    render() {
        return (
            <div>
            {this.props.questions.map((question,index)=>{
                return <Question key={index} question={question} />
            })}
            </div>
        )
    }
}
