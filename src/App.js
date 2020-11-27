import logo from './logo.svg';
import './App.scss';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="header-inner">
					<a href="/" id="logo">Scamazon.</a>
				</div>
			</header>
			<main>
				<div className="grid">
					<div className="card">
						<a href="">
							<div className="card-image-wrapper">
								<div className="card-image" style={{backgroundImage: "url(./images/gameboy.jpg)"}}></div>
							</div>
							<div className="card-text-wrapper">
								<div className="card-text">
									<span className="card-title">Yellow Gameboy</span>
									<span className="card-price">$72.00</span>
								</div>
							</div>
						</a>
					</div>
					<div className="card">
						<a href="">
							<div className="card-image-wrapper">
								<div className="card-image" style={{backgroundImage: "url(./images/gameboy.jpg)"}}></div>
							</div>
							<div className="card-text-wrapper">
								<div className="card-text">
									<span className="card-title">Yellow Gameboy</span>
									<span className="card-price">$72.00</span>
								</div>
							</div>
						</a>
					</div>
					<div className="card">
						<a href="">
							<div className="card-image-wrapper">
								<div className="card-image" style={{backgroundImage: "url(./images/gameboy.jpg)"}}></div>
							</div>
							<div className="card-text-wrapper">
								<div className="card-text">
									<span className="card-title">Yellow Gameboy</span>
									<span className="card-price">$72.00</span>
								</div>
							</div>
						</a>
					</div>
					<div className="card">
						<a href="">
							<div className="card-image-wrapper">
								<div className="card-image" style={{backgroundImage: "url(./images/gameboy.jpg)"}}></div>
							</div>
							<div className="card-text-wrapper">
								<div className="card-text">
									<span className="card-title">Yellow Gameboy</span>
									<span className="card-price">$72.00</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default App;
