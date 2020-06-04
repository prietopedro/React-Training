import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { connect } from "react-redux"
import {toggleCartHidden} from "../../redux/Cart/CartActions"
import { selectCartItemsCount } from "../../redux/Cart/CartSelectors"
import { createStructuredSelector} from "reselect"


function CartIcon({toggleCartHidden , itemCount}) {
    return (
        <div onClick={()=>toggleCartHidden()}className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}


const mapStateToProps = state => createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps,{toggleCartHidden})(CartIcon)
