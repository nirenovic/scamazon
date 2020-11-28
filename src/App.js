import logo from './logo.svg';
import './App.scss';
import data from './data';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="header-inner">
					<a href="/" id="logo">Scamazon.</a>
					<ul id="menu-bar">
						<li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
					</ul>
				</div>
			</header>
			<main>
				<div className="grid">
					{
						data.products.map(product => (
							<div key={product._id} className="card">
								<a href={`/product/${product._id}`}>
									<div className="card-image-wrapper">
										<div className="card-image" style={{backgroundImage: "url(" + product.image + ")"}}></div>
									</div>
									<div className="card-text-wrapper">
										<div className="card-text">
											<span className="card-title">{product.name}</span>
											<span className="card-price">${product.price}</span>
										</div>
									</div>
								</a>
							</div>
						))
					}
				</div>
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default App;
