import React from 'react'
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase"
import { connect } from 'react-redux'

import CartDropDown from '../CartDropdown/CartDropdown'
import CartIcon from "../CartIcon/CartIcon"

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from "../../redux/Cart/CartSelectors"
import { selectCurrentUser } from "../../redux/User/UserSelectors"


import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from "./HeaderStyles"

function Header({ currentUser , hidden }) {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink exact to='/'>HOME</OptionLink>
                <OptionLink exact to='/shop'>SHOP</OptionLink>
                <OptionLink exact to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropDown />}
        </HeaderContainer>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
