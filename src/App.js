import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductState from './context/ProductState'
import CartState from './context/CartState'

function App() {
	return (
		<div className="App">
			<ProductState>
				<CartState>
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</CartState>
			</ProductState>
		</div>
	);
}

export default App;
