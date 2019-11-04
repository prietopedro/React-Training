import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductState from './context/ProductState'

function App() {
	return (
		<div className="App">
			<ProductState>
				<Navigation />
				<Route exact path="/" component={Products} />
				<Route path="/cart" component={ShoppingCart} />
			</ProductState>
		</div>
	);
}

export default App;
