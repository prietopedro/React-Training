import React, { Component } from 'react'
import {CardContainer} from "./styled"

import User from "./User"

export default class Users extends Component {
    render() {
        return (
            <CardContainer>
                {this.props.users.map((user,i)=><User key={i} user={user} />)}
            </CardContainer>
        )
    }
}
