import React,{useContext, useEffect} from 'react';
import {CartContext} from '../context/Contexts'

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart , getCartTotal } = useContext(CartContext)

	useEffect(()=>{
		localStorage.setItem("Items",JSON.stringify(cart))
	},[cart])

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
