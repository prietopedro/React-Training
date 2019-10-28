import React, { Component } from 'react'
import {FormContainer,Input,Btn} from "../../style"

export default class SearchForm extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        // this.props.search(this.state.inputValue)
    }

    componentDidUpdate(previusProps, previousState){
        if(previousState.inputValue !== this.state.inputValue){
            this.props.search(this.state.inputValue)
        } else{
            return null
        }
    }
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.search(this.state.task)
    // }
    render() {
        return (
                <FormContainer>
                    <Input type="text" onChange={this.handleChange} value={this.state.inputValue} placeholder="Search" />

                </FormContainer>
        )
    }
}
