import React from 'react'
import "./checkout-item.styles.scss"
import {connect} from "react-redux"

import {removeItemFromCart,addItem,removeItem} from "../../redux/Cart/CartActions"

function CheckoutItem({item,removeItemFromCart,addItem,removeItem}) {
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={item.imageUrl} alt=""/>
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div onClick={()=>removeItem(item)} className="arrow">&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div onClick={()=>addItem(item)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={()=>removeItemFromCart(item)}>&#10005;</div>
        </div>
    )
}

export default connect(null,{removeItemFromCart,addItem,removeItem})(CheckoutItem)