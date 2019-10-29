import React, { Component } from 'react'
import Question from "./Question"

export default class Questions extends Component {
    constructor(){
        super();
        this.state = {
            question : {
                0: "0",
                1: "0",
                2: "0",
                3: "0",
                4: "0",
                5: "0"
            }
        }
    }
    onSubmit= (e) => {
        e.preventDefault();
        let values = Object.values(this.state.question)
        let total = values.reduce((total,current)=>{
            return total + Number(current)
        },0)
        this.props.getTotalPoints(total)
        this.props.history.push("/House")
        

    }

    updateSelection = (index,formTotal) => {
        this.setState({
            question: {...this.state.question, [index]: formTotal}
        })
    }
    render() {
        return (
            <div>
            {this.props.questions.map((q,index)=>{
                return <Question updateSelection={this.updateSelection} index={index} key={index} question={q} />
            })}
            <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}
