import React from 'react'
import CustomButton from "../CustomButton/CustomButton"
import "./cart-dropdown.styles.scss"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/Cart/CartSelectors"
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/Cart/CartActions"

function CartDropdown({cartItems,history,toggleCartHidden}) {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {cartItems.length ? cartItems.map(item =>(<CartItem key={item.id} item={item} />)) : <span className='empty-message'>Your cart is empty</span>}
            </div>
           <CustomButton onClick={()=>{toggleCartHidden();history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps,{toggleCartHidden})(CartDropdown))
