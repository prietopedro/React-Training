import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { connect } from "react-redux"
import {toggleCartHidden} from "../../redux/Cart/CartActions"


function CartIcon({toggleCartHidden}) {
    return (
        <div onClick={()=>toggleCartHidden()}className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default connect(null,{toggleCartHidden})(CartIcon)
