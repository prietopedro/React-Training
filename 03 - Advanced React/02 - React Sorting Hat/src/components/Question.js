import React, { Component } from 'react'

export default class Question extends Component {
    constructor(){
        super();
        this.state = {
            formTotal: 0
        }
    }
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({formTotal: e.target.value})
    }
    componentDidUpdate(previousProps, previousState){
        if(previousState.formTotal !== this.state.formTotal){
            this.props.updateSelection(this.props.index,this.state.formTotal)
        }
    }
    render() {
        return (
            <form>
                <label> {this.props.question.question}
                    <select onChange={this.changeHandler}>
                        <option value="">Please Select One</option>
                        <option value="1">{this.props.question.a}</option>
                        <option value="2">{this.props.question.b}</option>
                        <option value="3">{this.props.question.c}</option>
                        <option value="4">{this.props.question.d}</option>
                    </select>
                </label>
            </form>
        )
    }
}
