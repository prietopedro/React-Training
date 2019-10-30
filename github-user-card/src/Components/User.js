import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Card,Img, Username, Btn} from "./styled"

export default class User extends Component {
    render() {
        return (
            <Card>
                <Username>{this.props.user.login}</Username>
                <Img src={this.props.user.avatar_url} alt=""/>
                <Btn to={`/${this.props.user.login}`}>See More</Btn>
            </Card>
        )
    }
}
