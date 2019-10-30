import React, { Component } from 'react'
import {NavContainer, Logo} from "./styled"
import {Link} from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <NavContainer>
                <Link style={{textDecoration: "none", color: "white"}} to="/"><Logo>GITHUB PROFILES</Logo></Link>
            </NavContainer>
        )
    }
}
