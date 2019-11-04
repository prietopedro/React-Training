import React,{ useState } from "react"
import ProductContext from "./ProductContext"
import data from '../data';

const ProductState = (props) => {
    const [products] = useState(data);
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



    return (
        <ProductContext.Provider value={{
            products,
            cart,
            addItem,
            removeItem
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;