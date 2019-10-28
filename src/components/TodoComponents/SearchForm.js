import React, { Component } from 'react'
import {FormContainer,Input,Btn} from "../../style"

export default class SearchForm extends Component {
    constructor(){
        super();
        this.state = {
            task: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
        // this.props.search(this.state.task)
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.task)
    }
    render() {
        return (
                <FormContainer>
                    <Input type="text" onChange={this.handleChange} value={this.state.task} placeholder="Search" />
                    <Btn onClick={this.onSubmit}>Search</Btn>
                </FormContainer>
        )
    }
}
