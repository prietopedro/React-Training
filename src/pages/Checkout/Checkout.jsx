import React from 'react'
import "./checkout.styles.scss"

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems,selectCartTotal} from "../../redux/Cart/CartSelectors"

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import StripeButton from "../../components/StripeButton/StripeButton"

function Checkout({cartItems,total}) {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} item={cartItem} />
            )}
            <div className="total"><span>TOTAL : ${total}</span></div>
            <div className="test-warning">*Please use the following test credit card for payments 
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV:123
            </div>
            <StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout)