import logo from './logo.svg';
import './App.scss';
import Product from './components/Product';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<div className="header-inner">
						<a href="/" id="logo">Scamazon.</a>
						{/* <ul id="menu-bar">
							<li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
						</ul> */}
					</div>
				</header>
				<main>
					<Route path="/" component={HomeScreen} exact></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
				</main>
				<footer>

				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
