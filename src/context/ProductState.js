import React,{ useState } from "react"
import {ProductContext} from "./Contexts"
import data from '../data';

const ProductState = (props) => {
    const [products] = useState(data);
    return (
        <ProductContext.Provider value={{
            products
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;