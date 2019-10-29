import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return (
            <form>
                <label> {this.props.question.question}
                    <select>
                        <option value="">Please Select One</option>
                        <option value="">{this.props.question.a}</option>
                        <option value="">{this.props.question.b}</option>
                        <option value="">{this.props.question.c}</option>
                        <option value="">{this.props.question.d}</option>
                    </select>
                </label>
            </form>
        )
    }
}
