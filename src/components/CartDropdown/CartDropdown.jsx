import React from 'react'
import CustomButton from "../CustomButton/CustomButton"
import "./cart-dropdown.styles.scss"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartitems} from "../../redux/Cart/CartSelectors"

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {cartItems.map(item =>(<CartItem key={item.id} item={item} />))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartitems(state)
})
export default connect(mapStateToProps)(CartDropdown)
