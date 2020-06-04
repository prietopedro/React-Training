export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN"
export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const toggleCartHidden = () => ({type:TOGGLE_CART_HIDDEN})

export const addItem = (item) => ({type:ADD_ITEM , payload:item})

export const removeItemFromCart = item => ({type:REMOVE_ITEM_FROM_CART, payload: item})

export const removeItem = item => {
    if(item.quantity === 1){
        return {type: REMOVE_ITEM_FROM_CART , payload: item}
    } else {
        return {type:REMOVE_ITEM , payload: item}
    }
}