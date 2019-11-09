import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./header.styles.scss"
import { auth } from "../../firebase/firebase"

export default function Header({ currentUser }) {
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
            </div>
        </div>
    )
}
