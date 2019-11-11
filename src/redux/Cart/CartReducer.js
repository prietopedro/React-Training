import {TOGGLE_CART_HIDDEN,ADD_ITEM,REMOVE_ITEM_FROM_CART,REMOVE_ITEM} from "./CartActions"
import {addItemToCart , removeItemFromCart, removeItem} from "./CartUtils"

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState , action) => {
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        case REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            }
        default:
            return state
    }
}

export default cartReducer