import logo from './logo.svg';
import './App.scss';
import Product from './components/Product';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
	const cart = useSelector(state => state.cart);
	const {cartItems} = cart;
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<div className="header-inner">
						<Link to="/" id="logo">Scamazon.</Link>
						<ul id="menu-bar">
							<li>
								<Link to="/cart" id="cart-link">
									<i class="fas fa-shopping-cart"></i>
									{cartItems.length > 0 && (
										<span>{cartItems.length}</span>
									)}
								</Link>
							</li>
							<li><Link to="" id="sign-in-link"><span>Sign in</span></Link></li>
						</ul>
					</div>
				</header>
				<main>
					<Route path="/" component={HomeScreen} exact></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/cart/:id?" component={CartScreen}></Route>
				</main>
				<footer>

				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
