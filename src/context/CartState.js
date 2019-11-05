import React,{ useState } from "react"
import {CartContext} from "./Contexts"

const CartState = (props) => {
    const [cart, setCart] = useState(()=>{
        if(localStorage.getItem("Items")){
            return JSON.parse(localStorage.getItem("Items"))
        }
        return [];
    });  

    
    const addItem = item => {
        setCart([...cart, item])
    };
    
    
    const removeItem = id => {
        setCart(cart.filter(product => product.id !== id))
    };

    const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};



    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            getCartTotal
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState