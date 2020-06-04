export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItemToAdd.id === cartItem.id);
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    return [...cartItems , {...cartItemToAdd , quantity: 1}]
}

export const removeItemFromCart = (cartItems,itemToRemove) => {
    return cartItems.filter(item=>item.id !== itemToRemove.id)
}

export const removeItem = (cartItems,itemToRemove) => {
    return cartItems.map(item=>{
        if(item.id === itemToRemove.id){
            return {...itemToRemove,quantity: itemToRemove.quantity - 1}
        } else {
            return item
        }
    })
}