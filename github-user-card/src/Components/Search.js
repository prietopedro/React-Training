import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        formValue : ""
    }
    onChangeHandler = (e) => {
        this.setState({formValue:e.target.value})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.formValue !== this.state.formValue){
            this.props.changeUser(this.state.formValue)
            console.log(this.state.formValue)
        }
    }

    render() {
        return (
            <form>
                <input type="text" name="username" placeholder="Search By Username" value={this.state.formValue} onChange={this.onChangeHandler} />
            </form>
        )
    }
}
