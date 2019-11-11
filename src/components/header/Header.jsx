import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase"
import { connect } from 'react-redux'

import CartDropDown from '../CartDropdown/CartDropdown'
import CartIcon from "../CartIcon/CartIcon"

function Header({ currentUser , hidden }) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <NavLink className='option' exact to='/'>HOME</NavLink>
                <NavLink className='option' exact to='/shop'>SHOP</NavLink>
                <NavLink className='option' exact to='/contact'>CONTACT</NavLink>
                {
                    currentUser ? <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> : <NavLink to="/signin">SIGN IN</NavLink>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header)
